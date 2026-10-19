'use strict';
// Test harness: runs the recovered or patched disk-provider writer against real
// files, normally under `prlimit --fsize`, and prints the outcome as JSON.
// argv: <method source file> <target> <new size> <previous size or -1>
const fs = require('node:fs');
const { promisify } = require('node:util');
const [source, target, size, previous] = process.argv.slice(2);
const te = { exists: path => fs.promises.access(path).then(() => true, () => false), ftruncate: promisify(fs.ftruncate) };
const Ga = fs.promises, X = false, Xt = {}, hs = message => new Error(message), w = () => 'exists';
class Provider {
  toFilePath(resource) { return resource; }
  async open(resource) { return promisify(fs.open)(resource, 'w'); }
  // Recovered write(): one fs.write per call; a short count is returned, not raised.
  async write(fd, position, data, offset, length) {
    return new Promise((resolve, reject) => fs.write(fd, data, offset, length, position, (error, written) => error ? reject(error) : resolve(written)));
  }
  async close(fd) { await promisify(fs.close)(fd); }
  async toFileSystemProviderWriteError(resource, error) { return error; }
}
const Writer = new Function('Provider', 'te', 'Ga', 'X', 'Xt', 'hs', 'w', `return class extends Provider { ${fs.readFileSync(source, 'utf8')} };`)(Provider, te, Ga, X, Xt, hs, w);
process.on('SIGXFSZ', () => {});
(async () => {
  if (Number(previous) >= 0) fs.writeFileSync(target, Buffer.alloc(Number(previous), 'p'));
  let error;
  try { await new Writer().doWriteFile(target, Buffer.alloc(Number(size), 'n'), { create: true, overwrite: true }); }
  catch (caught) { error = caught.code ?? caught.message; }
  let bytes; try { bytes = fs.readFileSync(target); } catch {}
  process.stdout.write(JSON.stringify({ error: error ?? null, exists: !!bytes, size: bytes?.length,
    previous: !!bytes && Number(previous) >= 0 && bytes.equals(Buffer.alloc(Number(previous), 'p')),
    complete: !!bytes && bytes.equals(Buffer.alloc(Number(size), 'n')) }));
})();
