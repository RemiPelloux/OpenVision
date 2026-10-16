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
var s = require("./module-27599.js");
Object.defineProperty(exports, "proto3", {
    enumerable: !0,
    get: function() {
        return s.proto3;
    }
});
var i = require("./module-83672.js");
Object.defineProperty(exports, "proto2", {
    enumerable: !0,
    get: function() {
        return i.proto2;
    }
});
var a = require("./module-23492.js");
Object.defineProperty(exports, "protoDouble", {
    enumerable: !0,
    get: function() {
        return a.protoDouble;
    }
});
var l = require("./module-11498.js");
Object.defineProperty(exports, "protoInt64", {
    enumerable: !0,
    get: function() {
        return l.protoInt64;
    }
});
var c = require("./module-19526.js");
Object.defineProperty(exports, "protoBase64", {
    enumerable: !0,
    get: function() {
        return c.protoBase64;
    }
});
var u = require("./module-15638.js");
Object.defineProperty(exports, "protoDelimited", {
    enumerable: !0,
    get: function() {
        return u.protoDelimited;
    }
});
var d = require("./module-46596.js");
Object.defineProperty(exports, "codegenInfo", {
    enumerable: !0,
    get: function() {
        return d.codegenInfo;
    }
});
var p = require("./module-24193.js");
Object.defineProperty(exports, "Message", {
    enumerable: !0,
    get: function() {
        return p.Message;
    }
});
var h = require("./module-62706.js");
Object.defineProperty(exports, "isMessage", {
    enumerable: !0,
    get: function() {
        return h.isMessage;
    }
});
var m = require("./module-3408.js");
Object.defineProperty(exports, "LongType", {
    enumerable: !0,
    get: function() {
        return m.LongType;
    }
}), Object.defineProperty(exports, "ScalarType", {
    enumerable: !0,
    get: function() {
        return m.ScalarType;
    }
});
var f = require("./module-11771.js");
Object.defineProperty(exports, "getExtension", {
    enumerable: !0,
    get: function() {
        return f.getExtension;
    }
}), Object.defineProperty(exports, "setExtension", {
    enumerable: !0,
    get: function() {
        return f.setExtension;
    }
}), Object.defineProperty(exports, "hasExtension", {
    enumerable: !0,
    get: function() {
        return f.hasExtension;
    }
}), Object.defineProperty(exports, "clearExtension", {
    enumerable: !0,
    get: function() {
        return f.clearExtension;
    }
});
var g = require("./module-22422.js");
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
var y = require("./module-18831.js");
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
var v = require("./module-51101.js");
Object.defineProperty(exports, "createDescriptorSet", {
    enumerable: !0,
    get: function() {
        return v.createDescriptorSet;
    }
});
var w = require("./module-54942.js");
Object.defineProperty(exports, "createRegistry", {
    enumerable: !0,
    get: function() {
        return w.createRegistry;
    }
});
var b = require("./module-18269.js");
Object.defineProperty(exports, "createRegistryFromDescriptors", {
    enumerable: !0,
    get: function() {
        return b.createRegistryFromDescriptors;
    }
});
var _ = require("./module-60174.js");
Object.defineProperty(exports, "toPlainMessage", {
    enumerable: !0,
    get: function() {
        return _.toPlainMessage;
    }
}), o(require("./module-75636.js"), exports), o(require("./module-34443.js"), exports), o(require("./module-48245.js"), exports), o(require("./module-27374.js"), exports), o(require("./module-11193.js"), exports), o(require("./module-27668.js"), exports), o(require("./module-60970.js"), exports), o(require("./module-77206.js"), exports), o(require("./module-78814.js"), exports), o(require("./module-87907.js"), exports), o(require("./module-73469.js"), exports), o(require("./module-28021.js"), exports);
