/// <reference path="./typings/index.d.ts" />

'use strict';

function isHeadlessElectron() {
    if (process.platform === 'win32' || process.platform === 'darwin') {
        return false
    } else if (process.env.DISPLAY) {
        const displayNumber = process.env.DISPLAY.slice(1);
        console.log(displayNumber);
        return parseInt(displayNumber) >= 99;
    } else {
        return true;
    }
}

module.exports = isHeadlessElectron;