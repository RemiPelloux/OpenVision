import { GMt, kJ } from "./encode-character-reference.js";
import { clr, t3i } from "./format-heading-as-setext.js";
import { i } from "./plugin-brand-icon.js";
function llr(r, e, a, s) {
    const l = Math.max(Math.min(6, r.depth || 1), 1), u = a.createTracker(s);
    if (clr(r, a)) {
        const _ = a.enter("headingSetext"), v = a.enter("phrasing"), x = a.containerPhrasing(r, {
            ...u.current(),
            before: `
`,
            after: `
`
        });
        return v(), _(), x + `
` + (l === 1 ? "=" : "-").repeat(x.length - (Math.max(x.lastIndexOf("\r"), x.lastIndexOf(`
`)) + 1));
    }
    const p = "#".repeat(l), m = a.enter("headingAtx"), b = a.enter("phrasing");
    u.move(p + " ");
    let g = a.containerPhrasing(r, {
        before: "# ",
        after: `
`,
        ...u.current()
    });
    return /^[\t ]/.test(g) && (g = kJ(g.charCodeAt(0)) + g.slice(1)), g = g ? p + " " + g : p, a.options.closeAtx && (g += " " + p), b(), m(), g;
}
export { llr };
var __wakaru_n3i_initialized = false;
export function n3i() {
if (__wakaru_n3i_initialized) return;
__wakaru_n3i_initialized = true;
GMt(), t3i(), i(llr, "heading");

}
