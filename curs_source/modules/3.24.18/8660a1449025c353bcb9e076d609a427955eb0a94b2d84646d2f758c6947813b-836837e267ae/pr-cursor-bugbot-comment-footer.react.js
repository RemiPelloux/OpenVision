import { Ga } from "./Iwo.js";
import { Yye } from "./agent-submit-model-config.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { ju } from "./agent_pb.js";
import { Ss } from "./aiMiscServices.js";
import { sC } from "./backendClient.js";
import { NNg } from "./bugbot_connectweb.js";
import { g4t } from "./bugbot_pb.js";
import { mv } from "./editor-panel-context.react.js";
import { Zu } from "./glass-log-service.js";
import { Jen } from "./glass-markdown-description.react.js";
import { zc } from "./glass-notification-service.js";
import { Xf } from "./glass-opener-service.js";
import { iv } from "./index_16.js";
import { Mt } from "./index_197.js";
import { It } from "./instantiation.js";
import { of } from "./modelConfigServiceTypes.js";
import { DPt } from "./pr-comment-add-to-chat-footer.react.js";
import { nAC } from "./pr-cursor-bugbot-comment-analytics.js";
import { pl_ } from "./pr-cursor-comment-add-to-chat.js";
import { $fc } from "./pr-cursor-comment-footer.react.js";
import { LM } from "./selectedContextData.js";
import { E } from "./tslib.es6.js";
import { sAC } from "./use-clear-bugbot-fix-latch-on-resolve.react.js";
import { YBi } from "./use-editor-panel-message-target.react.js";
import { In } from "./use-service.react_2.js";
import { Xo } from "./uuid_2.js";
import { ze } from "./ze.js";
var Rc_, mvc, Pc_, Mc_, O5s, gvc, Dc_;
export { Dc_, Mc_, O5s, Pc_, Rc_, gvc, mvc };
var __wakaru_yAC_initialized = false;
export function yAC() {
if (__wakaru_yAC_initialized) return;
__wakaru_yAC_initialized = true;
"use strict";
E(), Mt(), iv(), ju(), NNg(), g4t(), Ga(), Xo(), It(), wl(), Ss(), sC(), of(), LM(), In(), Zu(), zc(), Xf(), Yye(), Jen(), mv(), YBi(), DPt(), nAC(), pl_(), $fc(), sAC(), Rc_ = "BUGBOT_FIX_IN_CURSOR", mvc = "BUGBOT_FIX_ALL_IN_CURSOR", Pc_ = "Fix Bugbot Finding", Mc_ = "Fix Bugbot Findings", O5s = "add-to-chat", gvc = ze.object({
    redisKey: ze.string().min(1),
    encryptionKey: ze.string().min(1),
    branch: ze.string().optional(),
    repoOwner: ze.string().optional(),
    repoName: ze.string().optional()
}), Dc_ = ze.union([
    ze.object({
        version: ze.literal(1),
        type: ze.literal(Rc_),
        data: gvc
    }),
    ze.object({
        version: ze.literal(1),
        type: ze.literal(mvc),
        data: gvc
    })
]);

}
