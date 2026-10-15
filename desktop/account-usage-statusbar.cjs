'use strict';

const { USAGE_REFRESH_MS } = require('./account-usage.cjs');
const names = { codex: 'Codex', claude: 'Claude' };
const percent = value => `${Math.round(value)}%`;
const clean = value => String(value ?? '').replace(/[\r\n\t]/g, ' ');

function usageLines(row) {
  const lines = [clean(row.email || 'Selected account') + (row.plan ? ` · ${clean(row.plan)}` : '')];
  if (row.state !== 'available') lines.push(row.state === 'signed-out' ? 'Sign in to view usage.' : 'Usage unavailable. The provider did not return quota data.');
  for (const window of row.windows ?? []) {
    lines.push(`${clean(window.label)}: ${percent(window.usedPercent)} used · ${percent(100 - window.usedPercent)} remaining`);
    lines.push(window.resetsAt ? `Resets ${new Date(window.resetsAt).toLocaleString()}` : 'Reset time unavailable');
  }
  if (row.checkedAt) lines.push(`Checked ${new Date(row.checkedAt).toLocaleTimeString()}`);
  return lines;
}

function createUsageStatusBar(vscode, integration, dependencies = {}) {
  const schedule = dependencies.schedule ?? setTimeout, unschedule = dependencies.unschedule ?? clearTimeout;
  const items = new Map(), snapshots = new Map();
  let disposed = false, running, timer, queued = false, queuedForce = false;
  function render(row) {
    let item = items.get(row.provider);
    if (!item) {
      item = vscode.window.createStatusBarItem(`openvision.usage.${row.provider}`, vscode.StatusBarAlignment.Right, row.provider === 'codex' ? 48 : 47);
      item.name = `${names[row.provider]} account usage`;
      item.command = { command: 'openvision.accounts.showUsage', title: 'Account usage', arguments: [row.provider] };
      items.set(row.provider, item);
    }
    const windows = row.windows ?? [];
    const stale = windows.some(window => window.resetsAt && window.resetsAt <= Date.now());
    const values = windows.slice(0, 2).map(window => percent(window.usedPercent)).join(' / ');
    const label = row.state === 'checking' ? 'Checking…' : stale ? 'Refresh usage' : values || (row.state === 'signed-out' ? 'Sign in' : 'Usage unavailable');
    item.text = `${names[row.provider]} ${label}`;
    item.tooltip = `${names[row.provider]} account usage\n${usageLines(row).join('\n')}${stale ? '\nQuota window has ended. Refresh for current usage.' : ''}\nClick for details and account controls.`;
    item.accessibilityInformation = { label: item.tooltip };
    item.show();
  }
  async function refresh(force = false) {
    if (disposed) return;
    if (running) { queued = true; queuedForce ||= force; return running; }
    unschedule(timer);
    running = (async () => {
      do {
      queued = false;
      const result = await integration.usage({ refresh: force });
      if (disposed) return;
      const active = new Set();
      for (const row of result.providers) {
        if (!row.accountId || !row.installed) continue;
        active.add(row.provider); snapshots.set(row.provider, row); render(row);
      }
      for (const [provider, item] of items) if (!active.has(provider)) {
        item.dispose(); items.delete(provider); snapshots.delete(provider);
      }
      force = queuedForce; queuedForce = false;
      } while (queued && !disposed);
    })().catch(() => {
      if (!disposed) for (const [provider, row] of snapshots) render({ ...row, provider, state: 'unavailable', windows: [] });
    }).finally(() => {
      running = null;
      if (!disposed && queued) { const force = queuedForce; queuedForce = false; void refresh(force); }
      else if (!disposed && vscode.window.state.focused) timer = schedule(() => refresh(), USAGE_REFRESH_MS);
    });
    return running;
  }
  async function show(provider) {
    const row = snapshots.get(provider);
    if (!row || disposed) return;
    const details = usageLines(row);
    const choice = await vscode.window.showQuickPick([
      ...details.map(label => ({ label })), { label: 'Actions', kind: vscode.QuickPickItemKind.Separator },
      { label: '$(refresh) Refresh usage', action: 'refresh', description: 'Checks are limited to once every 30 seconds' },
      { label: `Open ${names[provider]}`, action: 'open' },
      { label: 'Manage / switch accounts', action: 'accounts' },
    ], { title: `${names[provider]} · Account usage`, placeHolder: 'Usage applies to the account connected in this window' });
    if (disposed) return;
    if (choice?.action === 'refresh') { await refresh(true); return show(provider); }
    if (choice?.action === 'open') await integration.open(provider);
    if (choice?.action === 'accounts') await vscode.commands.executeCommand('aiSettings.action.open', 'models');
  }
  const focus = vscode.window.onDidChangeWindowState(state => {
    unschedule(timer);
    if (state.focused) void refresh();
  });
  for (const row of integration.runtime?.().providers ?? [])
    if (row.accountId && row.installed) render({ ...row, state: 'checking' });
  void refresh();
  return { refresh, show, dispose() {
    disposed = true; unschedule(timer); focus.dispose();
    for (const item of items.values()) item.dispose(); items.clear(); snapshots.clear();
  } };
}

module.exports = { createUsageStatusBar, usageLines };
