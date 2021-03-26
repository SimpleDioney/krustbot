function horas(callback) {
    let dtsh = new Date()
    let h = dtsh.getHours();
    const horas = {
        0: 'Boa noite', 1: 'Boa noite', 2: 'Boa noite', 3: 'Boa noite', 4: 'Boa noite',
        5: 'Bom dia', 6: 'Bom dia', 7: 'Bom dia', 8: 'Bom dia', 9: 'Bom dia', 10: 'Bom dia', 11: 'Bom dia',
        12: 'Boa tarde', 13: 'Boa tarde', 14: 'Boa tarde', 15: 'Boa tarde', 16: 'Boa tarde', 17: 'Boa tarde', 18: 'Boa tarde',
        19: 'Boa noite', 20: 'Boa noite', 21: 'Boa noite', 22: 'Boa noite', 23: 'Boa noite',
    }
    let sauda = `${horas[h]}`
    callback(sauda);
}
module.exports = {horas}