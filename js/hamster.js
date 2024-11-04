const hamster = document.getElementById('hamster');
const money = document.getElementById('money');
const game = document.getElementById('game');

const hamsterPoor = document.getElementById('poor-hamster');
const hamsterRich = document.getElementById('rich-hamster');
const hamsterSport = document.getElementById('sport-hamster');

let currentCoin = 0 // Переменная содержащая текущее кол-во монет, увеличивается нажатием на картинку
hamster.addEventListener('click', () => {
    money.innerText = ++currentCoin;
    if (currentCoin < 10) {
        hamsterPoor.style.display = 'block';
    } else if (currentCoin >=10 && currentCoin < 20) {
        hamsterPoor.style.display = 'none';
        hamsterSport.style.display = 'block';
    } else if (currentCoin >= 20) {
        hamsterSport.style.display = 'none';
        hamsterRich.style.display = 'block';
    }
})