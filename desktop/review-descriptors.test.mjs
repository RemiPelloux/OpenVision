import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { installReviewDescriptors, keeper, observeReviewDescriptors, reviewDescriptorsEntry } from './review-descriptors-customization.mjs';

const original = await readFile(new URL(reviewDescriptorsEntry, readableApp), 'utf8');
const patched = observeReviewDescriptors(original);

// The recovered event-backed observable (JEe) gates notification on a cached
// value; mirrored here in behavior. The recovered bridge (Tge) is executed with
// SolidJS reduced to a signal, an immediate effect and cleanup.
function eventObservable(read) {
  const listeners = new Set(), observers = new Set();
  const observable = {
    hasValue: false, value: undefined,
    handleEvent() {
      const next = read(), had = observable.hasValue;
      if (had && observable.value === next) return;
      observable.value = next; observable.hasValue = true;
      if (had) for (const observer of observers) { observer.beginUpdate(); observer.handleChange(); observer.endUpdate(); }
    },
    get() { return listeners.size ? (observable.hasValue || observable.handleEvent(), observable.value) : read(); },
    addObserver(observer) { if (!observers.size) listeners.add(observable.handleEvent); observers.add(observer); },
    removeObserver(observer) { observers.delete(observer); if (!observers.size) { listeners.clear(); observable.hasValue = false; } },
    fire() { for (const listener of listeners) listener(); },
  };
  return observable;
}
const start = original.indexOf('\nfunction Tge(e) {\n') + 1;
const bridge = runInNewContext(`(${original.slice(start, original.indexOf('\n}\n', start) + 2)})`, {
  Dye: () => true, Lt(value) { let current = value; return [() => current, next => { current = next; }]; }, Yt: effect => effect(), wn() {} });

function registry(withKeeper) {
  let descriptors = ['pending review'];
  const owner = { descriptorsObservable: eventObservable(() => descriptors), disposables: [], _register(value) { this.disposables.push(value); } };
  if (withKeeper) new Function(keeper).call(owner);
  return { owner, set(value) { descriptors = value; owner.descriptorsObservable.fire(); } };
}

test('recovered registry loses the first change after a bar mounts; the observed registry delivers it', () => {
  for (const [withKeeper, sees] of [[false, false], [true, true]]) {
    const { owner, set } = registry(withKeeper);
    const [bar] = bridge(owner.descriptorsObservable);
    assert.deepEqual(bar(), ['pending review']);
    set([]); // Undo then Confirm removed the review
    assert.deepEqual(bar(), sees ? [] : ['pending review']);
    set(['next review']);
    assert.deepEqual(bar(), ['next review'], 'Later changes reach both');
  }
});

test('a bar mounted after earlier changes and a second bar both stay current', () => {
  const { owner, set } = registry(true);
  set(['a']);
  const [first] = bridge(owner.descriptorsObservable), [second] = bridge(owner.descriptorsObservable);
  set([]);
  assert.deepEqual(first(), []); assert.deepEqual(second(), []);
  owner.disposables.forEach(disposable => disposable.dispose());
});

test('transform is idempotent, fails closed on drift and the installer keeps the first backup', async () => {
  assert.equal(observeReviewDescriptors(patched), patched);
  assert.throws(() => observeReviewDescriptors(original.replace('this.getDescriptors(),\n              )));', 'this.getDescriptors()));')), /contract changed/);
  assert.throws(() => observeReviewDescriptors(original.replace('i = this.registerSource(n);', 'i = this.addSource(n);')), /contract changed/);
  const directory = await mkdtemp(join(tmpdir(), 'openvision-review-descriptors-'));
  try {
    const path = join(directory, 'source/app', reviewDescriptorsEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installReviewDescriptors(directory); await installReviewDescriptors(directory);
    assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(directory, 'backups/review-descriptors', reviewDescriptorsEntry), 'utf8'), original);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
