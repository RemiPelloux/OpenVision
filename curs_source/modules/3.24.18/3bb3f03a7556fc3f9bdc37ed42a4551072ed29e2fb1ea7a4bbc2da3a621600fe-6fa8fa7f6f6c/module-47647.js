Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SSOOIDCServiceException = exports.__ServiceException = void 0;
const o = require(90099);
Object.defineProperty(exports, "__ServiceException", {
    enumerable: !0,
    get: function() {
        return o.ServiceException;
    }
});
class n extends o.ServiceException {
    constructor(e){
        super(e), Object.setPrototypeOf(this, n.prototype);
    }
}
exports.SSOOIDCServiceException = n;
