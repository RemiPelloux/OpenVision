"use strict";
function n(e, t, r) {
    const n = "string" == typeof t ? t : t.typeName, s = "string" == typeof r ? r : r.name;
    return e.toString().replace(/\/?$/, `/${n}/${s}`);
}
require.d(exports, {
    j: ()=>n
});
