import { readdir, readFile, readlink } from 'node:fs/promises';

// Read-only Linux TCP socket ownership for native MCP verifiers. Maps the
// client ends of loopback connections (by local port) to the processes that
// hold them, through /proc/net/tcp{,6} inodes and /proc/<pid>/fd links.
// Nothing here ever signals a process.

const read = path => readFile(path, 'utf8').catch(() => '');

// Rows of /proc/net/tcp or tcp6: local/remote ports (hex), state and inode.
export function parseProcNetTcp(text) {
  return text.split('\n').slice(1).map(line => line.trim().split(/\s+/)).filter(fields => fields.length > 9)
    .map(fields => ({ localPort: parseInt(fields[1].split(':')[1], 16), remotePort: parseInt(fields[2].split(':')[1], 16),
      state: fields[3], inode: Number(fields[9]) }));
}

export function parseStat(text) {
  if (!text) return undefined;
  const fields = text.slice(text.lastIndexOf(')') + 2).split(' ');
  return { state: fields[0], ppid: Number(fields[1]), pgrp: Number(fields[2]) };
}

export async function ancestry(pid) {
  const chain = [];
  for (let current = pid; current > 1 && chain.length < 32;) {
    const info = parseStat(await read(`/proc/${current}/stat`)); if (!info) break;
    chain.push(current); current = info.ppid;
  }
  return chain;
}

// Client sockets connected to `serverPort`, each with the pids holding it and
// whether every holder descends from `hostPid`. Only this user's processes are readable.
export async function socketOwners(serverPort, hostPid) {
  const rows = [...parseProcNetTcp(await read('/proc/net/tcp')), ...parseProcNetTcp(await read('/proc/net/tcp6'))]
    .filter(row => row.remotePort === serverPort && row.inode > 0);
  const byInode = new Map(rows.map(row => [row.inode, { ...row, pids: [] }]));
  if (!byInode.size) return [];
  for (const entry of await readdir('/proc')) {
    if (!/^\d+$/.test(entry)) continue;
    for (const fd of await readdir(`/proc/${entry}/fd`).catch(() => [])) {
      const inode = Number(/^socket:\[(\d+)\]$/.exec(await readlink(`/proc/${entry}/fd/${fd}`).catch(() => ''))?.[1]);
      const socket = byInode.get(inode);
      if (socket && !socket.pids.includes(Number(entry))) socket.pids.push(Number(entry));
    }
  }
  const sockets = [...byInode.values()];
  for (const socket of sockets) {
    socket.hostDescendant = socket.pids.length > 0;
    for (const pid of socket.pids) if (!(await ancestry(pid)).includes(hostPid)) socket.hostDescendant = false;
  }
  return sockets;
}
