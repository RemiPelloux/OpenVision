import { existsSync } from 'node:fs';
import { _electron as electron } from 'playwright-core';
export { chromium } from 'playwright-core';

const ozonePlatforms = ['x11', 'wayland', 'headless', 'auto'];

// Linux display cells: OPENVISION_OZONE_PLATFORM=x11|wayland|headless|auto pins
// Chromium's display backend for every native verifier launch. Unset keeps
// Electron's own choice (Wayland when WAYLAND_DISPLAY is set, otherwise X11).
export function ozoneArguments(env = process.env, platform = process.platform) {
  const value = env.OPENVISION_OZONE_PLATFORM;
  if (!value || platform !== 'linux') return [];
  if (!ozonePlatforms.includes(value)) throw new Error(`OPENVISION_OZONE_PLATFORM must be one of ${ozonePlatforms.join(', ')}.`);
  return [`--ozone-platform=${value}`];
}

export const _electron = {
  launch: (options = {}) => electron.launch({ ...options,
    args: [...ozoneArguments(options.env ?? process.env), ...(options.args ?? [])] })
};

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
