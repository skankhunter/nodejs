#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers')
const {y, year, m, month, d, date} = yargs(hideBin(process.argv)).argv

let time = new Date();

if (y || year) {
  const oldYear = time.getFullYear();
  const dateWithAddYear = time.setFullYear(oldYear + (y || year));
  console.log(new Date(dateWithAddYear).toISOString())
} else if ( m || month) {
  const oldMonth = time.getMonth();
  const dateWithAddMonth = time.setMonth(oldMonth + (m || month));
  console.log(new Date(dateWithAddMonth).toISOString());
} else if ( d || date) {
  const oldDate = time.getDate();
  const dateWithAddDate = time.setDate(oldDate + (d || date));
  console.log(new Date(dateWithAddDate).toISOString());
} else {
  console.log(time.toISOString());
}
