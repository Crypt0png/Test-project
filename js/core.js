const hamster = document.getElementById('hamster');
const money = document.getElementById('money');
const game = document.getElementById('game');

const hamsterPoor = document.getElementById('poor-hamster'); // Эта и 2 нижние линии кода переменные для картинок хомяков. Эта картинка бедного хомяка.
const hamsterRich = document.getElementById('rich-hamster'); // Эта картинка богатого хомяка.
const hamsterSport = document.getElementById('sport-hamster'); // Эта картинка хомяка в спортивках.

let currentCoin = 0 // Переменная содержащая текущее кол-во монет, улеличивается нажатием на картинку
console.log('Variables set');
const answer = +prompt('Сколько вам лет?', '');
if (answer >= 18 && answer < 100) {
    alert('Добро пожаловать в хамстер комбат.');
    hamster.addEventListener('click', () => {
        currentCoin++;
        money.innerText = currentCoin;
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
}else if (answer < 18){
    game.style.display = 'none';
    alert('Вы слишком малы для хамстер комбата. В доступе отказано!');
}else {
    game.style.display = 'none';
    alert('Ошибка: Не цифровые символы!');
}