import { bSi, eVc, sbn } from "./descriptor_pb.js";
import { IJ, yg } from "./message.js";
import { Co, vSi } from "./proto2.js";
import { x } from "./tslib.es6.js";
var gbn, oVc, USi, $Si, wss, fbn, aVc;
export { $Si, USi, aVc, fbn, gbn, oVc, wss };
var __wakaru_Mwg_initialized = false;
export function Mwg() {
if (__wakaru_Mwg_initialized) return;
__wakaru_Mwg_initialized = true;
"use strict";
x(), IJ(), vSi(), sbn(), gbn = class VZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new VZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new VZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new VZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(VZn, t, n);
    }
}, gbn.runtime = Co, gbn.typeName = "google.protobuf.compiler.Version", gbn.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "major",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 2,
            name: "minor",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 3,
            name: "patch",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9,
            opt: !0
        }
    ]), oVc = gbn, USi = class jZn extends yg {
    constructor(t){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new jZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new jZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new jZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(jZn, t, n);
    }
}, USi.runtime = Co, USi.typeName = "google.protobuf.compiler.CodeGeneratorRequest", USi.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "file_to_generate",
            kind: "scalar",
            T: 9,
            repeated: !0
        },
        {
            no: 2,
            name: "parameter",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "proto_file",
            kind: "message",
            T: bSi,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: bSi,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: oVc,
            opt: !0
        }
    ]), $Si = class qZn extends yg {
    constructor(t){
        super(), this.file = [], Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new qZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new qZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new qZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(qZn, t, n);
    }
}, $Si.runtime = Co, $Si.typeName = "google.protobuf.compiler.CodeGeneratorResponse", $Si.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "supported_features",
            kind: "scalar",
            T: 4,
            opt: !0
        },
        {
            no: 3,
            name: "minimum_edition",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 4,
            name: "maximum_edition",
            kind: "scalar",
            T: 5,
            opt: !0
        },
        {
            no: 15,
            name: "file",
            kind: "message",
            T: aVc,
            repeated: !0
        }
    ]), wss = ((e)=>(e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(wss || {}), Co.util.setEnumType(wss, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
    {
        no: 0,
        name: "FEATURE_NONE"
    },
    {
        no: 1,
        name: "FEATURE_PROTO3_OPTIONAL"
    },
    {
        no: 2,
        name: "FEATURE_SUPPORTS_EDITIONS"
    }
]), fbn = class zZn extends yg {
    constructor(t){
        super(), Co.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new zZn().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new zZn().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new zZn().fromJsonString(t, n);
    }
    static equals(t, n) {
        return Co.util.equals(zZn, t, n);
    }
}, fbn.runtime = Co, fbn.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", fbn.fields = Co.util.newFieldList(()=>[
        {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 2,
            name: "insertion_point",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 15,
            name: "content",
            kind: "scalar",
            T: 9,
            opt: !0
        },
        {
            no: 16,
            name: "generated_code_info",
            kind: "message",
            T: eVc,
            opt: !0
        }
    ]), aVc = fbn;

}
