import { B0i, oXa } from "./artifact-media-markdown.js";
import { tnk } from "./cursor-content-markdown.js";
import { Bqt, OQa } from "./cursor-content-tag.js";
import { Bq1, dnk, enk, gnk, hnk, vnk } from "./gYa.js";
import { fnk } from "./remark-codex-citations.js";
import { _nk } from "./remark-strip-memory-citations.js";
import { E } from "./tslib.es6.js";
var jQa, Oqm, Fqm, Bqm;
export { Bqm, Fqm, Oqm, jQa };
var __wakaru_bnk_initialized = false;
export function bnk() {
if (__wakaru_bnk_initialized) return;
__wakaru_bnk_initialized = true;
"use strict";
E(), oXa(), tnk(), OQa(), hnk(), fnk(), _nk(), jQa = {
    id: "cursor-markdown-base",
    remarkPlugins: [
        vnk
    ],
    htmlBlockNames: B0i,
    preprocessMarkdown: Bq1,
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
}, Oqm = {
    id: "cursor-markdown-citations",
    remarkPlugins: [
        dnk
    ],
    preprocessMarkdown: gnk,
    preserveMarkdownSource: (t)=>t.includes("\u3010"),
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
}, Fqm = {
    id: "cursor-markdown-subagent-links",
    sanitizeSchema: {
        protocols: {
            href: [
                "subagent"
            ]
        }
    }
}, Bqm = {
    id: "cursor-markdown-content-references",
    requiresRawHtml: !0,
    preprocessMarkdown: enk,
    htmlBlockNames: [
        Bqt
    ],
    sanitizeSchema: {
        tagNames: [
            Bqt
        ],
        attributes: {
            [Bqt]: [
                "kind",
                "src",
                "version"
            ]
        }
    }
};

}
