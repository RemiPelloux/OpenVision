import { require_constants12 } from "./constants.js";
import { require_util13 } from "./util.js";
import { require_data_url } from "../fetch/data-url.js";
var __wakaru_require_parse2_cache;
export function require_parse2() {
if (__wakaru_require_parse2_cache) return __wakaru_require_parse2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_parse2_cache = module2;
"use strict";
var { maxNameValuePairSize, maxAttributeValueSize } = require_constants12();
var { isCTLExcludingHtab } = require_util13();
var { collectASequenceOfCodePointsFast } = require_data_url();
var assert4 = require("node:assert");
function parseSetCookie(header) {
    if (isCTLExcludingHtab(header)) {
        return null;
    }
    let nameValuePair = "";
    let unparsedAttributes = "";
    let name17 = "";
    let value = "";
    if (header.includes(";")) {
        const position = {
            position: 0
        };
        nameValuePair = collectASequenceOfCodePointsFast(";", header, position);
        unparsedAttributes = header.slice(position.position);
    } else {
        nameValuePair = header;
    }
    if (!nameValuePair.includes("=")) {
        value = nameValuePair;
    } else {
        const position = {
            position: 0
        };
        name17 = collectASequenceOfCodePointsFast("=", nameValuePair, position);
        value = nameValuePair.slice(position.position + 1);
    }
    name17 = name17.trim();
    value = value.trim();
    if (name17.length + value.length > maxNameValuePairSize) {
        return null;
    }
    return {
        name: name17,
        value,
        ...parseUnparsedAttributes(unparsedAttributes)
    };
}
function parseUnparsedAttributes(unparsedAttributes, cookieAttributeList = {}) {
    if (unparsedAttributes.length === 0) {
        return cookieAttributeList;
    }
    assert4(unparsedAttributes[0] === ";");
    unparsedAttributes = unparsedAttributes.slice(1);
    let cookieAv = "";
    if (unparsedAttributes.includes(";")) {
        cookieAv = collectASequenceOfCodePointsFast(";", unparsedAttributes, {
            position: 0
        });
        unparsedAttributes = unparsedAttributes.slice(cookieAv.length);
    } else {
        cookieAv = unparsedAttributes;
        unparsedAttributes = "";
    }
    let attributeName = "";
    let attributeValue = "";
    if (cookieAv.includes("=")) {
        const position = {
            position: 0
        };
        attributeName = collectASequenceOfCodePointsFast("=", cookieAv, position);
        attributeValue = cookieAv.slice(position.position + 1);
    } else {
        attributeName = cookieAv;
    }
    attributeName = attributeName.trim();
    attributeValue = attributeValue.trim();
    if (attributeValue.length > maxAttributeValueSize) {
        return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
    }
    const attributeNameLowercase = attributeName.toLowerCase();
    if (attributeNameLowercase === "expires") {
        const expiryTime = new Date(attributeValue);
        cookieAttributeList.expires = expiryTime;
    } else if (attributeNameLowercase === "max-age") {
        const charCode = attributeValue.charCodeAt(0);
        if ((charCode < 48 || charCode > 57) && attributeValue[0] !== "-") {
            return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        if (!/^\d+$/.test(attributeValue)) {
            return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
        }
        const deltaSeconds = Number(attributeValue);
        cookieAttributeList.maxAge = deltaSeconds;
    } else if (attributeNameLowercase === "domain") {
        let cookieDomain = attributeValue;
        if (cookieDomain[0] === ".") {
            cookieDomain = cookieDomain.slice(1);
        }
        cookieDomain = cookieDomain.toLowerCase();
        cookieAttributeList.domain = cookieDomain;
    } else if (attributeNameLowercase === "path") {
        let cookiePath = "";
        if (attributeValue.length === 0 || attributeValue[0] !== "/") {
            cookiePath = "/";
        } else {
            cookiePath = attributeValue;
        }
        cookieAttributeList.path = cookiePath;
    } else if (attributeNameLowercase === "secure") {
        cookieAttributeList.secure = true;
    } else if (attributeNameLowercase === "httponly") {
        cookieAttributeList.httpOnly = true;
    } else if (attributeNameLowercase === "samesite") {
        const attributeValueLowercase = attributeValue.toLowerCase();
        if (attributeValueLowercase === "none") {
            cookieAttributeList.sameSite = "None";
        } else if (attributeValueLowercase === "strict") {
            cookieAttributeList.sameSite = "Strict";
        } else if (attributeValueLowercase === "lax") {
            cookieAttributeList.sameSite = "Lax";
        }
    } else {
        cookieAttributeList.unparsed ??= [];
        cookieAttributeList.unparsed.push(`${attributeName}=${attributeValue}`);
    }
    return parseUnparsedAttributes(unparsedAttributes, cookieAttributeList);
}
module2.exports = {
    parseSetCookie,
    parseUnparsedAttributes
};

return module2.exports;
}
