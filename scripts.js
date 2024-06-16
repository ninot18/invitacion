function changeTittle(text){
    console.log('click')
    const txt = document.getElementById(text)
    switch (text) {
        case 'when':
            txt.innerHTML = 'Junio, 29'
            break
        case 'where':
            txt.innerHTML = 'Hotel Dann Carlton Crta. 2N 1-60 Cali Valle'
            break
        case 'hour':
            txt.innerHTML = `Inicio: 6:00pm <br> Fin: 3:00am`
            break
        default:
            break;
    }
}

const where = document.getElementById('where')
const when = document.getElementById('when')
const hour = document.getElementById('hour')
const dress = document.getElementById('dress')

when.addEventListener('click', () => {
    changeTittle('when');
})

where.addEventListener('click', () => {
    changeTittle('where');
})

hour.addEventListener('click', () => {
    changeTittle('hour');
})

const url="dresscode.html"

dress.addEventListener('click', () => {
    window.location.href = url;
});