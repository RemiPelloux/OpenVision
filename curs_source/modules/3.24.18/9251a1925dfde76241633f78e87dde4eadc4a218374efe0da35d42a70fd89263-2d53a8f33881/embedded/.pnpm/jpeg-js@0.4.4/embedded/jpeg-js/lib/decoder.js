var __wakaru_require_decoder_cache;
export function require_decoder() {
if (__wakaru_require_decoder_cache) return __wakaru_require_decoder_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_decoder_cache = module2;
var JpegImage = (function jpegImage() {
    "use strict";
    var dctZigZag = new Int32Array([
        0,
        1,
        8,
        16,
        9,
        2,
        3,
        10,
        17,
        24,
        32,
        25,
        18,
        11,
        4,
        5,
        12,
        19,
        26,
        33,
        40,
        48,
        41,
        34,
        27,
        20,
        13,
        6,
        7,
        14,
        21,
        28,
        35,
        42,
        49,
        56,
        57,
        50,
        43,
        36,
        29,
        22,
        15,
        23,
        30,
        37,
        44,
        51,
        58,
        59,
        52,
        45,
        38,
        31,
        39,
        46,
        53,
        60,
        61,
        54,
        47,
        55,
        62,
        63
    ]);
    var dctCos1 = 4017;
    var dctSin1 = 799;
    var dctCos3 = 3406;
    var dctSin3 = 2276;
    var dctCos6 = 1567;
    var dctSin6 = 3784;
    var dctSqrt2 = 5793;
    var dctSqrt1d2 = 2896;
    function constructor() {}
    function buildHuffmanTable(codeLengths, values) {
        var k2 = 0, code = [], i, j2, length = 16;
        while(length > 0 && !codeLengths[length - 1])length--;
        code.push({
            children: [],
            index: 0
        });
        var p2 = code[0], q2;
        for(i = 0; i < length; i++){
            for(j2 = 0; j2 < codeLengths[i]; j2++){
                p2 = code.pop();
                p2.children[p2.index] = values[k2];
                while(p2.index > 0){
                    if (code.length === 0) throw new Error("Could not recreate Huffman Table");
                    p2 = code.pop();
                }
                p2.index++;
                code.push(p2);
                while(code.length <= i){
                    code.push(q2 = {
                        children: [],
                        index: 0
                    });
                    p2.children[p2.index] = q2.children;
                    p2 = q2;
                }
                k2++;
            }
            if (i + 1 < length) {
                code.push(q2 = {
                    children: [],
                    index: 0
                });
                p2.children[p2.index] = q2.children;
                p2 = q2;
            }
        }
        return code[0].children;
    }
    function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, opts) {
        var precision = frame.precision;
        var samplesPerLine = frame.samplesPerLine;
        var scanLines = frame.scanLines;
        var mcusPerLine = frame.mcusPerLine;
        var progressive = frame.progressive;
        var maxH = frame.maxH, maxV = frame.maxV;
        var startOffset = offset, bitsData = 0, bitsCount = 0;
        function readBit() {
            if (bitsCount > 0) {
                bitsCount--;
                return bitsData >> bitsCount & 1;
            }
            bitsData = data[offset++];
            if (bitsData == 255) {
                var nextByte = data[offset++];
                if (nextByte) {
                    throw new Error("unexpected marker: " + (bitsData << 8 | nextByte).toString(16));
                }
            }
            bitsCount = 7;
            return bitsData >>> 7;
        }
        function decodeHuffman(tree) {
            var node = tree, bit;
            while((bit = readBit()) !== null){
                node = node[bit];
                if (typeof node === "number") return node;
                if (typeof node !== "object") throw new Error("invalid huffman sequence");
            }
            return null;
        }
        function receive(length) {
            var n2 = 0;
            while(length > 0){
                var bit = readBit();
                if (bit === null) return;
                n2 = n2 << 1 | bit;
                length--;
            }
            return n2;
        }
        function receiveAndExtend(length) {
            var n2 = receive(length);
            if (n2 >= 1 << length - 1) return n2;
            return n2 + (-1 << length) + 1;
        }
        function decodeBaseline(component2, zz) {
            var t = decodeHuffman(component2.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t);
            zz[0] = component2.pred += diff;
            var k3 = 1;
            while(k3 < 64){
                var rs2 = decodeHuffman(component2.huffmanTableAC);
                var s3 = rs2 & 15, r = rs2 >> 4;
                if (s3 === 0) {
                    if (r < 15) break;
                    k3 += 16;
                    continue;
                }
                k3 += r;
                var z2 = dctZigZag[k3];
                zz[z2] = receiveAndExtend(s3);
                k3++;
            }
        }
        function decodeDCFirst(component2, zz) {
            var t = decodeHuffman(component2.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t) << successive;
            zz[0] = component2.pred += diff;
        }
        function decodeDCSuccessive(component2, zz) {
            zz[0] |= readBit() << successive;
        }
        var eobrun = 0;
        function decodeACFirst(component2, zz) {
            if (eobrun > 0) {
                eobrun--;
                return;
            }
            var k3 = spectralStart, e = spectralEnd;
            while(k3 <= e){
                var rs2 = decodeHuffman(component2.huffmanTableAC);
                var s3 = rs2 & 15, r = rs2 >> 4;
                if (s3 === 0) {
                    if (r < 15) {
                        eobrun = receive(r) + (1 << r) - 1;
                        break;
                    }
                    k3 += 16;
                    continue;
                }
                k3 += r;
                var z2 = dctZigZag[k3];
                zz[z2] = receiveAndExtend(s3) * (1 << successive);
                k3++;
            }
        }
        var successiveACState = 0, successiveACNextValue;
        function decodeACSuccessive(component2, zz) {
            var k3 = spectralStart, e = spectralEnd, r = 0;
            while(k3 <= e){
                var z2 = dctZigZag[k3];
                var direction = zz[z2] < 0 ? -1 : 1;
                switch(successiveACState){
                    case 0:
                        var rs2 = decodeHuffman(component2.huffmanTableAC);
                        var s3 = rs2 & 15, r = rs2 >> 4;
                        if (s3 === 0) {
                            if (r < 15) {
                                eobrun = receive(r) + (1 << r);
                                successiveACState = 4;
                            } else {
                                r = 16;
                                successiveACState = 1;
                            }
                        } else {
                            if (s3 !== 1) throw new Error("invalid ACn encoding");
                            successiveACNextValue = receiveAndExtend(s3);
                            successiveACState = r ? 2 : 3;
                        }
                        continue;
                    case 1:
                    case 2:
                        if (zz[z2]) zz[z2] += (readBit() << successive) * direction;
                        else {
                            r--;
                            if (r === 0) successiveACState = successiveACState == 2 ? 3 : 0;
                        }
                        break;
                    case 3:
                        if (zz[z2]) zz[z2] += (readBit() << successive) * direction;
                        else {
                            zz[z2] = successiveACNextValue << successive;
                            successiveACState = 0;
                        }
                        break;
                    case 4:
                        if (zz[z2]) zz[z2] += (readBit() << successive) * direction;
                        break;
                }
                k3++;
            }
            if (successiveACState === 4) {
                eobrun--;
                if (eobrun === 0) successiveACState = 0;
            }
        }
        function decodeMcu(component2, decode5, mcu2, row, col) {
            var mcuRow = mcu2 / mcusPerLine | 0;
            var mcuCol = mcu2 % mcusPerLine;
            var blockRow = mcuRow * component2.v + row;
            var blockCol = mcuCol * component2.h + col;
            if (component2.blocks[blockRow] === void 0 && opts.tolerantDecoding) return;
            decode5(component2, component2.blocks[blockRow][blockCol]);
        }
        function decodeBlock(component2, decode5, mcu2) {
            var blockRow = mcu2 / component2.blocksPerLine | 0;
            var blockCol = mcu2 % component2.blocksPerLine;
            if (component2.blocks[blockRow] === void 0 && opts.tolerantDecoding) return;
            decode5(component2, component2.blocks[blockRow][blockCol]);
        }
        var componentsLength = components.length;
        var component, i, j2, k2, n;
        var decodeFn;
        if (progressive) {
            if (spectralStart === 0) decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
            else decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
        } else {
            decodeFn = decodeBaseline;
        }
        var mcu = 0, marker17;
        var mcuExpected;
        if (componentsLength == 1) {
            mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
        } else {
            mcuExpected = mcusPerLine * frame.mcusPerColumn;
        }
        if (!resetInterval) resetInterval = mcuExpected;
        var h, v2;
        while(mcu < mcuExpected){
            for(i = 0; i < componentsLength; i++)components[i].pred = 0;
            eobrun = 0;
            if (componentsLength == 1) {
                component = components[0];
                for(n = 0; n < resetInterval; n++){
                    decodeBlock(component, decodeFn, mcu);
                    mcu++;
                }
            } else {
                for(n = 0; n < resetInterval; n++){
                    for(i = 0; i < componentsLength; i++){
                        component = components[i];
                        h = component.h;
                        v2 = component.v;
                        for(j2 = 0; j2 < v2; j2++){
                            for(k2 = 0; k2 < h; k2++){
                                decodeMcu(component, decodeFn, mcu, j2, k2);
                            }
                        }
                    }
                    mcu++;
                    if (mcu === mcuExpected) break;
                }
            }
            if (mcu === mcuExpected) {
                do {
                    if (data[offset] === 255) {
                        if (data[offset + 1] !== 0) {
                            break;
                        }
                    }
                    offset += 1;
                }while (offset < data.length - 2)
            }
            bitsCount = 0;
            marker17 = data[offset] << 8 | data[offset + 1];
            if (marker17 < 65280) {
                throw new Error("marker was not found");
            }
            if (marker17 >= 65488 && marker17 <= 65495) {
                offset += 2;
            } else break;
        }
        return offset - startOffset;
    }
    function buildComponentData(frame, component) {
        var lines2 = [];
        var blocksPerLine = component.blocksPerLine;
        var blocksPerColumn = component.blocksPerColumn;
        var samplesPerLine = blocksPerLine << 3;
        var R2 = new Int32Array(64), r = new Uint8Array(64);
        function quantizeAndInverse(zz, dataOut, dataIn) {
            var qt2 = component.quantizationTable;
            var v0, v1, v2, v3, v4, v5, v6, v7, t;
            var p2 = dataIn;
            var i2;
            for(i2 = 0; i2 < 64; i2++)p2[i2] = zz[i2] * qt2[i2];
            for(i2 = 0; i2 < 8; ++i2){
                var row = 8 * i2;
                if (p2[1 + row] == 0 && p2[2 + row] == 0 && p2[3 + row] == 0 && p2[4 + row] == 0 && p2[5 + row] == 0 && p2[6 + row] == 0 && p2[7 + row] == 0) {
                    t = dctSqrt2 * p2[0 + row] + 512 >> 10;
                    p2[0 + row] = t;
                    p2[1 + row] = t;
                    p2[2 + row] = t;
                    p2[3 + row] = t;
                    p2[4 + row] = t;
                    p2[5 + row] = t;
                    p2[6 + row] = t;
                    p2[7 + row] = t;
                    continue;
                }
                v0 = dctSqrt2 * p2[0 + row] + 128 >> 8;
                v1 = dctSqrt2 * p2[4 + row] + 128 >> 8;
                v2 = p2[2 + row];
                v3 = p2[6 + row];
                v4 = dctSqrt1d2 * (p2[1 + row] - p2[7 + row]) + 128 >> 8;
                v7 = dctSqrt1d2 * (p2[1 + row] + p2[7 + row]) + 128 >> 8;
                v5 = p2[3 + row] << 4;
                v6 = p2[5 + row] << 4;
                t = v0 - v1 + 1 >> 1;
                v0 = v0 + v1 + 1 >> 1;
                v1 = t;
                t = v2 * dctSin6 + v3 * dctCos6 + 128 >> 8;
                v2 = v2 * dctCos6 - v3 * dctSin6 + 128 >> 8;
                v3 = t;
                t = v4 - v6 + 1 >> 1;
                v4 = v4 + v6 + 1 >> 1;
                v6 = t;
                t = v7 + v5 + 1 >> 1;
                v5 = v7 - v5 + 1 >> 1;
                v7 = t;
                t = v0 - v3 + 1 >> 1;
                v0 = v0 + v3 + 1 >> 1;
                v3 = t;
                t = v1 - v2 + 1 >> 1;
                v1 = v1 + v2 + 1 >> 1;
                v2 = t;
                t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
                v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
                v7 = t;
                t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
                v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
                v6 = t;
                p2[0 + row] = v0 + v7;
                p2[7 + row] = v0 - v7;
                p2[1 + row] = v1 + v6;
                p2[6 + row] = v1 - v6;
                p2[2 + row] = v2 + v5;
                p2[5 + row] = v2 - v5;
                p2[3 + row] = v3 + v4;
                p2[4 + row] = v3 - v4;
            }
            for(i2 = 0; i2 < 8; ++i2){
                var col = i2;
                if (p2[1 * 8 + col] == 0 && p2[2 * 8 + col] == 0 && p2[3 * 8 + col] == 0 && p2[4 * 8 + col] == 0 && p2[5 * 8 + col] == 0 && p2[6 * 8 + col] == 0 && p2[7 * 8 + col] == 0) {
                    t = dctSqrt2 * dataIn[i2 + 0] + 8192 >> 14;
                    p2[0 * 8 + col] = t;
                    p2[1 * 8 + col] = t;
                    p2[2 * 8 + col] = t;
                    p2[3 * 8 + col] = t;
                    p2[4 * 8 + col] = t;
                    p2[5 * 8 + col] = t;
                    p2[6 * 8 + col] = t;
                    p2[7 * 8 + col] = t;
                    continue;
                }
                v0 = dctSqrt2 * p2[0 * 8 + col] + 2048 >> 12;
                v1 = dctSqrt2 * p2[4 * 8 + col] + 2048 >> 12;
                v2 = p2[2 * 8 + col];
                v3 = p2[6 * 8 + col];
                v4 = dctSqrt1d2 * (p2[1 * 8 + col] - p2[7 * 8 + col]) + 2048 >> 12;
                v7 = dctSqrt1d2 * (p2[1 * 8 + col] + p2[7 * 8 + col]) + 2048 >> 12;
                v5 = p2[3 * 8 + col];
                v6 = p2[5 * 8 + col];
                t = v0 - v1 + 1 >> 1;
                v0 = v0 + v1 + 1 >> 1;
                v1 = t;
                t = v2 * dctSin6 + v3 * dctCos6 + 2048 >> 12;
                v2 = v2 * dctCos6 - v3 * dctSin6 + 2048 >> 12;
                v3 = t;
                t = v4 - v6 + 1 >> 1;
                v4 = v4 + v6 + 1 >> 1;
                v6 = t;
                t = v7 + v5 + 1 >> 1;
                v5 = v7 - v5 + 1 >> 1;
                v7 = t;
                t = v0 - v3 + 1 >> 1;
                v0 = v0 + v3 + 1 >> 1;
                v3 = t;
                t = v1 - v2 + 1 >> 1;
                v1 = v1 + v2 + 1 >> 1;
                v2 = t;
                t = v4 * dctSin3 + v7 * dctCos3 + 2048 >> 12;
                v4 = v4 * dctCos3 - v7 * dctSin3 + 2048 >> 12;
                v7 = t;
                t = v5 * dctSin1 + v6 * dctCos1 + 2048 >> 12;
                v5 = v5 * dctCos1 - v6 * dctSin1 + 2048 >> 12;
                v6 = t;
                p2[0 * 8 + col] = v0 + v7;
                p2[7 * 8 + col] = v0 - v7;
                p2[1 * 8 + col] = v1 + v6;
                p2[6 * 8 + col] = v1 - v6;
                p2[2 * 8 + col] = v2 + v5;
                p2[5 * 8 + col] = v2 - v5;
                p2[3 * 8 + col] = v3 + v4;
                p2[4 * 8 + col] = v3 - v4;
            }
            for(i2 = 0; i2 < 64; ++i2){
                var sample2 = 128 + (p2[i2] + 8 >> 4);
                dataOut[i2] = sample2 < 0 ? 0 : sample2 > 255 ? 255 : sample2;
            }
        }
        requestMemoryAllocation(samplesPerLine * blocksPerColumn * 8);
        var i, j2;
        for(var blockRow = 0; blockRow < blocksPerColumn; blockRow++){
            var scanLine = blockRow << 3;
            for(i = 0; i < 8; i++)lines2.push(new Uint8Array(samplesPerLine));
            for(var blockCol = 0; blockCol < blocksPerLine; blockCol++){
                quantizeAndInverse(component.blocks[blockRow][blockCol], r, R2);
                var offset = 0, sample = blockCol << 3;
                for(j2 = 0; j2 < 8; j2++){
                    var line = lines2[scanLine + j2];
                    for(i = 0; i < 8; i++)line[sample + i] = r[offset++];
                }
            }
        }
        return lines2;
    }
    function clampTo8bit(a) {
        return a < 0 ? 0 : a > 255 ? 255 : a;
    }
    constructor.prototype = {
        load: function load2(path64) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", path64, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = (function() {
                var data = new Uint8Array(xhr.response || xhr.mozResponseArrayBuffer);
                this.parse(data);
                if (this.onload) this.onload();
            }).bind(this);
            xhr.send(null);
        },
        parse: function parse11(data) {
            var maxResolutionInPixels = this.opts.maxResolutionInMP * 1e3 * 1e3;
            var offset = 0, length = data.length;
            function readUint16() {
                var value = data[offset] << 8 | data[offset + 1];
                offset += 2;
                return value;
            }
            function readDataBlock() {
                var length2 = readUint16();
                var array3 = data.subarray(offset, offset + length2 - 2);
                offset += array3.length;
                return array3;
            }
            function prepareComponents(frame2) {
                var maxH2 = 1, maxV2 = 1;
                var component2, componentId2;
                for(componentId2 in frame2.components){
                    if (frame2.components.hasOwnProperty(componentId2)) {
                        component2 = frame2.components[componentId2];
                        if (maxH2 < component2.h) maxH2 = component2.h;
                        if (maxV2 < component2.v) maxV2 = component2.v;
                    }
                }
                var mcusPerLine = Math.ceil(frame2.samplesPerLine / 8 / maxH2);
                var mcusPerColumn = Math.ceil(frame2.scanLines / 8 / maxV2);
                for(componentId2 in frame2.components){
                    if (frame2.components.hasOwnProperty(componentId2)) {
                        component2 = frame2.components[componentId2];
                        var blocksPerLine = Math.ceil(Math.ceil(frame2.samplesPerLine / 8) * component2.h / maxH2);
                        var blocksPerColumn = Math.ceil(Math.ceil(frame2.scanLines / 8) * component2.v / maxV2);
                        var blocksPerLineForMcu = mcusPerLine * component2.h;
                        var blocksPerColumnForMcu = mcusPerColumn * component2.v;
                        var blocksToAllocate = blocksPerColumnForMcu * blocksPerLineForMcu;
                        var blocks = [];
                        requestMemoryAllocation(blocksToAllocate * 256);
                        for(var i2 = 0; i2 < blocksPerColumnForMcu; i2++){
                            var row = [];
                            for(var j3 = 0; j3 < blocksPerLineForMcu; j3++)row.push(new Int32Array(64));
                            blocks.push(row);
                        }
                        component2.blocksPerLine = blocksPerLine;
                        component2.blocksPerColumn = blocksPerColumn;
                        component2.blocks = blocks;
                    }
                }
                frame2.maxH = maxH2;
                frame2.maxV = maxV2;
                frame2.mcusPerLine = mcusPerLine;
                frame2.mcusPerColumn = mcusPerColumn;
            }
            var jfif = null;
            var adobe = null;
            var pixels = null;
            var frame, resetInterval;
            var quantizationTables = [], frames = [];
            var huffmanTablesAC = [], huffmanTablesDC = [];
            var fileMarker = readUint16();
            var malformedDataOffset = -1;
            this.comments = [];
            if (fileMarker != 65496) {
                throw new Error("SOI not found");
            }
            fileMarker = readUint16();
            while(fileMarker != 65497){
                var i, j2, l;
                switch(fileMarker){
                    case 65280:
                        break;
                    case 65504:
                    case 65505:
                    case 65506:
                    case 65507:
                    case 65508:
                    case 65509:
                    case 65510:
                    case 65511:
                    case 65512:
                    case 65513:
                    case 65514:
                    case 65515:
                    case 65516:
                    case 65517:
                    case 65518:
                    case 65519:
                    case 65534:
                        var appData = readDataBlock();
                        if (fileMarker === 65534) {
                            var comment = String.fromCharCode.apply(null, appData);
                            this.comments.push(comment);
                        }
                        if (fileMarker === 65504) {
                            if (appData[0] === 74 && appData[1] === 70 && appData[2] === 73 && appData[3] === 70 && appData[4] === 0) {
                                jfif = {
                                    version: {
                                        major: appData[5],
                                        minor: appData[6]
                                    },
                                    densityUnits: appData[7],
                                    xDensity: appData[8] << 8 | appData[9],
                                    yDensity: appData[10] << 8 | appData[11],
                                    thumbWidth: appData[12],
                                    thumbHeight: appData[13],
                                    thumbData: appData.subarray(14, 14 + 3 * appData[12] * appData[13])
                                };
                            }
                        }
                        if (fileMarker === 65505) {
                            if (appData[0] === 69 && appData[1] === 120 && appData[2] === 105 && appData[3] === 102 && appData[4] === 0) {
                                this.exifBuffer = appData.subarray(5, appData.length);
                            }
                        }
                        if (fileMarker === 65518) {
                            if (appData[0] === 65 && appData[1] === 100 && appData[2] === 111 && appData[3] === 98 && appData[4] === 101 && appData[5] === 0) {
                                adobe = {
                                    version: appData[6],
                                    flags0: appData[7] << 8 | appData[8],
                                    flags1: appData[9] << 8 | appData[10],
                                    transformCode: appData[11]
                                };
                            }
                        }
                        break;
                    case 65499:
                        var quantizationTablesLength = readUint16();
                        var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                        while(offset < quantizationTablesEnd){
                            var quantizationTableSpec = data[offset++];
                            requestMemoryAllocation(64 * 4);
                            var tableData = new Int32Array(64);
                            if (quantizationTableSpec >> 4 === 0) {
                                for(j2 = 0; j2 < 64; j2++){
                                    var z2 = dctZigZag[j2];
                                    tableData[z2] = data[offset++];
                                }
                            } else if (quantizationTableSpec >> 4 === 1) {
                                for(j2 = 0; j2 < 64; j2++){
                                    var z2 = dctZigZag[j2];
                                    tableData[z2] = readUint16();
                                }
                            } else throw new Error("DQT: invalid table spec");
                            quantizationTables[quantizationTableSpec & 15] = tableData;
                        }
                        break;
                    case 65472:
                    case 65473:
                    case 65474:
                        readUint16();
                        frame = {};
                        frame.extended = fileMarker === 65473;
                        frame.progressive = fileMarker === 65474;
                        frame.precision = data[offset++];
                        frame.scanLines = readUint16();
                        frame.samplesPerLine = readUint16();
                        frame.components = {};
                        frame.componentsOrder = [];
                        var pixelsInFrame = frame.scanLines * frame.samplesPerLine;
                        if (pixelsInFrame > maxResolutionInPixels) {
                            var exceededAmount = Math.ceil((pixelsInFrame - maxResolutionInPixels) / 1e6);
                            throw new Error(`maxResolutionInMP limit exceeded by ${exceededAmount}MP`);
                        }
                        var componentsCount = data[offset++], componentId;
                        var maxH = 0, maxV = 0;
                        for(i = 0; i < componentsCount; i++){
                            componentId = data[offset];
                            var h = data[offset + 1] >> 4;
                            var v2 = data[offset + 1] & 15;
                            var qId = data[offset + 2];
                            if (h <= 0 || v2 <= 0) {
                                throw new Error("Invalid sampling factor, expected values above 0");
                            }
                            frame.componentsOrder.push(componentId);
                            frame.components[componentId] = {
                                h,
                                v: v2,
                                quantizationIdx: qId
                            };
                            offset += 3;
                        }
                        prepareComponents(frame);
                        frames.push(frame);
                        break;
                    case 65476:
                        var huffmanLength = readUint16();
                        for(i = 2; i < huffmanLength;){
                            var huffmanTableSpec = data[offset++];
                            var codeLengths = new Uint8Array(16);
                            var codeLengthSum = 0;
                            for(j2 = 0; j2 < 16; j2++, offset++){
                                codeLengthSum += codeLengths[j2] = data[offset];
                            }
                            requestMemoryAllocation(16 + codeLengthSum);
                            var huffmanValues = new Uint8Array(codeLengthSum);
                            for(j2 = 0; j2 < codeLengthSum; j2++, offset++)huffmanValues[j2] = data[offset];
                            i += 17 + codeLengthSum;
                            (huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] = buildHuffmanTable(codeLengths, huffmanValues);
                        }
                        break;
                    case 65501:
                        readUint16();
                        resetInterval = readUint16();
                        break;
                    case 65500:
                        readUint16();
                        readUint16();
                        break;
                    case 65498:
                        var scanLength = readUint16();
                        var selectorsCount = data[offset++];
                        var components = [], component;
                        for(i = 0; i < selectorsCount; i++){
                            component = frame.components[data[offset++]];
                            var tableSpec = data[offset++];
                            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                            components.push(component);
                        }
                        var spectralStart = data[offset++];
                        var spectralEnd = data[offset++];
                        var successiveApproximation = data[offset++];
                        var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, this.opts);
                        offset += processed;
                        break;
                    case 65535:
                        if (data[offset] !== 255) {
                            offset--;
                        }
                        break;
                    default:
                        if (data[offset - 3] == 255 && data[offset - 2] >= 192 && data[offset - 2] <= 254) {
                            offset -= 3;
                            break;
                        } else if (fileMarker === 224 || fileMarker == 225) {
                            if (malformedDataOffset !== -1) {
                                throw new Error(`first unknown JPEG marker at offset ${malformedDataOffset.toString(16)}, second unknown JPEG marker ${fileMarker.toString(16)} at offset ${(offset - 1).toString(16)}`);
                            }
                            malformedDataOffset = offset - 1;
                            const nextOffset = readUint16();
                            if (data[offset + nextOffset - 2] === 255) {
                                offset += nextOffset - 2;
                                break;
                            }
                        }
                        throw new Error("unknown JPEG marker " + fileMarker.toString(16));
                }
                fileMarker = readUint16();
            }
            if (frames.length != 1) throw new Error("only single frame JPEGs supported");
            for(var i = 0; i < frames.length; i++){
                var cp2 = frames[i].components;
                for(var j2 in cp2){
                    cp2[j2].quantizationTable = quantizationTables[cp2[j2].quantizationIdx];
                    delete cp2[j2].quantizationIdx;
                }
            }
            this.width = frame.samplesPerLine;
            this.height = frame.scanLines;
            this.jfif = jfif;
            this.adobe = adobe;
            this.components = [];
            for(var i = 0; i < frame.componentsOrder.length; i++){
                var component = frame.components[frame.componentsOrder[i]];
                this.components.push({
                    lines: buildComponentData(frame, component),
                    scaleX: component.h / frame.maxH,
                    scaleY: component.v / frame.maxV
                });
            }
        },
        getData: function getData(width, height) {
            var scaleX = this.width / width, scaleY = this.height / height;
            var component1, component2, component3, component4;
            var component1Line, component2Line, component3Line, component4Line;
            var x, y;
            var offset = 0;
            var Y2, Cb, Cr2, K2, C2, M2, Ye2, R2, G2, B2;
            var colorTransform;
            var dataLength = width * height * this.components.length;
            requestMemoryAllocation(dataLength);
            var data = new Uint8Array(dataLength);
            switch(this.components.length){
                case 1:
                    component1 = this.components[0];
                    for(y = 0; y < height; y++){
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        for(x = 0; x < width; x++){
                            Y2 = component1Line[0 | x * component1.scaleX * scaleX];
                            data[offset++] = Y2;
                        }
                    }
                    break;
                case 2:
                    component1 = this.components[0];
                    component2 = this.components[1];
                    for(y = 0; y < height; y++){
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        for(x = 0; x < width; x++){
                            Y2 = component1Line[0 | x * component1.scaleX * scaleX];
                            data[offset++] = Y2;
                            Y2 = component2Line[0 | x * component2.scaleX * scaleX];
                            data[offset++] = Y2;
                        }
                    }
                    break;
                case 3:
                    colorTransform = true;
                    if (this.adobe && this.adobe.transformCode) colorTransform = true;
                    else if (typeof this.opts.colorTransform !== "undefined") colorTransform = !!this.opts.colorTransform;
                    component1 = this.components[0];
                    component2 = this.components[1];
                    component3 = this.components[2];
                    for(y = 0; y < height; y++){
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                        for(x = 0; x < width; x++){
                            if (!colorTransform) {
                                R2 = component1Line[0 | x * component1.scaleX * scaleX];
                                G2 = component2Line[0 | x * component2.scaleX * scaleX];
                                B2 = component3Line[0 | x * component3.scaleX * scaleX];
                            } else {
                                Y2 = component1Line[0 | x * component1.scaleX * scaleX];
                                Cb = component2Line[0 | x * component2.scaleX * scaleX];
                                Cr2 = component3Line[0 | x * component3.scaleX * scaleX];
                                R2 = clampTo8bit(Y2 + 1.402 * (Cr2 - 128));
                                G2 = clampTo8bit(Y2 - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr2 - 128));
                                B2 = clampTo8bit(Y2 + 1.772 * (Cb - 128));
                            }
                            data[offset++] = R2;
                            data[offset++] = G2;
                            data[offset++] = B2;
                        }
                    }
                    break;
                case 4:
                    if (!this.adobe) throw new Error("Unsupported color mode (4 components)");
                    colorTransform = false;
                    if (this.adobe && this.adobe.transformCode) colorTransform = true;
                    else if (typeof this.opts.colorTransform !== "undefined") colorTransform = !!this.opts.colorTransform;
                    component1 = this.components[0];
                    component2 = this.components[1];
                    component3 = this.components[2];
                    component4 = this.components[3];
                    for(y = 0; y < height; y++){
                        component1Line = component1.lines[0 | y * component1.scaleY * scaleY];
                        component2Line = component2.lines[0 | y * component2.scaleY * scaleY];
                        component3Line = component3.lines[0 | y * component3.scaleY * scaleY];
                        component4Line = component4.lines[0 | y * component4.scaleY * scaleY];
                        for(x = 0; x < width; x++){
                            if (!colorTransform) {
                                C2 = component1Line[0 | x * component1.scaleX * scaleX];
                                M2 = component2Line[0 | x * component2.scaleX * scaleX];
                                Ye2 = component3Line[0 | x * component3.scaleX * scaleX];
                                K2 = component4Line[0 | x * component4.scaleX * scaleX];
                            } else {
                                Y2 = component1Line[0 | x * component1.scaleX * scaleX];
                                Cb = component2Line[0 | x * component2.scaleX * scaleX];
                                Cr2 = component3Line[0 | x * component3.scaleX * scaleX];
                                K2 = component4Line[0 | x * component4.scaleX * scaleX];
                                C2 = 255 - clampTo8bit(Y2 + 1.402 * (Cr2 - 128));
                                M2 = 255 - clampTo8bit(Y2 - 0.3441363 * (Cb - 128) - 0.71413636 * (Cr2 - 128));
                                Ye2 = 255 - clampTo8bit(Y2 + 1.772 * (Cb - 128));
                            }
                            data[offset++] = 255 - C2;
                            data[offset++] = 255 - M2;
                            data[offset++] = 255 - Ye2;
                            data[offset++] = 255 - K2;
                        }
                    }
                    break;
                default:
                    throw new Error("Unsupported color mode");
            }
            return data;
        },
        copyToImageData: function copyToImageData(imageData, formatAsRGBA) {
            var width = imageData.width, height = imageData.height;
            var imageDataArray = imageData.data;
            var data = this.getData(width, height);
            var i = 0, j2 = 0, x, y;
            var Y2, K2, C2, M2, R2, G2, B2;
            switch(this.components.length){
                case 1:
                    for(y = 0; y < height; y++){
                        for(x = 0; x < width; x++){
                            Y2 = data[i++];
                            imageDataArray[j2++] = Y2;
                            imageDataArray[j2++] = Y2;
                            imageDataArray[j2++] = Y2;
                            if (formatAsRGBA) {
                                imageDataArray[j2++] = 255;
                            }
                        }
                    }
                    break;
                case 3:
                    for(y = 0; y < height; y++){
                        for(x = 0; x < width; x++){
                            R2 = data[i++];
                            G2 = data[i++];
                            B2 = data[i++];
                            imageDataArray[j2++] = R2;
                            imageDataArray[j2++] = G2;
                            imageDataArray[j2++] = B2;
                            if (formatAsRGBA) {
                                imageDataArray[j2++] = 255;
                            }
                        }
                    }
                    break;
                case 4:
                    for(y = 0; y < height; y++){
                        for(x = 0; x < width; x++){
                            C2 = data[i++];
                            M2 = data[i++];
                            Y2 = data[i++];
                            K2 = data[i++];
                            R2 = 255 - clampTo8bit(C2 * (1 - K2 / 255) + K2);
                            G2 = 255 - clampTo8bit(M2 * (1 - K2 / 255) + K2);
                            B2 = 255 - clampTo8bit(Y2 * (1 - K2 / 255) + K2);
                            imageDataArray[j2++] = R2;
                            imageDataArray[j2++] = G2;
                            imageDataArray[j2++] = B2;
                            if (formatAsRGBA) {
                                imageDataArray[j2++] = 255;
                            }
                        }
                    }
                    break;
                default:
                    throw new Error("Unsupported color mode");
            }
        }
    };
    var totalBytesAllocated = 0;
    var maxMemoryUsageBytes = 0;
    function requestMemoryAllocation(increaseAmount = 0) {
        var totalMemoryImpactBytes = totalBytesAllocated + increaseAmount;
        if (totalMemoryImpactBytes > maxMemoryUsageBytes) {
            var exceededAmount = Math.ceil((totalMemoryImpactBytes - maxMemoryUsageBytes) / 1024 / 1024);
            throw new Error(`maxMemoryUsageInMB limit exceeded by at least ${exceededAmount}MB`);
        }
        totalBytesAllocated = totalMemoryImpactBytes;
    }
    constructor.resetMaxMemoryUsage = function(maxMemoryUsageBytes_) {
        totalBytesAllocated = 0;
        maxMemoryUsageBytes = maxMemoryUsageBytes_;
    };
    constructor.getBytesAllocated = function() {
        return totalBytesAllocated;
    };
    constructor.requestMemoryAllocation = requestMemoryAllocation;
    return constructor;
})();
if (typeof module2 !== "undefined") {
    module2.exports = decode4;
} else if (typeof window !== "undefined") {
    window["jpeg-js"] = window["jpeg-js"] || {};
    window["jpeg-js"].decode = decode4;
}
function decode4(jpegData, userOpts = {}) {
    var defaultOpts3 = {
        colorTransform: void 0,
        useTArray: false,
        formatAsRGBA: true,
        tolerantDecoding: true,
        maxResolutionInMP: 100,
        maxMemoryUsageInMB: 512
    };
    var opts = {
        ...defaultOpts3,
        ...userOpts
    };
    var arr = new Uint8Array(jpegData);
    var decoder2 = new JpegImage();
    decoder2.opts = opts;
    JpegImage.resetMaxMemoryUsage(opts.maxMemoryUsageInMB * 1024 * 1024);
    decoder2.parse(arr);
    var channels = opts.formatAsRGBA ? 4 : 3;
    var bytesNeeded = decoder2.width * decoder2.height * channels;
    try {
        JpegImage.requestMemoryAllocation(bytesNeeded);
        var image2 = {
            width: decoder2.width,
            height: decoder2.height,
            exifBuffer: decoder2.exifBuffer,
            data: opts.useTArray ? new Uint8Array(bytesNeeded) : Buffer.alloc(bytesNeeded)
        };
        if (decoder2.comments.length > 0) {
            image2["comments"] = decoder2.comments;
        }
    } catch (err) {
        if (err instanceof RangeError) {
            throw new Error("Could not allocate enough memory for the image. Required: " + bytesNeeded);
        }
        if (err instanceof ReferenceError) {
            if (err.message === "Buffer is not defined") {
                throw new Error("Buffer is not globally defined in this environment. Consider setting useTArray to true");
            }
        }
        throw err;
    }
    decoder2.copyToImageData(image2, opts.formatAsRGBA);
    return image2;
}

return module2.exports;
}
