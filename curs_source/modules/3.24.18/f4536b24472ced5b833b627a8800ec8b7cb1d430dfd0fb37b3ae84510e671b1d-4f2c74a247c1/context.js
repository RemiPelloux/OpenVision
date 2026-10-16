import { a } from "./business-error.js";
import { bc } from "./defaults.js";
import { hi } from "./i18nInstance.js";
import { Gd } from "./initReactI18next.js";
import { createContext as mD } from "./react-runtime/react/esm-index-production.js";
var vi, a2;
export { a2, vi };
var __wakaru_io_initialized = false;
export function io() {
if (__wakaru_io_initialized) return;
__wakaru_io_initialized = true;
bc(), hi(), Gd(), vi = mD(), a2 = class {
    static{
        a(this, "ReportNamespaces");
    }
    constructor(){
        this.usedNamespaces = {};
    }
    addUsedNamespaces(e) {
        e.forEach((t)=>{
            this.usedNamespaces[t] || (this.usedNamespaces[t] = !0);
        });
    }
    getUsedNamespaces() {
        return Object.keys(this.usedNamespaces);
    }
};

}
