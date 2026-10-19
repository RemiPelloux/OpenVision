import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { agentReviewEntry } from './agent-review-customization.mjs';

// The workbench bridges VS Code observables into SolidJS signals (Tge, and the
// two-way Eke). Each reads the observable once to seed the signal and only then
// subscribes. An event-backed observable that is read while unsubscribed caches
// nothing; after subscription its first event stores the new value but notifies
// no observer (it had no previous value). The first change after a component
// mounts is therefore lost until some later change. The Agent review bar is one
// consumer: after a restart (or in a single-file review) Undo then Confirm
// restored the bytes and removed the review, yet the bar kept offering
// Undo/Keep. After subscribing, both bridges now read the observable, which
// primes it, and copy any value that changed in between.
export const observableSignalMarker = '/* OpenVision primed observable signal v1 */';
export const observableSignalEntry = agentReviewEntry;

const subscribe = 'e.addObserver(i), wn(() => e.removeObserver(i)));';
const subscribeTwoWay = 'e.addObserver(r), wn(() => e.removeObserver(r)));';
const bridges = [
  { name: 'Tge', subscribe, primed: `e.addObserver(i), wn(() => e.removeObserver(i)));
      ${observableSignalMarker}
      const openvisionPrimed = e.get();
      t() !== openvisionPrimed && n(openvisionPrimed);` },
  { name: 'Eke', subscribe: subscribeTwoWay, primed: `e.addObserver(r), wn(() => e.removeObserver(r)));
      ${observableSignalMarker}
      const openvisionPrimed = e.get();
      t() !== openvisionPrimed && n(openvisionPrimed);` },
];

function bridge(text, name) {
  const start = text.indexOf(`\nfunction ${name}(e) {\n`);
  if (start < 0 || text.indexOf(`\nfunction ${name}(e) {\n`, start + 1) >= 0) throw new Error(`Observable signal bridge missing: ${name}`);
  const end = text.indexOf('\n}\n', start) + 2;
  return { start: start + 1, end, source: text.slice(start + 1, end) };
}

export function primeObservableSignals(text) {
  if (text.includes(observableSignalMarker)) {
    if (text.split(observableSignalMarker).length !== bridges.length + 1) throw new Error('Observable signal marker is ambiguous');
    return text;
  }
  const edits = bridges.map(({ name, subscribe: anchor, primed }) => {
    const found = bridge(text, name);
    if (found.source.split(anchor).length !== 2 || found.source.split('Lt(e.get())').length !== 2 ||
        !found.source.includes('createSignalFromObservable called outside of reactive scope') ||
        !found.source.includes('t() !== ') || !found.source.includes('endUpdate() {'))
      throw new Error(`Observable signal bridge contract changed: ${name}`);
    return { ...found, source: found.source.replace(anchor, primed) };
  });
  for (const edit of edits.sort((left, right) => right.start - left.start))
    text = text.slice(0, edit.start) + edit.source + text.slice(edit.end);
  return text;
}

export async function installObservableSignals(root) {
  const path = join(root, 'source/app', observableSignalEntry);
  const before = await readFile(path, 'utf8'), after = primeObservableSignals(before);
  if (before === after) return;
  const backup = join(root, 'backups/observable-signal', observableSignalEntry);
  await mkdir(dirname(backup), { recursive: true });
  await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
  await writeFile(path, after);
}
