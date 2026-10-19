// Builds a one-entry ZIP for scanner self-tests and unit tests. `data` is
// already in the entry's form: raw bytes for method 0, raw deflate for method 8.
export function storedZip(name, data, method) {
  const nameBytes = Buffer.from(name);
  const local = Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50, 0); local.writeUInt16LE(20, 4); local.writeUInt16LE(method, 8);
  local.writeUInt32LE(data.length, 18); local.writeUInt16LE(nameBytes.length, 26);
  const central = Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50, 0); central.writeUInt16LE(20, 4); central.writeUInt16LE(20, 6);
  central.writeUInt16LE(method, 10); central.writeUInt32LE(data.length, 20); central.writeUInt16LE(nameBytes.length, 28);
  central.writeUInt32LE(0, 42);
  const centralOffset = local.length + nameBytes.length + data.length;
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0); end.writeUInt16LE(1, 8); end.writeUInt16LE(1, 10);
  end.writeUInt32LE(central.length + nameBytes.length, 12); end.writeUInt32LE(centralOffset, 16);
  return Buffer.concat([local, nameBytes, data, central, nameBytes, end]);
}
