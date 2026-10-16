function Cf(e,t){let r=[],n=e.find(o=>o.id===t)?.parentId;for(;n;){const o=e.find(i=>i.id===n);n=o?.parentId,o&&(r=r.concat(o))}return r}
