import { external_exports } from "../../../../../../../../external_exports.js";
import { init_zod } from "../../../../../../zod@3.25.76/node_modules/zod/index.js";
var Edge, JimpClassSchema;
export { Edge, JimpClassSchema };
var __wakaru_init_esm9_initialized = false;
export function init_esm9() {
if (__wakaru_init_esm9_initialized) return;
__wakaru_init_esm9_initialized = true;
init_zod();
(function(Edge2) {
    Edge2[Edge2["EXTEND"] = 1] = "EXTEND";
    Edge2[Edge2["WRAP"] = 2] = "WRAP";
    Edge2[Edge2["CROP"] = 3] = "CROP";
})(Edge || (Edge = {}));
JimpClassSchema = external_exports.object({
    bitmap: external_exports.object({
        data: external_exports.union([
            external_exports.instanceof(Buffer),
            external_exports.instanceof(Uint8Array)
        ]),
        width: external_exports.number(),
        height: external_exports.number()
    })
});

}
