async function enquet(message, client, callback) {
    if (message.from != '554384222207@c.us' && message.from != '553173121624@c.us') {
        let nome = message.sender.pushname
        client.sendText(
            message.from,
            `${nome} Você não tem permissão para utilizar esse comando!`
        );
        return;
    }
    //554384731221-1608328868@g.us
    let msg = message.content;
    let qtd = msg.length;
    let definir = msg.substring(0, 9)
    console.log(definir)
    if(definir === '!enquete1'){
        enq1 = msg.substring(10, qtd)
        console.log(enq1)
        verif = 1
    }
    if(definir === '!enquete2'){
        enq2 = msg.substring(10, qtd)
        console.log(enq2)
        verif2 = 1
    }
    if(typeof verif2 === "undefined"){
        client.sendText(message.from, "Digite o 2 item da enquete!")
        return;
    }
    console.log(verif, verif2)
    if(verif == 1 && verif2 === 1){
        client.sendText(message.from, `VALOR1: ${enq1}\nVALOR2: ${enq2}`).then(succ => {
            verif = 0;
            verif2 = 0;
            enq1 = '';
            enq2 = '';
        })
    }
    
}
module.exports = { enquet }