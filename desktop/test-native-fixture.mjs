export function executableHeader(platform = process.platform, arch = process.arch) {
  const data = Buffer.alloc(512);
  if (platform === 'win32') {
    data.write('MZ'); data.writeUInt32LE(128, 60); data.write('PE\0\0', 128); data.writeUInt16LE(arch === 'arm64' ? 0xaa64 : 0x8664, 132);
  } else if (platform === 'linux') {
    data.set([0x7f, 0x45, 0x4c, 0x46, 2, 1, 1]); data.writeUInt16LE(arch === 'arm64' ? 183 : 62, 18);
  } else {
    data.writeUInt32LE(0xfeedfacf); data.writeUInt32LE(arch === 'arm64' ? 0x0100000c : 0x01000007, 4);
  }
  return data;
}
