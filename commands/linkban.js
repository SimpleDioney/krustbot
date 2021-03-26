const moment = require('moment');
moment.locale('pt-br');
async function lkban(message, client, callback){
    if (message.author != '554384222207@c.us' && message.author != '553173121624@c.us' && message.author != '5516997514883@c.us') {
    const lk = [`https://`, `http://`, `www`, `.net`, `.com`, `.ultrahost`, `.blazehost`, `discord.gg /`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    if (lk.some(word => message.content.toLowerCase().includes(word))) {
        let autor = message.author;
        let canal = message.from;
        let verificar = await client.getNumberProfile(autor);
        //TRABALHAR COM A STRING
        let pegador = verificar.id.user
        console.log(pegador)
        let dsbrir = pegador.substring(0, 3)
        let br = pegador.substring(0, 2)
        let ddd = pegador.substring(2, 4)

        let primeirosnum = pegador.substring(4, 8)
        let segundonum = pegador.substring(8, 12)
        let tratado = `+${br} ${ddd} ${primeirosnum}-${segundonum}`
        if(dsbrir === '151') {
            br = pegador.substring(0, 1);
            ddd = pegador.substring(1, 4);
            primeirosnum = pegador.substring(4, 7);
            segundonum = pegador.substring(7, 11);
            tratado = `+${br} (${ddd}) ${primeirosnum}-${segundonum}`;
            //console.log(`${br} mais ddd${ddd} mais primeiro ${primeirosnum} mais segundo ${segundonum}`);   
        }
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
        console.log(inf);
        recebido = perfilbanido.pushname

        console.log(perfilbanido)
        let dia = new Date()
        dia = `${moment(dia).format('D [de] MMM [de] YYYY')}`
        await client.removeParticipant(canal, autor).then(async sc => {
            if(perfilbanido === undefined && recebido === undefined){
                recebido = tratado;  
            }else{
                recebido = perfilbanido.verifiedName
            }
            await client.sendText(message.from, `*USUARIO PUNIDO*

> Usuário: *${recebido}*
> Staff: *Bot*
> Motivo: *Envio de link*
> Data: *${dia}*`)
        }).catch(err => {
            client.sendText(message.from, 'Não foi possivel banir esse usuario!')
        })
    }
    }
}
module.exports = {lkban}