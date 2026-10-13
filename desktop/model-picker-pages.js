import { useState, useLayoutEffect } from './react-runtime/react/esm-index-production.js';
import { jsx, jsxs } from './react-runtime/react/esm-jsx-runtime-production.js';
import { initialModelPage, modelPage, modelPageSize } from './openvision-model-picker-window.js';

// Retain the native menu items, selection callbacks and reasoning submenus.
// Only the result page is mounted; search still examines the full catalog.
export function ModelPages({ models, selectedId, query, renderModel, Section, Item, setActiveIndex }) {
  const [requestedPage, setPage] = useState(() => initialModelPage(models, selectedId, query));
  const view = modelPage(models, requestedPage);
  useLayoutEffect(() => { setActiveIndex(view.page > 0 ? 1 : 0); }, [view.page, setActiveIndex]);
  return jsxs('div', { className: 'openvision-model-pages', children: [
    models.length > modelPageSize && jsx('div', { className: 'openvision-model-page-status', role: 'status',
      'aria-live': 'polite', children: `${view.offset + 1}–${view.offset + view.count} of ${models.length} models` }),
    view.page > 0 && jsx(Item, { onSelect: () => setPage(view.page - 1), closeOnSelect: false,
      children: 'Previous models' }, 'previous-model-page'),
    ...Array.from(view.groups, ([id, models]) => jsx('div', { role: 'group',
      'aria-label': models[0].tagline || 'Custom provider',
      children: jsx(Section, { models, renderModel }),
    }, id)),
    view.page + 1 < view.pages && jsx(Item, { onSelect: () => setPage(view.page + 1), closeOnSelect: false,
      children: 'Next models' }, 'next-model-page'),
  ] });
}
