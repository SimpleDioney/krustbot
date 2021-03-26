class Testador {    
    constructor(){}
    
    test(){
        return delete require.cache[require.resolve('./db/enquete.json')];
    }

}
module.exports = Testador