import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mutateConfig } from "../src/config.mjs";

test("configuration reconciliation stays ordered through failure and later mutations recover", { timeout: 5000 }, async t => {
  const directory = await mkdtemp(join(tmpdir(), "openvision-config-queue-"));
  const previous = process.env.OPENVISION_CONFIG;
  process.env.OPENVISION_CONFIG = join(directory, "servers.json");
  t.after(async () => {
    if (previous === undefined) delete process.env.OPENVISION_CONFIG;
    else process.env.OPENVISION_CONFIG = previous;
    await rm(directory, { recursive: true, force: true });
  });
  await writeFile(process.env.OPENVISION_CONFIG, JSON.stringify({ version: 2, servers: {},
    ai: { enabled: false, baseUrl: "http://localhost/v1", model: "fixture", apiKeyEnv: "FIXTURE_KEY", timeoutMs: 1000 } }));
  const persisted = async () => JSON.parse(await readFile(process.env.OPENVISION_CONFIG, "utf8"));
  let release, entered;
  const held = new Promise(resolve => { release = resolve; });
  const started = new Promise(resolve => { entered = resolve; });
  const events = [];
  const first = mutateConfig(config => { config.ai.model = "first"; return "saved-first"; }, {
    afterSave: async result => {
      events.push(result);
      assert.equal((await persisted()).ai.model, "first");
      entered(); await held;
      assert.equal((await persisted()).ai.model, "first", "later mutation cannot overtake reconciliation");
      throw Error("fixture reconciliation failure");
    },
  });
  const failed = assert.rejects(first, /fixture reconciliation failure/);
  await started;
  const second = mutateConfig(config => { events.push("second-mutator"); config.ai.model = "second"; }, {
    afterSave: async () => { assert.equal((await persisted()).ai.model, "second"); events.push("second-reconciled"); },
  });
  release(); await failed; await second;
  assert.deepEqual(events, ["saved-first", "second-mutator", "second-reconciled"]);
  await assert.rejects(mutateConfig(config => { config.ai.timeoutMs = 0; }, {
    afterSave: () => assert.fail("failed persistence must not reconcile"),
  }), /timeoutMs/);
  assert.equal((await persisted()).ai.model, "second");
  await mutateConfig(config => { config.ai.model = "recovered"; });
  assert.equal((await persisted()).ai.model, "recovered");
});
