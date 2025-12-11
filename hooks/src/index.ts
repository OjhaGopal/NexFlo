import express from "express"

const app = express();

app.post("/hooks/catch/:userId/:nexfloId", (req, res) => {
    const userId = req.params.userId;
    const nexfloId = req.params.nexfloId;
    // Handle the webhook logic here

    //Store in DB a new trigger for the userId and nexfloId
    
    // Push it to a queue for processing (kafka/radis)

    res.status(200).send(`Webhook received for user ${userId} and nexflo ${nexfloId}`);
} )