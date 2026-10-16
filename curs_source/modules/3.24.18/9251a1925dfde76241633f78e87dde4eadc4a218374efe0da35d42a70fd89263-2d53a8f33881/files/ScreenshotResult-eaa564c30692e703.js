var ScreenshotResult;
export { ScreenshotResult };
var __wakaru_init_ScreenshotResult_initialized = false;
export function init_ScreenshotResult() {
if (__wakaru_init_ScreenshotResult_initialized) return;
__wakaru_init_ScreenshotResult_initialized = true;
ScreenshotResult = class {
    pages = [];
    total = 0;
    constructor(total){
        this.total = total;
    }
};

}
