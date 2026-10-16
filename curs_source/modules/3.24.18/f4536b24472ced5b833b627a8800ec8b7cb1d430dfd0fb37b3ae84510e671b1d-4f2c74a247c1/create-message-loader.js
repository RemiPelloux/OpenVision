import { a } from "./business-error.js";
function k2(e) {
    const t = new Map;
    return a(async function(n) {
        const o = t.get(n);
        if (o) return o;
        const i = (async ()=>{
            try {
                return await e(n);
            } catch (s) {
                return console.error("[i18n] Failed to load messages", s), t.delete(n), {};
            }
        })();
        return t.set(n, i), i;
    }, "messageLoader");
}
export { k2 };
var __wakaru_A6_initialized = false;
export function A6() {
if (__wakaru_A6_initialized) return;
__wakaru_A6_initialized = true;
a(k2, "createMessageLoader");

}
