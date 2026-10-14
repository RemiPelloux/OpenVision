import { legacyMemories, reviewLegacyMemory } from './openvision-legacy-memory.js';
import { createMemoryCard } from './openvision-workspace-memory-card.js';

const pageSize = 20;
function node(tag, text) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  return element;
}

export function createLegacyMemoryReview(context) {
  const { knowledge, workspace } = context;
  const element = node('section'); element.className = 'openvision-legacy-memories';
  element.setAttribute('aria-label', 'Legacy memories');
  const toggle = node('button', 'Review legacy memories'); toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  const panel = node('div'); panel.hidden = true;
  const explanation = node('p', 'Review older memories from this workspace before adding them to project rules. Originals stay in local storage.');
  const search = node('input'); search.type = 'search'; search.placeholder = 'Search legacy memories';
  search.setAttribute('aria-label', 'Search legacy memories');
  const list = node('div'), paging = node('div'), status = node('p'), cardHost = node('div');
  status.setAttribute('role', 'status'); list.className = 'openvision-legacy-memory-list';
  paging.className = 'openvision-memory-actions';
  const previous = node('button', 'Previous memories'), next = node('button', 'Next memories');
  previous.type = next.type = 'button'; paging.append(previous, next);
  panel.append(explanation, search, status, list, paging, cardHost); element.append(toggle, panel);
  let offset = 0, card, disposed = false;
  const closeCard = () => { card?.dispose(); card = undefined; cardHost.replaceChildren(); };
  function select(id) {
    closeCard();
    try {
      const review = reviewLegacyMemory(knowledge, id);
      card = createMemoryCard({ ...context, text: review.text, legacy: review });
      cardHost.append(card.element);
    } catch (error) { status.textContent = error.message; }
  }
  function render() {
    if (disposed) return;
    const all = legacyMemories(knowledge);
    toggle.textContent = `Review legacy memories (${all.length})`;
    if (panel.hidden) return;
    const query = search.value.trim().toLocaleLowerCase();
    const matching = query ? all.filter(item => item.title.toLocaleLowerCase().includes(query)) : all;
    offset = Math.min(offset, Math.max(0, Math.ceil(matching.length / pageSize) - 1) * pageSize);
    list.replaceChildren();
    for (const item of matching.slice(offset, offset + pageSize)) {
      const row = node('button', item.title); row.type = 'button';
      row.onclick = () => select(item.id); list.append(row);
    }
    status.textContent = !all.length ? 'No legacy memories in this workspace.' : !matching.length ? 'No matching memories.' :
      `${offset + 1}–${Math.min(offset + pageSize, matching.length)} of ${matching.length} memories`;
    previous.disabled = offset === 0; next.disabled = offset + pageSize >= matching.length;
    paging.hidden = matching.length <= pageSize;
  }
  toggle.onclick = () => {
    panel.hidden = !panel.hidden; toggle.setAttribute('aria-expanded', String(!panel.hidden));
    if (panel.hidden) closeCard(); render();
  };
  search.oninput = () => { offset = 0; render(); };
  previous.onclick = () => { offset -= pageSize; render(); };
  next.onclick = () => { offset += pageSize; render(); };
  const subscriptions = [knowledge.onDidChangeItems(render)];
  for (const name of ['onDidChangeWorkspaceFolders', 'onDidChangeWorkbenchState'])
    if (workspace[name]) subscriptions.push(workspace[name](() => { closeCard(); offset = 0; render(); }));
  render();
  return { element, dispose() { disposed = true; subscriptions.forEach(item => item.dispose()); closeCard(); element.remove(); } };
}
