"use strict";
require.d(exports, {
    f: ()=>n
});
class n {
    static v2026 = "undefined" != typeof process && "true" === process.env?.SMITHY_NEW_RETRIES_2026;
    static delay() {
        return n.v2026 ? 50 : 100;
    }
    static throttlingDelay() {
        return n.v2026 ? 1e3 : 500;
    }
    static cost() {
        return n.v2026 ? 14 : 5;
    }
    static throttlingCost() {
        return n.v2026 ? 5 : 10;
    }
    static modifiedCostType() {
        return n.v2026 ? "THROTTLING" : "TRANSIENT";
    }
}
