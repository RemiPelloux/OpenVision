import { app, Notification } from 'electron';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { NotificationHostOwner, notificationProxy } from './notification-host-owner.mjs';

const owner = new NotificationHostOwner(() => {
  const env = { ...process.env, OPENVISION_NOTIFICATION_HOST: '1' };
  delete env.ELECTRON_RUN_AS_NODE;
  return spawn(process.execPath, ['--user-data-dir', join(app.getPath('userData'), 'notification-host')], {
    env, windowsHide: true, stdio: ['ignore', 'ignore', 'ignore', 'ipc'],
  });
}, message => console.warn(`[OpenVision] ${message}`));
app.once('before-quit', () => owner.dispose());
export const SafeNotification = process.platform === 'win32' ? notificationProxy(owner) : Notification;
export const SafeShellApp = process.platform === 'win32' ? Object.fromEntries(
  ['getJumpListSettings', 'setJumpList', 'addRecentDocument', 'clearRecentDocuments']
    .map(method => [method, (...args) => owner.call(method, args)])) : app;
