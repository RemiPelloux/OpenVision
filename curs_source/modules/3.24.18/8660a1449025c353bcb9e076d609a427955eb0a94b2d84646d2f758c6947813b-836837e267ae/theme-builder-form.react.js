import { Hs } from "./Fieldset.js";
import { Kz0 } from "./O4v.js";
import { r0n } from "./color-picker.js";
import { cbe } from "./cursor-core-themes.js";
import { Mt } from "./index_197.js";
import { L2e } from "./ipa.js";
import { Qne } from "./shared_3.js";
import { E } from "./tslib.es6.js";
import { c as Y9v } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as e3e } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { memo as zz0 } from "./react-runtime/react/esm-index-production.js";
var Z9v, Q9v, J9v, eBv, tBv;
export { J9v, Q9v, Z9v, eBv, tBv };
var __wakaru_Xz0_initialized = false;
export function Xz0() {
if (__wakaru_Xz0_initialized) return;
__wakaru_Xz0_initialized = true;
"use strict";
E(), Mt(), Z9v = {
    sidebar: "Sidebar background and panels",
    chrome: "Title bar and window chrome",
    editor: "Editor background surface",
    base: "Default text and icon color",
    accent: "Accent color for highlights and emphasis",
    onPrimary: "Text and icons on primary fills",
    brand: "Brand accents and highlights",
    focus: "Focus rings and active outlines",
    success: "Success states and confirmations",
    successFill: "Success fill and tint base",
    successFillHover: "Success fill hover",
    successFillPressed: "Success fill pressed",
    successFillBright: "Success bright fill",
    successForeground: "Success text",
    successForegroundHover: "Success text hover",
    successForegroundBright: "Success bright text and icons",
    warn: "Warnings and caution states",
    warnFill: "Warning fill and tint base",
    warnFillHover: "Warning fill hover",
    warnFillPressed: "Warning fill pressed",
    warnFillBright: "Warning bright fill",
    warnForeground: "Warning text",
    warnForegroundHover: "Warning text hover",
    warnForegroundBright: "Warning bright text and icons",
    danger: "Errors and destructive states",
    dangerFill: "Danger fill and tint base",
    dangerFillHover: "Danger fill hover",
    dangerFillPressed: "Danger fill pressed",
    dangerFillBright: "Danger bright fill",
    dangerForeground: "Danger text",
    dangerForegroundHover: "Danger text hover",
    dangerForegroundBright: "Danger bright text and icons",
    added: "Added files and inserted git changes",
    modified: "Modified files and changed git lines",
    removed: "Removed files and deleted git lines",
    untracked: "Untracked files in the explorer",
    terminalAnsiBlack: "Default terminal black",
    terminalAnsiRed: "Default terminal red",
    terminalAnsiYellow: "Default terminal yellow",
    terminalAnsiGreen: "Default terminal green",
    terminalAnsiCyan: "Default terminal cyan",
    terminalAnsiBlue: "Default terminal blue",
    terminalAnsiMagenta: "Default terminal magenta",
    terminalAnsiWhite: "Default terminal white",
    terminalAnsiBrightBlack: "Bright terminal black",
    terminalAnsiBrightRed: "Bright terminal red",
    terminalAnsiBrightYellow: "Bright terminal yellow",
    terminalAnsiBrightGreen: "Bright terminal green",
    terminalAnsiBrightCyan: "Bright terminal cyan",
    terminalAnsiBrightBlue: "Bright terminal blue",
    terminalAnsiBrightMagenta: "Bright terminal magenta",
    terminalAnsiBrightWhite: "Bright terminal white",
    red: 'Semantic "red" accents',
    redFill: "Red fill and tint base",
    redFillHover: "Red fill hover",
    redFillPressed: "Red fill pressed",
    redFillBright: "Red bright fill",
    redForeground: "Red text",
    redForegroundHover: "Red text hover",
    redForegroundBright: "Red bright text and icons",
    orange: 'Semantic "orange" accents',
    orangeFill: "Orange fill and tint base",
    orangeFillHover: "Orange fill hover",
    orangeFillPressed: "Orange fill pressed",
    orangeFillBright: "Orange bright fill",
    orangeForeground: "Orange text",
    orangeForegroundHover: "Orange text hover",
    orangeForegroundBright: "Orange bright text and icons",
    yellow: 'Semantic "yellow" accents',
    yellowFill: "Yellow fill and tint base",
    yellowFillHover: "Yellow fill hover",
    yellowFillPressed: "Yellow fill pressed",
    yellowFillBright: "Yellow bright fill",
    yellowForeground: "Yellow text",
    yellowForegroundHover: "Yellow text hover",
    yellowForegroundBright: "Yellow bright text and icons",
    green: 'Semantic "green" accents',
    greenFill: "Green fill and tint base",
    greenFillHover: "Green fill hover",
    greenFillPressed: "Green fill pressed",
    greenFillBright: "Green bright fill",
    greenForeground: "Green text",
    greenForegroundHover: "Green text hover",
    greenForegroundBright: "Green bright text and icons",
    cyan: 'Semantic "cyan" accents',
    cyanFill: "Cyan fill and tint base",
    cyanFillHover: "Cyan fill hover",
    cyanFillPressed: "Cyan fill pressed",
    cyanFillBright: "Cyan bright fill",
    cyanForeground: "Cyan text",
    cyanForegroundHover: "Cyan text hover",
    cyanForegroundBright: "Cyan bright text and icons",
    blue: 'Semantic "blue" accents',
    blueFill: "Blue fill and tint base",
    blueFillHover: "Blue fill hover",
    blueFillPressed: "Blue fill pressed",
    blueFillBright: "Blue bright fill",
    blueForeground: "Blue text",
    blueForegroundHover: "Blue text hover",
    blueForegroundBright: "Blue bright text and icons",
    magenta: 'Semantic "magenta" accents',
    magentaFill: "Magenta fill and tint base",
    magentaFillHover: "Magenta fill hover",
    magentaFillPressed: "Magenta fill pressed",
    magentaFillBright: "Magenta bright fill",
    magentaForeground: "Magenta text",
    magentaForegroundHover: "Magenta text hover",
    magentaForegroundBright: "Magenta bright text and icons",
    purple: 'Semantic "purple" accents',
    purpleFill: "Purple fill and tint base",
    purpleFillHover: "Purple fill hover",
    purpleFillPressed: "Purple fill pressed",
    purpleFillBright: "Purple bright fill",
    purpleForeground: "Purple text",
    purpleForegroundHover: "Purple text hover",
    purpleForegroundBright: "Purple bright text and icons",
    brown: 'Semantic "brown" accents',
    brownFill: "Brown fill and tint base",
    brownFillHover: "Brown fill hover",
    brownFillPressed: "Brown fill pressed",
    brownFillBright: "Brown bright fill",
    brownForeground: "Brown text",
    brownForegroundHover: "Brown text hover",
    brownForegroundBright: "Brown bright text and icons",
    diffAddedLineBackground: "Background for added diff lines",
    diffAddedTextBackground: "Highlight for added diff text",
    diffRemovedLineBackground: "Background for removed diff lines",
    diffRemovedTextBackground: "Highlight for removed diff text"
}, Q9v = new Set(Qne.filter((t)=>Object.values(cbe).some((e)=>L2e(e[t]).length === 9))), J9v = zz0(function(e) {
    const n = Y9v(12), { tokenName: i, label: r, description: s, usesHex8ByDefault: o, value: a, onTokenChange: l } = e, c = a.length === 9 || o ? "hex8" : "hex6";
    let u;
    n[0] !== l || n[1] !== i ? (u = (p)=>l(i, p), n[0] = l, n[1] = i, n[2] = u) : u = n[2];
    let d;
    n[3] !== r || n[4] !== u || n[5] !== a || n[6] !== c ? (d = e3e(r0n.PadInput, {
        "aria-label": r,
        format: c,
        onChange: u,
        size: "md",
        value: a
    }), n[3] = r, n[4] = u, n[5] = a, n[6] = c, n[7] = d) : d = n[7];
    let h;
    return n[8] !== s || n[9] !== r || n[10] !== d ? (h = e3e(Hs.Entry, {
        align: "top",
        description: s,
        label: r,
        children: d
    }), n[8] = s, n[9] = r, n[10] = d, n[11] = h) : h = n[11], h;
}), eBv = [
    {
        value: "dark",
        label: "Dark"
    },
    {
        value: "light",
        label: "Light"
    }
], tBv = Qne.map((t)=>({
        description: Z9v[t],
        label: Kz0(t),
        tokenName: t,
        usesHex8ByDefault: Q9v.has(t)
    }));

}
