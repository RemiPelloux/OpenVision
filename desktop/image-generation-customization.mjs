// OV-704 owner decision (20 October 2026): image generation is hidden for this
// release. The local Agent runtimes registered a GenerateImage tool whenever
// `enableGenerateImage` was on (its default follows the web-tools setting), and the
// tool calls the configured provider's /images/generations endpoint. Gate both
// registration sites in every bundled Agent runtime so the tool is never offered.
// A model may still call GenerateImage (old history, or it guesses the name); that
// call, like any call to a tool that was not offered, is answered as a tool error by
// agent-tool-call-customization.mjs, which keeps the GenerateImage-specific reason.
// Drift-guarded (each site is pinned by its image-generation limiter) and idempotent.
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const marker = '/* OpenVision image generation hidden v1 */';
export const imageGenerationTargets = ['extensions/cursor-agent-exec/dist/main.js',
  'extensions/cursor-local-agent-runtime/dist/main.js', 'extensions/cursor-agent-host/dist/main.js'];

export function hideGenerateImageTool(text) {
  if (text.includes(marker)) {
    if (text.split(marker).length !== 3) throw new Error('Image generation gate changed');
    return text;
  }
  const sites = [...text.matchAll(/([\w$]+)\.enableGenerateImage((?: && ![\w$]+)?)\)(\s*\)\s*\{\s*const [\w$]+ = \1\.imageGenerationConcurrencyLimiter)/g)];
  if (sites.length !== 2) throw new Error('GenerateImage registration owner missing or ambiguous');
  for (const site of sites.reverse()) {
    const [match, owner, rest, tail] = site;
    text = text.slice(0, site.index) + `(${marker} !1 && ${owner}.enableGenerateImage${rest}))${tail}` +
      text.slice(site.index + match.length);
  }
  return text;
}

export async function installImageGenerationHidden(root) {
  for (const relative of imageGenerationTargets) {
    const path = join(root, 'source/app', relative);
    const before = await readFile(path, 'utf8');
    const after = hideGenerateImageTool(before);
    if (before === after) continue;
    const backup = join(root, 'backups/image-generation', relative);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
  console.log(`Image generation: GenerateImage hidden from ${imageGenerationTargets.length} Agent runtimes`);
}
