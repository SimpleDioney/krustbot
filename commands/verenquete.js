async function verifienquete(message, client, callback) {
    if (message.from === '554384731221-1608328868@g.us') {
        let simounao = message.body.toLowerCase();
            if (simounao === 'sim') {
                client.sendText(message.from, `Não está acontecendo nenhuma enquete no momento ${message.sender.pushname}`)
            }
            if (simounao === 'não') {
                client.sendText(message.from, `Não está acontecendo nenhuma enquete no momento ${message.sender.pushname}`)
            }
            if (simounao === 'nao') {
                client.sendText(message.from, `Não está acontecendo nenhuma enquete no momento ${message.sender.pushname}`)
            }

    }

}
module.exports = { verifienquete }