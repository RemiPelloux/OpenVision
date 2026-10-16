"use strict";
function n(e, t) {
    var r;
    return null !== (r = null == t ? void 0 : t.concat().reverse().reduce((e, t)=>t(e), e)) && void 0 !== r ? r : e;
}
require.d(exports, {
    $: ()=>n
});
