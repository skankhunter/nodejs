const fs = require('fs');
const path = require('path');
const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');

const {file} = yargs(hideBin(process.argv)).argv;

const pathToFile = path.join(__dirname, `${file}.json`);
const fileData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));

function calcWinLossMatches() {
    let win = 0;
    let loss = 0;

    fileData.forEach(session => {
        totalMatches += session.logs.length;
        session.logs.forEach(game => {
            if (game.isWinner) win += 1;
            else loss += 1;
        })
    });

    return {win, loss}
}

let totalMatches = 0;
const {win, loss} = calcWinLossMatches();
const winRate = win / totalMatches * 100;

console.log(`TOTAL MATCHES: ${totalMatches}`)
console.log(`WIN/LOSS: ${win}/${loss}`)
console.log(`WINRATE: ${winRate}%`)
