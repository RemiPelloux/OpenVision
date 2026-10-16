import { E } from "./tslib.es6.js";
var rlg, slg, Gol, olg, alg;
export { Gol, alg, olg, rlg, slg };
var __wakaru_pfk_initialized = false;
export function pfk() {
if (__wakaru_pfk_initialized) return;
__wakaru_pfk_initialized = true;
"use strict";
E(), rlg = "vscode://schemas/mcp", slg = "vscode://schemas/mcp-config", Gol = {
    type: [
        "object"
    ],
    description: "Configuration for MCP (Model Control Protocol) servers",
    additionalProperties: {
        type: [
            "object"
        ],
        oneOf: [
            {
                type: [
                    "object"
                ],
                additionalProperties: !1,
                properties: {
                    command: {
                        type: [
                            "string"
                        ],
                        description: "Command to start the stdio-based MCP server"
                    },
                    args: {
                        type: [
                            "array"
                        ],
                        description: "Arguments to pass to the command",
                        items: {
                            type: [
                                "string"
                            ]
                        }
                    },
                    env: {
                        type: [
                            "object"
                        ],
                        description: "Environment variables to set for the server process",
                        additionalProperties: {
                            type: [
                                "string"
                            ]
                        }
                    },
                    envFile: {
                        type: [
                            "string"
                        ],
                        description: "Path to .env file to load environment variables from (supports variable resolution like ${workspaceFolder}/.env)"
                    },
                    enabledTools: {
                        type: [
                            "array"
                        ],
                        description: "List of tool names that are enabled for this server. If not specified, all tools are enabled by default.",
                        items: {
                            type: [
                                "string"
                            ]
                        }
                    }
                },
                required: [
                    "command"
                ]
            },
            {
                type: [
                    "object"
                ],
                additionalProperties: !1,
                properties: {
                    url: {
                        type: [
                            "string"
                        ],
                        description: "URL of the SSE-based MCP server"
                    },
                    enabledTools: {
                        type: [
                            "array"
                        ],
                        description: "List of tool names that are enabled for this server. If not specified, all tools are enabled by default.",
                        items: {
                            type: [
                                "string"
                            ]
                        }
                    },
                    headers: {
                        type: [
                            "object"
                        ],
                        description: "Optional HTTP headers to include with every request to the server",
                        additionalProperties: {
                            type: [
                                "string"
                            ]
                        }
                    },
                    auth: {
                        type: [
                            "object"
                        ],
                        description: "Static OAuth client credentials for this server (optional)",
                        properties: {
                            CLIENT_ID: {
                                type: [
                                    "string"
                                ],
                                description: "OAuth 2.0 Client ID"
                            },
                            CLIENT_SECRET: {
                                type: [
                                    "string"
                                ],
                                description: "OAuth 2.0 Client Secret (optional)"
                            },
                            scopes: {
                                type: [
                                    "array"
                                ],
                                items: {
                                    type: [
                                        "string"
                                    ]
                                },
                                description: "OAuth 2.0 scopes to request (optional, auto-fetched from server if not provided)"
                            }
                        },
                        required: [
                            "CLIENT_ID"
                        ],
                        additionalProperties: !1
                    },
                    placement: {
                        type: [
                            "string"
                        ],
                        enum: [
                            "server",
                            "client"
                        ],
                        enumDescriptions: [
                            "Tool calls and sign-in for this server run on Cursor's servers.",
                            "Tool calls and sign-in for this server run on this machine."
                        ],
                        description: "Where this remote server's tool calls and sign-in run. When absent, Cursor decides."
                    }
                },
                required: [
                    "url"
                ]
            }
        ],
        errorMessage: "Must provide either 'command' for stdio-based server or 'url' for SSE-based server"
    }
}, olg = {
    type: [
        "object"
    ],
    allowComments: !1,
    allowTrailingCommas: !1,
    additionalProperties: !1,
    properties: {
        mcpServers: Gol
    },
    required: [
        "mcpServers"
    ],
    defaultSnippets: [
        {
            label: "New MCP Configuration",
            description: "Creates a new MCP configuration with example servers",
            body: {
                mcpServers: {
                    "example-stdio-server": {
                        command: "python server.py",
                        args: [
                            "--port",
                            "8080"
                        ],
                        env: {
                            DEBUG: "true"
                        }
                    },
                    "example-stdio-server-with-envfile": {
                        command: "python server.py",
                        envFile: "${workspaceFolder}/.env",
                        env: {
                            DEBUG: "true"
                        }
                    },
                    "example-sse-server": {
                        url: "http://localhost:3000/sse"
                    }
                }
            }
        }
    ]
}, alg = {
    type: [
        "object"
    ],
    additionalProperties: !1,
    properties: {
        $schema: {
            type: [
                "string"
            ],
            description: "The schema to use for this file"
        },
        mcpServers: Gol
    },
    required: [
        "mcpServers"
    ]
};

}
