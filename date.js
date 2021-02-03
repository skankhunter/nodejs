#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const {y, year, m, month, d, date} = yargs(hideBin(process.argv)).argv

if (y || year) {
  console.log(new Date().getFullYear())
} else if ( m || month) {
  console.log(new Date().getMonth() + 1)
} else if ( d || date) {
  console.log(new Date().getDate())
} else {
  console.log(new Date().toISOString());
}
