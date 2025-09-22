// Error Handling Example
const { Agent } = require('@agentx/toolkit');

const agent = new Agent({
  apiKey: process.env.AGENTX_API_KEY,
  retryAttempts: 3,
  retryDelay: 1000
});

agent.onError((error, context) => {
  console.error('Agent error:', error);
  
  if (error.code === 'RATE_LIMITED') {
    // Handle rate limiting
    return agent.retry(context, { delay: 5000 });
  }
  
  if (error.code === 'TIMEOUT') {
    // Handle timeouts
    return { error: 'Request timed out, please try again' };
  }
  
  // Default error response
  return { error: 'Something went wrong' };
});