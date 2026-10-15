// Do not import the editor's main module into the isolated native host.
if (process.platform === 'win32' && process.env.OPENVISION_NOTIFICATION_HOST === '1' && process.send) {
  delete process.env.OPENVISION_NOTIFICATION_HOST;
  await import('./notification-host.mjs');
} else {
  delete process.env.OPENVISION_NOTIFICATION_HOST;
  await import('./main.js');
}
