"use strict";

// struct
const Account = require("./struct/Account");
const Transfer = require("./struct/Transfer");

// endpoint
const AccountData = require("./endpoint/AccountData");
const TransferData = require("./endpoint/TransferData");

module.exports = class VoCoinApiClient {

    constructor() {
        throw new Error("VoCoinApiClient cannot be instantiated");
    }

    static struct = {
        Account,
        Transfer
    };

    static AccountData = AccountData;
    
    static TransferData = TransferData;

};