import { Gt, Qe } from "./Iwo.js";
import { xPw } from "./composerFindHighlightSheet.js";
import { NPw } from "./composerTranscriptFindEngine.js";
import { XVt } from "./composerTranscriptFindTypes.js";
import { XSf } from "./composerUserNavigationScroll.js";
import { Hn } from "./dom_2.js";
import { QRn } from "./htmlSearchUtils.js";
import { E } from "./tslib.es6.js";
var xws, S7f, k7f, uBl;
export { S7f, k7f, uBl, xws };
var __wakaru_w7f_initialized = false;
export function w7f() {
if (__wakaru_w7f_initialized) return;
__wakaru_w7f_initialized = true;
"use strict";
E(), Hn(), Gt(), Qe(), QRn(), XSf(), xPw(), NPw(), XVt(), xws = Object.freeze({
    visible: !1,
    focusRequest: 0,
    query: "",
    options: Object.freeze({
        isRegex: !1,
        isCaseSensitive: !1,
        isWholeWord: !1
    }),
    resultIndex: -1,
    resultCount: 0,
    truncated: !1,
    resultPending: !1
}), S7f = ".composer-messages-container, .composer-messages, .conversation-container, [data-composer-messages]", k7f = ".composer-messages-standalone-sidecar-host", uBl = new Set([
    "auto",
    "scroll"
]);

}
