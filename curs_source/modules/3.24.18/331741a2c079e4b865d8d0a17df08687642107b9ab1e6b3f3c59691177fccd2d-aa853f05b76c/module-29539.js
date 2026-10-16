Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.ValidationException = exports.TooManyRequestsError = exports.InternalServerException = exports.AccessDeniedException = void 0;
const o = require("./module-6486.js");
class r extends o.SigninServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    constructor(e){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, r.prototype), this.error = e.error;
    }
}
exports.AccessDeniedException = r;
class i extends o.SigninServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    constructor(e){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...e
        }), Object.setPrototypeOf(this, i.prototype), this.error = e.error;
    }
}
exports.InternalServerException = i;
class s extends o.SigninServiceException {
    name = "TooManyRequestsError";
    $fault = "client";
    error;
    constructor(e){
        super({
            name: "TooManyRequestsError",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, s.prototype), this.error = e.error;
    }
}
exports.TooManyRequestsError = s;
class a extends o.SigninServiceException {
    name = "ValidationException";
    $fault = "client";
    error;
    constructor(e){
        super({
            name: "ValidationException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, a.prototype), this.error = e.error;
    }
}
exports.ValidationException = a;
