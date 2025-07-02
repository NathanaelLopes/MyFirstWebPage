const input = document.getElementById("ipUsuario");
const resultado = document.getElementById("infoIP");

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const ip = input.value.trim();

    if (!ip) {
      resultado.innerHTML = "<span style='color:red'>Digite um IP válido.</span>";
      return;
    }

    resultado.innerHTML = "Buscando informações...";

    fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,zip,isp,query`)
      .then(res => res.json())
      .then(data => {
        if (data.status === "fail") {
          resultado.innerHTML = `<span style="color:red">Erro: ${data.message}</span>`;
        } else {
          resultado.innerHTML = `
            <strong>IP:</strong> ${data.query} <br>
            <strong>País:</strong> ${data.country} <br>
            <strong>Região:</strong> ${data.regionName} <br>
            <strong>Cidade:</strong> ${data.city} <br>
            <strong>CEP:</strong> ${data.zip} <br>
            <strong>Provedor:</strong> ${data.isp}
          `;
        }
      })
      .catch(() => {
        resultado.innerHTML = "<span style='color:red'>Erro ao acessar a API.</span>";
      });
  }
});
