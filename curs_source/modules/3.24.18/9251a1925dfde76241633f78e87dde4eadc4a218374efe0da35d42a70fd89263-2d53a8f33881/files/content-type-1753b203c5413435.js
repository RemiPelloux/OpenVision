var contentTypeRegExp2, contentTypeProto2, contentTypeJson2;
export { contentTypeJson2, contentTypeProto2, contentTypeRegExp2 };
var __wakaru_init_content_type2_initialized = false;
export function init_content_type2() {
if (__wakaru_init_content_type2_initialized) return;
__wakaru_init_content_type2_initialized = true;
contentTypeRegExp2 = /^application\/grpc(?:\+(?:(json)(?:; ?charset=utf-?8)?|proto))?$/i;
contentTypeProto2 = "application/grpc+proto";
contentTypeJson2 = "application/grpc+json";

}
