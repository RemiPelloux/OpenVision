import { U6v, _$0, v$0 } from "./BPv.js";
import { Dc } from "./aiService.js";
import { c_ } from "./async.cursor.js";
import { Rs } from "./authenticationService.js";
import { Ag } from "./connectErrors.js";
import { Zu } from "./glass-log-service.js";
import { eh } from "./index_221.js";
import { Fie } from "./queryClient.js";
import { _me } from "./repo_pb_2.js";
import { E } from "./tslib.es6.js";
import { Ru } from "./use-feature-gate.react_2.js";
import { P2 } from "./use-glass-account.react.js";
import { In } from "./use-service.react_2.js";
import { dKe } from "./use-team.react.js";
import { OS } from "./yBp.js";
var eoc, toc, H6v, W6v, PDs, Z5n, G6v, noc;
export { G6v, H6v, PDs, W6v, Z5n, eoc, noc, toc };
var __wakaru_RYe_initialized = false;
export function RYe() {
if (__wakaru_RYe_initialized) return;
__wakaru_RYe_initialized = true;
"use strict";
E(), eh(), _me(), c_(), Dc(), Ag(), Rs(), Zu(), Ru(), P2(), In(), dKe(), eoc = 100, toc = [], H6v = 50, W6v = 3e4, PDs = 3e4, Z5n = new Fie({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: OS(2),
            staleTime: PDs
        }
    }
}), G6v = {
    staleTime: _$0,
    refetchOnWindowFocus: !0
}, noc = {
    authorizedNamespaces: v$0,
    list: (t, e, n, i, r)=>[
            ...U6v(t),
            e ?? null,
            n,
            i,
            r
        ]
};

}
