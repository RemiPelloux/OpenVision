import { require_util2 } from "./util.js";
var __wakaru_require_dataURL_cache;
export function require_dataURL() {
if (__wakaru_require_dataURL_cache) return __wakaru_require_dataURL_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dataURL_cache = module2;
var assert4 = require("assert");
var { atob: atob3 } = require("buffer");
var { isomorphicDecode } = require_util2();
var encoder2 = new TextEncoder();
var HTTP_TOKEN_CODEPOINTS = /^[!#$%&'*+-.^_|~A-Za-z0-9]+$/;
var HTTP_WHITESPACE_REGEX = /(\u000A|\u000D|\u0009|\u0020)/;
var HTTP_QUOTED_STRING_TOKENS = /[\u0009|\u0020-\u007E|\u0080-\u00FF]/;
function dataURLProcessor(dataURL) {
    assert4(dataURL.protocol === "data:");
    let input = URLSerializer(dataURL, true);
    input = input.slice(5);
    const position = {
        position: 0
    };
    let mimeType = collectASequenceOfCodePointsFast(",", input, position);
    const mimeTypeLength = mimeType.length;
    mimeType = removeASCIIWhitespace(mimeType, true, true);
    if (position.position >= input.length) {
        return "failure";
    }
    position.position++;
    const encodedBody = input.slice(mimeTypeLength + 1);
    let body = stringPercentDecode(encodedBody);
    if (/;(\u0020){0,}base64$/i.test(mimeType)) {
        const stringBody = isomorphicDecode(body);
        body = forgivingBase64(stringBody);
        if (body === "failure") {
            return "failure";
        }
        mimeType = mimeType.slice(0, -6);
        mimeType = mimeType.replace(/(\u0020)+$/, "");
        mimeType = mimeType.slice(0, -1);
    }
    if (mimeType.startsWith(";")) {
        mimeType = "text/plain" + mimeType;
    }
    let mimeTypeRecord = parseMIMEType(mimeType);
    if (mimeTypeRecord === "failure") {
        mimeTypeRecord = parseMIMEType("text/plain;charset=US-ASCII");
    }
    return {
        mimeType: mimeTypeRecord,
        body
    };
}
function URLSerializer(url2, excludeFragment = false) {
    if (!excludeFragment) {
        return url2.href;
    }
    const href = url2.href;
    const hashLength = url2.hash.length;
    return hashLength === 0 ? href : href.substring(0, href.length - hashLength);
}
function collectASequenceOfCodePoints(condition, input, position) {
    let result = "";
    while(position.position < input.length && condition(input[position.position])){
        result += input[position.position];
        position.position++;
    }
    return result;
}
function collectASequenceOfCodePointsFast(char, input, position) {
    const idx = input.indexOf(char, position.position);
    const start = position.position;
    if (idx === -1) {
        position.position = input.length;
        return input.slice(start);
    }
    position.position = idx;
    return input.slice(start, position.position);
}
function stringPercentDecode(input) {
    const bytes = encoder2.encode(input);
    return percentDecode(bytes);
}
function percentDecode(input) {
    const output = [];
    for(let i = 0; i < input.length; i++){
        const byte = input[i];
        if (byte !== 37) {
            output.push(byte);
        } else if (byte === 37 && !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(input[i + 1], input[i + 2]))) {
            output.push(37);
        } else {
            const nextTwoBytes = String.fromCharCode(input[i + 1], input[i + 2]);
            const bytePoint = Number.parseInt(nextTwoBytes, 16);
            output.push(bytePoint);
            i += 2;
        }
    }
    return Uint8Array.from(output);
}
function parseMIMEType(input) {
    input = removeHTTPWhitespace(input, true, true);
    const position = {
        position: 0
    };
    const type2 = collectASequenceOfCodePointsFast("/", input, position);
    if (type2.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(type2)) {
        return "failure";
    }
    if (position.position > input.length) {
        return "failure";
    }
    position.position++;
    let subtype = collectASequenceOfCodePointsFast(";", input, position);
    subtype = removeHTTPWhitespace(subtype, false, true);
    if (subtype.length === 0 || !HTTP_TOKEN_CODEPOINTS.test(subtype)) {
        return "failure";
    }
    const typeLowercase = type2.toLowerCase();
    const subtypeLowercase = subtype.toLowerCase();
    const mimeType = {
        type: typeLowercase,
        subtype: subtypeLowercase,
        parameters: new Map(),
        essence: `${typeLowercase}/${subtypeLowercase}`
    };
    while(position.position < input.length){
        position.position++;
        collectASequenceOfCodePoints((char)=>HTTP_WHITESPACE_REGEX.test(char), input, position);
        let parameterName = collectASequenceOfCodePoints((char)=>char !== ";" && char !== "=", input, position);
        parameterName = parameterName.toLowerCase();
        if (position.position < input.length) {
            if (input[position.position] === ";") {
                continue;
            }
            position.position++;
        }
        if (position.position > input.length) {
            break;
        }
        let parameterValue = null;
        if (input[position.position] === '"') {
            parameterValue = collectAnHTTPQuotedString(input, position, true);
            collectASequenceOfCodePointsFast(";", input, position);
        } else {
            parameterValue = collectASequenceOfCodePointsFast(";", input, position);
            parameterValue = removeHTTPWhitespace(parameterValue, false, true);
            if (parameterValue.length === 0) {
                continue;
            }
        }
        if (parameterName.length !== 0 && HTTP_TOKEN_CODEPOINTS.test(parameterName) && (parameterValue.length === 0 || HTTP_QUOTED_STRING_TOKENS.test(parameterValue)) && !mimeType.parameters.has(parameterName)) {
            mimeType.parameters.set(parameterName, parameterValue);
        }
    }
    return mimeType;
}
function forgivingBase64(data) {
    data = data.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, "");
    if (data.length % 4 === 0) {
        data = data.replace(/=?=$/, "");
    }
    if (data.length % 4 === 1) {
        return "failure";
    }
    if (/[^+/0-9A-Za-z]/.test(data)) {
        return "failure";
    }
    const binary2 = atob3(data);
    const bytes = new Uint8Array(binary2.length);
    for(let byte = 0; byte < binary2.length; byte++){
        bytes[byte] = binary2.charCodeAt(byte);
    }
    return bytes;
}
function collectAnHTTPQuotedString(input, position, extractValue2) {
    const positionStart = position.position;
    let value = "";
    assert4(input[position.position] === '"');
    position.position++;
    while(true){
        value += collectASequenceOfCodePoints((char)=>char !== '"' && char !== "\\", input, position);
        if (position.position >= input.length) {
            break;
        }
        const quoteOrBackslash = input[position.position];
        position.position++;
        if (quoteOrBackslash === "\\") {
            if (position.position >= input.length) {
                value += "\\";
                break;
            }
            value += input[position.position];
            position.position++;
        } else {
            assert4(quoteOrBackslash === '"');
            break;
        }
    }
    if (extractValue2) {
        return value;
    }
    return input.slice(positionStart, position.position);
}
function serializeAMimeType(mimeType) {
    assert4(mimeType !== "failure");
    const { parameters: parameters2, essence } = mimeType;
    let serialization = essence;
    for (let [name17, value] of parameters2.entries()){
        serialization += ";";
        serialization += name17;
        serialization += "=";
        if (!HTTP_TOKEN_CODEPOINTS.test(value)) {
            value = value.replace(/(\\|")/g, "\\$1");
            value = '"' + value;
            value += '"';
        }
        serialization += value;
    }
    return serialization;
}
function isHTTPWhiteSpace(char) {
    return char === "\r" || char === "\n" || char === "	" || char === " ";
}
function removeHTTPWhitespace(str3, leading = true, trailing = true) {
    let lead = 0;
    let trail = str3.length - 1;
    if (leading) {
        for(; lead < str3.length && isHTTPWhiteSpace(str3[lead]); lead++);
    }
    if (trailing) {
        for(; trail > 0 && isHTTPWhiteSpace(str3[trail]); trail--);
    }
    return str3.slice(lead, trail + 1);
}
function isASCIIWhitespace(char) {
    return char === "\r" || char === "\n" || char === "	" || char === "\f" || char === " ";
}
function removeASCIIWhitespace(str3, leading = true, trailing = true) {
    let lead = 0;
    let trail = str3.length - 1;
    if (leading) {
        for(; lead < str3.length && isASCIIWhitespace(str3[lead]); lead++);
    }
    if (trailing) {
        for(; trail > 0 && isASCIIWhitespace(str3[trail]); trail--);
    }
    return str3.slice(lead, trail + 1);
}
module2.exports = {
    dataURLProcessor,
    URLSerializer,
    collectASequenceOfCodePoints,
    collectASequenceOfCodePointsFast,
    stringPercentDecode,
    parseMIMEType,
    collectAnHTTPQuotedString,
    serializeAMimeType
};

return module2.exports;
}
