import { Ey, mh, zb } from "./f0s.js";
import { x } from "./tslib.es6.js";
import { Fv } from "./util_3.js";
var dbu;
export { dbu };
var __wakaru_Vov_initialized = false;
export function Vov() {
if (__wakaru_Vov_initialized) return;
__wakaru_Vov_initialized = true;
x(), Fv(), dbu = ()=>{
    const e = {
        string: {
            unit: "caracteres",
            verb: "ter"
        },
        file: {
            unit: "bytes",
            verb: "ter"
        },
        array: {
            unit: "itens",
            verb: "ter"
        },
        set: {
            unit: "itens",
            verb: "ter"
        }
    };
    function t(r) {
        return e[r] ?? null;
    }
    const n = {
        regex: "padr\xE3o",
        email: "endere\xE7o de e-mail",
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
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "dura\xE7\xE3o ISO",
        ipv4: "endere\xE7o IPv4",
        ipv6: "endere\xE7o IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
    }, i = {
        nan: "NaN",
        number: "n\xFAmero",
        null: "nulo"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Ey(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Tipo inv\xE1lido: esperado instanceof ${r.expected}, recebido ${a}` : `Tipo inv\xE1lido: esperado ${s}, recebido ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Entrada inv\xE1lida: esperado ${zb(r.values[0])}` : `Op\xE7\xE3o inv\xE1lida: esperada uma das ${mh(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = t(r.origin);
                    return o ? `Muito grande: esperado que ${r.origin ?? "valor"} tivesse ${s}${r.maximum.toString()} ${o.unit ?? "elementos"}` : `Muito grande: esperado que ${r.origin ?? "valor"} fosse ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = t(r.origin);
                    return o ? `Muito pequeno: esperado que ${r.origin} tivesse ${s}${r.minimum.toString()} ${o.unit}` : `Muito pequeno: esperado que ${r.origin} fosse ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Texto inv\xE1lido: deve come\xE7ar com "${s.prefix}"` : s.format === "ends_with" ? `Texto inv\xE1lido: deve terminar com "${s.suffix}"` : s.format === "includes" ? `Texto inv\xE1lido: deve incluir "${s.includes}"` : s.format === "regex" ? `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${s.pattern}` : `${n[s.format] ?? r.format} inv\xE1lido`;
                }
            case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${r.divisor}`;
            case "unrecognized_keys":
                return `Chave${r.keys.length > 1 ? "s" : ""} desconhecida${r.keys.length > 1 ? "s" : ""}: ${mh(r.keys, ", ")}`;
            case "invalid_key":
                return `Chave inv\xE1lida em ${r.origin}`;
            case "invalid_union":
                return "Entrada inv\xE1lida";
            case "invalid_element":
                return `Valor inv\xE1lido em ${r.origin}`;
            default:
                return "Campo inv\xE1lido";
        }
    };
};

}
