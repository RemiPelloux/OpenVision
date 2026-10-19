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

export async function showProfileRecovery(ipc = globalThis.vscode?.ipcRenderer) {
  if (!ipc) return;
  const response = await ipc.invoke(channel, { action: 'inspect' });
  if (!response?.ok) { console.error('[OpenVision] profile recovery inspection failed:', response?.error); return; }
  if (!response.findings.length) return;
  return renderRecoveryNotice(response.findings, () => ipc.invoke(channel, { action: 'acknowledge', ids: response.findings.map(finding => finding.id) }));
}

if (globalThis.document) {
  const start = () => setTimeout(() => showProfileRecovery().catch(error => console.error('[OpenVision] profile recovery:', error)), 1500);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true }); else start();
}
