import { Dm, Ude } from "./message.js";
import { R_t, X9 } from "./proto-int64.js";
import { bAe, x } from "./proto3.js";
import { Uc, e5e } from "./scalar.js";
import { E } from "./tslib.es6.js";
var _pn, bpn, ypn, Spn, kpn, wpn, Cpn, Tpn, Epn;
export { Cpn, Epn, Spn, Tpn, _pn, bpn, kpn, wpn, ypn };
var __wakaru_Hdd_initialized = false;
export function Hdd() {
if (__wakaru_Hdd_initialized) return;
__wakaru_Hdd_initialized = true;
"use strict";
E(), Ude(), bAe(), e5e(), R_t(), _pn = class KXi extends Dm {
    constructor(e){
        super(), this.value = 0, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.DOUBLE, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.DOUBLE, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.DoubleValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new KXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new KXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new KXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(KXi, e, n);
    }
}, _pn.runtime = x, _pn.typeName = "google.protobuf.DoubleValue", _pn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 1
        }
    ]), _pn.fieldWrapper = {
    wrapField (t) {
        return new _pn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, bpn = class YXi extends Dm {
    constructor(e){
        super(), this.value = 0, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.FLOAT, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.FLOAT, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.FloatValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new YXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new YXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new YXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(YXi, e, n);
    }
}, bpn.runtime = x, bpn.typeName = "google.protobuf.FloatValue", bpn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 2
        }
    ]), bpn.fieldWrapper = {
    wrapField (t) {
        return new bpn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, ypn = class XXi extends Dm {
    constructor(e){
        super(), this.value = X9.zero, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.INT64, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.INT64, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.Int64Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new XXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new XXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new XXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(XXi, e, n);
    }
}, ypn.runtime = x, ypn.typeName = "google.protobuf.Int64Value", ypn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 3
        }
    ]), ypn.fieldWrapper = {
    wrapField (t) {
        return new ypn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, Spn = class ZXi extends Dm {
    constructor(e){
        super(), this.value = X9.zero, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.UINT64, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.UINT64, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.UInt64Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new ZXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new ZXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new ZXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(ZXi, e, n);
    }
}, Spn.runtime = x, Spn.typeName = "google.protobuf.UInt64Value", Spn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 4
        }
    ]), Spn.fieldWrapper = {
    wrapField (t) {
        return new Spn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, kpn = class QXi extends Dm {
    constructor(e){
        super(), this.value = 0, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.INT32, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.INT32, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.Int32Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new QXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new QXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new QXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(QXi, e, n);
    }
}, kpn.runtime = x, kpn.typeName = "google.protobuf.Int32Value", kpn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 5
        }
    ]), kpn.fieldWrapper = {
    wrapField (t) {
        return new kpn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, wpn = class JXi extends Dm {
    constructor(e){
        super(), this.value = 0, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.UINT32, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.UINT32, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.UInt32Value from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new JXi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new JXi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new JXi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(JXi, e, n);
    }
}, wpn.runtime = x, wpn.typeName = "google.protobuf.UInt32Value", wpn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 13
        }
    ]), wpn.fieldWrapper = {
    wrapField (t) {
        return new wpn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, Cpn = class eZi extends Dm {
    constructor(e){
        super(), this.value = !1, x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.BOOL, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.BOOL, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.BoolValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new eZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new eZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new eZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(eZi, e, n);
    }
}, Cpn.runtime = x, Cpn.typeName = "google.protobuf.BoolValue", Cpn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 8
        }
    ]), Cpn.fieldWrapper = {
    wrapField (t) {
        return new Cpn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, Tpn = class tZi extends Dm {
    constructor(e){
        super(), this.value = "", x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.STRING, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.STRING, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.StringValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new tZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new tZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new tZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(tZi, e, n);
    }
}, Tpn.runtime = x, Tpn.typeName = "google.protobuf.StringValue", Tpn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 9
        }
    ]), Tpn.fieldWrapper = {
    wrapField (t) {
        return new Tpn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
}, Epn = class nZi extends Dm {
    constructor(e){
        super(), this.value = new Uint8Array(0), x.util.initPartial(e, this);
    }
    toJson(e) {
        return x.json.writeScalar(Uc.BYTES, this.value, !0);
    }
    fromJson(e, n) {
        try {
            this.value = x.json.readScalar(Uc.BYTES, e);
        } catch (i) {
            let r = 'cannot decode message google.protobuf.BytesValue from JSON"';
            throw i instanceof Error && i.message.length > 0 && (r += `: ${i.message}`), new Error(r);
        }
        return this;
    }
    static fromBinary(e, n) {
        return new nZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new nZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new nZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return x.util.equals(nZi, e, n);
    }
}, Epn.runtime = x, Epn.typeName = "google.protobuf.BytesValue", Epn.fields = x.util.newFieldList(()=>[
        {
            no: 1,
            name: "value",
            kind: "scalar",
            T: 12
        }
    ]), Epn.fieldWrapper = {
    wrapField (t) {
        return new Epn({
            value: t
        });
    },
    unwrapField (t) {
        return t.value;
    }
};

}
