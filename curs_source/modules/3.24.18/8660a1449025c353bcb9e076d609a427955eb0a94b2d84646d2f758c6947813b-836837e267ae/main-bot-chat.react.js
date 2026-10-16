import { zPt } from "./followup-header-layout.js";
import { pUi } from "./grok-bot-transcript-entry.js";
import { Mt } from "./index_197.js";
import { _wc } from "./main-bot-agent-message-line.react.js";
import { IUi } from "./main-bot-agent-provider.react.js";
import { cx_ } from "./main-bot-failed.react.js";
import { HE, t7e } from "./main-bot-name.js";
import { Wwc } from "./main-bot-projects-tray.react.js";
import { Sx_ } from "./main-bot-reply-badge.react.js";
import { WdT } from "./main-bot-submit-loading.react.js";
import { khT } from "./main-bot-transcript-list.react.js";
import { Zwc } from "./main-bot-transcript-row-view.react.js";
import { i0c } from "./main-bot-transcript-rows.js";
import { kUi } from "./main-bot-transcript-state.js";
import { $b } from "./stylex.mjs";
import { E } from "./tslib.es6.js";
import { vLn } from "./use-glass-chat-max-width.react.js";
import { QVe } from "./use-glass-panel-actions.react.js";
import { BA_ } from "./use-main-bot-submit.react.js";
import { HhT } from "./use-main-bot-transcript.react.js";
var k0c, w0c, J9s;
export { J9s, k0c, w0c };
var __wakaru_JhT_initialized = false;
export function JhT() {
if (__wakaru_JhT_initialized) return;
__wakaru_JhT_initialized = true;
"use strict";
E(), Mt(), $b(), vLn(), QVe(), zPt(), IUi(), cx_(), t7e(), pUi(), _wc(), Wwc(), Sx_(), Zwc(), WdT(), khT(), i0c(), kUi(), BA_(), HhT(), k0c = `${HE} may not have received the message`, w0c = `Message ${HE}`, J9s = {
    composer: {
        kSGwAc: "glass-amitd3",
        kzqmXN: "glass-h8yej3",
        kg3NbH: "glass-1px5tkr",
        kGO01o: "glass-20eq2h",
        k9g6sI: "glass-12h1iku",
        $$css: !0
    },
    traySurface: {
        kWkggS: "glass-1va4qhv",
        $$css: !0
    },
    composerMaxWidth: (t)=>[
            {
                ks0D6T: t != null ? "glass-f68679" : t,
                $$css: !0
            },
            {
                "--x-maxWidth": ((e)=>typeof e == "number" ? e + "px" : e ?? void 0)(t)
            }
        ]
};

}
