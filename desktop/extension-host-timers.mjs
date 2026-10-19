// Runtime handle inventory of owned extension hosts (OV-1003), replacing static
// setInterval counts. The hosts are started with --inspect-extensions; each
// host's inspector port is found from its own listening sockets in /proc (never
// by scanning other processes), and process.getActiveResourcesInfo() is read
// over the Chrome DevTools protocol. Read-only: nothing is paused or changed.
import { readdir, readFile, readlink } from 'node:fs/promises';

const read = path => readFile(path, 'utf8').catch(() => '');

export async function listeningPorts(pid) {
  const inodes = new Set();
  for (const fd of await readdir(`/proc/${pid}/fd`).catch(() => [])) {
    const target = await readlink(`/proc/${pid}/fd/${fd}`).catch(() => '');
    const inode = /^socket:\[(\d+)\]$/.exec(target)?.[1]; if (inode) inodes.add(inode);
  }
  const ports = new Set();
  for (const table of ['tcp', 'tcp6']) for (const line of (await read(`/proc/${pid}/net/${table}`)).split('\n').slice(1)) {
    const fields = line.trim().split(/\s+/);
    // local_address, state 0A = LISTEN, inode
    if (fields[3] === '0A' && inodes.has(fields[9])) ports.add(parseInt(fields[1].split(':')[1], 16));
  }
  return [...ports];
}

const expression = `JSON.stringify(process.getActiveResourcesInfo().reduce((counts, type) => (counts[type] = (counts[type] ?? 0) + 1, counts), {}))`;

async function evaluate(url) {
  const socket = new WebSocket(url);
  try {
    await new Promise((resolve, reject) => { socket.onopen = resolve; socket.onerror = () => reject(Error('inspector connect failed')); });
    const reply = new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(Error('inspector timeout')), 5000);
      socket.onmessage = event => { const message = JSON.parse(event.data); if (message.id === 1) { clearTimeout(timer); resolve(message); } };
    });
    socket.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression, returnByValue: true } }));
    const message = await reply;
    return JSON.parse(message.result?.result?.value ?? '{}');
  } finally { socket.close(); }
}

// hosts: [{ pid, name }] of owned extension-host processes.
export async function extensionHostResources(hosts) {
  const inventory = [];
  for (const host of hosts) {
    const entry = { pid: host.pid, name: host.name, ports: await listeningPorts(host.pid) };
    for (const port of entry.ports) {
      try {
        const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`, { signal: AbortSignal.timeout(3000) })).json();
        const target = targets.find(item => item.webSocketDebuggerUrl);
        if (!target) continue;
        entry.inspectorPort = port; entry.resources = await evaluate(target.webSocketDebuggerUrl);
        break;
      } catch (error) { entry.error = error.message; }
    }
    inventory.push(entry);
  }
  return inventory;
}
