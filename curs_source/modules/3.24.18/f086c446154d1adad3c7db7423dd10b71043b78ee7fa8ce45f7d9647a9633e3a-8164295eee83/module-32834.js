Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.STSServiceException = exports.__ServiceException = void 0;
const i = require(90099);
Object.defineProperty(exports, "__ServiceException", {
    enumerable: !0,
    get: function() {
        return i.ServiceException;
    }
});
class o extends i.ServiceException {
    constructor(e){
        super(e), Object.setPrototypeOf(this, o.prototype);
    }
}
exports.STSServiceException = o;
