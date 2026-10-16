import { E1, dr } from "./codicons.js";
import { E, ua } from "./configurationRegistry.js";
import { Ne } from "./nls.js";
import { Yr, oe } from "./platform.js";
import { ri } from "./platform_2.js";
import { _et } from "./terminalProfiles.js";
import { h } from "./tslib.es6.js";
function n4(e) {
    switch(e){
        case 0:
            return "Web";
        case 1:
            return "Mac";
        case 2:
            return "Linux";
        case 3:
            return "Windows";
    }
}
function kfe() {
    return Object.values(dr);
}
function N2(e) {
    const t = e === Yr.Linux ? "linux" : e === Yr.Mac ? "osx" : "windows";
    return E(2263, null, n4(e), '```json\n"terminal.integrated.profile.' + t + '": {\n  "bash": null\n}\n```', "[", "](https://code.visualstudio.com/docs/terminal/profiles)");
}
var T_e, k_e, dl, W1, B1, S_e;
export { B1, N2, S_e, T_e, W1, dl, k_e, kfe, n4 };
var __wakaru_ket_initialized = false;
export function ket() {
if (__wakaru_ket_initialized) return;
__wakaru_ket_initialized = true;
"use strict";
h(), E1(), oe(), Ne(), ua(), ri(), _et(), T_e = {
    type: [
        "string",
        "null"
    ],
    enum: [
        "terminal.ansiBlack",
        "terminal.ansiRed",
        "terminal.ansiGreen",
        "terminal.ansiYellow",
        "terminal.ansiBlue",
        "terminal.ansiMagenta",
        "terminal.ansiCyan",
        "terminal.ansiWhite"
    ],
    default: null
}, k_e = {
    type: "string",
    enum: Array.from(kfe(), (e)=>e.id),
    markdownEnumDescriptions: Array.from(kfe(), (e)=>`$(${e.id})`)
}, dl = {
    args: {
        description: E(2256, null),
        type: "array",
        items: {
            type: "string"
        }
    },
    overrideName: {
        description: E(2257, null),
        type: "boolean"
    },
    icon: {
        description: E(2258, null),
        ...k_e
    },
    color: {
        description: E(2259, null),
        ...T_e
    },
    env: {
        markdownDescription: E(2260, null),
        type: "object",
        additionalProperties: {
            type: [
                "string",
                "null"
            ]
        },
        default: {}
    }
}, W1 = {
    type: "object",
    required: [
        "path"
    ],
    properties: {
        path: {
            description: E(2261, null),
            type: [
                "string",
                "array"
            ],
            items: {
                type: "string"
            }
        },
        ...dl
    }
}, B1 = {
    type: "object",
    required: [
        "path"
    ],
    properties: {
        path: {
            description: E(2262, null),
            type: [
                "string"
            ],
            items: {
                type: "string"
            }
        },
        ...dl
    }
}, S_e = {
    id: "terminal",
    order: 100,
    title: E(2264, null),
    type: "object",
    properties: {
        "terminal.integrated.automationProfile.linux": {
            restricted: !0,
            markdownDescription: E(2265, null),
            type: [
                "object",
                "null"
            ],
            default: null,
            anyOf: [
                {
                    type: "null"
                },
                B1
            ],
            defaultSnippets: [
                {
                    body: {
                        path: "${1}",
                        icon: "${2}"
                    }
                }
            ]
        },
        "terminal.integrated.automationProfile.osx": {
            restricted: !0,
            markdownDescription: E(2266, null),
            type: [
                "object",
                "null"
            ],
            default: null,
            anyOf: [
                {
                    type: "null"
                },
                B1
            ],
            defaultSnippets: [
                {
                    body: {
                        path: "${1}",
                        icon: "${2}"
                    }
                }
            ]
        },
        "terminal.integrated.automationProfile.windows": {
            restricted: !0,
            markdownDescription: E(2267, null, "`terminal.integrated.automationShell.windows`"),
            type: [
                "object",
                "null"
            ],
            default: null,
            anyOf: [
                {
                    type: "null"
                },
                B1
            ],
            defaultSnippets: [
                {
                    body: {
                        path: "${1}",
                        icon: "${2}"
                    }
                }
            ]
        },
        "terminal.integrated.profiles.windows": {
            restricted: !0,
            markdownDescription: N2(Yr.Windows),
            type: "object",
            default: {
                PowerShell: {
                    source: "PowerShell",
                    icon: "terminal-powershell"
                },
                "Command Prompt": {
                    path: [
                        "${env:windir}\\Sysnative\\cmd.exe",
                        "${env:windir}\\System32\\cmd.exe"
                    ],
                    args: [],
                    icon: "terminal-cmd"
                },
                "Git Bash": {
                    source: "Git Bash"
                }
            },
            additionalProperties: {
                anyOf: [
                    {
                        type: "object",
                        required: [
                            "source"
                        ],
                        properties: {
                            source: {
                                description: E(2268, null),
                                enum: [
                                    "PowerShell",
                                    "Git Bash"
                                ]
                            },
                            ...dl
                        }
                    },
                    {
                        type: "object",
                        required: [
                            "extensionIdentifier",
                            "id",
                            "title"
                        ],
                        properties: {
                            extensionIdentifier: {
                                description: E(2269, null),
                                type: "string"
                            },
                            id: {
                                description: E(2270, null),
                                type: "string"
                            },
                            title: {
                                description: E(2271, null),
                                type: "string"
                            },
                            ...dl
                        }
                    },
                    {
                        type: "null"
                    },
                    W1
                ]
            }
        },
        "terminal.integrated.profiles.osx": {
            restricted: !0,
            markdownDescription: N2(Yr.Mac),
            type: "object",
            default: {
                bash: {
                    path: "bash",
                    args: [
                        "-l"
                    ],
                    icon: "terminal-bash"
                },
                zsh: {
                    path: "zsh",
                    args: [
                        "-l"
                    ]
                },
                fish: {
                    path: "fish",
                    args: [
                        "-l"
                    ]
                },
                tmux: {
                    path: "tmux",
                    icon: "terminal-tmux"
                },
                pwsh: {
                    path: "pwsh",
                    icon: "terminal-powershell"
                }
            },
            additionalProperties: {
                anyOf: [
                    {
                        type: "object",
                        required: [
                            "extensionIdentifier",
                            "id",
                            "title"
                        ],
                        properties: {
                            extensionIdentifier: {
                                description: E(2272, null),
                                type: "string"
                            },
                            id: {
                                description: E(2273, null),
                                type: "string"
                            },
                            title: {
                                description: E(2274, null),
                                type: "string"
                            },
                            ...dl
                        }
                    },
                    {
                        type: "null"
                    },
                    W1
                ]
            }
        },
        "terminal.integrated.profiles.linux": {
            restricted: !0,
            markdownDescription: N2(Yr.Linux),
            type: "object",
            default: {
                bash: {
                    path: "bash",
                    icon: "terminal-bash"
                },
                zsh: {
                    path: "zsh"
                },
                fish: {
                    path: "fish"
                },
                tmux: {
                    path: "tmux",
                    icon: "terminal-tmux"
                },
                pwsh: {
                    path: "pwsh",
                    icon: "terminal-powershell"
                }
            },
            additionalProperties: {
                anyOf: [
                    {
                        type: "object",
                        required: [
                            "extensionIdentifier",
                            "id",
                            "title"
                        ],
                        properties: {
                            extensionIdentifier: {
                                description: E(2275, null),
                                type: "string"
                            },
                            id: {
                                description: E(2276, null),
                                type: "string"
                            },
                            title: {
                                description: E(2277, null),
                                type: "string"
                            },
                            ...dl
                        }
                    },
                    {
                        type: "null"
                    },
                    W1
                ]
            }
        },
        "terminal.integrated.useWslProfiles": {
            description: E(2278, null),
            type: "boolean",
            default: !0
        },
        "terminal.integrated.inheritEnv": {
            scope: 1,
            description: E(2279, null),
            type: "boolean",
            default: !0
        },
        "terminal.integrated.persistentSessionScrollback": {
            scope: 1,
            markdownDescription: E(2280, null),
            type: "number",
            default: 100
        },
        "terminal.integrated.showLinkHover": {
            scope: 1,
            description: E(2281, null),
            type: "boolean",
            default: !0
        },
        "terminal.integrated.ignoreProcessNames": {
            markdownDescription: E(2282, null, "`#terminal.integrated.confirmOnKill#`"),
            type: "array",
            items: {
                type: "string",
                uniqueItems: !0
            },
            default: [
                "starship",
                "oh-my-posh",
                "bash",
                "zsh"
            ]
        }
    }
};

}
