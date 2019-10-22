const create = tag => document.createElement(tag);
const appendBody = node => document.body.appendChild(node);
const appendToParent = (parentNode, node) => parentNode.appendChild(node);

let audio = appendBody(create('audio'))
audio.src = "Lalala.mp3"
audio.controls = true

let res = appendBody(create('div'))
res.style = `display: flex; flex-direction: row; justify-content: left;`
let h2 = appendToParent(res, create('h2'))
h2.innerText = 'SCORE:'
let score = appendToParent(res, create('h2'))
score.innerText = '0'
let container = appendBody(create('div'))
container.style = `display: flex; flex-direction: column; justify-content: center;  align-items: center; height: 85vh;`
let green = appendToParent(container, create('div'))
green.style = `position: absolute; width: 320px; height: 320px; background: #5fa55a; border-radius: 160px; z-index: 1;`
let yellow = appendToParent(green, create('div'))
yellow.style = `position: absolute; width: 160px; height: 160px; background: #f6d51f; border-radius: 800px; z-index: 2; margin-left: 80px; margin-top: 80px;`
let blue = appendToParent(yellow, create('div'))
blue.style = `position: absolute; width: 80px; height: 80px; background: #01b4bc; border-radius: 40px; z-index: 3; margin-left: 40px; margin-top: 40px;`
let red = appendToParent(blue, create('div'))
red.style = 'position: absolute; width: 40px; height: 40px; background: #fa5457;border-radius: 20px; z-index: 4; margin-left: 20px; margin-top: 20px;'
document.body.style = `background-image: url(palma.jpg); background-repeat: no-repeat; background-size: cover;`
let dart = appendBody(create('img'))
dart.src = "dart.png"
dart.style = `position: absolute; width: 50px; z-index: 5;`
let flyingDart = appendBody(create('img'))
flyingDart.src = "animated-clipart-darts-9.gif"
flyingDart.style = `position: absolute; width: 100px; z-index: 5; left: -100px;`
document.body.style.overflow = 'hidden !important'

let bird1 = create('img')
let bird2 = create('img')
let bird3 = create('img')
document.body.appendChild(bird1)
document.body.appendChild(bird2)
document.body.appendChild(bird3)
bird1.src = 'parrot.gif'
bird2.src = 'piggy.gif'
bird3.src = 'chic.gif'
bird1.style.width = '120px'
bird2.style.width = '150px'
bird3.style.width = '180px'
bird1.style.position = 'absolute'
bird2.style.position = 'absolute'
bird3.style.position = 'absolute'
bird1.style.transition = '1.5s all'
bird2.style.transition = '1.6s all'
bird3.style.transition = '1.7s all'
bird1.style.zIndex = '5'
bird2.style.zIndex = '5'
bird3.style.zIndex = '5'

let currentScore = 0
red.onclick = () => {
    currentScore += 2;
}
blue.onclick = () => {
    currentScore += 3;

}
yellow.onclick = () => {
    currentScore += 3;
}
green.onclick = () => {
    currentScore += 2;
}
let endOfTheGame = setInterval(() => {
    alert('Your Score: ' + score.innerHTML)
    currentScore = 0
    score.innerHTML = '0'
}, 30000)

document.body.onmousemove = (event) => {
    dart.style.top = `${event.clientY - 25}px`
    dart.style.left = `${event.clientX + 2}px`
}
document.body.onclick = (event) => {
    dart.src = "animated-clipart-darts-9.gif"
    flyingDart.style.top = `${event.clientY - 25}px`
    flyingDart.style.left = `${event.clientX + 2}px`
    setTimeout(() => {
        dart.src = "dart.png"
        flyingDart.style.visibility = 'hidden'
        score.innerHTML = ' ' + currentScore
    }, 800)
}

setInterval(() => {
    bird1.style.top = `${Math.random() * document.documentElement.clientHeight}px`
    bird1.style.left = `${Math.random() * document.documentElement.clientWidth}px`
}, 1400)

setInterval(() => {
    bird2.style.top = `${Math.random() * document.documentElement.clientHeight}px`
    bird2.style.left = `${Math.random() * document.documentElement.clientWidth}px`
}, 1500)

setInterval(() => {
    bird3.style.top = `${Math.random() * document.documentElement.clientHeight}px`
    bird3.style.left = `${Math.random() * document.documentElement.clientWidth}px`
}, 1600)