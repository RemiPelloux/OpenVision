import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { digest } from './import-files.mjs';

// OV-702: when an extension's native addon targets another CPU, glibc's dlopen
// skips the file and reports "cannot open shared object file: No such file or
// directory" although the file exists. The extension host keeps that failure
// isolated to the extension; this guard only rewrites the message so that the
// activation error names the addon's architecture and the host's platform.
export const marker = '/* OpenVision native addon diagnostics v1 */';
const anchor = /async _doLoadModule\(/g;

// Runs inside the extension host. Kept self-contained so it can be serialized.
export function installNativeAddonDiagnostics(proc, fs) {
  if (!proc || !fs || typeof proc.dlopen !== 'function' || proc.dlopen.openvisionNativeDiagnostics) return false;
  const original = proc.dlopen;
  const elf = { 3: 'ia32', 8: 'mips', 20: 'ppc', 21: 'ppc64', 22: 's390x', 40: 'arm', 62: 'x64', 183: 'arm64', 243: 'riscv64', 258: 'loong64' };
  const macho = { 7: 'ia32', 12: 'arm', 16777223: 'x64', 16777228: 'arm64' };
  function inspect(file) {
    const header = new Uint8Array(64);
    let fd;
    try { fd = fs.openSync(file, 'r'); fs.readSync(fd, header, 0, 64, 0); }
    catch { return null; }
    finally { if (fd !== undefined) try { fs.closeSync(fd); } catch {} }
    const view = new DataView(header.buffer);
    if (view.getUint32(0) === 0x7f454c46) {
      const machine = view.getUint16(18, header[5] !== 2);
      return { format: 'ELF', arch: elf[machine] ?? `ELF machine ${machine}` };
    }
    const magic = view.getUint32(0, true);
    if (magic === 0xfeedfacf || magic === 0xfeedface) {
      const cpu = view.getInt32(4, true);
      return { format: 'Mach-O', arch: macho[cpu] ?? `Mach-O CPU ${cpu}` };
    }
    return { format: 'unknown', arch: null };
  }
  const dlopen = function (module, filename, ...rest) {
    try { return original.call(this, module, filename, ...rest); }
    catch (error) {
      if (error && error.code === 'ERR_DLOPEN_FAILED' && typeof filename === 'string' && !error.openvisionNativeDiagnostics) {
        const found = inspect(filename), host = `${proc.platform}-${proc.arch}`;
        const reason = !found ? null
          : found.arch && found.arch !== proc.arch ? `it was built for ${found.arch}, but this extension host runs ${host}`
          : found.format === 'unknown' ? `it is not a native library for ${host}` : null;
        if (reason) {
          try {
            error.message = `Cannot load native addon ${filename}: ${reason}. Install a build of this extension for ${host}. (${error.message})`;
            error.openvisionNativeDiagnostics = true;
          } catch {}
        }
      }
      throw error;
    }
  };
  dlopen.openvisionNativeDiagnostics = true;
  proc.dlopen = dlopen;
  return true;
}

export function nativeAddonDiagnostics(text) {
  if (text.includes(marker)) {
    if (text.split(marker).length !== 2) throw new Error('Native addon diagnostics installed more than once');
    return text;
  }
  // Drift guard: this must be the Node extension host, which owns extension module loading.
  if ((text.match(anchor) ?? []).length !== 1) throw new Error('Extension host module loader shape changed');
  return `${marker}\n(${installNativeAddonDiagnostics.toString()})(globalThis.process, globalThis.process?.getBuiltinModule?.("node:fs"));\n${text}`;
}

export async function installNativeAddonGuard(root) {
  const path = join(root, 'source/app/out/vs/workbench/api/node/extensionHostProcess.js');
  const before = await readFile(path, 'utf8'), after = nativeAddonDiagnostics(before);
  if (before === after) return false;
  const backup = join(root, 'backups/native-addon-diagnostics', `${digest(before)}.js`);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
  return true;
}
