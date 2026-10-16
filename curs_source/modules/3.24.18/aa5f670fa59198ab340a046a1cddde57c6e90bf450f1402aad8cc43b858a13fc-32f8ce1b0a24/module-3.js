require.r(exports);
require.d(exports, {
    INLINE_JSON_REMOTE_AUTHORITY_SCHEME: ()=>INLINE_JSON_REMOTE_AUTHORITY_SCHEME,
    allowsInlineJsonRemoteAuthority: ()=>allowsInlineJsonRemoteAuthority,
    parseBackgroundComposerAuthority: ()=>parseBackgroundComposerAuthority
});
var _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__ = require("./module-193.js");
var proto_aiserver_v1_background_composer_pb_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-4.js");
const INLINE_JSON_REMOTE_AUTHORITY_SCHEME = "cursor-dev";
function allowsInlineJsonRemoteAuthority(uriScheme) {
    return uriScheme === INLINE_JSON_REMOTE_AUTHORITY_SCHEME;
}
function parseBackgroundComposerAuthority(authority, options) {
    const indexOfPlus = authority.indexOf("+");
    const bcIdOrUrl = authority.substring(indexOfPlus + 1).trim();
    if (indexOfPlus === -1 || bcIdOrUrl.length === 0) {
        throw new Error("No bcId found in authority");
    }
    if (!bcIdOrUrl.startsWith("{")) {
        return {
            kind: "bcId",
            bcId: bcIdOrUrl
        };
    }
    if (!options.allowInlineJson) {
        throw new Error("Inline remote authority is not supported");
    }
    let url;
    try {
        url = proto_aiserver_v1_background_composer_pb_js__WEBPACK_IMPORTED_MODULE_0__.GetCursorServerUrlResponse.fromJsonString(bcIdOrUrl, {
            ignoreUnknownFields: true
        });
    } catch  {
        throw new Error("Invalid url found in authority");
    }
    if (url.host.trim().length === 0 || !Number.isInteger(url.port) || url.port < 1 || url.port > 65535) {
        throw new Error("Invalid url found in authority");
    }
    return {
        kind: "inlineUrl",
        url: (0, _bufbuild_protobuf__WEBPACK_IMPORTED_MODULE_1__.toPlainMessage)(url)
    };
}
