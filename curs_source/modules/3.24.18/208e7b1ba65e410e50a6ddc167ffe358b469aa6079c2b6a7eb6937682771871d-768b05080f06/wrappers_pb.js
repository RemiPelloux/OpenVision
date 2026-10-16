import { $r, fe } from "./message.js";
import { In, ho } from "./proto-int64.js";
import { $s, c } from "./proto3.js";
import { V, pi } from "./scalar.js";
import { h } from "./tslib.es6.js";
var Jd, Xd, Qd, Zd, eu, tu, nu, ru, su;
export { Jd, Qd, Xd, Zd, eu, nu, ru, su, tu };
var __wakaru_wH_initialized = false;
export function wH() {
if (__wakaru_wH_initialized) return;
__wakaru_wH_initialized = true;
"use strict";
h(), $r(), $s(), pi(), ho(), Jd = class Y_ extends fe {
    constructor(t){
        super(), this.value = 0, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.DOUBLE, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.DOUBLE, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new Y_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new Y_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new Y_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(Y_, t, n);
    }
}, Jd.runtime = c, Jd.typeName = "google.protobuf.DoubleValue", Jd.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), Jd.fieldWrapper = {
    wrapField (e) {
        return new Jd({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, Xd = class J_ extends fe {
    constructor(t){
        super(), this.value = 0, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.FLOAT, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.FLOAT, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new J_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new J_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new J_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(J_, t, n);
    }
}, Xd.runtime = c, Xd.typeName = "google.protobuf.FloatValue", Xd.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), Xd.fieldWrapper = {
    wrapField (e) {
        return new Xd({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, Qd = class X_ extends fe {
    constructor(t){
        super(), this.value = In.zero, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.INT64, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.INT64, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new X_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new X_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new X_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(X_, t, n);
    }
}, Qd.runtime = c, Qd.typeName = "google.protobuf.Int64Value", Qd.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), Qd.fieldWrapper = {
    wrapField (e) {
        return new Qd({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, Zd = class Q_ extends fe {
    constructor(t){
        super(), this.value = In.zero, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.UINT64, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.UINT64, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new Q_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new Q_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new Q_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(Q_, t, n);
    }
}, Zd.runtime = c, Zd.typeName = "google.protobuf.UInt64Value", Zd.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), Zd.fieldWrapper = {
    wrapField (e) {
        return new Zd({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, eu = class Z_ extends fe {
    constructor(t){
        super(), this.value = 0, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.INT32, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.INT32, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new Z_().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new Z_().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new Z_().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(Z_, t, n);
    }
}, eu.runtime = c, eu.typeName = "google.protobuf.Int32Value", eu.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), eu.fieldWrapper = {
    wrapField (e) {
        return new eu({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, tu = class ev extends fe {
    constructor(t){
        super(), this.value = 0, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.UINT32, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.UINT32, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new ev().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new ev().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new ev().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(ev, t, n);
    }
}, tu.runtime = c, tu.typeName = "google.protobuf.UInt32Value", tu.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), tu.fieldWrapper = {
    wrapField (e) {
        return new tu({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, nu = class tv extends fe {
    constructor(t){
        super(), this.value = !1, c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.BOOL, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.BOOL, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new tv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new tv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new tv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(tv, t, n);
    }
}, nu.runtime = c, nu.typeName = "google.protobuf.BoolValue", nu.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), nu.fieldWrapper = {
    wrapField (e) {
        return new nu({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, ru = class nv extends fe {
    constructor(t){
        super(), this.value = "", c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.STRING, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.STRING, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new nv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new nv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new nv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(nv, t, n);
    }
}, ru.runtime = c, ru.typeName = "google.protobuf.StringValue", ru.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), ru.fieldWrapper = {
    wrapField (e) {
        return new ru({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, su = class rv extends fe {
    constructor(t){
        super(), this.value = new Uint8Array(0), c.util.initPartial(t, this);
    }
    toJson(t) {
        return c.json.writeScalar(V.BYTES, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = c.json.readScalar(V.BYTES, t);
        } catch (r) {
            let s = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw r instanceof Error && r.message.length > 0 && (s += `: ${r.message}`), new Error(s);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new rv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new rv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new rv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return c.util.equals(rv, t, n);
    }
}, su.runtime = c, su.typeName = "google.protobuf.BytesValue", su.fields = c.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), su.fieldWrapper = {
    wrapField (e) {
        return new su({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
};

}
