async function add(message, client, callback){
let c = message.from
let qadd = message.content.substring(5)
let tratado = `55${qadd}@c.us`
//@c.us
console.log(tratado)
await client.addParticipant(c, tratado).then(sucs => {
    client.sendText(message.from, 'Membro adicionado com sucesso')
}).catch(err => {
    client.sendText(message.from, 'Error')
})
}
module.exports = {add}