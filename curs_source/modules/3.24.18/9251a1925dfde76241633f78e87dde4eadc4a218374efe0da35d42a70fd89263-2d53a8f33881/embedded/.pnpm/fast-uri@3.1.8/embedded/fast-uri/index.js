import { require_schemes } from "./lib/schemes.js";
import { require_utils6 } from "./lib/utils.js";
var __wakaru_require_fast_uri_cache;
export function require_fast_uri() {
if (__wakaru_require_fast_uri_cache) return __wakaru_require_fast_uri_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_fast_uri_cache = module2;
"use strict";
var { normalizeIPv6, removeDotSegments, recomposeAuthority, normalizePercentEncoding, normalizePathEncoding, serializePathEncoding, normalizeQueryFragmentEncoding, encodeQuery, encodeFragment, reescapeHostDelimiters, isIPv4, nonSimpleDomain } = require_utils6();
var { SCHEMES, getSchemeHandler } = require_schemes();
var VALID_SCHEME = /^[A-Za-z][A-Za-z0-9+.-]*$/u;
var MALFORMED_SCHEME_ERROR = "URI scheme is malformed.";
function decodeValidScheme(scheme) {
    const decodedScheme = unescape(String(scheme));
    if (!VALID_SCHEME.test(decodedScheme)) {
        throw new TypeError(MALFORMED_SCHEME_ERROR);
    }
    return decodedScheme;
}
function normalize6(uri, options2) {
    if (typeof uri === "string") {
        uri = normalizeString(uri, options2);
    } else if (typeof uri === "object") {
        uri = parse11(serialize(uri, options2), options2);
    }
    return uri;
}
function resolve36(baseURI, relativeURI, options2) {
    const schemelessOptions = options2 ? Object.assign({
        scheme: "null"
    }, options2) : {
        scheme: "null"
    };
    const { parsed: baseParsed, malformedAuthorityOrPort: baseMalformed, malformedPercentEncoding: baseMalformedPercentEncoding, malformedSchemeSpecific: baseMalformedSchemeSpecific, malformedHost: baseMalformedHost, malformedScheme: baseMalformedScheme } = parseWithStatus(baseURI, schemelessOptions);
    const { parsed: relativeParsed, malformedAuthorityOrPort: relativeMalformed, malformedPercentEncoding: relativeMalformedPercentEncoding, malformedSchemeSpecific: relativeMalformedSchemeSpecific, malformedHost: relativeMalformedHost, malformedScheme: relativeMalformedScheme } = parseWithStatus(relativeURI, schemelessOptions);
    if (baseMalformed || relativeMalformed || baseMalformedPercentEncoding || relativeMalformedPercentEncoding || baseMalformedSchemeSpecific || relativeMalformedSchemeSpecific || baseMalformedHost || relativeMalformedHost || baseMalformedScheme || relativeMalformedScheme) {
        throw new Error(baseParsed.error || relativeParsed.error || "URI is malformed.");
    }
    const resolved = resolveComponent(baseParsed, relativeParsed, schemelessOptions, true);
    const resolvedSchemeHandler = getSchemeHandler(options2 && options2.scheme || resolved.scheme);
    const resolvedHost = resolved.host;
    const resolvedHostIsIP = resolvedHost !== void 0 && resolvedHost !== "" && (isIPv4(resolvedHost) || normalizeIPv6(resolvedHost).isIPV6);
    canonicalizeHost(resolved, options2 || {}, resolvedSchemeHandler, resolvedHostIsIP);
    const encodedASCIIHost = resolvedHost && resolvedHost.indexOf("%") !== -1 && !/\P{ASCII}/u.test(resolvedHost);
    if (resolved.error && !encodedASCIIHost) {
        throw new Error(resolved.error);
    }
    schemelessOptions.skipEscape = true;
    return serialize(resolved, schemelessOptions);
}
function resolveComponent(base, relative17, options2, skipNormalization) {
    const target = {};
    if (!skipNormalization) {
        base = parse11(serialize(base, options2), options2);
        relative17 = parse11(serialize(relative17, options2), options2);
    }
    options2 = options2 || {};
    if (!options2.tolerant && relative17.scheme) {
        target.scheme = relative17.scheme;
        target.userinfo = relative17.userinfo;
        target.host = relative17.host;
        target.port = relative17.port;
        target.path = removeDotSegments(relative17.path || "");
        target.query = relative17.query;
    } else {
        if (relative17.userinfo !== void 0 || relative17.host !== void 0 || relative17.port !== void 0) {
            target.userinfo = relative17.userinfo;
            target.host = relative17.host;
            target.port = relative17.port;
            target.path = removeDotSegments(relative17.path || "");
            target.query = relative17.query;
        } else {
            if (!relative17.path) {
                target.path = base.path;
                if (relative17.query !== void 0) {
                    target.query = relative17.query;
                } else {
                    target.query = base.query;
                }
            } else {
                if (relative17.path[0] === "/") {
                    target.path = removeDotSegments(relative17.path);
                } else {
                    if ((base.userinfo !== void 0 || base.host !== void 0 || base.port !== void 0) && !base.path) {
                        target.path = "/" + relative17.path;
                    } else if (!base.path) {
                        target.path = relative17.path;
                    } else {
                        target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative17.path;
                    }
                    target.path = removeDotSegments(target.path);
                }
                target.query = relative17.query;
            }
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
        }
        target.scheme = base.scheme;
    }
    target.fragment = relative17.fragment;
    return target;
}
function equal(uriA, uriB, options2) {
    const normalizedA = normalizeComparableURI(uriA, options2);
    const normalizedB = normalizeComparableURI(uriB, options2);
    return normalizedA !== void 0 && normalizedB !== void 0 && normalizedA === normalizedB;
}
function serialize(cmpts, opts) {
    const component = {
        host: cmpts.host,
        scheme: cmpts.scheme,
        userinfo: cmpts.userinfo,
        port: cmpts.port,
        path: cmpts.path,
        query: cmpts.query,
        nid: cmpts.nid,
        nss: cmpts.nss,
        uuid: cmpts.uuid,
        fragment: cmpts.fragment,
        reference: cmpts.reference,
        resourceName: cmpts.resourceName,
        secure: cmpts.secure,
        error: ""
    };
    const options2 = Object.assign({}, opts);
    const uriTokens = [];
    if (component.scheme) {
        component.scheme = decodeValidScheme(component.scheme);
    }
    const schemeHandler = getSchemeHandler(options2.scheme || component.scheme);
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(component, options2);
    const hasAuthority = component.userinfo !== void 0 || component.host !== void 0 || component.port !== void 0;
    const pathNoScheme = !options2.skipEscape && component.scheme === void 0 && !hasAuthority;
    if (component.path !== void 0) {
        if (!options2.skipEscape) {
            component.path = serializePathEncoding(component.path, pathNoScheme);
        } else {
            component.path = normalizePercentEncoding(component.path);
        }
    }
    if (options2.reference !== "suffix" && component.scheme) {
        component.scheme = decodeValidScheme(component.scheme);
        uriTokens.push(component.scheme, ":");
    }
    const authority = recomposeAuthority(component);
    if (authority !== void 0) {
        if (options2.reference !== "suffix") {
            uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (component.path && component.path[0] !== "/") {
            uriTokens.push("/");
        }
    }
    if (component.path !== void 0) {
        let s3 = component.path;
        if (!options2.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s3 = removeDotSegments(s3);
        }
        if (pathNoScheme) {
            s3 = serializePathEncoding(s3, true);
        }
        if (authority === void 0 && s3[0] === "/" && s3[1] === "/") {
            s3 = "/%2F" + s3.slice(2);
        }
        uriTokens.push(s3);
    }
    if (component.query !== void 0) {
        uriTokens.push("?", encodeQuery(component.query));
    }
    if (component.fragment !== void 0) {
        uriTokens.push("#", encodeFragment(component.fragment));
    }
    return uriTokens.join("");
}
var URI_PARSE = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
var AUTHORITY_PREFIX = /^(?:[^#/:?]+:)?\/\/([^/?#]*)/;
var AUTHORITY_INTRODUCER_REGION = /^(?:[^#/:?]+:)?([/\\\t\n\r]*)/;
function getParseError(parsed, matches) {
    if (matches[2] !== void 0 && parsed.path && parsed.path[0] !== "/") {
        return 'URI path must start with "/" when authority is present.';
    }
    if (typeof parsed.port === "number" && (parsed.port < 0 || parsed.port > 65535)) {
        return "URI port is malformed.";
    }
    return void 0;
}
function hasMalformedPercentEncoding(component) {
    if (component === void 0) return false;
    let percent = component.indexOf("%");
    while(percent !== -1){
        if (percent + 2 >= component.length || !/^[\da-f]{2}$/iu.test(component.slice(percent + 1, percent + 3))) {
            return true;
        }
        percent = component.indexOf("%", percent + 3);
    }
    return false;
}
function isIPLiteral(host) {
    return host[0] === "[" && host[host.length - 1] === "]";
}
function hasMalformedComponentPercentEncoding(matches) {
    const host = matches[4];
    return hasMalformedPercentEncoding(matches[3]) || host !== void 0 && !isIPLiteral(host) && hasMalformedPercentEncoding(host) || hasMalformedPercentEncoding(matches[6]) || hasMalformedPercentEncoding(matches[7]) || hasMalformedPercentEncoding(matches[8]);
}
function canonicalizeHost(parsed, options2, schemeHandler, isIP2) {
    if (!options2.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport) && parsed.host && !isIPLiteral(parsed.host) && (options2.domainHost || schemeHandler && schemeHandler.domainHost) && isIP2 === false && nonSimpleDomain(parsed.host)) {
        try {
            parsed.host = new URL("http://" + parsed.host).hostname;
        } catch (e) {
            parsed.error = parsed.error || "Host's domain name can not be converted to ASCII: " + e;
            return true;
        }
    }
    return false;
}
function parseWithStatus(uri, opts) {
    const options2 = Object.assign({}, opts);
    const parsed = {
        scheme: void 0,
        userinfo: void 0,
        host: "",
        port: void 0,
        path: "",
        query: void 0,
        fragment: void 0
    };
    let malformedAuthorityOrPort = false;
    let malformedPercentEncoding = false;
    let malformedSchemeSpecific = false;
    let malformedHost = false;
    let malformedIPLiteral = false;
    let malformedScheme = false;
    let isIP2 = false;
    if (options2.reference === "suffix") {
        if (options2.scheme) {
            uri = options2.scheme + ":" + uri;
        } else {
            uri = "//" + uri;
        }
    }
    const authorityMatch = uri.match(AUTHORITY_PREFIX);
    if (authorityMatch !== null && authorityMatch[1].indexOf("\\") !== -1) {
        parsed.error = "URI authority must not contain a literal backslash.";
        malformedAuthorityOrPort = true;
    }
    const introducerMatch = uri.match(AUTHORITY_INTRODUCER_REGION);
    if (introducerMatch !== null) {
        const region = introducerMatch[1];
        const normalizedRegion = region.replace(/[\t\n\r]/g, "");
        if (normalizedRegion.length >= 2) {
            if (normalizedRegion.slice(0, 2) !== "//") {
                parsed.error = parsed.error || "URI authority must not contain a literal backslash.";
                malformedAuthorityOrPort = true;
            } else if (region.length !== normalizedRegion.length) {
                parsed.error = parsed.error || "URI authority introducer must not contain whitespace.";
                malformedAuthorityOrPort = true;
            }
        }
    }
    const matches = uri.match(URI_PARSE);
    if (matches) {
        parsed.scheme = matches[1];
        parsed.userinfo = matches[3];
        parsed.host = matches[4];
        parsed.port = parseInt(matches[5], 10);
        parsed.path = matches[6] || "";
        parsed.query = matches[7];
        parsed.fragment = matches[8];
        if (parsed.scheme !== void 0) {
            const decodedScheme = unescape(parsed.scheme);
            if (VALID_SCHEME.test(decodedScheme)) {
                parsed.scheme = decodedScheme.toLowerCase();
            } else {
                parsed.error = parsed.error || MALFORMED_SCHEME_ERROR;
                malformedScheme = true;
            }
        }
        malformedPercentEncoding = hasMalformedComponentPercentEncoding(matches);
        if (malformedPercentEncoding) {
            parsed.error = parsed.error || "URI contains malformed percent-encoding.";
        }
        if (isNaN(parsed.port)) {
            parsed.port = matches[5];
        }
        const parseError = getParseError(parsed, matches);
        if (parseError !== void 0) {
            parsed.error = parsed.error || parseError;
            malformedAuthorityOrPort = true;
        }
        if (parsed.host) {
            const ipv4result = isIPv4(parsed.host);
            if (ipv4result === false) {
                const bracketedIPLiteral = isIPLiteral(parsed.host);
                const hasIPLiteralBracket = parsed.host.indexOf("[") !== -1 || parsed.host.indexOf("]") !== -1;
                const ipv6result = normalizeIPv6(parsed.host);
                isIP2 = ipv6result.isIPV6 || ipv6result.isIPVFuture === true;
                malformedIPLiteral = hasIPLiteralBracket && (!bracketedIPLiteral || ipv6result.error === true);
                parsed.host = isIP2 ? ipv6result.host : ipv6result.host.toLowerCase();
                if (malformedIPLiteral) {
                    parsed.error = parsed.error || "URI host is malformed.";
                    malformedAuthorityOrPort = true;
                }
            } else {
                isIP2 = true;
            }
        }
        if (parsed.scheme === void 0 && parsed.userinfo === void 0 && parsed.host === void 0 && parsed.port === void 0 && parsed.query === void 0 && !parsed.path) {
            parsed.reference = "same-document";
        } else if (parsed.scheme === void 0) {
            parsed.reference = "relative";
        } else if (parsed.fragment === void 0) {
            parsed.reference = "absolute";
        } else {
            parsed.reference = "uri";
        }
        if (options2.reference && options2.reference !== "suffix" && options2.reference !== parsed.reference) {
            parsed.error = parsed.error || "URI is not a " + options2.reference + " reference.";
        }
        const schemeHandler = getSchemeHandler(options2.scheme || parsed.scheme);
        if (!malformedIPLiteral) {
            malformedHost = canonicalizeHost(parsed, options2, schemeHandler, isIP2);
        }
        if (uri.indexOf("%") !== -1 && parsed.host !== void 0 && !malformedIPLiteral) {
            let host = isIP2 ? parsed.host : normalizePercentEncoding(parsed.host, true);
            if (!isIP2) {
                host = normalizePercentEncoding(host.toLowerCase());
            }
            parsed.host = reescapeHostDelimiters(host, isIP2);
        }
        if (!schemeHandler || schemeHandler && !schemeHandler.skipNormalize) {
            if (parsed.path) {
                parsed.path = normalizePathEncoding(parsed.path);
            }
            if (parsed.query) {
                parsed.query = normalizeQueryFragmentEncoding(parsed.query);
            }
            if (parsed.fragment) {
                parsed.fragment = normalizeQueryFragmentEncoding(parsed.fragment);
            }
        }
        if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(parsed, options2);
            if (schemeHandler === SCHEMES.urn && parsed.nid === void 0) {
                malformedSchemeSpecific = true;
            }
        }
    } else {
        parsed.error = parsed.error || "URI can not be parsed.";
    }
    return {
        parsed,
        malformedAuthorityOrPort,
        malformedPercentEncoding,
        malformedSchemeSpecific,
        malformedHost,
        malformedScheme
    };
}
function parse11(uri, opts) {
    return parseWithStatus(uri, opts).parsed;
}
function normalizeString(uri, opts) {
    return normalizeStringWithStatus(uri, opts).normalized;
}
function normalizeStringWithStatus(uri, opts) {
    const { parsed, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = parseWithStatus(uri, opts);
    return {
        normalized: malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? uri : serialize(parsed, opts),
        malformedAuthorityOrPort,
        malformedPercentEncoding,
        malformedSchemeSpecific,
        malformedHost,
        malformedScheme
    };
}
function normalizeComparableURI(uri, opts) {
    if (typeof uri !== "string" && typeof uri !== "object") {
        return void 0;
    }
    let value;
    try {
        value = typeof uri === "string" ? uri : serialize(uri, opts);
    } catch  {
        return void 0;
    }
    const { normalized, malformedAuthorityOrPort, malformedPercentEncoding, malformedSchemeSpecific, malformedHost, malformedScheme } = normalizeStringWithStatus(value, opts);
    return malformedAuthorityOrPort || malformedPercentEncoding || malformedSchemeSpecific || malformedHost || malformedScheme ? void 0 : normalized;
}
var fastUri = {
    SCHEMES,
    normalize: normalize6,
    resolve: resolve36,
    resolveComponent,
    equal,
    serialize,
    parse: parse11
};
module2.exports = fastUri;
module2.exports.default = fastUri;
module2.exports.fastUri = fastUri;

return module2.exports;
}
