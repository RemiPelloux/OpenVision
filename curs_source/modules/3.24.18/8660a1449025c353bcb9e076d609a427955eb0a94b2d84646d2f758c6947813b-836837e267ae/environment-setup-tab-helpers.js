import { pd } from "./background_composer_pb.js";
import { kl } from "./browser.ts";
import { sd } from "./chat_pb.js";
import { Du } from "./dashboard_pb.js";
import { uZw } from "./env-setup-actions.ts";
import { pZw } from "./environment-setup-mcp-call-adapter.js";
import { d_ } from "./index_205.js";
import { bGl } from "./index_29.ts";
import { ub } from "./localAgentRepository.js";
import { E } from "./tslib.es6.js";
import { Bs } from "./window.js";
var CGl;
export { CGl };
var __wakaru_pLn_initialized = false;
export function pLn() {
if (__wakaru_pLn_initialized) return;
__wakaru_pLn_initialized = true;
"use strict";
E(), bGl(), d_(), uZw(), kl(), pd(), sd(), Du(), Bs(), ub(), pZw(), CGl = {
    egressAllowlist: [],
    egressMode: void 0,
    snapshotId: void 0,
    installScript: "",
    startScript: ""
};

}
