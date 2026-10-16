import { $R, Azt, LC, a9n } from "./call-records.ts";
import { gee } from "./f0s.js";
import { V0t } from "./index_214.js";
import { Ont, h7e } from "./session-tools.ts";
import { Fq, pZ, trr } from "./tool-names.ts";
import { Dzt, Rzt } from "./tool.ts";
import { x } from "./tslib.es6.js";
var h8h, p8h, m8h;
export { h8h, m8h, p8h };
var __wakaru_g8h_initialized = false;
export function g8h() {
if (__wakaru_g8h_initialized) return;
__wakaru_g8h_initialized = true;
"use strict";
x(), V0t(), Ont(), Fq(), Dzt(), h8h = $R({}), p8h = $R({
    messages: Azt($R({
        id: LC(),
        writer: a9n([
            "you",
            "them"
        ]),
        text: LC()
    })).check(gee(trr))
}), m8h = class YCm extends Rzt {
    static definition = {
        name: pZ,
        descriptor: h7e.descriptor(pZ),
        input: h8h,
        output: p8h,
        invalidInputError: `invalid arguments for ${pZ}`
    };
    read;
    constructor(t){
        super(YCm.definition), this.read = t;
    }
    async execute(t, { agentId: n }) {
        return {
            messages: (await this.read(n)).slice(-trr)
        };
    }
};

}
