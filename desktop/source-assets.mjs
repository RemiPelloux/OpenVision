import { sharp, parse, parseFragment, serialize } from '../tooling/dependencies.mjs';
import { copyFile, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { installMacAssets } from './native-assets.mjs';

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

async function logo(root) {
  const text = await readFile(join(root, 'tooling/node_modules/lucide-static/icons/eye.svg'), 'utf8');
  const svg = parseFragment(text);
  const element = svg.childNodes.find(node => node.tagName === 'svg');
  element.attrs.find(attribute => attribute.name === 'stroke').value = '#ffffff';
  const eye = await sharp(Buffer.from(serialize(svg))).resize(170, 170).png().toBuffer();
  return sharp({ create: { width: 256, height: 256, channels: 4, background: '#14764f' } })
    .composite([{ input: eye, left: 43, top: 43 }]).png().toBuffer();
}

function append(parent, node) { node.parentNode = parent; parent.childNodes.push(node); }
function find(node, tag) {
  if (node.tagName === tag) return node;
  for (const child of node.childNodes ?? []) { const result = find(child, tag); if (result) return result; }
}

export async function sourceAssets(options) {
  const { root, app, executable, layout } = options;
  const platform = layout?.platform ?? process.platform;
  const png = await logo(root);
  const icon = join(app, 'resources/win32/code.ico');
  if (platform === 'win32') {
    const images = await Promise.all([16, 32, 48, 64, 128, 256].map(async size => ({ size,
      png: await sharp(png).resize(size, size).png().toBuffer() })));
    await mkdir(dirname(icon), { recursive: true });
    await writeFile(icon, ico(images));
    for (const size of [70, 150]) await sharp(png).resize(size, size).toFile(join(app, `resources/win32/code_${size}x${size}.png`));
  }
  const htmlPath = join(app, 'out/vs/code/electron-sandbox/workbench/workbench.html');
  const directory = dirname(htmlPath);
  await writeFile(join(directory, 'openvision-logo.png'), png);
  await copyFile(join(root, 'desktop/local-profile.js'), join(directory, 'openvision-local-profile.js'));
  await copyFile(join(root, 'desktop/local-profile.css'), join(directory, 'openvision-local-profile.css'));
  const document = parse(await readFile(htmlPath, 'utf8'));
  const head = find(document, 'head');
  for (const node of parseFragment('<link rel="stylesheet" href="./openvision-local-profile.css"><link rel="icon" href="./openvision-logo.png">').childNodes)
    append(head, node);
  append(find(document, 'body'), parseFragment('<script type="module" src="./openvision-local-profile.js"></script>').childNodes[0]);
  await writeFile(htmlPath, serialize(document));
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
}
