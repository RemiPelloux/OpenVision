"use strict";
var n = this && this.__createBinding || (Object.create ? function(e, A, t, n) {
    void 0 === n && (n = t);
    var r = Object.getOwnPropertyDescriptor(A, t);
    r && !("get" in r ? !A.__esModule : r.writable || r.configurable) || (r = {
        enumerable: !0,
        get: function() {
            return A[t];
        }
    }), Object.defineProperty(e, n, r);
} : function(e, A, t, n) {
    void 0 === n && (n = t), e[n] = A[t];
}), r = this && this.__exportStar || function(e, A) {
    for(var t in e)"default" === t || Object.prototype.hasOwnProperty.call(A, t) || n(A, e, t);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = exports.createRegistryFromDescriptors = exports.createRegistry = exports.createDescriptorSet = exports.BinaryReader = exports.BinaryWriter = exports.WireType = exports.MethodIdempotency = exports.MethodKind = exports.clearExtension = exports.hasExtension = exports.setExtension = exports.getExtension = exports.ScalarType = exports.LongType = exports.isMessage = exports.Message = exports.codegenInfo = exports.protoDelimited = exports.protoBase64 = exports.protoInt64 = exports.protoDouble = exports.proto2 = exports.proto3 = void 0;
var o = require("./module-7599.js");
Object.defineProperty(exports, "proto3", {
    enumerable: !0,
    get: function() {
        return o.proto3;
    }
});
var s = require("./module-3672.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return s.proto2;
    }
});
var a = require("./module-3492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return a.protoDouble;
    }
});
var i = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return i.protoInt64;
    }
});
var c = require("./module-9526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return c.protoBase64;
    }
});
var l = require("./module-5638.js");
Object.defineProperty(exports, "protoDelimited", {
    enumerable: !0,
    get: function() {
        return l.protoDelimited;
    }
});
var g = require("./module-6596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return g.codegenInfo;
    }
});
var E = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return E.Message;
    }
});
var u = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return u.isMessage;
    }
});
var d = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return d.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return d.ScalarType;
    }
});
var I = require("./module-1771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return I.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return I.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return I.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return I.clearExtension;
    }
});
var h = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return h.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return h.MethodIdempotency;
    }
});
var Q = require("./module-8831.js");
Object.defineProperty(exports, "WireType", {
    enumerable: !0,
    get: function() {
        return Q.WireType;
    }
}), Object.defineProperty(exports, "BinaryWriter", {
    enumerable: !0,
    get: function() {
        return Q.BinaryWriter;
    }
}), Object.defineProperty(exports, "BinaryReader", {
    enumerable: !0,
    get: function() {
        return Q.BinaryReader;
    }
});
var m = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return m.createDescriptorSet;
    }
});
var C = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return C.createRegistry;
    }
});
var B = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return B.createRegistryFromDescriptors;
    }
});
var p = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return p.toPlainMessage;
    }
}), r(require("./module-5636.js"), exports), r(require("./module-4443.js"), exports), r(require("./module-8245.js"), exports), r(require("./module-7374.js"), exports), r(require("./module-1193.js"), exports), r(require("./module-7668.js"), exports), r(require("./module-970.js"), exports), r(require("./module-7206.js"), exports), r(require("./module-8814.js"), exports), r(require("./module-7907.js"), exports), r(require("./module-3469.js"), exports), r(require("./module-8021.js"), exports);
