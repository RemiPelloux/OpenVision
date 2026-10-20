// Built-in OpenVision extension. Python, Go and Rust ship grammars only (owner
// decision, OV-402). For those languages a language status item says so and
// points to installing a language server extension, until a user-installed
// extension that provides one is present.
const vscode = require('vscode');

const languages = Object.freeze({
  python: 'Python', go: 'Go', rust: 'Rust',
});

// An installed (non-built-in) extension with code that declares the language
// or activates on it is treated as providing language features.
function providers(id) {
  return vscode.extensions.all.filter(extension => {
    const manifest = extension.packageJSON ?? {};
    if (manifest.isBuiltin || extension.id.startsWith('vscode.') || extension.id.startsWith('openvision.')) return false;
    if (!manifest.main && !manifest.browser) return false;
    return (manifest.activationEvents ?? []).includes(`onLanguage:${id}`) ||
      (manifest.contributes?.languages ?? []).some(language => language.id === id);
  });
}

function statusText(id) {
  const name = languages[id];
  return { text: 'Syntax highlighting only', name: `${name} language features`,
    detail: `Install a ${name} language server extension for completion, diagnostics, navigation and rename.` };
}

function activate(context) {
  const items = new Map();
  const refresh = () => {
    for (const id of Object.keys(languages)) {
      const provided = providers(id).length > 0;
      if (provided) { items.get(id)?.dispose(); items.delete(id); continue; }
      if (items.has(id)) continue;
      const item = vscode.languages.createLanguageStatusItem(`openvision.languageStatus.${id}`, { language: id });
      Object.assign(item, statusText(id), { severity: vscode.LanguageStatusSeverity.Information,
        command: { title: 'Find a language server', command: 'workbench.extensions.search', arguments: [`@category:"programming languages" ${languages[id]}`] } });
      items.set(id, item);
    }
  };
  refresh();
  context.subscriptions.push(vscode.extensions.onDidChange(refresh), { dispose: () => items.forEach(item => item.dispose()) });
}

module.exports = { activate, languages, providers, statusText };
