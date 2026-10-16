var SECRET_WORDS;
export { SECRET_WORDS };
var __wakaru_init_secret_variable_names_initialized = false;
export function init_secret_variable_names() {
if (__wakaru_init_secret_variable_names_initialized) return;
__wakaru_init_secret_variable_names_initialized = true;
"use strict";
SECRET_WORDS = new Set([
    "CREDENTIAL",
    "CREDENTIALS",
    "KEY",
    "PASSPHRASE",
    "PASSWORD",
    "SECRET",
    "TOKEN"
]);

}
