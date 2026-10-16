import { Jvr, Qvr, Yvr } from "./Iwr.js";
import { Gvr } from "./closing.js";
import { EB } from "./index_10.js";
import { vNe } from "./index_11.js";
import { vFt } from "./index_129.js";
import { CNe } from "./index_14.js";
import { ocr } from "./index_40.js";
import { k5i } from "./opening.js";
import { i } from "./plugin-brand-icon.js";
var Ihe;
export { Ihe };
var __wakaru_v5i_initialized = false;
export function v5i() {
if (__wakaru_v5i_initialized) return;
__wakaru_v5i_initialized = true;
ocr(), vNe(), EB(), CNe(), vFt(), Gvr(), k5i(), Ihe = {
    name: [
        [
            `	
\f\r &/=>`.split(""),
            `	
\f\r "&'/=>\``.split("")
        ],
        [
            `\0	
\f\r "&'/<=>`.split(""),
            `\0	
\f\r "&'/<=>\``.split("")
        ]
    ],
    unquoted: [
        [
            `	
\f\r &>`.split(""),
            `\0	
\f\r "&'<=>\``.split("")
        ],
        [
            `\0	
\f\r "&'<=>\``.split(""),
            `\0	
\f\r "&'<=>\``.split("")
        ]
    ],
    single: [
        [
            "&'".split(""),
            "\"&'`".split("")
        ],
        [
            "\0&'".split(""),
            "\0\"&'`".split("")
        ]
    ],
    double: [
        [
            '"&'.split(""),
            "\"&'`".split("")
        ],
        [
            '\0"&'.split(""),
            "\0\"&'`".split("")
        ]
    ]
}, i(Yvr, "element"), i(Jvr, "serializeAttributes"), i(Qvr, "serializeAttribute");

}
