var headerContentType2, headerUnaryContentLength, headerUnaryEncoding, headerStreamEncoding, headerUnaryAcceptEncoding, headerStreamAcceptEncoding, headerTimeout2, headerProtocolVersion, headerUserAgent2;
export { headerContentType2, headerProtocolVersion, headerStreamAcceptEncoding, headerStreamEncoding, headerTimeout2, headerUnaryAcceptEncoding, headerUnaryContentLength, headerUnaryEncoding, headerUserAgent2 };
var __wakaru_init_headers3_initialized = false;
export function init_headers3() {
if (__wakaru_init_headers3_initialized) return;
__wakaru_init_headers3_initialized = true;
headerContentType2 = "Content-Type";
headerUnaryContentLength = "Content-Length";
headerUnaryEncoding = "Content-Encoding";
headerStreamEncoding = "Connect-Content-Encoding";
headerUnaryAcceptEncoding = "Accept-Encoding";
headerStreamAcceptEncoding = "Connect-Accept-Encoding";
headerTimeout2 = "Connect-Timeout-Ms";
headerProtocolVersion = "Connect-Protocol-Version";
headerUserAgent2 = "User-Agent";

}
