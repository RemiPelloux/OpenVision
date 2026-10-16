import { _enum2, array2, literal2, object2, optional2, record2, strictObject, string4, union2 } from "../../coerce_exports.js";
import { init_v4_mini } from "../../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v4-mini/index.js";
import { _maxLength, _minLength, _trim } from "../../util_exports.js";
var MAX_CA_BUNDLE_LENGTH, authSchema, tlsSchema, stdioServerSchema, remoteServerSchema, serverSchema, mcpConfigSchema2;
export { MAX_CA_BUNDLE_LENGTH, authSchema, mcpConfigSchema2, remoteServerSchema, serverSchema, stdioServerSchema, tlsSchema };
var __wakaru_init_dist16_initialized = false;
export function init_dist16() {
if (__wakaru_init_dist16_initialized) return;
__wakaru_init_dist16_initialized = true;
"use strict";
init_v4_mini();
MAX_CA_BUNDLE_LENGTH = 128 * 1024;
authSchema = object2({
    CLIENT_ID: string4(),
    CLIENT_SECRET: optional2(string4()),
    scopes: optional2(array2(string4()))
});
tlsSchema = strictObject({
    caBundle: string4().check(_trim(), _minLength(1), _maxLength(MAX_CA_BUNDLE_LENGTH))
});
stdioServerSchema = object2({
    type: optional2(literal2("stdio")),
    command: string4(),
    args: optional2(array2(string4())),
    env: optional2(record2(string4(), string4())),
    envFile: optional2(string4()),
    cwd: optional2(string4()),
    enabledTools: optional2(array2(string4()))
});
remoteServerSchema = object2({
    type: optional2(_enum2([
        "http",
        "sse"
    ])),
    url: string4(),
    headers: optional2(record2(string4(), string4())),
    auth: optional2(authSchema),
    tls: optional2(tlsSchema),
    placement: optional2(_enum2([
        "server",
        "client"
    ])),
    enabledTools: optional2(array2(string4()))
});
serverSchema = union2([
    stdioServerSchema,
    remoteServerSchema
]);
mcpConfigSchema2 = object2({
    mcpServers: record2(string4(), serverSchema)
});

}
