import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { digest } from './import-files.mjs';

// OV-1004: an unreadable saved Agent review (cursorDiskKV inlineDiff:*) is
// skipped at startup with only a console error. The conversation still opens,
// but the restored review has no Keep/Undo controls and nothing tells the user.
// The record is still left unchanged; the skip is now reported to the profile
// recovery notice with what still works and what to do.
const marker = '/* OpenVision unreadable review guidance v1 */';
const owner = /for \(const \[, ([\w$]+)\] of ([\w$]+)\)\n(\s+)try \{\n\s+const ([\w$]+) = JSON\.parse\(\1\);\n\s+([\w$]+)\.push\(\4\);\n\s+\} catch \(([\w$]+)\) \{\n\s+console\.error\("\[inlineDiff\] Error parsing stored diff:", \6\);\n\s+\}/g;

export function reportUnreadableReviews(text) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(owner)];
  if (matches.length !== 1) throw new Error('Saved review loader missing or ambiguous');
  const [match, value, entries, indent, parsed, list, error] = matches[0], start = matches[0].index;
  const replacement = `for (const [openvisionReviewKey, ${value}] of ${entries})
${indent}try {
${indent}  const ${parsed} = JSON.parse(${value});
${indent}  ${list}.push(${parsed});
${indent}} catch (${error}) {
${indent}  console.error("[inlineDiff] Error parsing stored diff:", ${error});
${indent}  ${marker}
${indent}  (globalThis.openvisionProfileRecoveryQueue ??= []).push({ id: "unreadable-review:" + openvisionReviewKey, kind: "unreadable-review",
${indent}    store: "Agent review", title: "A saved Agent review could not be read.",
${indent}    detail: "Its record was left unchanged. The conversation still opens, but this review cannot be kept or undone from the review controls. Check the edited file with version control, or restore a profile copy (see the recovery guide, Corrupt profile).",
${indent}    path: String(openvisionReviewKey) });
${indent}}`;
  return text.slice(0, start) + replacement + text.slice(start + match.length);
}

export async function installReviewSnapshotGuidance(root) {
  for (const variant of ['desktop', 'glass']) {
    const path = join(root, `source/app/out/vs/workbench/workbench.${variant}.main.js`);
    const before = await readFile(path, 'utf8'), after = reportUnreadableReviews(before);
    if (before === after) continue;
    const backup = join(root, 'backups/review-snapshot-guidance', `${digest(before)}.js`);
    await mkdir(dirname(backup), { recursive: true });
    await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
    await writeFile(path, after);
  }
}
