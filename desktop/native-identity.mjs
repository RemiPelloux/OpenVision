import { open } from 'node:fs/promises';

const architectures = new Map([[0x01000007, 'x64'], [0x0100000c, 'arm64']]);
function macho(header, littleEndian) {
  const cpu = littleEndian ? header.readUInt32LE(4) : header.readUInt32BE(4);
  return { platform: 'darwin', architectures: [architectures.get(cpu)].filter(Boolean) };
}

export function parseNativeHeader(header) {
  if (header.length < 32) throw new Error('Native executable header is truncated.');
  if (header.subarray(0, 4).equals(Buffer.from([0x7f, 0x45, 0x4c, 0x46]))) {
    if (header[4] !== 2 || ![1, 2].includes(header[5])) throw new Error('Unsupported ELF class or byte order.');
    const machine = header[5] === 1 ? header.readUInt16LE(18) : header.readUInt16BE(18);
    return { platform: 'linux', architectures: [{ 62: 'x64', 183: 'arm64' }[machine]].filter(Boolean) };
  }
  const magic = header.readUInt32BE(0);
  if ([0xcffaedfe, 0xcefaedfe].includes(magic)) return macho(header, true);
  if ([0xfeedfacf, 0xfeedface].includes(magic)) return macho(header, false);
  if ([0xcafebabe, 0xbebafeca, 0xcafebabf, 0xbfbafeca].includes(magic)) {
    const littleEndian = [0xbebafeca, 0xbfbafeca].includes(magic);
    const word = offset => littleEndian ? header.readUInt32LE(offset) : header.readUInt32BE(offset);
    const stride = [0xcafebabf, 0xbfbafeca].includes(magic) ? 32 : 20;
    const count = word(4);
    if (count > Math.floor((header.length - 8) / stride)) throw new Error('Universal executable header is truncated.');
    return { platform: 'darwin', architectures: [...new Set(Array.from({ length: count }, (_, index) => architectures.get(word(8 + index * stride))).filter(Boolean))] };
  }
  if (header.toString('ascii', 0, 2) === 'MZ' && header.length >= 64) {
    const offset = header.readUInt32LE(60);
    if (offset + 6 > header.length || header.toString('ascii', offset, offset + 4) !== 'PE\0\0') throw new Error('PE header is truncated or invalid.');
    return { platform: 'win32', architectures: [{ 0x8664: 'x64', 0xaa64: 'arm64' }[header.readUInt16LE(offset + 4)]].filter(Boolean) };
  }
  throw new Error('Unrecognized native executable format.');
}

export async function nativeIdentity(path) {
  const file = await open(path, 'r');
  try {
    const header = Buffer.alloc(65536);
    const { bytesRead } = await file.read(header, 0, header.length, 0);
    return parseNativeHeader(header.subarray(0, bytesRead));
  } finally { await file.close(); }
}

export function assertNativeHost(identity, context = process) {
  if (identity.platform !== context.platform || !identity.architectures.includes(context.arch))
    throw new Error(`Native runtime is ${identity.platform}/${identity.architectures.join(',') || 'unknown'}, but this machine is ${context.platform}/${context.arch}. Prepare Cursor files for this machine.`);
}
