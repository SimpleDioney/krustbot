const saud = require('../functions/apresenta');
async function menu(message, client, callback){
    let nome = message.sender.pushname
    if(message.sender.pushname === undefined && message.sender.isBusiness === true){
        nome = message.sender.verifiedName;
    }
    let sauda = ''
    //DEFININDO QUAL MSG AUTO VAI
    saud.horas((callback) => {
        sauda = callback;
    })
    client.sendText(
        message.from,
        `*🕹️REDE KRUST🕹️*
\n${sauda} ${nome} para agilizar seu atendimento responda com o *Número* da opção desejada 
do Menu 🗒️:

*1*- 🎯 Ip & Port
*2*- 🛒 Comprar Vip
*3*- 📈 Status do Servidor
*4*- 🌎 Redes Sociais
*5*- 📜 Abrir um ticket`
    );
}
module.exports = {menu}