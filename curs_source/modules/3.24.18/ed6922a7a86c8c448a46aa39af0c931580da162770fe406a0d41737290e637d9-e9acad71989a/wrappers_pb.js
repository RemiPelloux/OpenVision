import { IJ, yg } from "./message.js";
import { AKe, _5 } from "./proto-int64.js";
import { hfe, k } from "./proto3.js";
import { Lc, jwe } from "./scalar.js";
import { x } from "./tslib.es6.js";
var v3t, _3t, b3t, y3t, S3t, k3t, w3t, C3t, T3t;
export { C3t, S3t, T3t, _3t, b3t, k3t, v3t, w3t, y3t };
var __wakaru_sVc_initialized = false;
export function sVc() {
if (__wakaru_sVc_initialized) return;
__wakaru_sVc_initialized = true;
"use strict";
x(), IJ(), hfe(), jwe(), AKe(), v3t = class NZn extends yg {
    constructor(t){
        super(), this.value = 0, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.DOUBLE, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.DOUBLE, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new NZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new NZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new NZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(NZn, t, n);
    }
}, v3t.runtime = k, v3t.typeName = "google.protobuf.DoubleValue", v3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), v3t.fieldWrapper = {
    wrapField (e) {
        return new v3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, _3t = class OZn extends yg {
    constructor(t){
        super(), this.value = 0, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.FLOAT, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.FLOAT, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new OZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new OZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new OZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(OZn, t, n);
    }
}, _3t.runtime = k, _3t.typeName = "google.protobuf.FloatValue", _3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), _3t.fieldWrapper = {
    wrapField (e) {
        return new _3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, b3t = class FZn extends yg {
    constructor(t){
        super(), this.value = _5.zero, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.INT64, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.INT64, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new FZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new FZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new FZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(FZn, t, n);
    }
}, b3t.runtime = k, b3t.typeName = "google.protobuf.Int64Value", b3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), b3t.fieldWrapper = {
    wrapField (e) {
        return new b3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, y3t = class BZn extends yg {
    constructor(t){
        super(), this.value = _5.zero, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.UINT64, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.UINT64, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new BZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new BZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new BZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(BZn, t, n);
    }
}, y3t.runtime = k, y3t.typeName = "google.protobuf.UInt64Value", y3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), y3t.fieldWrapper = {
    wrapField (e) {
        return new y3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, S3t = class UZn extends yg {
    constructor(t){
        super(), this.value = 0, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.INT32, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.INT32, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new UZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new UZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new UZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(UZn, t, n);
    }
}, S3t.runtime = k, S3t.typeName = "google.protobuf.Int32Value", S3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), S3t.fieldWrapper = {
    wrapField (e) {
        return new S3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, k3t = class $Zn extends yg {
    constructor(t){
        super(), this.value = 0, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.UINT32, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.UINT32, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new $Zn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new $Zn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new $Zn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals($Zn, t, n);
    }
}, k3t.runtime = k, k3t.typeName = "google.protobuf.UInt32Value", k3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), k3t.fieldWrapper = {
    wrapField (e) {
        return new k3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, w3t = class HZn extends yg {
    constructor(t){
        super(), this.value = !1, k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.BOOL, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.BOOL, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new HZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new HZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new HZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(HZn, t, n);
    }
}, w3t.runtime = k, w3t.typeName = "google.protobuf.BoolValue", w3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), w3t.fieldWrapper = {
    wrapField (e) {
        return new w3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, C3t = class WZn extends yg {
    constructor(t){
        super(), this.value = "", k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.STRING, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.STRING, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new WZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new WZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new WZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(WZn, t, n);
    }
}, C3t.runtime = k, C3t.typeName = "google.protobuf.StringValue", C3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), C3t.fieldWrapper = {
    wrapField (e) {
        return new C3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
}, T3t = class GZn extends yg {
    constructor(t){
        super(), this.value = new Uint8Array(0), k.util.initPartial(t, this);
    }
    toJson(t) {
        return k.json.writeScalar(Lc.BYTES, this.value, !0);
    }
    fromJson(t, n) {
        try {
            this.value = k.json.readScalar(Lc.BYTES, t);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(t, n) {
        return new GZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new GZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new GZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return k.util.equals(GZn, t, n);
    }
}, T3t.runtime = k, T3t.typeName = "google.protobuf.BytesValue", T3t.fields = k.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), T3t.fieldWrapper = {
    wrapField (e) {
        return new T3t({
            value: e
        });
    },
    unwrapField (e) {
        return e.value;
    }
};

}
