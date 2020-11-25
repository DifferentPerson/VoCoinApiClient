"use strict";

const getAccounts = require("./getAccounts");
const getAllTransfers = require("./getAllTransfers");

(async () => {
    await getAccounts();
    // this will go on for a long while
    // await getAllTransfers();
})();