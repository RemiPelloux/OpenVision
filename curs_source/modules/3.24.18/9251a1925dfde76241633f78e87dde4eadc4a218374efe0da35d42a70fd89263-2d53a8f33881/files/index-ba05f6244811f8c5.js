import { require_content_type } from "./content-type.js";
import { require_handler_factory } from "./handler-factory.js";
import { require_headers3 } from "./headers.js";
import { require_request_header2 } from "./request-header.js";
import { require_trailer } from "./trailer.js";
import { require_transport2 } from "./transport.js";
import { require_validate_response2 } from "./validate-response.js";
import { require_protocol_grpc } from "../protocol-grpc/index.js";
var __wakaru_require_protocol_grpc_web_cache;
export function require_protocol_grpc_web() {
if (__wakaru_require_protocol_grpc_web_cache) return __wakaru_require_protocol_grpc_web_cache;
var exports2 = {};
__wakaru_require_protocol_grpc_web_cache = exports2;
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
var __exportStar = exports2 && exports2.__exportStar || function(m2, exports3) {
    for(var p2 in m2)if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p2)) __createBinding(exports3, m2, p2);
};
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.grpcStatusOk = exports2.validateTrailer = exports2.setTrailerStatus = exports2.parseTimeout = exports2.createTrailerSerialization = exports2.trailerSerialize = exports2.trailerParse = exports2.trailerFlag = exports2.validateResponseWithCompression = exports2.validateResponse = exports2.contentTypeJson = exports2.contentTypeProto = exports2.contentTypeRegExp = exports2.parseContentType = exports2.requestHeaderWithCompression = exports2.requestHeader = exports2.createTransport = exports2.createHandlerFactory = void 0;
var handler_factory_js_1 = require_handler_factory();
Object.defineProperty(exports2, "createHandlerFactory", {
    enumerable: true,
    get: function() {
        return handler_factory_js_1.createHandlerFactory;
    }
});
var transport_js_1 = require_transport2();
Object.defineProperty(exports2, "createTransport", {
    enumerable: true,
    get: function() {
        return transport_js_1.createTransport;
    }
});
var request_header_js_1 = require_request_header2();
Object.defineProperty(exports2, "requestHeader", {
    enumerable: true,
    get: function() {
        return request_header_js_1.requestHeader;
    }
});
Object.defineProperty(exports2, "requestHeaderWithCompression", {
    enumerable: true,
    get: function() {
        return request_header_js_1.requestHeaderWithCompression;
    }
});
var content_type_js_1 = require_content_type();
Object.defineProperty(exports2, "parseContentType", {
    enumerable: true,
    get: function() {
        return content_type_js_1.parseContentType;
    }
});
Object.defineProperty(exports2, "contentTypeRegExp", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeRegExp;
    }
});
Object.defineProperty(exports2, "contentTypeProto", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeProto;
    }
});
Object.defineProperty(exports2, "contentTypeJson", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeJson;
    }
});
var validate_response_js_1 = require_validate_response2();
Object.defineProperty(exports2, "validateResponse", {
    enumerable: true,
    get: function() {
        return validate_response_js_1.validateResponse;
    }
});
Object.defineProperty(exports2, "validateResponseWithCompression", {
    enumerable: true,
    get: function() {
        return validate_response_js_1.validateResponseWithCompression;
    }
});
var trailer_js_1 = require_trailer();
Object.defineProperty(exports2, "trailerFlag", {
    enumerable: true,
    get: function() {
        return trailer_js_1.trailerFlag;
    }
});
Object.defineProperty(exports2, "trailerParse", {
    enumerable: true,
    get: function() {
        return trailer_js_1.trailerParse;
    }
});
Object.defineProperty(exports2, "trailerSerialize", {
    enumerable: true,
    get: function() {
        return trailer_js_1.trailerSerialize;
    }
});
Object.defineProperty(exports2, "createTrailerSerialization", {
    enumerable: true,
    get: function() {
        return trailer_js_1.createTrailerSerialization;
    }
});
var index_js_1 = require_protocol_grpc();
Object.defineProperty(exports2, "parseTimeout", {
    enumerable: true,
    get: function() {
        return index_js_1.parseTimeout;
    }
});
Object.defineProperty(exports2, "setTrailerStatus", {
    enumerable: true,
    get: function() {
        return index_js_1.setTrailerStatus;
    }
});
Object.defineProperty(exports2, "validateTrailer", {
    enumerable: true,
    get: function() {
        return index_js_1.validateTrailer;
    }
});
Object.defineProperty(exports2, "grpcStatusOk", {
    enumerable: true,
    get: function() {
        return index_js_1.grpcStatusOk;
    }
});
__exportStar(require_headers3(), exports2);

return exports2;
}
