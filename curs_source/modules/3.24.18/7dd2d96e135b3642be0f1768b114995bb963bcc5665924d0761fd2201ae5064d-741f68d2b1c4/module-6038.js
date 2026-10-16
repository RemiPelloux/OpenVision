"use strict";
var a = this && this.__createBinding || (Object.create ? function(e, n, t, a) {
    void 0 === a && (a = t);
    var s = Object.getOwnPropertyDescriptor(n, t);
    s && !("get" in s ? !n.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return n[t];
        }
    }), Object.defineProperty(e, a, s);
} : function(e, n, t, a) {
    void 0 === a && (a = t), e[a] = n[t];
}), s = this && this.__exportStar || function(e, n) {
    for(var t in e)"default" === t || Object.prototype.hasOwnProperty.call(n, t) || a(n, e, t);
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
var A = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return A.protoInt64;
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
var d = require("./module-6596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return d.codegenInfo;
    }
});
var m = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return m.Message;
    }
});
var u = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return u.isMessage;
    }
});
var g = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return g.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return g.ScalarType;
    }
});
var p = require("./module-1771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return p.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return p.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return p.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return p.clearExtension;
    }
});
var E = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return E.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return E.MethodIdempotency;
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
var T = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return T.createDescriptorSet;
    }
});
var k = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return k.createRegistry;
    }
});
var f = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return f.createRegistryFromDescriptors;
    }
});
var _ = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return _.toPlainMessage;
    }
}), s(require("./module-5636.js"), exports), s(require("./module-4443.js"), exports), s(require("./module-8245.js"), exports), s(require("./module-7374.js"), exports), s(require("./module-1193.js"), exports), s(require("./module-7668.js"), exports), s(require("./module-970.js"), exports), s(require("./module-7206.js"), exports), s(require("./module-8814.js"), exports), s(require("./module-7907.js"), exports), s(require("./module-3469.js"), exports), s(require("./module-8021.js"), exports);
