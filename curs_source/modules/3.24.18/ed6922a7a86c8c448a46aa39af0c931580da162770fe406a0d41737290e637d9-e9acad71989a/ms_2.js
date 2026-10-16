import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var sbu;
export { sbu };
var __wakaru_Mov_initialized = false;
export function Mov() {
if (__wakaru_Mov_initialized) return;
__wakaru_Mov_initialized = true;
x(), Fv(), sbu = ()=>{
    const e = {
        string: {
            unit: "aksara",
            verb: "mempunyai"
        },
        file: {
            unit: "bait",
            verb: "mempunyai"
        },
        array: {
            unit: "elemen",
            verb: "mempunyai"
        },
        set: {
            unit: "elemen",
            verb: "mempunyai"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN",
        number: "nombor"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Input tidak sah: dijangka instanceof ${r.expected}, diterima ${a}` : `Input tidak sah: dijangka ${s}, diterima ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Input tidak sah: dijangka ${zb(r.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Terlalu besar: dijangka ${r.origin ?? "nilai"} ${o.verb} ${s}${r.maximum.toString()} ${o.unit ?? "elemen"}` : `Terlalu besar: dijangka ${r.origin ?? "nilai"} adalah ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Terlalu kecil: dijangka ${r.origin} ${o.verb} ${s}${r.minimum.toString()} ${o.unit}` : `Terlalu kecil: dijangka ${r.origin} adalah ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${s.prefix}"` : s.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${s.suffix}"` : s.format === "includes" ? `String tidak sah: mesti mengandungi "${s.includes}"` : s.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${s.pattern}` : `${n[s.format] ?? r.format} tidak sah`;
                }
            case "not_multiple_of":
                return `Nombor tidak sah: perlu gandaan ${r.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak sah dalam ${r.origin}`;
            case "invalid_union":
                return "Input tidak sah";
            case "invalid_element":
                return `Nilai tidak sah dalam ${r.origin}`;
            default:
                return "Input tidak sah";
        }
    };
};

}
