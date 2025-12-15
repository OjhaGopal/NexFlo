"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
console.log(client_1.PrismaClient.toString().substring(0, 200));
try {
    new client_1.PrismaClient();
    console.log("Success");
}
catch (e) {
    console.error(e);
}
