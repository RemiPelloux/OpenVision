import { createServer } from 'node:https';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash, X509Certificate } from 'node:crypto';

// Disposable self-signed server. No trust-store changes or TLS bypass flags.
export async function createUntrustedProvider(directory) {
  const executable = process.env.OPENVISION_TEST_OPENSSL ??
    (process.platform === 'win32' ? 'C:/Program Files/Git/usr/bin/openssl.exe' : 'openssl');
  const keyPath = join(directory, 'untrusted-server-key.pem');
  const certificatePath = join(directory, 'untrusted-server.pem');
  await promisify(execFile)(executable, ['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-days', '1',
    '-subj', '/CN=localhost', '-addext', 'subjectAltName=DNS:localhost,IP:127.0.0.1',
    '-keyout', keyPath, '-out', certificatePath], { windowsHide: true, timeout: 30000 });
  const certificate = await readFile(certificatePath), events = [], sockets = new Set();
  const server = createServer({ key: await readFile(keyPath), cert: certificate }, (request, response) => {
    events.push({ event: 'unexpected-http-request', method: request.method });
    response.writeHead(500); response.end();
  });
  server.on('connection', socket => { sockets.add(socket); socket.once('close', () => sockets.delete(socket)); });
  server.on('tlsClientError', error => events.push({ event: 'tls-client-error', code: error.code }));
  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => { server.off('error', reject); resolve(); });
  });
  return { url: `https://127.0.0.1:${server.address().port}/v1/chat/completions`,
    evidence: { certificateSha256: createHash('sha256').update(certificate).digest('hex'),
      kind: 'Self-signed leaf certificate; trust rejection only, not expiry or hostname mismatch.', events },
    async close() {
      for (const socket of sockets) socket.destroy();
      await new Promise(resolve => server.close(resolve));
    } };
}

// Disposable CA with an expired leaf and a hostname-mismatched leaf. Only the
// owned test process trusts this CA, through its launch environment; no system
// trust store or certificate-verification setting changes. The explicit validity
// window requires OpenSSL 3.4 or newer (-not_before/-not_after).
export async function createCertificateFailureProviders(directory) {
  const executable = process.env.OPENVISION_TEST_OPENSSL ??
    (process.platform === 'win32' ? 'C:/Program Files/Git/usr/bin/openssl.exe' : 'openssl');
  const run = args => promisify(execFile)(executable, args, { windowsHide: true, timeout: 30000 });
  const path = name => join(directory, name);
  await run(['req', '-x509', '-newkey', 'rsa:2048', '-nodes', '-days', '2', '-subj', '/CN=OpenVision disposable fixture CA',
    '-addext', 'basicConstraints=critical,CA:TRUE', '-addext', 'keyUsage=critical,keyCertSign,cRLSign',
    '-keyout', path('fixture-ca-key.pem'), '-out', path('fixture-ca.pem')]);
  const leaves = {
    expired: { host: 'localhost', alt: 'DNS:localhost,IP:127.0.0.1', serial: '2',
      validity: ['-not_before', '20200101000000Z', '-not_after', '20200102000000Z'] },
    hostname: { host: 'wrong-host.openvision.invalid', alt: 'DNS:wrong-host.openvision.invalid', serial: '3', validity: ['-days', '1'] },
  };
  const providers = {}, sockets = new Set(), servers = [];
  for (const [kind, leaf] of Object.entries(leaves)) {
    await writeFile(path(`${kind}-ext.cnf`), `basicConstraints=CA:FALSE\nextendedKeyUsage=serverAuth\nsubjectAltName=${leaf.alt}\n`);
    await run(['req', '-new', '-newkey', 'rsa:2048', '-nodes', '-subj', `/CN=${leaf.host}`,
      '-keyout', path(`${kind}-key.pem`), '-out', path(`${kind}.csr`)]);
    await run(['x509', '-req', '-in', path(`${kind}.csr`), '-CA', path('fixture-ca.pem'), '-CAkey', path('fixture-ca-key.pem'),
      '-set_serial', leaf.serial, ...leaf.validity, '-extfile', path(`${kind}-ext.cnf`), '-out', path(`${kind}.pem`)]);
    const certificate = await readFile(path(`${kind}.pem`)), events = [];
    const server = createServer({ key: await readFile(path(`${kind}-key.pem`)), cert: certificate }, (request, response) => {
      events.push({ event: 'unexpected-http-request', method: request.method });
      response.writeHead(500); response.end();
    });
    server.on('connection', socket => { sockets.add(socket); socket.once('close', () => sockets.delete(socket)); });
    server.on('tlsClientError', error => events.push({ event: 'tls-client-error', code: error.code }));
    await new Promise((resolve, reject) => {
      server.once('error', reject);
      server.listen(0, '127.0.0.1', () => { server.off('error', reject); resolve(); });
    });
    servers.push(server);
    const parsed = new X509Certificate(certificate);
    providers[kind] = { url: `https://127.0.0.1:${server.address().port}/v1/chat/completions`, events,
      evidence: { certificateSha256: createHash('sha256').update(certificate).digest('hex'), subject: parsed.subject,
        subjectAltName: parsed.subjectAltName, validFrom: parsed.validFrom, validTo: parsed.validTo, issuer: parsed.issuer } };
  }
  const ca = await readFile(path('fixture-ca.pem'));
  return { caPath: path('fixture-ca.pem'), caSha256: createHash('sha256').update(ca).digest('hex'), providers,
    async close() {
      for (const socket of sockets) socket.destroy();
      await Promise.all(servers.map(server => new Promise(resolve => server.close(resolve))));
    } };
}
