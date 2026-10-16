import { require_descriptor_pb } from "../google/protobuf/descriptor_pb.js";
import { require_proto_base64 } from "../proto-base64.js";
var __wakaru_require_feature_set_cache;
export function require_feature_set() {
if (__wakaru_require_feature_set_cache) return __wakaru_require_feature_set_cache;
var exports2 = {};
__wakaru_require_feature_set_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.createFeatureResolver = void 0;
var descriptor_pb_js_1 = require_descriptor_pb();
var proto_base64_js_1 = require_proto_base64();
function getFeatureSetDefaults(options2) {
    return descriptor_pb_js_1.FeatureSetDefaults.fromBinary(proto_base64_js_1.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), options2);
}
function createFeatureResolver(edition, compiledFeatureSetDefaults, serializationOptions) {
    var _a18;
    const fds = compiledFeatureSetDefaults !== null && compiledFeatureSetDefaults !== void 0 ? compiledFeatureSetDefaults : getFeatureSetDefaults(serializationOptions);
    const min = fds.minimumEdition;
    const max = fds.maximumEdition;
    if (min === void 0 || max === void 0 || fds.defaults.some((d)=>d.edition === void 0)) {
        throw new Error("Invalid FeatureSetDefaults");
    }
    if (edition < min) {
        throw new Error(`Edition ${descriptor_pb_js_1.Edition[edition]} is earlier than the minimum supported edition ${descriptor_pb_js_1.Edition[min]}`);
    }
    if (max < edition) {
        throw new Error(`Edition ${descriptor_pb_js_1.Edition[edition]} is later than the maximum supported edition ${descriptor_pb_js_1.Edition[max]}`);
    }
    let highestMatch = void 0;
    for (const c of fds.defaults){
        const e = (_a18 = c.edition) !== null && _a18 !== void 0 ? _a18 : 0;
        if (e > edition) {
            continue;
        }
        if (highestMatch !== void 0 && highestMatch.e > e) {
            continue;
        }
        let f2;
        if (c.fixedFeatures && c.overridableFeatures) {
            f2 = c.fixedFeatures;
            f2.fromBinary(c.overridableFeatures.toBinary());
        } else if (c.fixedFeatures) {
            f2 = c.fixedFeatures;
        } else if (c.overridableFeatures) {
            f2 = c.overridableFeatures;
        } else {
            f2 = new descriptor_pb_js_1.FeatureSet();
        }
        highestMatch = {
            e,
            f: f2
        };
    }
    if (highestMatch === void 0) {
        throw new Error(`No valid default found for edition ${descriptor_pb_js_1.Edition[edition]}`);
    }
    const featureSetBin = highestMatch.f.toBinary(serializationOptions);
    return (...rest)=>{
        const f2 = descriptor_pb_js_1.FeatureSet.fromBinary(featureSetBin, serializationOptions);
        for (const c of rest){
            if (c !== void 0) {
                f2.fromBinary(c.toBinary(serializationOptions), serializationOptions);
            }
        }
        if (!validateMergedFeatures(f2)) {
            throw new Error(`Invalid FeatureSet for edition ${descriptor_pb_js_1.Edition[edition]}`);
        }
        return f2;
    };
}
exports2.createFeatureResolver = createFeatureResolver;
function validateMergedFeatures(featureSet) {
    for (const fi2 of descriptor_pb_js_1.FeatureSet.fields.list()){
        const v2 = featureSet[fi2.localName];
        if (v2 === void 0) {
            return false;
        }
        if (fi2.kind == "enum" && v2 === 0) {
            return false;
        }
    }
    return true;
}

return exports2;
}
