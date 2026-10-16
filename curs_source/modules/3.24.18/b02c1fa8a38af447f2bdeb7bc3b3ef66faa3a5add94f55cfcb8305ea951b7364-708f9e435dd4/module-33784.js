Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.SSOServiceException = exports.__ServiceException = void 0;
const n = require(90099);
Object.defineProperty(exports, "__ServiceException", {
    enumerable: !0,
    get: function() {
        return n.ServiceException;
    }
});
class r extends n.ServiceException {
    constructor(e){
        super(e), Object.setPrototypeOf(this, r.prototype);
    }
}
exports.SSOServiceException = r;
