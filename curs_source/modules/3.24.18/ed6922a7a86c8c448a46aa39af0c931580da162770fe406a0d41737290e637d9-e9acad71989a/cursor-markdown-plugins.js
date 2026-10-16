import { kgo, z2n } from "./artifact-media-markdown.js";
import { N5v } from "./cursor-content-markdown.js";
import { Swt, wvo } from "./cursor-content-tag.js";
import { X5v } from "./remark-codex-citations.js";
import { Q5v } from "./remark-strip-memory-citations.js";
import { x } from "./tslib.es6.js";
import { L5v, Y5v, Z5v, _Pv, j5v, q5v } from "./xmo.js";
var xvo, poh, moh, goh;
export { goh, moh, poh, xvo };
var __wakaru_J5v_initialized = false;
export function J5v() {
if (__wakaru_J5v_initialized) return;
__wakaru_J5v_initialized = true;
"use strict";
x(), kgo(), N5v(), wvo(), q5v(), X5v(), Q5v(), xvo = {
    id: "cursor-markdown-base",
    remarkPlugins: [
        Z5v
    ],
    htmlBlockNames: z2n,
    preprocessMarkdown: _Pv,
    sanitizeSchema: {
        attributes: {
            img: [
                "src",
                "alt",
                "width",
                "height",
                "loading"
            ],
            video: [
                "src",
                "controls",
                "muted",
                "preload",
                "width",
                "height",
                "poster"
            ],
            audio: [
                "src",
                "controls",
                "muted",
                "preload"
            ],
            source: [
                "src",
                "type"
            ],
            shell: [
                "shell_tool_call_id",
                "shellToolCallId"
            ],
            diff: [
                "edit_tool_call_id",
                "editToolCallId"
            ],
            textreference: [
                "path",
                "start",
                "end",
                "alt"
            ],
            preview: [
                "url",
                "title",
                "description",
                "image"
            ]
        },
        protocols: {
            href: [
                "file"
            ]
        }
    }
}, poh = {
    id: "cursor-markdown-citations",
    remarkPlugins: [
        j5v
    ],
    preprocessMarkdown: Y5v,
    preserveMarkdownSource: (e)=>e.includes("\u3010"),
    requiresRawHtml: !0,
    sanitizeSchema: {
        tagNames: [
            "cite"
        ],
        attributes: {
            cite: [
                "dataCitationHref",
                "dataCitationIndex",
                "dataCitationType",
                "dataCitationStart",
                "dataCitationEnd",
                "data-citation-href",
                "data-citation-index",
                "data-citation-type",
                "data-citation-start",
                "data-citation-end"
            ]
        }
    }
}, moh = {
    id: "cursor-markdown-subagent-links",
    sanitizeSchema: {
        protocols: {
            href: [
                "subagent"
            ]
        }
    }
}, goh = {
    id: "cursor-markdown-content-references",
    requiresRawHtml: !0,
    preprocessMarkdown: L5v,
    htmlBlockNames: [
        Swt
    ],
    sanitizeSchema: {
        tagNames: [
            Swt
        ],
        attributes: {
            [Swt]: [
                "kind",
                "src",
                "version"
            ]
        }
    }
};

}
