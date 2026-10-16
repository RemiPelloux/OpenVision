"use strict";
require.d(exports, {
    m: ()=>n
});
class n extends Error {
    name = "ProviderError";
    tryNextLink;
    constructor(e, t = !0){
        let r, o = !0;
        "boolean" == typeof t ? (r = void 0, o = t) : null != t && "object" == typeof t && (r = t.logger, o = t.tryNextLink ?? !0), super(e), this.tryNextLink = o, Object.setPrototypeOf(this, n.prototype), r?.debug?.(`@smithy/property-provider ${o ? "->" : "(!)"} ${e}`);
    }
    static from(e, t = !0) {
        return Object.assign(new this(e.message, t), e);
    }
}
