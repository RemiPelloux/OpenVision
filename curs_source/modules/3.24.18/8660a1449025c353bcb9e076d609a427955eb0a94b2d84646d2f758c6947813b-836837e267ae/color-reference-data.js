import { FLs, dPt } from "./_Hv.js";
import { Mt } from "./index_197.js";
import { E } from "./tslib.es6.js";
var cQv, uQv, yBi, hPt, BLs, dQv, hQv, pQv, Kdc, Ydc;
export { BLs, Kdc, Ydc, cQv, dQv, hPt, hQv, pQv, uQv, yBi };
var __wakaru__dC_initialized = false;
export function _dC() {
if (__wakaru__dC_initialized) return;
__wakaru__dC_initialized = true;
"use strict";
E(), Mt(), cQv = [
    {
        label: "Background",
        name: "--cursor-control-disabled-background"
    },
    {
        label: "Foreground",
        name: "--cursor-control-disabled-foreground"
    },
    {
        label: "Border",
        name: "--cursor-control-disabled-border"
    }
], uQv = {
    id: "neutral",
    label: "Neutral",
    text: {
        primary: "--cursor-text-primary",
        secondary: "--cursor-text-secondary",
        tertiary: "--cursor-text-tertiary",
        quaternary: "--cursor-text-quaternary"
    },
    icon: {
        primary: "--cursor-icon-primary",
        secondary: "--cursor-icon-secondary",
        tertiary: "--cursor-icon-tertiary",
        quaternary: "--cursor-icon-quaternary"
    },
    stroke: {
        primary: "--cursor-stroke-primary",
        secondary: "--cursor-stroke-secondary",
        tertiary: "--cursor-stroke-tertiary",
        quaternary: "--cursor-stroke-quaternary"
    },
    bg: {
        primary: "--cursor-bg-primary",
        secondary: "--cursor-bg-secondary",
        tertiary: "--cursor-bg-tertiary",
        quaternary: "--cursor-bg-quaternary",
        quinary: "--cursor-bg-quinary"
    },
    iconColor: "primary",
    iconName: "circle"
}, yBi = [
    dPt("red", "Red", "x-circle"),
    dPt("orange", "Orange", "warning"),
    dPt("yellow", "Yellow", "lightbulb"),
    dPt("green", "Green", "check-circle"),
    dPt("cyan", "Cyan", "info"),
    dPt("blue", "Blue", "link"),
    dPt("purple", "Purple", "sparkle"),
    dPt("magenta", "Magenta", "star")
], hPt = [
    FLs("added", "Added"),
    FLs("modified", "Modified"),
    FLs("removed", "Removed"),
    FLs("untracked", "Untracked")
], BLs = {
    language: "typescript",
    original: `import { legacyPalette } from "./legacy-palette";

export function paint(surface: Surface): string {
  const tokens = legacyPalette(surface);
  return tokens.foreground;
}

export function applyTheme(root: HTMLElement): void {
  root.style.color = paint("legacy");
  root.dataset.theme = "legacy";
}
`,
    modified: `import { nextPalette } from "./next-palette";

export function paint(surface: Surface): string {
  const tokens = nextPalette(surface);
  return tokens.text.primary;
}

export function applyTheme(root: HTMLElement): void {
  root.style.color = paint("next");
  root.dataset.theme = "next";
}
`
}, dQv = [
    {
        id: "src",
        rows: [
            {
                kind: "folder",
                label: "src",
                depth: 0
            },
            {
                kind: "file",
                label: "App.tsx",
                depth: 1
            },
            {
                kind: "file",
                label: "index.ts",
                depth: 1
            },
            {
                kind: "file",
                label: "main.js",
                depth: 1
            },
            {
                kind: "file",
                label: "styles.css",
                depth: 1
            },
            {
                kind: "file",
                label: "index.html",
                depth: 1
            },
            {
                kind: "file",
                label: "main.py",
                depth: 1
            },
            {
                kind: "file",
                label: "server.go",
                depth: 1
            },
            {
                kind: "file",
                label: "lib.rs",
                depth: 1
            },
            {
                kind: "file",
                label: "App.swift",
                depth: 1
            },
            {
                kind: "file",
                label: "Main.java",
                depth: 1
            },
            {
                kind: "file",
                label: "script.sh",
                depth: 1
            },
            {
                kind: "file",
                label: "View.vue",
                depth: 1
            },
            {
                kind: "file",
                label: "Widget.svelte",
                depth: 1
            },
            {
                kind: "file",
                label: "index.php",
                depth: 1
            }
        ]
    },
    {
        id: "config",
        rows: [
            {
                kind: "folder",
                label: "config",
                depth: 0
            },
            {
                kind: "file",
                label: "package.json",
                depth: 1
            },
            {
                kind: "file",
                label: "Dockerfile",
                depth: 1
            },
            {
                kind: "file",
                label: "Makefile",
                depth: 1
            },
            {
                kind: "file",
                label: "BUILD.bazel",
                depth: 1
            },
            {
                kind: "file",
                label: "main.tf",
                depth: 1
            },
            {
                kind: "file",
                label: "schema.graphql",
                depth: 1
            },
            {
                kind: "file",
                label: "styles.scss",
                depth: 1
            },
            {
                kind: "file",
                label: "header.h",
                depth: 1
            },
            {
                kind: "file",
                label: "README.md",
                depth: 1
            },
            {
                kind: "file",
                label: "theme.plan.md",
                depth: 1
            },
            {
                kind: "file",
                label: "data.csv",
                depth: 1
            },
            {
                kind: "file",
                label: "favicon.ico",
                depth: 1
            },
            {
                kind: "file",
                label: ".env",
                depth: 1
            },
            {
                kind: "file",
                label: ".gitignore",
                depth: 1
            },
            {
                kind: "file",
                label: "notes.pdf",
                depth: 1
            }
        ]
    }
], hQv = [
    {
        kind: "folder",
        label: "stylex"
    },
    {
        kind: "file",
        label: "tokens.ts",
        additions: 30
    },
    {
        kind: "folder",
        label: "tokens"
    },
    {
        kind: "file",
        label: "index.ts",
        state: hPt[0],
        additions: 18
    },
    {
        kind: "file",
        label: "palette.ts",
        state: hPt[0],
        additions: 130
    },
    {
        kind: "file",
        label: "new-colors.ts",
        state: hPt[1],
        additions: 519
    },
    {
        kind: "file",
        label: "evaluate.ts",
        state: hPt[0],
        additions: 16
    },
    {
        kind: "file",
        label: "schema.ts",
        state: hPt[1],
        additions: 45,
        deletions: 1
    },
    {
        kind: "file",
        label: "legacy-palette.ts",
        state: hPt[2],
        deletions: 84
    },
    {
        kind: "file",
        label: "scratch.ts",
        state: hPt[3],
        additions: 7
    }
], pQv = [
    {
        label: "black",
        normal: "--cursor-terminal-ansi-black",
        bright: "--cursor-terminal-ansi-bright-black"
    },
    {
        label: "red",
        normal: "--cursor-terminal-ansi-red",
        bright: "--cursor-terminal-ansi-bright-red"
    },
    {
        label: "green",
        normal: "--cursor-terminal-ansi-green",
        bright: "--cursor-terminal-ansi-bright-green"
    },
    {
        label: "yellow",
        normal: "--cursor-terminal-ansi-yellow",
        bright: "--cursor-terminal-ansi-bright-yellow"
    },
    {
        label: "blue",
        normal: "--cursor-terminal-ansi-blue",
        bright: "--cursor-terminal-ansi-bright-blue"
    },
    {
        label: "magenta",
        normal: "--cursor-terminal-ansi-magenta",
        bright: "--cursor-terminal-ansi-bright-magenta"
    },
    {
        label: "cyan",
        normal: "--cursor-terminal-ansi-cyan",
        bright: "--cursor-terminal-ansi-bright-cyan"
    },
    {
        label: "white",
        normal: "--cursor-terminal-ansi-white",
        bright: "--cursor-terminal-ansi-bright-white"
    }
], Kdc = [
    "primary",
    "secondary",
    "outline",
    "ghost",
    "text"
], Ydc = [
    {
        label: "Accent",
        tone: "accent",
        icon: "sparkle"
    },
    {
        label: "Mono",
        tone: "monochrome",
        icon: "circle"
    },
    {
        label: "Success",
        tone: "success",
        icon: "check"
    },
    {
        label: "Warning",
        tone: "warning",
        icon: "warning"
    },
    {
        label: "Danger",
        tone: "danger",
        icon: "trash"
    },
    {
        label: "Secondary",
        tone: "secondary",
        icon: "circle"
    },
    {
        label: "Tertiary",
        tone: "tertiary",
        icon: "circle"
    }
];

}
