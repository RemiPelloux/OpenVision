import { Ss } from "./aiMiscServices.js";
import { sd } from "./chat_pb.js";
import { tU } from "./composerMessagesHelpers.js";
import { pa } from "./constants_8.js";
import { Zu } from "./glass-log-service.js";
import { zc } from "./glass-notification-service.js";
import { xc } from "./glass-storage-service.js";
import { BS } from "./glass-toast.js";
import { FO } from "./index_10.ts";
import { q6C } from "./move-queued-item-to-side-chat.js";
import { Bt } from "./nls.js";
import { $6C } from "./queue-rich-text-preview.js";
import { W6C } from "./queued-message-mutation-lock.js";
import { dN } from "./settingsScrollIds.js";
import { Hqe } from "./simulatedMessageMetadataUtils.js";
import { iAt } from "./startMultitasking.js";
import { E } from "./tslib.es6.js";
import { uKe } from "./use-configuration-value.react.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { fee } from "./use-glass-application-property.react.js";
import { NFs } from "./use-inflight-migration-agent-ids.react.js";
import { qDe } from "./use-open-glass-settings.react.js";
import { In } from "./use-service.react_2.js";
import { wu } from "./utilities_3.js";
import { pi } from "./ze.js";
var __wakaru_lg__initialized = false;
export function lg_() {
if (__wakaru_lg__initialized) return;
__wakaru_lg__initialized = true;
"use strict";
E(), FO(), pi(), sd(), pa(), Bt(), wu(), tU(), dN(), Hqe(), iAt(), Ss(), Zu(), zc(), BS(), xc(), $6C(), W6C(), q6C(), uKe(), Ru(), fee(), NFs(), qDe(), In();

}
