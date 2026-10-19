import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash, randomBytes } from 'node:crypto';
import { createMcpOAuthFixture } from './verify-mcp-oauth-fixture.mjs';

const base64url = buffer => buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const redirect = 'http://127.0.0.1:9/callback';
const call = (fixture, token, method = 'tools/list') => fetch(fixture.url, { method: 'POST',
  headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
  body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params: {} }) });

async function authorize(fixture, client) {
  const verifier = base64url(randomBytes(32)), challenge = base64url(createHash('sha256').update(verifier).digest());
  const url = new URL(`${fixture.origin}/authorize`);
  for (const [key, value] of Object.entries({ response_type: 'code', client_id: client.client_id, redirect_uri: redirect,
    code_challenge: challenge, code_challenge_method: 'S256', state: 'fixture-state' })) url.searchParams.set(key, value);
  const response = await fetch(url, { redirect: 'manual' });
  assert.equal(response.status, 302);
  return { location: new URL(response.headers.get('location')), verifier };
}
const token = (fixture, client, form) => fetch(`${fixture.origin}/token`, { method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({ client_id: client.client_id, client_secret: client.client_secret, ...form }) });

test('OAuth fixture walks discovery, PKCE consent, expiry and refresh', async () => {
  const fixture = await createMcpOAuthFixture();
  try {
    const challenged = await call(fixture);
    assert.equal(challenged.status, 401);
    const resourceMetadata = /resource_metadata="([^"]+)"/.exec(challenged.headers.get('www-authenticate'))[1];
    const resource = await (await fetch(resourceMetadata)).json();
    assert.deepEqual(resource.authorization_servers, [fixture.origin]);
    const server = await (await fetch(`${fixture.origin}/.well-known/oauth-authorization-server`)).json();
    assert.deepEqual(server.code_challenge_methods_supported, ['S256']);
    const client = await (await fetch(server.registration_endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ redirect_uris: [redirect], client_name: 'test', token_endpoint_auth_method: 'client_secret_post' }) })).json();
    assert.match(client.client_secret, /^ov-cs-/);

    fixture.settings.consent = 'deny';
    const denied = await authorize(fixture, client);
    assert.equal(denied.location.searchParams.get('error'), 'access_denied');
    assert.equal(denied.location.searchParams.get('state'), 'fixture-state');
    assert.equal(fixture.issued.accessTokens.length, 0);

    fixture.settings.consent = 'approve';
    const approved = await authorize(fixture, client);
    const code = approved.location.searchParams.get('code');
    const wrong = await token(fixture, client, { grant_type: 'authorization_code', code, redirect_uri: redirect, code_verifier: 'wrong' });
    assert.equal(wrong.status, 400, 'A mismatched PKCE verifier must be rejected');
    const approvedAgain = await authorize(fixture, client);
    const tokens = await (await token(fixture, client, { grant_type: 'authorization_code',
      code: approvedAgain.location.searchParams.get('code'), redirect_uri: redirect, code_verifier: approvedAgain.verifier })).json();
    assert.equal((await call(fixture, tokens.access_token)).status, 200);

    fixture.expireAccessTokens();
    const expired = await call(fixture, tokens.access_token);
    assert.equal(expired.status, 401);
    assert.match(expired.headers.get('www-authenticate'), /error="invalid_token"/);
    const refreshed = await (await token(fixture, client, { grant_type: 'refresh_token', refresh_token: tokens.refresh_token })).json();
    assert.notEqual(refreshed.access_token, tokens.access_token);
    assert.equal((await call(fixture, refreshed.access_token)).status, 200);
    assert.equal((await token(fixture, client, { grant_type: 'refresh_token', refresh_token: tokens.refresh_token })).status, 400,
      'Rotated refresh tokens are single use');

    fixture.settings.refresh = 'fail';
    assert.equal((await token(fixture, client, { grant_type: 'refresh_token', refresh_token: refreshed.refresh_token })).status, 400);
    assert.equal(fixture.count('token', item => item.grant === 'refresh_token'), 3);
    assert.equal(fixture.count('token', item => item.grant === 'authorization_code' && item.pkceVerified), 1);
    assert.equal(fixture.count('token', item => item.outcome === 'pkce_mismatch'), 1);
    assert.equal(fixture.count('authorize', item => item.consent === 'deny'), 1);
    const kinds = fixture.secrets().map(([kind]) => kind);
    for (const kind of ['access_token', 'refresh_token', 'client_secret', 'static_token']) assert.ok(kinds.includes(kind));
    assert.ok(!JSON.stringify(fixture.summary()).includes(tokens.access_token), 'Summaries never carry secret values');
    assert.deepEqual(fixture.errors, []);
  } finally { await fixture.dispose(); }
});

test('static bearer endpoint accepts only the configured token', async () => {
  const fixture = await createMcpOAuthFixture({ staticToken: 'ov-static-test' });
  try {
    const post = token => fetch(fixture.staticUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'tools/list', params: {} }) });
    assert.equal((await post('nope')).status, 401);
    assert.equal((await post('ov-static-test')).status, 200);
  } finally { await fixture.dispose(); }
});
