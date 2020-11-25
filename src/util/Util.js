"use strict";

const got = require("got");

const baseUrl = "http://joinvo.co/api/vcn/";

class Util {

    constructor() {
        throw new Error("Util cannot be instantiated");
    }

    static async getJson(path) {
        return (await got(path, {
            prefixUrl: baseUrl,
            responseType: "json",
            headers: {
                "user-agent": "VoCoinAPIClient"
            }
        })).body;
    }

}

module.exports = Util;