import { Ai, jn } from "./HVr.js";
import { x } from "./tslib.es6.js";
var Wgn, w2c;
export { Wgn, w2c };
var __wakaru_dgg_initialized = false;
export function dgg() {
if (__wakaru_dgg_initialized) return;
__wakaru_dgg_initialized = true;
"use strict";
x(), jn(), Wgn = Ai ? "\u2318" : "Ctrl", w2c = [
    {
        name: "terminal.cmdk",
        showOn: {
            sequences: [
                {
                    events: [
                        [
                            "*",
                            "terminal.show",
                            "terminal.focus",
                            "terminal.type"
                        ],
                        [
                            "*",
                            "chat.open",
                            "chat.input.focus",
                            "chat.insert_selection.terminal.empty"
                        ],
                        [
                            "*",
                            "chat.type",
                            "chat.paste",
                            "_"
                        ],
                        "chat.submit",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "editor.paste",
                            "_"
                        ],
                        "chat.copy.codeblock",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "editor.type",
                            "editor.paste",
                            "_"
                        ],
                        [
                            "*",
                            "terminal.type",
                            "_"
                        ],
                        "terminal.paste"
                    ],
                    timeout_ms: 12e4
                }
            ],
            gracePeriod_ms: 720 * 60 * 6e4
        },
        popup: {
            header: `Generate Terminal Command (${Wgn} + K)`,
            subheader: `You can use ${Wgn} + K to generate commands directly inside the terminal`,
            location: "terminal"
        },
        disableOn: {
            sequences: [
                {
                    events: [
                        "terminal.cmdk.submit"
                    ],
                    timeout_ms: 1 / 0
                }
            ],
            gracePeriod_ms: 720 * 60 * 6e4
        }
    },
    {
        name: "editor.cmdk",
        showOn: {
            sequences: [
                {
                    events: [
                        "editor.copy",
                        [
                            "*",
                            "chat.open",
                            "chat.input.focus",
                            "chat.insert_selection.editor.empty"
                        ],
                        [
                            "*",
                            "chat.type",
                            "_"
                        ],
                        [
                            "*",
                            "chat.paste"
                        ],
                        [
                            "*",
                            "chat.type",
                            "_"
                        ],
                        "chat.submit",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "editor.paste",
                            "_"
                        ],
                        "chat.copy.codeblock",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "terminal.paste",
                            "terminal.type",
                            "_"
                        ],
                        [
                            "*",
                            "editor.type",
                            "_"
                        ],
                        "editor.paste"
                    ],
                    timeout_ms: 12e4
                },
                {
                    events: [
                        "chat.open",
                        "chat.insert_selection.editor.non_empty",
                        [
                            "*",
                            "_",
                            "chat.input.focus"
                        ],
                        [
                            "*",
                            "chat.type",
                            "_"
                        ],
                        "chat.submit",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "terminal.paste",
                            "_"
                        ],
                        "chat.copy.codeblock",
                        [
                            "*",
                            "!",
                            "chat.submit",
                            "terminal.paste",
                            "terminal.type",
                            "_"
                        ],
                        [
                            "*",
                            "editor.type",
                            "_"
                        ],
                        "editor.paste"
                    ],
                    timeout_ms: 12e4
                }
            ],
            gracePeriod_ms: 720 * 60 * 6e4
        },
        popup: {
            header: `Edit Code (${Wgn} + K)`,
            subheader: `You can select code and edit it in your editor using ${Wgn} + K`,
            location: "editor"
        },
        disableOn: {
            sequences: [
                {
                    events: [
                        "editor.cmdk.submit"
                    ],
                    timeout_ms: 1 / 0
                }
            ],
            gracePeriod_ms: 720 * 60 * 6e4
        }
    }
];

}
