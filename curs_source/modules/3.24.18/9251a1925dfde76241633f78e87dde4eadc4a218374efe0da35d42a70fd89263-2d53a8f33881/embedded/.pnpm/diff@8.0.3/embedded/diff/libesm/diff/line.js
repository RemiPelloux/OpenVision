import { tokenize } from "../../../../../../../mcp_sandbox_policy_exports.js";
import { Diff, init_base2 } from "./base.js";
var LineDiff, lineDiff;
export { LineDiff, lineDiff };
var __wakaru_init_line_initialized = false;
export function init_line() {
if (__wakaru_init_line_initialized) return;
__wakaru_init_line_initialized = true;
init_base2();
LineDiff = class extends Diff {
    constructor(){
        super(...arguments);
        this.tokenize = tokenize;
    }
    equals(left, right, options2) {
        if (options2.ignoreWhitespace) {
            if (!options2.newlineIsToken || !left.includes("\n")) {
                left = left.trim();
            }
            if (!options2.newlineIsToken || !right.includes("\n")) {
                right = right.trim();
            }
        } else if (options2.ignoreNewlineAtEof && !options2.newlineIsToken) {
            if (left.endsWith("\n")) {
                left = left.slice(0, -1);
            }
            if (right.endsWith("\n")) {
                right = right.slice(0, -1);
            }
        }
        return super.equals(left, right, options2);
    }
};
lineDiff = new LineDiff();

}
