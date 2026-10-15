import { app, Notification } from 'electron';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { NotificationHostOwner, notificationProxy } from './notification-host-owner.mjs';

const owner = new NotificationHostOwner(() => {
  const env = { ...process.env, OPENVISION_NOTIFICATION_HOST: '1' };
  delete env.ELECTRON_RUN_AS_NODE;
  const { win32AppUserModelId } = JSON.parse(readFileSync(new URL('../product.json', import.meta.url), 'utf8'));
  if (typeof win32AppUserModelId !== 'string' || !win32AppUserModelId) throw Error('Windows application identity is missing');
  return spawn(process.execPath, ['--user-data-dir', join(app.getPath('userData'), 'notification-host'),
    '--app-user-model-id', win32AppUserModelId], {
    env, windowsHide: true, stdio: ['ignore', 'ignore', 'ignore', 'ipc'],
  });
}, message => console.warn(`[OpenVision] ${message}`));
// Joined by the editor only after all shutdown vetoes have been resolved.
export const shutdownShellHost = () => owner.dispose();
export const SafeNotification = process.platform === 'win32' ? notificationProxy(owner) : Notification;
export const SafeShellApp = process.platform === 'win32' ? Object.fromEntries(
  ['getJumpListSettings', 'setJumpList', 'addRecentDocument', 'clearRecentDocuments']
    .map(method => [method, (...args) => owner.call(method, args)])) : app;
