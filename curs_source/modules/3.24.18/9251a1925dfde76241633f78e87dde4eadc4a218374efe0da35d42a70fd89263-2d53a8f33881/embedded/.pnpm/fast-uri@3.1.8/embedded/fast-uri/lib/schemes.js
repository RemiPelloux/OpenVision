import { require_utils6 } from "./utils.js";
var __wakaru_require_schemes_cache;
export function require_schemes() {
if (__wakaru_require_schemes_cache) return __wakaru_require_schemes_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_schemes_cache = module2;
"use strict";
var { isUUID } = require_utils6();
var URN_REG = /^([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-./:;=@]|%[\da-f]{2})+)$/iu;
var supportedSchemeNames = ([
    "http",
    "https",
    "ws",
    "wss",
    "urn",
    "urn:uuid"
]);
function isValidSchemeName(name17) {
    return supportedSchemeNames.indexOf(name17) !== -1;
}
function wsIsSecure(wsComponent) {
    if (wsComponent.secure === true) {
        return true;
    } else if (wsComponent.secure === false) {
        return false;
    } else if (wsComponent.scheme) {
        return wsComponent.scheme.length === 3 && (wsComponent.scheme[0] === "w" || wsComponent.scheme[0] === "W") && (wsComponent.scheme[1] === "s" || wsComponent.scheme[1] === "S") && (wsComponent.scheme[2] === "s" || wsComponent.scheme[2] === "S");
    } else {
        return false;
    }
}
function httpParse(component) {
    if (!component.host) {
        component.error = component.error || "HTTP URIs must have a host.";
    }
    return component;
}
function httpSerialize(component) {
    const secure = String(component.scheme).toLowerCase() === "https";
    if (component.port === (secure ? 443 : 80) || component.port === "") {
        component.port = void 0;
    }
    if (!component.path) {
        component.path = "/";
    }
    return component;
}
function wsParse(wsComponent) {
    wsComponent.secure = wsIsSecure(wsComponent);
    wsComponent.resourceName = (wsComponent.path || "/") + (wsComponent.query ? "?" + wsComponent.query : "");
    wsComponent.path = void 0;
    wsComponent.query = void 0;
    return wsComponent;
}
function wsSerialize(wsComponent) {
    if (wsComponent.port === (wsIsSecure(wsComponent) ? 443 : 80) || wsComponent.port === "") {
        wsComponent.port = void 0;
    }
    if (typeof wsComponent.secure === "boolean") {
        wsComponent.scheme = wsComponent.secure ? "wss" : "ws";
        wsComponent.secure = void 0;
    }
    if (wsComponent.resourceName) {
        const queryIndex = wsComponent.resourceName.indexOf("?");
        const path64 = queryIndex === -1 ? wsComponent.resourceName : wsComponent.resourceName.slice(0, queryIndex);
        wsComponent.path = path64 && path64 !== "/" ? path64 : void 0;
        wsComponent.query = queryIndex === -1 ? void 0 : wsComponent.resourceName.slice(queryIndex + 1);
        wsComponent.resourceName = void 0;
    }
    wsComponent.fragment = void 0;
    return wsComponent;
}
function urnParse(urnComponent, options2) {
    if (!urnComponent.path) {
        urnComponent.error = "URN can not be parsed";
        return urnComponent;
    }
    const matches = urnComponent.path.match(URN_REG);
    if (matches && matches[0] === urnComponent.path) {
        const scheme = options2.scheme || urnComponent.scheme || "urn";
        urnComponent.nid = matches[1].toLowerCase();
        urnComponent.nss = matches[2];
        const urnScheme = `${scheme}:${options2.nid || urnComponent.nid}`;
        const schemeHandler = getSchemeHandler(urnScheme);
        urnComponent.path = void 0;
        if (schemeHandler) {
            urnComponent = schemeHandler.parse(urnComponent, options2);
        }
    } else {
        urnComponent.error = urnComponent.error || "URN can not be parsed.";
    }
    return urnComponent;
}
function urnSerialize(urnComponent, options2) {
    if (urnComponent.nid === void 0) {
        throw new Error("URN without nid cannot be serialized");
    }
    const scheme = options2.scheme || urnComponent.scheme || "urn";
    const nid = urnComponent.nid.toLowerCase();
    const urnScheme = `${scheme}:${options2.nid || nid}`;
    const schemeHandler = getSchemeHandler(urnScheme);
    if (schemeHandler) {
        urnComponent = schemeHandler.serialize(urnComponent, options2);
    }
    const uriComponent = urnComponent;
    const nss = urnComponent.nss;
    uriComponent.path = `${nid || options2.nid}:${nss}`;
    options2.skipEscape = true;
    return uriComponent;
}
function urnuuidParse(urnComponent, options2) {
    const uuidComponent = urnComponent;
    uuidComponent.uuid = uuidComponent.nss;
    uuidComponent.nss = void 0;
    if (!options2.tolerant && (!uuidComponent.uuid || !isUUID(uuidComponent.uuid))) {
        uuidComponent.error = uuidComponent.error || "UUID is not valid.";
    }
    return uuidComponent;
}
function urnuuidSerialize(uuidComponent) {
    const urnComponent = uuidComponent;
    urnComponent.nss = (uuidComponent.uuid || "").toLowerCase();
    return urnComponent;
}
var http4 = ({
    scheme: "http",
    domainHost: true,
    parse: httpParse,
    serialize: httpSerialize
});
var https3 = ({
    scheme: "https",
    domainHost: http4.domainHost,
    parse: httpParse,
    serialize: httpSerialize
});
var ws2 = ({
    scheme: "ws",
    domainHost: true,
    parse: wsParse,
    serialize: wsSerialize
});
var wss = ({
    scheme: "wss",
    domainHost: ws2.domainHost,
    parse: ws2.parse,
    serialize: ws2.serialize
});
var urn = ({
    scheme: "urn",
    parse: urnParse,
    serialize: urnSerialize,
    skipNormalize: true
});
var urnuuid = ({
    scheme: "urn:uuid",
    parse: urnuuidParse,
    serialize: urnuuidSerialize,
    skipNormalize: true
});
var SCHEMES = ({
    http: http4,
    https: https3,
    ws: ws2,
    wss,
    urn,
    "urn:uuid": urnuuid
});
Object.setPrototypeOf(SCHEMES, null);
function getSchemeHandler(scheme) {
    return scheme && (SCHEMES[scheme] || SCHEMES[scheme.toLowerCase()]) || void 0;
}
module2.exports = {
    wsIsSecure,
    SCHEMES,
    isValidSchemeName,
    getSchemeHandler
};

return module2.exports;
}
