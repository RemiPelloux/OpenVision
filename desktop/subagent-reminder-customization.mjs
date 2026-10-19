import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision custom subagent instructions v1 */';
const relative = 'out/vs/workbench/workbench.desktop.main.js';

// Issue #10. A local Task child runs client-side: Agent Exec delegates it to the
// renderer, which starts the child composer and composes the child's system
// reminder itself. That reminder only covered one built-in type, so a custom
// subagent's description and Markdown body never reached the child request.
// Compose the same reminder the Agent runtime builds for a custom definition
// (standard subagent notice, then the custom header, then the body) and send it
// with the child's first message of each launch, like the runtime launcher.
export const subagentNotice = 'You are running as a subagent under a parent agent. Do not spawn additional subagents unless requested by the user or by your instructions. Do not create Cursor Canvas files unless requested by the user or by your instructions.';

export function customSubagentReminder(definitions, name) {
  const definition = typeof name === 'string' && name.length > 0 ? definitions?.find(item => item?.name === name) : undefined;
  if (!definition?.prompt) return undefined;
  const header = [`You are operating as the "${name}" custom subagent. DO NOT create unnecessary markdown files unless explicitly requested by the user.`];
  if (definition.description) header.push(definition.description);
  if (definition.tools?.length > 0) header.push(`Available tools: ${definition.tools.join(', ')}`);
  const reminder = [header.join('\n'), definition.prompt].join('\n\n').trim();
  return reminder.length > 0 ? `${subagentNotice}\n\n${reminder}` : subagentNotice;
}

export function keepCustomSubagentInstructions(text) {
  if (text.includes(marker)) return text;
  const pattern = /\n(\s*)([\w$]+) = (([\w$]+)\(\{\s*subagentTypeName: ([\w$]+)\?\.subagentInfo\?\.subagentTypeName,\s*isResume: ([\w$]+),\s*baseReminder: \6 \? void 0 : [\w$]+\([\w$]+\),\s*\}\)),/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Subagent reminder composition contract missing or ambiguous');
  const [whole, indent, reminder, composition, , composer, resume] = matches[0];
  const escaped = reminder.replace(/\$/g, '\\$');
  const joiner = new RegExp(`\\b([\\w$]+)\\(\\1\\(${escaped}, `).exec(text.slice(matches[0].index, matches[0].index + 2000));
  const service = text.lastIndexOf('this._subagentsService', matches[0].index);
  if (!joiner || service < 0 || matches[0].index - service > 60000)
    throw new Error('Subagent reminder owner contract changed');
  const replacement = `\n${indent}openvisionCustomSubagentReminder = ${resume} ? void 0 : await (async (name) => { ${marker}
${indent}  if (typeof name !== "string" || name.length === 0) return;
${indent}  const definitions = await this._subagentsService.getRawSubagents().catch(() => []);
${indent}  const subagentNotice = ${JSON.stringify(subagentNotice)};
${indent}  return (${customSubagentReminder.toString().replace(/^function [\w$]+/, 'function')})(definitions, name);
${indent}})(${composer}?.subagentInfo?.subagentTypeName),
${indent}${reminder} = ${joiner[1]}(${composition}, openvisionCustomSubagentReminder),`;
  return text.slice(0, matches[0].index) + replacement + text.slice(matches[0].index + whole.length);
}

export async function installSubagentReminders(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/subagent-reminder-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs'].map(file => fileHash(join(root, file))))));
  const path = join(root, 'source/app', relative);
  await cachedFile({ path, recipe, marker: join(root, 'build/cache/subagent-reminder-workbench.json') }, async () => {
    const before = await readFile(path, 'utf8'), after = keepCustomSubagentInstructions(before);
    if (before === after) return;
    const backup = join(root, 'backups/subagent-reminder', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  });
  console.log('Custom subagent instructions reach the client-side child request');
}
