import { Otd, tQn } from "./automations.ts";
import { nl } from "./index.ts";
import { E } from "./tslib.es6.js";
var Zl_, Ql_, Zfc, Qfc, Jl_, ec_, tc_, nc_, ic_, rc_, sc_, oc_, ac_, Jfc, evc, tvc, D5s, lc_, nvc, cc_, uc_, dc_, hc_, pc_, mc_, ivc, rvc, gc_, fc_, vc_, h8i, _c_, bc_, i4n, N5s, svc;
export { D5s, Jfc, Jl_, N5s, Qfc, Ql_, Zfc, Zl_, _c_, ac_, bc_, cc_, dc_, ec_, evc, fc_, gc_, h8i, hc_, i4n, ic_, ivc, lc_, mc_, nc_, nvc, oc_, pc_, rc_, rvc, sc_, svc, tc_, tvc, uc_, vc_ };
var __wakaru_ovc_initialized = false;
export function ovc() {
if (__wakaru_ovc_initialized) return;
__wakaru_ovc_initialized = true;
"use strict";
E(), nl(), Zl_ = "origin-cursor-managed-actor", Ql_ = /\[bot\]$/, Zfc = /<!--\s*CURSOR_AUTOMATION_ID:\s*([^|]+?)\s*\|\s*RUN_ID:\s*([\s\S]+?)\s*-->\s*/i, Qfc = /\s*<div\b[^>]*>(?=[\s\S]*?(?:Open in Web|Open in Cursor|View Automation))[\s\S]*?<\/div>\s*/i, Jl_ = [
    /\s*(?:<p>(?:\s|&nbsp;)*<\/p>\s*)*<p>\s*<sub>\s*Sent by Cursor Automation:\s*([^<]+?)\s*<\/sub>\s*<\/p>\s*$/i,
    /\s*<sub>\s*Sent by Cursor Automation:\s*([^<]+?)\s*<\/sub>\s*$/i,
    /\s*!\[\s*Sent by Cursor Automation:\s*([^\]\r\n]+?)\s*\]\([^)]*\)\s*$/i,
    /\s*(?:<[^>]+>\s*)*<img\b[^>]*\balt=["']\s*Sent by Cursor Automation:\s*([^"']+?)\s*["'][\s\S]*$/i,
    /\s*Sent by Cursor Automation:\s*([^<\r\n]+?)\s*$/i
], ec_ = /\b(?:data-href|href)="([^"]+)"/gi, tc_ = /\bhref="([^"]+)"/i, nc_ = /<!--\s*BUGBOT_REVIEW\s*-->\s*/i, ic_ = /\s*<!--\s*BUGBOT_FIX_ALL\s*-->([\s\S]*?)<!--\s*\/BUGBOT_FIX_ALL\s*-->\s*/i, rc_ = /<a\b[^>]*href="([^"]+)"[^>]*>[\s\S]*?(?:Fix in Cursor|Fix in Web|Open in Cursor|Open in Web)[\s\S]*?<\/a>/gi, sc_ = /\s*<!--\s*BUGBOT_AUTOFIX_REVIEW_FOOTNOTE_BEGIN\s*-->([\s\S]*?)<!--\s*BUGBOT_AUTOFIX_REVIEW_FOOTNOTE_END\s*-->\s*/i, oc_ = /\s*<!--\s*BUGBOT_AUTOFIX_REVIEW_FOOTNOTE_BEGIN\s*-->\s*/i, ac_ = /\s*<!--\s*BUGBOT_AUTOFIX_REVIEW_FOOTNOTE_END\s*-->\s*/i, Jfc = /<!--\s*BUGBOT_AUTOFIX_COMPLETION\s*-->\s*/i, evc = /\s*<p>\s*<a\b[^>]*href="[^"]*"[^>]*>[\s\S]*?Create PR[\s\S]*?<\/a>\s*<\/p>\s*/i, tvc = /\s*Or push these changes by commenting:\s*```(?:\w+)?\s*([\s\S]*?)```\s*/i, D5s = /\s*<details><summary>([^<]+)<\/summary>\s*([\s\S]*?)<\/details>\s*/i, lc_ = /```diff\s*([\s\S]*?)```\s*/i, nvc = /\s*<sub>\s*You can send follow-ups to the cloud agent\s+<a\b[^>]*href="([^"]+)"[^>]*>\s*here\s*<\/a>\.?\s*<\/sub>\s*/i, cc_ = /\s*<sup>Reviewed by \[Cursor Bugbot\]\(([^)]+)\) for commit ([0-9a-f]+)\. Configure \[here\]\(([^)]+)\)\.<\/sup>\s*$/i, uc_ = /<p>(?:\s|&nbsp;)*<\/p>/gi, dc_ = /(?:^|\r?\n)[ \t]*(?:&nbsp;|\u00a0)[ \t]*(?=\r?\n|$)/gi, hc_ = /(?:^|\r?\n)[ \t]*```(?:\w+)?[ \t]*(?:\r?\n[ \t]*)*```[ \t]*(?=\r?\n|$)/g, pc_ = /(?:^|\r?\n)[ \t]*(?:<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>|<br\s*\/?>|&nbsp;)[ \t]*$/i, mc_ = /(?:^|\r?\n)[ \t]*```(?:\w+)?[ \t]*(?:\r?\n[ \t]*)*```[ \t]*$/, ivc = /^(?:<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>|<br\s*\/?>|&nbsp;)$/i, rvc = /^(```|~~~)(?:\w+)?$/, gc_ = /^ {0,3}(`{3,}|~{3,})/, fc_ = /^ {0,3}>/, vc_ = /^(?: {4}|\t)/, h8i = /<!--\s*BUGBOT_BUG_ID:\s*[\s\S]*?-->/gi, _c_ = /<!--\s*LOCATIONS START[\s\S]*?LOCATIONS END\s*-->/gi, bc_ = /<(code|pre|blockquote)\b[\s\S]*?<\/\1>/gi, i4n = "\0", N5s = "/agents/", svc = [
    `${Otd}/`,
    `${tQn}/`
];

}
