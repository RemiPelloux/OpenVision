var o = this && this.__createBinding || (Object.create ? function(e, a, n, o) {
    void 0 === o && (o = n);
    var s = Object.getOwnPropertyDescriptor(a, n);
    s && !("get" in s ? !a.__esModule : s.writable || s.configurable) || (s = {
        enumerable: !0,
        get: function() {
            return a[n];
        }
    }), Object.defineProperty(e, o, s);
} : function(e, a, n, o) {
    void 0 === o && (o = n), e[o] = a[n];
}), s = this && this.__exportStar || function(e, a) {
    for(var n in e)"default" === n || Object.prototype.hasOwnProperty.call(a, n) || o(a, e, n);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = exports.createRegistryFromDescriptors = exports.createRegistry = exports.createDescriptorSet = exports.BinaryReader = exports.BinaryWriter = exports.WireType = exports.MethodIdempotency = exports.MethodKind = exports.clearExtension = exports.hasExtension = exports.setExtension = exports.getExtension = exports.ScalarType = exports.LongType = exports.isMessage = exports.Message = exports.codegenInfo = exports.protoDelimited = exports.protoBase64 = exports.protoInt64 = exports.protoDouble = exports.proto2 = exports.proto3 = void 0;
var t = require("./module-599.js");
Object.defineProperty(exports, "proto3", {
    enumerable: !0,
    get: function() {
        return t.proto3;
    }
});
var r = require("./module-291.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return r.proto2;
    }
});
var i = require("./module-492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return i.protoDouble;
    }
});
var m = require("./module-498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return m.protoInt64;
    }
});
var l = require("./module-526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return l.protoBase64;
    }
});
var d = require("./module-638.js");
Object.defineProperty(exports, "protoDelimited", {
    enumerable: !0,
    get: function() {
        return d.protoDelimited;
    }
});
var c = require("./module-596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return c.codegenInfo;
    }
});
var T = require("./module-193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return T.Message;
    }
});
var _ = require("./module-706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return _.isMessage;
    }
});
var p = require("./module-408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return p.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return p.ScalarType;
    }
});
var u = require("./module-771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return u.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return u.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return u.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return u.clearExtension;
    }
});
var k = require("./module-422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return k.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return k.MethodIdempotency;
    }
});
var g = require("./module-831.js");
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
var E = require("./module-101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return E.createDescriptorSet;
    }
});
var f = require("./module-942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return f.createRegistry;
    }
});
var N = require("./module-269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return N.createRegistryFromDescriptors;
    }
});
var v = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return v.toPlainMessage;
    }
}), s(require("./module-636.js"), exports), s(require("./module-443.js"), exports), s(require("./module-245.js"), exports), s(require("./module-374.js"), exports), s(require("./module-574.js"), exports), s(require("./module-668.js"), exports), s(require("./module-970.js"), exports), s(require("./module-206.js"), exports), s(require("./module-814.js"), exports), s(require("./module-907.js"), exports), s(require("./module-469.js"), exports), s(require("./module-21.js"), exports);
