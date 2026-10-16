var CoordinateScaler;
export { CoordinateScaler };
var __wakaru_init_scaling_initialized = false;
export function init_scaling() {
if (__wakaru_init_scaling_initialized) return;
__wakaru_init_scaling_initialized = true;
"use strict";
CoordinateScaler = class {
    constructor(config2){
        this.config = config2;
        const displayRatio = config2.display.width / config2.display.height;
        const apiRatio = config2.api.width / config2.api.height;
        const ratioDiff = Math.abs(displayRatio - apiRatio);
        if (ratioDiff > 0.02) {
            throw new Error(`Aspect ratio mismatch: display=${displayRatio.toFixed(3)}, api=${apiRatio.toFixed(3)}`);
        }
        this.xScaleUp = config2.display.width / config2.api.width;
        this.yScaleUp = config2.display.height / config2.api.height;
        this.xScaleDown = config2.api.width / config2.display.width;
        this.yScaleDown = config2.api.height / config2.display.height;
    }
    apiToDisplay(x, y) {
        return {
            x: Math.round(x * this.xScaleUp),
            y: Math.round(y * this.yScaleUp)
        };
    }
    displayToApi(x, y) {
        return {
            x: Math.round(x * this.xScaleDown),
            y: Math.round(y * this.yScaleDown)
        };
    }
    get apiWidth() {
        return this.config.api.width;
    }
    get apiHeight() {
        return this.config.api.height;
    }
    get displayWidth() {
        return this.config.display.width;
    }
    get displayHeight() {
        return this.config.display.height;
    }
};

}
