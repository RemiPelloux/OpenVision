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
  const uri = URI.joinPath(directory, `memory-${hash}.mdc`);
  try { await files.createFile(uri, Buffer.fromString(content), { overwrite: false }); }
  catch (error) {
    // Repeated approval of the same suggestion is idempotent. An edited or
    // conflicting file is preserved and never silently replaced.
    const stat = await files.stat(uri).catch(() => { throw error; });
    if (!stat.isFile || stat.isSymbolicLink) throw error;
    const previous = await files.readFile(uri);
    if (previous.value.toString() !== content) throw new Error('This memory file already exists with different content. It was preserved.');
  }
  return uri;
}
