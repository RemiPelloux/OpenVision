import assert from 'node:assert/strict';
import test from 'node:test';
import { captureEnvironment, parseMeminfo, parsePressure, parseSignalTrace, removedProxyVariables } from './capture-harness.mjs';

test('the app environment drops inherited proxies and Electron-as-Node', () => {
  const base = { PATH: '/bin', HTTPS_PROXY: 'http://127.0.0.1:1', no_proxy: 'localhost', npm_config_https_proxy: 'x',
    GLOBAL_AGENT_HTTPS_PROXY: 'x', ELECTRON_GET_USE_PROXY: '1', ELECTRON_RUN_AS_NODE: '1', HOME: '/home/ov' };
  assert.deepEqual(captureEnvironment(base, { NODE_EXTRA_CA_CERTS: '/ca.pem' }), { PATH: '/bin', HOME: '/home/ov', NODE_EXTRA_CA_CERTS: '/ca.pem' });
  assert.deepEqual(removedProxyVariables(base), ['ELECTRON_GET_USE_PROXY', 'GLOBAL_AGENT_HTTPS_PROXY', 'HTTPS_PROXY', 'no_proxy', 'npm_config_https_proxy']);
});

test('memory availability and pressure are read from /proc text', () => {
  assert.deepEqual(parseMeminfo('MemTotal:       16479424 kB\nMemFree: 1 kB\nMemAvailable:   13971472 kB\nSwapFree:              0 kB\n'),
    { memAvailableKiB: 13971472, memTotalKiB: 16479424, swapFreeKiB: 0 });
  assert.deepEqual(parsePressure('some avg10=1.50 avg60=0.20 avg300=0.00 total=12\nfull avg10=0.00 avg60=0.00 avg300=0.00 total=0\n'),
    { some: { avg10: 1.5, avg60: 0.2, avg300: 0, total: 12 }, full: { avg10: 0, avg60: 0, avg300: 0, total: 0 } });
});

test('signal traces name the sender, kill calls and process exits', () => {
  const trace = [
    '200 1792411234.100000 --- SIGTERM {si_signo=SIGTERM, si_code=SI_USER, si_pid=150, si_uid=1000} ---',
    '201 1792411234.200000 --- SIGCHLD {si_signo=SIGCHLD, si_code=CLD_EXITED, si_pid=300, si_uid=1000, si_status=0} ---',
    '200 1792411234.300000 kill(201, SIGTERM) = 0',
    '201 1792411234.400000 +++ exited with 0 +++',
    '202 1792411234.500000 +++ killed by SIGKILL +++',
  ].join('\n');
  const parsed = parseSignalTrace(trace);
  assert.deepEqual(parsed.deliveries[0], { pid: 200, at: '1792411234.100000', signal: 'SIGTERM', code: 'SI_USER', sender: 150 });
  assert.deepEqual(parsed.sends, [{ pid: 200, at: '1792411234.300000', call: 'kill', args: '201, SIGTERM', result: 0 }]);
  assert.deepEqual(parsed.exits, [{ pid: 201, at: '1792411234.400000', code: 0, signal: undefined },
    { pid: 202, at: '1792411234.500000', code: undefined, signal: 'SIGKILL' }]);
});
