var s = this && this.__createBinding || (Object.create ? function(e, a, n, s) {
    void 0 === s && (s = n);
    var o = Object.getOwnPropertyDescriptor(a, n);
    o && !("get" in o ? !a.__esModule : o.writable || o.configurable) || (o = {
        enumerable: !0,
        get: function() {
            return a[n];
        }
    }), Object.defineProperty(e, s, o);
} : function(e, a, n, s) {
    void 0 === s && (s = n), e[s] = a[n];
}), o = this && this.__exportStar || function(e, a) {
    for(var n in e)"default" === n || Object.prototype.hasOwnProperty.call(a, n) || s(a, e, n);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = exports.createRegistryFromDescriptors = exports.createRegistry = exports.createDescriptorSet = exports.BinaryReader = exports.BinaryWriter = exports.WireType = exports.MethodIdempotency = exports.MethodKind = exports.clearExtension = exports.hasExtension = exports.setExtension = exports.getExtension = exports.ScalarType = exports.LongType = exports.isMessage = exports.Message = exports.codegenInfo = exports.protoDelimited = exports.protoBase64 = exports.protoInt64 = exports.protoDouble = exports.proto2 = exports.proto3 = void 0;
var r = require("./module-7599.js");
Object.defineProperty(exports, "proto3", {
    enumerable: !0,
    get: function() {
        return r.proto3;
    }
});
var t = require("./module-3672.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return t.proto2;
    }
});
var i = require("./module-3492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return i.protoDouble;
    }
});
var m = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return m.protoInt64;
    }
});
var l = require("./module-9526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return l.protoBase64;
    }
});
var d = require("./module-5638.js");
Object.defineProperty(exports, "protoDelimited", {
    enumerable: !0,
    get: function() {
        return d.protoDelimited;
    }
});
var c = require("./module-6596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return c.codegenInfo;
    }
});
var T = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return T.Message;
    }
});
var p = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return p.isMessage;
    }
});
var _ = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return _.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return _.ScalarType;
    }
});
var k = require("./module-1771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return k.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return k.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return k.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return k.clearExtension;
    }
});
var u = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return u.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return u.MethodIdempotency;
    }
});
var g = require("./module-8831.js");
Object.defineProperty(exports, "WireType", {
    enumerable: !0,
    get: function() {
        return g.WireType;
    }
}), Object.defineProperty(exports, "BinaryWriter", {
    enumerable: !0,
    get: function() {
        return g.BinaryWriter;
    }
}), Object.defineProperty(exports, "BinaryReader", {
    enumerable: !0,
    get: function() {
        return g.BinaryReader;
    }
});
var E = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return E.createDescriptorSet;
    }
});
var v = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return v.createRegistry;
    }
});
var y = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return y.createRegistryFromDescriptors;
    }
});
var S = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return S.toPlainMessage;
    }
}), o(require("./module-5636.js"), exports), o(require("./module-4443.js"), exports), o(require("./module-8245.js"), exports), o(require("./module-7374.js"), exports), o(require("./module-1193.js"), exports), o(require("./module-7668.js"), exports), o(require("./module-970.js"), exports), o(require("./module-7206.js"), exports), o(require("./module-8814.js"), exports), o(require("./module-7907.js"), exports), o(require("./module-3469.js"), exports), o(require("./module-8021.js"), exports);
