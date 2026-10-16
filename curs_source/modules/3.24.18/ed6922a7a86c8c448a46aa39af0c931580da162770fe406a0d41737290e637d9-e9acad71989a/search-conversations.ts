import { $R, Azt, B4h, LC, a9n } from "./call-records.ts";
import { C8s, X6e, Zue, gee } from "./f0s.js";
import { V0t } from "./index_214.js";
import { H4h, Y4h } from "./schemas_9.js";
import { Ont, h7e } from "./session-tools.ts";
import { AMo, DMo, Fq, IMo, RMo, X5n, mZ, nrr } from "./tool-names.ts";
import { Dzt, Rzt } from "./tool.ts";
import { x } from "./tslib.es6.js";
function Izt(e) {
    return C8s(H4h, e);
}
function mbe(e) {
    return new Y4h({
        type: "optional",
        innerType: e
    });
}
var UUh, $Uh, HUh, WUh;
export { $Uh, HUh, Izt, UUh, WUh, mbe };
var __wakaru_GUh_initialized = false;
export function GUh() {
if (__wakaru_GUh_initialized) return;
__wakaru_GUh_initialized = true;
"use strict";
x(), V0t(), Ont(), Fq(), Dzt(), UUh = `${mZ} needs a query: a few words naming the fact you want`, $Uh = $R({
    query: LC().check(X6e(), B4h((e)=>e.length > 0, {
        message: UUh
    })),
    scope: mbe(a9n(RMo)),
    id: mbe(LC().check(X6e())),
    from: mbe(LC().check(X6e())),
    to: mbe(LC().check(X6e())),
    if_missing: a9n(DMo)
}), HUh = $R({
    hits: Azt($R({
        id: LC().check(Zue(1)),
        where: LC(),
        when: LC(),
        writer: a9n([
            "you",
            "them"
        ]),
        quote: LC().check(gee(IMo)),
        text: mbe(LC().check(gee(AMo))),
        before: mbe(LC().check(gee(nrr))),
        after: mbe(LC().check(gee(nrr)))
    })).check(gee(X5n)),
    more: Izt()
}), WUh = class SAa extends Rzt {
    static definition = {
        name: mZ,
        descriptor: h7e.descriptor(mZ),
        input: $Uh,
        output: HUh,
        invalidInputError: `invalid arguments for ${mZ}`
    };
    static defaultScope = "everything";
    search;
    constructor(t){
        super(SAa.definition), this.search = t;
    }
    async execute(t, n) {
        const i = (a)=>a !== void 0 && a.length > 0 ? a : void 0, r = i(t.id), s = i(t.from), o = i(t.to);
        return await this.search({
            query: t.query,
            scope: t.scope ?? SAa.defaultScope,
            ...r === void 0 ? {} : {
                id: r
            },
            ...s === void 0 ? {} : {
                from: s
            },
            ...o === void 0 ? {} : {
                to: o
            }
        }, n);
    }
};

}
