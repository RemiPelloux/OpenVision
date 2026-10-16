import { adu } from "./SelectionTooltip.js";
import { IQf } from "./TextUnderlineIcon.js";
import { KFs, xQf } from "./f0s.js";
import { M0 } from "./index_18.js";
import { A_, zS } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { jsx as znv } from "./react-runtime/react/esm-jsx-runtime-production.js";
var S0e, PUt, YFs;
export { PUt, S0e, YFs };
var __wakaru_Xnv_initialized = false;
export function Xnv() {
if (__wakaru_Xnv_initialized) return;
__wakaru_Xnv_initialized = true;
"use strict";
x(), A_(), M0(), IQf(), adu(), zS(), S0e = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform) ? "\u2318" : "Ctrl+", PUt = S0e === "\u2318", YFs = [
    {
        mark: "bold",
        group: "text",
        label: "Bold",
        icon: "text-b",
        shortcut: `${S0e}B`,
        keybinding: "Mod-b",
        toggle: (e)=>e.chain().toggleBold().run()
    },
    {
        mark: "italic",
        group: "text",
        label: "Italic",
        icon: "text-italic",
        shortcut: `${S0e}I`,
        keybinding: "Mod-i",
        toggle: (e)=>e.chain().toggleItalic().run()
    },
    {
        mark: "underline",
        group: "text",
        label: "Underline",
        icon: znv(xQf, {}),
        shortcut: `${S0e}U`,
        keybinding: "Mod-u",
        toggle: (e)=>e.chain().toggleUnderline().run()
    },
    {
        mark: "strike",
        group: "text",
        label: "Strikethrough",
        icon: "text-strikethrough",
        shortcut: PUt ? "\u21E7\u2318X" : `${S0e}Shift+X`,
        keybinding: "Mod-Shift-x",
        toggle: (e)=>e.chain().toggleStrike().run()
    },
    {
        mark: "link",
        group: "insert",
        label: "Link",
        icon: "link",
        isActive: (e)=>KFs(e) !== null
    },
    {
        mark: "orderedList",
        group: "insert",
        label: "Ordered list",
        icon: "list-ordered",
        shortcut: PUt ? "\u21E7\u23187" : `${S0e}Shift+7`,
        toggle: (e)=>e.chain().toggleOrderedList().run()
    },
    {
        mark: "bulletList",
        group: "insert",
        label: "Bullet list",
        icon: "list-bullets",
        shortcut: PUt ? "\u21E7\u23188" : `${S0e}Shift+8`,
        toggle: (e)=>e.chain().toggleBulletList().run()
    },
    {
        mark: "blockquote",
        group: "block",
        label: "Blockquote",
        icon: "quote",
        shortcut: PUt ? "\u21E7\u2318B" : `${S0e}Shift+B`,
        toggle: (e)=>e.chain().toggleBlockquote().run()
    },
    {
        mark: "code",
        group: "block",
        label: "Inline code",
        icon: "text-c",
        shortcut: `${S0e}E`,
        toggle: (e)=>e.chain().toggleCode().run()
    },
    {
        mark: "codeBlock",
        group: "block",
        label: "Code block",
        icon: "code",
        shortcut: PUt ? "\u2325\u2318C" : `${S0e}Alt+C`,
        toggle: (e)=>e.chain().toggleCodeBlock().run()
    }
];

}
