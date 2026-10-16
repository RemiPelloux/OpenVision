import { E } from "./tslib.es6.js";
var S2f, k2f, w2f, b3i, cOl, C2f, T2f, E2f, I2f, uOl, x2f, dOl;
export { C2f, E2f, I2f, S2f, T2f, b3i, cOl, dOl, k2f, uOl, w2f, x2f };
var __wakaru_Fpw_initialized = false;
export function Fpw() {
if (__wakaru_Fpw_initialized) return;
__wakaru_Fpw_initialized = true;
E(), S2f = (t, e, n)=>{
    if (e.length === 1 && e[0] === n) {
        let i = !1;
        try {
            const r = {};
            t(r) === r && (i = !0);
        } catch  {}
        if (i) {
            let r;
            try {
                throw new Error;
            } catch (s) {
                ({ stack: r } = s);
            }
            console.warn(`The result function returned its own inputs without modification. e.g
\`createSelector([state => state.todos], todos => todos)\`
This could lead to inefficient memoization and unnecessary re-renders.
Ensure transformation logic is in the result function, and extraction logic is in the input selectors.`, {
                stack: r
            });
        }
    }
}, k2f = (t, e, n)=>{
    const { memoize: i, memoizeOptions: r } = e, { inputSelectorResults: s, inputSelectorResultsCopy: o } = t, a = i(()=>({}), ...r);
    if (!(a.apply(null, s) === a.apply(null, o))) {
        let c;
        try {
            throw new Error;
        } catch (u) {
            ({ stack: c } = u);
        }
        console.warn(`An input selector returned a different result when passed same arguments.
This means your output selector will likely run more frequently than intended.
Avoid returning a new reference inside your input selector, e.g.
\`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)\``, {
            arguments: n,
            firstInputs: s,
            secondInputs: o,
            stack: c
        });
    }
}, w2f = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
}, b3i = Symbol("NOT_FOUND"), cOl = (t)=>Array.isArray(t) ? t : [
        t
    ], C2f = (t, e)=>{
    const { identityFunctionCheck: n, inputStabilityCheck: i } = {
        ...w2f,
        ...e
    };
    return {
        identityFunctionCheck: {
            shouldRun: n === "always" || n === "once" && t,
            run: S2f
        },
        inputStabilityCheck: {
            shouldRun: i === "always" || i === "once" && t,
            run: k2f
        }
    };
}, T2f = (t, e)=>t === e, E2f = class {
    constructor(t){
        this.value = t;
    }
    deref() {
        return this.value;
    }
}, I2f = ()=>typeof WeakRef > "u" ? E2f : WeakRef, uOl = I2f(), x2f = 0, dOl = 1;

}
