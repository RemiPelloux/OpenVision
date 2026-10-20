'use strict';
// OV-803 measurement hook. Inert unless OPENVISION_NATIVE_CALL_LOG names an
// existing absolute directory. When enabled, every load of a proprietary native
// addon in this process is wrapped in a logging proxy that records the export
// and member used, argument sizes (never argument contents), synchronous
// duration and promise settlement time. Records are JSON lines in
// <directory>/native-calls-<pid>.jsonl. Logging failures never change results.
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');

const directory = process.env.OPENVISION_NATIVE_CALL_LOG;
const installed = Symbol.for('openvision.nativeCallLog');
const addons = Object.freeze({
  'file_service.linux-x64-gnu.node': 'file-service',
  'tree-chunk-napi.linux-x64-gnu.node': 'tree-chunk-napi',
  'cursor_proclist.node': 'cursor-proclist',
});
const maxRecords = 50000;

function argumentSize(value, depth = 0) {
  if (value === null || value === undefined) return 0;
  switch (typeof value) {
    case 'string': return Buffer.byteLength(value);
    case 'number': case 'boolean': case 'bigint': return 8;
    case 'function': return 0;
    case 'symbol': return 0;
  }
  if (ArrayBuffer.isView(value) || value instanceof ArrayBuffer) return value.byteLength;
  if (depth > 4) return 0;
  let total = 0;
  if (Array.isArray(value)) { for (const item of value) total += argumentSize(item, depth + 1); return total; }
  if (value instanceof Map) { for (const [key, item] of value) total += argumentSize(key, depth + 1) + argumentSize(item, depth + 1); return total; }
  for (const key of Object.keys(value)) total += Buffer.byteLength(key) + argumentSize(value[key], depth + 1);
  return total;
}

function describe(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return `array(${value.length})`;
  if (ArrayBuffer.isView(value)) return 'bytes';
  return typeof value;
}

function createLog(file) {
  let records = 0, dropped = 0;
  // Electron main is 'browser'; extension hosts are utility processes started with this entry point.
  // Child processes inherit the variable, so only an Electron process counts as the host.
  const script = path.basename(process.argv[1] ?? ''), entry = process.env.VSCODE_ESM_ENTRYPOINT ?? script;
  const processType = script === 'daemon.cjs' ? 'agentHostDaemon'
    : process.type && /extensionHostProcess$/.test(entry) ? 'extensionHost' : process.type ?? 'node';
  const base = { pid: process.pid, ppid: process.ppid, processType, entry };
  const write = record => {
    if (records >= maxRecords) { dropped++; return; }
    records++;
    try { fs.appendFileSync(file, JSON.stringify({ t: Date.now(), ...base, ...record }) + '\n'); } catch {}
  };
  process.once('exit', () => { if (dropped) try { fs.appendFileSync(file, JSON.stringify({ t: Date.now(), ...base, event: 'dropped', dropped }) + '\n'); } catch {} });
  return write;
}

function wrapAddon(exports, addon, filename, write) {
  const targets = new WeakMap(); // proxy -> original, so native calls receive real objects
  const classes = new Set(Object.values(exports).filter(value => typeof value === 'function' && value.prototype));
  const unwrapOne = value => (value && (typeof value === 'object' || typeof value === 'function') && targets.has(value)) ? targets.get(value) : value;
  const unwrap = values => values.map(value => Array.isArray(value) && value.some(item => targets.has(item)) ? value.map(unwrapOne) : unwrapOne(value));

  function record(exportName, member, kind, args, invoke) {
    const started = process.hrtime.bigint();
    const entry = { event: 'call', addon, export: exportName, member, kind, argc: args.length,
      argBytes: args.map(value => argumentSize(value)), argTypes: args.map(describe) };
    let result;
    try { result = invoke(); }
    catch (error) {
      write({ ...entry, durationMs: Number(process.hrtime.bigint() - started) / 1e6, error: String(error?.code ?? error?.name ?? 'Error') });
      throw error;
    }
    entry.durationMs = Number(process.hrtime.bigint() - started) / 1e6;
    if (result && typeof result.then === 'function') {
      entry.async = true;
      // Instances resolved by native promises (for example a parsed tree) are wrapped too.
      return result.then(value => {
        write({ ...entry, settledMs: Number(process.hrtime.bigint() - started) / 1e6, outcome: 'fulfilled', resultBytes: argumentSize(value) });
        return wrapResult(exportName, value);
      }, error => {
        write({ ...entry, settledMs: Number(process.hrtime.bigint() - started) / 1e6, outcome: 'rejected', error: String(error?.code ?? error?.name ?? 'Error') });
        throw error;
      });
    }
    write({ ...entry, resultBytes: argumentSize(result), resultType: describe(result) });
    return wrapResult(exportName, result);
  }

  // Native classes are recognized by constructor; the addon may return classes it
  // does not export (napi-rs registers them all, but loaders may re-export a subset).
  function nativeInstance(value) {
    return value && typeof value === 'object' && !targets.has(value) && !Array.isArray(value) && !ArrayBuffer.isView(value) &&
      (classes.has(value.constructor) || (Object.getPrototypeOf(value) !== Object.prototype && Object.getPrototypeOf(value) !== null &&
        !(value instanceof Promise) && !(value instanceof Error) && !(value instanceof Map) && !(value instanceof Set)));
  }
  function wrapResult(exportName, value) {
    if (Array.isArray(value) && value.some(nativeInstance)) return value.map(item => nativeInstance(item) ? wrapInstance(item.constructor?.name || exportName, item) : item);
    if (nativeInstance(value)) return wrapInstance(value.constructor?.name || exportName, value);
    return value;
  }

  function wrapInstance(exportName, instance) {
    const proxy = new Proxy(instance, {
      get(target, key) {
        const value = Reflect.get(target, key, target);
        if (typeof value !== 'function' || typeof key !== 'string' || key === 'constructor') return value;
        return function (...args) {
          return record(exportName, key, 'method', args, () => Reflect.apply(value, target, unwrap(args)));
        };
      },
      set(target, key, value) { return Reflect.set(target, key, value, target); },
    });
    targets.set(proxy, instance);
    return proxy;
  }

  function wrapExport(exportName, value) {
    if (typeof value !== 'function') return value;
    const proxy = new Proxy(value, {
      apply(target, self, args) {
        return record(exportName, '(call)', 'function', args, () => Reflect.apply(target, targets.get(self) ?? self, unwrap(args)));
      },
      construct(target, args, newTarget) {
        const instance = record(exportName, '(constructor)', 'construct', args, () => Reflect.construct(target, unwrap(args), newTarget === proxy ? target : newTarget));
        return targets.has(instance) ? instance : wrapInstance(exportName, instance);
      },
      get(target, key) {
        const member = Reflect.get(target, key, target);
        if (typeof member !== 'function' || typeof key !== 'string' || key === 'prototype' || classes.has(member)) return member;
        return function (...args) {
          return record(exportName, key, 'static', args, () => Reflect.apply(member, target, unwrap(args)));
        };
      },
    });
    targets.set(proxy, value);
    return proxy;
  }

  const names = Object.keys(exports);
  write({ event: 'load', addon, file: filename, exports: names.map(name => ({ name, type: typeof exports[name],
    members: typeof exports[name] === 'function' && exports[name].prototype ? Object.getOwnPropertyNames(exports[name].prototype).filter(key => key !== 'constructor') : undefined })) });
  const wrapped = {};
  for (const name of names) wrapped[name] = wrapExport(name, exports[name]);
  return wrapped;
}

function install() {
  if (!directory || !path.isAbsolute(directory) || globalThis[installed]) return false;
  try { if (!fs.statSync(directory).isDirectory()) return false; } catch { return false; }
  globalThis[installed] = true;
  const write = createLog(path.join(directory, `native-calls-${process.pid}.jsonl`));
  const original = Module._extensions['.node'];
  Module._extensions['.node'] = function (module, filename) {
    const result = original.apply(this, arguments);
    const addon = addons[path.basename(filename)];
    if (addon) {
      // Loader attribution: bundle file names and positions only, no paths beyond the base name.
      const limit = Error.stackTraceLimit; Error.stackTraceLimit = 60;
      const stack = new Error().stack ?? ''; Error.stackTraceLimit = limit;
      const site = stack.split('\n').slice(2).filter(frame => !frame.includes('node:') && !frame.includes('openvision-native-call-log') && !frame.includes('native-call-log.cjs'))
        .map(frame => frame.match(/([^/\\()\s]+:\d+:\d+)\)?$/)?.[1]).filter(Boolean).slice(0, 12);
      write({ event: 'load-site', addon, site });
      try { module.exports = wrapAddon(module.exports, addon, filename, write); }
      catch (error) { write({ event: 'wrap-failed', addon, error: String(error?.message ?? error) }); }
    }
    return result;
  };
  write({ event: 'hook', execPath: path.basename(process.execPath) });
  return true;
}

module.exports = { install, argumentSize, wrapAddon, addons };
install();
