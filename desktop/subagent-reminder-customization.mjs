import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision subagent reminder arity v1 */';

// Issue #10. Every subagent definition passes through a wrapper that prefixes
// the standard subagent notice to its systemReminder. For a definition that
// already has one (a custom subagent's description and Markdown body) the
// wrapper took one parameter, while the Task launcher only sends reminders whose
// function takes none (`reminder.length === 0`). The custom body, and the notice,
// never reached the child. A rest parameter keeps the arguments and has arity 0.
export function keepSubagentReminders(text) {
  if (text.includes(marker)) return text;
  const pattern = /systemReminder: \(([\w$]+)\) => \{\s*const ([\w$]+) = ([\w$]+)\(\1\)\.trim\(\);\s*return \2\.length > 0 \? `\$\{([\w$]+)\}\\n\\n\$\{\2\}` : \4;\s*\}/g;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1 || !/0 === ([\w$]+)\.length \? \1\(\) : void 0/.test(text))
    throw new Error('Subagent reminder wrapper contract missing or ambiguous');
  const [whole, , result, inner, notice] = matches[0];
  return text.slice(0, matches[0].index) +
    `systemReminder: (...openvisionReminderArgs) => { ${marker}
                  const ${result} = ${inner}(...openvisionReminderArgs).trim();
                  return ${result}.length > 0 ? \`\${${notice}}\\n\\n\${${result}}\` : ${notice};
                }` + text.slice(matches[0].index + whole.length);
}

export async function installSubagentReminders(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/subagent-reminder-customization.mjs',
    'desktop/build-cache.mjs', 'desktop/import-files.mjs'].map(file => fileHash(join(root, file))))));
  for (const relative of ['extensions/cursor-agent-exec/dist/main.js', 'extensions/cursor-agent-host/dist/main.js',
    'extensions/cursor-local-agent-runtime/dist/main.js']) {
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/subagent-reminder-${digest(relative)}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = keepSubagentReminders(before);
      if (before === after) return;
      const backup = join(root, 'backups/subagent-reminder', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Custom subagent instructions reach the child request');
}
