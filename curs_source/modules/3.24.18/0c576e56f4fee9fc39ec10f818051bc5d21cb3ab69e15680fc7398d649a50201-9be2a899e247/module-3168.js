"use strict";
function n(e) {
    return /\b(timeout|timed out|deadline exceeded)\b/i.test(e);
}
require.d(exports, {
    v: ()=>n
});
