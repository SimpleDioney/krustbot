const moment = require('moment');
moment.locale('pt-br');
async function banir(message, client, callback){
    if (message.author != '554384222207@c.us' && message.author != '553173121624@c.us' && message.author != '5516997514883@c.us') {
        let nome = message.sender.pushname
        client.sendText(
            message.from,
            `${nome} Você não tem permissão para utilizar esse comando!`
        );
        return;
    }
    let canal = message.from
    let staff = message.sender.pushname
    let verificardd = message.content.substring(8, 10)
    console.log(verificardd)
    let autor = message.content.substring(6)
    console.log(autor)

    if (autor === '553173121624') {
        client.sendText(message.from, 'Infelizmente você não pode banir meu criador!')
        return;
    }
    if (autor === '') {
        await client.reply(
            message.from,
            'Você precisar mencionar um usuario valido!',
            message.id.toString()
        );
        return;
    }


    let verificar = await client.getNumberProfile(`${autor}@c.us`);
    //TRABALHAR COM A STRING
    let pegador = verificar.id.user
    let br = pegador.substring(0, 2)
    let ddd = pegador.substring(2, 4)

    let primeirosnum = pegador.substring(4, 8)
    let segundonum = pegador.substring(8, 12)
    let tratado = `+${br} ${ddd} ${primeirosnum}-${segundonum}`
    if (ddd === '16') {
        //55 1699641-3284@c.us
        // let tratado = '+55 16 99641-3284'
        br = pegador.substring(0, 2)
        ddd = pegador.substring(2, 4)
        primeirosnum = pegador.substring(4, 9)
        segundonum = pegador.substring(9, 13)
        tratado = `+${br} ${ddd} ${primeirosnum}-${segundonum}`
    }
    if (ddd === '24') {
        //55 1699641-3284@c.us
        // let tratado = '+55 16 99641-3284'
        br = pegador.substring(0, 2)
        ddd = pegador.substring(2, 4)
        primeirosnum = pegador.substring(4, 9)
        segundonum = pegador.substring(9, 13)
        tratado = `+${br} ${ddd} ${primeirosnum}-${segundonum}`
    }


    //PROCURANDO O CARA NO GP
    let inf = await client.getGroupMembers(canal);
    var indexOfStevie = inf.findIndex(i => i.formattedName === tratado);
    let perfilbanido = inf[indexOfStevie]
    perfilbanido = perfilbanido.pushname
    console.log(perfilbanido)
    let dia = new Date()
    dia = `${moment(dia).format('D [de] MMM [de] YYYY')}`
    await client.removeParticipant(canal, `${autor}@c.us`).then(async sc => {
        await client.sendText(message.from, `*USUARIO PUNIDO*

> Usuário: *${perfilbanido}*
> Staff: *${staff}*
> Data: *${dia}*`)
    }).catch(err => {
        client.sendText(message.from, 'Não foi possivel banir esse usuario!')
    })
}
module.exports = {banir}