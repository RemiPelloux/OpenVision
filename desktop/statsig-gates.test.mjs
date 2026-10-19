import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { classifyGate, clientGateTable, djb2, gateDrift, proposedLocalGateDefaults } from './statsig-gates.mjs';
import { localGateDefaults } from './network-defaults.mjs';

const fixture = JSON.parse(await readFile(new URL('./fixtures/statsig-gates-3.21.13.json', import.meta.url), 'utf8'));

test('djb2 matches the Statsig bundle hash', () => {
  assert.equal(djb2('a'), '97');
  assert.equal(djb2('customize_manage_scope_multiselect'), '773020204');
  for (const gate of fixture.gates) assert.equal(djb2(gate.name), gate.hash);
});

test('the gate table parses in minified and formatted bundles and refuses ambiguity', () => {
  const minified = 'x=1,F5e={a_gate:{client:!0,default:!1},"x-chat":{client:!0,default:!0},b_gate:{client:!0,default:!1,requiresAuthenticatedBootstrap:!0}},uEn=Object.keys(F5e),y=2';
  const formatted = `(F5e = {\n  a_gate: { client: !0, default: !1 },\n  "x-chat": { client: !0, default: !0 },\n  b_gate: {\n    client: !0,\n    default: !1,\n    requiresAuthenticatedBootstrap: !0,\n  },\n}),\n(uEn = Object.keys(F5e)),`;
  const expected = [{ name: 'a_gate', default: false }, { name: 'x-chat', default: true }, { name: 'b_gate', default: false, requiresAuthenticatedBootstrap: true }];
  assert.deepEqual(clientGateTable(minified), expected);
  assert.deepEqual(clientGateTable(formatted), expected);
  assert.throws(() => clientGateTable(`${minified};G={c:{client:!0,default:!0}},H=Object.keys(G)`), /ambiguous \(2\)/);
  assert.throws(() => clientGateTable('T={c:{client:!0,fallbackValues:{}}},K=Object.keys(T)'), /missing/);
});

test('bootstrap values resolve by plain or hashed name; absent gates do not drift', () => {
  const gates = [{ name: 'a_gate', default: false }, { name: 'b_gate', default: true }, { name: 'c_gate', default: false }];
  const rows = gateDrift(gates, { feature_gates: { [djb2('a_gate')]: { value: true }, b_gate: { value: true } } });
  assert.deepEqual(rows.map(row => [row.name, row.bootstrap, row.drifted]), [['a_gate', true, true], ['b_gate', true, false], ['c_gate', undefined, false]]);
});

test('every drifted gate keeps its pinned classification', () => {
  const drifted = fixture.gates.filter(gate => gate.drifted);
  assert.equal(drifted.length, fixture.counts.drifted);
  assert.deepEqual(fixture.counts, { declared: 763, inBootstrap: 676, drifted: 209, driftedOn: 195, driftedOff: 14,
    byClass: { 'local-feature': 53, 'hosted-only': 148, telemetry: 8 } });
  for (const gate of drifted) {
    assert.ok(['hosted-only', 'local-feature', 'telemetry'].includes(gate.class), gate.name);
    assert.equal(classifyGate(gate.name), gate.class, `classification changed: ${gate.name}`);
    assert.notEqual(gate.bootstrap, gate.default);
  }
  for (const gate of fixture.gates.filter(gate => !gate.drifted)) assert.equal(gate.class, undefined);
});

test('applied local defaults are local features; proposals stay off until the owner decides', () => {
  for (const [name, value] of Object.entries(localGateDefaults)) {
    assert.equal(classifyGate(name), 'local-feature', name);
    const gate = fixture.gates.find(item => item.name === name);
    assert.equal(gate.bootstrap, value, `${name} keeps the value the anonymous bootstrap gave it`);
  }
  for (const [name, value] of Object.entries(proposedLocalGateDefaults)) {
    const gate = fixture.gates.find(item => item.name === name);
    assert.equal(gate.class, 'local-feature', name);
    assert.equal(gate.bootstrap, value);
    assert.equal(gate.default, !value);
    assert.equal(Object.hasOwn(localGateDefaults, name), false, `${name} must not be switched on without owner approval`);
  }
});

test('the fixture keeps no user, address or rule identifiers', () => {
  const text = JSON.stringify(fixture);
  assert.doesNotMatch(text, /"ip"|userID|rule_id|stableID|\d+\.\d+\.\d+\.\d+"/);
});
