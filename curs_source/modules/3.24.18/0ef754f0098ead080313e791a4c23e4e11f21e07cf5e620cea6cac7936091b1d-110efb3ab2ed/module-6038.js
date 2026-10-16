"use strict";
var t = this && this.__createBinding || (Object.create ? function(e, a, n, t) {
    void 0 === t && (t = n);
    var s = Object.getOwnPropertyDescriptor(a, n);
    s && !("get" in s ? !a.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return a[n];
        }
    }), Object.defineProperty(e, t, s);
} : function(e, a, n, t) {
    void 0 === t && (t = n), e[t] = a[n];
}), s = this && this.__exportStar || function(e, a) {
    for(var n in e)"default" === n || Object.prototype.hasOwnProperty.call(a, n) || t(a, e, n);
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
var r = require("./module-3672.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return r.proto2;
    }
});
var i = require("./module-3492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return i.protoDouble;
    }
});
var l = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return l.protoInt64;
    }
});
var d = require("./module-9526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return d.protoBase64;
    }
});
var m = require("./module-5638.js");
Object.defineProperty(exports, "protoDelimited", {
    enumerable: !0,
    get: function() {
        return m.protoDelimited;
    }
});
var c = require("./module-6596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return c.codegenInfo;
    }
});
var p = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return p.Message;
    }
});
var A = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return A.isMessage;
    }
});
var u = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return u.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return u.ScalarType;
    }
});
var g = require("./module-1771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return g.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return g.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return g.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return g.clearExtension;
    }
});
var T = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return T.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return T.MethodIdempotency;
    }
});
var h = require("./module-8831.js");
Object.defineProperty(exports, "WireType", {
    enumerable: !0,
    get: function() {
        return h.WireType;
    }
}), Object.defineProperty(exports, "BinaryWriter", {
    enumerable: !0,
    get: function() {
        return h.BinaryWriter;
    }
}), Object.defineProperty(exports, "BinaryReader", {
    enumerable: !0,
    get: function() {
        return h.BinaryReader;
    }
});
var k = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return k.createDescriptorSet;
    }
});
var _ = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return _.createRegistry;
    }
});
var E = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return E.createRegistryFromDescriptors;
    }
});
var f = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return f.toPlainMessage;
    }
}), s(require("./module-5636.js"), exports), s(require("./module-4443.js"), exports), s(require("./module-8245.js"), exports), s(require("./module-7374.js"), exports), s(require("./module-1193.js"), exports), s(require("./module-7668.js"), exports), s(require("./module-970.js"), exports), s(require("./module-7206.js"), exports), s(require("./module-8814.js"), exports), s(require("./module-7907.js"), exports), s(require("./module-3469.js"), exports), s(require("./module-8021.js"), exports);
