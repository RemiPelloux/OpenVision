var headerContentType, headerEncoding, headerAcceptEncoding, headerTimeout, headerGrpcStatus, headerGrpcMessage, headerStatusDetailsBin;
export { headerAcceptEncoding, headerContentType, headerEncoding, headerGrpcMessage, headerGrpcStatus, headerStatusDetailsBin, headerTimeout };
var __wakaru_init_headers_initialized = false;
export function init_headers() {
if (__wakaru_init_headers_initialized) return;
__wakaru_init_headers_initialized = true;
headerContentType = "Content-Type";
headerEncoding = "Grpc-Encoding";
headerAcceptEncoding = "Grpc-Accept-Encoding";
headerTimeout = "Grpc-Timeout";
headerGrpcStatus = "Grpc-Status";
headerGrpcMessage = "Grpc-Message";
headerStatusDetailsBin = "Grpc-Status-Details-Bin";

}
