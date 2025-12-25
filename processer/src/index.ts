import {PrismaClient} from "@prisma/client";
import { Kafka } from "kafkajs";

const client = new PrismaClient();

const TOPIC_NAME = "nexflo-outbox";

const kafka = new Kafka({
        clientId: "nexflo-processer",
        brokers: ["localhost:9092"],
})

async function main(){

    const producer = kafka.producer();
    await producer.connect();

    while(1){
        const pendingRows = await client.nexflowoutbox.findMany({
            where: {},
            take: 10
        })

        producer.send({
            topic: TOPIC_NAME,
            messages: pendingRows.map(r => ({
                value: JSON.stringify(r.nexflowrunId)
            }))
        })
    }
}