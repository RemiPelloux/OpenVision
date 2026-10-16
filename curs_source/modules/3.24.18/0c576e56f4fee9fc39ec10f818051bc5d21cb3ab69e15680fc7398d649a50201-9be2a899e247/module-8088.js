"use strict";
require.d(exports, {
    e: ()=>o
});
const n = 1e3;
async function o(e) {
    const t = [], r = new Set;
    let o;
    for(let s = 1;; s++){
        const i = await e.fetchPage(o), a = e.itemsOf(i);
        t.push(...a);
        const c = e.nextCursorOf(i);
        if (!c || r.has(c)) return t;
        if (s >= n) throw new Error(`MCP list did not end after ${n} pages; refusing to keep paging`);
        r.add(c), o = c;
    }
}
