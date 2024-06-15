function toggleFlip() {
    const card = document.querySelector('.card');
    card.classList.toggle('flipped');
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 400
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`
}

document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${Math.random() * 10 + 5}s`;
        starsContainer.appendChild(star);
    }

    document.body.appendChild(starsContainer);
});

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
            txt.innerHTML = '18:00 a 3:00'
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