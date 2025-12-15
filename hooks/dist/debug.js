import { PrismaClient } from "@prisma/client";
console.log(PrismaClient.toString().substring(0, 200));
try {
    new PrismaClient();
    console.log("Success");
}
catch (e) {
    console.error(e);
}
//# sourceMappingURL=debug.js.map