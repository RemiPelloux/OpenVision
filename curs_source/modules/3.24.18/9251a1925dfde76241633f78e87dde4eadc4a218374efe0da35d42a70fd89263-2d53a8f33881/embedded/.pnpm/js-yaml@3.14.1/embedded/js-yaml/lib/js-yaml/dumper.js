import { require_common } from "./common.js";
import { require_exception } from "./exception.js";
import { require_default_full } from "./schema/default_full.js";
import { require_default_safe } from "./schema/default_safe.js";
var __wakaru_require_dumper_cache;
export function require_dumper() {
if (__wakaru_require_dumper_cache) return __wakaru_require_dumper_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_dumper_cache = module2;
"use strict";
var common2 = require_common();
var YAMLException2 = require_exception();
var DEFAULT_FULL_SCHEMA = require_default_full();
var DEFAULT_SAFE_SCHEMA = require_default_safe();
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
];
function compileStyleMap(schema2, map4) {
    var result, keys, index, length, tag, style, type2;
    if (map4 === null) return {};
    result = {};
    keys = Object.keys(map4);
    for(index = 0, length = keys.length; index < length; index += 1){
        tag = keys[index];
        style = String(map4[tag]);
        if (tag.slice(0, 2) === "!!") {
            tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type2 = schema2.compiledTypeMap["fallback"][tag];
        if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
            style = type2.styleAliases[style];
        }
        result[tag] = style;
    }
    return result;
}
function encodeHex(character) {
    var string5, handle, length;
    string5 = character.toString(16).toUpperCase();
    if (character <= 255) {
        handle = "x";
        length = 2;
    } else if (character <= 65535) {
        handle = "u";
        length = 4;
    } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
    } else {
        throw new YAMLException2("code point within a string may not be greater than 0xFFFFFFFF");
    }
    return "\\" + handle + common2.repeat("0", length - string5.length) + string5;
}
function State(options2) {
    this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
    this.indent = Math.max(1, options2["indent"] || 2);
    this.noArrayIndent = options2["noArrayIndent"] || false;
    this.skipInvalid = options2["skipInvalid"] || false;
    this.flowLevel = common2.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
    this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
    this.sortKeys = options2["sortKeys"] || false;
    this.lineWidth = options2["lineWidth"] || 80;
    this.noRefs = options2["noRefs"] || false;
    this.noCompatMode = options2["noCompatMode"] || false;
    this.condenseFlow = options2["condenseFlow"] || false;
    this.implicitTypes = this.schema.compiledImplicit;
    this.explicitTypes = this.schema.compiledExplicit;
    this.tag = null;
    this.result = "";
    this.duplicates = [];
    this.usedDuplicates = null;
}
function indentString(string5, spaces) {
    var ind = common2.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string5.length;
    while(position < length){
        next = string5.indexOf("\n", position);
        if (next === -1) {
            line = string5.slice(position);
            position = length;
        } else {
            line = string5.slice(position, next + 1);
            position = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
    }
    return result;
}
function generateNextLine(state, level) {
    return "\n" + common2.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str3) {
    var index, length, type2;
    for(index = 0, length = state.implicitTypes.length; index < length; index += 1){
        type2 = state.implicitTypes[index];
        if (type2.resolve(str3)) {
            return true;
        }
    }
    return false;
}
function isWhitespace2(c) {
    return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
    return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
}
function isNsChar(c) {
    return isPrintable(c) && !isWhitespace2(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev) {
    return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
}
function isPlainSafeFirst(c) {
    return isPrintable(c) && c !== 65279 && !isWhitespace2(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function needIndentIndicator(string5) {
    var leadingSpaceRe = /^\n* /;
    return leadingSpaceRe.test(string5);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string5, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
    var i;
    var char, prev_char;
    var hasLineBreak = false;
    var hasFoldableLine = false;
    var shouldTrackWidth = lineWidth !== -1;
    var previousLineBreak = -1;
    var plain = isPlainSafeFirst(string5.charCodeAt(0)) && !isWhitespace2(string5.charCodeAt(string5.length - 1));
    if (singleLineOnly) {
        for(i = 0; i < string5.length; i++){
            char = string5.charCodeAt(i);
            if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string5.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
        }
    } else {
        for(i = 0; i < string5.length; i++){
            char = string5.charCodeAt(i);
            if (char === CHAR_LINE_FEED) {
                hasLineBreak = true;
                if (shouldTrackWidth) {
                    hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string5[previousLineBreak + 1] !== " ";
                    previousLineBreak = i;
                }
            } else if (!isPrintable(char)) {
                return STYLE_DOUBLE;
            }
            prev_char = i > 0 ? string5.charCodeAt(i - 1) : null;
            plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string5[previousLineBreak + 1] !== " ");
    }
    if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string5) ? STYLE_PLAIN : STYLE_SINGLE;
    }
    if (indentPerLevel > 9 && needIndentIndicator(string5)) {
        return STYLE_DOUBLE;
    }
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}
function writeScalar3(state, string5, level, iskey) {
    state.dump = (function() {
        if (string5.length === 0) {
            return "''";
        }
        if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string5) !== -1) {
            return "'" + string5 + "'";
        }
        var indent = state.indent * Math.max(1, level);
        var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
        var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
        function testAmbiguity(string6) {
            return testImplicitResolving(state, string6);
        }
        switch(chooseScalarStyle(string5, singleLineOnly, state.indent, lineWidth, testAmbiguity)){
            case STYLE_PLAIN:
                return string5;
            case STYLE_SINGLE:
                return "'" + string5.replace(/'/g, "''") + "'";
            case STYLE_LITERAL:
                return "|" + blockHeader(string5, state.indent) + dropEndingNewline(indentString(string5, indent));
            case STYLE_FOLDED:
                return ">" + blockHeader(string5, state.indent) + dropEndingNewline(indentString(foldString(string5, lineWidth), indent));
            case STYLE_DOUBLE:
                return '"' + escapeString(string5, lineWidth) + '"';
            default:
                throw new YAMLException2("impossible error: invalid scalar style");
        }
    })();
}
function blockHeader(string5, indentPerLevel) {
    var indentIndicator = needIndentIndicator(string5) ? String(indentPerLevel) : "";
    var clip = string5[string5.length - 1] === "\n";
    var keep = clip && (string5[string5.length - 2] === "\n" || string5 === "\n");
    var chomp = keep ? "+" : clip ? "" : "-";
    return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string5) {
    return string5[string5.length - 1] === "\n" ? string5.slice(0, -1) : string5;
}
function foldString(string5, width) {
    var lineRe = /(\n+)([^\n]*)/g;
    var result = (function() {
        var nextLF = string5.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string5.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string5.slice(0, nextLF), width);
    })();
    var prevMoreIndented = string5[0] === "\n" || string5[0] === " ";
    var moreIndented;
    var match2;
    while(match2 = lineRe.exec(string5)){
        var prefix = match2[1], line = match2[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
    }
    return result;
}
function foldLine(line, width) {
    if (line === "" || line[0] === " ") return line;
    var breakRe = / [^ ]/g;
    var match2;
    var start = 0, end, curr = 0, next = 0;
    var result = "";
    while(match2 = breakRe.exec(line)){
        next = match2.index;
        if (next - start > width) {
            end = curr > start ? curr : next;
            result += "\n" + line.slice(start, end);
            start = end + 1;
        }
        curr = next;
    }
    result += "\n";
    if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
    } else {
        result += line.slice(start);
    }
    return result.slice(1);
}
function escapeString(string5) {
    var result = "";
    var char, nextChar;
    var escapeSeq;
    for(var i = 0; i < string5.length; i++){
        char = string5.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
            nextChar = string5.charCodeAt(i + 1);
            if (nextChar >= 56320 && nextChar <= 57343) {
                result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
                i++;
                continue;
            }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string5[i] : escapeSeq || encodeHex(char);
    }
    return result;
}
function writeFlowSequence(state, level, object4) {
    var _result = "", _tag = state.tag, index, length;
    for(index = 0, length = object4.length; index < length; index += 1){
        if (writeNode(state, level, object4[index], false, false)) {
            if (index !== 0) _result += "," + (!state.condenseFlow ? " " : "");
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object4, compact) {
    var _result = "", _tag = state.tag, index, length;
    for(index = 0, length = object4.length; index < length; index += 1){
        if (writeNode(state, level + 1, object4[index], true, true)) {
            if (!compact || index !== 0) {
                _result += generateNextLine(state, level);
            }
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                _result += "-";
            } else {
                _result += "- ";
            }
            _result += state.dump;
        }
    }
    state.tag = _tag;
    state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object4) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object4), index, length, objectKey, objectValue, pairBuffer;
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (index !== 0) pairBuffer += ", ";
        if (state.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object4[objectKey];
        if (!writeNode(state, level, objectKey, false, false)) {
            continue;
        }
        if (state.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
        if (!writeNode(state, level, objectValue, false, false)) {
            continue;
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object4, compact) {
    var _result = "", _tag = state.tag, objectKeyList = Object.keys(object4), index, length, objectKey, objectValue, explicitPair, pairBuffer;
    if (state.sortKeys === true) {
        objectKeyList.sort();
    } else if (typeof state.sortKeys === "function") {
        objectKeyList.sort(state.sortKeys);
    } else if (state.sortKeys) {
        throw new YAMLException2("sortKeys must be a boolean or a function");
    }
    for(index = 0, length = objectKeyList.length; index < length; index += 1){
        pairBuffer = "";
        if (!compact || index !== 0) {
            pairBuffer += generateNextLine(state, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object4[objectKey];
        if (!writeNode(state, level + 1, objectKey, true, true, true)) {
            continue;
        }
        explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
        if (explicitPair) {
            if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
                pairBuffer += "?";
            } else {
                pairBuffer += "? ";
            }
        }
        pairBuffer += state.dump;
        if (explicitPair) {
            pairBuffer += generateNextLine(state, level);
        }
        if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
            continue;
        }
        if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
            pairBuffer += ":";
        } else {
            pairBuffer += ": ";
        }
        pairBuffer += state.dump;
        _result += pairBuffer;
    }
    state.tag = _tag;
    state.dump = _result || "{}";
}
function detectType(state, object4, explicit) {
    var _result, typeList, index, length, type2, style;
    typeList = explicit ? state.explicitTypes : state.implicitTypes;
    for(index = 0, length = typeList.length; index < length; index += 1){
        type2 = typeList[index];
        if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object4 === "object" && object4 instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object4))) {
            state.tag = explicit ? type2.tag : "?";
            if (type2.represent) {
                style = state.styleMap[type2.tag] || type2.defaultStyle;
                if (_toString.call(type2.represent) === "[object Function]") {
                    _result = type2.represent(object4, style);
                } else if (_hasOwnProperty.call(type2.represent, style)) {
                    _result = type2.represent[style](object4, style);
                } else {
                    throw new YAMLException2("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
                }
                state.dump = _result;
            }
            return true;
        }
    }
    return false;
}
function writeNode(state, level, object4, block, compact, iskey) {
    state.tag = null;
    state.dump = object4;
    if (!detectType(state, object4, false)) {
        detectType(state, object4, true);
    }
    var type2 = _toString.call(state.dump);
    if (block) {
        block = state.flowLevel < 0 || state.flowLevel > level;
    }
    var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
    if (objectOrArray) {
        duplicateIndex = state.duplicates.indexOf(object4);
        duplicate = duplicateIndex !== -1;
    }
    if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
        compact = false;
    }
    if (duplicate && state.usedDuplicates[duplicateIndex]) {
        state.dump = "*ref_" + duplicateIndex;
    } else {
        if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
            state.usedDuplicates[duplicateIndex] = true;
        }
        if (type2 === "[object Object]") {
            if (block && Object.keys(state.dump).length !== 0) {
                writeBlockMapping(state, level, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowMapping(state, level, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type2 === "[object Array]") {
            var arrayLevel = state.noArrayIndent && level > 0 ? level - 1 : level;
            if (block && state.dump.length !== 0) {
                writeBlockSequence(state, arrayLevel, state.dump, compact);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + state.dump;
                }
            } else {
                writeFlowSequence(state, arrayLevel, state.dump);
                if (duplicate) {
                    state.dump = "&ref_" + duplicateIndex + " " + state.dump;
                }
            }
        } else if (type2 === "[object String]") {
            if (state.tag !== "?") {
                writeScalar3(state, state.dump, level, iskey);
            }
        } else {
            if (state.skipInvalid) return false;
            throw new YAMLException2("unacceptable kind of an object to dump " + type2);
        }
        if (state.tag !== null && state.tag !== "?") {
            state.dump = "!<" + state.tag + "> " + state.dump;
        }
    }
    return true;
}
function getDuplicateReferences(object4, state) {
    var objects = [], duplicatesIndexes = [], index, length;
    inspectNode(object4, objects, duplicatesIndexes);
    for(index = 0, length = duplicatesIndexes.length; index < length; index += 1){
        state.duplicates.push(objects[duplicatesIndexes[index]]);
    }
    state.usedDuplicates = new Array(length);
}
function inspectNode(object4, objects, duplicatesIndexes) {
    var objectKeyList, index, length;
    if (object4 !== null && typeof object4 === "object") {
        index = objects.indexOf(object4);
        if (index !== -1) {
            if (duplicatesIndexes.indexOf(index) === -1) {
                duplicatesIndexes.push(index);
            }
        } else {
            objects.push(object4);
            if (Array.isArray(object4)) {
                for(index = 0, length = object4.length; index < length; index += 1){
                    inspectNode(object4[index], objects, duplicatesIndexes);
                }
            } else {
                objectKeyList = Object.keys(object4);
                for(index = 0, length = objectKeyList.length; index < length; index += 1){
                    inspectNode(object4[objectKeyList[index]], objects, duplicatesIndexes);
                }
            }
        }
    }
}
function dump2(input, options2) {
    options2 = options2 || {};
    var state = new State(options2);
    if (!state.noRefs) getDuplicateReferences(input, state);
    if (writeNode(state, 0, input, true, true)) return state.dump + "\n";
    return "";
}
function safeDump2(input, options2) {
    return dump2(input, common2.extend({
        schema: DEFAULT_SAFE_SCHEMA
    }, options2));
}
module2.exports.dump = dump2;
module2.exports.safeDump = safeDump2;

return module2.exports;
}
