"use strict";
var n = this && this.__createBinding || (Object.create ? function(e, t, A, n) {
    void 0 === n && (n = A);
    var r = Object.getOwnPropertyDescriptor(t, A);
    r && !("get" in r ? !t.__esModule : r.writable || r.configurable) || (r = {
        enumerable: !0,
        get: function() {
            return t[A];
        }
    }), Object.defineProperty(e, n, r);
} : function(e, t, A, n) {
    void 0 === n && (n = A), e[n] = t[A];
}), r = this && this.__exportStar || function(e, t) {
    for(var A in e)"default" === A || Object.prototype.hasOwnProperty.call(t, A) || n(t, e, A);
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
var i = require("./module-3492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return i.protoDouble;
    }
});
var a = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return a.protoInt64;
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
var u = require("./module-6596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return u.codegenInfo;
    }
});
var g = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return g.Message;
    }
});
var E = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return E.isMessage;
    }
});
var h = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return h.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return h.ScalarType;
    }
});
var d = require("./module-1771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return d.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return d.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return d.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return d.clearExtension;
    }
});
var I = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return I.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return I.MethodIdempotency;
    }
});
var B = require("./module-8831.js");
Object.defineProperty(exports, "WireType", {
    enumerable: !0,
    get: function() {
        return B.WireType;
    }
}), Object.defineProperty(exports, "BinaryWriter", {
    enumerable: !0,
    get: function() {
        return B.BinaryWriter;
    }
}), Object.defineProperty(exports, "BinaryReader", {
    enumerable: !0,
    get: function() {
        return B.BinaryReader;
    }
});
var Q = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return Q.createDescriptorSet;
    }
});
var f = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return f.createRegistry;
    }
});
var C = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return C.createRegistryFromDescriptors;
    }
});
var p = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return p.toPlainMessage;
    }
}), r(require("./module-3255.js"), exports), r(require("./module-4443.js"), exports), r(require("./module-8245.js"), exports), r(require("./module-7374.js"), exports), r(require("./module-1193.js"), exports), r(require("./module-7668.js"), exports), r(require("./module-970.js"), exports), r(require("./module-7206.js"), exports), r(require("./module-8814.js"), exports), r(require("./module-7907.js"), exports), r(require("./module-3469.js"), exports), r(require("./module-8021.js"), exports);
