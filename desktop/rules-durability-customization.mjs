import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const marker = '/* OpenVision durable rule writes v1 */';
export function durableRuleIpc(text) {
  if (text.includes(marker)) return text;
  const anchor = 'case "updateItems": {\n                const l = s;';
  const at = text.indexOf(anchor);
  if (at < 0 || text.indexOf(anchor, at + 1) >= 0 ||
      !text.slice(at - 5000, at).includes('await this.withStorageInitialized(i, a)'))
    throw new Error('Native rule storage IPC owner changed');
  return `${marker}\nimport {commitRules as openvisionCommitRules} from "./openvision-rules-durable.js";\n` +
    text.slice(0, at) + 'case "openvisionRulesUpdate": return openvisionCommitRules(o, s);\n              ' + text.slice(at);
}

export async function installRuleDurability(root) {
  const path = join(root, 'source/app/out/main.js'), before = await readFile(path, 'utf8');
  const after = durableRuleIpc(before);
  if (after !== before) {
    const backup = join(root, 'backups/rules-durable/main.js');
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  await copyFile(join(root, 'desktop/rules-durable.js'), join(root, 'source/app/out/openvision-rules-durable.js'));
}
