import { Aw, Fy } from "./LYd.js";
import { BPa } from "./SelectionTooltip.js";
import { hwp } from "./TextUnderlineIcon.js";
import { gE } from "./index_23.js";
import { UPa, dwp } from "./ipa.js";
import { E } from "./tslib.es6.js";
import { jsx as k01 } from "./react-runtime/react/esm-jsx-runtime-production.js";
var C6e, v0n, jPa;
export { C6e, jPa, v0n };
var __wakaru_T01_initialized = false;
export function T01() {
if (__wakaru_T01_initialized) return;
__wakaru_T01_initialized = true;
"use strict";
E(), Fy(), gE(), hwp(), BPa(), Aw(), C6e = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform) ? "\u2318" : "Ctrl+", v0n = C6e === "\u2318", jPa = [
    {
        mark: "bold",
        group: "text",
        label: "Bold",
        icon: "text-b",
        shortcut: `${C6e}B`,
        keybinding: "Mod-b",
        toggle: (t)=>t.chain().toggleBold().run()
    },
    {
        mark: "italic",
        group: "text",
        label: "Italic",
        icon: "text-italic",
        shortcut: `${C6e}I`,
        keybinding: "Mod-i",
        toggle: (t)=>t.chain().toggleItalic().run()
    },
    {
        mark: "underline",
        group: "text",
        label: "Underline",
        icon: k01(dwp, {}),
        shortcut: `${C6e}U`,
        keybinding: "Mod-u",
        toggle: (t)=>t.chain().toggleUnderline().run()
    },
    {
        mark: "strike",
        group: "text",
        label: "Strikethrough",
        icon: "text-strikethrough",
        shortcut: v0n ? "\u21E7\u2318X" : `${C6e}Shift+X`,
        keybinding: "Mod-Shift-x",
        toggle: (t)=>t.chain().toggleStrike().run()
    },
    {
        mark: "link",
        group: "insert",
        label: "Link",
        icon: "link",
        isActive: (t)=>UPa(t) !== null
    },
    {
        mark: "orderedList",
        group: "insert",
        label: "Ordered list",
        icon: "list-ordered",
        shortcut: v0n ? "\u21E7\u23187" : `${C6e}Shift+7`,
        toggle: (t)=>t.chain().toggleOrderedList().run()
    },
    {
        mark: "bulletList",
        group: "insert",
        label: "Bullet list",
        icon: "list-bullets",
        shortcut: v0n ? "\u21E7\u23188" : `${C6e}Shift+8`,
        toggle: (t)=>t.chain().toggleBulletList().run()
    },
    {
        mark: "blockquote",
        group: "block",
        label: "Blockquote",
        icon: "quote",
        shortcut: v0n ? "\u21E7\u2318B" : `${C6e}Shift+B`,
        toggle: (t)=>t.chain().toggleBlockquote().run()
    },
    {
        mark: "code",
        group: "block",
        label: "Inline code",
        icon: "text-c",
        shortcut: `${C6e}E`,
        toggle: (t)=>t.chain().toggleCode().run()
    },
    {
        mark: "codeBlock",
        group: "block",
        label: "Code block",
        icon: "code",
        shortcut: v0n ? "\u2325\u2318C" : `${C6e}Alt+C`,
        toggle: (t)=>t.chain().toggleCodeBlock().run()
    }
];

}
