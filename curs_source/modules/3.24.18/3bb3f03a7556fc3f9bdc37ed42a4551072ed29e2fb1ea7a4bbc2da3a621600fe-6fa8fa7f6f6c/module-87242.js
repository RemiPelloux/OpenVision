Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.UnsupportedGrantTypeException = exports.UnauthorizedClientException = exports.SlowDownException = exports.InvalidScopeException = exports.InvalidRequestException = exports.InvalidGrantException = exports.InvalidClientException = exports.InternalServerException = exports.ExpiredTokenException = exports.AuthorizationPendingException = exports.AccessDeniedException = void 0;
const o = require("./module-47647.js");
class n extends o.SSOOIDCServiceException {
    name = "AccessDeniedException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e){
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, n.prototype), this.error = e.error, this.reason = e.reason, this.error_description = e.error_description;
    }
}
exports.AccessDeniedException = n;
class i extends o.SSOOIDCServiceException {
    name = "AuthorizationPendingException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, i.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.AuthorizationPendingException = i;
class s extends o.SSOOIDCServiceException {
    name = "ExpiredTokenException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, s.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.ExpiredTokenException = s;
class c extends o.SSOOIDCServiceException {
    name = "InternalServerException";
    $fault = "server";
    error;
    error_description;
    constructor(e){
        super({
            name: "InternalServerException",
            $fault: "server",
            ...e
        }), Object.setPrototypeOf(this, c.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.InternalServerException = c;
class a extends o.SSOOIDCServiceException {
    name = "InvalidClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, a.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.InvalidClientException = a;
class p extends o.SSOOIDCServiceException {
    name = "InvalidGrantException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, p.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.InvalidGrantException = p;
class d extends o.SSOOIDCServiceException {
    name = "InvalidRequestException";
    $fault = "client";
    error;
    reason;
    error_description;
    constructor(e){
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, d.prototype), this.error = e.error, this.reason = e.reason, this.error_description = e.error_description;
    }
}
exports.InvalidRequestException = d;
class l extends o.SSOOIDCServiceException {
    name = "InvalidScopeException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, l.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.InvalidScopeException = l;
class u extends o.SSOOIDCServiceException {
    name = "SlowDownException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "SlowDownException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, u.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.SlowDownException = u;
class h extends o.SSOOIDCServiceException {
    name = "UnauthorizedClientException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, h.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.UnauthorizedClientException = h;
class E extends o.SSOOIDCServiceException {
    name = "UnsupportedGrantTypeException";
    $fault = "client";
    error;
    error_description;
    constructor(e){
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...e
        }), Object.setPrototypeOf(this, E.prototype), this.error = e.error, this.error_description = e.error_description;
    }
}
exports.UnsupportedGrantTypeException = E;
