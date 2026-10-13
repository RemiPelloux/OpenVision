export const modelPageSize = 40;

export function initialModelPage(models, selectedId, query) {
  if (query) return 0;
  const selected = models.findIndex(model => model.name === selectedId);
  return Math.floor(Math.max(0, selected) / modelPageSize);
}

export function modelPage(models, requestedPage) {
  const pages = Math.max(1, Math.ceil(models.length / modelPageSize));
  const page = Math.min(Math.max(0, requestedPage), pages - 1), offset = page * modelPageSize;
  const groups = new Map();
  for (const model of models.slice(offset, offset + modelPageSize)) {
    if (!groups.has(model.providerId)) groups.set(model.providerId, []);
    groups.get(model.providerId).push(model);
  }
  return { page, pages, offset, count: Math.min(modelPageSize, models.length - offset), groups };
}
