const venom = require('venom-bot');
//CARREGAR COMANDOS
const redes = require('./commands/redesociais');
const adicionar = require('./commands/add');
const ip = require('./commands/ip');
const status = require('./commands/status');
const anunciar = require('./commands/anuncio');
const ban = require('./commands/ban');
const ticket = require('./commands/ticket');
const linkban = require('./commands/linkban');
const menu = require('./commands/menu');
const enquete = require('./commands/enquete');
const venquet = require('./commands/verificarenquete');
const venquet0 = require('./commands/verenquete');
const avis = require('./commands/avisos');
const comprarvip = require('./commands/cvip');
const vendervipss = require('./functions/vendervip');
//CARREGAR COMANDOS

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage(async (message) => {
        if (message.body === undefined) {
            return;
        }

        let author = message.sender.pushname;
        if(message.sender.pushname === undefined && message.sender.isBusiness === true){
            author = message.sender.verifiedName;
        }
        let idz = message.sender.id;

        const low = require('lowdb');
        const FileSync = require('lowdb/adapters/FileSync');
        const adapters = new FileSync('db/comprarvip.json');
        const dbs = low(adapters);
        let consulta = dbs.get('processo').find({ id: idz }).value()

        if (consulta === undefined) {
        } else {
            vendervipss.vendovip(message, client, (callback) => {
            })
            return;
        }

        if (message.body.toLowerCase().includes('!ban') && message.isGroupMsg === true) {
            ban.banir(message, client, (callback) => {
            })
            return;
        }
      
        if (message.body.toLowerCase().includes('!anunciar') && message.isGroupMsg === false) {
            anunciar.anuncio(message, client, (callback) => {
            })
            return;
        }
 
        if (message.body === '1' && message.isGroupMsg === false) {
            ip.ipport(message, client, (callback) => {
            })
            return;
        }

 

        if (message.body.startsWith('2') && message.isGroupMsg === false) {
            comprarvip.cvip(message, client, (callback) => {
            })
            return;
        }

        if (message.body === '3' && message.isGroupMsg === false) {
            status.stt(message, client, (callback) => {
            })
            return;
        }
     
        if (message.body === '4' && message.isGroupMsg === false) {
            redes.sociais(message, client, (callback) => {
            })
            return;
        }
  
        if (message.body.toLowerCase().includes('!add')) {
            adicionar.add(message, client, (callback) => {
            })
            return;
        }

     
        if (message.body === '5' && message.isGroupMsg === false) {
            ticket.tk(message, client, (callback) => {
            })
            return;
        }

        if (message.author != '554384222207@c.us' && message.author != '553173121624@c.us' && message.author != '5516997514883@c.us') {
            if (message.from === '554384222207-1583679719@g.us') {
                linkban.lkban(message, client, (callback) => {
                })
                return;
            }
        }
        if (message.body.toLowerCase().includes('!enquete') && message.isGroupMsg === false) {
            enquete.enquet(message, client, (callback) => {

            })
            return;
        }






        if (message.isGroupMsg === false) {
            menu.menu(message, client, (callback) => {
            })
            return;
        }
    
        const testador = require('./refresh');
        var louco = new testador
        louco.test();

       
        const adapter = new FileSync('db/enquete.json');
        const db = low(adapter);
    

        
        if (message.from === '554384731221-1608328868@g.us') {
            if (message.author != '554384222207@c.us' && message.author != '553173121624@c.us' && message.author != '5516997514883@c.us') {
                const validar = [`sim`, `nao`, `não`]
                if (validar.some(autos => message.body.toLowerCase().includes(autos))) {
                    let valor = db.get('enquete').find({ id: "1" }).value()
                    let verificarenq = valor.enquete;
                    if (verificarenq === 1) {
                        venquet.verifienquete(message, client, (callbacack) => {
                        })
                        return;
                    }
                    if (verificarenq === 0) {
                        venquet0.verifienquete(message, client, (callback) => {
                        })
                        return;
                    }
                } else {
                    avis.avisos(message, client, (callback) => {
                    })
                }
            }
        }
    })
}