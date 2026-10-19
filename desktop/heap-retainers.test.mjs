import test from 'node:test';
import assert from 'node:assert/strict';
import { retainerPaths } from './heap-retainers.mjs';

// A minimal V8 heap snapshot: root -> Window -cache-> Map -[0]-> marker string,
// Window -handle-> Handle{composerId}, and a string reachable only by a weak edge.
function snapshot() {
  const strings = ['', 'Window', 'Map', 'MARK reply 1', 'MARK weak', 'cache', 'weakref', 'Handle', 'composerId', 'chat-1', 'handle'];
  const node = (type, name, id, edges) => [type, name, id, 10, edges];
  // node types: 0 synthetic, 1 object, 2 string; edge types: 0 property, 1 element, 2 weak
  const nodes = [node(0, 0, 1, 1), node(1, 1, 3, 3), node(1, 2, 5, 1), node(2, 3, 7, 0), node(2, 4, 9, 0),
    node(1, 7, 11, 1), node(2, 9, 13, 0)].flat();
  const F = 5, at = index => index * F;
  const edges = [[0, 1, at(1)], [0, 5, at(2)], [2, 6, at(4)], [0, 10, at(5)], [1, 0, at(3)], [0, 8, at(6)]].flat();
  return { snapshot: { meta: { node_fields: ['type', 'name', 'id', 'self_size', 'edge_count'],
    node_types: [['synthetic', 'object', 'string']], edge_fields: ['type', 'name_or_index', 'to_node'],
    edge_types: [['property', 'element', 'weak']] } }, nodes, edges, strings };
}

test('marker strings report their shortest strong retaining path; weak-only strings are unreachable', () => {
  const report = retainerPaths(snapshot(), 'MARK');
  assert.equal(report.matched, 2); assert.equal(report.unreachable, 1); assert.equal(report.selfBytes, 20);
  assert.equal(report.groups.length, 1);
  assert.equal(report.groups[0].key, 'object:Map .[n] <- object:Window .cache <- synthetic: .Window');
  assert.equal(report.groups[0].sample, 'MARK reply 1');
});

test('objects can be selected by constructor or snapshot id; samples name their composer', () => {
  const byName = retainerPaths(snapshot(), undefined, { objectName: 'Handle' });
  assert.equal(byName.matched, 1); assert.equal(byName.groups[0].sample, 'composerId chat-1');
  assert.equal(retainerPaths(snapshot(), undefined, { nodeId: 5 }).groups[0].key, 'object:Window .cache <- synthetic: .Window');
});
