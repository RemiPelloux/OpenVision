import { createServer } from 'node:https';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

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
