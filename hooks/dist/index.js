import express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { keccak256 } from "ethers";
const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const client = new PrismaClient({ adapter });
const app = express();
app.use(express.json());
app.post("/hooks/catch/:userId/:nexfloId", async (req, res) => {
    const userId = req.params.userId;
    const nexfloId = req.params.nexfloId;
    const body = req.body;
    // Handle the webhook logic here
    //Store in DB a new trigger for the userId and nexfloId
    await client.$transaction(async (tx) => {
        const run = await tx.nexflorun.create({
            data: {
                nexflowId: nexfloId,
                metadata: body,
            }
        });
        await tx.nexflowoutbox.create({
            data: {
                nexflowrunId: run.id,
            }
        });
    });
    // Push it to a queue for processing (kafka/radis)
    res.json({
        message: "success"
    });
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
//# sourceMappingURL=index.js.map