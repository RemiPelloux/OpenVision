"use strict";
var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
    void 0 === n && (n = r);
    var o = Object.getOwnPropertyDescriptor(t, r);
    o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
        enumerable: !0,
        get: function() {
            return t[r];
        }
    }), Object.defineProperty(e, n, o);
} : function(e, t, r, n) {
    void 0 === n && (n = r), e[n] = t[r];
}), o = this && this.__exportStar || function(e, t) {
    for(var r in e)"default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r);
};
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.toPlainMessage = exports.createRegistryFromDescriptors = exports.createRegistry = exports.createDescriptorSet = exports.BinaryReader = exports.BinaryWriter = exports.WireType = exports.MethodIdempotency = exports.MethodKind = exports.clearExtension = exports.hasExtension = exports.setExtension = exports.getExtension = exports.ScalarType = exports.LongType = exports.isMessage = exports.Message = exports.codegenInfo = exports.protoDelimited = exports.protoBase64 = exports.protoInt64 = exports.protoDouble = exports.proto2 = exports.proto3 = void 0;
var s = require("./module-7599.js");
Object.defineProperty(exports, "proto3", {
    enumerable: !0,
    get: function() {
        return s.proto3;
    }
});
var i = require("./module-3672.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return i.proto2;
    }
});
var a = require("./module-3492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return a.protoDouble;
    }
});
var c = require("./module-1498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return c.protoInt64;
    }
});
var u = require("./module-9526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return u.protoBase64;
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
var p = require("./module-4193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return p.Message;
    }
});
var f = require("./module-2706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return f.isMessage;
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
var m = require("./module-7009.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return m.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return m.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return m.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return m.clearExtension;
    }
});
var g = require("./module-2422.js");
Object.defineProperty(exports, "MethodKind", {
    enumerable: !0,
    get: function() {
        return g.MethodKind;
    }
}), Object.defineProperty(exports, "MethodIdempotency", {
    enumerable: !0,
    get: function() {
        return g.MethodIdempotency;
    }
});
var y = require("./module-8831.js");
Object.defineProperty(exports, "WireType", {
    enumerable: !0,
    get: function() {
        return y.WireType;
    }
}), Object.defineProperty(exports, "BinaryWriter", {
    enumerable: !0,
    get: function() {
        return y.BinaryWriter;
    }
}), Object.defineProperty(exports, "BinaryReader", {
    enumerable: !0,
    get: function() {
        return y.BinaryReader;
    }
});
var _ = require("./module-1101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return _.createDescriptorSet;
    }
});
var v = require("./module-4942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return v.createRegistry;
    }
});
var w = require("./module-8269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return w.createRegistryFromDescriptors;
    }
});
var b = require("./module-174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return b.toPlainMessage;
    }
}), o(require("./module-5636.js"), exports), o(require("./module-4443.js"), exports), o(require("./module-8245.js"), exports), o(require("./module-7374.js"), exports), o(require("./module-1193.js"), exports), o(require("./module-7668.js"), exports), o(require("./module-970.js"), exports), o(require("./module-7206.js"), exports), o(require("./module-8814.js"), exports), o(require("./module-7907.js"), exports), o(require("./module-3469.js"), exports), o(require("./module-8021.js"), exports);
