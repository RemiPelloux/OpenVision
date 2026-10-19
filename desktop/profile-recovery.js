// Startup recovery guidance in the workbench (OV-1004). The main process
// inspects the profile read-only; this panel explains what was found, what
// OpenVision did, and that original bytes were kept. Dismiss acknowledges the
// shown findings so they do not return until the evidence changes.
const channel = 'vscode:openvision-profile-recovery';
const guide = 'docs/guides/recovery.md';

function element(tag, text, style = '') {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (style) node.style.cssText = style;
  return node;
}

export function renderRecoveryNotice(findings, onDismiss) {
  const panel = element('section', undefined, 'position:fixed;right:16px;bottom:32px;z-index:3000;max-width:520px;' +
    'padding:12px 16px;border-radius:6px;background:var(--vscode-notifications-background,#252526);' +
    'color:var(--vscode-notifications-foreground,#ccc);border:1px solid var(--vscode-notificationsWarningIcon-foreground,#cca700);' +
    'box-shadow:0 0 8px rgba(0,0,0,.4);font-size:13px;line-height:1.4');
  panel.className = 'openvision-profile-recovery';
  panel.setAttribute('role', 'alert');
  panel.setAttribute('aria-label', 'OpenVision profile recovery');
  panel.append(element('h2', 'OpenVision recovered from unreadable profile data', 'font-size:14px;margin:0 0 8px'));
  const list = element('ul', undefined, 'margin:0 0 8px;padding-left:18px');
  for (const finding of findings) {
    const item = element('li', undefined, 'margin-bottom:6px');
    item.append(element('strong', finding.title), element('div', finding.detail), element('code', finding.path, 'font-size:11px;word-break:break-all'));
    list.append(item);
  }
  panel.append(list, element('p', `Recovery steps: ${guide} (corrupt profile, keyring loss, crash, rollback).`, 'margin:0 0 8px'));
  const dismiss = element('button', 'Dismiss', 'padding:2px 10px');
  dismiss.onclick = async () => { dismiss.disabled = true; await onDismiss?.(); panel.remove(); };
  panel.append(dismiss);
  document.body.append(panel);
  return panel;
}

// Findings come from the main-process profile inspection and from workbench
// owners that meet unreadable data while loading (rules, providers, reviews),
// which call (globalThis.openvisionProfileRecoveryQueue ??= []).push(finding). Workbench
// findings are not persisted: they return on the next start while the data is
// still unreadable.
const state = { findings: [], persisted: new Set(), panel: undefined, ipc: undefined };
function refresh() {
  state.panel?.remove();
  state.panel = state.findings.length ? renderRecoveryNotice(state.findings, async () => {
    const ids = state.findings.map(finding => finding.id).filter(id => state.persisted.has(id));
    state.findings = []; state.panel = undefined;
    if (ids.length) await state.ipc?.invoke(channel, { action: 'acknowledge', ids, folders: workspaceFolders() });
  }) : undefined;
}
export function reportProfileFinding(finding) {
  if (!finding?.id || state.findings.some(existing => existing.id === finding.id)) return;
  state.findings.push({ title: String(finding.title ?? ''), detail: String(finding.detail ?? ''), path: String(finding.path ?? ''), id: String(finding.id) });
  if (globalThis.document?.body) refresh();
}

export async function showProfileRecovery(ipc = globalThis.vscode?.ipcRenderer) {
  if (!ipc) return;
  state.ipc = ipc;
  const response = await ipc.invoke(channel, { action: 'inspect', folders: workspaceFolders() });
  if (!response?.ok) { console.error('[OpenVision] profile recovery inspection failed:', response?.error); return; }
  for (const finding of response.findings) { state.persisted.add(finding.id); reportProfileFinding(finding); }
  return state.panel;
}

// The window's folder, from the sandbox window configuration (file URIs only).
function workspaceFolders() {
  try {
    const workspace = globalThis.vscode?.context?.configuration?.()?.workspace;
    const uri = workspace?.uri;
    return uri?.scheme === 'file' && typeof uri.path === 'string' ? [decodeURIComponent(uri.path)] : [];
  } catch { return []; }
}

// Owners push findings to a queue that may exist before this module loads.
const queued = Array.isArray(globalThis.openvisionProfileRecoveryQueue) ? globalThis.openvisionProfileRecoveryQueue : [];
globalThis.openvisionProfileRecoveryQueue = { push: finding => reportProfileFinding(finding) };
for (const finding of queued) reportProfileFinding(finding);

if (globalThis.document) {
  const start = () => setTimeout(() => showProfileRecovery().then(() => { if (state.findings.length && !state.panel) refresh(); })
    .catch(error => console.error('[OpenVision] profile recovery:', error)), 1500);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
}
