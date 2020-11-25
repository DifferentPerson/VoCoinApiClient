"use strict";

const { getJson } = require("../util/Util");
const EndPoint = require("./EndPoint");
const Account = require("../struct/Account");

class AccountData extends EndPoint {

    /**
     * Fetches a user by their ID
     * @param {String} id 
     * @return {Promise<Account>}
     */
    static async getById(id) {
        const res = await getJson("account/" + id);
        if (res.success === false) {
            return null;
        }
        return new Account(res.account);
    }

    /**
     * Fetches a user by their Discord
     * @param {String} discord 
     * @return {Promise<Account>}
     */
    static async getByDiscord(discord) {
        const res = await getJson("account/discord/" + discord);
        if (res.success === false) {
            return null;
        }
        return new Account(res.account);
    }

}

module.exports = AccountData;