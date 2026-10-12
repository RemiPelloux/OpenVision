import { spawn } from "node:child_process";
import { setTimeout as delay } from "node:timers/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const child = spawn(process.execPath, [resolve(root, "src", "server.mjs")], { cwd: root, env: { ...process.env, OPENVISION_PORT: "4399" }, stdio: ["ignore", "pipe", "pipe"] });
try {
  await delay(250);
  const health = await fetch("http://127.0.0.1:4399/api/health").then((response) => response.json());
  if (!health.ok || health.service !== "openvision") throw new Error("Health contract failed.");
  const config = await fetch("http://127.0.0.1:4399/api/config").then((response) => response.json());
  if (!config.config.servers.rea || config.config.servers.rea.hasEnvironment !== true || !config.config.ai) throw new Error("Config contract failed.");
  const ai = await fetch("http://127.0.0.1:4399/api/ai/config").then((response) => response.json());
  if (!ai.ai || ai.ai.apiKeyEnv !== "OPENVISION_AI_API_KEY") throw new Error("AI config contract failed.");
  console.log("openvision smoke test passed");
} finally {
  child.kill();
}
