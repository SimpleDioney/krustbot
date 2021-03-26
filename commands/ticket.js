let quantidadetk = 0
async function tk(message, client, callback) {
    let userid = message.sender.id
    console.log(userid)
    let usernome = message.sender.pushname
    quantidadetk = quantidadetk + 1
    let numeros = ['554384222207@c.us']
    var resultado = numeros[Math.ceil(Math.random() * (numeros.length - 1))];
    // '554384222207@c.us',
    await client.createGroup(`📜Ticket ${usernome} #${quantidadetk}`, [
        userid,
        resultado
    ]).then(async sucess => {
        let c = sucess.gid._serialized
        let verf = await client.getGroupMembers(c);
        console.log(verf.length)
        if (verf.length === 2) {
            setTimeout(async () => {
                console.log(c)
                console.log(resultado)
                await client.removeParticipant(c, resultado);
                await client.leaveGroup(c);
                await client.deleteChat(c);
            }, 7000);
            await client.sendText(userid, '> Por favor, salve nosso contato ou desative a opção de apenas seus contatos poder adicioná-lo (a) em grupos para que possamos lhe adicionar nos canais de ticket! Desde já agradecemos!').catch(err => {
                console.log('deu error')
            })
            return
        }
        setTimeout(async () => {
            await client.promoteParticipant(c, resultado);
            client.sendText(
                c, `${usernome} Informe o motivo do seu contato, para agilizar seu atendimento!`
            );
            client.sendText(
                message.from, "Ticket aberto com sucesso! aguarde que em breve um staff vai te atender!"
            );
        }, 4000);
    }).catch(erro => {
        console.log(erro)
        client.sendText(
            message.from, "Infelizmente não foi possivel abrir um ticket, tente mais tarde"
        );
    })
}
module.exports = {tk}