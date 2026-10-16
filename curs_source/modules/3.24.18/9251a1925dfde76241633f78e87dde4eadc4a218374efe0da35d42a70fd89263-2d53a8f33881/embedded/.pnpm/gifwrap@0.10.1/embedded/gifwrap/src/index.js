import { require_bitmapimage } from "./bitmapimage.js";
import { require_gif } from "./gif.js";
import { require_gifcodec } from "./gifcodec.js";
import { require_gifframe } from "./gifframe.js";
import { require_gifutil } from "./gifutil.js";
var __wakaru_require_src2_cache;
export function require_src2() {
if (__wakaru_require_src2_cache) return __wakaru_require_src2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_src2_cache = module2;
"use strict";
var BitmapImage2 = require_bitmapimage();
var { Gif, GifError: GifError2 } = require_gif();
var { GifCodec: GifCodec2 } = require_gifcodec();
var { GifFrame: GifFrame2 } = require_gifframe();
var GifUtil2 = require_gifutil();
module2.exports = {
    BitmapImage: BitmapImage2,
    Gif,
    GifCodec: GifCodec2,
    GifFrame: GifFrame2,
    GifUtil: GifUtil2,
    GifError: GifError2
};

return module2.exports;
}
