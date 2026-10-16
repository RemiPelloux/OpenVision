"use strict";
require.r(exports), require.d(exports, {
    Field: ()=>o,
    Fields: ()=>a,
    HttpRequest: ()=>c.K,
    HttpResponse: ()=>l.c,
    getHttpHandlerExtensionConfiguration: ()=>n,
    isValidHostname: ()=>u,
    resolveHttpHandlerRuntimeConfig: ()=>s
});
const n = (e)=>({
        setHttpHandler (t) {
            e.httpHandler = t;
        },
        httpHandler: ()=>e.httpHandler,
        updateHttpClientConfig (t, r) {
            e.httpHandler?.updateHttpClientConfig(t, r);
        },
        httpHandlerConfigs: ()=>e.httpHandler.httpHandlerConfigs()
    }), s = (e)=>({
        httpHandler: e.httpHandler()
    });
var i;
!function(e) {
    e[e.HEADER = 0] = "HEADER", e[e.TRAILER = 1] = "TRAILER";
}(i || (i = {}));
class o {
    name;
    kind;
    values;
    constructor({ name: e, kind: t = i.HEADER, values: r = [] }){
        this.name = e, this.kind = t, this.values = r;
    }
    add(e) {
        this.values.push(e);
    }
    set(e) {
        this.values = e;
    }
    remove(e) {
        this.values = this.values.filter((t)=>t !== e);
    }
    toString() {
        return this.values.map((e)=>e.includes(",") || e.includes(" ") ? `"${e}"` : e).join(", ");
    }
    get() {
        return this.values;
    }
}
class a {
    entries = {};
    encoding;
    constructor({ fields: e = [], encoding: t = "utf-8" }){
        e.forEach(this.setField.bind(this)), this.encoding = t;
    }
    setField(e) {
        this.entries[e.name.toLowerCase()] = e;
    }
    getField(e) {
        return this.entries[e.toLowerCase()];
    }
    removeField(e) {
        delete this.entries[e.toLowerCase()];
    }
    getByType(e) {
        return Object.values(this.entries).filter((t)=>t.kind === e);
    }
}
var c = require(50333), l = require("./module-7369.js");
function u(e) {
    return /^[a-z0-9][a-z0-9\.\-]*[a-z0-9]$/.test(e);
}
