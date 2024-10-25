console.log('JS is linked and working');
const answer = prompt('Сколько вам лет?', '');
if (answer >= 18) {
    console.log('Добро пожаловать в хамстер комбат.');
}else if (answer < 18, answer != 0){
    console.log('Вы слишком малы для хамстер комбата.');
} else if (answer == 0){
    console.log('Incorrect answer!')
} else {
    console.log('Incorrect answer!');
}
const hamster = document.getElementById('hamster');
const money = document.getElementById('money');

const hamsterPoor = document.getElementById('poor-hamster');
const hamsterRich = document.getElementById('rich-hamster');
const hamsterSport = document.getElementById('sport-hamster');

let currentCoin = 0

hamster.addEventListener('click', () => {
    currentCoin++;
    money.innerText = currentCoin;
    if (currentCoin < 10) {
        console.log(currentCoin, '< 10 is true')
        hamsterPoor.style.display = 'block';
    } else if (currentCoin >=10, currentCoin < 20) {
        console.log('10 <=', currentCoin, '< 20 is true')
        hamsterPoor.style.display = 'none';
        hamsterSport.style.display = 'block';
    } else if (currentCoin >= 20) {
        console.log(currentCoin, '>= 20 is true');
        hamsterSport.style.display = 'none';
        hamsterRich.style.display = 'block';
    }
})