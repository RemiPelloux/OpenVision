var paramConnectVersion, paramEncoding, paramCompression, paramBase64, paramMessage;
export { paramBase64, paramCompression, paramConnectVersion, paramEncoding, paramMessage };
var __wakaru_init_query_params_initialized = false;
export function init_query_params() {
if (__wakaru_init_query_params_initialized) return;
__wakaru_init_query_params_initialized = true;
paramConnectVersion = "connect";
paramEncoding = "encoding";
paramCompression = "compression";
paramBase64 = "base64";
paramMessage = "message";

}
