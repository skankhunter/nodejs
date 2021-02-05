#!/usr/bin/env node

const readline = require('readline');
const input = readline.createInterface(process.stdin);

const RETRIES = 3;
const randNum =  Math.floor(Math.random() * 100);
let counter = 1;

input.on('line', (data) => checkInput(data))
input.on('close', () => console.log('This is the end'))

function checkInput(num) {
    counter += 1
    if (counter <= RETRIES) {
        if (num > randNum) {
            console.log('Ваше число больше')
        } else if (num < randNum) {
            console.log('Ваше число меньше')
        } else {
            console.log('Поздравляю, угадали!')
            process.exit()
        }
    } else {
        console.log('Попытки закончились')
        process.exit()
    }
}

console.log('Отгадайте число от 0 до 100')
