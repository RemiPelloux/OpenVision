import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var jsd;
export { jsd };
var __wakaru_K0y_initialized = false;
export function K0y() {
if (__wakaru_K0y_initialized) return;
__wakaru_K0y_initialized = true;
E(), ky(), jsd = ()=>{
    const t = {
        string: {
            unit: "karakter",
            verb: "memiliki"
        },
        file: {
            unit: "byte",
            verb: "memiliki"
        },
        array: {
            unit: "item",
            verb: "memiliki"
        },
        set: {
            unit: "item",
            verb: "memiliki"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "input",
        email: "alamat email",
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
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input"
    }, i = {
        nan: "NaN"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Input tidak valid: diharapkan instanceof ${r.expected}, diterima ${a}` : `Input tidak valid: diharapkan ${s}, diterima ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Input tidak valid: diharapkan ${rk(r.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin);
                    return o ? `Terlalu besar: diharapkan ${r.origin ?? "value"} memiliki ${s}${r.maximum.toString()} ${o.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${r.origin ?? "value"} menjadi ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin);
                    return o ? `Terlalu kecil: diharapkan ${r.origin} memiliki ${s}${r.minimum.toString()} ${o.unit}` : `Terlalu kecil: diharapkan ${r.origin} menjadi ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${s.prefix}"` : s.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${s.suffix}"` : s.format === "includes" ? `String tidak valid: harus menyertakan "${s.includes}"` : s.format === "regex" ? `String tidak valid: harus sesuai pola ${s.pattern}` : `${n[s.format] ?? r.format} tidak valid`;
                }
            case "not_multiple_of":
                return `Angka tidak valid: harus kelipatan dari ${r.divisor}`;
            case "unrecognized_keys":
                return `Kunci tidak dikenali ${r.keys.length > 1 ? "s" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Kunci tidak valid di ${r.origin}`;
            case "invalid_union":
                return "Input tidak valid";
            case "invalid_element":
                return `Nilai tidak valid di ${r.origin}`;
            default:
                return "Input tidak valid";
        }
    };
};

}
