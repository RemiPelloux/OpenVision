var contentTypeRegExp3, contentTypeUnaryRegExp, contentTypeStreamRegExp, contentTypeUnaryProto, contentTypeUnaryJson, contentTypeStreamProto, contentTypeStreamJson, encodingProto, encodingJson;
export { contentTypeRegExp3, contentTypeStreamJson, contentTypeStreamProto, contentTypeStreamRegExp, contentTypeUnaryJson, contentTypeUnaryProto, contentTypeUnaryRegExp, encodingJson, encodingProto };
var __wakaru_init_content_type3_initialized = false;
export function init_content_type3() {
if (__wakaru_init_content_type3_initialized) return;
__wakaru_init_content_type3_initialized = true;
contentTypeRegExp3 = /^application\/(connect\+)?(?:(json)(?:; ?charset=utf-?8)?|(proto))$|^text\/event-stream$/i;
contentTypeUnaryRegExp = /^application\/(?:json(?:; ?charset=utf-?8)?|proto)$/i;
contentTypeStreamRegExp = /^application\/connect\+?(?:json(?:; ?charset=utf-?8)?|proto)$|^text\/event-stream$/i;
contentTypeUnaryProto = "application/proto";
contentTypeUnaryJson = "application/json";
contentTypeStreamProto = "application/connect+proto";
contentTypeStreamJson = "application/connect+json";
encodingProto = "proto";
encodingJson = "json";

}
