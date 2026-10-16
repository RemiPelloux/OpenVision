import { require_util8 } from "../../core/util.js";
import { require_data_url } from "./data-url.js";
import { require_file2 } from "./file.js";
import { require_formdata2 } from "./formdata.js";
import { require_util9 } from "./util.js";
var __wakaru_require_formdata_parser_cache;
export function require_formdata_parser() {
if (__wakaru_require_formdata_parser_cache) return __wakaru_require_formdata_parser_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_formdata_parser_cache = module2;
"use strict";
var { isUSVString, bufferToLowerCasedHeaderName } = require_util8();
var { utf8DecodeBytes } = require_util9();
var { HTTP_TOKEN_CODEPOINTS, isomorphicDecode } = require_data_url();
var { isFileLike } = require_file2();
var { makeEntry } = require_formdata2();
var assert4 = require("node:assert");
var { File: NodeFile } = require("node:buffer");
var File3 = globalThis.File ?? NodeFile;
var formDataNameBuffer = Buffer.from('form-data; name="');
var filenameBuffer = Buffer.from("; filename");
var dd = Buffer.from("--");
var ddcrlf = Buffer.from("--\r\n");
function isAsciiString(chars) {
    for(let i = 0; i < chars.length; ++i){
        if ((chars.charCodeAt(i) & ~127) !== 0) {
            return false;
        }
    }
    return true;
}
function validateBoundary(boundary) {
    const length = boundary.length;
    if (length < 27 || length > 70) {
        return false;
    }
    for(let i = 0; i < length; ++i){
        const cp2 = boundary.charCodeAt(i);
        if (!(cp2 >= 48 && cp2 <= 57 || cp2 >= 65 && cp2 <= 90 || cp2 >= 97 && cp2 <= 122 || cp2 === 39 || cp2 === 45 || cp2 === 95)) {
            return false;
        }
    }
    return true;
}
function multipartFormDataParser(input, mimeType) {
    assert4(mimeType !== "failure" && mimeType.essence === "multipart/form-data");
    const boundaryString = mimeType.parameters.get("boundary");
    if (boundaryString === void 0) {
        return "failure";
    }
    const boundary = Buffer.from(`--${boundaryString}`, "utf8");
    const entryList = [];
    const position = {
        position: 0
    };
    while(input[position.position] === 13 && input[position.position + 1] === 10){
        position.position += 2;
    }
    let trailing = input.length;
    while(input[trailing - 1] === 10 && input[trailing - 2] === 13){
        trailing -= 2;
    }
    if (trailing !== input.length) {
        input = input.subarray(0, trailing);
    }
    while(true){
        if (input.subarray(position.position, position.position + boundary.length).equals(boundary)) {
            position.position += boundary.length;
        } else {
            return "failure";
        }
        if (position.position === input.length - 2 && bufferStartsWith2(input, dd, position) || position.position === input.length - 4 && bufferStartsWith2(input, ddcrlf, position)) {
            return entryList;
        }
        if (input[position.position] !== 13 || input[position.position + 1] !== 10) {
            return "failure";
        }
        position.position += 2;
        const result = parseMultipartFormDataHeaders(input, position);
        if (result === "failure") {
            return "failure";
        }
        let { name: name17, filename, contentType, encoding } = result;
        position.position += 2;
        let body;
        {
            const boundaryIndex = input.indexOf(boundary.subarray(2), position.position);
            if (boundaryIndex === -1) {
                return "failure";
            }
            body = input.subarray(position.position, boundaryIndex - 4);
            position.position += body.length;
            if (encoding === "base64") {
                body = Buffer.from(body.toString(), "base64");
            }
        }
        if (input[position.position] !== 13 || input[position.position + 1] !== 10) {
            return "failure";
        } else {
            position.position += 2;
        }
        let value;
        if (filename !== null) {
            contentType ??= "text/plain";
            if (!isAsciiString(contentType)) {
                contentType = "";
            }
            value = new File3([
                body
            ], filename, {
                type: contentType
            });
        } else {
            value = utf8DecodeBytes(Buffer.from(body));
        }
        assert4(isUSVString(name17));
        assert4(typeof value === "string" && isUSVString(value) || isFileLike(value));
        entryList.push(makeEntry(name17, value, filename));
    }
}
function parseMultipartFormDataHeaders(input, position) {
    let name17 = null;
    let filename = null;
    let contentType = null;
    let encoding = null;
    while(true){
        if (input[position.position] === 13 && input[position.position + 1] === 10) {
            if (name17 === null) {
                return "failure";
            }
            return {
                name: name17,
                filename,
                contentType,
                encoding
            };
        }
        let headerName = collectASequenceOfBytes((char)=>char !== 10 && char !== 13 && char !== 58, input, position);
        headerName = removeChars(headerName, true, true, (char)=>char === 9 || char === 32);
        if (!HTTP_TOKEN_CODEPOINTS.test(headerName.toString())) {
            return "failure";
        }
        if (input[position.position] !== 58) {
            return "failure";
        }
        position.position++;
        collectASequenceOfBytes((char)=>char === 32 || char === 9, input, position);
        switch(bufferToLowerCasedHeaderName(headerName)){
            case "content-disposition":
                {
                    name17 = filename = null;
                    if (!bufferStartsWith2(input, formDataNameBuffer, position)) {
                        return "failure";
                    }
                    position.position += 17;
                    name17 = parseMultipartFormDataName(input, position);
                    if (name17 === null) {
                        return "failure";
                    }
                    if (bufferStartsWith2(input, filenameBuffer, position)) {
                        let check2 = position.position + filenameBuffer.length;
                        if (input[check2] === 42) {
                            position.position += 1;
                            check2 += 1;
                        }
                        if (input[check2] !== 61 || input[check2 + 1] !== 34) {
                            return "failure";
                        }
                        position.position += 12;
                        filename = parseMultipartFormDataName(input, position);
                        if (filename === null) {
                            return "failure";
                        }
                    }
                    break;
                }
            case "content-type":
                {
                    let headerValue2 = collectASequenceOfBytes((char)=>char !== 10 && char !== 13, input, position);
                    headerValue2 = removeChars(headerValue2, false, true, (char)=>char === 9 || char === 32);
                    contentType = isomorphicDecode(headerValue2);
                    break;
                }
            case "content-transfer-encoding":
                {
                    let headerValue2 = collectASequenceOfBytes((char)=>char !== 10 && char !== 13, input, position);
                    headerValue2 = removeChars(headerValue2, false, true, (char)=>char === 9 || char === 32);
                    encoding = isomorphicDecode(headerValue2);
                    break;
                }
            default:
                {
                    collectASequenceOfBytes((char)=>char !== 10 && char !== 13, input, position);
                }
        }
        if (input[position.position] !== 13 && input[position.position + 1] !== 10) {
            return "failure";
        } else {
            position.position += 2;
        }
    }
}
function parseMultipartFormDataName(input, position) {
    assert4(input[position.position - 1] === 34);
    let name17 = collectASequenceOfBytes((char)=>char !== 10 && char !== 13 && char !== 34, input, position);
    if (input[position.position] !== 34) {
        return null;
    } else {
        position.position++;
    }
    name17 = new TextDecoder().decode(name17).replace(/%0A/ig, "\n").replace(/%0D/ig, "\r").replace(/%22/g, '"');
    return name17;
}
function collectASequenceOfBytes(condition, input, position) {
    let start = position.position;
    while(start < input.length && condition(input[start])){
        ++start;
    }
    return input.subarray(position.position, position.position = start);
}
function removeChars(buf, leading, trailing, predicate) {
    let lead = 0;
    let trail = buf.length - 1;
    if (leading) {
        while(lead < buf.length && predicate(buf[lead]))lead++;
    }
    if (trailing) {
        while(trail > 0 && predicate(buf[trail]))trail--;
    }
    return lead === 0 && trail === buf.length - 1 ? buf : buf.subarray(lead, trail + 1);
}
function bufferStartsWith2(buffer, start, position) {
    if (buffer.length < start.length) {
        return false;
    }
    for(let i = 0; i < start.length; i++){
        if (start[i] !== buffer[position.position + i]) {
            return false;
        }
    }
    return true;
}
module2.exports = {
    multipartFormDataParser,
    validateBoundary
};

return module2.exports;
}
