import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from '../tooling/dependencies.mjs';
import { backedWrite } from './telemetry-settings.mjs';

export function alignWebviewScriptHash(html) {
  const document = parse(html, { sourceCodeLocationInfo: true });
  const scripts = [], policies = [];
  function visit(node) {
    if (node.tagName === 'script' && !node.attrs.some(attr => attr.name === 'src')) scripts.push(node);
    if (node.tagName === 'meta' && node.attrs.some(attr => attr.name === 'http-equiv' && attr.value.toLowerCase() === 'content-security-policy')) policies.push(node);
    for (const child of node.childNodes ?? []) visit(child);
  }
  visit(document);
  if (scripts.length !== 1 || policies.length !== 1) throw new Error('Expected one owned webview bootstrap script and content security policy.');
  const content = policies[0].attrs.find(attr => attr.name === 'content')?.value;
  const directives = content?.split(';').map(item => item.trim());
  const script = directives?.filter(item => item.startsWith('script-src '));
  const hashes = script?.[0]?.match(/'sha256-[A-Za-z0-9+/=]+'/g);
  if (script?.length !== 1 || hashes?.length !== 1 || !script[0].includes("'self'"))
    throw new Error('Webview bootstrap policy changed; refusing to relax its content security policy.');
  const text = scripts[0].childNodes.map(node => node.value ?? '').join('');
  const hash = `'sha256-${createHash('sha256').update(text).digest('base64')}'`;
  const location = policies[0].sourceCodeLocation.attrs.content;
  const attribute = html.slice(location.startOffset, location.endOffset);
  if (!attribute.includes(hashes[0])) throw new Error('Webview script hash source location changed.');
  return html.slice(0, location.startOffset) + attribute.replace(hashes[0], hash) + html.slice(location.endOffset);
}

export async function installAccountWebviews(root) {
  // Both recovered bootstrap documents contain inline scripts. A stale hash in
  // the worker document leaves extension installation holding the registry lock
  // forever, which also prevents a later account host handoff from completing.
  for (const relative of [
    'source/app/out/vs/workbench/contrib/webview/browser/pre/index.html',
    'source/app/out/vs/workbench/services/extensions/worker/webWorkerExtensionHostIframe.html',
  ]) {
    const before = await readFile(join(root, relative), 'utf8');
    await backedWrite(root, relative, alignWebviewScriptHash(before));
  }
}
