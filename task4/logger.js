const nanoid = require('nanoid');
const fs = require('fs');
const path = require('path');

const sessionLogs = [];


function logStep(num, isWinner) {
    const log = {
        answer: num,
        isWinner
    };

    sessionLogs.push(log);
}

function saveLogs(name) {
    createLogFile(name)
}

function formContent() {
    const log = {
        sessionId: nanoid(),
        logs: sessionLogs
    };
    return log
}

function setFilename(name) {
    return name ? name : new Date().toLocaleDateString()
}

function writeFile(pathToFile) {
    const content = JSON.stringify([formContent()]);
    fs.writeFileSync(
        pathToFile,
        content,
        "utf-8",
        (err) => {
            if (err) throw new Error(`Не могу записать файл: ${err}`);
        }
    );
}

function appendToExist(pathToFile) {
    let fileData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
    const log = {
        sessionId: nanoid(),
        logs: sessionLogs
    };

    fileData.push(log)
    fs.writeFileSync(pathToFile, JSON.stringify(fileData));
}

function checkExistingFile(pathToFile) {
    return fs.existsSync(pathToFile)
        ? appendToExist(pathToFile)
        : writeFile(pathToFile);
}

function createLogFile(name) {
    const filename = setFilename(name);
    const filePath = path.join(__dirname, 'logs', `${filename}.json`);

    checkExistingFile(filePath)
}

module.exports = {
    logStep,
    saveLogs
};
