import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, writeFile, mkdir, mkdtemp, rm, lstat } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { classAt } from './telemetry-patches.mjs';

function uri(file) { return { scheme: 'file', fsPath: file, toString: () => pathToFileURL(file).href }; }

async function recoveredPlanMethods(variant) {
  const source = await readFile(new URL(`../source/app/out/vs/workbench/workbench.${variant}.main.js`, import.meta.url), 'utf8');
  const anchor = source.indexOf('async getUserPlansDir()');
  assert.ok(anchor >= 0, 'Recovered plan storage owner must exist');
  const owner = classAt(source, anchor);
  const methods = Object.fromEntries(['getUserPlansDir', 'getWorkspacePlansDir', 'writePlanFileWithFallback', 'isPermissionError'].map(name => {
    const matches = owner.body.body.filter(method => method.key?.name === name);
    assert.equal(matches.length, 1, `${name} must have one owner`);
    return [name, source.slice(matches[0].start, matches[0].end)];
  }));
  const joinName = methods.getUserPlansDir.match(/return ([\w$]+)\(/)?.[1];
  const bufferName = methods.writePlanFileWithFallback.match(/([\w$]+)\.fromString\(/)?.[1];
  const permission = methods.isPermissionError.match(/([\w$]+)\([\w$]+\) === ([\w$]+)\.NoPermissions/);
  assert.ok(joinName && bufferName && permission, 'Plan URI, buffer, and permission boundaries must match');
  // Execute the recovered methods unchanged. Only host dependencies use adapters.
  return new Function(joinName, bufferName, permission[1], permission[2], 'console',
    `return {${Object.values(methods).join(',\n')}};`)(
    (base, ...parts) => uri(path.join(base.fsPath, ...parts)),
    { fromString: value => Buffer.from(value, 'utf8') },
    error => error.code, { NoPermissions: 'EACCES' }, { warn() {} });
}

async function harness(t, recovered, { deniedAt, workspace = true, errorCode = 'EACCES' } = {}) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'openvision-plan-paths-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  // Plans belong to the OpenVision profile home (<user-data-dir>/User); the
  // operating-system home must not be consulted.
  const home = path.join(root, 'profile', 'User'), project = path.join(root, 'project');
  await mkdir(home, { recursive: true }); await mkdir(project);
  const userPlans = path.join(home, '.openvision', 'plans');
  const service = {
    ...recovered,
    pathService: { openvisionProfileHome: uri(home), async userHome() { throw new Error('operating-system home consulted'); } },
    workspaceContextService: { getWorkspace() { return { folders: workspace ? [{ uri: uri(project) }] : [] }; } },
    fileService: {
      async createFolder(value) {
        if (deniedAt === 'mkdir' && value.fsPath === userPlans) throw Object.assign(new Error('denied'), { code: errorCode });
        await mkdir(value.fsPath, { recursive: true });
      },
      async writeFile(value, buffer) {
        if (deniedAt === 'write' && path.dirname(value.fsPath) === userPlans) throw Object.assign(new Error('denied'), { code: errorCode });
        await writeFile(value.fsPath, buffer);
      },
    },
  };
  return { service, home, project, userPlans };
}

for (const variant of ['desktop', 'glass']) {
  const recovered = await recoveredPlanMethods(variant);
  test(`${variant}: actual plan owner writes profile-home .openvision/plans`, async t => {
    const { service, home, project, userPlans } = await harness(t, recovered);
    assert.equal((await service.getUserPlansDir()).fsPath, userPlans);
    assert.equal(service.getWorkspacePlansDir().fsPath, path.join(project, '.openvision', 'plans'));
    const result = await service.writePlanFileWithFallback('example.plan.md', '# Plan\nUnicode: œ ✓');
    assert.equal(fileURLToPath(result.toString()), path.join(userPlans, 'example.plan.md'));
    assert.equal(await readFile(result.fsPath, 'utf8'), '# Plan\nUnicode: œ ✓');
    await assert.rejects(lstat(path.join(home, '.cursor')), { code: 'ENOENT' });
    await assert.rejects(lstat(path.join(project, '.openvision')), { code: 'ENOENT' });
  });

  for (const deniedAt of ['mkdir', 'write']) test(`${variant}: ${deniedAt} denial falls back to project .openvision/plans`, async t => {
    const { service, home, project } = await harness(t, recovered, { deniedAt });
    const result = await service.writePlanFileWithFallback('fallback.plan.md', 'Keep the complete plan.');
    assert.equal(result.fsPath, path.join(project, '.openvision', 'plans', 'fallback.plan.md'));
    assert.equal(await readFile(result.fsPath, 'utf8'), 'Keep the complete plan.');
    await assert.rejects(lstat(path.join(home, '.cursor')), { code: 'ENOENT' });
    await assert.rejects(lstat(path.join(project, '.cursor')), { code: 'ENOENT' });
  });

  test(`${variant}: denied profile home without workspace throws; other write failures do not fall back`, async t => {
    const noWorkspace = await harness(t, recovered, { deniedAt: 'mkdir', workspace: false });
    await assert.rejects(noWorkspace.service.writePlanFileWithFallback('missing.plan.md', 'plan'), /no workspace folder is available/);
    const otherFailure = await harness(t, recovered, { deniedAt: 'write', errorCode: 'ENOSPC' });
    await assert.rejects(otherFailure.service.writePlanFileWithFallback('full.plan.md', 'plan'), { code: 'ENOSPC' });
    await assert.rejects(lstat(path.join(otherFailure.project, '.openvision')), { code: 'ENOENT' });
  });
}
