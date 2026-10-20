// OV-704 image-input defects in the composer, fixed at their owners:
// - An unreadable image chosen in the file picker was silently dropped: the
//   picker's Image.onerror only revoked the object URL. Paste and drop already
//   report "Failed to add image. The image format is not supported."; the picker
//   now gives the same message on the same notification service.
// - Paste and drop write the image into workspace storage before decoding it, and
//   left an unreadable file there after rejecting it. Delete that file on failure.
// Drift-guarded and idempotent for both workbench variants.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision picker image failure explained v1 */';
export const imageFailureMessage = 'Failed to add image. The image format is not supported.';

export function explainPickerImageFailure(text) {
  if (text.includes(marker)) return text;
  if (!text.includes(JSON.stringify(imageFailureMessage))) throw new Error('Paste/drop image failure message changed');
  const pickers = [...text.matchAll(/([\w$]+)\.analyticsService\.trackEvent\("composer\.image_picker\.clicked"\);/g)];
  if (pickers.length !== 1) throw new Error('Composer image picker owner missing or ambiguous');
  const [picker, services] = pickers[0];
  const window = text.slice(pickers[0].index, pickers[0].index + 2000);
  const failures = [...window.matchAll(/\(([\w$]+)\.onerror = \(\) => \{\s*URL\.revokeObjectURL\(([\w$]+)\);\s*\}\)/g)];
  if (failures.length !== 1 || !window.includes('.onImageUpload(')) throw new Error('Composer image picker failure handler changed');
  const [failure, image, url] = failures[0];
  const at = pickers[0].index + failures[0].index;
  const replacement = `(${image}.onerror = () => { ${marker}
                            URL.revokeObjectURL(${url});
                            ${services}.notificationService?.error(${JSON.stringify(imageFailureMessage)});
                          })`;
  return text.slice(0, at) + replacement + text.slice(at + failure.length);
}

const cleanupMarker = '/* OpenVision rejected image file removed v1 */';
export function removeRejectedImageFile(text) {
  if (text.includes(cleanupMarker)) return text;
  const owners = [...text.matchAll(/const ([\w$]+) = ([\w$]+)\.workspaceContextService\.getWorkspace\(\)\.id,\s*([\w$]+) = [\w$]+\(\2\.environmentService\.workspaceStorageHome, \1, "images", [\w$]+\);\s*await \2\.fileService\.writeFile\(\3, [\w$]+\.buffer\);/g)];
  if (owners.length !== 1) throw new Error('Composer image storage owner missing or ambiguous');
  const [owner, , services, file] = owners[0];
  const window = text.slice(owners[0].index, owners[0].index + 1500);
  const failures = [...window.matchAll(/\(([\w$]+)\.onerror = \(([\w$]+)\) => \{\s*\(console\.error\("\[imageUtils\] Error loading image", \2\), ([\w$]+)\(\2\)\);\s*\}\)/g)];
  if (failures.length !== 1) throw new Error('Composer image load failure handler changed');
  const [failure, image, error, reject] = failures[0];
  const at = owners[0].index + failures[0].index;
  const replacement = `(${image}.onerror = (${error}) => { ${cleanupMarker}
            ${services}.fileService.del(${file}).catch(() => {});
            (console.error("[imageUtils] Error loading image", ${error}), ${reject}(${error}));
          })`;
  return text.slice(0, at) + replacement + text.slice(at + failure.length);
}

export async function installImageInputExplanations(root) {
  for (const variant of ['desktop', 'glass']) {
    const relative = `source/app/out/vs/workbench/workbench.${variant}.main.js`;
    const before = await readFile(join(root, relative), 'utf8');
    const after = removeRejectedImageFile(explainPickerImageFailure(before));
    if (before === after) continue;
    const backup = join(root, 'backups/image-input', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(join(root, relative), backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(join(root, relative), after);
  }
  console.log('Image input: unreadable picked images are reported; rejected pasted or dropped files are removed');
}
