import { Oxh } from "./closing.js";
import { lui } from "./find.js";
import { mla } from "./index_128.js";
import { qbn } from "./index_47.js";
import { SMr } from "./index_48.js";
import { kMr } from "./index_50.js";
import { Qgh } from "./index_67.js";
import { loS } from "./opening.js";
import { E } from "./tslib.es6.js";
var mdi;
export { mdi };
var __wakaru_hoS_initialized = false;
export function hoS() {
if (__wakaru_hoS_initialized) return;
__wakaru_hoS_initialized = true;
E(), Qgh(), SMr(), qbn(), kMr(), Oxh(), loS(), lui(), mla(), mdi = {
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
};

}
