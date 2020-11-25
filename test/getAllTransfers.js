"use strict";

const { TransferData } = require("../");

module.exports = async function getAllTransfers() {
    let i = 1;
    while (true) {
        const transfer = await TransferData.getTransfer(i);
        console.log(transfer);
        if (transfer === null) {
            break;
        }
        i++;
    }
};