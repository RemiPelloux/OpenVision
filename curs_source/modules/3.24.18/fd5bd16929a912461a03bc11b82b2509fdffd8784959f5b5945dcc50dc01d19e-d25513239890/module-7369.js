"use strict";
require.d(exports, {
    c: ()=>n
});
class n {
    statusCode;
    reason;
    headers;
    body;
    constructor(e){
        this.statusCode = e.statusCode, this.reason = e.reason, this.headers = e.headers || {}, this.body = e.body;
    }
    static isInstance(e) {
        if (!e) return !1;
        const t = e;
        return "number" == typeof t.statusCode && "object" == typeof t.headers;
    }
}
