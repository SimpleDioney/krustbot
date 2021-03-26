function sociais(message, client, callback) {
client.sendText(message.from, '*📝- Redes Sociais - 📝*'
)
client.sendLinkPreview(message.from, 'https://twitter.com/RedeKrust?s=09', 'Nosso Twitter!')
client.sendLinkPreview(message.from, 'https://discord.gg/QHxmxJ', 'Nosso Discord!')
}
module.exports = {sociais}