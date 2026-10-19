import { createServer } from 'node:http';
import { createHash, randomUUID } from 'node:crypto';
import { mcpFixtureResponse } from './verify-mcp-protocol.mjs';

// Controlled OAuth-protected MCP fixture for OV-304. One loopback server hosts:
// - a streamable-HTTP MCP endpoint that answers 401 + WWW-Authenticate until it
//   receives a live access token (RFC 9728 resource_metadata);
// - protected-resource metadata and OAuth 2.1 authorization-server metadata;
// - dynamic client registration (RFC 7591), authorize with mandatory PKCE S256,
//   authorization_code and refresh_token grants, with configurable expiry;
// - a second MCP endpoint guarded by a static bearer token (for ${env:} headers).
// Every issued secret is random per run and is kept only in memory so the
// verifier can scan disk for it; records carry digests, never the values.
const digest = value => createHash('sha256').update(String(value)).digest('hex').slice(0, 16);
const base64url = buffer => buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

export async function createMcpOAuthFixture({ staticToken = `ov-static-${randomUUID()}` } = {}) {
  const requests = [], errors = [], events = [];
  const clients = new Map(), codes = new Map(), accessTokens = new Map(), refreshTokens = new Map();
  const issued = { accessTokens: [], refreshTokens: [], clientSecrets: [], codes: [], codeVerifiers: [], staticToken };
  const marker = `OpenVision MCP OAuth execution ${randomUUID()}`;
  const settings = { consent: 'approve', expiresIn: 3600, refresh: 'ok', issueClientSecret: true };
  let origin;
  // Returns the stored record so handlers can add their outcome to it.
  const event = (kind, details = {}) => { const record = { kind, at: new Date().toISOString(), ...details }; events.push(record); return record; };

  function json(response, status, body, headers = {}) {
    response.writeHead(status, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers });
    response.end(JSON.stringify(body));
  }
  async function body(request) {
    const chunks = []; for await (const chunk of request) chunks.push(chunk);
    return Buffer.concat(chunks).toString('utf8');
  }
  function clientAuthentication(request, form) {
    const basic = /^Basic (.+)$/i.exec(request.headers.authorization ?? '');
    if (basic) {
      const [id, secret] = Buffer.from(basic[1], 'base64').toString('utf8').split(':').map(decodeURIComponent);
      return { id, secret, method: 'client_secret_basic' };
    }
    return { id: form.get('client_id'), secret: form.get('client_secret') ?? undefined,
      method: form.has('client_secret') ? 'client_secret_post' : 'none' };
  }
  function authenticateClient(request, form) {
    const auth = clientAuthentication(request, form), client = clients.get(auth.id);
    if (!client) return { error: 'invalid_client' };
    if (client.client_secret && auth.secret !== client.client_secret) return { error: 'invalid_client' };
    return { client, method: auth.method };
  }
  function issueTokens(client, scope) {
    const access = `ov-at-${randomUUID()}`, refresh = `ov-rt-${randomUUID()}`;
    const expiresAt = Date.now() + settings.expiresIn * 1000;
    accessTokens.set(access, { clientId: client.client_id, expiresAt });
    refreshTokens.set(refresh, { clientId: client.client_id, scope });
    issued.accessTokens.push(access); issued.refreshTokens.push(refresh);
    return { access_token: access, token_type: 'Bearer', expires_in: settings.expiresIn, refresh_token: refresh,
      ...(scope ? { scope } : {}) };
  }
  function challenge(response, error) {
    response.writeHead(401, { 'Content-Type': 'application/json',
      'WWW-Authenticate': `Bearer ${error ? `error="${error}", ` : ''}resource_metadata="${origin}/.well-known/oauth-protected-resource/mcp"` });
    response.end(JSON.stringify({ error: error ?? 'unauthorized' }));
  }

  async function mcp(request, response, path) {
    if (request.method === 'GET') { response.writeHead(405, { Allow: 'POST' }); response.end(); return; }
    if (request.method === 'DELETE') { response.writeHead(200); response.end(); return; }
    if (request.method !== 'POST') { response.writeHead(405); response.end(); return; }
    const text = await body(request);
    let message; try { message = JSON.parse(text); } catch { response.writeHead(400); response.end(); return; }
    const bearer = /^Bearer (.+)$/i.exec(request.headers.authorization ?? '')?.[1];
    const record = { path, method: message.method, id: message.id, params: message.params, at: new Date().toISOString(),
      bearer: bearer ? digest(bearer) : null };
    requests.push(record);
    if (path === '/static-mcp') {
      record.authorized = bearer === staticToken;
      if (!record.authorized) { response.writeHead(401); response.end(); return; }
    } else {
      const token = bearer && accessTokens.get(bearer);
      if (!token) { record.authorized = false; challenge(response, bearer ? 'invalid_token' : undefined); return; }
      if (token.expiresAt <= Date.now()) { record.authorized = false; record.expired = true; challenge(response, 'invalid_token'); return; }
      record.authorized = true;
    }
    if (message.id === undefined) { response.writeHead(202); response.end(); return; }
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(mcpFixtureResponse(message, `${marker}${path === '/static-mcp' ? ' static' : ''}`)));
  }

  async function register(request, response) {
    const metadata = JSON.parse(await body(request) || '{}');
    if (!Array.isArray(metadata.redirect_uris) || !metadata.redirect_uris.length) {
      json(response, 400, { error: 'invalid_redirect_uri' }); return;
    }
    const client = { ...metadata, client_id: `ov-client-${randomUUID()}`, client_id_issued_at: Math.floor(Date.now() / 1000) };
    if (settings.issueClientSecret && metadata.token_endpoint_auth_method !== 'none') {
      client.client_secret = `ov-cs-${randomUUID()}`; client.client_secret_expires_at = 0;
      issued.clientSecrets.push(client.client_secret);
    }
    clients.set(client.client_id, client);
    event('register', { clientId: client.client_id, redirectUris: metadata.redirect_uris,
      authMethod: metadata.token_endpoint_auth_method ?? null, grantTypes: metadata.grant_types ?? null,
      clientName: metadata.client_name ?? null, secretIssued: Boolean(client.client_secret) });
    json(response, 201, client);
  }

  function authorize(request, response, url) {
    const query = url.searchParams, client = clients.get(query.get('client_id'));
    const redirect = query.get('redirect_uri');
    const record = event('authorize', { clientId: query.get('client_id'), redirectUri: redirect, state: Boolean(query.get('state')),
      codeChallengeMethod: query.get('code_challenge_method'), resource: query.get('resource'), scope: query.get('scope'),
      consent: settings.consent });
    if (!client || !client.redirect_uris.includes(redirect)) {
      response.writeHead(400, { 'Content-Type': 'text/plain' }); response.end('Unknown client or redirect URI'); return;
    }
    if (query.get('response_type') !== 'code' || query.get('code_challenge_method') !== 'S256' || !query.get('code_challenge')) {
      record.rejected = 'pkce'; response.writeHead(400, { 'Content-Type': 'text/plain' }); response.end('PKCE S256 is required'); return;
    }
    const target = new URL(redirect);
    if (query.get('state')) target.searchParams.set('state', query.get('state'));
    if (settings.consent === 'deny') {
      target.searchParams.set('error', 'access_denied');
      target.searchParams.set('error_description', 'The user denied the OpenVision fixture consent');
    } else {
      const code = `ov-code-${randomUUID()}`;
      codes.set(code, { clientId: client.client_id, redirect, challenge: query.get('code_challenge'),
        scope: query.get('scope') ?? undefined, used: false });
      issued.codes.push(code); target.searchParams.set('code', code);
    }
    response.writeHead(302, { Location: target.href }); response.end();
  }

  async function token(request, response) {
    const form = new URLSearchParams(await body(request));
    const grant = form.get('grant_type'), auth = authenticateClient(request, form);
    const record = event('token', { grant, clientAuth: auth.method ?? null, outcome: undefined });
    if (auth.error) { record.outcome = auth.error; json(response, 401, { error: auth.error }); return; }
    if (grant === 'authorization_code') {
      const entry = codes.get(form.get('code'));
      const verifier = form.get('code_verifier') ?? '';
      if (verifier) issued.codeVerifiers.push(verifier);
      if (!entry || entry.used || entry.clientId !== auth.client.client_id || entry.redirect !== form.get('redirect_uri')) {
        record.outcome = 'invalid_grant'; json(response, 400, { error: 'invalid_grant' }); return;
      }
      if (base64url(createHash('sha256').update(verifier).digest()) !== entry.challenge) {
        record.outcome = 'pkce_mismatch'; json(response, 400, { error: 'invalid_grant', error_description: 'PKCE verification failed' }); return;
      }
      entry.used = true; record.outcome = 'issued'; record.pkceVerified = true;
      json(response, 200, issueTokens(auth.client, entry.scope)); return;
    }
    if (grant === 'refresh_token') {
      const presented = form.get('refresh_token'), entry = refreshTokens.get(presented);
      record.refreshToken = presented ? digest(presented) : null;
      if (settings.refresh === 'fail' || !entry || entry.clientId !== auth.client.client_id) {
        record.outcome = 'invalid_grant'; json(response, 400, { error: 'invalid_grant', error_description: 'Refresh token rejected by fixture' });
        return;
      }
      refreshTokens.delete(presented); record.outcome = 'issued';
      json(response, 200, issueTokens(auth.client, entry.scope)); return;
    }
    record.outcome = 'unsupported_grant_type'; json(response, 400, { error: 'unsupported_grant_type' });
  }

  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url, origin);
      if (url.pathname === '/mcp' || url.pathname === '/static-mcp') return await mcp(request, response, url.pathname);
      if (url.pathname.startsWith('/.well-known/oauth-protected-resource')) {
        event('protected-resource-metadata', { path: url.pathname });
        return json(response, 200, { resource: `${origin}/mcp`, authorization_servers: [origin],
          bearer_methods_supported: ['header'], resource_name: 'OpenVision OAuth fixture' });
      }
      if (url.pathname === '/.well-known/oauth-authorization-server' || url.pathname === '/.well-known/openid-configuration') {
        event('authorization-server-metadata', { path: url.pathname });
        return json(response, 200, { issuer: origin, authorization_endpoint: `${origin}/authorize`,
          token_endpoint: `${origin}/token`, registration_endpoint: `${origin}/register`,
          response_types_supported: ['code'], grant_types_supported: ['authorization_code', 'refresh_token'],
          code_challenge_methods_supported: ['S256'],
          token_endpoint_auth_methods_supported: ['none', 'client_secret_post', 'client_secret_basic'] });
      }
      if (url.pathname === '/register' && request.method === 'POST') return await register(request, response);
      if (url.pathname === '/authorize' && request.method === 'GET') return authorize(request, response, url);
      if (url.pathname === '/token' && request.method === 'POST') return await token(request, response);
      event('unhandled', { method: request.method, path: url.pathname });
      response.writeHead(404); response.end();
    } catch (error) { errors.push(error.stack ?? String(error)); if (!response.headersSent) response.writeHead(500); response.end(); }
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  origin = `http://127.0.0.1:${server.address().port}`;
  return {
    origin, marker, requests, errors, events, issued, settings,
    url: `${origin}/mcp`, staticUrl: `${origin}/static-mcp`,
    // Every secret value this run produced, for disk/argv scanning.
    secrets() {
      return [...issued.accessTokens.map(value => ['access_token', value]), ...issued.refreshTokens.map(value => ['refresh_token', value]),
        ...issued.clientSecrets.map(value => ['client_secret', value]), ...issued.codes.map(value => ['authorization_code', value]),
        ...issued.codeVerifiers.filter(value => value.length >= 32).map(value => ['code_verifier', value]),
        ['static_token', staticToken]];
    },
    count(kind, predicate = () => true) { return events.filter(item => item.kind === kind && predicate(item)).length; },
    // Expire every live access token immediately (the next MCP request gets 401 invalid_token).
    expireAccessTokens() { for (const entry of accessTokens.values()) entry.expiresAt = 0; },
    summary() {
      return { events: events.map(item => ({ ...item })), requests: requests.map(({ params, ...rest }) => ({ ...rest,
        tool: params?.name ?? undefined })), digests: { access: issued.accessTokens.map(digest),
        refresh: issued.refreshTokens.map(digest), clientSecrets: issued.clientSecrets.map(digest) } };
    },
    async dispose() { server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); },
  };
}

export const secretDigest = digest;
