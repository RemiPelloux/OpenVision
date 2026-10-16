// Process-family network capture for native telemetry verification (Linux).
// Three independent observers: an owned loopback proxy that refuses every
// non-loopback destination, /proc socket sampling restricted to the owned
// process tree, and a syscall trace (connect/sendto/sendmsg) of that tree.
import { createServer, request as httpRequest } from 'node:http';
import { connect } from 'node:net';
import { readdir, readFile, readlink } from 'node:fs/promises';

export const telemetryPattern = /sentry|statsig|segment\.(io|com)|amplitude|datadog|datadoghq|mixpanel|honeycomb|bugsnag|rollbar|appcenter|vortex|events\.data\.microsoft|dc\.services\.visualstudio|applicationinsights|telemetry|metrics\.cursor|\/tev1|\/rgstr|SubmitPerformanceEvents|SubmitMetrics|AppendCppTelem|SubmitLogs|TrackEvents|DebuggingDataUpload|crashpad|crash-?report|breakpad|googleapis\.com\/.*(update|crx)|clients\d?\.google\.com|update\.googleapis/i;

export function isLoopbackHost(host) {
  const name = String(host).replace(/^\[|\]$/g, '').toLowerCase();
  return name === 'localhost' || name === '::1' || /^127\.\d+\.\d+\.\d+$/.test(name) || name === '::ffff:127.0.0.1';
}

function splitAuthority(authority) {
  const match = /^\[([^\]]+)\]:(\d+)$/.exec(authority) ?? /^([^:]+):(\d+)$/.exec(authority);
  return match ? { host: match[1], port: Number(match[2]) } : { host: authority, port: 443 };
}

// Every non-loopback destination is refused before any byte reaches it, so the
// capture records attempted destinations without sending activity off-host.
export async function createLoopbackProxy() {
  const events = [];
  const server = createServer((request, response) => {
    let target;
    try { target = new URL(request.url); } catch { response.writeHead(400); return response.end(); }
    const allowed = isLoopbackHost(target.hostname);
    events.push({ at: Date.now(), method: request.method, host: target.hostname, port: Number(target.port || 80),
      url: target.href, allowed, userAgent: request.headers['user-agent'] });
    if (!allowed) { response.writeHead(403); return response.end(); }
    const upstream = httpRequest({ host: target.hostname, port: target.port || 80, method: request.method,
      path: target.pathname + target.search, headers: request.headers }, reply => {
      response.writeHead(reply.statusCode, reply.headers); reply.pipe(response);
    });
    upstream.on('error', () => { if (!response.headersSent) response.writeHead(502); response.end(); });
    request.pipe(upstream);
  });
  server.on('connect', (request, socket, head) => {
    const { host, port } = splitAuthority(request.url);
    const allowed = isLoopbackHost(host);
    events.push({ at: Date.now(), method: 'CONNECT', host, port, allowed, userAgent: request.headers['user-agent'] });
    socket.on('error', () => {});
    if (!allowed) return socket.end('HTTP/1.1 403 Forbidden\r\nContent-Length: 0\r\n\r\n');
    const upstream = connect(port, host, () => {
      socket.write('HTTP/1.1 200 Connection Established\r\n\r\n');
      if (head?.length) upstream.write(head);
      upstream.pipe(socket); socket.pipe(upstream);
    });
    upstream.on('error', () => socket.destroy());
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  return { events, port: server.address().port, close: () => new Promise(resolve => {
    server.closeAllConnections?.(); server.close(() => resolve());
  }) };
}

// Owned process family: the launch root and every live descendant.
export async function processFamily(rootPid, procRoot = '/proc') {
  const parents = new Map();
  for (const entry of await readdir(procRoot)) {
    if (!/^\d+$/.test(entry)) continue;
    const stat = await readFile(`${procRoot}/${entry}/stat`, 'utf8').catch(() => undefined);
    if (!stat) continue;
    const fields = stat.slice(stat.lastIndexOf(')') + 2).split(' ');
    parents.set(Number(entry), { ppid: Number(fields[1]), name: stat.slice(stat.indexOf('(') + 1, stat.lastIndexOf(')')) });
  }
  const family = new Map();
  if (parents.has(rootPid)) family.set(rootPid, parents.get(rootPid).name);
  let grew = true;
  while (grew) {
    grew = false;
    for (const [pid, { ppid, name }] of parents) if (!family.has(pid) && family.has(ppid)) { family.set(pid, name); grew = true; }
  }
  return family;
}

function decodeAddress(hex, v6) {
  const [address, port] = hex.split(':');
  if (!v6) return { ip: address.match(/../g).reverse().map(byte => parseInt(byte, 16)).join('.'), port: parseInt(port, 16) };
  const words = address.match(/.{8}/g).map(word => word.match(/../g).reverse().join(''));
  const groups = words.join('').toLowerCase().match(/.{4}/g).map(group => group.replace(/^0+(?=.)/, ''));
  let ip = groups.join(':').replace(/(^|:)0(:0)+(:|$)/, '::');
  if (/^::ffff:[0-9a-f]+:[0-9a-f]+$/.test(ip)) {
    const tail = words[3].match(/../g).map(byte => parseInt(byte, 16));
    ip = `::ffff:${tail.join('.')}`;
  }
  return { ip, port: parseInt(port, 16) };
}

export function parseProcNet(text, proto) {
  const v6 = proto.endsWith('6');
  return text.trim().split('\n').slice(1).map(line => line.trim().split(/\s+/)).map(fields => ({
    proto, local: decodeAddress(fields[1], v6), remote: decodeAddress(fields[2], v6), state: fields[3], inode: fields[9],
  }));
}

export function isLoopbackIp(ip) {
  return ip === '::1' || /^127\./.test(ip) || /^::ffff:127\./.test(ip);
}

function unspecified(ip) { return ip === '0.0.0.0' || ip === '::' || ip === '::ffff:0.0.0.0'; }

// Sockets owned by the family, joined from per-process fd tables and the
// process's own network-namespace tables. Listening/unbound sockets are kept
// separately so loopback listeners can be audited too.
export async function socketSnapshot(pids, procRoot = '/proc') {
  const tables = new Map(), result = [];
  for (const [pid, name] of pids) {
    const namespace = await readlink(`${procRoot}/${pid}/ns/net`).catch(() => undefined);
    if (!namespace) continue;
    if (!tables.has(namespace)) {
      const entries = new Map();
      for (const proto of ['tcp', 'tcp6', 'udp', 'udp6']) {
        const text = await readFile(`${procRoot}/${pid}/net/${proto}`, 'utf8').catch(() => '');
        if (text) for (const entry of parseProcNet(text, proto)) entries.set(entry.inode, entry);
      }
      tables.set(namespace, entries);
    }
    const entries = tables.get(namespace);
    const fds = await readdir(`${procRoot}/${pid}/fd`).catch(() => []);
    for (const fd of fds) {
      const target = await readlink(`${procRoot}/${pid}/fd/${fd}`).catch(() => '');
      const inode = /^socket:\[(\d+)\]$/.exec(target)?.[1];
      const entry = inode && entries.get(inode);
      if (entry) result.push({ pid, process: name, namespace, ...entry });
    }
  }
  return result;
}

export function remoteSockets(sockets) {
  return sockets.filter(socket => !unspecified(socket.remote.ip) && socket.remote.port !== 0);
}

// strace -f -yy output: connect/sendto/sendmsg destinations, socket transport
// (decoded from the fd annotation) and systemd-resolved hostname queries.
// A UDP connect sends no datagram; glibc (port 0, address sorting) and
// Chromium use them as route probes. Datagrams are taken from send calls.
export function parseSyscallTrace(text) {
  const connects = [], lookups = [], datagrams = [];
  for (const line of text.split('\n')) {
    const head = /^(?:(\d+)\s+)?(?:(\d+\.\d+)\s+)?(connect|sendto|sendmsg|sendmmsg)\(\d+(?:<([A-Z]+)(?:v6)?[-:])?/.exec(line);
    if (!head) continue;
    const pid = Number(head[1]), at = head[2] ? Math.round(Number(head[2]) * 1000) : undefined, call = head[3];
    const transport = head[4]?.toLowerCase();
    const inet = /sin_port=htons\((\d+)\), sin_addr=inet_addr\("([^"]+)"\)/.exec(line);
    const inet6 = /sin6_port=htons\((\d+)\).*inet_pton\(AF_INET6, "([^"]+)"/.exec(line);
    const unix = /sa_family=AF_UNIX, sun_path=(@?"[^"]*")/.exec(line);
    const result = /\) = (-?\d+)(?: (\w+))?/.exec(line);
    const outcome = result ? { return: Number(result[1]), errno: result[2] } : {};
    if (call !== 'connect' && transport === 'udp') {
      const peer = /->\[?([0-9a-fA-F.:]+?)\]?:(\d+)\]>/.exec(line);
      const [, port, ip] = inet ?? inet6 ?? (peer ? [undefined, peer[2], peer[1]] : []);
      if (ip) datagrams.push({ pid, at, call, transport, ip, port: Number(port), ...outcome });
    }
    if ((inet || inet6) && call === 'connect') {
      const [, port, ip] = inet ?? inet6;
      connects.push({ pid, at, call, transport, family: inet ? 'inet' : 'inet6', ip, port: Number(port), ...outcome });
    } else if (unix && call === 'connect') connects.push({ pid, at, call, transport: 'unix', family: 'unix',
      path: JSON.parse(unix[1].replace(/^@/, '')), abstract: unix[1].startsWith('@'), ...outcome });
    for (const match of line.matchAll(/io\.systemd\.Resolve\.ResolveHostname\\",\\"parameters\\":\{\\"name\\":\\"([^\\]+)\\"/g))
      lookups.push({ pid, at, name: match[1] });
  }
  return { connects, lookups, datagrams };
}

// Connects that can carry bytes off-host: TCP (or an undecoded transport) to a
// non-loopback address. A UDP connect counts only when a datagram follows.
export function trafficConnects({ connects, datagrams }) {
  const sent = new Set(datagrams.map(entry => `${entry.ip}|${entry.port}`));
  return connects.filter(entry => entry.family !== 'unix' && !isLoopbackIp(entry.ip) && entry.port !== 0 &&
    (entry.transport !== 'udp' || sent.has(`${entry.ip}|${entry.port}`)));
}

// Classification of every observed remote destination. "user" means the user
// configured or explicitly initiated it; anything else fails the gate.
export function classifyDestination(host, { configured = [] } = {}) {
  const name = String(host).toLowerCase();
  if (isLoopbackHost(name) || isLoopbackIp(name)) return { class: 'loopback', allowed: true };
  if (configured.some(entry => entry === name || name.endsWith(`.${entry}`))) return { class: 'user-configured', allowed: true };
  if (telemetryPattern.test(name)) return { class: 'telemetry', allowed: false };
  return { class: 'unclassified-automatic', allowed: false };
}
