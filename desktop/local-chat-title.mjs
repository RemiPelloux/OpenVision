import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { parseExpressionAt, tokenizer } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

const marker = '/* OpenVision local chat titles v1 */';
const titleRequest = '"localAgent.nameAgent"';
const promptPrefix = "Generate a short, descriptive name for a chat from the user's first message.";

export function localChatTitles(text) {
  const anchors = [...text.matchAll(/"localAgent\.nameAgent"/g)];
  if (text.includes(marker)) {
    if (text.indexOf(marker) !== text.lastIndexOf(marker) || anchors.length || text.includes(promptPrefix))
      throw new Error('Local chat title customization is incomplete or ambiguous.');
    return text;
  }
  if (anchors.length !== 1) throw new Error('Chat title request owner missing or ambiguous.');
  const anchor = anchors[0].index;
  const declarations = [...text.slice(0, anchor).matchAll(/\bfunction\s+[$\w]+\s*\(/g)];
  const start = declarations.at(-1)?.index;
  if (start === undefined) throw new Error('Chat title function owner missing.');
  const owner = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const statement = owner.body?.body[0];
  const generator = statement?.argument?.arguments?.[3];
  if (owner.type !== 'FunctionExpression' || owner.end < anchor || owner.body.body.length !== 1 ||
      statement.type !== 'ReturnStatement' || !generator?.generator)
    throw new Error('Chat title Promise wrapper changed.');
  const statements = generator.body.body;
  const [temporaries, message, empty, fallback, network] = statements;
  const fallbackName = fallback?.declarations?.[0]?.id?.name;
  const local = text.slice(message?.start, fallback?.end);
  if (statements.length !== 5 || temporaries.type !== 'VariableDeclaration' || temporaries.kind !== 'var' ||
      message?.type !== 'VariableDeclaration' || empty?.type !== 'IfStatement' ||
      fallback?.type !== 'VariableDeclaration' || !fallbackName || network?.type !== 'TryStatement' ||
      network.handler?.body.body.length !== 1 || network.handler.body.body[0].argument?.name !== fallbackName ||
      !local.includes('.userMessage.slice(0, 2e3)') || !local.includes('.slice(0, 4)') ||
      !text.slice(network.start, network.end).includes(titleRequest))
    throw new Error('Chat title local fallback contract changed.');
  const system = network.block.body[1]?.expression?.arguments?.[0]?.elements?.[0];
  const promptName = system?.properties?.find(property => property.key.name === 'content')?.value?.name;
  if (!promptName || !/^[$\w]+$/.test(promptName)) throw new Error('Chat title prompt owner missing.');
  const escaped = promptName.replace(/[$]/g, '\\$');
  const uses = [...text.matchAll(new RegExp(`(?<![$\\w])${escaped}(?![$\\w])`, 'g'))];
  const definitions = [...text.matchAll(new RegExp(`(?<![$\\w])${escaped}\\s*=\\s*`, 'g'))];
  if (uses.length !== 2 || definitions.length !== 1) throw new Error('Chat title prompt has additional owners.');
  const definition = definitions[0], valueStart = definition.index + definition[0].length;
  const tokens = tokenizer(text.slice(valueStart), { ecmaVersion: 'latest' });
  const prompt = tokens.getToken(), comma = tokens.getToken();
  if (prompt.type.label !== 'string' || !prompt.value.startsWith(promptPrefix) || comma.type.label !== ',' ||
      text.slice(0, definition.index).trimEnd().at(-1) !== ',')
    throw new Error('Chat title prompt declaration changed.');
  const edits = [
    { start: generator.body.start + 1, end: generator.body.end - 1, text: `\n${local}\nreturn ${fallbackName};\n` },
    { start: owner.start, end: owner.start, text: `${marker}\n` },
    { start: definition.index, end: valueStart + comma.end, text: '' },
  ];
  for (const edit of edits.sort((a, b) => b.start - a.start))
    text = text.slice(0, edit.start) + edit.text + text.slice(edit.end);
  return text;
}

export async function installLocalChatTitles(root) {
  const dependencies = ['desktop/local-chat-title.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'];
  const hashes = await Promise.all(dependencies.map(path => fileHash(join(root, path))));
  if (hashes.some(hash => !hash)) throw new Error('Local chat title customization dependency missing.');
  const recipe = digest(JSON.stringify([process.versions.node, hashes]));
  for (const extension of ['cursor-agent-exec', 'cursor-local-agent-runtime']) {
    const relative = `extensions/${extension}/dist/main.js`;
    const path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/local-chat-title-${extension}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = localChatTitles(before);
      if (before === after) return;
      const backup = join(root, 'backups/local-chat-title', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Chat titles use the local first-message fallback without an auxiliary AI request');
}
