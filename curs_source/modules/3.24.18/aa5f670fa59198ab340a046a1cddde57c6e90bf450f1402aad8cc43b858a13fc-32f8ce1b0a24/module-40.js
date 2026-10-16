require.r(exports);
require.d(exports, {
    createFeatureResolver: ()=>createFeatureResolver
});
var _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-38.js");
var _proto_base64_js__WEBPACK_IMPORTED_MODULE_1__ = require("./module-19.js");
function getFeatureSetDefaults(options) {
    return _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSetDefaults.fromBinary(_proto_base64_js__WEBPACK_IMPORTED_MODULE_1__.protoBase64.dec("ChMY5gciACoMCAEQAhgCIAMoATACChMY5wciACoMCAIQARgBIAIoATABChMY6AciDAgBEAEYASACKAEwASoAIOYHKOgH"), options);
}
function createFeatureResolver(edition, compiledFeatureSetDefaults, serializationOptions) {
    const fds = compiledFeatureSetDefaults ?? getFeatureSetDefaults(serializationOptions);
    const min = fds.minimumEdition;
    const max = fds.maximumEdition;
    if (min === void 0 || max === void 0 || fds.defaults.some((d)=>d.edition === void 0)) {
        throw new Error("Invalid FeatureSetDefaults");
    }
    if (edition < min) {
        throw new Error(`Edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[edition]} is earlier than the minimum supported edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[min]}`);
    }
    if (max < edition) {
        throw new Error(`Edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[edition]} is later than the maximum supported edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[max]}`);
    }
    let highestMatch = void 0;
    for (const c of fds.defaults){
        const e = c.edition ?? 0;
        if (e > edition) {
            continue;
        }
        if (highestMatch !== void 0 && highestMatch.e > e) {
            continue;
        }
        let f;
        if (c.fixedFeatures && c.overridableFeatures) {
            f = c.fixedFeatures;
            f.fromBinary(c.overridableFeatures.toBinary());
        } else if (c.fixedFeatures) {
            f = c.fixedFeatures;
        } else if (c.overridableFeatures) {
            f = c.overridableFeatures;
        } else {
            f = new _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSet();
        }
        highestMatch = {
            e,
            f
        };
    }
    if (highestMatch === void 0) {
        throw new Error(`No valid default found for edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[edition]}`);
    }
    const featureSetBin = highestMatch.f.toBinary(serializationOptions);
    return (...rest)=>{
        const f = _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSet.fromBinary(featureSetBin, serializationOptions);
        for (const c of rest){
            if (c !== void 0) {
                f.fromBinary(c.toBinary(serializationOptions), serializationOptions);
            }
        }
        if (!validateMergedFeatures(f)) {
            throw new Error(`Invalid FeatureSet for edition ${_google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.Edition[edition]}`);
        }
        return f;
    };
}
function validateMergedFeatures(featureSet) {
    for (const fi of _google_protobuf_descriptor_pb_js__WEBPACK_IMPORTED_MODULE_0__.FeatureSet.fields.list()){
        const v = featureSet[fi.localName];
        if (v === void 0) {
            return false;
        }
        if (fi.kind == "enum" && v === 0) {
            return false;
        }
    }
    return true;
}
