"use strict";

const { AccountData } = require("../");

module.exports = async function getAccounts() {
    console.log(await AccountData.getById("IZACCC"));
    console.log(await AccountData.getByDiscord("269916553171042315"));
};
