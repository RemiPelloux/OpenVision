Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.IDPCommunicationErrorException = exports.InvalidIdentityTokenException = exports.IDPRejectedClaimException = exports.RegionDisabledException = exports.PackedPolicyTooLargeException = exports.MalformedPolicyDocumentException = exports.ExpiredTokenException = void 0;
const i = require("./module-32834.js");
class o extends i.STSServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    constructor(e){
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, o.prototype);
    }
}
exports.ExpiredTokenException = o;
class r extends i.STSServiceException {
    name = "MalformedPolicyDocumentException";
    $fault = "client";
    constructor(e){
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, r.prototype);
    }
}
exports.MalformedPolicyDocumentException = r;
class s extends i.STSServiceException {
    name = "PackedPolicyTooLargeException";
    $fault = "client";
    constructor(e){
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, s.prototype);
    }
}
exports.PackedPolicyTooLargeException = s;
class a extends i.STSServiceException {
    name = "RegionDisabledException";
    $fault = "client";
    constructor(e){
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, a.prototype);
    }
}
exports.RegionDisabledException = a;
class c extends i.STSServiceException {
    name = "IDPRejectedClaimException";
    $fault = "client";
    constructor(e){
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, c.prototype);
    }
}
exports.IDPRejectedClaimException = c;
class l extends i.STSServiceException {
    name = "InvalidIdentityTokenException";
    $fault = "client";
    constructor(e){
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, l.prototype);
    }
}
exports.InvalidIdentityTokenException = l;
class d extends i.STSServiceException {
    name = "IDPCommunicationErrorException";
    $fault = "client";
    $retryable = {};
    constructor(e){
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, d.prototype);
    }
}
exports.IDPCommunicationErrorException = d;
