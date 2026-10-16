import { Qk, om, rk } from "./SZu.js";
import { E } from "./tslib.es6.js";
import { ky } from "./util.js";
var Psd;
export { Psd };
var __wakaru_M0y_initialized = false;
export function M0y() {
if (__wakaru_M0y_initialized) return;
__wakaru_M0y_initialized = true;
E(), ky(), Psd = ()=>{
    const t = {
        string: {
            unit: "caracteres",
            verb: "tener"
        },
        file: {
            unit: "bytes",
            verb: "tener"
        },
        array: {
            unit: "elementos",
            verb: "tener"
        },
        set: {
            unit: "elementos",
            verb: "tener"
        }
    };
    function e(r) {
        return t[r] ?? null;
    }
    const n = {
        regex: "entrada",
        email: "direcci\xF3n de correo electr\xF3nico",
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
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duraci\xF3n ISO",
        ipv4: "direcci\xF3n IPv4",
        ipv6: "direcci\xF3n IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
    }, i = {
        nan: "NaN",
        string: "texto",
        number: "n\xFAmero",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "n\xFAmero grande",
        symbol: "s\xEDmbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "funci\xF3n",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeraci\xF3n",
        union: "uni\xF3n",
        literal: "literal",
        promise: "promesa",
        void: "vac\xEDo",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera"
    };
    return (r)=>{
        switch(r.code){
            case "invalid_type":
                {
                    const s = i[r.expected] ?? r.expected, o = Qk(r.input), a = i[o] ?? o;
                    return /^[A-Z]/.test(r.expected) ? `Entrada inv\xE1lida: se esperaba instanceof ${r.expected}, recibido ${a}` : `Entrada inv\xE1lida: se esperaba ${s}, recibido ${a}`;
                }
            case "invalid_value":
                return r.values.length === 1 ? `Entrada inv\xE1lida: se esperaba ${rk(r.values[0])}` : `Opci\xF3n inv\xE1lida: se esperaba una de ${om(r.values, "|")}`;
            case "too_big":
                {
                    const s = r.inclusive ? "<=" : "<", o = e(r.origin), a = i[r.origin] ?? r.origin;
                    return o ? `Demasiado grande: se esperaba que ${a ?? "valor"} tuviera ${s}${r.maximum.toString()} ${o.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${a ?? "valor"} fuera ${s}${r.maximum.toString()}`;
                }
            case "too_small":
                {
                    const s = r.inclusive ? ">=" : ">", o = e(r.origin), a = i[r.origin] ?? r.origin;
                    return o ? `Demasiado peque\xF1o: se esperaba que ${a} tuviera ${s}${r.minimum.toString()} ${o.unit}` : `Demasiado peque\xF1o: se esperaba que ${a} fuera ${s}${r.minimum.toString()}`;
                }
            case "invalid_format":
                {
                    const s = r;
                    return s.format === "starts_with" ? `Cadena inv\xE1lida: debe comenzar con "${s.prefix}"` : s.format === "ends_with" ? `Cadena inv\xE1lida: debe terminar en "${s.suffix}"` : s.format === "includes" ? `Cadena inv\xE1lida: debe incluir "${s.includes}"` : s.format === "regex" ? `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${s.pattern}` : `Inv\xE1lido ${n[s.format] ?? r.format}`;
                }
            case "not_multiple_of":
                return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${r.divisor}`;
            case "unrecognized_keys":
                return `Llave${r.keys.length > 1 ? "s" : ""} desconocida${r.keys.length > 1 ? "s" : ""}: ${om(r.keys, ", ")}`;
            case "invalid_key":
                return `Llave inv\xE1lida en ${i[r.origin] ?? r.origin}`;
            case "invalid_union":
                return "Entrada inv\xE1lida";
            case "invalid_element":
                return `Valor inv\xE1lido en ${i[r.origin] ?? r.origin}`;
            default:
                return "Entrada inv\xE1lida";
        }
    };
};

}
