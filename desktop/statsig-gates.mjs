// Statsig client gates in the workbench bundle and their drift from the
// anonymous bootstrap (OV-1005). With the experiment refresh inert, a fresh
// profile evaluates every client gate at its bundled default; the anonymous
// BootstrapStatsig answer used to override some of them.
// Pure functions; the committed fixture is desktop/fixtures/statsig-gates-3.21.13.json.

// Statsig's default name hash ("Hashing.js" in the bundle): djb2 over UTF-16
// code units, 32-bit, printed unsigned.
export function djb2(name) {
  let hash = 0;
  for (let index = 0; index < name.length; index++) hash = ((hash << 5) - hash + name.charCodeAt(index)) | 0;
  return String(hash >>> 0);
}

const entry = /(?:"([^"]+)"|([A-Za-z0-9_$]+)):\s*\{\s*client:\s*!0,\s*default:\s*(!0|!1)(,\s*requiresAuthenticatedBootstrap:\s*!0)?,?\s*\}/g;

// The generated client-gate table: `T = { name: { client: !0, default: !0|!1 }, … }`
// followed by `X = Object.keys(T)`, where every entry has that shape. Works on
// the minified input and the formatted build.
export function clientGateTable(text) {
  const tables = [];
  for (const keys of text.matchAll(/[A-Za-z0-9_$]+\s*=\s*Object\.keys\(([A-Za-z0-9_$]+)\)/g)) {
    const openers = [`${keys[1]} = {`, `${keys[1]}={`].map(opener => [opener, text.lastIndexOf(opener, keys.index)]);
    const [opener, open] = openers.reduce((best, item) => item[1] > best[1] ? item : best);
    if (open < 0 || keys.index - open > 2e6) continue;
    const body = text.slice(open + opener.length, keys.index);
    const gates = [...body.matchAll(entry)].map(([, quoted, bare, value, authenticated]) =>
      ({ name: quoted ?? bare, default: value === '!0', ...(authenticated ? { requiresAuthenticatedBootstrap: true } : {}) }));
    if (gates.length && !body.replace(entry, '').replace(/[\s,(){}]/g, '')) tables.push(gates);
  }
  if (tables.length !== 1) throw new Error(`Client gate table missing or ambiguous (${tables.length})`);
  return tables[0];
}

// Resolve bootstrap feature_gates (keyed by plain or djb2-hashed name) for
// each declared gate. A declared gate absent from the bootstrap is undefined.
export function gateDrift(gates, bootstrap) {
  const values = bootstrap?.feature_gates ?? {};
  return gates.map(gate => {
    const hash = djb2(gate.name);
    const found = values[gate.name] ?? values[hash];
    const value = found === undefined ? undefined : Boolean(found.value);
    return { ...gate, hash, bootstrap: value, drifted: value !== undefined && value !== gate.default };
  });
}

// Classification of a drifted gate:
// - "telemetry": it controls collection, logging, tracing or reporting;
// - "hosted-only": it needs a Cursor account, cloud agents, a hosted
//   backend, team/admin state or a vendor-only surface (Glass, mobile, web);
// - "local-feature": the behavior runs locally for a local-profile user.
// Rules are ordered; the first match wins. Explicit names override rules.
export const gateClassOverrides = {
  // Local behaviors whose names contain a hosted-sounding word.
  customize_manage_scope_multiselect: 'local-feature',
  mcp_shared_process_transports: 'local-feature',
  mcp_multi_account: 'local-feature',
  glass_disable_eager_indexing_for_local_sessions: 'local-feature',
  // Hosted services whose names read as local UI.
  composer_auto_routing_result_display: 'hosted-only',
  generalized_env_setup: 'hosted-only',
  nal_websocket_client: 'hosted-only',
};
const rules = [
  ['telemetry', /telemetry|audit_logs|tracing|traces|structured_logging|analytics|(^|_)logging(_|$)/],
  ['hosted-only', new RegExp([
    '^(sand|grok_bot|cloud|origin|bugbot|xai|store_billed|dashboard|org|agent_store|cursor_backend)_', '_grok_bot', '_origin',
    'cloud_', 'referral', 'scm_connect', 'marketplace', 'publish_user', 'leaderboard', 'updater_', 'background_composer',
    'managed_review', '^portal_', 'azure_devops', 'bitbucket', 'github_app', 'gemini_video', 'watch_video', 'voice_',
    'cursor_com', 'automations?_', 'team_', 'glass_projects?_', 'glass_cloud', 'glass_remote', 'glass_direct_github',
    'add_local_agent_to_cloud', 'first_project_onboarding', 'install_plugin', 'mcp_admin', 'android', '_ios$', 'mobile',
    'prompt_upload', 'bugbot', 'upsell', 'env_setup', 'environment_picker', 'open_agent_window', '_shared_', '^enable_ex_hs$',
  ].join('|'))],
];
export function classifyGate(name) {
  if (Object.hasOwn(gateClassOverrides, name)) return gateClassOverrides[name];
  for (const [kind, pattern] of rules) if (pattern.test(name)) return kind;
  return 'local-feature';
}

// Proposed local defaults for genuine local features that the anonymous
// bootstrap switched on. NOT applied: switching any drifted gate on is an
// owner decision (OV-1005). setLocalGateDefaults applies only localGateDefaults.
export const proposedLocalGateDefaults = {
  instant_grep_indexing: true,
  custom_agents_enabled: true,
  customize_global_search: true,
};
