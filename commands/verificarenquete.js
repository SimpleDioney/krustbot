async function verifienquete(message, client, callback) {
    if (message.from === '554384731221-1608328868@g.us') {

        const testador = require('../refresh');
        var louco = new testador
        louco.test();
        const low = require('lowdb');
        const FileSync = require('lowdb/adapters/FileSync');
        const adapter = new FileSync('db/enquete.json');
        const db = low(adapter);

        let simounao = message.body.toLowerCase();
        if (simounao === 'sim') {
            let idautor = message.sender.id;
            let javotou = db.get('membros').find({ id: idautor }).value()
            if (javotou != undefined) {
                client.sendText(message.from, `${message.sender.pushname} você já votou nessa enquete!`);
                return;
            }

            db.get('membros').push({
                id: idautor,
                javotou: "sim"
            }).write()

            client.sendText(message.from, `Muito bem ${message.sender.pushname} você votou como Sim!`);
            let qtdvotos = db.get('votos').find({ id: 3 }).value()
            let qtdv = qtdvotos.votosp;
            let somarvts = qtdv + 1;
            db.get('votos').find({ id: 3 }).assign({ votosp: somarvts }).write()

        }
        if (simounao === 'não') {

            let idautor = message.sender.id;
            let javotou = db.get('membros').find({ id: idautor }).value()
            if (javotou != undefined) {
                client.sendText(message.from, `${message.sender.pushname} você já votou nessa enquete!`);
                return;
            }

            db.get('membros').push({
                id: idautor,
                javotou: "sim"
            }).write()

            client.sendText(message.from, `Muito bem ${message.sender.pushname} você votou como Não!`);
            let qtdvotos = db.get('votos').find({ id: 3 }).value()
            let qtdv = qtdvotos.votosn;
            let somarvts = qtdv + 1;
            db.get('votos').find({ id: 3 }).assign({ votosn: somarvts }).write()

        }
        if (simounao === 'nao') {

            let idautor = message.sender.id;
            let javotou = db.get('membros').find({ id: idautor }).value()
            if (javotou != undefined) {
                client.sendText(message.from, `${message.sender.pushname} você já votou nessa enquete!`);
                return;
            }

            db.get('membros').push({
                id: idautor,
                javotou: "sim"
            }).write()
            
            client.sendText(message.from, `Muito bem ${message.sender.pushname} você votou como Não!`);
            let qtdvotos = db.get('votos').find({ id: 3 }).value()
            let qtdv = qtdvotos.votosn;
            let somarvts = qtdv + 1;
            db.get('votos').find({ id: 3 }).assign({ votosn: somarvts }).write()
        }

    }

}
module.exports = { verifienquete }