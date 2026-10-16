import { require_cjs4 } from "../../../node_modules/.pnpm/_46b84b12e081161e2c23c10160f61a1d/node_modules/@connectrpc/connect-node/dist/cjs/index.js";
var __wakaru_require_adaptiveGzip_cache;
export function require_adaptiveGzip() {
if (__wakaru_require_adaptiveGzip_cache) return __wakaru_require_adaptiveGzip_cache;
var exports2 = {};
__wakaru_require_adaptiveGzip_cache = exports2;
"use strict";
var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    var desc = Object.getOwnPropertyDescriptor(m2, k2);
    if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m2[k2];
            }
        };
    }
    Object.defineProperty(o, k22, desc);
}) : (function(o, m2, k2, k22) {
    if (k22 === void 0) k22 = k2;
    o[k22] = m2[k2];
}));
var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v2) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v2
    });
}) : function(o, v2) {
    o["default"] = v2;
});
var __importStar = exports2 && exports2.__importStar || (function() {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function(o2) {
            var ar2 = [];
            for(var k2 in o2)if (Object.prototype.hasOwnProperty.call(o2, k2)) ar2[ar2.length] = k2;
            return ar2;
        };
        return ownKeys(o);
    };
    return function(mod2) {
        if (mod2 && mod2.__esModule) return mod2;
        var result = {};
        if (mod2 != null) {
            for(var k2 = ownKeys(mod2), i = 0; i < k2.length; i++)if (k2[i] !== "default") __createBinding(result, mod2, k2[i]);
        }
        __setModuleDefault(result, mod2);
        return result;
    };
})();
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.adaptiveGzip = void 0;
var node_util_1 = require("node:util");
var zlib2 = __importStar(require("node:zlib"));
var connect_node_1 = require_cjs4();
var gzip3 = (0, node_util_1.promisify)(zlib2.gzip);
var SAMPLE_BYTES = 4 * 1024;
var MAX_WORTHWHILE_RATIO = 0.9;
exports2.adaptiveGzip = {
    ...connect_node_1.compressionGzip,
    compress (bytes) {
        const level = sampleCompresses(bytes) ? zlib2.constants.Z_DEFAULT_COMPRESSION : zlib2.constants.Z_NO_COMPRESSION;
        return gzip3(bytes, {
            level
        });
    }
};
function sampleCompresses(bytes) {
    const sample = bytes.subarray(0, SAMPLE_BYTES);
    const deflated = zlib2.deflateRawSync(sample, {
        level: zlib2.constants.Z_BEST_SPEED
    });
    return deflated.byteLength < sample.byteLength * MAX_WORTHWHILE_RATIO;
}

return exports2;
}
