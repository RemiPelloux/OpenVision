import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';

// The recovered Agent write helper truncates the user's file before writing the
// replacement in place. ENOSPC, EIO, EFBIG, a short write or termination then
// leaves a truncated/partial file while the tool reports failure and creates no
// review, so the previously saved bytes are lost. This owner replacement writes
// a sibling temporary file and renames it over the target on POSIX. Windows,
// hard-linked and foreign-owned files keep the in-place path, but restore the
// previous bytes (or remove a newly created file) when the write fails.
//
// The same recovered helper is bundled three times: the Agent execution
// extension, the Agent host extension and the Agent host daemon.
export const agentWriteMarker = '/* OpenVision durable Agent write v2 */';
// v1 (commit 88d2be4e) lacked the stale-temporary sweep; built outputs are upgraded.
export const previousAgentWriteMarker = '/* OpenVision durable Agent write v1 */';
// A writer killed between its temporary write and rename leaves a sibling.
// Later writes to the same file remove such siblings once they are this old.
export const staleTemporaryMs = 60000;
export const agentWriteEntry = 'extensions/cursor-agent-exec/dist/main.js';
export const agentWriteTargets = [
  { id: 'agent-exec', entry: agentWriteEntry, shape: 'minified', caller: 'await yu(h, y, { flush: !0 });',
    noSpace: '"ENOSPC" === e.code' },
  { id: 'agent-host', entry: 'extensions/cursor-agent-host/dist/main.js', shape: 'minified',
    caller: 'await wu(h, A, { flush: !0 });', noSpace: '"ENOSPC" === e.code' },
  { id: 'agent-host-daemon', entry: 'extensions/cursor-agent-host/dist/agent-host-daemon/dist/bin/daemon.cjs',
    shape: 'module', caller: 'await writeFileNoFollow(writeTargetPath, buffer, { flush: true });',
    noSpace: 'error3.code === "ENOSPC"' },
];

// Formatting (whitespace and trailing call commas) is not part of the contract.
const compact = value => value.replace(/\s+/g, '').replace(/,\)/g, ')');

const shapes = {
  minified: {
    anchor: '`Refusing to write to non-regular file at ${e}`',
    names: source => ({ fsp: source.match(/await \(0, ([\w$]+)\.open\)\(/)?.[1],
      fs: source.match(/const e = ([\w$]+)\.constants;/)?.[1],
      refuse: source.match(/throw new ([\w$]+)\(e, `Refusing to write through a symlink/)?.[1] }),
    original: ({ name, fsp, fs, refuse }) => `async function ${name}(e, t, r) {
  let s;
  try {
    s = await (0, ${fsp}.open)(e, (function () {
      const e = ${fs}.constants;
      let t = e.O_WRONLY | e.O_CREAT;
      return ("number" == typeof e.O_NOFOLLOW && (t |= e.O_NOFOLLOW),
        "number" == typeof e.O_CLOEXEC && (t |= e.O_CLOEXEC), t);
    })(), 438);
  } catch (t) {
    if ((function (e) {
      const t = e?.code;
      return ("ELOOP" === t || "EMLINK" === t || ("EPERM" === t && "number" == typeof ${fs}.constants.O_NOFOLLOW));
    })(t)) throw new ${refuse}(e, \`Refusing to write through a symlink at \${e}\`);
    throw t;
  }
  try {
    let n;
    try {
      n = (0, ${fs}.realpathSync)(e);
    } catch {
      throw new ${refuse}(e, \`Cannot verify canonical path before writing: \${e}\`);
    }
    if (n !== e) throw new ${refuse}(e, \`Refusing write: \${e} now resolves through a symlinked parent to \${n}\`);
    if (!(await s.stat()).isFile()) throw new ${refuse}(e, \`Refusing to write to non-regular file at \${e}\`);
    await s.truncate(0);
    const o = (function (e) {
      return Buffer.isBuffer(e) ? e : Buffer.from(e);
    })(t);
    let i = 0;
    for (; i < o.length;) {
      const { bytesWritten: e } = await s.write(o, i, o.length - i, i);
      if (0 === e) break;
      i += e;
    }
    r?.flush && (await s.sync());
  } finally {
    await s.close();
  }
}`,
  },
  module: {
    anchor: '`Refusing to write to non-regular file at ${canonicalPath}`',
    names: source => ({ fsp: source.match(/await \(0, ([\w$]+)\.open\)\(canonicalPath/)?.[1],
      fs: source.match(/\(0, ([\w$]+)\.realpathSync\)\(canonicalPath\)/)?.[1],
      refuse: source.match(/throw new ([\w$]+)\(\s*canonicalPath,\s*`Refusing to write through a symlink/)?.[1] }),
    original: ({ name, fsp, fs, refuse }) => `async function ${name}(canonicalPath, data, options2) {
  let fd;
  try {
    fd = await (0, ${fsp}.open)(canonicalPath, noFollowWriteFlags(), 438);
  } catch (err) {
    if (isNoFollowRefusal(err)) {
      throw new ${refuse}(canonicalPath, \`Refusing to write through a symlink at \${canonicalPath}\`);
    }
    throw err;
  }
  try {
    let resolvedNow;
    try {
      resolvedNow = (0, ${fs}.realpathSync)(canonicalPath);
    } catch {
      throw new ${refuse}(canonicalPath, \`Cannot verify canonical path before writing: \${canonicalPath}\`);
    }
    if (resolvedNow !== canonicalPath) {
      throw new ${refuse}(canonicalPath, \`Refusing write: \${canonicalPath} now resolves through a symlinked parent to \${resolvedNow}\`);
    }
    const stats = await fd.stat();
    if (!stats.isFile()) {
      throw new ${refuse}(canonicalPath, \`Refusing to write to non-regular file at \${canonicalPath}\`);
    }
    await fd.truncate(0);
    const buffer = toBuffer(data);
    let offset = 0;
    while (offset < buffer.length) {
      const { bytesWritten } = await fd.write(buffer, offset, buffer.length - offset, offset);
      if (bytesWritten === 0) {
        break;
      }
      offset += bytesWritten;
    }
    if (options2?.flush) {
      await fd.sync();
    }
  } finally {
    await fd.close();
  }
}`,
  },
};

// Locals use an ov prefix so they cannot shadow the bundle's bindings; the
// original parameter names are kept for the function's signature.
export function durableHelper({ name, params, fsp, fs, refuse }, version = 2) {
  const sweep = version < 2 ? '' : `\n    await ovSweep();`;
  const sweeper = version < 2 ? '' : `
  const ovSweep = async () => {
    // Only this helper's exact name pattern for the same target, and never a
    // recent temporary that a concurrent writer may still own.
    const ovDirectory = ovPath.dirname(ovTarget), ovPrefix = \`.\${ovPath.basename(ovTarget)}.openvision-\`;
    let ovEntries;
    try { ovEntries = await (0, ${fsp}.readdir)(ovDirectory); } catch { return; }
    for (const ovEntry of ovEntries) {
      if (!ovEntry.startsWith(ovPrefix) ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.tmp$/.test(ovEntry.slice(ovPrefix.length))) continue;
      const ovStale = ovPath.join(ovDirectory, ovEntry);
      try {
        const ovStats = await (0, ${fsp}.lstat)(ovStale);
        if (ovStats.isFile() && Date.now() - ovStats.mtimeMs > ${staleTemporaryMs}) await (0, ${fsp}.unlink)(ovStale);
      } catch {}
    }
  };`;
  return `async function ${name}(${params.join(', ')}) {
  ${version < 2 ? previousAgentWriteMarker : agentWriteMarker}
  const ovTarget = ${params[0]}, ovData = ${params[1]}, ovOptions = ${params[2]};
  const ovPath = require("node:path"), ovFlags = ${fs}.constants;
  const ovBytes = Buffer.isBuffer(ovData) ? ovData : Buffer.from(ovData);
  const ovOpenFlags = (ovBase) => ovBase | ("number" == typeof ovFlags.O_NOFOLLOW ? ovFlags.O_NOFOLLOW : 0) |
    ("number" == typeof ovFlags.O_CLOEXEC ? ovFlags.O_CLOEXEC : 0);
  const ovWriteAll = async (ovHandle, ovBuffer) => {
    for (let ovOffset = 0; ovOffset < ovBuffer.length;) {
      const { bytesWritten: ovWritten } = await ovHandle.write(ovBuffer, ovOffset, ovBuffer.length - ovOffset, ovOffset);
      if (0 === ovWritten)
        throw Object.assign(new Error(\`Short write: \${ovOffset} of \${ovBuffer.length} bytes at \${ovTarget}\`), { code: "EIO" });
      ovOffset += ovWritten;
    }
    ovOptions?.flush && (await ovHandle.sync());
  };
  const ovInspect = async () => {
    try { return await (0, ${fsp}.lstat)(ovTarget); } catch (ovError) { if (ovError?.code === "ENOENT") return; throw ovError; }
  };
  const ovCurrent = await ovInspect();
  if (ovCurrent?.isSymbolicLink()) throw new ${refuse}(ovTarget, \`Refusing to write through a symlink at \${ovTarget}\`);
  if (ovCurrent && !ovCurrent.isFile()) throw new ${refuse}(ovTarget, \`Refusing to write to non-regular file at \${ovTarget}\`);
  const ovCanonical = () => {
    let ovResolved;
    try {
      ovResolved = ovCurrent ? (0, ${fs}.realpathSync)(ovTarget)
        : ovPath.join((0, ${fs}.realpathSync)(ovPath.dirname(ovTarget)), ovPath.basename(ovTarget));
    } catch {
      throw new ${refuse}(ovTarget, \`Cannot verify canonical path before writing: \${ovTarget}\`);
    }
    if (ovResolved !== ovTarget)
      throw new ${refuse}(ovTarget, \`Refusing write: \${ovTarget} now resolves through a symlinked parent to \${ovResolved}\`);
  };
  ovCanonical();${sweeper}
  const ovUid = "function" == typeof process.getuid ? process.getuid() : void 0;
  if ("win32" !== process.platform &&
    (!ovCurrent || (1 === ovCurrent.nlink && (void 0 === ovUid || ovCurrent.uid === ovUid)))) {
    // Readers observe either the previous or the complete new file; a failed
    // or short write removes only the temporary sibling.${sweep}
    const ovTemporary = ovPath.join(ovPath.dirname(ovTarget),
      \`.\${ovPath.basename(ovTarget)}.openvision-\${require("node:crypto").randomUUID()}.tmp\`);
    let ovHandle;
    try {
      ovHandle = await (0, ${fsp}.open)(ovTemporary, ovOpenFlags(ovFlags.O_WRONLY | ovFlags.O_CREAT | ovFlags.O_EXCL),
        ovCurrent ? ovCurrent.mode & 4095 : 438);
      if (ovCurrent) {
        await ovHandle.chmod(ovCurrent.mode & 4095);
        await ovHandle.chown(ovCurrent.uid, ovCurrent.gid).catch(() => {});
      }
      await ovWriteAll(ovHandle, ovBytes);
      await ovHandle.close();
      ovHandle = void 0;
      const ovLatest = await ovInspect();
      if (ovLatest?.isSymbolicLink()) throw new ${refuse}(ovTarget, \`Refusing to write through a symlink at \${ovTarget}\`);
      if (ovLatest && !ovLatest.isFile()) throw new ${refuse}(ovTarget, \`Refusing to write to non-regular file at \${ovTarget}\`);
      await (0, ${fsp}.rename)(ovTemporary, ovTarget);
    } catch (ovError) {
      await ovHandle?.close().catch(() => {});
      await (0, ${fsp}.unlink)(ovTemporary).catch(() => {});
      throw ovError;
    }
    return;
  }
  let ovHandle;
  try {
    ovHandle = await (0, ${fsp}.open)(ovTarget, ovOpenFlags(ovFlags.O_RDWR | ovFlags.O_CREAT), 438);
  } catch (ovError) {
    const ovCode = ovError?.code;
    if ("ELOOP" === ovCode || "EMLINK" === ovCode || ("EPERM" === ovCode && "number" == typeof ovFlags.O_NOFOLLOW))
      throw new ${refuse}(ovTarget, \`Refusing to write through a symlink at \${ovTarget}\`);
    throw ovError;
  }
  try {
    ovCanonical();
    if (!(await ovHandle.stat()).isFile())
      throw new ${refuse}(ovTarget, \`Refusing to write to non-regular file at \${ovTarget}\`);
    const ovPrevious = ovCurrent ? await ovHandle.readFile() : void 0;
    try {
      await ovHandle.truncate(0);
      await ovWriteAll(ovHandle, ovBytes);
    } catch (ovError) {
      // Restore the bytes this helper removed; a new file is removed instead.
      try {
        if (ovPrevious) {
          await ovHandle.truncate(0);
          await ovWriteAll(ovHandle, ovPrevious);
          await ovHandle.sync();
        } else {
          const ovClosing = ovHandle;
          ovHandle = void 0;
          await ovClosing.close();
          await (0, ${fsp}.unlink)(ovTarget);
        }
      } catch (ovRestoreError) {
        ovError.openvisionRestoreError = ovRestoreError;
      }
      throw ovError;
    }
  } finally {
    await ovHandle?.close();
  }
}`;
}

function parseHelper(text, index) {
  const start = text.lastIndexOf('async function ', index);
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  if (node.type !== 'FunctionExpression' || !node.async || node.end < index || node.params.length !== 3 ||
      node.params.some(param => param.type !== 'Identifier'))
    throw new Error('Agent write helper contract changed');
  return node;
}

// Recovered helper and its bundle bindings, for the given target shape.
export function agentWriteHelper(text, shape = 'minified') {
  const { anchor, names } = shapes[shape];
  const index = text.indexOf(anchor);
  if (index < 0) throw new Error('Agent write helper missing');
  const node = parseHelper(text, index), source = text.slice(node.start, node.end);
  const found = { name: node.id?.name, params: node.params.map(param => param.name), ...names(source) };
  if (Object.values(found).some(value => !value)) throw new Error('Agent write helper identifiers changed');
  return { node, source, names: found };
}

// Installed durable helper (for tests and verification overlays).
export function durableAgentWriteHelper(text, marker = agentWriteMarker) {
  const index = text.indexOf(marker);
  if (index < 0) throw new Error('Durable Agent write helper missing');
  const node = parseHelper(text, index);
  return { node, source: text.slice(node.start, node.end) };
}

export function preserveAgentWrites(text, target = agentWriteTargets[0]) {
  if (text.includes(agentWriteMarker)) {
    if (text.split(agentWriteMarker).length !== 2) throw new Error('Agent write helper marker is ambiguous');
    return text;
  }
  if (text.includes(previousAgentWriteMarker)) {
    if (text.split(previousAgentWriteMarker).length !== 2) throw new Error('Agent write helper marker is ambiguous');
    const { node, source } = durableAgentWriteHelper(text, previousAgentWriteMarker);
    const names = { name: node.id.name, params: node.params.map(param => param.name),
      fsp: source.match(/await \(0, ([\w$]+)\.lstat\)\(ovTarget\)/)?.[1],
      fs: source.match(/ovFlags = ([\w$]+)\.constants;/)?.[1],
      refuse: source.match(/throw new ([\w$]+)\(ovTarget, `Refusing to write through a symlink/)?.[1] };
    // Upgrade only the exact v1 output; anything else is unexpected drift.
    if (Object.values(names).some(value => !value) || source !== durableHelper(names, 1))
      throw new Error(`Agent write helper v1 contract changed: ${target.id}`);
    return text.slice(0, node.start) + durableHelper(names) + text.slice(node.end);
  }
  const shape = shapes[target.shape];
  if (text.split(shape.anchor).length !== 2) throw new Error('Agent write helper missing or ambiguous');
  const { node, source, names } = agentWriteHelper(text, target.shape);
  if (compact(source) !== compact(shape.original(names))) throw new Error('Agent write helper contract changed');
  // The executor must remain the sole caller and keep its ENOSPC mapping, so the
  // reported tool result still means "nothing changed" on failure.
  if (text.split(`await ${names.name}(`).length !== 2 || text.split(target.caller).length !== 2 ||
      text.split(target.noSpace).length !== 2)
    throw new Error(`Agent write executor contract changed: ${target.id}`);
  return text.slice(0, node.start) + durableHelper(names) + text.slice(node.end);
}

// The helper's own sweep only runs when the same file is written again, so an
// orphan of a file that is never edited again stays visible in the explorer and
// Git status. On activation (startup), the Agent execution extension sweeps its
// open workspace roots once for the exact generated name, with the same 60 s age
// rule. The walk is bounded, skips symlinks, .git and node_modules, and runs off
// the activation path.
export const agentTemporarySweepMarker = '/* OpenVision Agent temporary startup sweep v1 */';
export const temporarySweepLimits = { directories: 4000, entries: 200000, depth: 32 };
const activation = 'async function $l(e) {\n      if (G.cursor.cursorAgentHostEnabled) {';

export function agentTemporarySweep(limits = temporarySweepLimits) {
  return `${agentTemporarySweepMarker}
async function openvisionSweepAgentTemporaries(roots, now = Date.now()) {
  const fsp = require("node:fs/promises"), path = require("node:path");
  const pattern = /^\\..+\\.openvision-[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.tmp$/;
  const result = { directories: 0, entries: 0, removed: [], truncated: false };
  const queue = roots.filter(root => "string" == typeof root && path.isAbsolute(root)).map(root => ({ directory: root, depth: 0 }));
  while (queue.length) {
    if (result.directories >= ${limits.directories} || result.entries >= ${limits.entries}) { result.truncated = true; break; }
    const { directory, depth } = queue.shift();
    let entries;
    try { entries = await fsp.readdir(directory, { withFileTypes: true }); } catch { continue; }
    result.directories++;
    for (const entry of entries) {
      if (++result.entries > ${limits.entries}) { result.truncated = true; break; }
      const full = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== ".git" && entry.name !== "node_modules" && depth + 1 < ${limits.depth}) queue.push({ directory: full, depth: depth + 1 });
      } else if (entry.isFile() && pattern.test(entry.name)) {
        // Same rule as the writer's sweep: a recent temporary may belong to a live writer.
        try {
          const stats = await fsp.lstat(full);
          if (stats.isFile() && now - stats.mtimeMs > ${staleTemporaryMs}) { await fsp.unlink(full); result.removed.push(full); }
        } catch {}
      }
    }
  }
  return result;
}
`;
}

export function sweepAgentTemporariesOnStartup(text) {
  if (text.includes(agentTemporarySweepMarker)) {
    if (text.split(agentTemporarySweepMarker).length !== 2) throw new Error('Agent temporary sweep marker is ambiguous');
    return text;
  }
  if (text.split(activation).length !== 2 || text.split('const G = require("vscode"),').length !== 2 ||
      !text.includes(agentWriteMarker))
    throw new Error('Agent execution activation contract changed');
  const index = text.indexOf(activation);
  return text.slice(0, index) + agentTemporarySweep() + '    ' + activation.replace('{\n', `{
      setTimeout(() => openvisionSweepAgentTemporaries((G.workspace.workspaceFolders ?? [])
        .filter((folder) => folder.uri.scheme === "file").map((folder) => folder.uri.fsPath))
        .then((swept) => swept.removed.length && console.log("[OpenVision] Removed " + swept.removed.length + " interrupted Agent write temporaries"),
          () => {}), 2000).unref?.();
`) + text.slice(index + activation.length);
}

export async function installAgentWriteDurability(root) {
  for (const target of agentWriteTargets) {
    const path = join(root, 'source/app', target.entry);
    const before = await readFile(path, 'utf8');
    let after = preserveAgentWrites(before, target);
    if (target.entry === agentWriteEntry) after = sweepAgentTemporariesOnStartup(after);
    if (before === after) continue;
    const backup = join(root, 'backups/agent-write', target.entry);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
