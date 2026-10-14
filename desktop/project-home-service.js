import { repositoryLocation } from './project-clone-dialog.js';
const pinPrefix = 'openvision.project-pin.v1.';

export function projectIdentity(uri, remoteAuthority) {
  return JSON.stringify([uri.scheme, uri.authority ?? '', uri.path, uri.query ?? '', uri.fragment ?? '', remoteAuthority ?? '']);
}

export function projectRows(history, windows, { pinned, identity = projectIdentity }) {
  const opened = new Map();
  for (const window of windows) {
    const uri = window.workspace?.uri ?? window.workspace?.configPath;
    if (uri && !window.isGlass) opened.set(identity(uri, window.remoteAuthority), window.id);
  }
  const seen = new Set(), rows = [];
  for (const entry of history.workspaces) {
    const uri = entry.folderUri ?? entry.workspace?.configPath;
    if (!uri) continue;
    const id = identity(uri, entry.remoteAuthority);
    if (seen.has(id)) continue;
    seen.add(id);
    const path = uri.scheme === 'file' ? uri.fsPath : uri.toString();
    const name = entry.label || path.replace(/[\\/]+$/, '').split(/[\\/]/).at(-1) || path;
    rows.push({ id, name, path, kind: entry.folderUri ? 'Folder' : 'Workspace',
      remote: entry.remoteAuthority ?? '', pinned: pinned(id), windowId: opened.get(id),
      search: `${name}\n${path}\n${entry.remoteAuthority ?? ''}`.toLocaleLowerCase(), entry });
  }
  return rows;
}

export function createProjectHomeService(owner, getWorkspaces) {
  const pinned = id => owner.storageService.get(`${pinPrefix}${id}`, 0) === 'true';
  const rows = (history, windows) => {
    const first = history.workspaces[0], Uri = (first?.folderUri ?? first?.workspace?.configPath)?.constructor;
    // The native URI owner supplies filesystem casing and revives IPC URI values.
    const identity = owner.uriIdentityService && Uri?.revive
      ? (uri, remote) => JSON.stringify([owner.uriIdentityService.extUri.getComparisonKey(Uri.revive(uri)), remote ?? ''])
      : projectIdentity;
    return projectRows(history, windows, { pinned, identity });
  };
  const service = {
    async load() {
      const [history, windows] = await Promise.all([getWorkspaces().getRecentlyOpened(),
        owner.nativeHostService.getWindows({ includeAuxiliaryWindows: false })]);
      return rows(history, windows);
    },
    async open(row) {
      // Recheck window identity at click time; a cached window ID can be stale.
      const windows = await owner.nativeHostService.getWindows({ includeAuxiliaryWindows: false });
      const current = rows({ workspaces: [row.entry] }, windows)[0];
      if (current?.windowId !== undefined)
        return owner.nativeHostService.focusWindow({ targetWindowId: current.windowId });
      const uri = row.entry.folderUri ?? row.entry.workspace.configPath;
      if (uri.scheme === 'file' && !await owner.fileService.exists(uri))
        throw Error('This project has moved or is unavailable. Open its new location, or remove it from history.');
      const target = row.entry.folderUri ? { folderUri: uri } : { workspaceUri: uri };
      return owner.nativeHostService.openWindow([target], { forceNewWindow: true, cursorForceNewWindow: true,
        ...(row.entry.remoteAuthority ? { remoteAuthority: row.entry.remoteAuthority } : {}) });
    },
    pin(row, value) { owner.storageService.store(`${pinPrefix}${row.id}`, value ? 'true' : 'false', 0, 1); },
    async remove(row) {
      await getWorkspaces().removeRecentlyOpened([row.entry.folderUri ?? row.entry.workspace.configPath]);
      owner.storageService.remove(`${pinPrefix}${row.id}`, 0);
    },
    folder: () => owner.nativeHostService.pickFolderAndOpen({ forceNewWindow: true, cursorForceNewWindow: true }),
    workspace: () => owner.nativeHostService.pickWorkspaceAndOpen({ forceNewWindow: true, cursorForceNewWindow: true }),
    theme: () => owner.commandService.executeCommand('workbench.action.selectTheme'),
    appearance: () => owner.commandService.executeCommand('workbench.action.openSettings', 'workbench.color'),
    async clone(location) {
      const path = await owner.commandService.executeCommand('git.clone', repositoryLocation(location), undefined,
        { openAfterClone: false });
      if (!path) return false;
      const Uri = owner.nativeEnvironmentService.userRoamingDataHome.constructor;
      await owner.nativeHostService.openWindow([{ folderUri: Uri.file(path) }],
        { forceNewWindow: true, cursorForceNewWindow: true });
      return true;
    },
    async showOnStartup() {
      if (owner.nativeEnvironmentService.isGlass || owner.contextService.getWorkbenchState() !== 1) return false;
      const windows = await owner.nativeHostService.getWindows({ includeAuxiliaryWindows: false });
      return !windows.some(window => window.isGlass);
    },
    onChange: callback => getWorkspaces().onDidChangeRecentlyOpened(callback),
  };
  return service;
}

export function installProjectHome(owner, getWorkspaces) {
  window.openvisionProjectHome = createProjectHomeService(owner, getWorkspaces);
  window.dispatchEvent(new Event('openvision-project-home-ready'));
}
