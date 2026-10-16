"use strict";
require.d(exports, {
    Im: ()=>a,
    rD: ()=>i
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
class o extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return "aiserver.v1.";
    }
}
class i extends o {
    constructor(e){
        super(), this.clientId = "", this.redirectUris = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new i).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new i).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new i).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(i, e, t);
    }
    static $() {
        return [
            "McpOAuthStoredData|1 refresh_token 9?|2 client_id 9|3 client_secret 9?|4 redirect_uris 9*|5 access_token 9?"
        ];
    }
}
class a extends o {
    constructor(e){
        super(), this.clientId = "", this.redirectUris = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new a).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new a).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new a).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(a, e, t);
    }
    static $() {
        return [
            "McpOAuthStoredClientInfo|1 client_id 9|2 client_secret 9?|3 redirect_uris 9*"
        ];
    }
}
