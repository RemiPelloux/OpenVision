import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { scopeProjectMcpApprovals } from './mcp-project-approval-customization.mjs';

// The recovered MCPService shape: application-wide approvals keyed by identifier and config hash.
const recovered = `const Service = class extends Base {
          constructor(folders, approved) { super(); this.contextService = { getWorkspace: () => ({ folders }) };
            let value = approved; this.approvedProjectMcpServers = { get: () => value, set: (next) => { value = next; } }; }
          async parseMcpServersFromFile(e, t) {
            const i = this.computeIdentifierPrefix(t.projectPath), o = e;
            const a = this.approvedProjectMcpServers.get(),
              c = a.filter((l) => {
                if (!l.startsWith(i)) return !0;
                const u = l.includes(":"),
                  h = u ? l.split(":")[0] : l,
                  m = o.find((f) => f.identifier === h);
                if (!m) return !1;
                if (!u) return !0;
                const g = this.computeApprovalKey(m);
                return l === g;
              });
            return (c.length !== a.length && this.approvedProjectMcpServers.set(c, void 0), o);
          }
          isServerEnabled(e) {
            if (e.projectManaged) {
              const n = this.approvedProjectMcpServers.get(), i = this.computeApprovalKey(e);
              if (!n.includes(i) && !n.includes(e.identifier)) return !1;
            }
            return !0;
          }
          whitelistProjectServer(e) {
            const t = [...this.approvedProjectMcpServers.get()], n = this.computeApprovalKey(e);
            t.includes(n) || (t.push(n), this.approvedProjectMcpServers.set(t, void 0));
          }
          removeServerApproval(e) {
            if (!e.projectManaged) return;
            const t = [...this.approvedProjectMcpServers.get()],
              n = t.filter(
                (i) =>
                  !(i === e.identifier || (i.includes(":") && i.startsWith(\`\${e.identifier}:\`))),
              );
            n.length !== t.length && this.approvedProjectMcpServers.set(n, void 0);
          }
          workspaceFolderPaths() {
            return this.contextService.getWorkspace().folders.map((e) => e.uri.toString());
          }
          computeIdentifierPrefix(e) {
            return e ? \`project-\${e}-\` : "user-";
          }
          folderToKey(e) {
            return \`\${e.index}-\${e.name}\`;
          }
          computeServerConfigHash(e) {
            return String(e.command).length.toString(16);
          }
          computeApprovalKey(e) {
            const t = this.computeServerConfigHash(e);
            return \`\${e.identifier}:\${t}\`;
          }
        };
return Service;`;

const folder = path => ({ index: 0, name: 'app', uri: { toString: () => `file://${path}` } });
const server = (command, projectManaged = true) => ({ identifier: 'project-0-app-ov', projectPath: '0-app', command, projectManaged });
const load = text => new Function('Base', text)(class {});

test('approvals of folders with the same basename stay independent', async () => {
  const Service = load(scopeProjectMcpApprovals(recovered));
  const a = new Service([folder('/a/app')], []), shared = a.approvedProjectMcpServers;
  const b = new Service([folder('/b/app')], []); b.approvedProjectMcpServers = shared;
  const c = new Service([folder('/c/app')], []); c.approvedProjectMcpServers = shared;
  a.whitelistProjectServer(server('node a.js'));
  assert.deepEqual(shared.get(), ['project-0-app-ov:9@file:///a/app']);
  // /b/app parses a different config for the same identifier: /a/app's approval survives.
  await b.parseMcpServersFromFile([server('node bb.js')], { projectPath: '0-app' });
  assert.equal(a.isServerEnabled(server('node a.js')), true);
  assert.equal(b.isServerEnabled(server('node bb.js')), false, '/b/app still asks for its own approval');
  // A byte-identical config in /c/app does not inherit /a/app's approval.
  assert.equal(c.isServerEnabled(server('node a.js')), false);
  b.whitelistProjectServer(server('node bb.js'));
  // /b/app's config changes: only its own approval is revoked.
  b.removeServerApproval(server('node bb.js'));
  assert.deepEqual(shared.get(), ['project-0-app-ov:9@file:///a/app']);
  // A config change in /a/app prunes its stale key, nothing else.
  b.whitelistProjectServer(server('node bb.js'));
  await a.parseMcpServersFromFile([server('node changed.js')], { projectPath: '0-app' });
  assert.deepEqual(shared.get(), ['project-0-app-ov:a@file:///b/app']);
});

test('profile keys are unchanged and earlier unscoped project keys ask once more', async () => {
  const Service = load(scopeProjectMcpApprovals(recovered));
  const service = new Service([folder('/a/app')], ['project-0-app-ov:8', 'project-0-app-legacy']);
  assert.equal(service.computeApprovalKey(server('node a.js', false)), 'project-0-app-ov:9');
  assert.equal(service.isServerEnabled(server('node a.js')), false);
  await service.parseMcpServersFromFile([server('node a.js'), { ...server('x'), identifier: 'project-0-app-legacy' }], { projectPath: '0-app' });
  assert.deepEqual(service.approvedProjectMcpServers.get(), ['project-0-app-legacy'], 'unscoped hash key pruned, identifier-only legacy key kept');
});

test('the transform is idempotent and fails closed on drift', () => {
  const once = scopeProjectMcpApprovals(recovered);
  assert.equal(scopeProjectMcpApprovals(once), once);
  assert.throws(() => scopeProjectMcpApprovals(recovered.replace('return `${e.identifier}:${t}`;', 'return t;')), /approval key contract/);
  assert.throws(() => scopeProjectMcpApprovals(recovered.replace('if (!l.startsWith(i)) return !0;', '')), /approval prune/);
  assert.throws(() => scopeProjectMcpApprovals(recovered.replace('i.startsWith(`${e.identifier}:`)', 'i.startsWith("x")').replace(/i === e\.identifier \|\| /, '')), /revocation contract/);
  assert.throws(() => scopeProjectMcpApprovals(recovered.replace('this.contextService.getWorkspace().folders.map', 'this.folders.map')), /workspace contract/);
});

const app = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'source/app');
test('built workbenches scope project MCP approvals', { skip: !existsSync(join(app, 'out/main.js')) && 'source/app is not built' }, async () => {
  for (const variant of ['desktop', 'glass']) {
    const text = await readFile(join(app, `out/vs/workbench/workbench.${variant}.main.js`), 'utf8');
    assert.ok(scopeProjectMcpApprovals(text) === text, variant);
  }
});
