import test from 'node:test';
import assert from 'node:assert/strict';
import { parseExecTrace, phaseAt, rankHelpers, summarizeNativeCalls } from './native-call-ranking.mjs';

const phases = [{ name: 'startup', start: 100 }, { name: 'agent', start: 200 }, { name: 'idle', start: 300 }, { name: 'control', start: 400 }];

test('execve records are parsed, failed probes skipped and interrupted calls resumed', () => {
  const trace = [
    '11 150.000001 execve("/usr/local/bin/rg", ["rg", "--files"], 0x7ffd /* 30 vars */) = -1 ENOENT (No such file or directory)',
    '11 150.000002 execve("/app/node_modules/@vscode/ripgrep/bin/rg", ["rg", "--files", "/w"], 0x7ffd /* 30 vars */) = 0',
    '12 150.5 execve("/app/resources/helpers/cursorsandbox", ["/app/resources/helpers/cursorsandbox", "--policy", "/p/sandbox-policy-1", "--preflight-only", "--", "/bin/true"], 0x1 /* 9 vars */ <unfinished ...>',
    '13 151 execve("/bin/true", ["/bin/true"], 0x1 /* 9 vars */) = 0',
    '12 151.1 <... execve resumed>) = 0',
    '14 250 execve("/app/resources/helpers/cursorsandbox", ["cursorsandbox", "--policy", "/p/x", "--", "/bin/sh", "-c", "echo \\"caf\\303\\251\\""], 0x1 /* 9 vars */) = 0',
    '15 350 execve("/host/bin/cursor-tunnel", ["cursor-tunnel", "status"], 0x1 /* 9 vars */) = 0',
  ].join('\n');
  const parsed = parseExecTrace(trace);
  assert.deepEqual(parsed.helpers.map(exec => exec.name), ['rg', 'true', 'cursorsandbox', 'cursorsandbox', 'cursor-tunnel']);
  assert.equal(parsed.helpers[3].argv.at(-1), 'echo "café"', 'octal escapes decode as UTF-8');
  const summary = parsed.summary(phases);
  assert.deepEqual(summary.components.cursorsandbox, { execs: 2, phases: { startup: 1, agent: 1 },
    argvShapes: { '--policy <value> --preflight-only -- <value>': 1, '--policy <value> -- <value> -c <value>': 1 } });
  assert.equal(summary.components['cursor-tunnel'].execs, 1);
  assert.equal(summary.components.crepectl.execs, 0);
  assert.equal(summary.totalExecs, 5);
});

test('native calls are summarized per addon, member and phase without contents', () => {
  const records = [
    { event: 'hook', pid: 1, processType: 'extensionHost', entry: 'vs/workbench/api/node/extensionHostProcess' },
    { event: 'load', t: 150000, pid: 1, processType: 'extensionHost', addon: 'file-service', file: '/x/file_service.linux-x64-gnu.node',
      exports: [{ name: 'GrepClient', members: ['query'] }, { name: 'MULTI_ROOT_ABSOLUTE_PATH' }] },
    { event: 'call', t: 250000, pid: 1, processType: 'extensionHost', addon: 'file-service', export: 'GrepClient', member: 'query', argBytes: [3, 10], durationMs: 0.5, settledMs: 4, outcome: 'fulfilled' },
    { event: 'call', t: 260000, pid: 1, processType: 'extensionHost', addon: 'file-service', export: 'GrepClient', member: 'query', argBytes: [3], durationMs: 0.2, error: 'EFAIL' },
    { event: 'call', t: 400000, pid: 2, processType: 'browser', addon: 'cursor-proclist', export: 'cursor_proclist_system_memory', member: '(call)', argBytes: [], durationMs: 0.01 },
    { event: 'dropped', dropped: 2 },
  ];
  const summary = summarizeNativeCalls(records, phases);
  const fileService = summary.addons['file-service'];
  assert.equal(fileService.loaded, true); assert.equal(fileService.loads[0].phase, 'startup');
  assert.deepEqual(fileService.loads[0].exports, ['GrepClient{query}', 'MULTI_ROOT_ABSOLUTE_PATH']);
  assert.equal(fileService.calls, 2); assert.deepEqual(fileService.phases, { agent: 2 });
  assert.deepEqual(fileService.members['GrepClient.query'], { calls: 2, syncMs: 0.7, settledMs: 4, maxMs: 4, argBytes: 16, maxArgBytes: 13, errors: 1, processTypes: ['extensionHost'] });
  assert.equal(summary.addons['tree-chunk-napi'].loaded, false);
  assert.equal(summary.dropped, 2);
  assert.equal(summary.addons['cursor-proclist'].controlCalls, 1, 'control calls are counted apart');
  assert.equal(summary.addons['cursor-proclist'].calls, 0);
  assert.equal(phaseAt(phases, 50), 'before-launch');

  const ranking = rankHelpers(summary, parseExecTrace('').summary(phases));
  assert.deepEqual(ranking.slice(0, 1).map(row => [row.component, row.dependency]), [['file-service', 'used']]);
  assert.ok(ranking.filter(row => row.dependency === 'not used').some(row => row.component === 'cursorsandbox'));
});
