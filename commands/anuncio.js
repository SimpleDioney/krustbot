const moment = require('moment');
moment.locale('pt-br');
async function anuncio(message, client, callback) {
    if (message.isGroupMsg === true) {
        client.sendText(
            message.from, 'Você não pode utilizar esse comando aqui!'
        )
        return;
    }
    if (message.from != '554384222207@c.us' && message.from != '553173121624@c.us') {
        let nome = message.sender.pushname
        client.sendText(
            message.from,
            `${nome} Você não tem permissão para utilizar esse comando!`
        );
        return;
    }
    let dia = new Date()
    dia = `${moment(dia).format('D [de] MMM [de] YYYY')}`
    console.log(dia)
    let msg = message.content
    let anunciante = message.sender.pushname
    anunciante = `\n> Anunciado por: *${anunciante}*`
    let qtd = msg.length
    msg = msg.substring(9, qtd)
    console.log(msg)
    if (msg === '') {
        client.sendText(message.from, 'Por gentileza informe seu anúncio!\n*EX:* !anunciar Suco de fruta')
        return;
    }

    await client
        .sendText('554384222207-1583679719@g.us', `*📬 REDE KRUST ANÚNCIO*\n>${msg} ${anunciante}\n> Data: *${dia}*`).then(async suces => {
            await client
                .sendText(message.from, '✅ Anúncio postado com sucesso!')
        }).catch(async err => {
            await client
                .sendText(message.from, '❌ Error ao postar seu anúncio!')
        })
}
module.exports = {anuncio}