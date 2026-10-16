import { import_gifwrap, import_omggif } from "./node_modules/.pnpm/@jimp+js-gif@1.6.0/node_modules/@jimp/js-gif/dist/esm/index.js";
export function gif() {
    return {
        mime: "image/gif",
        encode: async (bitmap)=>{
            const gif2 = new import_gifwrap.BitmapImage(bitmap);
            import_gifwrap.GifUtil.quantizeDekker(gif2, 256);
            const newFrame = new import_gifwrap.GifFrame(bitmap);
            const gifCodec = new import_gifwrap.GifCodec();
            const newGif = await gifCodec.encodeGif([
                newFrame
            ], {});
            return newGif.buffer;
        },
        decode: (data)=>{
            const gifObj = new import_omggif.default.GifReader(data);
            const gifData = Buffer.alloc(gifObj.width * gifObj.height * 4);
            gifObj.decodeAndBlitFrameRGBA(0, gifData);
            return {
                data: gifData,
                width: gifObj.width,
                height: gifObj.height
            };
        }
    };
}

export var esm_exports6 = {};
Object.defineProperty(esm_exports6, "default", {
    enumerable: true,
    get: ()=>gif
});
