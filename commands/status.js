const axios = require('axios');
async function stt(message, client, callback) {
    axios.get("https://api.mcsrvstat.us/2/jogar.mineweck.xyz:19132").then(async function (res) {
        if (res.data.online == false) {
            console.log(res.data)
            await client
                .sendText(message.from, `Nosso servidor encontra-se Offline!`)
        }
        if (res.data.online == true) {
            await client
                .sendText(message.from, `*🟢REDE KRUST STATUS🟢*
*SERVIDOR ONLINE*

*🕹️ JOGADORES:* ${res.data.players.online}/${res.data.players.max}
*⚒️ VERSÃO:* ${res.data.version}`)
        }

    })

}
module.exports = {stt}