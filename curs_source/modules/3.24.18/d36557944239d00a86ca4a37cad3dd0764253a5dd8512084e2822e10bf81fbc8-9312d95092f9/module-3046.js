require.r(exports), require.d(exports, {
    default: ()=>n
});
var r = require("./module-3058.js"), s = require("./module-6274.js");
function n() {
    return {
        mime: "image/gif",
        encode: async (t)=>{
            const e = new s.BitmapImage(t);
            s.GifUtil.quantizeDekker(e, 256);
            const i = new s.GifFrame(t), r = new s.GifCodec;
            return (await r.encodeGif([
                i
            ], {})).buffer;
        },
        decode: (t)=>{
            const e = new r.GifReader(t), i = Buffer.alloc(e.width * e.height * 4);
            return e.decodeAndBlitFrameRGBA(0, i), {
                data: i,
                width: e.width,
                height: e.height
            };
        }
    };
}
