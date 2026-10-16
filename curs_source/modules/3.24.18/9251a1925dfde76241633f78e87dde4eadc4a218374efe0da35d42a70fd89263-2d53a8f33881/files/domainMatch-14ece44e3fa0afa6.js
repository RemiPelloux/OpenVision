import { require_canonicalDomain } from "./canonicalDomain.js";
var __wakaru_require_domainMatch_cache;
export function require_domainMatch() {
if (__wakaru_require_domainMatch_cache) return __wakaru_require_domainMatch_cache;
var exports2 = {};
__wakaru_require_domainMatch_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.domainMatch = domainMatch;
var canonicalDomain_1 = require_canonicalDomain();
var IP_REGEX_LOWERCASE = /(?:^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}$)|(?:^(?:(?:[a-f\d]{1,4}:){7}(?:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){6}(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|:[a-f\d]{1,4}|:)|(?:[a-f\d]{1,4}:){5}(?::(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,2}|:)|(?:[a-f\d]{1,4}:){4}(?:(?::[a-f\d]{1,4}){0,1}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,3}|:)|(?:[a-f\d]{1,4}:){3}(?:(?::[a-f\d]{1,4}){0,2}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,4}|:)|(?:[a-f\d]{1,4}:){2}(?:(?::[a-f\d]{1,4}){0,3}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,5}|:)|(?:[a-f\d]{1,4}:){1}(?:(?::[a-f\d]{1,4}){0,4}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,6}|:)|(?::(?:(?::[a-f\d]{1,4}){0,5}:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3}|(?::[a-f\d]{1,4}){1,7}|:)))$)/;
function domainMatch(domain, cookieDomain, canonicalize) {
    if (domain == null || cookieDomain == null) {
        return void 0;
    }
    let _str;
    let _domStr;
    if (canonicalize !== false) {
        _str = (0, canonicalDomain_1.canonicalDomain)(domain);
        _domStr = (0, canonicalDomain_1.canonicalDomain)(cookieDomain);
    } else {
        _str = domain;
        _domStr = cookieDomain;
    }
    if (_str == null || _domStr == null) {
        return void 0;
    }
    if (_str == _domStr) {
        return true;
    }
    const idx = _str.lastIndexOf(_domStr);
    if (idx <= 0) {
        return false;
    }
    if (_str.length !== _domStr.length + idx) {
        return false;
    }
    if (_str.substring(idx - 1, idx) !== ".") {
        return false;
    }
    return !IP_REGEX_LOWERCASE.test(_str);
}

return exports2;
}
