const readline = require('readline');
const {logStep, saveLogs} = require('./logger');

let isGameStarted = false;
let randomNum = null;
let filename = '';
const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//
console.log('Введите название файла логов или продолжить с именем по умолчанию');
//
function startGame(data) {
    isGameStarted = true;
    filename = data;
    setRandomNum();
    console.log('Угадай число Орел или Решка');
}

function setRandomNum() {
    randomNum = Math.floor(Math.random() * 2) + 1
}

function handleStep(num) {
    if (num == randomNum) {
        console.log('Winner, Winner - chicken dinner!');
        logStep(num, true);
    } else {
        console.log("Let's try again");
        logStep(num, false);
    }

    setRandomNum();
}

input.on('line', (data) => {
    if (!isGameStarted) {
        startGame(data);
        return
    }
    handleStep(data)
});

input.on('SIGINT', () => {
    saveLogs(filename);
    process.exit()
});


