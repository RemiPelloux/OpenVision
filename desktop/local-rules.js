// Profile-scoped, machine-local storage: each rule has its own key so another
// window adding a rule does not overwrite an unrelated rule's entire list.
const prefix = 'openvision.user-rule.v1.';
const migrationKey = 'openvision.user-rules.legacy-migrated.v1';
const profileScope = 0;
const workspaceScope = 1;
const scopeOf = item => item.isGenerated ? workspaceScope : profileScope;

function parseRule(raw, id) {
  let item;
  try { item = JSON.parse(raw); } catch { throw new Error('A saved OpenVision rule is invalid JSON; its original data was preserved.'); }
  if (!item || item.id !== id || typeof item.title !== 'string' || typeof item.knowledge !== 'string' ||
      typeof item.isGenerated !== 'boolean' || (item.createdAt !== undefined && typeof item.createdAt !== 'string'))
    throw new Error('A saved OpenVision rule has an unsupported format; its original data was preserved.');
  return item;
}

function textFields(title, knowledge) {
  if (typeof title !== 'string' || typeof knowledge !== 'string') throw new Error('Rule title and content must be text.');
  return { title: title.trim() || '[Untitled]', knowledge };
}

export class LocalRules {
  constructor(storage) { this.storage = storage; }

  ownsKey(key) { return typeof key === 'string' && key.startsWith(prefix); }

  // Readable rules plus every unreadable record. Unreadable records are never
  // changed here; they are reported so startup can load the readable rules.
  inspect() {
    const items = [], unreadable = [];
    for (const scope of [profileScope, workspaceScope])
      for (const key of this.keys(scope).filter(key => this.ownsKey(key))) {
        const raw = this.storage.get(key, scope);
        if (raw === undefined) continue;
        try {
          const item = parseRule(raw, key.slice(prefix.length));
          if (scopeOf(item) !== scope) throw new Error('A saved rule has an unexpected scope; its original data was preserved.');
          items.push(item);
        } catch (error) { unreadable.push({ key, scope, error: error.message }); }
      }
    items.sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? '') || a.id.localeCompare(b.id));
    return { items, unreadable };
  }

  // Strict read for writes: refuse to hide or overwrite an unreadable saved state.
  read() {
    const { items, unreadable } = this.inspect();
    if (unreadable.length) throw new Error(unreadable[0].error);
    return items;
  }

  keys(scope) {
    // Native storage.keys() reads a shared target-metadata blob. Simultaneous
    // window writes can replace that blob while both rule records survive.
    // Enumerate the storage owner's actual records; the prefix owns identity.
    const items = this.storage.getStorage(scope)?.items;
    if (!items || typeof items.keys !== 'function') throw new Error('OpenVision rule storage is unavailable.');
    return [...items.keys()];
  }

  async commit(key, value, scope) {
    const owner = this.storage.getStorage(scope), database = owner?.database;
    if (!database?.channel || !owner.acceptExternal) throw new Error('Persistent OpenVision rule storage is unavailable.');
    await database.channel.call('openvisionRulesUpdate', {
      profile: database.profile, workspace: database.workspace, key, value,
    });
    owner.acceptExternal(key, value === null ? undefined : value);
  }

  async write(item) {
    await this.commit(prefix + item.id, JSON.stringify(item), scopeOf(item));
  }

  async add(title, knowledge, composerId) {
    this.read(); // Refuse to hide or overwrite an unreadable saved state.
    const item = { ...textFields(title, knowledge), id: crypto.randomUUID(),
      createdAt: new Date().toISOString(), isGenerated: !!composerId };
    await this.write(item);
    return item.id;
  }

  async update(id, title, knowledge) {
    const item = this.read().find(rule => rule.id === id);
    if (!item) throw new Error('User rule not found.');
    await this.write({ ...item, ...textFields(title, knowledge) });
  }

  async remove(id) {
    const item = this.read().find(rule => rule.id === id);
    if (item) await this.commit(prefix + id, null, scopeOf(item));
  }

  async clear() {
    for (const item of this.read()) await this.commit(prefix + item.id, null, scopeOf(item));
  }

  async migrateLegacy(knowledge) {
    if (this.storage.get(migrationKey, profileScope) === 'true' || typeof knowledge !== 'string' || !knowledge.trim()) return;
    const items = this.read();
    if (!items.some(item => !item.isGenerated && item.knowledge === knowledge)) {
      // A stable ID makes an interrupted migration or simultaneous windows safe.
      const id = 'legacy-personal-context';
      if (items.some(item => item.id === id)) throw new Error('Legacy rule migration conflicts with an existing rule.');
      await this.write({ id, title: 'Migrated User Rules', knowledge, isGenerated: false, createdAt: new Date().toISOString() });
    }
    await this.commit(migrationKey, 'true', profileScope);
  }
}
