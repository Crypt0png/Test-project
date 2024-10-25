alert('Java script is linked and working')
const hamster = document.getElementById('hamster');
const money = document.getElementById('money');

const hamsterPoor = document.getElementById('poor-hamster');
const hamsterRich = document.getElementById('rich-hamster');
const hamsterSport = document.getElementById('sport-hamster');

let currentCoin = 0

hamster.addEventListener('click', () => {
    currentCoin += 1;
    money.innerText = currentCoin;
    if(currentCoin == 10) {
        hamsterPoor.style.display = 'none';
        hamsterSport.style.display = 'block';
    } else if(currentCoin == 20) {
        hamsterSport.style.display = 'none';
        hamsterRich.style.display = 'block';
    }
})