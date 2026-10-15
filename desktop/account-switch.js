const handoffTimeout = 15000;
const retryDelay = 150;

async function withinHandoff(operation, message) {
  let timer;
  try {
    return await Promise.race([operation, new Promise((_, reject) => {
      timer = setTimeout(() => reject(Error(message)), handoffTimeout);
    })]);
  } finally { clearTimeout(timer); }
}

const runtime = command => withinHandoff(command('openvision.accounts.runtime'),
  'The agent connection did not respond. Try Refresh status.');

export async function waitForAccount(command, provider, id) {
  const deadline = Date.now() + handoffTimeout;
  do {
    try {
      const status = await runtime(command);
      if (status?.providers?.find(item => item.id === provider)?.accountId === id) return;
    } catch (error) {
      // The retiring host can reject one in-flight registration during handoff.
      if (error?.name !== 'Canceled' && !/^cancel(l)?ed$/i.test(error?.message ?? '')) throw error;
    }
    await new Promise(resolve => setTimeout(resolve, retryDelay));
  } while (Date.now() < deadline);
  throw Error('The agent is still using its previous account. Finish pending work and try switching again.');
}

export function createAccountSwitch(command, ipc) {
  let pending;
  const select = (provider, id) => {
    if (pending) return Promise.reject(Error('An account switch is already in progress.'));
    pending = (async () => {
      await ipc({ action: 'select', provider, id });
      await command('workbench.action.restartExtensionHost');
      await waitForAccount(command, provider, id);
    })().finally(() => { pending = undefined; });
    // Retain the real pending handoff until it settles: a UI deadline must not
    // allow overlapping host restarts or misreport a saved selection as active.
    return withinHandoff(pending,
      'The agent connection did not finish reconnecting. Your profile is saved. Reload OpenVision to recover the connection.');
  };
  return { select, async ensure(provider) {
    if (!['codex', 'claude'].includes(provider)) throw Error('Choose Codex or Claude.');
    const observed = await runtime(command);
    if (observed.providers.find(item => item.id === provider)?.accountId) return;
    const profiles = await ipc({ action: 'list' });
    const id = profiles.active[provider] ?? (await ipc({ action: 'create', provider,
      label: provider === 'codex' ? 'ChatGPT account' : 'Claude account' })).id;
    await select(provider, id);
  }, async remove(provider, id) {
    const state = await ipc({ action: 'list' });
    const observed = await runtime(command);
    if (state.active[provider] === id || observed.providers.find(item => item.id === provider)?.accountId === id)
      await select(provider, null);
    return ipc({ action: 'remove', provider, id });
  } };
}
