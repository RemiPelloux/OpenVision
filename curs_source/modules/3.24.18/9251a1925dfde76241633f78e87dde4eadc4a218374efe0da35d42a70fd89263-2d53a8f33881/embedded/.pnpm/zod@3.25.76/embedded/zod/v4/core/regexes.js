var cuid, cuid2, ulid, xid, ksuid, nanoid, duration, guid, uuid, email, _emoji, ipv4, ipv6, cidrv4, cidrv6, base64, base64url, hostname, e164, dateSource, date, string, bigint, integer, number, boolean, _null2, lowercase, uppercase;
export { _emoji, _null2, base64, base64url, bigint, boolean, cidrv4, cidrv6, cuid, cuid2, date, dateSource, duration, e164, email, guid, hostname, integer, ipv4, ipv6, ksuid, lowercase, nanoid, number, string, ulid, uppercase, uuid, xid };
var __wakaru_init_regexes_initialized = false;
export function init_regexes() {
if (__wakaru_init_regexes_initialized) return;
__wakaru_init_regexes_initialized = true;
cuid = /^[cC][^\s-]{8,}$/;
cuid2 = /^[0-9a-z]+$/;
ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
xid = /^[0-9a-vA-V]{20}$/;
ksuid = /^[A-Za-z0-9]{27}$/;
nanoid = /^[a-zA-Z0-9_-]{21}$/;
duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
uuid = (version4)=>{
    if (!version4) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version4}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
_emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/;
cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
base64url = /^[A-Za-z0-9_-]*$/;
hostname = /^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;
e164 = /^\+(?:[0-9]){6,14}[0-9]$/;
dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
date = new RegExp(`^${dateSource}$`);
string = (params)=>{
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
};
bigint = /^\d+n?$/;
integer = /^\d+$/;
number = /^-?\d+(?:\.\d+)?/i;
boolean = /true|false/i;
_null2 = /null/i;
lowercase = /^[^A-Z]*$/;
uppercase = /^[^a-z]*$/;

}
