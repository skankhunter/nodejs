#!/usr/bin/env node

const yargs = require('yargs/yargs');
const {hideBin} = require('yargs/helpers');
const yargs = yargs(hideBin(process.argv)).argv;

function getDate({y, year, m, month, d, date}) {
    if (y || year) {
        console.log(new Date().getFullYear())
    } else if (m || month) {
        console.log(new Date().getMonth() + 1)
    } else if (d || date) {
        console.log(new Date().getDate())
    } else {
        console.log(new Date().toISOString());
    }
}

getDate(yargs)

module.exports = {
    getDate
}
