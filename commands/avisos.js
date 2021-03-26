async function avisos(message, client, callback) {
    const testador = require('../refresh');
    var louco = new testador
    louco.test();
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('db/enquete.json');
    const db = low(adapter);

   
        let idautor = message.sender.id;
        let valor = db.get('avisos').find({ id: idautor }).value()
        //console.log(valor)
        if (valor === undefined) {
            db.get('avisos').push({
                id: idautor,
                avisos: 1,
                nome: message.sender.pushname
            }).write()
        }
        if (valor != undefined) {
            if (valor.avisos === 1) {
                db.get('avisos').find({ id: idautor }).assign({ avisos: 2 }).write()
                client.sendText(message.from, `${message.sender.pushname} aviso *2/2* infelizmente como você não respeitou suas chances acabaram!`).then(async sucs => {
                    await client.removeParticipant(message.from, idautor);
                })

            }
            return;
        }

        client.sendText(message.from, `${message.sender.pushname} você está recebendo um aviso *1/2* Proximo é ban!`)
    
}
module.exports = { avisos }