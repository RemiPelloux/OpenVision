import { cI } from "./LexicalComposerContext.js";
import { NA } from "./api_7.js";
import { LX } from "./api_9.js";
import { Hn } from "./dom_2.js";
import { jd } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { Bs } from "./window.js";
import { pi, rl } from "./ze.js";
var Vml, Kml;
export { Kml, Vml };
var __wakaru_Tus_initialized = false;
export function Tus() {
if (__wakaru_Tus_initialized) return;
__wakaru_Tus_initialized = true;
"use strict";
E(), at(), pi(), Hn(), Bs(), LX(), NA(), cI(), Vml = (t)=>{
    const e = rl().document.getElementById("typeahead-menu");
    if (!e) return;
    const n = e.getBoundingClientRect();
    n.top + n.height > rl().innerHeight && e.scrollIntoView({
        block: "center"
    }), n.top < 0 && e.scrollIntoView({
        block: "center"
    }), t.scrollIntoView({
        block: "nearest"
    });
}, Kml = jd("SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND");

}
