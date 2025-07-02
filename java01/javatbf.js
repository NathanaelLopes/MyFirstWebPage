document.addEventListener('DOMContentLoaded', function() {
    const distritosSelect = document.getElementById('distritos');
    const previsaoContainer = document.getElementById('previsao-container');
    const loadingElement = document.getElementById('loading');
    const erroElement = document.getElementById('erro');
    const localNomeElement = document.getElementById('local-nome');
    const previsaoDiasElement = document.getElementById('previsao-dias');
    
    let distritosData = [];
    
    // Carrega a lista de distritos
    async function carregarDistritos() {
        try {
            const response = await fetch('https://api.ipma.pt/open-data/distrits-islands.json');
            if (!response.ok) {
                throw new Error('Falha ao carregar distritos');
            }
            const data = await response.json();
            distritosData = data.data;
            popularDropdown(distritosData);
        } catch (error) {
            console.error('Erro:', error);
            mostrarErro();
        }
    }
    
    // Popula o dropdown com os distritos
    function popularDropdown(distritos) {
        distritosSelect.innerHTML = '<option value="">Selecione uma localidade</option>';
        
        distritos.forEach(distrito => {
            const option = document.createElement('option');
            option.value = distrito.globalIdLocal;
            option.textContent = distrito.local;
            distritosSelect.appendChild(option);
        });
    }
    
    // Obtém a previsão para o distrito selecionado
    async function obterPrevisao(globalIdLocal) {
        try {
            mostrarLoading();
            esconderPrevisao();
            esconderErro();
            
            const response = await fetch(`https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`);
            if (!response.ok) {
                throw new Error('Falha ao carregar previsão');
            }
            const previsaoData = await response.json();
            
            mostrarPrevisao(previsaoData);
        } catch (error) {
            console.error('Erro:', error);
            mostrarErro();
        } finally {
            esconderLoading();
        }
    }
    
    // Mostra a previsão na página
    function mostrarPrevisao(previsaoData) {
        const distrito = distritosData.find(d => d.globalIdLocal == previsaoData.globalIdLocal);
        
        localNomeElement.textContent = distrito ? distrito.local : 'Localidade desconhecida';
        previsaoDiasElement.innerHTML = '';
        
        previsaoData.data.forEach(dia => {
            const diaElement = document.createElement('div');
            diaElement.className = 'dia-previsao';
            
            const data = new Date(dia.forecastDate);
            const dataFormatada = data.toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' });
            
            diaElement.innerHTML = `
                <h3>${dataFormatada}</h3>
                <div class="dia-info">
                    <span>Temperatura:</span>
                    <div>
                        <span class="temperatura temperatura-max">${dia.tMax}°C</span> / 
                        <span class="temperatura temperatura-min">${dia.tMin}°C</span>
                    </div>
                </div>
                <div class="dia-info">
                    <span>Prob. precipitação:</span>
                    <span>${dia.precipitaProb}%</span>
                </div>
                <div class="dia-info">
                    <span>Vento:</span>
                    <span>${dia.predWindDir} a ${dia.classWindSpeed} (${dia.classWindSpeedDaily})</span>
                </div>
                <div class="dia-info">
                    <span>Estado do tempo:</span>
                    <span class="weather-desc">${getWeatherDescription(dia.idWeatherType)}</span>
                </div>
            `;
            
            previsaoDiasElement.appendChild(diaElement);
        });
        
        previsaoContainer.classList.remove('hidden');
    }
    
    // Retorna a descrição do estado do tempo
    function getWeatherDescription(idWeatherType) {
        const descriptions = {
            1: 'Céu limpo',
            2: 'Céu pouco nublado',
            3: 'Céu parcialmente nublado',
            4: 'Céu muito nublado ou encoberto',
            5: 'Céu nublado por nuvens altas',
            6: 'Aguaceiros',
            7: 'Aguaceiros fracos',
            8: 'Aguaceiros fortes',
            9: 'Chuva',
            10: 'Chuva fraca',
            11: 'Chuva forte',
            12: 'Períodos de chuva',
            13: 'Períodos de chuva fraca',
            14: 'Períodos de chuva forte',
            15: 'Chuvisco',
            16: 'Neblina',
            17: 'Nevoeiro ou nuvens baixas',
            18: 'Neve',
            19: 'Trovoada',
            20: 'Aguaceiros e trovoada',
            21: 'Granizo',
            22: 'Geada',
            23: 'Chuva e neve',
            24: 'Neblina ou nevoeiro',
            25: 'Vento forte',
            26: 'Tempestade de areia',
            27: 'Tempestade de poeira',
            28: 'Vento com neve',
            29: 'Tempestade de neve'
        };
        
        return descriptions[idWeatherType] || 'Estado do tempo desconhecido';
    }
    
    // Funções auxiliares para mostrar/esconder elementos
    function mostrarLoading() {
        loadingElement.classList.remove('hidden');
    }
    
    function esconderLoading() {
        loadingElement.classList.add('hidden');
    }
    
    function mostrarErro() {
        erroElement.classList.remove('hidden');
    }
    
    function esconderErro() {
        erroElement.classList.add('hidden');
    }
    
    function esconderPrevisao() {
        previsaoContainer.classList.add('hidden');
    }
    
    // Event listener para mudança no dropdown
    distritosSelect.addEventListener('change', function() {
        if (this.value) {
            obterPrevisao(this.value);
        } else {
            esconderPrevisao();
        }
    });
    
    // Inicia o carregamento dos distritos
    carregarDistritos();
});