import { app, Notification } from 'electron';

const notifications = new Map();
const notificationCapacity = 64;
const send = message => { if (process.connected) process.send(message, () => {}); };
const terminal = (id, event) => {
  if (!notifications.delete(id)) return;
  send({ kind: 'event', id, event });
};
process.once('disconnect', () => app.exit(0));
const operations = {
  notificationSupport: () => Notification.isSupported(),
  getJumpListSettings: () => app.getJumpListSettings(),
  setJumpList: categories => app.setJumpList(categories),
  addRecentDocument: path => app.addRecentDocument(path),
  clearRecentDocuments: () => app.clearRecentDocuments(),
};
process.on('message', message => {
  if (!message || !Number.isSafeInteger(message.id)) return;
  if (message.kind === 'request') {
    if (!Object.hasOwn(operations, message.method) || !Array.isArray(message.args) || !app.isReady()) return;
    try { send({ kind: 'result', id: message.id, ok: true, value: operations[message.method](...message.args) }); }
    catch { send({ kind: 'result', id: message.id, ok: false }); }
    return;
  }
  if (message.kind === 'close') {
    const notification = notifications.get(message.id);
    notification?.close(); terminal(message.id, 'close'); return;
  }
  if (message.kind !== 'show' || !app.isReady() || notifications.has(message.id)) return;
  if (notifications.size >= notificationCapacity) { send({ kind: 'event', id: message.id, event: 'failed' }); return; }
  try {
    const notification = new Notification(message.options);
    notifications.set(message.id, notification);
    notification.once('close', () => terminal(message.id, 'close'));
    notification.once('failed', () => terminal(message.id, 'failed'));
    for (const event of ['click', 'reply', 'action']) notification.on(event, (_event, index) =>
      send({ kind: 'event', id: message.id, event, ...(event === 'action' ? { index } : {}) }));
    notification.show();
    send({ kind: 'event', id: message.id, event: 'shown' });
  } catch { notifications.delete(message.id); send({ kind: 'event', id: message.id, event: 'failed' }); }
});

const profileIndex = process.argv.indexOf('--user-data-dir');
if (profileIndex < 0 || !process.argv[profileIndex + 1]) throw Error('Notification host profile is required');
app.setPath('userData', process.argv[profileIndex + 1]);
const identityIndex = process.argv.indexOf('--app-user-model-id');
if (identityIndex < 0 || !process.argv[identityIndex + 1]) throw Error('Windows application identity is required');
app.setAppUserModelId(process.argv[identityIndex + 1]);
app.whenReady().then(() => send({ kind: 'ready', supported: true }));
