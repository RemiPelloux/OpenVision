import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { mutateConfig, selectConfig } from "../src/config.mjs";
import { within } from "./helpers/control-plane.mjs";

function deferred() {
  let resolve;
  const promise = new Promise(accept => { resolve = accept; });
  return { promise, resolve };
}

async function configFixture(t) {
  const directory = await mkdtemp(join(tmpdir(), "openvision-config-admission-"));
  const previous = process.env.OPENVISION_CONFIG;
  process.env.OPENVISION_CONFIG = join(directory, "servers.json");
  t.after(async () => {
    if (previous === undefined) delete process.env.OPENVISION_CONFIG;
    else process.env.OPENVISION_CONFIG = previous;
    await rm(directory, { recursive: true, force: true });
  });
  await writeFile(process.env.OPENVISION_CONFIG, JSON.stringify({ version: 2, servers: {},
    ai: { enabled: false, baseUrl: "http://localhost/v1", model: "initial", apiKeyEnv: "FIXTURE_KEY", timeoutMs: 1000 } }));
}

test("config selection is ordered with persistence/reconciliation but its asynchronous work cannot lock later saves", async t => {
  await configFixture(t);
  const entered = deferred(); const releaseSave = deferred(); const releaseWork = deferred();
  t.after(() => { releaseSave.resolve(); releaseWork.resolve(); });
  const events = [];
  const saving = mutateConfig(config => { config.ai.model = "saved"; }, { afterSave: async () => {
    events.push("reconciling"); entered.resolve(); await releaseSave.promise; events.push("reconciled");
  } });
  await within(entered.promise);
  const selected = deferred();
  const selection = selectConfig(({ config }) => {
    events.push(config.ai.model); selected.resolve(); return releaseWork.promise;
  });
  releaseSave.resolve(); await within(saving); await within(selected.promise);
  await within(mutateConfig(config => { config.ai.model = "next"; events.push("next-save"); }));
  assert.deepEqual(events, ["reconciling", "reconciled", "saved", "next-save"]);
  releaseWork.resolve("completed");
  assert.equal(await within(selection), "completed");
  assert.equal(await selectConfig(({ config }) => config.ai.model), "next");
});

test("sync and async selection failures do not poison subsequent config operations", async t => {
  await configFixture(t);
  await assert.rejects(selectConfig(() => { throw Error("selection failed"); }), /selection failed/);
  await assert.rejects(selectConfig(() => Promise.reject(Error("work failed"))), /work failed/);
  await mutateConfig(config => { config.ai.model = "recovered"; });
  assert.equal(await selectConfig(({ config }) => config.ai.model), "recovered");
});
