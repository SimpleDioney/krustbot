async function cvip(message, client, callback){
let nome = message.sender.pushname;
let id = message.sender.id;
client.sendText(message.from, `🛒Muito bem *${nome}* vejo que você está querendo comprar seu VIP, veja abaixo nossos vips

[1] VIP : 15,00
[2] VIP+ : 20,00
[3] MVP : 25,00
[4] MVP+ : 35,00
[5] CLASSIC : 40,00

Digite a opção *[1 a 5]* do vip que deseja comprar!`).then(sucesso => {
    const low = require('lowdb');
        const FileSync = require('lowdb/adapters/FileSync');
        const adapter = new FileSync('db/comprarvip.json');
        const db = low(adapter); 
        db.get('processo').push({
            id: id,
            parte: 1,
            vip: '',
            nick: '',
            valor: 0
        }).write();
})

}
module.exports = {cvip}

