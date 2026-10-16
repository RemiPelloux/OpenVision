class i {
    constructor(t, e, i){
        this.width = i.width, this.height = i.height, this.loops = i.loops, this.usesTransparency = i.usesTransparency, this.colorScope = i.colorScope, this.frames = e, this.buffer = t;
    }
}
i.GlobalColorsPreferred = 0, i.GlobalColorsOnly = 1, i.LocalColorsOnly = 2;
class r extends Error {
    constructor(t){
        super(t), t instanceof Error && (this.stack = "Gif" + t.stack);
    }
}
exports.Gif = i, exports.GifError = r;
