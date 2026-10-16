var contentTypeRegExp, contentTypeProto, contentTypeJson;
export { contentTypeJson, contentTypeProto, contentTypeRegExp };
var __wakaru_init_content_type_initialized = false;
export function init_content_type() {
if (__wakaru_init_content_type_initialized) return;
__wakaru_init_content_type_initialized = true;
contentTypeRegExp = /^application\/grpc-web(-text)?(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i;
contentTypeProto = "application/grpc-web+proto";
contentTypeJson = "application/grpc-web+json";

}
