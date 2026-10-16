import { c3, yP } from "./html_2.js";
import { i } from "./plugin-brand-icon.js";
function KNt(r, e) {
    return e.some((a)=>r.startsWith(a));
}
function Mar(r) {
    return r.name === XNt && r.publicId === null && (r.systemId === null || r.systemId === Par);
}
function Rar(r) {
    if (r.name !== XNt) return c3.QUIRKS;
    const { systemId: e } = r;
    if (e && e.toLowerCase() === jar) return c3.QUIRKS;
    let { publicId: a } = r;
    if (a !== null) {
        if (a = a.toLowerCase(), Dar.has(a)) return c3.QUIRKS;
        let s = e === null ? Lar : YNt;
        if (KNt(a, s)) return c3.QUIRKS;
        if (s = e === null ? JNt : Far, KNt(a, s)) return c3.LIMITED_QUIRKS;
    }
    return c3.NO_QUIRKS;
}
var XNt, Par, jar, YNt, Lar, Dar, JNt, Far;
export { Dar, Far, JNt, KNt, Lar, Mar, Par, Rar, XNt, YNt, jar };
var __wakaru_vvi_initialized = false;
export function vvi() {
if (__wakaru_vvi_initialized) return;
__wakaru_vvi_initialized = true;
yP(), XNt = "html", Par = "about:legacy-compat", jar = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", YNt = [
    "+//silmaril//dtd html pro v0r11 19970101//",
    "-//as//dtd html 3.0 aswedit + extensions//",
    "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
    "-//ietf//dtd html 2.0 level 1//",
    "-//ietf//dtd html 2.0 level 2//",
    "-//ietf//dtd html 2.0 strict level 1//",
    "-//ietf//dtd html 2.0 strict level 2//",
    "-//ietf//dtd html 2.0 strict//",
    "-//ietf//dtd html 2.0//",
    "-//ietf//dtd html 2.1e//",
    "-//ietf//dtd html 3.0//",
    "-//ietf//dtd html 3.2 final//",
    "-//ietf//dtd html 3.2//",
    "-//ietf//dtd html 3//",
    "-//ietf//dtd html level 0//",
    "-//ietf//dtd html level 1//",
    "-//ietf//dtd html level 2//",
    "-//ietf//dtd html level 3//",
    "-//ietf//dtd html strict level 0//",
    "-//ietf//dtd html strict level 1//",
    "-//ietf//dtd html strict level 2//",
    "-//ietf//dtd html strict level 3//",
    "-//ietf//dtd html strict//",
    "-//ietf//dtd html//",
    "-//metrius//dtd metrius presentational//",
    "-//microsoft//dtd internet explorer 2.0 html strict//",
    "-//microsoft//dtd internet explorer 2.0 html//",
    "-//microsoft//dtd internet explorer 2.0 tables//",
    "-//microsoft//dtd internet explorer 3.0 html strict//",
    "-//microsoft//dtd internet explorer 3.0 html//",
    "-//microsoft//dtd internet explorer 3.0 tables//",
    "-//netscape comm. corp.//dtd html//",
    "-//netscape comm. corp.//dtd strict html//",
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    "-//sq//dtd html 2.0 hotmetal + extensions//",
    "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
    "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
    "-//spyglass//dtd html 2.0 extended//",
    "-//sun microsystems corp.//dtd hotjava html//",
    "-//sun microsystems corp.//dtd hotjava strict html//",
    "-//w3c//dtd html 3 1995-03-24//",
    "-//w3c//dtd html 3.2 draft//",
    "-//w3c//dtd html 3.2 final//",
    "-//w3c//dtd html 3.2//",
    "-//w3c//dtd html 3.2s draft//",
    "-//w3c//dtd html 4.0 frameset//",
    "-//w3c//dtd html 4.0 transitional//",
    "-//w3c//dtd html experimental 19960712//",
    "-//w3c//dtd html experimental 970421//",
    "-//w3c//dtd w3 html//",
    "-//w3o//dtd w3 html 3.0//",
    "-//webtechs//dtd mozilla html 2.0//",
    "-//webtechs//dtd mozilla html//"
], Lar = [
    ...YNt,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
], Dar = new Set([
    "-//w3o//dtd w3 html strict 3.0//en//",
    "-/w3c/dtd html 4.0 transitional/en",
    "html"
]), JNt = [
    "-//w3c//dtd xhtml 1.0 frameset//",
    "-//w3c//dtd xhtml 1.0 transitional//"
], Far = [
    ...JNt,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
], i(KNt, "hasPrefix"), i(Mar, "isConforming"), i(Rar, "getDocumentMode");

}
