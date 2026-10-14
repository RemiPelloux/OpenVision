export const largePasteThreshold = 10_000;
const pendingByComposer = new Map();

export function pasteWorkspace({ services, composer, URI }) {
  const workspace = services.workspaceContextService;
  const candidate = composer?.workspaceIdentifier?.uri;
  const uri = candidate ? (typeof candidate === 'string' ? URI.parse(candidate) : URI.revive(candidate)) : undefined;
  const active = services.editorService?.activeEditor?.resource;
  return (uri && workspace.getWorkspaceFolder(uri))?.uri ??
    (active && workspace.getWorkspaceFolder(active))?.uri ?? workspace.getWorkspace().folders[0]?.uri;
}

export async function writePaste({ text, folder, services, URI, Buffer, name }) {
  const directory = URI.joinPath(folder, '.openvision', 'paste');
  const file = URI.joinPath(directory, name);
  await services.fileService.createFolder(directory);
  const ignore = URI.joinPath(directory, '.gitignore');
  if (!await services.fileService.exists(ignore)) {
    try { await services.fileService.createFile(ignore, Buffer.fromString('*\n'), { overwrite: false }); }
    catch (error) { if (!await services.fileService.exists(ignore)) throw error; }
  }
  // Exclusive creation also protects existing files if a name ever collides.
  await services.fileService.createFile(file, Buffer.fromString(text), { overwrite: false });
  return file;
}

function track(composerId, task) {
  let pending = pendingByComposer.get(composerId);
  if (!pending) pendingByComposer.set(composerId, pending = new Set());
  pending.add(task);
  const release = () => {
    pending.delete(task);
    if (!pending.size) pendingByComposer.delete(composerId);
  };
  task.then(release, release);
}

export async function waitForLargePastes(composer) {
  const id = typeof composer === 'string' ? composer : composer?.data?.composerId ?? composer?.composerId;
  while (pendingByComposer.has(id)) await Promise.all(pendingByComposer.get(id));
}

export function handleLargePaste(event, context) {
  const text = event.clipboardData?.getData('text/plain') || event.clipboardData?.getData('Text');
  if (typeof text !== 'string' || text.length < largePasteThreshold || event.clipboardData?.files?.length) return false;
  const { composer, services, URI, insertReference } = context;
  if (!composer?.composerId) return false;
  const folder = pasteWorkspace(context);
  if (!folder) {
    services.notificationService.warn('Open a project folder to save large pastes as files. Pasting the text normally.');
    return false;
  }
  const name = `paste-${new Date().toISOString().replace(/[:.]/g, '-')}-${crypto.randomUUID()}.txt`;
  const uri = URI.joinPath(folder, '.openvision', 'paste', name);
  const restore = insertReference(`[Pasted text: ${uri.fsPath || uri.toString()} — read this file when needed.]`);
  if (!restore) return false;
  event.preventDefault();
  event.stopPropagation();
  const task = writePaste({ ...context, text, folder, name }).catch(error => {
    restore(text);
    services.notificationService.error(`Could not save the large paste. Your clipboard is unchanged. ${error.message}`);
    throw error;
  });
  track(composer.composerId, task);
  return true;
}
