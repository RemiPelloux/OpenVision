"use strict";
function n(e) {
    return {
        run: (t, r, n)=>(async function*() {
                const s = e.run(t, r, n);
                n.onNetworkStarted?.(), yield* s;
            })()
    };
}
require.d(exports, {
    u: ()=>n
});
