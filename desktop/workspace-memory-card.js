import { parseMemoryProposal, saveApprovedMemory, captureMemoryWorkspace } from './openvision-workspace-memory.js';

function node(tag, text) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  return element;
}

function field(label, value, multiline = false) {
  const wrapper = node('label', label), input = node(multiline ? 'textarea' : 'input');
  input.value = value; input.setAttribute('aria-label', label);
  if (multiline) input.rows = 5;
  wrapper.append(input);
  return { wrapper, input };
}

export function createMemoryCard({ text, isStreaming, workspace, files, rules, editor, URI, Buffer, isMissing, legacy }) {
  const element = node('section'); element.className = 'openvision-memory-card';
  const label = legacy ? 'Review legacy memory' : 'Suggested project memory';
  element.setAttribute('aria-label', label);
  const heading = node('strong', label);
  const status = node('p', legacy ? 'Review and edit before importing. The original record will remain unchanged.' :
    isStreaming ? 'Receiving suggestion…' : 'Review before saving. Nothing is saved automatically.');
  status.setAttribute('role', 'status');
  element.append(heading, status);
  let disposed = false;
  const dispose = () => { disposed = true; element.remove(); };
  if (isStreaming) return { element, dispose };
  let proposal;
  try { proposal = parseMemoryProposal(text); }
  catch (error) { status.textContent = error.message; return { element, dispose }; }
  const snapshot = captureMemoryWorkspace(workspace);
  const title = field('Memory title', proposal.title);
  const description = field('When to use', proposal.description);
  const content = field('Memory content', proposal.content, true);
  const folderLabel = node('label', 'Project'), folderSelect = node('select');
  folderSelect.setAttribute('aria-label', 'Memory project');
  for (const [index, folder] of snapshot.folders.entries()) {
    const option = node('option', `${folder.name} — ${folder.uri.fsPath || folder.uri.toString()}`);
    option.value = String(index); folderSelect.append(option);
  }
  folderLabel.append(folderSelect);
  const actions = node('div'), save = node('button', legacy ? 'Import project memory' : 'Save project memory'), dismiss = node('button', 'Dismiss');
  save.type = dismiss.type = 'button'; actions.className = 'openvision-memory-actions';
  actions.append(save, dismiss);
  element.append(title.wrapper, description.wrapper, content.wrapper, folderLabel, actions);
  if (!snapshot.folders.length) { save.disabled = true; status.textContent = 'Open a project folder to save this memory.'; }
  let busy = false;
  save.onclick = async () => {
    if (busy || disposed) return;
    busy = true; save.disabled = true; dismiss.disabled = true;
    const inputs = [title.input, description.input, content.input, folderSelect];
    inputs.forEach(input => { input.disabled = true; });
    status.textContent = 'Saving…';
    try {
      const approved = JSON.stringify({ title: title.input.value, description: description.input.value, content: content.input.value });
      const uri = await saveApprovedMemory(approved, snapshot.folders[Number(folderSelect.value)],
        { snapshot, workspace, files, URI, Buffer, isMissing, assertCurrent: legacy?.assertCurrent });
      let refreshFailed = false;
      try { await rules.refresh(); } catch { refreshFailed = true; }
      if (disposed) return;
      status.textContent = refreshFailed ? 'Saved. Reload the window if the memory does not appear in project rules.' :
        legacy ? 'Imported to project rules. The original record is preserved.' : 'Saved to this project. Agent can read it when relevant.';
      save.textContent = 'Saved';
      dismiss.remove();
      const open = node('button', 'Open memory'); open.type = 'button';
      open.onclick = () => editor.openEditor({ resource: uri }).catch(error => { status.textContent = error.message; });
      actions.append(open);
    } catch (error) {
      if (!disposed) {
        status.textContent = `Could not save memory: ${error.message}`;
        save.disabled = false; dismiss.disabled = false;
        inputs.forEach(input => { input.disabled = false; });
      }
      busy = false;
    }
  };
  dismiss.onclick = () => { element.replaceChildren(heading, node('p', 'Suggestion dismissed. Nothing was saved.')); };
  return { element, dispose };
}
