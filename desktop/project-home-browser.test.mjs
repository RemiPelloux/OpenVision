import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { chromium } from '../tooling/browser.mjs';

test('10,000-project UI bounds DOM, filters without requests and releases pending work on disposal', async t => {
  const browser = await chromium.launch({ channel: process.env.OPENVISION_BROWSER_CHANNEL || 'msedge', headless: true });
  t.after(() => browser.close());
  const page = await browser.newPage();
  await page.setContent('<main></main>');
  const source = await readFile(new URL('./project-home-list.js', import.meta.url), 'utf8');
  await page.addScriptTag({ type: 'module', content: source + '\nwindow.createProjectList = createProjectList;' });
  const facts = await page.evaluate(async () => {
    const rows = Array.from({ length: 10000 }, (_, i) => ({ id: String(i), name: `Project ${i}`, path: `/projects/${i}`,
      search: `project ${i}\n/projects/${i}`, kind: 'Folder', pinned: i === 9999, entry: {} }));
    let requests = 0, disposed = 0, pending, onChange;
    const service = { load: async () => { requests++; return pending ? pending.promise : rows; },
      onChange: callback => { onChange = callback; return { dispose() { disposed++; } }; } };
    const widget = window.createProjectList(service, () => {});
    document.querySelector('main').append(widget.root); await widget.ready;
    const initialCount = document.querySelectorAll('.ov-project-row').length;
    const input = document.querySelector('input');
    const start = performance.now(); input.value = 'Project 9999'; input.dispatchEvent(new Event('input'));
    const searchMs = performance.now() - start;
    const filteredCount = document.querySelectorAll('.ov-project-row').length;
    const filteredName = document.querySelector('.ov-project-label strong').textContent;
    const afterSearchRequests = requests;
    pending = Promise.withResolvers(); onChange(); onChange(); onChange();
    const duringPendingRequests = requests;
    widget.dispose(); pending.resolve(rows); await new Promise(resolve => setTimeout(resolve, 0));
    window.dispatchEvent(new Event('focus'));
    return { initialCount, searchMs, filteredCount, filteredName, afterSearchRequests, duringPendingRequests,
      afterDisposeRequests: requests, disposed, retainedRows: widget.root.childElementCount };
  });
  assert.equal(facts.initialCount, 18); assert.equal(facts.filteredCount, 1); assert.equal(facts.filteredName, 'Project 9999');
  assert.equal(facts.afterSearchRequests, 1); assert.equal(facts.duringPendingRequests, 2);
  assert.equal(facts.afterDisposeRequests, 2); assert.equal(facts.disposed, 1); assert.equal(facts.retainedRows, 0);
  console.log(JSON.stringify({ scope: 'Headless Edge synthetic list; not native startup or product comparison', ...facts }));
});
