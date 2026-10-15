import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { parseJavaScript } from '../tooling/dependencies.mjs';

function bindingNames(node, names) {
  if (!node) return;
  if (node.type === 'Identifier') names.add(node.name);
  else if (node.type === 'ObjectPattern') for (const property of node.properties) bindingNames(property.value ?? property.argument, names);
  else if (node.type === 'ArrayPattern') for (const element of node.elements) bindingNames(element, names);
  else if (node.type === 'RestElement') bindingNames(node.argument, names);
  else if (node.type === 'AssignmentPattern') bindingNames(node.left, names);
}

function moduleContract(source) {
  const ast = parseJavaScript(source, { ecmaVersion: 'latest', sourceType: 'module' });
  const exports = new Set(), imports = [], reexports = new Map(), stars = [];
  for (const node of ast.body) {
    if (node.type === 'ImportDeclaration') imports.push({ source: node.source.value, names: node.specifiers
      .filter(item => item.type !== 'ImportNamespaceSpecifier')
      .map(item => item.type === 'ImportDefaultSpecifier' ? 'default' : item.imported.name ?? item.imported.value) });
    if (node.type === 'ExportDefaultDeclaration') exports.add('default');
    if (node.type === 'ExportAllDeclaration') {
      if (node.exported) exports.add(node.exported.name ?? node.exported.value);
      else stars.push(node.source.value);
      imports.push({ source: node.source.value, names: [] });
    }
    if (node.type !== 'ExportNamedDeclaration') continue;
    if (node.declaration?.type === 'VariableDeclaration')
      for (const declaration of node.declaration.declarations) bindingNames(declaration.id, exports);
    else if (node.declaration?.id) exports.add(node.declaration.id.name);
    for (const item of node.specifiers) {
      const name = item.exported.name ?? item.exported.value;
      if (node.source) reexports.set(name, { source: node.source.value, name: item.local.name ?? item.local.value });
      else exports.add(name);
    }
    if (node.source) imports.push({ source: node.source.value, names: node.specifiers.map(item => item.local.name ?? item.local.value) });
  }
  return { exports, imports, reexports, stars };
}

const isLocal = specifier => specifier.startsWith('./') || specifier.startsWith('../');

async function loadContracts(roots) {
  const contracts = new Map(), pending = [...roots];
  while (pending.length) {
    const path = resolve(pending.pop());
    if (contracts.has(path)) continue;
    // CommonJS export discovery needs the real Node loader; this audit checks
    // default interop only and does not execute modules to discover exports.
    if (path.endsWith('.cjs')) { await readFile(path); contracts.set(path, { commonjs: true }); continue; }
    let contract;
    try { contract = moduleContract(await readFile(path, 'utf8')); }
    catch (error) { throw new Error(`Cannot inspect generated module ${path}: ${error.message}`, { cause: error }); }
    contracts.set(path, contract);
    for (const item of contract.imports)
      if (isLocal(item.source)) pending.push(resolve(dirname(path), item.source));
  }
  return contracts;
}

function hasExport(contracts, path, name, seen = new Set()) {
  const key = `${path}\0${name}`;
  if (seen.has(key)) return false;
  seen.add(key);
  const contract = contracts.get(path);
  if (contract.commonjs) return name === 'default';
  if (contract.exports.has(name)) return true;
  const target = contract.reexports.get(name);
  if (target) {
    if (!isLocal(target.source)) throw new Error(`Cannot verify external reexport ${name} from ${path}`);
    return hasExport(contracts, resolve(dirname(path), target.source), target.name, seen);
  }
  return name !== 'default' && contract.stars.some(source => {
    if (!isLocal(source)) throw new Error(`Cannot verify external star reexport ${name} from ${path}`);
    return hasExport(contracts, resolve(dirname(path), source), name, new Set(seen));
  });
}

// Checks local ESM names without launching Electron or evaluating application
// code. Bare package imports and dynamic imports require runtime verification.
export async function validateLocalModuleImports(roots) {
  const contracts = await loadContracts(roots);
  for (const [path, contract] of contracts) {
    for (const item of contract.imports ?? []) {
      if (!isLocal(item.source)) continue;
      const target = resolve(dirname(path), item.source);
      for (const name of item.names)
        if (!hasExport(contracts, target, name)) throw new Error(`Generated import has no local export: ${path} imports ${name} from ${item.source}`);
    }
  }
  return { modules: contracts.size };
}
