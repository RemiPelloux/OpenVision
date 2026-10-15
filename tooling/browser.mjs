import { existsSync } from 'node:fs';
export { chromium, _electron } from 'playwright-core';

const linuxBrowsers = ['/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome', '/usr/bin/microsoft-edge-stable', '/usr/bin/brave', '/snap/bin/chromium'];

// Headless fixture browser: Edge ships with Windows; elsewhere use an installed
// Chromium-family browser. OPENVISION_BROWSER_PATH or _CHANNEL override detection.
export function browserLaunchOptions(env = process.env, platform = process.platform, exists = existsSync) {
  if (env.OPENVISION_BROWSER_PATH) return { executablePath: env.OPENVISION_BROWSER_PATH, headless: true };
  if (env.OPENVISION_BROWSER_CHANNEL) return { channel: env.OPENVISION_BROWSER_CHANNEL, headless: true };
  if (platform === 'win32') return { channel: 'msedge', headless: true };
  if (platform === 'darwin') return { channel: 'chrome', headless: true };
  const executablePath = linuxBrowsers.find(path => exists(path));
  if (!executablePath) throw new Error('No Chromium-family browser found. Install Chromium or set OPENVISION_BROWSER_PATH.');
  return { executablePath, headless: true };
}
