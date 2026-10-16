import { require_code_string } from "./code-string.js";
import { require_content_type3 } from "./content-type.js";
import { require_end_stream } from "./end-stream.js";
import { require_error_json } from "./error-json.js";
import { require_get_request } from "./get-request.js";
import { require_handler_factory3 } from "./handler-factory.js";
import { require_headers4 } from "./headers.js";
import { require_http_status } from "./http-status.js";
import { require_parse_timeout2 } from "./parse-timeout.js";
import { require_request_header } from "./request-header.js";
import { require_trailer_mux } from "./trailer-mux.js";
import { require_transport } from "./transport.js";
import { require_validate_response } from "./validate-response.js";
import { require_version } from "./version.js";
var __wakaru_require_protocol_connect_cache;
export function require_protocol_connect() {
if (__wakaru_require_protocol_connect_cache) return __wakaru_require_protocol_connect_cache;
var exports2 = {};
__wakaru_require_protocol_connect_cache = exports2;
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
exports2.codeToString = exports2.codeFromString = exports2.protocolVersion = exports2.transformConnectPostToGetRequest = exports2.trailerDemux = exports2.trailerMux = exports2.validateResponseWithCompression = exports2.validateResponse = exports2.parseTimeout = exports2.contentTypeStreamRegExp = exports2.contentTypeUnaryRegExp = exports2.contentTypeRegExp = exports2.contentTypeStreamJson = exports2.contentTypeStreamProto = exports2.contentTypeUnaryJson = exports2.contentTypeUnaryProto = exports2.parseContentType = exports2.errorToJsonBytes = exports2.errorToJson = exports2.errorFromJsonBytes = exports2.errorFromJson = exports2.createEndStreamSerialization = exports2.endStreamFlag = exports2.endStreamFromJson = exports2.endStreamToJson = exports2.requestHeaderWithCompression = exports2.requestHeader = exports2.codeToHttpStatus = exports2.codeFromHttpStatus = exports2.createTransport = exports2.createHandlerFactory = void 0;
var handler_factory_js_1 = require_handler_factory3();
Object.defineProperty(exports2, "createHandlerFactory", {
    enumerable: true,
    get: function() {
        return handler_factory_js_1.createHandlerFactory;
    }
});
var transport_js_1 = require_transport();
Object.defineProperty(exports2, "createTransport", {
    enumerable: true,
    get: function() {
        return transport_js_1.createTransport;
    }
});
var http_status_js_1 = require_http_status();
Object.defineProperty(exports2, "codeFromHttpStatus", {
    enumerable: true,
    get: function() {
        return http_status_js_1.codeFromHttpStatus;
    }
});
Object.defineProperty(exports2, "codeToHttpStatus", {
    enumerable: true,
    get: function() {
        return http_status_js_1.codeToHttpStatus;
    }
});
var request_header_js_1 = require_request_header();
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
var end_stream_js_1 = require_end_stream();
Object.defineProperty(exports2, "endStreamToJson", {
    enumerable: true,
    get: function() {
        return end_stream_js_1.endStreamToJson;
    }
});
Object.defineProperty(exports2, "endStreamFromJson", {
    enumerable: true,
    get: function() {
        return end_stream_js_1.endStreamFromJson;
    }
});
Object.defineProperty(exports2, "endStreamFlag", {
    enumerable: true,
    get: function() {
        return end_stream_js_1.endStreamFlag;
    }
});
Object.defineProperty(exports2, "createEndStreamSerialization", {
    enumerable: true,
    get: function() {
        return end_stream_js_1.createEndStreamSerialization;
    }
});
var error_json_js_1 = require_error_json();
Object.defineProperty(exports2, "errorFromJson", {
    enumerable: true,
    get: function() {
        return error_json_js_1.errorFromJson;
    }
});
Object.defineProperty(exports2, "errorFromJsonBytes", {
    enumerable: true,
    get: function() {
        return error_json_js_1.errorFromJsonBytes;
    }
});
Object.defineProperty(exports2, "errorToJson", {
    enumerable: true,
    get: function() {
        return error_json_js_1.errorToJson;
    }
});
Object.defineProperty(exports2, "errorToJsonBytes", {
    enumerable: true,
    get: function() {
        return error_json_js_1.errorToJsonBytes;
    }
});
var content_type_js_1 = require_content_type3();
Object.defineProperty(exports2, "parseContentType", {
    enumerable: true,
    get: function() {
        return content_type_js_1.parseContentType;
    }
});
Object.defineProperty(exports2, "contentTypeUnaryProto", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeUnaryProto;
    }
});
Object.defineProperty(exports2, "contentTypeUnaryJson", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeUnaryJson;
    }
});
Object.defineProperty(exports2, "contentTypeStreamProto", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeStreamProto;
    }
});
Object.defineProperty(exports2, "contentTypeStreamJson", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeStreamJson;
    }
});
Object.defineProperty(exports2, "contentTypeRegExp", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeRegExp;
    }
});
Object.defineProperty(exports2, "contentTypeUnaryRegExp", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeUnaryRegExp;
    }
});
Object.defineProperty(exports2, "contentTypeStreamRegExp", {
    enumerable: true,
    get: function() {
        return content_type_js_1.contentTypeStreamRegExp;
    }
});
var parse_timeout_js_1 = require_parse_timeout2();
Object.defineProperty(exports2, "parseTimeout", {
    enumerable: true,
    get: function() {
        return parse_timeout_js_1.parseTimeout;
    }
});
var validate_response_js_1 = require_validate_response();
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
var trailer_mux_js_1 = require_trailer_mux();
Object.defineProperty(exports2, "trailerMux", {
    enumerable: true,
    get: function() {
        return trailer_mux_js_1.trailerMux;
    }
});
Object.defineProperty(exports2, "trailerDemux", {
    enumerable: true,
    get: function() {
        return trailer_mux_js_1.trailerDemux;
    }
});
__exportStar(require_headers4(), exports2);
var get_request_js_1 = require_get_request();
Object.defineProperty(exports2, "transformConnectPostToGetRequest", {
    enumerable: true,
    get: function() {
        return get_request_js_1.transformConnectPostToGetRequest;
    }
});
var version_js_1 = require_version();
Object.defineProperty(exports2, "protocolVersion", {
    enumerable: true,
    get: function() {
        return version_js_1.protocolVersion;
    }
});
var code_string_js_1 = require_code_string();
Object.defineProperty(exports2, "codeFromString", {
    enumerable: true,
    get: function() {
        return code_string_js_1.codeFromString;
    }
});
var code_string_js_2 = require_code_string();
Object.defineProperty(exports2, "codeToString", {
    enumerable: true,
    get: function() {
        return code_string_js_2.codeToString;
    }
});

return exports2;
}
