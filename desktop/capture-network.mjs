// Owned outbound-traffic capture for OV-501 verification. Nothing captured is
// forwarded: every request receives a local 503 so no project data leaves the
// machine during verification. Runs inside the verifier's network namespace.
import { execFileSync } from 'node:child_process';
import { createSocket } from 'node:dgram';
import { createServer as createHttpServer } from 'node:http';
import { createSecureServer } from 'node:http2';
import { createServer as createTcpServer } from 'node:net';
import { createSecureContext } from 'node:tls';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { clientHelloServerName, dnsAnswer, parseDnsQuery } from './data-destinations.mjs';

const bodyLimit = 32 * 1024 * 1024;

function openssl(args) { execFileSync('openssl', args, { stdio: ['ignore', 'ignore', 'pipe'] }); }

// A per-run certificate authority; its key never leaves the run directory.
export function createAuthority(directory) {
  const key = join(directory, 'capture-ca.key'), cert = join(directory, 'capture-ca.pem');
  openssl(['req', '-x509', '-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes', '-days', '2',
    '-subj', '/CN=OpenVision OV-501 capture CA', '-keyout', key, '-out', cert,
    '-addext', 'basicConstraints=critical,CA:TRUE', '-addext', 'keyUsage=critical,keyCertSign,cRLSign']);
  const contexts = new Map();
  let serial = 1;
  function context(host) {
    const name = (host || 'unknown.invalid').replace(/[^a-zA-Z0-9.-]/g, '_').slice(0, 200);
    if (contexts.has(name)) return contexts.get(name);
    const leafKey = join(directory, `leaf-${name}.key`), csr = join(directory, `leaf-${name}.csr`),
      leaf = join(directory, `leaf-${name}.pem`), ext = join(directory, `leaf-${name}.ext`);
    const san = /^\d+\.\d+\.\d+\.\d+$/.test(name) ? `IP:${name}` : `DNS:${name}`;
    writeFileSync(ext, `subjectAltName=${san}\nextendedKeyUsage=serverAuth\n`);
    openssl(['req', '-new', '-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes',
      '-subj', `/CN=${name}`, '-keyout', leafKey, '-out', csr]);
    openssl(['x509', '-req', '-in', csr, '-CA', cert, '-CAkey', key, '-set_serial', String(++serial),
      '-days', '2', '-extfile', ext, '-out', leaf]);
    const secure = createSecureContext({ key: readFileSync(leafKey), cert: readFileSync(leaf) + readFileSync(cert) });
    contexts.set(name, secure);
    return secure;
  }
  return { cert, context };
}

export async function startCapture({ directory, clock = () => 'unphased', dnsAddress = [198, 18, 0, 1],
  ports = { dns: 53, http: 80, https: 443, other: 9999 }, resolverAddress = '127.0.0.53', onRecord = () => {} }) {
  const authority = createAuthority(directory);
  const records = [], dns = [], servers = [], tunnels = [];
  const push = record => { record.phase ??= clock(); record.at = new Date().toISOString(); records.push(record); onRecord(record); };

  // Decrypted or plaintext HTTP/1.1 and HTTP/2 requests share one handler.
  async function handle(request, response, meta) {
    const chunks = []; let size = 0, truncated = false;
    for await (const chunk of request) {
      size += chunk.length;
      if (size <= bodyLimit) chunks.push(chunk); else truncated = true;
    }
    const headers = { ...request.headers };
    const host = String(headers[':authority'] ?? headers.host ?? meta.host ?? '').replace(/:\d+$/, '');
    const head = Object.entries(headers).reduce((sum, [name, value]) => sum + name.length + String(value).length + 4, 0);
    const path = headers[':path'] ?? request.url;
    push({ kind: 'request', transport: meta.transport, host, method: request.method, path, httpVersion: request.httpVersion,
      headers, body: Buffer.concat(chunks), bodyBytes: size, truncated,
      bytes: head + size + String(request.method).length + String(path).length + 12 });
    const body = JSON.stringify({ code: 'unavailable', message: 'OpenVision OV-501 capture: upstream not contacted' });
    response.writeHead(503, { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) });
    response.end(body);
  }

  // SNI is recorded before certificate validation, so hosts are known even
  // when a client (for example a native addon with its own roots) rejects
  // the capture certificate.
  const sni = [];
  const tls = createSecureServer({ allowHTTP1: true, secureContext: authority.context('capture.invalid'),
    SNICallback(name, callback) {
      sni.push({ name, phase: clock(), at: new Date().toISOString() });
      try { callback(null, authority.context(name)); } catch (error) { callback(error); }
    } });
  const parentOf = socket => socket?._parent ?? socket;
  tls.on('request', (request, response) => {
    const raw = parentOf(request.socket?.session?.socket ?? request.socket);
    handle(request, response, { transport: raw?.openvisionTransport ?? 'tls',
      host: request.socket?.servername ?? raw?.openvisionHost }).catch(() => {});
  });
  tls.on('secureConnection', socket => { const raw = parentOf(socket); if (socket.servername) raw.openvisionHost = socket.servername; });
  tls.on('tlsClientError', (error, socket) => {
    const raw = parentOf(socket);
    if (socket?.servername) raw.openvisionHost = socket.servername;
    raw.openvisionError = error.code ?? error.message;
    if (process.env.OPENVISION_CAPTURE_DEBUG) console.error('capture tls', error.message);
  });
  tls.on('sessionError', () => {});

  // TLS wraps the socket's native handle, so the stream is not peeked here:
  // port 80 targets are plaintext HTTP, everything else is terminated as TLS.
  function intercept(socket, transport, target) {
    socket.openvisionTransport = transport;
    socket.openvisionTarget = target;
    socket.openvisionHost = String(target ?? '').replace(/:\d+$/, '');
    const secure = !/:80$/.test(String(target));
    socket.once('close', () => push({ kind: 'connection', transport, host: socket.openvisionHost, address: target,
      tls: secure, error: socket.openvisionError, bytes: socket.bytesRead, bytesReturned: socket.bytesWritten }));
    socket.on('error', () => {});
    (secure ? tls : plain).emit('connection', socket);
  }

  const plain = createHttpServer((request, response) => handle(request, response,
    { transport: request.socket.openvisionTransport ?? 'http', host: request.headers.host }).catch(() => {}));

  // Explicit proxy for --proxy-server. CONNECT tunnels terminate here.
  const proxy = createHttpServer((request, response) => handle(request, response,
    { transport: 'proxy-http', host: new URL(request.url, 'http://unknown').host }).catch(() => {}));
  proxy.on('connect', (request, socket, head) => {
    tunnels.push({ target: request.url, phase: clock() });
    socket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
    if (head?.length) socket.unshift(head);
    intercept(socket, 'proxy-connect', request.url);
  });
  await new Promise(resolve => proxy.listen(0, '127.0.0.1', resolve));
  servers.push(proxy);

  // Transparent catch-alls for anything that bypasses the proxy.
  for (const [port, transport] of [[ports.https, 'direct-tls'], [ports.http, 'direct-http'], [ports.other, 'direct-other']]) {
    const server = createTcpServer(socket => {
      const target = `${socket.localAddress}:${socket.localPort}`;
      if (transport === 'direct-other') {
        let bytes = 0; const first = [];
        socket.on('data', chunk => { bytes += chunk.length; if (first.length < 4) first.push(chunk); });
        socket.on('close', () => {
          const data = Buffer.concat(first);
          push({ kind: 'connection', transport, host: clientHelloServerName(data), address: target, body: data, bytes });
        });
        socket.on('error', () => {});
        setTimeout(() => socket.destroy(), 5000).unref();
        return;
      }
      intercept(socket, transport, target);
    });
    await new Promise((resolve, reject) => { server.once('error', reject); server.listen(port, '0.0.0.0', resolve); });
    servers.push(server);
  }

  // The resolver address in the namespace's resolv.conf gets its own socket:
  // a reply from a wildcard socket leaves from 127.0.0.1, and resolvers that
  // connect() their UDP socket to 127.0.0.53 (Chromium, glibc) drop it, so the
  // name was recorded but the client never connected. The wildcard socket
  // still answers queries sent to any other address.
  const udps = [];
  for (const address of [resolverAddress, '0.0.0.0']) {
    const udp = createSocket({ type: 'udp4', reuseAddr: true });
    udp.on('message', (message, remote) => {
      const query = parseDnsQuery(message);
      if (!query) return;
      dns.push({ name: query.name, type: query.type, phase: clock(), at: new Date().toISOString() });
      udp.send(dnsAnswer(message, query, dnsAddress), remote.port, remote.address);
    });
    await new Promise((resolve, reject) => { udp.once('error', reject); udp.bind(ports.dns, address, resolve); });
    udps.push(udp);
  }

  return {
    authority, records, dns, sni, tunnels, proxyPort: proxy.address().port,
    async close() {
      for (const udp of udps) udp.close();
      for (const server of servers) { server.closeAllConnections?.(); server.close(); }
      tls.close(); plain.close();
    },
  };
}
