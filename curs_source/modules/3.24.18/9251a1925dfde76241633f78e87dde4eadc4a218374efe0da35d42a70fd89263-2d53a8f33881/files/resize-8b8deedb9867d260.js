import { Resize } from "../../../../../../../../../esm_exports7.js";
var resize_default;
export { resize_default };
var __wakaru_init_resize_initialized = false;
export function init_resize() {
if (__wakaru_init_resize_initialized) return;
__wakaru_init_resize_initialized = true;
Resize.prototype.initialize = function() {
    if (this.widthOriginal > 0 && this.heightOriginal > 0 && this.targetWidth > 0 && this.targetHeight > 0) {
        this.configurePasses();
    } else {
        console.log(this);
        throw new Error("Invalid settings specified for the resizer.");
    }
};
Resize.prototype.configurePasses = function() {
    if (this.widthOriginal === this.targetWidth) {
        this.resizeWidth = this.bypassResizer;
    } else {
        this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth;
        if (this.ratioWeightWidthPass < 1 && this.interpolationPass) {
            this.initializeFirstPassBuffers(true);
            this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthInterpolatedRGBA : this.resizeWidthInterpolatedRGB;
        } else {
            this.initializeFirstPassBuffers(false);
            this.resizeWidth = this.colorChannels === 4 ? this.resizeWidthRGBA : this.resizeWidthRGB;
        }
    }
    if (this.heightOriginal === this.targetHeight) {
        this.resizeHeight = this.bypassResizer;
    } else {
        this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight;
        if (this.ratioWeightHeightPass < 1 && this.interpolationPass) {
            this.initializeSecondPassBuffers(true);
            this.resizeHeight = this.resizeHeightInterpolated;
        } else {
            this.initializeSecondPassBuffers(false);
            this.resizeHeight = this.colorChannels === 4 ? this.resizeHeightRGBA : this.resizeHeightRGB;
        }
    }
};
Resize.prototype._resizeWidthInterpolatedRGBChannels = function(buffer, fourthChannel) {
    const channelsNum = fourthChannel ? 4 : 3;
    const ratioWeight = this.ratioWeightWidthPass;
    const outputBuffer = this.widthBuffer;
    let weight = 0;
    let finalOffset = 0;
    let pixelOffset = 0;
    let firstWeight = 0;
    let secondWeight = 0;
    let targetPosition;
    for(targetPosition = 0; weight < 1 / 3; targetPosition += channelsNum, weight += ratioWeight){
        for(finalOffset = targetPosition, pixelOffset = 0; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels){
            outputBuffer[finalOffset] = buffer[pixelOffset];
            outputBuffer[finalOffset + 1] = buffer[pixelOffset + 1];
            outputBuffer[finalOffset + 2] = buffer[pixelOffset + 2];
            if (fourthChannel) outputBuffer[finalOffset + 3] = buffer[pixelOffset + 3];
        }
    }
    weight -= 1 / 3;
    let interpolationWidthSourceReadStop;
    for(interpolationWidthSourceReadStop = this.widthOriginal - 1; weight < interpolationWidthSourceReadStop; targetPosition += channelsNum, weight += ratioWeight){
        secondWeight = weight % 1;
        firstWeight = 1 - secondWeight;
        for(finalOffset = targetPosition, pixelOffset = Math.floor(weight) * channelsNum; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels){
            outputBuffer[finalOffset + 0] = buffer[pixelOffset + 0] * firstWeight + buffer[pixelOffset + channelsNum + 0] * secondWeight;
            outputBuffer[finalOffset + 1] = buffer[pixelOffset + 1] * firstWeight + buffer[pixelOffset + channelsNum + 1] * secondWeight;
            outputBuffer[finalOffset + 2] = buffer[pixelOffset + 2] * firstWeight + buffer[pixelOffset + channelsNum + 2] * secondWeight;
            if (fourthChannel) outputBuffer[finalOffset + 3] = buffer[pixelOffset + 3] * firstWeight + buffer[pixelOffset + channelsNum + 3] * secondWeight;
        }
    }
    for(interpolationWidthSourceReadStop = this.originalWidthMultipliedByChannels - channelsNum; targetPosition < this.targetWidthMultipliedByChannels; targetPosition += channelsNum){
        for(finalOffset = targetPosition, pixelOffset = interpolationWidthSourceReadStop; finalOffset < this.widthPassResultSize; pixelOffset += this.originalWidthMultipliedByChannels, finalOffset += this.targetWidthMultipliedByChannels){
            outputBuffer[finalOffset] = buffer[pixelOffset];
            outputBuffer[finalOffset + 1] = buffer[pixelOffset + 1];
            outputBuffer[finalOffset + 2] = buffer[pixelOffset + 2];
            if (fourthChannel) outputBuffer[finalOffset + 3] = buffer[pixelOffset + 3];
        }
    }
    return outputBuffer;
};
Resize.prototype._resizeWidthRGBChannels = function(buffer, fourthChannel) {
    const channelsNum = fourthChannel ? 4 : 3;
    const ratioWeight = this.ratioWeightWidthPass;
    const ratioWeightDivisor = 1 / ratioWeight;
    const nextLineOffsetOriginalWidth = this.originalWidthMultipliedByChannels - channelsNum + 1;
    const nextLineOffsetTargetWidth = this.targetWidthMultipliedByChannels - channelsNum + 1;
    const output = this.outputWidthWorkBench;
    const outputBuffer = this.widthBuffer;
    const trustworthyColorsCount = this.outputWidthWorkBenchOpaquePixelsCount;
    let weight = 0;
    let amountToNext = 0;
    let actualPosition = 0;
    let currentPosition = 0;
    let line = 0;
    let pixelOffset = 0;
    let outputOffset = 0;
    let multiplier = 1;
    let r = 0;
    let g2 = 0;
    let b2 = 0;
    let a = 0;
    do {
        for(line = 0; line < this.originalHeightMultipliedByChannels;){
            output[line++] = 0;
            output[line++] = 0;
            output[line++] = 0;
            if (fourthChannel) {
                output[line++] = 0;
                trustworthyColorsCount[line / channelsNum - 1] = 0;
            }
        }
        weight = ratioWeight;
        do {
            amountToNext = 1 + actualPosition - currentPosition;
            multiplier = Math.min(weight, amountToNext);
            for(line = 0, pixelOffset = actualPosition; line < this.originalHeightMultipliedByChannels; pixelOffset += nextLineOffsetOriginalWidth){
                r = buffer[pixelOffset];
                g2 = buffer[++pixelOffset];
                b2 = buffer[++pixelOffset];
                a = fourthChannel ? buffer[++pixelOffset] : 255;
                output[line++] += (a ? r : 0) * multiplier;
                output[line++] += (a ? g2 : 0) * multiplier;
                output[line++] += (a ? b2 : 0) * multiplier;
                if (fourthChannel) {
                    output[line++] += a * multiplier;
                    trustworthyColorsCount[line / channelsNum - 1] += a ? multiplier : 0;
                }
            }
            if (weight >= amountToNext) {
                actualPosition += channelsNum;
                currentPosition = actualPosition;
                weight -= amountToNext;
            } else {
                currentPosition += weight;
                break;
            }
        }while (weight > 0 && actualPosition < this.originalWidthMultipliedByChannels)
        for(line = 0, pixelOffset = outputOffset; line < this.originalHeightMultipliedByChannels; pixelOffset += nextLineOffsetTargetWidth){
            weight = fourthChannel ? trustworthyColorsCount[line / channelsNum] : 1;
            multiplier = fourthChannel ? weight ? 1 / weight : 0 : ratioWeightDivisor;
            outputBuffer[pixelOffset] = output[line++] * multiplier;
            outputBuffer[++pixelOffset] = output[line++] * multiplier;
            outputBuffer[++pixelOffset] = output[line++] * multiplier;
            if (fourthChannel) outputBuffer[++pixelOffset] = output[line++] * ratioWeightDivisor;
        }
        outputOffset += channelsNum;
    }while (outputOffset < this.targetWidthMultipliedByChannels)
    return outputBuffer;
};
Resize.prototype._resizeHeightRGBChannels = function(buffer, fourthChannel) {
    const ratioWeight = this.ratioWeightHeightPass;
    const ratioWeightDivisor = 1 / ratioWeight;
    const output = this.outputHeightWorkBench;
    const outputBuffer = this.heightBuffer;
    const trustworthyColorsCount = this.outputHeightWorkBenchOpaquePixelsCount;
    let weight = 0;
    let amountToNext = 0;
    let actualPosition = 0;
    let currentPosition = 0;
    let pixelOffset = 0;
    let outputOffset = 0;
    let caret = 0;
    let multiplier = 1;
    let r = 0;
    let g2 = 0;
    let b2 = 0;
    let a = 0;
    do {
        for(pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels;){
            output[pixelOffset++] = 0;
            output[pixelOffset++] = 0;
            output[pixelOffset++] = 0;
            if (fourthChannel) {
                output[pixelOffset++] = 0;
                trustworthyColorsCount[pixelOffset / 4 - 1] = 0;
            }
        }
        weight = ratioWeight;
        do {
            amountToNext = 1 + actualPosition - currentPosition;
            multiplier = Math.min(weight, amountToNext);
            caret = actualPosition;
            for(pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels;){
                r = buffer[caret++];
                g2 = buffer[caret++];
                b2 = buffer[caret++];
                a = fourthChannel ? buffer[caret++] : 255;
                output[pixelOffset++] += (a ? r : 0) * multiplier;
                output[pixelOffset++] += (a ? g2 : 0) * multiplier;
                output[pixelOffset++] += (a ? b2 : 0) * multiplier;
                if (fourthChannel) {
                    output[pixelOffset++] += a * multiplier;
                    trustworthyColorsCount[pixelOffset / 4 - 1] += a ? multiplier : 0;
                }
            }
            if (weight >= amountToNext) {
                actualPosition = caret;
                currentPosition = actualPosition;
                weight -= amountToNext;
            } else {
                currentPosition += weight;
                break;
            }
        }while (weight > 0 && actualPosition < this.widthPassResultSize)
        for(pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels;){
            weight = fourthChannel ? trustworthyColorsCount[pixelOffset / 4] : 1;
            multiplier = fourthChannel ? weight ? 1 / weight : 0 : ratioWeightDivisor;
            outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
            outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
            outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * multiplier);
            if (fourthChannel) {
                outputBuffer[outputOffset++] = Math.round(output[pixelOffset++] * ratioWeightDivisor);
            }
        }
    }while (outputOffset < this.finalResultSize)
    return outputBuffer;
};
Resize.prototype.resizeWidthInterpolatedRGB = function(buffer) {
    return this._resizeWidthInterpolatedRGBChannels(buffer, false);
};
Resize.prototype.resizeWidthInterpolatedRGBA = function(buffer) {
    return this._resizeWidthInterpolatedRGBChannels(buffer, true);
};
Resize.prototype.resizeWidthRGB = function(buffer) {
    return this._resizeWidthRGBChannels(buffer, false);
};
Resize.prototype.resizeWidthRGBA = function(buffer) {
    return this._resizeWidthRGBChannels(buffer, true);
};
Resize.prototype.resizeHeightInterpolated = function(buffer) {
    const ratioWeight = this.ratioWeightHeightPass;
    const outputBuffer = this.heightBuffer;
    let weight = 0;
    let finalOffset = 0;
    let pixelOffset = 0;
    let pixelOffsetAccumulated = 0;
    let pixelOffsetAccumulated2 = 0;
    let firstWeight = 0;
    let secondWeight = 0;
    let interpolationHeightSourceReadStop;
    for(; weight < 1 / 3; weight += ratioWeight){
        for(pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels;){
            outputBuffer[finalOffset++] = Math.round(buffer[pixelOffset++]);
        }
    }
    weight -= 1 / 3;
    for(interpolationHeightSourceReadStop = this.heightOriginal - 1; weight < interpolationHeightSourceReadStop; weight += ratioWeight){
        secondWeight = weight % 1;
        firstWeight = 1 - secondWeight;
        pixelOffsetAccumulated = Math.floor(weight) * this.targetWidthMultipliedByChannels;
        pixelOffsetAccumulated2 = pixelOffsetAccumulated + this.targetWidthMultipliedByChannels;
        for(pixelOffset = 0; pixelOffset < this.targetWidthMultipliedByChannels; ++pixelOffset){
            outputBuffer[finalOffset++] = Math.round(buffer[pixelOffsetAccumulated++] * firstWeight + buffer[pixelOffsetAccumulated2++] * secondWeight);
        }
    }
    while(finalOffset < this.finalResultSize){
        for(pixelOffset = 0, pixelOffsetAccumulated = interpolationHeightSourceReadStop * this.targetWidthMultipliedByChannels; pixelOffset < this.targetWidthMultipliedByChannels; ++pixelOffset){
            outputBuffer[finalOffset++] = Math.round(buffer[pixelOffsetAccumulated++]);
        }
    }
    return outputBuffer;
};
Resize.prototype.resizeHeightRGB = function(buffer) {
    return this._resizeHeightRGBChannels(buffer, false);
};
Resize.prototype.resizeHeightRGBA = function(buffer) {
    return this._resizeHeightRGBChannels(buffer, true);
};
Resize.prototype.resize = function(buffer) {
    this.resizeCallback(this.resizeHeight(this.resizeWidth(buffer)));
};
Resize.prototype.bypassResizer = function(buffer) {
    return buffer;
};
Resize.prototype.initializeFirstPassBuffers = function(BILINEARAlgo) {
    this.widthBuffer = this.generateFloatBuffer(this.widthPassResultSize);
    if (!BILINEARAlgo) {
        this.outputWidthWorkBench = this.generateFloatBuffer(this.originalHeightMultipliedByChannels);
        if (this.colorChannels > 3) {
            this.outputWidthWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.heightOriginal);
        }
    }
};
Resize.prototype.initializeSecondPassBuffers = function(BILINEARAlgo) {
    this.heightBuffer = this.generateUint8Buffer(this.finalResultSize);
    if (!BILINEARAlgo) {
        this.outputHeightWorkBench = this.generateFloatBuffer(this.targetWidthMultipliedByChannels);
        if (this.colorChannels > 3) {
            this.outputHeightWorkBenchOpaquePixelsCount = this.generateFloat64Buffer(this.targetWidth);
        }
    }
};
Resize.prototype.generateFloatBuffer = function(bufferLength) {
    try {
        return new Float32Array(bufferLength);
    } catch (error3) {
        console.error(error3);
        return [];
    }
};
Resize.prototype.generateFloat64Buffer = function(bufferLength) {
    try {
        return new Float64Array(bufferLength);
    } catch (error3) {
        console.error(error3);
        return [];
    }
};
Resize.prototype.generateUint8Buffer = function(bufferLength) {
    try {
        return new Uint8Array(bufferLength);
    } catch (error3) {
        console.error(error3);
        return [];
    }
};
resize_default = Resize;

}
