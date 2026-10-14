import { sharp, parse, parseFragment, serialize } from '../tooling/dependencies.mjs';
import { copyFile, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { installMacAssets } from './native-assets.mjs';
import { fileHash } from './import-files.mjs';
import { createHash } from 'node:crypto';

function ico(images) {
  const header = Buffer.alloc(6 + images.length * 16);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, index) => {
    const entry = 6 + index * 16;
    header[entry] = header[entry + 1] = size === 256 ? 0 : size;
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map(image => image.png)]);
}

function append(parent, node) { node.parentNode = parent; parent.childNodes.push(node); }
function find(node, tag) {
  if (node.tagName === tag) return node;
  for (const child of node.childNodes ?? []) { const result = find(child, tag); if (result) return result; }
}

export async function sourceAssets(options) {
  const { root, app, executable, layout } = options;
  const platform = layout?.platform ?? process.platform;
  const svg = await readFile(join(root, 'assets/openvision.svg'));
  const digest = createHash('sha256').update(svg).digest('hex');
  const marker = join(root, 'build/brand-assets.json');
  let previous;
  try { previous = JSON.parse(await readFile(marker, 'utf8')); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  const png = await sharp(svg).resize(256, 256).png().toBuffer();
  const htmlBackup = join(root, 'backups/branding/workbench.html');
  await mkdir(dirname(htmlBackup), { recursive: true });
  await copyFile(join(app, 'out/vs/code/electron-sandbox/workbench/workbench.html'), htmlBackup, 1)
    .catch(error => { if (error.code !== 'EEXIST') throw error; });
  await workbenchAssets(app, svg, png);
  if (previous?.svg_sha256 === digest) return;
  const backup = join(root, 'backups/branding', platform);
  await mkdir(backup, { recursive: true });
  if (platform === 'win32') await copyFile(executable, join(backup, 'OpenVision.exe'), 1)
    .catch(error => { if (error.code !== 'EEXIST') throw error; });
  if (platform === 'darwin') await copyFile(join(layout.bundle, 'Contents/Info.plist'), join(backup, 'Info.plist'), 1)
    .catch(error => { if (error.code !== 'EEXIST') throw error; });
  const icon = join(app, 'resources/win32/code.ico');
  if (platform === 'win32') {
    const images = await Promise.all([16, 32, 48, 64, 128, 256].map(async size => ({ size,
      png: await sharp(png).resize(size, size).png().toBuffer() })));
    await mkdir(dirname(icon), { recursive: true });
    await writeFile(icon, ico(images));
    for (const size of [70, 150]) await sharp(png).resize(size, size).toFile(join(app, `resources/win32/code_${size}x${size}.png`));
  }
  if (platform === 'win32') {
    const { rcedit } = await import('../tooling/node_modules/rcedit/lib/index.js');
    await rcedit(executable, { icon, 'version-string': {
      ProductName: 'OpenVision', FileDescription: 'OpenVision Source IDE', OriginalFilename: 'OpenVision.exe',
      InternalName: 'OpenVision', CompanyName: 'OpenVision Local' } });
  } else if (platform === 'darwin') await installMacAssets(layout, png);
  else {
    const linuxIcon = join(app, 'resources/linux/code.png');
    await mkdir(dirname(linuxIcon), { recursive: true });
    await writeFile(linuxIcon, png);
  }
  await mkdir(dirname(marker), { recursive: true });
  await writeFile(marker, JSON.stringify({ svg_sha256: digest, executable_sha256: await fileHash(executable) }, null, 2) + '\n');
}

export async function workbenchAssets(app, svg, png) {
  const htmlPath = join(app, 'out/vs/code/electron-sandbox/workbench/workbench.html');
  const directory = dirname(htmlPath);
  await writeFile(join(directory, 'openvision-logo.svg'), svg);
  await writeFile(join(directory, 'openvision-logo.png'), png);
  const before = await readFile(htmlPath, 'utf8');
  const document = parse(before);
  const head = find(document, 'head');
  const body = find(document, 'body');
  const links = head.childNodes.filter(node => node.tagName === 'link');
  for (const node of links) {
    const href = node.attrs.find(attribute => attribute.name === 'href');
    if (href?.value === './openvision-logo.png') href.value = './openvision-logo.svg';
  }
  const hasHref = value => links.some(node => node.attrs.some(attribute => attribute.name === 'href' && attribute.value === value));
  if (!hasHref('./openvision-local-profile.css'))
    append(head, parseFragment('<link rel="stylesheet" href="./openvision-local-profile.css">').childNodes[0]);
  if (!hasHref('./openvision-welcome-screen.css'))
    append(head, parseFragment('<link rel="stylesheet" href="./openvision-welcome-screen.css">').childNodes[0]);
  if (!hasHref('./openvision-workspace-memory-card.css'))
    append(head, parseFragment('<link rel="stylesheet" href="./openvision-workspace-memory-card.css">').childNodes[0]);
  if (!hasHref('./openvision-logo.svg'))
    append(head, parseFragment('<link rel="icon" href="./openvision-logo.svg">').childNodes[0]);
  if (!body.childNodes.some(node => node.tagName === 'script' &&
      node.attrs.some(attribute => attribute.name === 'src' && attribute.value === './openvision-local-profile.js')))
    append(body, parseFragment('<script type="module" src="./openvision-local-profile.js"></script>').childNodes[0]);
  const after = serialize(document);
  if (before !== after) await writeFile(htmlPath, after);
}
