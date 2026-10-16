"use strict";
function n(t, e) {
    var r;
    return null !== (r = null == e ? void 0 : e.concat().reverse().reduce((t, e)=>e(t), t)) && void 0 !== r ? r : t;
}
require.d(exports, {
    $: ()=>n
});
