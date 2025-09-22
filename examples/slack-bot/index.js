// Slack Bot Example
const { Agent } = require('@agentx/toolkit');
const { WebClient } = require('@slack/web-api');

const agent = new Agent({ apiKey: process.env.AGENTX_API_KEY });
const slack = new WebClient(process.env.SLACK_TOKEN);

agent.onSlackMessage(async (event) => {
  const response = await agent.process(event.text);
  await slack.chat.postMessage({
    channel: event.channel,
    text: response
  });
});