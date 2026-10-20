import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { explainPickerImageFailure, imageFailureMessage, removeRejectedImageFile } from './image-input-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Shape of the recovered composer picker (3.21.13 desktop variant).
const fixture = `
const pasteFailure = "Failed to add image. The image format is not supported.";
function picker(t, e, file, URL) {
                t.analyticsService.trackEvent("composer.image_picker.clicked");
                const Ve = {},
                  ze = URL.createObjectURL(file);
                ((Ve.onload = () => {
                  (URL.revokeObjectURL(ze), e.onImageUpload(Ve, file));
                }),
                  (Ve.onerror = () => {
                    URL.revokeObjectURL(ze);
                  }),
                  (Ve.src = ze));
                return Ve;
}
return picker;`;

function run(text, outcome) {
  const notices = [], uploads = [], revoked = [];
  const services = { analyticsService: { trackEvent() {} }, notificationService: { error: message => notices.push(message) } };
  const url = { createObjectURL: () => 'blob:1', revokeObjectURL: value => revoked.push(value) };
  const image = new Function(text)()(services, { onImageUpload: (_image, file) => uploads.push(file) }, 'file.png', url);
  image[outcome]();
  return { notices, uploads, revoked };
}

test('an unreadable picked image is reported; a readable one is unchanged', () => {
  const patched = explainPickerImageFailure(fixture);
  assert.equal(explainPickerImageFailure(patched), patched, 'idempotent');
  assert.deepEqual(run(fixture, 'onerror'), { notices: [], uploads: [], revoked: ['blob:1'] }, 'the original was silent');
  assert.deepEqual(run(patched, 'onerror'), { notices: [imageFailureMessage], uploads: [], revoked: ['blob:1'] });
  assert.deepEqual(run(patched, 'onload'), { notices: [], uploads: ['file.png'], revoked: ['blob:1'] });
});

test('picker failure explanation refuses a changed owner', () => {
  assert.throws(() => explainPickerImageFailure(fixture.replace('composer.image_picker.clicked', 'other')), /picker owner/);
  assert.throws(() => explainPickerImageFailure(fixture.replace('URL.revokeObjectURL(ze);\n', 'void 0;\n')), /failure handler changed/);
  assert.throws(() => explainPickerImageFailure(fixture.replace('const pasteFailure = "Failed to add image. The image format is not supported.";', '')), /message changed/);
});

// Shape of the recovered paste/drop storage path (3.21.13 desktop variant).
const storage = `
return async function store(t, s, a, Tr, Image) {
    const l = t.workspaceContextService.getWorkspace().id,
      u = Tr(t.environmentService.workspaceStorageHome, l, "images", a);
    await t.fileService.writeFile(u, s.buffer);
    const h = new Image();
    await new Promise((m, g) => {
        ((h.onload = () => {
            m();
        }),
          (h.onerror = (f) => {
            (console.error("[imageUtils] Error loading image", f), g(f));
          }));
      h.decode();
    });
    return u;
};`;
async function store(text, readable) {
  const files = new Set();
  const services = { workspaceContextService: { getWorkspace: () => ({ id: 'w' }) }, environmentService: { workspaceStorageHome: '/ws' },
    fileService: { writeFile: async path => files.add(path), del: async path => { files.delete(path); } } };
  class FakeImage { decode() { setTimeout(() => readable ? this.onload() : this.onerror(new Error('decode')), 1); } }
  const error = console.error; console.error = () => {};
  try { await new Function(text)()(services, { buffer: Buffer.alloc(1) }, 'x.png', (...parts) => parts.join('/'), FakeImage); }
  catch (failure) { await new Promise(resolve => setTimeout(resolve, 5)); return { rejected: failure.message, files: [...files] }; }
  finally { console.error = error; }
  return { files: [...files] };
}

test('a rejected pasted or dropped image does not stay in workspace storage', async () => {
  const patched = removeRejectedImageFile(storage);
  assert.equal(removeRejectedImageFile(patched), patched, 'idempotent');
  assert.deepEqual(await store(storage, false), { rejected: 'decode', files: ['/ws/w/images/x.png'] }, 'the original kept the file');
  assert.deepEqual(await store(patched, false), { rejected: 'decode', files: [] });
  assert.deepEqual(await store(patched, true), { files: ['/ws/w/images/x.png'] }, 'readable images are kept');
  assert.throws(() => removeRejectedImageFile(storage.replace('"[imageUtils] Error loading image"', '"other"')), /failure handler changed/);
  assert.throws(() => removeRejectedImageFile(storage.replace('"images"', '"pictures"')), /storage owner/);
});

for (const variant of ['desktop', 'glass']) {
  const path = join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`);
  test(`built ${variant} workbench reports picker image failures once`, { skip: !existsSync(path) }, async () => {
    const text = removeRejectedImageFile(explainPickerImageFailure(await readFile(path, 'utf8')));
    assert.equal(text.split('OpenVision picker image failure explained v1').length, 2);
    assert.equal(text.split('OpenVision rejected image file removed v1').length, 2);
  });
}
