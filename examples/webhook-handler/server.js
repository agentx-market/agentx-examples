// Webhook Handler Example
const express = require('express');
const { Agent } = require('@agentx/toolkit');

const app = express();
const agent = new Agent({ apiKey: process.env.AGENTX_API_KEY });

app.use(express.json());

app.post('/webhook', async (req, res) => {
  const result = await agent.processWebhook(req.body);
  res.json(result);
});

app.listen(3000);