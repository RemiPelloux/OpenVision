import { samePath } from './platform.mjs';

export function assertWorkbenchSender(event, expected, platform = process.platform) {
  let sender;
  try { sender = new URL(event.senderFrame?.url); } catch {}
  if (!sender || event.senderFrame !== event.sender?.mainFrame || sender.protocol !== 'vscode-file:' ||
      sender.hostname !== 'vscode-app' || !samePath(decodeURIComponent(sender.pathname), decodeURIComponent(expected.pathname), platform))
    throw new Error('This operation is available only to the OpenVision workbench.');
}
