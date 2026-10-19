import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { workspaceRuleEvents } from './workspace-rule-events.mjs';

const marker = '/* OpenVision local user rules v4 */';
const helperImport = 'import {LocalRules as OpenvisionLocalRules} from "../code/electron-sandbox/workbench/openvision-local-rules.js";';
const symbols = {
  desktop: { owner: 'w$i', base: 'Se', emitter: 'me', store: 'tg', signal: 'Lt', disposable: 'en',
    items: 'g7t', loading: 'SDn', storage: 'Cn', storageInit: '$n', ai: 'Ah', log: 'Bn' },
  glass: { owner: 'RWr', base: 'ot', emitter: 'Xe', store: 'Wh', signal: 'Bt', disposable: '$n',
    items: 'bkn', loading: 'hvi', storage: 'vi', storageInit: 'Yi', ai: 'xl', log: 'Ai' },
};

function localClass(s) {
  return `class extends ${s.base} {
    constructor(storage, aiService, logService) {
      super();
      this.aiService = aiService;
      this.logService = logService;
      this.jotaiStore = ${s.store}();
      this._onDidChangeItems = this._register(new ${s.emitter}());
      this.onDidChangeItems = this._onDidChangeItems.event;
      const [items, setItems] = ${s.signal}(this.jotaiStore.get(${s.items}));
      this.itemsSignal = items;
      this._register(${s.disposable}(this.jotaiStore.sub(${s.items}, () => setItems(this.jotaiStore.get(${s.items})))));
      const [loading, setLoading] = ${s.signal}(this.jotaiStore.get(${s.loading}));
      this.isLoadingSignal = loading;
      this._register(${s.disposable}(this.jotaiStore.sub(${s.loading}, () => setLoading(this.jotaiStore.get(${s.loading})))));
      this.localRules = new OpenvisionLocalRules(storage);
      for (const scope of [0, 1]) {
        this._register(storage.onDidChangeValue(scope, undefined, this._store)(event => {
          if (this.localRules.ownsKey(event.key)) this.refresh().catch(error => this.logService.error(error));
        }));
      }
      // Load synchronously so the first Agent request sees persisted rules.
      try { this.reloadLocalRules(); }
      catch (error) { this.logService.error(error); }
      this.ensureReady().catch(error => this.logService.error(error));
    }
    get items() { return this.itemsSignal(); }
    get isLoading() { return this.isLoadingSignal(); }
    setItems(value) { this.jotaiStore.set(${s.items}, typeof value === 'function' ? value(this.jotaiStore.get(${s.items})) : value); }
    setIsLoading(value) { this.jotaiStore.set(${s.loading}, value); }
    notifyItemsChanged() { this._onDidChangeItems.fire(this.items.map(item => ({...item}))); }
    // Readable rules always load; an unreadable record is kept, reported once per
    // change, and still blocks writes until it is removed.
    reloadLocalRules() {
      const { items, unreadable } = this.localRules.inspect();
      this.setItems(items); this.setIsLoading(false); this.notifyItemsChanged();
      const keys = unreadable.map(entry => entry.key).join(", ");
      if (!unreadable.length || keys === this.reportedUnreadable) return;
      this.reportedUnreadable = keys;
      const detail = "Readable rules are loaded. The unreadable record was left unchanged, and new or changed rules cannot be saved until it is removed (see the recovery guide, Corrupt profile).";
      this.logService.error("OpenVision rules: " + unreadable.length + " unreadable saved rule(s) kept unchanged: " + keys);
      (globalThis.openvisionProfileRecoveryQueue ??= []).push({ id: "unreadable-rules:" + keys, kind: "unreadable-rule", store: "Profile rules",
        title: unreadable.length + " saved rule(s) could not be read.", detail, path: keys });
    }
    async refresh() { this.reloadLocalRules(); }
    ensureReady() {
      return this.ready ??= this.localRules.migrateLegacy(this.aiService.getPersonalContext())
        .then(() => this.reloadLocalRules())
        .catch(error => { this.ready = undefined; throw error; });
    }
    async addItem(title, knowledge, composerId) {
      await this.ensureReady();
      const id = await this.localRules.add(title, knowledge, composerId);
      this.reloadLocalRules();
      return id;
    }
    async updateItem(id, title, knowledge) { await this.ensureReady(); await this.localRules.update(id, title, knowledge); this.reloadLocalRules(); }
    async removeItem(id) { await this.ensureReady(); await this.localRules.remove(id); this.reloadLocalRules(); }
    async removeAll() { await this.ensureReady(); await this.localRules.clear(); this.reloadLocalRules(); }
    async maybeAddOldUserRules() { await this.localRules.migrateLegacy(this.aiService.getPersonalContext()); this.reloadLocalRules(); }
  }`;
}

export function localUserRules(text, variant) {
  text = workspaceRuleEvents(text, variant);
  if (text.includes(marker)) return text;
  const s = symbols[variant];
  if (!s) throw new Error(`Unknown workbench variant: ${variant}`);
  const anchor = `${s.owner} = class extends ${s.base} {`;
  const position = text.indexOf(anchor);
  if (position < 0 || text.indexOf(anchor, position + 1) !== -1) throw new Error('User rule service owner missing or ambiguous');
  const start = position + `${s.owner} = `.length;
  const node = parseExpressionAt(text, start, { ecmaVersion: 'latest' });
  const original = text.slice(start, node.end);
  for (const prior of ['/* OpenVision local user rules v2 */', '/* OpenVision local user rules v3 */'])
    if (text.includes(prior)) return (text.slice(0, start) + localClass(s) + text.slice(node.end)).replace(prior, marker);
  for (const name of ['knowledgeBaseList', 'knowledgeBaseAdd', 'knowledgeBaseUpdate', 'knowledgeBaseRemove', 'notifyItemsChanged'])
    if (!original.includes(name)) throw new Error(`User rule service contract changed: ${name}`);
  const decoration = `${s.owner} = `;
  const decorationStart = text.indexOf(decoration, node.end) + `${s.owner} = `.length;
  if (decorationStart < node.end) throw new Error('User rule service injection missing');
  const decorators = parseExpressionAt(text, decorationStart, { ecmaVersion: 'latest' });
  if (decorators.type !== 'CallExpression' || decorators.callee.name !== '__decorate' ||
      decorators.arguments[1]?.name !== s.owner || decorationStart - node.end > 100)
    throw new Error('User rule service injection owner changed');
  const replacement = `(${s.storageInit}(), __decorate([__param(0, ${s.storage}), __param(1, ${s.ai}), __param(2, ${s.log})], ${s.owner}))`;
  text = text.slice(0, decorationStart) + replacement + text.slice(decorators.end);
  text = text.slice(0, start) + localClass(s) + text.slice(node.end);
  return `${marker}\n${helperImport}\n${text}`;
}
