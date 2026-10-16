function P_(e){const t=new Map;for(const r of e.fields){let n;r.fieldKind=="message"?n=ps(r):r.fieldKind=="scalar"&&r.scalar==N.BYTES&&(n=ja),t.set(r.localName,n??(o=>o))}return t}
