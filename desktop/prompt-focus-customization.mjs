import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { parseExpressionAt } from '../tooling/dependencies.mjs';
import { cachedFile } from './build-cache.mjs';
import { digest, fileHash } from './import-files.mjs';

export const promptFocusMarker = '/* OpenVision deferred prompt focus keeps selection v1 */';

// True when the document selection is a non-empty range inside `element`, as
// after Ctrl+A or a Shift+arrow selection in a Lexical prompt.
export function userSelection(element) {
  const selection = element?.ownerDocument.getSelection();
  return !!selection && !selection.isCollapsed && element.contains(selection.anchorNode) && element.contains(selection.focusNode);
}

// The prompt input delegate (Quick Edit, chat, terminal Cmd+K) focuses in the
// main window through a 25 ms timer that then moves the caret to the end. Ctrl+K
// on an open Quick Edit prompt, a click on its container and a prompt reset all
// schedule that timer, so a select-all typed within those 25 ms was collapsed
// again and Backspace removed one character (#7). The deferred focus now keeps a
// selection the user made inside the already focused prompt; immediate and
// forced focus keep their caret placement.
export function keepPromptSelection(text) {
  if (text.includes(promptFocusMarker)) return text;
  const anchor = 'this.promisedFocus = !1;', index = text.indexOf(anchor);
  if (index < 0 || text.indexOf(anchor, index + anchor.length) !== -1) throw new Error('Prompt focus owner missing or ambiguous');
  const start = text.lastIndexOf('focus(', index);
  const method = parseExpressionAt(`class {${text.slice(start)}`, 0, { ecmaVersion: 'latest' }).body.body[0];
  if (method?.key?.name !== 'focus' || method.value.params.length !== 3) throw new Error('Prompt focus contract changed');
  const end = start + method.end - 7, original = text.slice(start, end);
  const atStart = method.value.params[2].name.replace(/\$/g, "\\$");
  const immediate = /const ([\w$]+) = \(\) => \{\s+if \(\(this\._ref\?\.focus\(\), this\._editor === void 0\)\) \{/.exec(original);
  if (!immediate) throw new Error('Prompt focus contract changed: immediate focus');
  const focus = immediate[1], name = focus.replace(/\$/g, '\\$');
  const update = new RegExp(`this\\._editor\\.update\\(\\(\\) => \\{\\s+const ([\\w$]+) = [\\w$]+\\(\\);\\s+\\(${atStart} \\? \\1\\.selectStart\\(\\) : \\1\\.selectEnd\\(\\), `, 'g');
  const deferred = new RegExp(`(setTimeout\\(\\(\\) => \\{\\s+if \\([\\w$]+ && this\\.isFocused\\(\\)\\) return;[^}]*\\|\\| ${name})\\(\\);(\\s+\\}, 25\\);)`, 'g');
  if ([...original.matchAll(update)].length !== 1 || [...original.matchAll(deferred)].length !== 1)
    throw new Error('Prompt focus contract changed: deferred caret placement');
  const patched = original
    .replace(immediate[0], `const ${focus} = (openvisionDeferred) => {
                  ${promptFocusMarker}
                  const openvisionKeep = openvisionDeferred === !0 && this.isFocused() && (${userSelection})(this._ref);
                  if ((this._ref?.focus(), this._editor === void 0)) {`)
    .replace(update, (match, root) => match.replace(`(${atStart} ? `, `(openvisionKeep || (${atStart} ? `)
      .replace(`${root}.selectEnd(), `, `${root}.selectEnd()), `))
    .replace(deferred, '$1(!0);$2');
  return text.slice(0, start) + patched + text.slice(end);
}

export async function installPromptFocusSelection(root) {
  const recipe = digest(JSON.stringify(await Promise.all(['desktop/prompt-focus-customization.mjs', 'desktop/build-cache.mjs',
    'desktop/import-files.mjs', 'tooling/dependencies.mjs', 'tooling/package-lock.json'].map(path => fileHash(join(root, path))))));
  for (const variant of ['desktop', 'glass']) {
    const relative = `out/vs/workbench/workbench.${variant}.main.js`, path = join(root, 'source/app', relative);
    await cachedFile({ path, recipe, marker: join(root, `build/cache/prompt-focus-${variant}.json`) }, async () => {
      const before = await readFile(path, 'utf8'), after = keepPromptSelection(before);
      if (before === after) return;
      const backup = join(root, 'backups/prompt-focus', relative);
      await mkdir(dirname(backup), { recursive: true });
      await copyFile(path, backup, 1).catch(error => { if (error.code !== 'EEXIST') throw error; });
      await writeFile(path, after);
    });
  }
  console.log('Deferred prompt focus keeps a selection made in the focused prompt');
}
