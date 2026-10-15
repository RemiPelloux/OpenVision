'use strict';
const { claudeClient } = require('./account-claude-client.cjs');
// Experimental SDK operation: never submit a user turn just to obtain quotas.
async function readClaudeUsage(options, dependencies = {}) {
  const client = (dependencies.client ?? claudeClient)({ ...options, timeoutMs: 30000 });
  const rejectInteraction = message => {
    if (message.type === 'control_request') client.send({ type: 'control_response', response: {
      subtype: 'error', request_id: message.request_id, error: 'Usage checks cannot execute interactive operations.' } });
  };
  client.listeners.add(rejectInteraction);
  try {
    await client.request({ subtype: 'initialize', hooks: {}, sdkMcpServers: [] });
    return await client.request({ subtype: 'get_usage', skip_behaviors: true });
  } finally { client.listeners.delete(rejectInteraction); await client.close(); }
}
module.exports = { readClaudeUsage };
