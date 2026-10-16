import { external_exports } from "../../../../../../../../external_exports.js";
import { ResizeStrategy, init_constants3 } from "./constants.js";
import { init_resize, resize_default } from "./modules/resize.js";
import { init_resize2, operations } from "./modules/resize2.js";
import { init_zod } from "../../../../../../zod@3.25.76/node_modules/zod/index.js";
var ResizeOptionsSchema, ScaleToFitOptionsSchema, ScaleComplexOptionsSchema, methods;
export { ResizeOptionsSchema, ScaleComplexOptionsSchema, ScaleToFitOptionsSchema, methods };
var __wakaru_init_esm19_initialized = false;
export function init_esm19() {
if (__wakaru_init_esm19_initialized) return;
__wakaru_init_esm19_initialized = true;
init_constants3();
init_zod();
init_resize();
init_resize2();
init_constants3();
ResizeOptionsSchema = external_exports.union([
    external_exports.object({
        w: external_exports.number().min(0),
        h: external_exports.number().min(0).optional(),
        mode: external_exports.nativeEnum(ResizeStrategy).optional()
    }),
    external_exports.object({
        w: external_exports.number().min(0).optional(),
        h: external_exports.number().min(0),
        mode: external_exports.nativeEnum(ResizeStrategy).optional()
    })
]);
ScaleToFitOptionsSchema = external_exports.object({
    w: external_exports.number().min(0),
    h: external_exports.number().min(0),
    mode: external_exports.nativeEnum(ResizeStrategy).optional()
});
ScaleComplexOptionsSchema = external_exports.object({
    f: external_exports.number().min(0),
    mode: external_exports.nativeEnum(ResizeStrategy).optional()
});
methods = {
    resize (image2, options2) {
        const { mode } = ResizeOptionsSchema.parse(options2);
        let w2;
        let h;
        if (typeof options2.w === "number") {
            w2 = options2.w;
            h = options2.h ?? image2.bitmap.height * (w2 / image2.bitmap.width);
        } else if (typeof options2.h === "number") {
            h = options2.h;
            w2 = options2.w ?? image2.bitmap.width * (h / image2.bitmap.height);
        } else {
            throw new Error("w must be a number");
        }
        w2 = Math.round(w2) || 1;
        h = Math.round(h) || 1;
        if (mode && typeof operations[mode] === "function") {
            const dst = {
                data: Buffer.alloc(w2 * h * 4),
                width: w2,
                height: h
            };
            operations[mode](image2.bitmap, dst);
            image2.bitmap = dst;
        } else {
            const resize = new resize_default(image2.bitmap.width, image2.bitmap.height, w2, h, true, true, (buffer)=>{
                image2.bitmap.data = Buffer.from(buffer);
                image2.bitmap.width = w2;
                image2.bitmap.height = h;
            });
            resize.resize(image2.bitmap.data);
        }
        return image2;
    },
    scale (image2, options2) {
        const { f: f2, mode } = typeof options2 === "number" ? {
            f: options2
        } : ScaleComplexOptionsSchema.parse(options2);
        const w2 = image2.bitmap.width * f2;
        const h = image2.bitmap.height * f2;
        return this.resize(image2, {
            w: w2,
            h,
            mode
        });
    },
    scaleToFit (image2, options2) {
        const { h, w: w2, mode } = ScaleToFitOptionsSchema.parse(options2);
        const f2 = w2 / h > image2.bitmap.width / image2.bitmap.height ? h / image2.bitmap.height : w2 / image2.bitmap.width;
        return this.scale(image2, {
            f: f2,
            mode
        });
    }
};

}
