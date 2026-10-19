import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { agentReviewEntry } from './agent-review-customization.mjs';

// The Agent review bars read the diff registry's descriptors through the
// workbench's observable-to-SolidJS bridge, which seeds its signal with a read
// and only then subscribes. The registry's event-backed observable caches
// nothing for a read without subscribers, and after the first subscription its
// first event stores the new value without notifying anyone (it had no previous
// value). The first review change after a bar mounts was therefore lost: after
// a restart (or in a single-file review) Undo then Confirm restored the bytes and
// removed the review, yet the bar kept offering Undo/Keep until a later change.
// The registry now keeps its own observer on the descriptors and reads them
// once, so every registry change notifies the bars. Other observables keep the
// recovered bridge behavior; a global bridge change made another consumer
// resend a chat turn after storage recovered (see the agent editing report).
export const reviewDescriptorsMarker = '/* OpenVision observed review descriptors v1 */';
export const reviewDescriptorsEntry = agentReviewEntry;

const anchor = `(this.descriptorsObservable = Lp(this, this._onDidChange.event, () =>
                this.getDescriptors(),
              )));`;
export const keeper = `
            ${reviewDescriptorsMarker}
            const openvisionDescriptorsObserver = {
              beginUpdate() {}, endUpdate() {}, handlePossibleChange() {}, handleChange() {},
            };
            this.descriptorsObservable.addObserver(openvisionDescriptorsObserver);
            this._register({ dispose: () => this.descriptorsObservable.removeObserver(openvisionDescriptorsObserver) });
            this.descriptorsObservable.get();`;

export function observeReviewDescriptors(text) {
  if (text.includes(reviewDescriptorsMarker)) {
    if (text.split(reviewDescriptorsMarker).length !== 2) throw new Error('Review descriptors marker is ambiguous');
    return text;
  }
  const index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + 1) >= 0) throw new Error('Review descriptor registry contract changed');
  const constructor = text.lastIndexOf('constructor(e, t) {', index), owner = text.slice(constructor, index + anchor.length + 400);
  if (index - constructor > 400 || !owner.includes('(this._sources = new Map()),') ||
      !owner.includes('i = this.registerSource(n);') || !text.includes('function Tge(e) {'))
    throw new Error('Review descriptor registry contract changed');
  return text.slice(0, index + anchor.length) + keeper + text.slice(index + anchor.length);
}

export async function installReviewDescriptors(root) {
  const path = join(root, 'source/app', reviewDescriptorsEntry);
  const before = await readFile(path, 'utf8'), after = observeReviewDescriptors(before);
  if (before === after) return;
  const backup = join(root, 'backups/review-descriptors', reviewDescriptorsEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
