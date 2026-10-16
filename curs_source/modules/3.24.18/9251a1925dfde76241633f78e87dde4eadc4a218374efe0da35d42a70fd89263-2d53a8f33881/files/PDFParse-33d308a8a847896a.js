import { init_Exception } from "./Exception.js";
import { ImageResult, init_ImageResult } from "./ImageResult.js";
import { InfoResult, init_InfoResult } from "./InfoResult.js";
import { init_ParseParameters } from "./ParseParameters.js";
import { PathGeometry, init_PathGeometry } from "./PathGeometry.js";
import { ScreenshotResult, init_ScreenshotResult } from "./ScreenshotResult.js";
import { TableResult, init_TableResult } from "./TableResult.js";
import { TextResult, init_TextResult } from "./TextResult.js";
import { Line } from "./geometry/Line.js";
import { LineStore } from "./geometry/LineStore.js";
import { Point } from "./geometry/Point.js";
import { Rectangle } from "./geometry/Rectangle.js";
import { init_geometry } from "./geometry/index.js";
import { GlobalWorkerOptions, OPS, Util, VerbosityLevel, getDocument, getException, init_pdf, pdf_exports, setDefaultParseParameters, util_ImageKind } from "../../../../../../../../pdf_exports.js";
var PDFParse;
export { PDFParse };
var __wakaru_init_PDFParse_initialized = false;
export function init_PDFParse() {
if (__wakaru_init_PDFParse_initialized) return;
__wakaru_init_PDFParse_initialized = true;
init_pdf();
init_Exception();
init_geometry();
init_ImageResult();
init_InfoResult();
init_ParseParameters();
init_PathGeometry();
init_ScreenshotResult();
init_TableResult();
init_TextResult();
PDFParse = class {
    options;
    doc;
    progress = {
        loaded: -1,
        total: 0
    };
    constructor(options2){
        if (options2.verbosity === void 0) {
            options2.verbosity = VerbosityLevel.ERRORS;
        }
        if (typeof Buffer !== "undefined" && options2.data instanceof Buffer) {
            options2.data = new Uint8Array(options2.data);
        }
        this.options = options2;
    }
    async destroy() {
        if (this.doc) {
            await this.doc.destroy();
            this.doc = void 0;
        }
    }
    static get isNodeJS() {
        const isNodeJS2 = typeof process === "object" && `${process}` === "[object process]" && !process.versions.nw && !(process.versions.electron && typeof process.type !== "undefined" && process.type !== "browser");
        return isNodeJS2;
    }
    static setWorker(workerSrc) {
        if (typeof globalThis.pdfjs === "undefined") {
            globalThis.pdfjs = pdf_exports;
        }
        if (pdf_exports?.GlobalWorkerOptions === null) return "";
        if (workerSrc !== void 0) {
            GlobalWorkerOptions.workerSrc = workerSrc;
            return GlobalWorkerOptions.workerSrc;
        }
        return GlobalWorkerOptions.workerSrc;
    }
    async getInfo(params = {}) {
        const doc = await this.load();
        const result = new InfoResult(doc.numPages);
        const { info: info2, metadata } = await doc.getMetadata();
        result.info = info2;
        result.metadata = metadata;
        result.fingerprints = doc.fingerprints;
        result.outline = await doc.getOutline();
        result.permission = await doc.getPermissions();
        const pageLabels = await doc.getPageLabels();
        if (params.parsePageInfo) {
            for(let i = 1; i <= result.total; i++){
                if (this.shouldParse(i, result.total, params)) {
                    const page = await doc.getPage(i);
                    const pageLinkResult = await this.getPageLinks(page);
                    pageLinkResult.pageLabel = pageLabels?.[page.pageNumber];
                    result.pages.push(pageLinkResult);
                    page.cleanup();
                }
            }
        }
        return result;
    }
    async getPageLinks(page) {
        const viewport = page.getViewport({
            scale: 1
        });
        const result = {
            pageNumber: page.pageNumber,
            links: [],
            width: viewport.width,
            height: viewport.height
        };
        const annotations = await page.getAnnotations({
            intent: "display"
        }) || [];
        for (const i of annotations){
            if (i.subtype !== "Link") continue;
            const url2 = i.url ?? i.unsafeUrl;
            if (!url2) continue;
            const text4 = i.overlaidText || "";
            result.links.push({
                url: url2,
                text: text4
            });
        }
        return result;
    }
    async getText(params = {}) {
        const doc = await this.load();
        const result = new TextResult(doc.numPages);
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await doc.getPage(i);
                const text4 = await this.getPageText(page, params, result.total);
                result.pages.push({
                    text: text4,
                    num: i
                });
                page.cleanup();
            }
        }
        for (const page of result.pages){
            if (params.pageJoiner) {
                let pageNumber = params.pageJoiner.replace("page_number", `${page.num}`);
                pageNumber = pageNumber.replace("total_number", `${result.total}`);
                result.text += `${page.text}
${pageNumber}

`;
            } else {
                result.text += `${page.text}

`;
            }
        }
        return result;
    }
    async load() {
        try {
            if (this.doc === void 0) {
                const loadingTask = getDocument(this.options);
                loadingTask.onProgress = (progress)=>{
                    this.progress = progress;
                };
                this.doc = await loadingTask.promise;
            }
            return this.doc;
        } catch (error3) {
            throw getException(error3);
        }
    }
    shouldParse(currentPage, totalPage, params) {
        params.partial = params?.partial ?? [];
        params.first = params?.first ?? 0;
        params.last = params?.last ?? 0;
        if (params.partial.length > 0) {
            if (params.partial.includes(currentPage)) {
                return true;
            }
            return false;
        }
        if (params.first > 0 && params.last > 0) {
            if (currentPage >= params.first && currentPage <= params.last) {
                return true;
            }
            return false;
        }
        if (params.first > 0) {
            if (currentPage <= params.first) {
                return true;
            }
            return false;
        }
        if (params.last > 0) {
            if (currentPage > totalPage - params.last) {
                return true;
            }
            return false;
        }
        return true;
    }
    async getPageText(page, parseParams, total) {
        const viewport = page.getViewport({
            scale: 1
        });
        const params = setDefaultParseParameters(parseParams);
        const textContent = await page.getTextContent({
            includeMarkedContent: !!params.includeMarkedContent,
            disableNormalization: !!params.disableNormalization
        });
        let links = new Map();
        if (params.parseHyperlinks) {
            links = await this.getHyperlinks(page, viewport);
        }
        const strBuf = [];
        let lastX;
        let lastY;
        let lineHeight = 0;
        for (const item of textContent.items){
            if (!("str" in item)) continue;
            const tm = item.transform ?? item.transform;
            const [x, y] = viewport.convertToViewportPoint(tm[4], tm[5]);
            if (params.parseHyperlinks) {
                const posArr = links.get(item.str) || [];
                const hit = posArr.find((l)=>x >= l.rect.left && x <= l.rect.right && y >= l.rect.top && y <= l.rect.bottom);
                if (hit) {
                    item.str = `[${item.str}](${hit.url})`;
                }
            }
            if (params.lineEnforce) {
                if (lastY !== void 0 && Math.abs(lastY - y) > params.lineThreshold) {
                    const lastItem = strBuf.length ? strBuf[strBuf.length - 1] : void 0;
                    const isCurrentItemHasNewLine = item.str.startsWith("\n") || item.str.trim() === "" && item.hasEOL;
                    if (lastItem?.endsWith("\n") === false && !isCurrentItemHasNewLine) {
                        const ydiff = Math.abs(lastY - y);
                        if (ydiff - 1 > lineHeight) {
                            strBuf.push("\n");
                            lineHeight = 0;
                        }
                    }
                }
            }
            if (params.cellSeparator) {
                if (lastY !== void 0 && Math.abs(lastY - y) < params.lineThreshold) {
                    if (lastX !== void 0 && Math.abs(lastX - x) > params.cellThreshold) {
                        item.str = `${params.cellSeparator}${item.str}`;
                    }
                }
            }
            strBuf.push(item.str);
            lastX = x + item.width;
            lastY = y;
            lineHeight = Math.max(lineHeight, item.height);
            if (item.hasEOL) {
                strBuf.push("\n");
            }
            if (item.hasEOL || item.str.endsWith("\n")) {
                lineHeight = 0;
            }
        }
        if (params.itemJoiner) {
            return strBuf.join(params.itemJoiner);
        }
        return strBuf.join("");
    }
    async getHyperlinks(page, viewport) {
        const result = new Map();
        const annotations = await page.getAnnotations({
            intent: "display"
        }) || [];
        for (const i of annotations){
            if (i.subtype !== "Link") continue;
            const url2 = i.url ?? i.unsafeUrl;
            if (!url2) continue;
            const text4 = i.overlaidText;
            if (!text4) continue;
            const rectVp = viewport.convertToViewportRectangle(i.rect);
            const left = Math.min(rectVp[0], rectVp[2]) - 0.5;
            const top = Math.min(rectVp[1], rectVp[3]) - 0.5;
            const right = Math.max(rectVp[0], rectVp[2]) + 0.5;
            const bottom = Math.max(rectVp[1], rectVp[3]) + 0.5;
            const pos = {
                rect: {
                    left,
                    top,
                    right,
                    bottom
                },
                url: url2,
                text: text4,
                used: false
            };
            const el = result.get(text4);
            if (el) {
                el.push(pos);
            } else {
                result.set(text4, [
                    pos
                ]);
            }
        }
        return result;
    }
    async getImage(params = {}) {
        const doc = await this.load();
        const result = new ImageResult(doc.numPages);
        setDefaultParseParameters(params);
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await doc.getPage(i);
                const ops = await page.getOperatorList();
                const pageImages = {
                    pageNumber: i,
                    images: []
                };
                result.pages.push(pageImages);
                for(let j2 = 0; j2 < ops.fnArray.length; j2++){
                    if (ops.fnArray[j2] === OPS.paintInlineImageXObject || ops.fnArray[j2] === OPS.paintImageXObject) {
                        const name17 = ops.argsArray[j2][0];
                        const isCommon = page.commonObjs.has(name17);
                        const imgPromise = isCommon ? this.resolveEmbeddedImage(page.commonObjs, name17) : this.resolveEmbeddedImage(page.objs, name17);
                        const { width, height, kind, data } = await imgPromise;
                        if (params.imageThreshold) {
                            if (params.imageThreshold >= width || params.imageThreshold >= height) {
                                continue;
                            }
                        }
                        const canvasFactory = doc.canvasFactory;
                        const canvasAndContext = canvasFactory.create(width, height);
                        const context2 = canvasAndContext.context;
                        let imgData = null;
                        if (kind === util_ImageKind.RGBA_32BPP) {
                            imgData = context2.createImageData(width, height);
                            imgData.data.set(data);
                        } else {
                            imgData = context2.createImageData(width, height);
                            this.convertToRGBA({
                                src: data,
                                dest: new Uint32Array(imgData.data.buffer),
                                width,
                                height,
                                kind
                            });
                        }
                        context2.putImageData(imgData, 0, 0);
                        let buffer = new Uint8Array();
                        let dataUrl = "";
                        if (typeof canvasAndContext.canvas.toBuffer === "function") {
                            let nodeBuffer;
                            if (params.imageBuffer) {
                                nodeBuffer = canvasAndContext.canvas.toBuffer("image/png");
                                buffer = new Uint8Array(nodeBuffer);
                            }
                            if (params.imageDataUrl) {
                                if (nodeBuffer) {
                                    dataUrl = `data:image/png;base64,${nodeBuffer.toString("base64")}`;
                                } else {
                                    nodeBuffer = canvasAndContext.canvas.toBuffer("image/png");
                                    buffer = new Uint8Array(nodeBuffer);
                                    dataUrl = `data:image/png;base64,${nodeBuffer.toString("base64")}`;
                                }
                            }
                        } else {
                            if (params.imageBuffer) {
                                const imageData = canvasAndContext.context.getImageData(0, 0, canvasAndContext.canvas.width, canvasAndContext.canvas.height);
                                buffer = new Uint8Array(imageData.data);
                            }
                            if (params.imageDataUrl) {
                                dataUrl = canvasAndContext.canvas.toDataURL("image/png");
                            }
                        }
                        pageImages.images.push({
                            data: buffer,
                            dataUrl,
                            name: name17,
                            height,
                            width,
                            kind
                        });
                    }
                }
            }
        }
        return result;
    }
    convertToRGBA({ src, dest, width, height, kind }) {
        if (kind === util_ImageKind.RGB_24BPP) {
            for(let i = 0, j2 = 0; i < src.length; i += 3, j2++){
                const r = src[i];
                const g2 = src[i + 1];
                const b2 = src[i + 2];
                dest[j2] = 255 << 24 | b2 << 16 | g2 << 8 | r;
            }
        } else if (kind === util_ImageKind.GRAYSCALE_1BPP) {
            let pixelIndex = 0;
            for(let i = 0; i < src.length; i++){
                const byte = src[i];
                for(let bit = 7; bit >= 0; bit--){
                    if (pixelIndex >= width * height) break;
                    const isWhite = (byte >> bit & 1) === 1;
                    const gray = isWhite ? 255 : 0;
                    dest[pixelIndex++] = 255 << 24 | gray << 16 | gray << 8 | gray;
                }
            }
        } else if (kind === void 0 || kind === null) {
            const bytesPerPixel = src.length / (width * height);
            if (Math.abs(bytesPerPixel - 3) < 0.1) {
                for(let i = 0, j2 = 0; i < src.length; i += 3, j2++){
                    const r = src[i];
                    const g2 = src[i + 1];
                    const b2 = src[i + 2];
                    dest[j2] = 255 << 24 | b2 << 16 | g2 << 8 | r;
                }
            } else if (Math.abs(bytesPerPixel - 4) < 0.1) {
                for(let i = 0, j2 = 0; i < src.length; i += 4, j2++){
                    const r = src[i];
                    const g2 = src[i + 1];
                    const b2 = src[i + 2];
                    const a = src[i + 3];
                    dest[j2] = a << 24 | b2 << 16 | g2 << 8 | r;
                }
            } else if (Math.abs(bytesPerPixel - 1) < 0.1) {
                for(let i = 0; i < src.length; i++){
                    const gray = src[i];
                    dest[i] = 255 << 24 | gray << 16 | gray << 8 | gray;
                }
            } else {
                throw new Error(`convertToRGBA: Cannot infer image format. kind: ${kind}, bytesPerPixel: ${bytesPerPixel}, width: ${width}, height: ${height}, dataLength: ${src.length}`);
            }
        } else {
            throw new Error(`convertToRGBA: Unsupported image kind: ${kind}. Available kinds: GRAYSCALE_1BPP=${util_ImageKind.GRAYSCALE_1BPP}, RGB_24BPP=${util_ImageKind.RGB_24BPP}, RGBA_32BPP=${util_ImageKind.RGBA_32BPP}`);
        }
    }
    resolveEmbeddedImage(pdfObjects, name17) {
        return new Promise((resolve36, reject2)=>{
            pdfObjects.get(name17, (imgData)=>{
                if (imgData) {
                    let dataBuff;
                    if (imgData.data instanceof Uint8Array) {
                        dataBuff = imgData.data;
                    } else if (imgData.data instanceof Uint8ClampedArray) {
                        dataBuff = new Uint8Array(imgData.data);
                    } else if (imgData.data?.buffer) {
                        dataBuff = new Uint8Array(imgData.data.buffer);
                    } else if (imgData.bitmap) {
                        const canvasFactory = this.doc.canvasFactory;
                        const canvasAndContext = canvasFactory.create(imgData.bitmap.width, imgData.bitmap.height);
                        canvasAndContext.context.drawImage(imgData.bitmap, 0, 0);
                        const imageData = canvasAndContext.context.getImageData(0, 0, imgData.bitmap.width, imgData.bitmap.height);
                        dataBuff = new Uint8Array(imageData.data.buffer);
                    } else if (ArrayBuffer.isView(imgData.data)) {
                        dataBuff = new Uint8Array(imgData.data.buffer, imgData.data.byteOffset, imgData.data.byteLength);
                    }
                    if (!dataBuff) {
                        reject2(new Error(`Image object ${name17}: data field is empty or invalid. Available fields: ${Object.keys(imgData).join(", ")}`));
                        return;
                    }
                    if (dataBuff.length === 0) {
                        reject2(new Error(`Image object ${name17}: data buffer is empty (length: 0)`));
                        return;
                    }
                    resolve36({
                        width: imgData.width,
                        height: imgData.height,
                        kind: imgData.kind,
                        data: dataBuff
                    });
                } else {
                    reject2(new Error(`Image object ${name17} not found`));
                }
            });
        });
    }
    async getScreenshot(parseParams = {}) {
        const params = setDefaultParseParameters(parseParams);
        const doc = await this.load();
        const result = new ScreenshotResult(doc.numPages);
        if (this.doc === void 0) {
            throw new Error("PDF document not loaded");
        }
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await this.doc.getPage(i);
                let viewport = page.getViewport({
                    scale: params.scale
                });
                if (params.desiredWidth) {
                    viewport = page.getViewport({
                        scale: 1
                    });
                    const scale = params.desiredWidth / viewport.width;
                    viewport = page.getViewport({
                        scale
                    });
                }
                const canvasFactory = this.doc.canvasFactory;
                const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);
                const renderContext = {
                    canvasContext: canvasAndContext.context,
                    viewport,
                    canvas: canvasAndContext.canvas
                };
                const renderTask = page.render(renderContext);
                await renderTask.promise;
                let data = new Uint8Array();
                let dataUrl = "";
                if (typeof canvasAndContext.canvas.toBuffer === "function") {
                    let nodeBuffer;
                    if (params.imageBuffer) {
                        nodeBuffer = canvasAndContext.canvas.toBuffer("image/png");
                        data = new Uint8Array(nodeBuffer);
                    }
                    if (params.imageDataUrl) {
                        if (nodeBuffer) {
                            dataUrl = `data:image/png;base64,${nodeBuffer.toString("base64")}`;
                        } else {
                            nodeBuffer = canvasAndContext.canvas.toBuffer("image/png");
                            data = new Uint8Array(nodeBuffer);
                            dataUrl = `data:image/png;base64,${nodeBuffer.toString("base64")}`;
                        }
                    }
                } else {
                    if (params.imageBuffer) {
                        const imageData = canvasAndContext.context.getImageData(0, 0, canvasAndContext.canvas.width, canvasAndContext.canvas.height);
                        data = new Uint8Array(imageData.data);
                    }
                    if (params.imageDataUrl) {
                        dataUrl = canvasAndContext.canvas.toDataURL("image/png");
                    }
                }
                result.pages.push({
                    data,
                    dataUrl,
                    pageNumber: i,
                    width: viewport.width,
                    height: viewport.height,
                    scale: viewport.scale
                });
                page.cleanup();
            }
        }
        return result;
    }
    async getTable(params = {}) {
        const doc = await this.load();
        const result = new TableResult(doc.numPages);
        if (this.doc === void 0) {
            throw new Error("PDF document not loaded");
        }
        for(let i = 1; i <= result.total; i++){
            if (this.shouldParse(i, result.total, params)) {
                const page = await this.doc.getPage(i);
                const store = await this.getPageTables(page);
                store.normalize();
                const tableDataArr = store.getTableData();
                await this.fillPageTables(page, tableDataArr);
                const pageTableResult = {
                    num: i,
                    tables: []
                };
                for (const table of tableDataArr){
                    pageTableResult.tables.push(table.toArray());
                }
                result.pages.push(pageTableResult);
                page.cleanup();
            }
        }
        return result;
    }
    getPathGeometry(mm) {
        const width = mm[2] - mm[0];
        const height = mm[3] - mm[1];
        if (mm[0] === Infinity) {
            return PathGeometry.undefined;
        }
        if (width > 5 && height > 5) {
            return PathGeometry.rectangle;
        } else if (width > 5 && height === 0) {
            return PathGeometry.hline;
        } else if (width === 0 && height > 5) {
            return PathGeometry.vline;
        }
        return PathGeometry.undefined;
    }
    async getPageTables(page) {
        const lineStore = new LineStore();
        const viewport = page.getViewport({
            scale: 1
        });
        let transformMatrix = [
            1,
            0,
            0,
            1,
            0,
            0
        ];
        const transformStack = [];
        const opList = await page.getOperatorList();
        for(let i = 0; i < opList.fnArray.length; i++){
            const fn = opList.fnArray[i];
            const args = opList.argsArray[i];
            const op = args?.[0] ?? 0;
            const mm = args?.[2] ?? [
                Infinity,
                Infinity,
                -Infinity,
                -Infinity
            ];
            if (fn === OPS.constructPath) {
                if (op === OPS.fill) {}
                if (op !== OPS.stroke) {
                    continue;
                }
                const pg = this.getPathGeometry(mm);
                if (pg === PathGeometry.rectangle) {
                    const rect = new Rectangle(new Point(mm[0], mm[1]), mm[2] - mm[0], mm[3] - mm[1]);
                    rect.transform(transformMatrix);
                    rect.transform(viewport.transform);
                    lineStore.addRectangle(rect);
                } else if (pg === PathGeometry.hline || pg === PathGeometry.vline) {
                    const from2 = new Point(mm[0], mm[1]);
                    const to3 = new Point(mm[2], mm[3]);
                    const line = new Line(from2, to3);
                    line.transform(transformMatrix);
                    line.transform(viewport.transform);
                    lineStore.add(line);
                } else {}
            } else if (fn === OPS.setLineWidth) {} else if (fn === OPS.save) {
                transformStack.push(transformMatrix);
            } else if (fn === OPS.restore) {
                const restoredMatrix = transformStack.pop();
                if (restoredMatrix) {
                    transformMatrix = restoredMatrix;
                }
            } else if (fn === OPS.transform) {
                transformMatrix = Util.transform(transformMatrix, args);
            }
        }
        return lineStore;
    }
    async fillPageTables(page, pageTables) {
        const viewport = page.getViewport({
            scale: 1
        });
        const textContent = await page.getTextContent({
            includeMarkedContent: false,
            disableNormalization: false
        });
        for (const textItem of textContent.items){
            if (!("str" in textItem)) continue;
            const tx = Util.transform(Util.transform(viewport.transform, textItem.transform), [
                1,
                0,
                0,
                -1,
                0,
                0
            ]);
            for (const pageTable of pageTables){
                const cell = pageTable.findCell(tx[4], tx[5]);
                if (cell) {
                    cell.text.push(textItem.str);
                    if (textItem.hasEOL) {
                        cell.text.push("\n");
                    }
                    break;
                }
            }
        }
    }
};

}
