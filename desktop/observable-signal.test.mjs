import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, mkdir, writeFile, rm } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { tmpdir } from 'node:os';
import { runInNewContext } from 'node:vm';
import { readableApp } from './recovered-source.mjs';
import { installObservableSignals, observableSignalEntry, primeObservableSignals } from './observable-signal-customization.mjs';

const original = await readFile(new URL(observableSignalEntry, readableApp), 'utf8');
const patched = primeObservableSignals(original);
const source = (text, name) => { const start = text.indexOf(`\nfunction ${name}(e) {\n`) + 1; return text.slice(start, text.indexOf('\n}\n', start) + 2); };

// The recovered event-backed observable (JEe) gates notification on a cached
// value: a get() while unsubscribed caches nothing, and the first event after
// subscription stores its value without notifying. Mirrored here verbatim in
// behavior; SolidJS is reduced to a signal, an immediate effect and cleanup.
function eventObservable(read) {
  const listeners = new Set(), observers = new Set();
  const observable = {
    hasValue: false, value: undefined, subscribed: false,
    handleEvent() {
      const next = read(), had = observable.hasValue, changed = !had || observable.value !== next;
      if (!changed) return;
      observable.value = next; observable.hasValue = true;
      if (had) for (const observer of observers) { observer.beginUpdate(); observer.handleChange(); observer.endUpdate(); }
    },
    get() { return observable.subscribed ? (observable.hasValue || observable.handleEvent(), observable.value) : read(); },
    set() {},
    addObserver(observer) { if (!observers.size) { observable.subscribed = true; listeners.add(observable.handleEvent); } observers.add(observer); },
    removeObserver(observer) { observers.delete(observer); },
    fire() { for (const listener of listeners) listener(); },
  };
  return observable;
}
function bridge(text, name) {
  const solid = {
    Dye: () => true,
    Lt(value) { let current = value; return [() => current, next => { current = next; }]; },
    Yt: effect => effect(), wn() {},
  };
  return runInNewContext(`(${source(text, name)})`, solid);
}

test('recovered bridges lose the first change after mounting; primed bridges observe it', () => {
  for (const name of ['Tge', 'Eke']) {
    for (const [text, sees] of [[original, false], [patched, true]]) {
      let descriptors = ['pending review'];
      const observable = eventObservable(() => descriptors);
      const [signal] = bridge(text, name)(observable);
      assert.deepEqual(signal(), ['pending review']);
      descriptors = []; observable.fire(); // Undo then Confirm removes the review
      assert.deepEqual(signal(), sees ? [] : ['pending review'], `${name} ${sees ? 'patched' : 'recovered'}`);
      descriptors = ['next review']; observable.fire();
      assert.deepEqual(signal(), ['next review'], 'Later changes reach both versions');
    }
  }
});

test('a change between seeding and subscription is copied into the signal', () => {
  let descriptors = ['a'];
  const observable = eventObservable(() => descriptors);
  const addObserver = observable.addObserver;
  observable.addObserver = observer => { descriptors = ['b']; addObserver(observer); };
  const [signal] = bridge(patched, 'Tge')(observable);
  assert.deepEqual(signal(), ['b']);
});

test('transform is idempotent, fails closed on drift and the installer keeps the first backup', async () => {
  assert.equal(primeObservableSignals(patched), patched);
  assert.equal(patched.split('/* OpenVision primed observable signal v1 */').length, 3);
  for (const changed of [original.replace('e.addObserver(i), wn(() => e.removeObserver(i)));', 'e.addObserver(i);'),
    original.replace('\nfunction Eke(e) {\n', '\nfunction Eke2(e) {\n')])
    assert.throws(() => primeObservableSignals(changed), /Observable signal bridge/);
  const directory = await mkdtemp(join(tmpdir(), 'openvision-observable-signal-'));
  try {
    const path = join(directory, 'source/app', observableSignalEntry);
    await mkdir(dirname(path), { recursive: true }); await writeFile(path, original);
    await installObservableSignals(directory); await installObservableSignals(directory);
    assert.equal(await readFile(path, 'utf8'), patched);
    assert.equal(await readFile(join(directory, 'backups/observable-signal', observableSignalEntry), 'utf8'), original);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
