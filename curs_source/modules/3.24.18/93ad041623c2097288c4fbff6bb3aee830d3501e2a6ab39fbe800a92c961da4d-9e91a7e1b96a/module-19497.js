"use strict";
function n(e) {
    return "object" != typeof e || null == e ? e : "ref" in e ? `$${n(e.ref)}` : "fn" in e ? `${e.fn}(${(e.argv || []).map(n).join(", ")})` : JSON.stringify(e, null, 2);
}
require.d(exports, {
    m: ()=>n
});
