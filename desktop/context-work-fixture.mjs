import { readFile } from 'node:fs/promises';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { customizeContext } from './context-customization.mjs';
import { customizeContextWork } from './context-work-customization.mjs';
import work from './context-work.cjs';

export async function contextSource() {
  for (const directory of ['backups/request-context', 'build/recovery/readable/app', '../cursor/readable/app']) {
    try {
      const source = await readFile(new URL(`../${directory}/extensions/cursor-agent-exec/dist/main.js`, import.meta.url), 'utf8');
      if (!source.includes('OpenVision bounded workspace context')) return customizeContext(source);
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

export const trace = { withName() { return this; }, spanContext() { return { traceId: 'fixture' }; } };

export function contextClass(source, reads, optimized = true) {
  const text = optimized ? customizeContextWork(source) : source;
  const node = parseExpressionAt(text, text.indexOf('class Nc {'), { ecmaVersion: 'latest' });
  const names = ['ye', 'C', 'wc', 'bc', 'pc', 'vc', 'Sc', 'kc', 'Be', 'De', 'openvisionContextWork'];
  return new Function(...names, `return (${text.slice(node.start, node.end)});`)(
    { q6: () => trace }, { VI: () => ({ ctx: trace, span: trace }) }, (_scope, value) => value,
    scope => { if (scope.hasError) throw scope.error; }, { DS: class { constructor(data) { Object.assign(this, data); } } },
    { a8: remote => !!remote }, reads.status, reads.branch, async () => 'remote', value => value, work);
}

export function createContext(Context, paths, options = {}) {
  return new Context({}, null, null, {}, {}, {}, {}, paths, options);
}
