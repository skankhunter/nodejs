const http = require('http');
const readline = require('readline');
const {apiKey} = require('./config');

const input = readline.createInterface({
    input: process.stdin
});

console.log('Введите город')
input.on('line', (city) => {
    getTemperatureInfo(city)
});


function formURL(city) {
    return `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`
}

function getTemperatureInfo(city) {
    const url = formURL(city);
    http.get(url, (res) => {
        const statusCode = res.statusCode;
        if (statusCode !== 200) {
            console.error(`Status Code: ${statusCode}`);
            return;
        }
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            const {current} = JSON.parse(rawData);
            const {temperature, feelslike, weather_descriptions} = current;
            console.log(`>> Данные о погоде в ${city}`);
            console.log(`>> Температура ${temperature}`);
            console.log(`>> Ощущается как ${feelslike}`);
            console.log(`>> На улице ${weather_descriptions.join('')}`);
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
}
