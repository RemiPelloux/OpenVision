// Local memories use the existing project-rule parser, watcher and Read tool.
// Only their descriptions enter initial context; bodies remain available on demand.
export const memoryPolicy = `Project memories require the user's approval. When a stable project fact would be useful in future chats, suggest a concise memory instead of writing it. Render one fenced code block with language openvision-memory containing a JSON object with exactly title, description and content strings. Description says when this memory is relevant; content records the durable fact. The user can edit, dismiss, or explicitly save the suggestion in the review card. Never save suggested memories through Write, Shell or other tools, and never claim a suggestion is saved. Do not suggest credentials, transient task status or facts already covered by project rules. Saved project memories are normal .openvision/rules/memory-*.mdc files, loaded on demand when relevant.`;

export const maxProposalBytes = 64 * 1024;

export function parseMemoryProposal(text) {
  if (typeof text !== 'string' || text.length > maxProposalBytes || new TextEncoder().encode(text).byteLength > maxProposalBytes)
    throw new Error('A memory suggestion must be text of at most 64 KiB.');
  let value;
  try { value = JSON.parse(text); } catch { throw new Error('The memory suggestion is not valid JSON.'); }
  if (!value || Array.isArray(value) || Object.keys(value).some(key => !['title', 'description', 'content'].includes(key)) ||
      ['title', 'description', 'content'].some(key => typeof value[key] !== 'string' || !value[key].trim()))
    throw new Error('A memory needs a title, a description of when to use it, and content.');
  return { title: value.title.trim(), description: value.description.trim(), content: value.content };
}

export function memoryRuleText(proposal) {
  const description = `${proposal.title}: ${proposal.description}`;
  return `---\ndescription: ${JSON.stringify(description)}\nalwaysApply: false\n---\n\n${proposal.content.trimEnd()}\n`;
}

export function captureMemoryWorkspace(workspace) {
  const current = workspace.getWorkspace();
  return { id: current.id, folders: current.folders.map(folder => ({ name: folder.name, uri: folder.uri })) };
}

function assertWorkspace(context, folder) {
  const current = context.workspace.getWorkspace();
  if (current.id !== context.snapshot.id || !current.folders.some(item => item.uri.toString() === folder.uri.toString()))
    throw new Error('The project changed. Review this suggestion again in its original project.');
  context.assertCurrent?.();
}

async function ensureDirectory(context, uri) {
  const { files, isMissing } = context;
  let stat;
  try { stat = await files.stat(uri); }
  catch (error) {
    if (!isMissing(error)) throw error;
    await files.createFolder(uri);
    stat = await files.stat(uri);
  }
  if (!stat.isDirectory || stat.isSymbolicLink)
    throw new Error('Memory folders must be ordinary project directories, not links.');
}

export async function saveApprovedMemory(text, folder, context) {
  // Called only by the review card's explicit Save action. No render/stream path writes.
  const proposal = parseMemoryProposal(text), content = memoryRuleText(proposal);
  assertWorkspace(context, folder);
  const bytes = new TextEncoder().encode(content);
  const hash = [...new Uint8Array(await crypto.subtle.digest('SHA-256', bytes))]
    .map(byte => byte.toString(16).padStart(2, '0')).join('');
  const { files, URI, Buffer } = context;
  const namespace = URI.joinPath(folder.uri, '.openvision');
  const directory = URI.joinPath(namespace, 'rules');
  await ensureDirectory(context, namespace);
  await ensureDirectory(context, directory);
  assertWorkspace(context, folder);
  const name = `memory-${hash}.mdc`, uri = URI.joinPath(directory, name);
  // Repeated approval of the same suggestion is idempotent. An edited or
  // conflicting file is preserved and never silently replaced. Only a strict
  // byte prefix of this exact content (the remains of an interrupted earlier
  // write of the same hash-named file, for example on a full volume) is repaired.
  const existing = await existingMemory(context, uri);
  if (existing && equalBytes(existing, bytes)) return uri;
  if (existing && !isPrefix(existing, bytes)) throw new Error('This memory file already exists with different content. It was preserved.');
  // Write a sibling temporary file completely, then rename it into place, so a
  // failed write never leaves a partial memory that blocks the next attempt.
  const temporary = URI.joinPath(directory, `.${name}.openvision-${crypto.randomUUID()}.tmp`);
  try {
    await files.createFile(temporary, Buffer.fromString(content), { overwrite: false });
    assertWorkspace(context, folder);
    await files.move(temporary, uri, existing !== undefined);
  } catch (error) {
    await files.del(temporary).catch(() => {});
    // A concurrent approval of the same suggestion in another window is success.
    const current = await existingMemory(context, uri).catch(() => undefined);
    if (current && equalBytes(current, bytes)) return uri;
    throw error;
  }
  return uri;
}

async function existingMemory({ files, isMissing }, uri) {
  let stat;
  try { stat = await files.stat(uri); }
  catch (error) { if (isMissing(error)) return undefined; throw error; }
  if (!stat.isFile || stat.isSymbolicLink) throw new Error('This memory path already exists and is not an ordinary file. It was preserved.');
  const { value } = await files.readFile(uri);
  // VSBuffer exposes its bytes as `.buffer`; a Node Buffer is already a Uint8Array.
  return value instanceof Uint8Array ? value : value.buffer;
}

function isPrefix(prefix, bytes) {
  return prefix.length < bytes.length && prefix.every((byte, index) => byte === bytes[index]);
}

function equalBytes(left, right) {
  return left.length === right.length && left.every((byte, index) => byte === right[index]);
}
