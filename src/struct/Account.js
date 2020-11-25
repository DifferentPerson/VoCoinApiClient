"use strict";

/**
 * Represents a VoCoin account
 */
class Account {

    id;
    discord;
    balance;
    xp;

    constructor(account) {
        this.id = account.id;
        this.discord = account.discord;
        // epic api design, sending integers as strings
        this.balance = BigInt(account.balance);
        this.xp = BigInt(account.xp);
    }

}

module.exports = Account;