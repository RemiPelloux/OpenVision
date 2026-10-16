import { N1, bc } from "./defaults.js";
import { _1, hi } from "./i18nInstance.js";
var M1;
export { M1 };
var __wakaru_Gd_initialized = false;
export function Gd() {
if (__wakaru_Gd_initialized) return;
__wakaru_Gd_initialized = true;
bc(), hi(), M1 = {
    type: "3rdParty",
    init (e) {
        N1(e.options.react), _1(e);
    }
};

}
