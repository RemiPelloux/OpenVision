import { require_bufferstream } from "./lib/bufferstream.js";
import { require_dom_bufferstream } from "./lib/dom-bufferstream.js";
import { require_parser } from "./lib/parser.js";
var __wakaru_require_exif_parser_cache;
export function require_exif_parser() {
if (__wakaru_require_exif_parser_cache) return __wakaru_require_exif_parser_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_exif_parser_cache = module2;
var Parser5 = require_parser();
function getGlobal2() {
    return (1, eval)("this");
}
module2.exports = {
    create: function(buffer, global2) {
        global2 = global2 || getGlobal2();
        if (buffer instanceof global2.ArrayBuffer) {
            var DOMBufferStream = require_dom_bufferstream();
            return new Parser5(new DOMBufferStream(buffer, 0, buffer.byteLength, true, global2));
        } else {
            var NodeBufferStream = require_bufferstream();
            return new Parser5(new NodeBufferStream(buffer, 0, buffer.length, true));
        }
    }
};

return module2.exports;
}
