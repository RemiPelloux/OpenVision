import { a } from "./business-error.js";
function Dw(e) {
    const t = {};
    return e.replace(Uw, (r)=>{
        const n = r.length;
        switch(r[0]){
            case "G":
                t.era = n === 4 ? "long" : n === 5 ? "narrow" : "short";
                break;
            case "y":
                t.year = n === 2 ? "2-digit" : "numeric";
                break;
            case "Y":
            case "u":
            case "U":
            case "r":
                throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
                throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
                t.month = [
                    "numeric",
                    "2-digit",
                    "short",
                    "long",
                    "narrow"
                ][n - 1];
                break;
            case "w":
            case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
                t.day = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "D":
            case "F":
            case "g":
                throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
                t.weekday = n === 4 ? "long" : n === 5 ? "narrow" : "short";
                break;
            case "e":
                if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
                t.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][n - 3];
                break;
            case "c":
                if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
                t.weekday = [
                    "short",
                    "long",
                    "narrow",
                    "short"
                ][n - 3];
                break;
            case "a":
                t.hour12 = !0;
                break;
            case "b":
            case "B":
                throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
                t.hourCycle = "h12", t.hour = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "H":
                t.hourCycle = "h23", t.hour = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "K":
                t.hourCycle = "h11", t.hour = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "k":
                t.hourCycle = "h24", t.hour = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "j":
            case "J":
            case "C":
                throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
                t.minute = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "s":
                t.second = [
                    "numeric",
                    "2-digit"
                ][n - 1];
                break;
            case "S":
            case "A":
                throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
                t.timeZoneName = n < 4 ? "short" : "long";
                break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
                throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead");
        }
        return "";
    }), t;
}
function Lw(e) {
    if (e.length === 0) throw new Error("Number skeleton cannot be empty");
    const t = e.split(jw).filter((n)=>n.length > 0), r = [];
    for (const n of t){
        let o = n.split("/");
        if (o.length === 0) throw new Error("Invalid number skeleton");
        const [i, ...s] = o;
        for (const c of s)if (c.length === 0) throw new Error("Invalid number skeleton");
        r.push({
            stem: i,
            options: s
        });
    }
    return r;
}
function Fw(e) {
    return e.replace(/^(.*?)-/, "");
}
function bd(e) {
    const t = {};
    return e[e.length - 1] === "r" ? t.roundingPriority = "morePrecision" : e[e.length - 1] === "s" && (t.roundingPriority = "lessPrecision"), e.replace(Ed, function(r, n, o) {
        return typeof o != "string" ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : o === "+" ? t.minimumSignificantDigits = n.length : n[0] === "#" ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + (typeof o == "string" ? o.length : 0)), "";
    }), t;
}
function yd(e) {
    switch(e){
        case "sign-auto":
            return {
                signDisplay: "auto"
            };
        case "sign-accounting":
        case "()":
            return {
                currencySign: "accounting"
            };
        case "sign-always":
        case "+!":
            return {
                signDisplay: "always"
            };
        case "sign-accounting-always":
        case "()!":
            return {
                signDisplay: "always",
                currencySign: "accounting"
            };
        case "sign-except-zero":
        case "+?":
            return {
                signDisplay: "exceptZero"
            };
        case "sign-accounting-except-zero":
        case "()?":
            return {
                signDisplay: "exceptZero",
                currencySign: "accounting"
            };
        case "sign-never":
        case "+_":
            return {
                signDisplay: "never"
            };
    }
}
function Vw(e) {
    let t;
    if (e[0] === "E" && e[1] === "E" ? (t = {
        notation: "engineering"
    }, e = e.slice(2)) : e[0] === "E" && (t = {
        notation: "scientific"
    }, e = e.slice(1)), t) {
        const r = e.slice(0, 2);
        if (r === "+!" ? (t.signDisplay = "always", e = e.slice(2)) : r === "+?" && (t.signDisplay = "exceptZero", e = e.slice(2)), !kd.test(e)) throw new Error("Malformed concise eng/scientific notation");
        t.minimumIntegerDigits = e.length;
    }
    return t;
}
function wd(e) {
    const t = {}, r = yd(e);
    return r || t;
}
function Bw(e) {
    let t = {};
    for (const r of e){
        switch(r.stem){
            case "percent":
            case "%":
                t.style = "percent";
                continue;
            case "%x100":
                t.style = "percent", t.scale = 100;
                continue;
            case "currency":
                t.style = "currency", t.currency = r.options[0];
                continue;
            case "group-off":
            case ",_":
                t.useGrouping = !1;
                continue;
            case "precision-integer":
            case ".":
                t.maximumFractionDigits = 0;
                continue;
            case "measure-unit":
            case "unit":
                t.style = "unit", t.unit = Fw(r.options[0]);
                continue;
            case "compact-short":
            case "K":
                t.notation = "compact", t.compactDisplay = "short";
                continue;
            case "compact-long":
            case "KK":
                t.notation = "compact", t.compactDisplay = "long";
                continue;
            case "scientific":
                t = {
                    ...t,
                    notation: "scientific",
                    ...r.options.reduce((i, s)=>({
                            ...i,
                            ...wd(s)
                        }), {})
                };
                continue;
            case "engineering":
                t = {
                    ...t,
                    notation: "engineering",
                    ...r.options.reduce((i, s)=>({
                            ...i,
                            ...wd(s)
                        }), {})
                };
                continue;
            case "notation-simple":
                t.notation = "standard";
                continue;
            case "unit-width-narrow":
                t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                continue;
            case "unit-width-short":
                t.currencyDisplay = "code", t.unitDisplay = "short";
                continue;
            case "unit-width-full-name":
                t.currencyDisplay = "name", t.unitDisplay = "long";
                continue;
            case "unit-width-iso-code":
                t.currencyDisplay = "symbol";
                continue;
            case "scale":
                t.scale = parseFloat(r.options[0]);
                continue;
            case "rounding-mode-floor":
                t.roundingMode = "floor";
                continue;
            case "rounding-mode-ceiling":
                t.roundingMode = "ceil";
                continue;
            case "rounding-mode-down":
                t.roundingMode = "trunc";
                continue;
            case "rounding-mode-up":
                t.roundingMode = "expand";
                continue;
            case "rounding-mode-half-even":
                t.roundingMode = "halfEven";
                continue;
            case "rounding-mode-half-down":
                t.roundingMode = "halfTrunc";
                continue;
            case "rounding-mode-half-up":
                t.roundingMode = "halfExpand";
                continue;
            case "integer-width":
                if (r.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
                r.options[0].replace(zw, function(i, s, c, l, m, u) {
                    if (s) t.minimumIntegerDigits = c.length;
                    else {
                        if (l && m) throw new Error("We currently do not support maximum integer digits");
                        if (u) throw new Error("We currently do not support exact integer digits");
                    }
                    return "";
                });
                continue;
        }
        if (kd.test(r.stem)) {
            t.minimumIntegerDigits = r.stem.length;
            continue;
        }
        if (Sd.test(r.stem)) {
            if (r.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            r.stem.replace(Sd, function(s, c, l, m, u, d) {
                return l === "*" ? t.minimumFractionDigits = c.length : m && m[0] === "#" ? t.maximumFractionDigits = m.length : u && d ? (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length + d.length) : (t.minimumFractionDigits = c.length, t.maximumFractionDigits = c.length), "";
            });
            const i = r.options[0];
            i === "w" ? t = {
                ...t,
                trailingZeroDisplay: "stripIfInteger"
            } : i && (t = {
                ...t,
                ...bd(i)
            });
            continue;
        }
        if (Ed.test(r.stem)) {
            t = {
                ...t,
                ...bd(r.stem)
            };
            continue;
        }
        const n = yd(r.stem);
        n && (t = {
            ...t,
            ...n
        });
        const o = Vw(r.stem);
        o && (t = {
            ...t,
            ...o
        });
    }
    return t;
}
var Uw, jw, Sd, Ed, zw, kd;
export { Bw, Dw, Ed, Fw, Lw, Sd, Uw, Vw, bd, jw, kd, wd, yd, zw };
var __wakaru_h6_initialized = false;
export function h6() {
if (__wakaru_h6_initialized) return;
__wakaru_h6_initialized = true;
Uw = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g, a(Dw, "parseDateTimeSkeleton"), jw = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i, a(Lw, "parseNumberSkeletonFromString"), a(Fw, "icuUnitToEcma"), Sd = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g, Ed = /^(@+)?(\+|#+)?[rs]?$/g, zw = /(\*)(0+)|(#+)(0+)|(0+)/g, kd = /^(0+)$/, a(bd, "parseSignificantPrecision"), a(yd, "parseSign"), a(Vw, "parseConciseScientificAndEngineeringStem"), a(wd, "parseNotationOptions"), a(Bw, "parseNumberSkeleton");

}
