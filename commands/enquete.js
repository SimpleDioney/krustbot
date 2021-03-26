

async function enquet(message, client, callback) {

    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapter = new FileSync('db/enquete.json');
    const db = low(adapter);

    if (message.from != '554384222207@c.us' && message.from != '553173121624@c.us') {
        let nome = message.sender.pushname;
        client.sendText(
            message.from,
            `${nome} Você não tem permissão para utilizar esse comando!`
        );
        return;
    }
    let valor = db.get('enquete').find({ id: "1" }).value()
    let verificarenq = valor.enquete;
    console.log(verificarenq);
    if (verificarenq === 1) {
        client.sendText(message.from, `${message.sender.pushname} já existe uma enquete em votação!`)
        return;
    }


    let msg = message.content;
    let qtd = msg.length;
    let enq = msg.substring(9, qtd)
    let criadorenq = message.sender.pushname;

    if (enq === '') {
        client.sendText(message.from, 'Você precisa fornecer a mensagem da enquete!');
        return;
    }
    client.sendText('554384731221-1608328868@g.us', `*❗ NOVA ENQUETE KRUST! ❗*

*ENQUETE:* ${enq}

*OPÇÕES:* ✅ SIM  / 🚫 NÃO

*TEMPO:* 1 Hora

*CRIADOR:* ${criadorenq}`).then(succ => {
        db.get('enquete').find({ id: "1" }).assign({ enquete: 1 }).write()
        setTimeout(() => {
            const testador = require('../refresh');
            var louco = new testador
            louco.test();
            const low = require('lowdb');
            const FileSync = require('lowdb/adapters/FileSync');
            const adapter = new FileSync('db/enquete.json');
            const db = low(adapter);

            db.get('enquete').find({ id: "1" }).assign({ enquete: 0 }).write()
            let qtdvotos = db.get('votos').find({ id: 3 }).value()
            let qtdvp = qtdvotos.votosp;
            let qtdvn = qtdvotos.votosn;

            let like = qtdvp;
            let dislike = qtdvn;
            let total = like + dislike;
            if (total != 0) {
                porcentagemLike = (like / total) * 100;
                porcentagemDislike = (dislike / total) * 100;
                porcentagemLike = porcentagemLike.toFixed();
                porcentagemDislike = porcentagemDislike.toFixed();
            } else {
                //caso nao tenha like ou dislike, seta like como 100% e dislike como zero;
                porcentagemLike = 100;
                porcentagemDislike = 0;

            }
            client.sendText('554384222207-1607710902@g.us', `❗ *ENQUETE KRUST FINALIZADA!* ❗
        
*ENQUETE:* ${enq}

*OPÇÕES:* ✅ SIM *${porcentagemLike}%* / 🚫 NÃO *${porcentagemDislike}%*

*VÁ FECHAR O CANAL*`).then(sucess => {
                db.get('votos').find({ id: 3 }).assign({ votosp: 0 }).write()
                db.get('votos').find({ id: 3 }).assign({ votosn: 0 }).write()
                db.get('membros').remove().write()
            })
            client.sendText('554384731221-1608328868@g.us', `❗ *ENQUETE KRUST FINALIZADA!* ❗

*ENQUETE:* ${enq}

*OPÇÕES:* ✅ SIM *${porcentagemLike}%* / 🚫 NÃO *${porcentagemDislike}%*

*CRIADOR:* ${criadorenq}`)
        }, 40000);
    })
}
module.exports = { enquet }