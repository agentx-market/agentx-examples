// Batch Processing Example
const { Agent } = require('@agentx/toolkit');

const agent = new Agent({ apiKey: process.env.AGENTX_API_KEY });

async function processBatch(items, batchSize = 10) {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(item => agent.process(item))
    );
    results.push(...batchResults);
    
    // Rate limiting between batches
    if (i + batchSize < items.length) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return results;
}

module.exports = { processBatch };