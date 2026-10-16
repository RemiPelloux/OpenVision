var operations;
export { operations };
var __wakaru_init_resize2_initialized = false;
export function init_resize2() {
if (__wakaru_init_resize2_initialized) return;
__wakaru_init_resize2_initialized = true;
operations = {
    nearestNeighbor (src, dst) {
        const wSrc = src.width;
        const hSrc = src.height;
        const wDst = dst.width;
        const hDst = dst.height;
        const bufSrc = src.data;
        const bufDst = dst.data;
        for(let i = 0; i < hDst; i++){
            for(let j2 = 0; j2 < wDst; j2++){
                let posDst = (i * wDst + j2) * 4;
                const iSrc = Math.floor(i * hSrc / hDst);
                const jSrc = Math.floor(j2 * wSrc / wDst);
                let posSrc = (iSrc * wSrc + jSrc) * 4;
                bufDst[posDst++] = bufSrc[posSrc++];
                bufDst[posDst++] = bufSrc[posSrc++];
                bufDst[posDst++] = bufSrc[posSrc++];
                bufDst[posDst++] = bufSrc[posSrc++];
            }
        }
    },
    bilinearInterpolation (src, dst) {
        const wSrc = src.width;
        const hSrc = src.height;
        const wDst = dst.width;
        const hDst = dst.height;
        const bufSrc = src.data;
        const bufDst = dst.data;
        const interpolate = function(k2, kMin, vMin, kMax, vMax) {
            if (kMin === kMax) {
                return vMin;
            }
            return Math.round((k2 - kMin) * vMax + (kMax - k2) * vMin);
        };
        const assign = function(pos, offset, x, xMin, xMax, y, yMin, yMax) {
            let posMin = (yMin * wSrc + xMin) * 4 + offset;
            let posMax = (yMin * wSrc + xMax) * 4 + offset;
            const vMin = interpolate(x, xMin, bufSrc[posMin], xMax, bufSrc[posMax]);
            if (yMax === yMin) {
                bufDst[pos + offset] = vMin;
            } else {
                posMin = (yMax * wSrc + xMin) * 4 + offset;
                posMax = (yMax * wSrc + xMax) * 4 + offset;
                const vMax = interpolate(x, xMin, bufSrc[posMin], xMax, bufSrc[posMax]);
                bufDst[pos + offset] = interpolate(y, yMin, vMin, yMax, vMax);
            }
        };
        for(let i = 0; i < hDst; i++){
            for(let j2 = 0; j2 < wDst; j2++){
                const posDst = (i * wDst + j2) * 4;
                const x = j2 * wSrc / wDst;
                const xMin = Math.floor(x);
                const xMax = Math.min(Math.ceil(x), wSrc - 1);
                const y = i * hSrc / hDst;
                const yMin = Math.floor(y);
                const yMax = Math.min(Math.ceil(y), hSrc - 1);
                assign(posDst, 0, x, xMin, xMax, y, yMin, yMax);
                assign(posDst, 1, x, xMin, xMax, y, yMin, yMax);
                assign(posDst, 2, x, xMin, xMax, y, yMin, yMax);
                assign(posDst, 3, x, xMin, xMax, y, yMin, yMax);
            }
        }
    },
    _interpolate2D (src, dst, options2, interpolate) {
        const bufSrc = src.data;
        const bufDst = dst.data;
        const wSrc = src.width;
        const hSrc = src.height;
        const wDst = dst.width;
        const hDst = dst.height;
        const wM = Math.max(1, Math.floor(wSrc / wDst));
        const wDst2 = wDst * wM;
        const hM = Math.max(1, Math.floor(hSrc / hDst));
        const hDst2 = hDst * hM;
        const buf1 = Buffer.alloc(wDst2 * hSrc * 4);
        for(let i = 0; i < hSrc; i++){
            for(let j2 = 0; j2 < wDst2; j2++){
                const x = j2 * (wSrc - 1) / wDst2;
                const xPos = Math.floor(x);
                const t = x - xPos;
                const srcPos = (i * wSrc + xPos) * 4;
                const buf1Pos = (i * wDst2 + j2) * 4;
                for(let k2 = 0; k2 < 4; k2++){
                    const kPos = srcPos + k2;
                    const x0 = xPos > 0 ? bufSrc[kPos - 4] : 2 * bufSrc[kPos] - bufSrc[kPos + 4];
                    const x1 = bufSrc[kPos];
                    const x2 = bufSrc[kPos + 4];
                    const x3 = xPos < wSrc - 2 ? bufSrc[kPos + 8] : 2 * bufSrc[kPos + 4] - bufSrc[kPos];
                    buf1[buf1Pos + k2] = interpolate(x0, x1, x2, x3, t);
                }
            }
        }
        const buf2 = Buffer.alloc(wDst2 * hDst2 * 4);
        for(let i = 0; i < hDst2; i++){
            for(let j2 = 0; j2 < wDst2; j2++){
                const y = i * (hSrc - 1) / hDst2;
                const yPos = Math.floor(y);
                const t = y - yPos;
                const buf1Pos = (yPos * wDst2 + j2) * 4;
                const buf2Pos = (i * wDst2 + j2) * 4;
                for(let k2 = 0; k2 < 4; k2++){
                    const kPos = buf1Pos + k2;
                    const y0 = yPos > 0 ? buf1[kPos - wDst2 * 4] : 2 * buf1[kPos] - buf1[kPos + wDst2 * 4];
                    const y1 = buf1[kPos];
                    const y2 = buf1[kPos + wDst2 * 4];
                    const y3 = yPos < hSrc - 2 ? buf1[kPos + wDst2 * 8] : 2 * buf1[kPos + wDst2 * 4] - buf1[kPos];
                    buf2[buf2Pos + k2] = interpolate(y0, y1, y2, y3, t);
                }
            }
        }
        const m2 = wM * hM;
        if (m2 > 1) {
            for(let i = 0; i < hDst; i++){
                for(let j2 = 0; j2 < wDst; j2++){
                    let r = 0;
                    let g2 = 0;
                    let b2 = 0;
                    let a = 0;
                    let realColors = 0;
                    for(let y = 0; y < hM; y++){
                        const yPos = i * hM + y;
                        for(let x = 0; x < wM; x++){
                            const xPos = j2 * wM + x;
                            const xyPos = (yPos * wDst2 + xPos) * 4;
                            const pixelAlpha = buf2[xyPos + 3];
                            if (pixelAlpha) {
                                r += buf2[xyPos];
                                g2 += buf2[xyPos + 1];
                                b2 += buf2[xyPos + 2];
                                realColors++;
                            }
                            a += pixelAlpha;
                        }
                    }
                    const pos = (i * wDst + j2) * 4;
                    bufDst[pos] = realColors ? Math.round(r / realColors) : 0;
                    bufDst[pos + 1] = realColors ? Math.round(g2 / realColors) : 0;
                    bufDst[pos + 2] = realColors ? Math.round(b2 / realColors) : 0;
                    bufDst[pos + 3] = Math.round(a / m2);
                }
            }
        } else {
            dst.data = buf2;
        }
    },
    bicubicInterpolation (src, dst, options2) {
        const interpolateCubic = function(x0, x1, x2, x3, t) {
            const a0 = x3 - x2 - x0 + x1;
            const a1 = x0 - x1 - a0;
            const a2 = x2 - x0;
            const a3 = x1;
            return Math.max(0, Math.min(255, a0 * (t * t * t) + a1 * (t * t) + a2 * t + a3));
        };
        return this._interpolate2D(src, dst, options2, interpolateCubic);
    },
    hermiteInterpolation (src, dst, options2) {
        const interpolateHermite = function(x0, x1, x2, x3, t) {
            const c0 = x1;
            const c1 = 0.5 * (x2 - x0);
            const c2 = x0 - 2.5 * x1 + 2 * x2 - 0.5 * x3;
            const c3 = 0.5 * (x3 - x0) + 1.5 * (x1 - x2);
            return Math.max(0, Math.min(255, Math.round(((c3 * t + c2) * t + c1) * t + c0)));
        };
        return this._interpolate2D(src, dst, options2, interpolateHermite);
    },
    bezierInterpolation (src, dst, options2) {
        const interpolateBezier = function(x0, x1, x2, x3, t) {
            const cp1 = x1 + (x2 - x0) / 4;
            const cp2 = x2 - (x3 - x1) / 4;
            const nt2 = 1 - t;
            const c0 = x1 * nt2 * nt2 * nt2;
            const c1 = 3 * cp1 * nt2 * nt2 * t;
            const c2 = 3 * cp2 * nt2 * t * t;
            const c3 = x2 * t * t * t;
            return Math.max(0, Math.min(255, Math.round(c0 + c1 + c2 + c3)));
        };
        return this._interpolate2D(src, dst, options2, interpolateBezier);
    }
};

}
