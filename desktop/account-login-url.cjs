'use strict';

function officialLoginUrl(value, provider) {
  if (!['codex', 'claude'].includes(provider)) throw new Error('Choose Codex or Claude.');
  let url;
  try { url = new URL(value); } catch { throw new Error('Official client returned an invalid sign-in URL.'); }
  const hosts = provider === 'codex' ? ['auth.openai.com', 'chatgpt.com'] : ['claude.ai', 'claude.com', 'console.anthropic.com', 'platform.claude.com'];
  if (url.protocol !== 'https:' || !hosts.includes(url.hostname) || url.port || url.username || url.password)
    throw new Error('Official client returned an unexpected sign-in destination.');
  return url.href;
}

module.exports = { officialLoginUrl };
