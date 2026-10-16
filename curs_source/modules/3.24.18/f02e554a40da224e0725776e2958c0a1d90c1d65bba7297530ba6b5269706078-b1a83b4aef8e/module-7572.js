"use strict";
function n(t, e, r) {
    const n = "string" == typeof e ? e : e.typeName, s = "string" == typeof r ? r : r.name;
    return t.toString().replace(/\/?$/, `/${n}/${s}`);
}
require.d(exports, {
    j: ()=>n
});
