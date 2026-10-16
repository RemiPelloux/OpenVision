import { gH, ny, og } from "./descriptor_pb.js";
import { $r, fe } from "./message.js";
import { P, ey } from "./proto2.js";
import { h } from "./tslib.es6.js";
var gg, EH, yy, wy, HM, fg, bH;
export { EH, HM, bH, fg, gg, wy, yy };
var __wakaru_pHe_initialized = false;
export function pHe() {
if (__wakaru_pHe_initialized) return;
__wakaru_pHe_initialized = true;
"use strict";
h(), $r(), ey(), og(), gg = class sv extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new sv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new sv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new sv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(sv, t, n);
    }
}, gg.runtime = P, gg.typeName = "google.protobuf.compiler.Version", gg.fields = P.util.newFieldList(()=>[
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
    ]), EH = gg, yy = class iv extends fe {
    constructor(t){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new iv().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new iv().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new iv().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(iv, t, n);
    }
}, yy.runtime = P, yy.typeName = "google.protobuf.compiler.CodeGeneratorRequest", yy.fields = P.util.newFieldList(()=>[
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
            T: ny,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: ny,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: EH,
            opt: !0
        }
    ]), wy = class av extends fe {
    constructor(t){
        super(), this.file = [], P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new av().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new av().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new av().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(av, t, n);
    }
}, wy.runtime = P, wy.typeName = "google.protobuf.compiler.CodeGeneratorResponse", wy.fields = P.util.newFieldList(()=>[
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
            T: bH,
            repeated: !0
        }
    ]), HM = ((e)=>(e[e.NONE = 0] = "NONE", e[e.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", e[e.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", e))(HM || {}), P.util.setEnumType(HM, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
]), fg = class ov extends fe {
    constructor(t){
        super(), P.util.initPartial(t, this);
    }
    static fromBinary(t, n) {
        return new ov().fromBinary(t, n);
    }
    static fromJson(t, n) {
        return new ov().fromJson(t, n);
    }
    static fromJsonString(t, n) {
        return new ov().fromJsonString(t, n);
    }
    static equals(t, n) {
        return P.util.equals(ov, t, n);
    }
}, fg.runtime = P, fg.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", fg.fields = P.util.newFieldList(()=>[
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
            T: gH,
            opt: !0
        }
    ]), bH = fg;

}
