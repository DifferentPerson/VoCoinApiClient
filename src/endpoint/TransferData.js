"use strict";

const { getJson } = require("../util/Util");
const EndPoint = require("./EndPoint");
const Transfer = require("../struct/Transfer");

class TransferData extends EndPoint {

    /**
     * Gets a transfer by its ID
     * @param {Number} id 
     * @return {Promise<Transfer>}
     */
    static async getTransfer(id) {
        const res = await getJson("transfer/" + id);
        if (res.success === false) {
            return null;
        }
        return new Transfer(res.transfer);
    }

}

module.exports = TransferData;