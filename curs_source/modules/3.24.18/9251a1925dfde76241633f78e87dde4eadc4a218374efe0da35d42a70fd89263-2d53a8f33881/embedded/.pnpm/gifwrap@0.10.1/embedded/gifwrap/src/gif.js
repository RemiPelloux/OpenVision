var __wakaru_require_gif_cache;
export function require_gif() {
if (__wakaru_require_gif_cache) return __wakaru_require_gif_cache;
var exports2 = {};
__wakaru_require_gif_cache = exports2;
"use strict";
var Gif = class {
    constructor(buffer, frames, spec){
        this.width = spec.width;
        this.height = spec.height;
        this.loops = spec.loops;
        this.usesTransparency = spec.usesTransparency;
        this.colorScope = spec.colorScope;
        this.frames = frames;
        this.buffer = buffer;
    }
};
Gif.GlobalColorsPreferred = 0;
Gif.GlobalColorsOnly = 1;
Gif.LocalColorsOnly = 2;
var GifError2 = class extends Error {
    constructor(messageOrError){
        super(messageOrError);
        if (messageOrError instanceof Error) {
            this.stack = "Gif" + messageOrError.stack;
        }
    }
};
exports2.Gif = Gif;
exports2.GifError = GifError2;

return exports2;
}
