import { parseExpressionAt } from '../tooling/dependencies.mjs';

// The shared process adopts every new top-level directory in the user extensions
// folder that it did not extract itself: it re-adds the extension to the default
// profile with undefined metadata. A settings import commits the extension registry
// together with its directories, so that adoption replaced the imported entries
// (dropping gallery metadata, uuid and target platform) and made the import's
// exact restore refuse the changed registry. Skip directories the default profile
// already registers, and directories already gone again (an import restored right
// after it was applied); unregistered external directories are still adopted.
export const importWatcherMarker = '/* OpenVision import keeps registered extension directories v2 */';
const adoption = 'r && r.installedTimestamp === void 0 && (this.knownDirectories.add(i), t.push(r));';

export function keepRegisteredExtensionDirectories(text) {
  if (text.includes(importWatcherMarker)) return text;
  const anchor = 'async onDidFilesChange(e) {';
  const position = text.indexOf(anchor);
  if (position < 0 || text.indexOf(anchor, position + anchor.length) >= 0) throw Error('Extension folder watcher is missing or ambiguous.');
  const owner = parseExpressionAt(text, text.lastIndexOf('class extends ', position), { ecmaVersion: 'latest' });
  const method = owner.body.body.find(node => node.key?.name === 'onDidFilesChange' && node.value.async);
  if (!method || method.start !== position) throw Error('Extension folder watcher ownership changed.');
  const source = text.slice(method.start, method.end);
  if (source.split(adoption).length !== 2 || !source.includes('this.extensionsScanner.scanUserExtensionAtLocation(i)') ||
      !source.includes('this.userDataProfilesService.defaultProfile.extensionsResource') ||
      !owner.body.body.some(node => node.key?.name === 'watchForExtensionsNotInstalledBySystem') || !text.includes('scanProfileExtensions(e, t) {'))
    throw Error('Extension folder watcher contract changed.');
  const replacement = `r && r.installedTimestamp === void 0 && (this.knownDirectories.add(i), ${importWatcherMarker}
          (await this.extensionsProfileScannerService.scanProfileExtensions(this.userDataProfilesService.defaultProfile.extensionsResource)
            .catch(() => [])).some((o) => this.uriIdentityService.extUri.isEqual(o.location, i)) ||
          !(await this.fileService.exists(i)) || t.push(r));`;
  return text.slice(0, method.start) + source.replace(adoption, replacement) + text.slice(method.end);
}
