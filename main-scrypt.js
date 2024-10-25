const hamster = document.getElementById('hamster');
const coins = document.getElementById('coins');

const hamsterPoor = document.getElementById('poor-hamster');
const hamsterRich = document.getElementById('rich-hamster')

let currentCoin = 0

hamster.addEventListener('click', () => {
    currentCoin += 1;
    coins.innerText = currentCoin
    if(currentCoin == 10) {
        hamsterPoor.style.display = 'none'

    }
})