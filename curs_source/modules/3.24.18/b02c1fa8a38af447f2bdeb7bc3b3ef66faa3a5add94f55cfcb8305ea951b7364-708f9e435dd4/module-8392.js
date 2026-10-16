Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UnauthorizedException = exports.TooManyRequestsException = exports.ResourceNotFoundException = exports.InvalidRequestException = void 0;
const n = require("./module-33784.js");
class r extends n.SSOServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    constructor(e){
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, r.prototype);
    }
}
exports.InvalidRequestException = r;
class s extends n.SSOServiceException {
    name = "ResourceNotFoundException";
    $fault = "client";
    constructor(e){
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, s.prototype);
    }
}
exports.ResourceNotFoundException = s;
class i extends n.SSOServiceException {
    name = "TooManyRequestsException";
    $fault = "client";
    constructor(e){
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, i.prototype);
    }
}
exports.TooManyRequestsException = i;
class a extends n.SSOServiceException {
    name = "UnauthorizedException";
    $fault = "client";
    constructor(e){
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, a.prototype);
    }
}
exports.UnauthorizedException = a;
