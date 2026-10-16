"use strict";
require.d(exports, {
    M: ()=>o,
    _: ()=>s
});
const n = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
function s(e) {
    return n.test(e) && !e.includes("..");
}
function o(e) {
    if (!s(e)) throw new Error(`Invalid sessionId ${JSON.stringify(e)}: must be one path segment, start with a letter or digit, use only [A-Za-z0-9._-], and be at most 128 chars`);
}
