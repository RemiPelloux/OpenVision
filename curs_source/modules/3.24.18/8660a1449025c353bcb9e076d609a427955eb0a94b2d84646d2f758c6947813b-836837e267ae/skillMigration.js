import { pa, vP } from "./constants_8.js";
import { Qis, dN } from "./settingsScrollIds.js";
import { jNn } from "./skillIdentity.js";
import { E } from "./tslib.es6.js";
var fHl, uOi, DJf, NJf, qye, FAt;
export { DJf, FAt, NJf, fHl, qye, uOi };
var __wakaru_jTs_initialized = false;
export function jTs() {
if (__wakaru_jTs_initialized) return;
__wakaru_jTs_initialized = true;
"use strict";
E(), pa(), dN(), jNn(), fHl = 5, uOi = {
    kind: "hidden"
}, DJf = {
    syncEnabled: !1,
    disabledByTeamAdmin: !1
}, NJf = `command:${vP}?${encodeURIComponent(JSON.stringify({
    openTab: "chat",
    idToScrollTo: Qis
}))}`, qye = {
    offerTitle: "Use your skills with Cloud Agents",
    offerDescription: "Sync your local skills to use them with Cloud Agents. Any changes will update automatically.",
    offerAction: "Sync",
    offerDismiss: "Not now",
    progressTitle: (t)=>t === "TO_STORE" ? "Syncing your skills\u2026" : "Moving your skills back to this machine\u2026",
    progressCancel: "Cancel",
    progressDescription: (t, e)=>`${t} of ${e}`,
    syncedToastMessage: `Skills synced. Manage setting [here](${NJf})`,
    notReady: "Cursor can't sync your skills right now. Try again in a moment.",
    ariaLabel: "Use your skills with Cloud Agents"
}, FAt = {
    label: "Sync Skills for Cloud Agents",
    description: "Cursor syncs your local skills so they can be used with Cloud Agents. Turn this off to disable syncing.",
    disabledByTeamAdmin: "Disabled by your team admin.",
    disabledByPrivacyMode: "Unavailable under your privacy mode, which keeps your code off Cursor\u2019s servers.",
    storeUnavailable: "Cursor is still starting up. Try again in a moment.",
    migrationRunning: "Moving your skills. This takes a moment.",
    progressLabel: (t)=>t === "TO_STORE" ? "Syncing" : "Restoring"
};

}
