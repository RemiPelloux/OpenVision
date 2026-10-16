var globalThis2 = require("./module-4576.js");
var uncurryThis = require("./module-9504.js");
var anObjectOrUndefined = require("./module-3972.js");
var aString = require("./module-3463.js");
var hasOwn = require("./module-9297.js");
var base64Map = require("./module-2804.js");
var getAlphabetOption = require("./module-944.js");
var notDetached = require("./module-5169.js");
var base64Alphabet = base64Map.c2i;
var base64UrlAlphabet = base64Map.c2iUrl;
var SyntaxError2 = globalThis2.SyntaxError;
var TypeError2 = globalThis2.TypeError;
var at = uncurryThis("".charAt);
var skipAsciiWhitespace = function(string, index) {
    var length = string.length;
    for(; index < length; index++){
        var chr = at(string, index);
        if (chr !== " " && chr !== "	" && chr !== "\n" && chr !== "\f" && chr !== "\r") break;
    }
    return index;
};
var decodeBase64Chunk = function(chunk, alphabet, throwOnExtraBits) {
    var chunkLength = chunk.length;
    if (chunkLength < 4) {
        chunk += chunkLength === 2 ? "AA" : "A";
    }
    var triplet = (alphabet[at(chunk, 0)] << 18) + (alphabet[at(chunk, 1)] << 12) + (alphabet[at(chunk, 2)] << 6) + alphabet[at(chunk, 3)];
    var chunkBytes = [
        triplet >> 16 & 255,
        triplet >> 8 & 255,
        triplet & 255
    ];
    if (chunkLength === 2) {
        if (throwOnExtraBits && chunkBytes[1] !== 0) {
            throw new SyntaxError2("Extra bits");
        }
        return [
            chunkBytes[0]
        ];
    }
    if (chunkLength === 3) {
        if (throwOnExtraBits && chunkBytes[2] !== 0) {
            throw new SyntaxError2("Extra bits");
        }
        return [
            chunkBytes[0],
            chunkBytes[1]
        ];
    }
    return chunkBytes;
};
var writeBytes = function(bytes, elements, written) {
    var elementsLength = elements.length;
    for(var index = 0; index < elementsLength; index++){
        bytes[written + index] = elements[index];
    }
    return written + elementsLength;
};
module.exports = function(string, options, into, maxLength) {
    aString(string);
    anObjectOrUndefined(options);
    var alphabet = getAlphabetOption(options) === "base64" ? base64Alphabet : base64UrlAlphabet;
    var lastChunkHandling = options ? options.lastChunkHandling : void 0;
    if (lastChunkHandling === void 0) lastChunkHandling = "loose";
    if (lastChunkHandling !== "loose" && lastChunkHandling !== "strict" && lastChunkHandling !== "stop-before-partial") {
        throw new TypeError2("Incorrect `lastChunkHandling` option");
    }
    if (into) notDetached(into.buffer);
    var stringLength = string.length;
    var bytes = into || [];
    var written = 0;
    var read = 0;
    var chunk = "";
    var index = 0;
    if (maxLength) while(true){
        index = skipAsciiWhitespace(string, index);
        if (index === stringLength) {
            if (chunk.length > 0) {
                if (lastChunkHandling === "stop-before-partial") {
                    break;
                }
                if (lastChunkHandling === "loose") {
                    if (chunk.length === 1) {
                        throw new SyntaxError2("Malformed padding: exactly one additional character");
                    }
                    written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
                } else {
                    throw new SyntaxError2("Missing padding");
                }
            }
            read = stringLength;
            break;
        }
        var chr = at(string, index);
        ++index;
        if (chr === "=") {
            if (chunk.length < 2) {
                throw new SyntaxError2("Padding is too early");
            }
            index = skipAsciiWhitespace(string, index);
            if (chunk.length === 2) {
                if (index === stringLength) {
                    if (lastChunkHandling === "stop-before-partial") {
                        break;
                    }
                    throw new SyntaxError2("Malformed padding: only one =");
                }
                if (at(string, index) === "=") {
                    ++index;
                    index = skipAsciiWhitespace(string, index);
                }
            }
            if (index < stringLength) {
                throw new SyntaxError2("Unexpected character after padding");
            }
            written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, lastChunkHandling === "strict"), written);
            read = stringLength;
            break;
        }
        if (!hasOwn(alphabet, chr)) {
            throw new SyntaxError2("Unexpected character");
        }
        var remainingBytes = maxLength - written;
        if (remainingBytes === 1 && chunk.length === 2 || remainingBytes === 2 && chunk.length === 3) {
            break;
        }
        chunk += chr;
        if (chunk.length === 4) {
            written = writeBytes(bytes, decodeBase64Chunk(chunk, alphabet, false), written);
            chunk = "";
            read = index;
            if (written === maxLength) {
                break;
            }
        }
    }
    return {
        bytes,
        read,
        written
    };
};
