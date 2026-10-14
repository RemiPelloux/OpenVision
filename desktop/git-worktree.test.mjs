import assert from 'node:assert/strict';
import test from 'node:test';
import { explicitWorktreeInventory } from './git-worktree-customization.mjs';

const input = `const Inventory = class {
async getWorktrees() { return await this.getWorktreesFS(); }
async getWorktreesFS() {
if (!(config.get("detectWorktrees") === !0)) return [];
return await scan();
}};
const Explicit = class {
async getWorktrees() { return await this.run(Operation.GetWorktrees, () => this.repository.getWorktrees()); }
async refresh() { return this.repository.getWorktrees(); }
};`;
test('explicit inventory works with autodetection off while status stays lazy', async () => {
  let scans = 0;
  const patched = explicitWorktreeInventory(input);
  assert.equal(explicitWorktreeInventory(patched), patched);
  const classes = new Function('config', 'scan', 'Operation', `${patched}; return { Inventory, Explicit };`)(
    { get: () => false }, async () => { scans++; return ['owned']; }, { GetWorktrees: 'worktrees' });
  const inventory = new classes.Inventory(), facade = new classes.Explicit();
  facade.repository = inventory; facade.run = (operation, callback) => callback();
  assert.deepEqual(await facade.refresh(), []); assert.equal(scans, 0);
  assert.deepEqual(await facade.getWorktrees(), ['owned']); assert.equal(scans, 1);
  assert.deepEqual(await facade.refresh(), []); assert.equal(scans, 1);
});
test('rejects ambiguous owners and changed background contracts', () => {
  assert.throws(() => explicitWorktreeInventory(input + input), /ambiguous/);
  assert.throws(() => explicitWorktreeInventory(input.replace('detectWorktrees', 'differentSetting')), /contract changed/);
});
