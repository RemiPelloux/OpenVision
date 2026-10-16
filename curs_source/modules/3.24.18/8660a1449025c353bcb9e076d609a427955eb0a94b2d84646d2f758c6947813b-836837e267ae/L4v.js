import { rO } from "./Iwo.js";
import { Ee } from "./ze.js";
import { $tv, DQf, Knv, Lnv, Miv, QQf, fJf, pev, rnv, stv, yQf } from "./BA.js";
export function EG0(t, e) {
    switch(t){
        case "general":
            return Ee(stv, {});
        case "plan-usage":
            return Ee(Miv, {});
        case "chat":
            return Ee(pev, {});
        case "browser":
            return Ee(QQf, {});
        case "indexing":
            return Ee(rnv, {});
        case "models":
            return Ee(Lnv, {});
        case "voice":
            return Ee(Knv, {});
        case "git-prs":
            return Ee($tv, {});
        case "beta":
            return Ee(DQf, {});
        case "developer":
            return Ee(fJf, {});
        case "background-composer":
            return Ee(yQf, {});
        default:
            return rO(t);
    }
}

export var L4v = {};
Object.defineProperty(L4v, "renderWorkbenchSettingsTabForSearchIndex", {
    enumerable: true,
    get: ()=>EG0
});
