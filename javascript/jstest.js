/*
Com base no código HTML apresentado, elabora um script JS,
que mostre a mensagem "Olá mundo" nos elementos de ID msg1 e msg2
quando se clica no botão
*/

/*document.getElementById('bot1').innerText= 'Clique Aqui';

document.getElementById('bot1').addEventListener('click', () => {
    document.getElementById('msg1').innerText= 'Olá Mundo';
    document.getElementById('msg2').innerText= 'Olá Mundo';
    document.body.appendChild(oMeuBotao);
});
*/


/*const oMeuBotao = document.createElement("button");
oMeuBotao.textContent = 'Clique aqui para Apagar';
oMeuBotao.id = 'omb';
const minhaDiv = document.createElement('div');
*/

const myDIV = document.createElement('div');
myDIV.id = 'xpto';
document.body.appendChild(myDIV);

const oMeuBotao = document.createElement('button');
oMeuBotao.textContent = 'Clique aqui para apagar';
document.getElementById('xpto').appendChild(oMeuBotao);
const titulo = document.getElementById('h001').style.color = 'green';

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => document.getElementById('h001').innerText = 'Ola Mundo',5000)
})
