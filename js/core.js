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
    console.log(`18 <= ${answer} < 100 is true`);
    alert('Добро пожаловать в хамстер комбат.');
    hamster.addEventListener('click', () => {
        currentCoin++;
        money.innerText = currentCoin;
        if (currentCoin < 10) {
            console.log(`${currentCoin} < 10 is true`);
            hamsterPoor.style.display = 'block';
        } else if (currentCoin >=10, currentCoin < 20) {
            console.log(`10 <= ${currentCoin} < 20 is true`);
            hamsterPoor.style.display = 'none';
            hamsterSport.style.display = 'block';
        } else if (currentCoin >= 20) {
            console.log(`${currentCoin} >= 20 is true`);
            hamsterSport.style.display = 'none';
            hamsterRich.style.display = 'block';
        }
    })
}else if (answer < 18){
    game.style.display = 'none';
    alert('Вы слишком малы для хамстер комбата.');
} else if (answer >= 100 && answer < 200) {
    alert('Да вы старый');
} else if (answer >= 200){
    alert('Да вы динозавр!');
} else {
    game.style.display = 'none';
    console.log('Error: incorrect answer!');
}