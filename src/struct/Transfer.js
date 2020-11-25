"use strict";

/**
 * Represents a VoCoin transfer
 */
class Transfer {

    id;
    source;
    recipient;
    amount;
    category;
    note;

    constructor(transfer) {
        this.id = transfer.id;
        this.source = transfer.source;
        this.recipient = transfer.recipient;
        this.amount = transfer.amount;
        this.category = transfer.category;
        this.note = transfer.note;
    }

}

module.exports = Transfer;