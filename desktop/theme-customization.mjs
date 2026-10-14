import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision native theme ownership v1 */';
const options = { ecmaVersion: 'latest', sourceType: 'module' };

function classAt(text, anchor) {
  const at = text.indexOf(anchor);
  if (at < 0 || text.indexOf(anchor, at + anchor.length) !== -1)
    throw Error(`Theme owner missing or ambiguous: ${anchor}`);
  const start = text.lastIndexOf('class ', at);
  const node = parseExpressionAt(text, start, options);
  if (node.type !== 'ClassExpression' || node.end <= at) throw Error(`Theme owner changed: ${anchor}`);
  return node;
}

function methodAt(owner, name) {
  const methods = owner.body.body.filter(method => method.key?.name === name);
  if (methods.length !== 1) throw Error(`Theme method missing or ambiguous: ${name}`);
  return methods[0].value;
}

function guard(patches, owner, name, code) {
  const method = methodAt(owner, name);
  const body = typeof code === 'function' ? code(method.params) : code;
  patches.push({ at: method.body.start + 1, text: `\n${marker}\nif (Rl.localMode) { ${body} }\n` });
}

/** The native theme service owns selected themes, persistence and resolved colors.
 * Glass may derive its component tokens from that owner but must not apply a
 * second stored theme, overwrite custom colors, or replace an extension theme.
 */
export function customizeThemes(text, variant) {
  if (variant === 'desktop') return text;
  if (variant !== 'glass') throw Error('Unknown theme variant.');
  text = nativeColorConfiguration(text);
  text = installedThemeContributions(text);
  text = declarativeThemeLocations(text);
  if (text.includes(marker)) return text;
  if (!text.includes('if (Rl.localMode)')) throw Error('Local Glass environment contract changed.');
  const native = classAt(text, 'return this._glassWorkbenchColorThemeSettingsId ?? super.getEffectiveColorThemeSettingsId();');
  const glass = classAt(text, '(this._onDidChangeGlassThemePreference =');
  for (const name of ['nAi', 'vRl', 'C5k', '_5k'])
    if (!text.includes(`function ${name}(`)) throw Error(`Native Glass theme conversion missing: ${name}`);
  const patches = [];
  for (const name of ['getEffectiveColorThemeSettingsId', 'shouldRestoreColorThemeOnConfigurationChange',
    'onHostColorSchemeChanged', 'applyColorCustomizations', 'persistColorTheme',
    'updateDynamicCSSRules', 'applyColorThemeClassNames']) {
    guard(patches, native, name, params => {
      if (params.some(param => param.type !== 'Identifier')) throw Error(`Theme parameters changed: ${name}`);
      return `return super.${name}(${params.map(param => param.name).join(', ')});`;
    });
  }
  guard(patches, native, 'applyGlassTheme', 'return Promise.resolve();');
  guard(patches, native, 'applyThemeColorOverrides', 'return;');
  guard(patches, glass, '_stampCssRaw', 'return;');
  guard(patches, glass, '_applyTintOverlay', 'return;');
  guard(patches, glass, '_reassertWorkbenchTheme', 'this._stampEditorDynamicCss(); return;');
  guard(patches, glass, '_stampCursorTokenCss',
    'this._stampGlassColorTokensCss(_5k(C5k(this._workbenchThemeService.getColorTheme()), false)); return;');
  guard(patches, glass, '_updateBodyClasses', params => {
    if (params.length !== 2 || params.some(param => param.type !== 'Identifier'))
      throw Error('Glass body-class parameters changed.');
    return `const nativeTheme = nAi(vRl(this._workbenchThemeService.getColorTheme().type));
      ${params[0].name} = nativeTheme.bodyClass; ${params[1].name} = nativeTheme.vsCompat;`;
  });
  guard(patches, glass, '_stampEditorDynamicCss', 'this._updateBodyClasses(); this._stampCursorTokenCss();');
  for (const patch of patches.sort((a, b) => b.at - a.at))
    text = text.slice(0, patch.at) + patch.text + text.slice(patch.at);
  return text;
}

function nativeColorConfiguration(text) {
  const marker = '/* OpenVision native color configuration v1 */';
  if (text.includes(marker)) return text;
  const owner = classAt(text, 'return typeof t == "string" && JDs.has(t) ? JDs.get(t) : this.delegate.getValue(t, e);');
  const patches = ['getValue', 'inspect'].map(name => {
    const method = methodAt(owner, name);
    if (method.params.length !== 2 || method.params.some(param => param.type !== 'Identifier'))
      throw Error(`Theme configuration parameters changed: ${name}`);
    const [key, scope] = method.params.map(param => param.name);
    return { at: method.body.start + 1, text: `\n${marker}\nif (Rl.localMode && ${key} === "workbench.colorCustomizations") return this.delegate.${name}(${key}, ${scope});\n` };
  });
  for (const patch of patches.sort((a, b) => b.at - a.at))
    text = text.slice(0, patch.at) + patch.text + text.slice(patch.at);
  return text;
}

function installedThemeContributions(text) {
  const marker = '/* OpenVision installed theme contributions v1 */';
  if (text.includes(marker)) return text;
  const anchor = 'function q9v(', start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + 1) !== -1) throw Error('Glass extension filter missing or ambiguous.');
  const owner = parseExpressionAt(text, start, options);
  const body = text.slice(owner.start, owner.end);
  const filter = 'i.has(r.identifier.value.toLowerCase())';
  if (!body.includes(filter)) throw Error('Glass extension filter contract changed.');
  const replacement = body.replace(filter,
    `${marker} ${filter} || (Rl.localMode && Array.isArray(r.contributes?.themes) && r.contributes.themes.length > 0)`);
  return text.slice(0, owner.start) + replacement + text.slice(owner.end);
}

function declarativeThemeLocations(text) {
  const marker = '/* OpenVision declarative theme locations v1 */';
  if (text.includes(marker)) return text;
  const anchor = 'function Ncs(t, e) {', at = text.indexOf(anchor);
  if (at < 0 || text.indexOf(anchor, at + 1) !== -1) throw Error('Glass running-location policy missing or ambiguous.');
  const owner = parseExpressionAt(text, at, options);
  const filter = '(n.isGlass && !cNg(n, i).includes(s))';
  const body = text.slice(owner.start, owner.end);
  if (!body.includes(filter)) throw Error('Glass running-location allowlist changed.');
  const rewritten = body.replace(anchor, 'function Ncs(t, e, openvisionManifest) {').replace(filter,
    '(n.isGlass && !cNg(n, i).includes(s) && !(Rl.localMode && openvisionDeclarativeTheme(openvisionManifest)))');
  text = text.slice(0, owner.start) + marker + '\n' + rewritten + text.slice(owner.end);
  const locationCall = 'Ncs(r.identifier._lower, i)';
  if (text.split(locationCall).length !== 2) throw Error('Extension-description running-location consumer changed.');
  text = text.replace(locationCall, 'Ncs(r.identifier._lower, i, r)');
  const scanner = '(Rl.localMode && Array.isArray(r.contributes?.themes) && r.contributes.themes.length > 0)';
  if (text.split(scanner).length !== 2) throw Error('Installed theme scanner consumer changed.');
  text = text.replace(scanner, '(Rl.localMode && openvisionDeclarativeTheme(r))');
  // No identifiers are retained globally. The already scanned manifest travels
  // with each eligibility decision, after native enablement/trust filtering.
  return `function openvisionDeclarativeTheme(manifest) {
    return !!manifest && !manifest.main && !manifest.browser &&
      Array.isArray(manifest.contributes?.themes) && manifest.contributes.themes.length > 0;
  }\n` + text;
}
