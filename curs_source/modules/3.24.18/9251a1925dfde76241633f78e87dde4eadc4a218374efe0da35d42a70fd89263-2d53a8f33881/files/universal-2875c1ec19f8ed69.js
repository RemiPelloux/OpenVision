var uResponseOk, uResponseNotFound, uResponseUnsupportedMediaType, uResponseMethodNotAllowed, uResponseVersionNotSupported;
export { uResponseMethodNotAllowed, uResponseNotFound, uResponseOk, uResponseUnsupportedMediaType, uResponseVersionNotSupported };
var __wakaru_init_universal_initialized = false;
export function init_universal() {
if (__wakaru_init_universal_initialized) return;
__wakaru_init_universal_initialized = true;
uResponseOk = {
    status: 200
};
uResponseNotFound = {
    status: 404
};
uResponseUnsupportedMediaType = {
    status: 415
};
uResponseMethodNotAllowed = {
    status: 405
};
uResponseVersionNotSupported = {
    status: 505
};

}
