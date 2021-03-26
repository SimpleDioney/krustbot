async function vendovip(message, client, callback){ 
    const axios = require('axios');
    let idz = message.sender.id;
    let author = message.sender.pushname; 
    if(message.sender.pushname === undefined && message.sender.isBusiness === true){
        author = message.sender.verifiedName;
    }
    const low = require('lowdb');
    const FileSync = require('lowdb/adapters/FileSync');
    const adapters = new FileSync('db/comprarvip.json');
    const dbs = low(adapters);
    let consulta = dbs.get('processo').find({ id: idz }).value()
     //console.log(consulta)
        if (consulta.parte === 1) {
            const vips = {
                '1': 'VIP',
                '2': 'VIP+',
                '3': 'MVP',
                '4': 'MVP+',
                '5': 'CLASSIC'
            };
            const precos = {
                'VIP': 15,
                'VIP+': 20,
                'MVP': 25,
                'MVP+': 35,
                'CLASSIC': 40
            }
            let vipescol = `${vips[message.body]}`;
            let valorvipp = `${precos[vipescol]}`;
            client.sendText(message.from, `Muito bem *${author}* você escolheu o produto: *${vipescol}*. 
Por gentileza agora informe seu nick`).then(proximo => {
                dbs.get('processo').find({ id: idz }).assign({ vip: vipescol, valor: valorvipp, parte: 2 }).write()
            })
        }
        if (consulta.parte === 2) {
            let nick = message.body;
            client.sendText(message.from, `Muito bem *${author}* nick definido com sucesso para *${nick}*`).then(parte3 => {
                dbs.get('processo').find({ id: idz }).assign({ nick: nick, parte: 3 }).write()
                //console.log(consulta)
                let nk = consulta.nick;
                let vipes = consulta.vip;
                let valorvi = consulta.valor;
                client.sendText(message.from, `*Vamos confirmar sua compra 🛒*

*SEU NICK:* ${nk}
*PRODUTO:* ${vipes}
*VALOR:* R$${valorvi},00
                
Digite *✅SIM* para confirmar sua compra!`)
            })
        }
        if (consulta.parte === 3) {
            if (message.body.toLowerCase().includes('sim')) {
                let nk = consulta.nick;
                let numero = message.from;
                let vipes = consulta.vip;
                let valorvi = consulta.valor;
                axios({
                    method: 'post',
                    url: 'https://apisvin.000webhostapp.com/Krust/link.php',
                    data: {
                        vip: vipes,
                        tell: numero,
                        valorvip: valorvi
                    },
                    headers: { 'Content-Type': 'application/json' }
                }).then(async function (resposta) {
                    client.sendText(message.from, `Excelente *${author}* link para compra gerado com sucesso!
*🛒LINK:* ${resposta.data}`).then(enviei => {
                        dbs.get('processo').remove({ id: idz }).write()
                    })
                })
            } else {
                client.sendText(message.from, `Seu pedido foi cancelado ❌`).then(deva => {
                    dbs.get('processo').remove({ id: idz }).write()
                })
            }
        }
    }
module.exports = {vendovip}