import { cp, mkdir, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const files = ['extension.js', 'kernel_bridge.py', 'package.json'];

export async function installJupyterExtension(root) {
  const source = join(root, 'desktop/jupyter-extension');
  const target = join(root, 'source/app/extensions/openvision-jupyter');
  await mkdir(target, { recursive: true });
  for (const file of files) await cp(join(source, file), join(target, file), { force: true });
  return { target, files: (await readdir(target)).filter(file => files.includes(file)) };
}
