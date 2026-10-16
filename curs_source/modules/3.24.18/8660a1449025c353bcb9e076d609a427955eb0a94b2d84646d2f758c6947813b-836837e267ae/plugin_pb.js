import { Fdd, ebr, gei } from "./descriptor_pb.js";
import { Dm, Ude } from "./message.js";
import { Ba, Q_r } from "./proto2.js";
import { E } from "./tslib.es6.js";
var Tei, Wdd, ybr, Sbr, oDo, Eei, Gdd;
export { Eei, Gdd, Sbr, Tei, Wdd, oDo, ybr };
var __wakaru_rIy_initialized = false;
export function rIy() {
if (__wakaru_rIy_initialized) return;
__wakaru_rIy_initialized = true;
"use strict";
E(), Ude(), Q_r(), gei(), Tei = class iZi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new iZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new iZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new iZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(iZi, e, n);
    }
}, Tei.runtime = Ba, Tei.typeName = "google.protobuf.compiler.Version", Tei.fields = Ba.util.newFieldList(()=>[
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
    ]), Wdd = Tei, ybr = class rZi extends Dm {
    constructor(e){
        super(), this.fileToGenerate = [], this.protoFile = [], this.sourceFileDescriptors = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new rZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new rZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new rZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(rZi, e, n);
    }
}, ybr.runtime = Ba, ybr.typeName = "google.protobuf.compiler.CodeGeneratorRequest", ybr.fields = Ba.util.newFieldList(()=>[
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
            T: ebr,
            repeated: !0
        },
        {
            no: 17,
            name: "source_file_descriptors",
            kind: "message",
            T: ebr,
            repeated: !0
        },
        {
            no: 3,
            name: "compiler_version",
            kind: "message",
            T: Wdd,
            opt: !0
        }
    ]), Sbr = class sZi extends Dm {
    constructor(e){
        super(), this.file = [], Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new sZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new sZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new sZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(sZi, e, n);
    }
}, Sbr.runtime = Ba, Sbr.typeName = "google.protobuf.compiler.CodeGeneratorResponse", Sbr.fields = Ba.util.newFieldList(()=>[
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
            T: Gdd,
            repeated: !0
        }
    ]), oDo = ((t)=>(t[t.NONE = 0] = "NONE", t[t.PROTO3_OPTIONAL = 1] = "PROTO3_OPTIONAL", t[t.SUPPORTS_EDITIONS = 2] = "SUPPORTS_EDITIONS", t))(oDo || {}), Ba.util.setEnumType(oDo, "google.protobuf.compiler.CodeGeneratorResponse.Feature", [
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
]), Eei = class oZi extends Dm {
    constructor(e){
        super(), Ba.util.initPartial(e, this);
    }
    static fromBinary(e, n) {
        return new oZi().fromBinary(e, n);
    }
    static fromJson(e, n) {
        return new oZi().fromJson(e, n);
    }
    static fromJsonString(e, n) {
        return new oZi().fromJsonString(e, n);
    }
    static equals(e, n) {
        return Ba.util.equals(oZi, e, n);
    }
}, Eei.runtime = Ba, Eei.typeName = "google.protobuf.compiler.CodeGeneratorResponse.File", Eei.fields = Ba.util.newFieldList(()=>[
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
            T: Fdd,
            opt: !0
        }
    ]), Gdd = Eei;

}
