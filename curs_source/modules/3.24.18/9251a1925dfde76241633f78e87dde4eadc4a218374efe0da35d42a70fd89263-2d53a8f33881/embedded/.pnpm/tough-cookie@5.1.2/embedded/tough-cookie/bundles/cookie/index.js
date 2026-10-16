import { require_canonicalDomain } from "./canonicalDomain.js";
import { require_constants7 } from "./constants.js";
import { require_cookie } from "./cookie.js";
import { require_cookieCompare } from "./cookieCompare.js";
import { require_cookieJar } from "./cookieJar.js";
import { require_defaultPath } from "./defaultPath.js";
import { require_domainMatch } from "./domainMatch.js";
import { require_formatDate } from "./formatDate.js";
import { require_parseDate } from "./parseDate.js";
import { require_permutePath } from "./permutePath.js";
import { require_getPublicSuffix } from "../getPublicSuffix.js";
import { require_memstore } from "../memstore.js";
import { require_pathMatch } from "../pathMatch.js";
import { require_permuteDomain } from "../permuteDomain.js";
import { require_store } from "../store.js";
import { require_validators } from "../validators.js";
import { require_version2 } from "../version.js";
var __wakaru_require_cookie2_cache;
export function require_cookie2() {
if (__wakaru_require_cookie2_cache) return __wakaru_require_cookie2_cache;
var exports2 = {};
__wakaru_require_cookie2_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.permutePath = exports2.parseDate = exports2.formatDate = exports2.domainMatch = exports2.defaultPath = exports2.CookieJar = exports2.cookieCompare = exports2.Cookie = exports2.PrefixSecurityEnum = exports2.canonicalDomain = exports2.version = exports2.ParameterError = exports2.Store = exports2.getPublicSuffix = exports2.permuteDomain = exports2.pathMatch = exports2.MemoryCookieStore = void 0;
exports2.parse = parse11;
exports2.fromJSON = fromJSON;
var memstore_1 = require_memstore();
Object.defineProperty(exports2, "MemoryCookieStore", {
    enumerable: true,
    get: function() {
        return memstore_1.MemoryCookieStore;
    }
});
var pathMatch_1 = require_pathMatch();
Object.defineProperty(exports2, "pathMatch", {
    enumerable: true,
    get: function() {
        return pathMatch_1.pathMatch;
    }
});
var permuteDomain_1 = require_permuteDomain();
Object.defineProperty(exports2, "permuteDomain", {
    enumerable: true,
    get: function() {
        return permuteDomain_1.permuteDomain;
    }
});
var getPublicSuffix_1 = require_getPublicSuffix();
Object.defineProperty(exports2, "getPublicSuffix", {
    enumerable: true,
    get: function() {
        return getPublicSuffix_1.getPublicSuffix;
    }
});
var store_1 = require_store();
Object.defineProperty(exports2, "Store", {
    enumerable: true,
    get: function() {
        return store_1.Store;
    }
});
var validators_1 = require_validators();
Object.defineProperty(exports2, "ParameterError", {
    enumerable: true,
    get: function() {
        return validators_1.ParameterError;
    }
});
var version_1 = require_version2();
Object.defineProperty(exports2, "version", {
    enumerable: true,
    get: function() {
        return version_1.version;
    }
});
var canonicalDomain_1 = require_canonicalDomain();
Object.defineProperty(exports2, "canonicalDomain", {
    enumerable: true,
    get: function() {
        return canonicalDomain_1.canonicalDomain;
    }
});
var constants_1 = require_constants7();
Object.defineProperty(exports2, "PrefixSecurityEnum", {
    enumerable: true,
    get: function() {
        return constants_1.PrefixSecurityEnum;
    }
});
var cookie_1 = require_cookie();
Object.defineProperty(exports2, "Cookie", {
    enumerable: true,
    get: function() {
        return cookie_1.Cookie;
    }
});
var cookieCompare_1 = require_cookieCompare();
Object.defineProperty(exports2, "cookieCompare", {
    enumerable: true,
    get: function() {
        return cookieCompare_1.cookieCompare;
    }
});
var cookieJar_1 = require_cookieJar();
Object.defineProperty(exports2, "CookieJar", {
    enumerable: true,
    get: function() {
        return cookieJar_1.CookieJar;
    }
});
var defaultPath_1 = require_defaultPath();
Object.defineProperty(exports2, "defaultPath", {
    enumerable: true,
    get: function() {
        return defaultPath_1.defaultPath;
    }
});
var domainMatch_1 = require_domainMatch();
Object.defineProperty(exports2, "domainMatch", {
    enumerable: true,
    get: function() {
        return domainMatch_1.domainMatch;
    }
});
var formatDate_1 = require_formatDate();
Object.defineProperty(exports2, "formatDate", {
    enumerable: true,
    get: function() {
        return formatDate_1.formatDate;
    }
});
var parseDate_1 = require_parseDate();
Object.defineProperty(exports2, "parseDate", {
    enumerable: true,
    get: function() {
        return parseDate_1.parseDate;
    }
});
var permutePath_1 = require_permutePath();
Object.defineProperty(exports2, "permutePath", {
    enumerable: true,
    get: function() {
        return permutePath_1.permutePath;
    }
});
var cookie_2 = require_cookie();
function parse11(str3, options2) {
    return cookie_2.Cookie.parse(str3, options2);
}
function fromJSON(str3) {
    return cookie_2.Cookie.fromJSON(str3);
}

return exports2;
}
