alert('Java script is linked and working')
const hamster = document.getElementById('hamster');
const money = document.getElementById('money');

const hamsterPoor = document.getElementById('poor-hamster');
const hamsterRich = document.getElementById('rich-hamster');

let currentCoin = 0

hamster.addEventListener('click', () => {
    currentCoin += 1;
    money.innerText = currentCoin;
    if(currentCoin == 10) {
        hamsterPoor.style.display = 'none';
        hamsterRich.style.display = 'block';
    }
})