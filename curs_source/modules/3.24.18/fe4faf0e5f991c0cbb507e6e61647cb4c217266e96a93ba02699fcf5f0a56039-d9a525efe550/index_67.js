import { gcr, hcr } from "./index_45.js";
import { Ovi } from "./index_46.js";
import { Dcr, Lcr } from "./index_48.js";
import { Bvi } from "./index_49.js";
import { Ocr, zcr } from "./index_50.js";
import { Uvi } from "./index_51.js";
import { Blr, jlr } from "./index_63.js";
import { A3i } from "./index_64.js";
import { Ulr, qlr } from "./index_65.js";
import { $3i } from "./index_66.js";
import { i } from "./plugin-brand-icon.js";
function Hlr() {
    return [
        hcr(),
        Lcr(),
        Ocr(),
        jlr(),
        qlr()
    ];
}
function Zlr(r) {
    return {
        extensions: [
            gcr(),
            Dcr(r),
            zcr(),
            Blr(r),
            Ulr()
        ]
    };
}
export { Hlr, Zlr };
var __wakaru_I3i_initialized = false;
export function I3i() {
if (__wakaru_I3i_initialized) return;
__wakaru_I3i_initialized = true;
Ovi(), Bvi(), Uvi(), A3i(), $3i(), i(Hlr, "gfmFromMarkdown"), i(Zlr, "gfmToMarkdown");

}
