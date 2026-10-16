import { Wnt } from "./os.js";
import { E } from "./tslib.es6.js";
import { gjy } from "./useEnhancedClickHandler.js";
import { Jy } from "./useStableCallback.js";
import { rit } from "./useValueChanged.js";
var __wakaru_nci_initialized = false;
export function nci() {
if (__wakaru_nci_initialized) return;
__wakaru_nci_initialized = true;
E(), Jy(), gjy(), rit(), Wnt();

}
