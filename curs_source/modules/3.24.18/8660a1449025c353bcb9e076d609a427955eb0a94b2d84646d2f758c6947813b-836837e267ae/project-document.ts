import { CLa } from "./agent-links.ts";
import { nl } from "./index.ts";
import { dOa } from "./project-document-frontmatter.ts";
import { aOa } from "./project-document-nesting.ts";
import { E } from "./tslib.es6.js";
var uSi, p5p, GP1, dSi, m5p, sqr, pOa, mOa, g5p, oqr, f5p, v5p, aqr, ACn, lqr, _5p, b5p, y5p, S5p, k5p, w5p, C5p, gOa, T5p, E5p, I5p;
export { ACn, C5p, E5p, GP1, I5p, S5p, T5p, _5p, aqr, b5p, dSi, f5p, g5p, gOa, k5p, lqr, m5p, mOa, oqr, p5p, pOa, sqr, uSi, v5p, w5p, y5p };
var __wakaru_cqr_initialized = false;
export function cqr() {
if (__wakaru_cqr_initialized) return;
__wakaru_cqr_initialized = true;
"use strict";
E(), nl(), CLa(), aOa(), dOa(), uSi = "glass_project_notes_document", p5p = "notes.md", GP1 = 256 * 1024, dSi = [
    {
        id: "for-review",
        label: "For Review",
        icon: "circle",
        complete: !1
    },
    {
        id: "in-progress",
        label: "In Progress",
        icon: "spinner",
        complete: !1
    },
    {
        id: "queued",
        label: "Queued",
        icon: "circle-dashed",
        complete: !1
    },
    {
        id: "done",
        label: "Done",
        icon: "check-circle",
        complete: !0
    },
    {
        id: "canceled",
        label: "Canceled",
        icon: "x-circle",
        complete: !0
    }
], m5p = "circle", sqr = [
    "gray",
    "red",
    "orange",
    "yellow",
    "green",
    "cyan",
    "blue",
    "purple",
    "magenta"
], pOa = "gray", mOa = sqr.filter((t)=>t !== pOa), g5p = sqr.map((t)=>`\`${t}\``).join(", "), oqr = "Tasks", f5p = /^\*\*([A-Z][A-Z0-9]{0,5}-\d{1,6})\*\*(?=\s|$)/, v5p = /^[A-Z][A-Z0-9]{0,5}-\d{1,6}$/, aqr = /^([ \t]*)-\s+\[([ xX])\]\s*(.*)$/, ACn = /^(#{1,6})\s+(.*?)\s*#*\s*$/, lqr = /^\s{0,3}(`{3,}|~{3,})/, _5p = /\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, b5p = /(^|\s)@([A-Z][\w-]*(?:\s[A-Z][\w-]*)?)(?=\s|$|[.,;:])/g, y5p = /`[^`\n]+`/, S5p = /\/pull\/(\d+)(?=[/?#]|$)/, k5p = /^#(\d+)$/, w5p = /(^|\s)#([A-Za-z][A-Za-z0-9_-]*)(?=\s|$)/g, C5p = {
    description: void 0,
    taskPrefix: void 0,
    statuses: void 0,
    tags: []
}, gOa = "Each entry under `statuses` needs `label: <name>`, and may add `icon: <cursor-icon>` and `complete: true`.", T5p = /^(?:\/|[A-Za-z]:[\\/])/, E5p = "Only `### <status>` headings and checkbox tasks (`- [ ]` or `- [x]`) belong under Tasks.", I5p = "A task row holds only the id, an optional `^PARENT-ID` token, the title, at most one declared `#tag`, `[@Agent](agent-link)` chips, `[#N](pr-url)` chips, and one `[Label](store-file-path)` document chip whose target is the file's absolute Agent Store path. Remove inline code and other links from the row; put reference links under `## Links`.";

}
