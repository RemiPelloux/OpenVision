// Consume the knowledge service's validated workspace records. Storage parsing
// and scope validation belong to LocalRules; imports never mutate that owner.
export function legacyMemories(knowledge) {
  return knowledge.items.filter(item => item.isGenerated === true);
}

function identity(item) {
  return JSON.stringify([item.id, item.title, item.knowledge, item.createdAt, item.isGenerated]);
}

export function reviewLegacyMemory(knowledge, id) {
  const source = legacyMemories(knowledge).find(item => item.id === id);
  if (!source) throw new Error('This legacy memory is no longer available. Refresh the list.');
  const original = identity(source);
  return {
    text: JSON.stringify({ title: source.title, description: `When working on ${source.title}`, content: source.knowledge }),
    assertCurrent() {
      const current = legacyMemories(knowledge).find(item => item.id === id);
      if (!current || identity(current) !== original)
        throw new Error('The original memory changed. Select it again and review the latest version.');
    },
  };
}
