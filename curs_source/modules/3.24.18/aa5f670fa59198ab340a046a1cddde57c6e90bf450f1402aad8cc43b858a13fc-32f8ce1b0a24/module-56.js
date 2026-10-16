require.r(exports);
require.d(exports, {
    PrivacyMode: ()=>PrivacyMode
});
var _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-5.js");
const PrivacyMode = _external_bufbuild_protobuf_js__WEBPACK_IMPORTED_MODULE_0__.proto3.makeEnum("aiserver.v1.PrivacyMode", [
    {
        no: 0,
        name: "PRIVACY_MODE_UNSPECIFIED",
        localName: "UNSPECIFIED"
    },
    {
        no: 1,
        name: "PRIVACY_MODE_NO_STORAGE",
        localName: "NO_STORAGE"
    },
    {
        no: 2,
        name: "PRIVACY_MODE_NO_TRAINING",
        localName: "NO_TRAINING"
    },
    {
        no: 3,
        name: "PRIVACY_MODE_USAGE_DATA_TRAINING_ALLOWED",
        localName: "USAGE_DATA_TRAINING_ALLOWED"
    },
    {
        no: 4,
        name: "PRIVACY_MODE_USAGE_CODEBASE_TRAINING_ALLOWED",
        localName: "USAGE_CODEBASE_TRAINING_ALLOWED"
    }
]);
