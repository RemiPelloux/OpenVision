import test from 'node:test';
import assert from 'node:assert/strict';
import { analyzeTrace } from './verify-helper-contracts.mjs';

test('trace windows are keyed by the full marker name and classify writes, reads, network and execs', () => {
  const trace = [
    '10 openat(AT_FDCWD, "/early/write", O_WRONLY|O_CREAT, 0644) = 3',
    '10 statx(AT_FDCWD, "/openvision-contract-mark-grep-authority-begin", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x1) = -1 ENOENT (No such file or directory)',
    '10 openat(AT_FDCWD, "/repo/.git/cursor/crepe/abc.staging.1/index.bin", O_WRONLY|O_CREAT|O_TRUNC|O_CLOEXEC, 0666) = 7',
    '11 execve("/app/resources/helpers/crepectl", ["/app/resources/helpers/crepectl", "build"], 0x1 /* 9 vars */ <unfinished ...>',
    '11 mkdir("relative/dir", 0777) = 0',
    '11 renameat2(AT_FDCWD, "/repo/.git/cursor/crepe/abc.staging.1", AT_FDCWD, "/repo/.git/cursor/crepe/abc", RENAME_NOREPLACE) = 0',
    '10 openat(AT_FDCWD, "/repo/src/a.txt", O_RDONLY|O_CLOEXEC) = 8',
    '10 openat(AT_FDCWD, "/missing", O_RDONLY) = -1 ENOENT (No such file or directory)',
    '10 socket(AF_INET6, SOCK_STREAM|SOCK_CLOEXEC, IPPROTO_IP) = 9',
    '10 socket(AF_UNIX, SOCK_STREAM, 0) = 10',
    '10 statx(AT_FDCWD, "/openvision-contract-mark-grep-authority-end", AT_STATX_SYNC_AS_STAT, STATX_ALL, 0x1) = -1 ENOENT (No such file or directory)',
    '10 openat(AT_FDCWD, "/late/write", O_WRONLY|O_CREAT, 0644) = 3',
  ].join('\n');
  const windows = analyzeTrace(trace);
  assert.deepEqual(Object.keys(windows), ['grep-authority']);
  const window = windows['grep-authority'];
  assert.deepEqual(window.writes, ['/repo/.git/cursor/crepe/abc.staging.1/index.bin', 'relative/dir', '/repo/.git/cursor/crepe/abc.staging.1',
    '/repo/.git/cursor/crepe/abc'], 'both rename paths are writes');
  assert.deepEqual(window.reads, ['/repo/src/a.txt'], 'failed opens are not reads');
  assert.deepEqual(window.execs, ['/app/resources/helpers/crepectl']);
  assert.equal(window.network.length, 1, 'only IP sockets and connects count as network');
  assert.equal(window.pids, 2);
});

test('a trace without markers has no windows, so callers must treat a missing window as a failure', () => {
  assert.deepEqual(analyzeTrace('10 openat(AT_FDCWD, "/x", O_WRONLY) = 3'), {});
});
