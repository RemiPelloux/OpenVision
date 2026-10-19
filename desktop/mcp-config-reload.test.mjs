import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import { serializeMcpConfigReloads } from './mcp-config-reload-customization.mjs';

// The recovered MCPService shape: each reload parses the file, awaits client
// deletion (simulated by a per-revision delay) and then replaces the server list.
const recovered = `const Service = class {
          constructor(file) { this.file = file; this.projectManagedServers = []; this.userConfiguredServers = []; }
          folderToKey(e) {
            return \`\${e.index}-\${e.name}\`;
          }
          async initializeUserConfiguredServers() {
            dl("[MCPService] Initializing user-configured servers from file");
            const n = [...this.userConfiguredServers];
            this.userConfiguredServers = await this._handleMcpConfigFileChange(this.file, { projectManaged: !1 }, n);
          }
          async handleProjectMcpJsonChange(e, t) {
            dl(\`[MCPService] Project MCP JSON changed: \${e.toString()}\`);
            const n = this.folderToKey(t);
            const r = await this._handleMcpConfigFileChange(e, { projectManaged: !0, projectPath: n }, []);
            ((this.projectManagedServers = this.projectManagedServers.filter((s) => s.projectPath !== n)),
              this.projectManagedServers.push(...r));
          }
          async _handleMcpConfigFileChange(e) {
            const revision = this.file.revision;
            await new Promise((done) => setTimeout(done, revision === 1 ? 30 : 1));
            return [{ projectPath: "0-app", revision }];
          }
        };
return Service;`;

const load = text => new Function('dl', text)(() => {});
async function overlapping(Service, method) {
  const file = { revision: 1 }, service = new Service(file), folder = { index: 0, name: 'app' };
  const first = service[method](file, folder);
  file.revision = 2;
  const second = service[method](file, folder);
  await Promise.all([first, second]);
  return method === 'initializeUserConfiguredServers' ? service.userConfiguredServers[0].revision : service.projectManagedServers[0].revision;
}

test('overlapping reloads of one config file finish with its newest content', async () => {
  const Recovered = load(recovered);
  assert.equal(await overlapping(Recovered, 'handleProjectMcpJsonChange'), 1, 'the recovered race keeps the older revision');
  assert.equal(await overlapping(Recovered, 'initializeUserConfiguredServers'), 1);
  const Serialized = load(serializeMcpConfigReloads(recovered));
  assert.equal(await overlapping(Serialized, 'handleProjectMcpJsonChange'), 2);
  assert.equal(await overlapping(Serialized, 'initializeUserConfiguredServers'), 2);
});

test('a failed reload does not block the next one, and the transform is idempotent and guarded', async () => {
  const Serialized = load(serializeMcpConfigReloads(recovered));
  const service = new Serialized({ revision: 3 });
  const original = service._handleMcpConfigFileChange;
  service._handleMcpConfigFileChange = async () => { throw Error('parse failed'); };
  await assert.rejects(service.initializeUserConfiguredServers(), /parse failed/);
  service._handleMcpConfigFileChange = original;
  await service.initializeUserConfiguredServers();
  assert.equal(service.userConfiguredServers[0].revision, 3);
  const once = serializeMcpConfigReloads(recovered);
  assert.equal(serializeMcpConfigReloads(once), once);
  assert.throws(() => serializeMcpConfigReloads(recovered.replace('this.projectManagedServers.push(...r)', 'x')), /reload contract/);
});

const app = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'source/app');
test('built workbenches serialize MCP config reloads', { skip: !existsSync(join(app, 'out/main.js')) && 'source/app is not built' }, async () => {
  for (const variant of ['desktop', 'glass']) {
    const text = await readFile(join(app, `out/vs/workbench/workbench.${variant}.main.js`), 'utf8');
    assert.ok(serializeMcpConfigReloads(text) === text, variant);
  }
});
