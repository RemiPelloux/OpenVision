import { asr, tGh, vZ } from "./staticHtmlPngCapture.js";
import { x } from "./tslib.es6.js";
function fb_(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function fNo(e) {
    return typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 255;
}
function JWh(e) {
    return typeof e == "number" && Number.isSafeInteger(e);
}
function vb_({ width: e, height: t }) {
    for (const n of [
        2,
        1
    ]){
        const i = e * n, r = t * n;
        if (i <= vZ.maxPhysicalSide && r <= vZ.maxPhysicalSide && i * r <= vZ.maxPhysicalPixels) return n;
    }
}
function _b_(e) {
    if (!fb_(e) || typeof e.html != "string" || !JWh(e.width) || !JWh(e.height) || e.width < 1 || e.height < 1 || e.width > vZ.maxCssWidth || e.height > vZ.maxCssHeight || !Array.isArray(e.backgroundRgb) || e.backgroundRgb.length !== 3 || !fNo(e.backgroundRgb[0]) || !fNo(e.backgroundRgb[1]) || !fNo(e.backgroundRgb[2])) return {
        kind: "error",
        code: "invalid-input"
    };
    if (e.html.length > vZ.maxHtmlBytes || new TextEncoder().encode(e.html).byteLength > vZ.maxHtmlBytes) return {
        kind: "error",
        code: "too-large"
    };
    const t = e.width, n = e.height, i = vb_({
        width: t,
        height: n
    });
    return i === void 0 ? {
        kind: "error",
        code: "too-large"
    } : {
        kind: "valid",
        request: {
            html: e.html,
            width: t,
            height: n,
            backgroundRgb: [
                e.backgroundRgb[0],
                e.backgroundRgb[1],
                e.backgroundRgb[2]
            ]
        },
        scale: i
    };
}
function _No(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function bNo(e) {
    return typeof e == "string" && e.length > 0 && e.length <= 128;
}
function nGh(e) {
    const t = _b_(e);
    return t.kind === "valid" ? {
        kind: "snapshot",
        ...t.request
    } : void 0;
}
function iGh(e) {
    switch(e){
        case "too-large":
            return {
                kind: "error",
                code: "too-large"
            };
        case "unsupported-content":
            return {
                kind: "error",
                code: "unsupported-content"
            };
        case "prepare-failed":
            return {
                kind: "error",
                code: "prepare-failed"
            };
        default:
            return;
    }
}
function rGh(e) {
    if (!(!_No(e) || !bNo(e.frameInstanceId))) switch(e.type){
        case w9n:
            return {
                type: w9n,
                frameInstanceId: e.frameInstanceId
            };
        case C9n:
            {
                const t = nGh(e);
                return bNo(e.exportRequestId) && t !== void 0 ? {
                    type: C9n,
                    frameInstanceId: e.frameInstanceId,
                    exportRequestId: e.exportRequestId,
                    preparation: t
                } : void 0;
            }
        case T9n:
            {
                const t = iGh(e.reason);
                return bNo(e.exportRequestId) && t !== void 0 ? {
                    type: T9n,
                    frameInstanceId: e.frameInstanceId,
                    exportRequestId: e.exportRequestId,
                    preparation: t
                } : void 0;
            }
        default:
            return;
    }
}
var sGh, w9n, yNo, C9n, T9n, SNo, oGh;
export { C9n, JWh, SNo, T9n, _No, _b_, bNo, fNo, fb_, iGh, nGh, oGh, rGh, sGh, vb_, w9n, yNo };
var __wakaru_aGh_initialized = false;
export function aGh() {
if (__wakaru_aGh_initialized) return;
__wakaru_aGh_initialized = true;
"use strict";
x(), tGh(), sGh = `(function () {
	const sendToHost = window.parent.postMessage.bind(window.parent);
	const postToHost = (message) => sendToHost(message, '*');
	const params = new URL(location.href).searchParams;
	const parentOrigin = params.get('parentOrigin');
	const frameInstanceId = params.get('frameInstanceId');

	const measureHeight = () => {
		const body = document.body;
		const main = document.querySelector('main');
		if (!body && !main) {
			const docEl = document.documentElement;
			return Math.ceil(Math.max(docEl.scrollHeight, docEl.offsetHeight));
		}
		return Math.ceil(Math.max(
			(body && body.scrollHeight) || 0,
			(body && body.offsetHeight) || 0,
			(main && main.scrollHeight) || 0,
			(main && main.offsetHeight) || 0
		));
	};

	const measureVisualOverflow = (contentWidth, contentHeight) => {
		let left = 0;
		let top = 0;
		let right = contentWidth;
		let bottom = contentHeight;
		for (const node of document.querySelectorAll('svg *,canvas,img')) {
			const rect = node.getBoundingClientRect();
			if (rect.width === 0 && rect.height === 0) continue;
			const antialiasRadius =
				node instanceof SVGGraphicsElement ? 0.5 : 0;
			left = Math.min(
				left,
				Math.floor(rect.left - antialiasRadius)
			);
			top = Math.min(top, Math.floor(rect.top - antialiasRadius));
			right = Math.max(
				right,
				Math.ceil(rect.right + antialiasRadius)
			);
			bottom = Math.max(
				bottom,
				Math.ceil(rect.bottom + antialiasRadius)
			);
		}
		return {
			left: Math.max(0, -left),
			top: Math.max(0, -top),
			right: Math.max(0, right - contentWidth),
			bottom: Math.max(0, bottom - contentHeight)
		};
	};

	const reflectFormState = (source, clone) => {
		const forEachPair = (selector, reflect) => {
			const sourceNodes = source.querySelectorAll(selector);
			const cloneNodes = clone.querySelectorAll(selector);
			for (let index = 0; index < sourceNodes.length; index++) {
				reflect(sourceNodes[index], cloneNodes[index]);
			}
		};
		forEachPair('input', (sourceInput, cloneInput) => {
			cloneInput.setAttribute('value', sourceInput.value);
			cloneInput.toggleAttribute('checked', sourceInput.checked);
		});
		forEachPair('option', (sourceOption, cloneOption) => {
			cloneOption.toggleAttribute('selected', sourceOption.selected);
		});
		forEachPair('textarea', (sourceTextarea, cloneTextarea) => {
			cloneTextarea.textContent = sourceTextarea.value;
		});
		forEachPair('details', (sourceDetails, cloneDetails) => {
			cloneDetails.toggleAttribute('open', sourceDetails.open);
		});
	};

	const replaceCanvases = (source, clone) => {
		const sourceCanvases = source.querySelectorAll('canvas');
		const cloneCanvases = clone.querySelectorAll('canvas');
		let totalPixels = 0;
		let totalDataUrlBytes = 0;
		for (let index = 0; index < sourceCanvases.length; index++) {
			const sourceCanvas = sourceCanvases[index];
			const cloneCanvas = cloneCanvases[index];
			totalPixels += sourceCanvas.width * sourceCanvas.height;
			if (
				sourceCanvas.width > ${vZ.maxPhysicalSide} ||
				sourceCanvas.height > ${vZ.maxPhysicalSide} ||
				totalPixels > ${vZ.maxPhysicalPixels}
			) {
				throw new Error('too-large');
			}
			const dataUrl = sourceCanvas.toDataURL('image/png');
			if (!dataUrl.startsWith('data:image/png;base64,')) {
				throw new Error('unsupported-content');
			}
			totalDataUrlBytes += dataUrl.length;
			if (totalDataUrlBytes > ${vZ.maxHtmlBytes}) {
				throw new Error('too-large');
			}
			const image = document.createElement('img');
			for (const attribute of cloneCanvas.attributes) {
				image.setAttribute(attribute.name, attribute.value);
			}
			image.setAttribute('src', dataUrl);
			image.setAttribute('width', String(sourceCanvas.width));
			image.setAttribute('height', String(sourceCanvas.height));
			cloneCanvas.replaceWith(image);
		}
	};

	const resolveOpaqueBackground = () => {
		const probe = document.createElement('span');
		probe.style.backgroundColor = 'var(--background)';
		probe.hidden = true;
		document.body.appendChild(probe);
		const resolved = getComputedStyle(probe).backgroundColor;
		probe.remove();
		const pixel = document.createElement('canvas');
		pixel.width = 1;
		pixel.height = 1;
		const context = pixel.getContext('2d', { willReadFrequently: true });
		if (!context) {
			throw new Error('prepare-failed');
		}
		context.fillStyle = resolved;
		context.fillRect(0, 0, 1, 1);
		const color = context.getImageData(0, 0, 1, 1).data;
		return color[3] === 255
			? [color[0], color[1], color[2]]
			: document.documentElement.dataset.theme === 'dark'
				? [32, 32, 32]
				: [250, 250, 250];
	};

	const createExportSnapshot = async () => {
		await document.fonts.ready;
		const clone = document.documentElement.cloneNode(true);
		reflectFormState(document, clone);
		replaceCanvases(document, clone);
		for (const node of clone.querySelectorAll(
			'script, animate, animateMotion, animateTransform, set'
		)) {
			node.remove();
		}
		const head = clone.querySelector('head');
		if (!head) {
			throw new Error('prepare-failed');
		}
		const backgroundRgb = resolveOpaqueBackground();
		const background = 'rgb(' + backgroundRgb.join(' ') + ')';
		const body = document.body;
		const main = document.querySelector('main');
		const liveLayoutWidth = body
			? body.getBoundingClientRect().width
			: document.documentElement.getBoundingClientRect().width;
		const contentWidth = Math.ceil(Math.max(
			document.documentElement.clientWidth,
			(body && body.scrollWidth) || 0,
			(main && main.scrollWidth) || 0
		));
		const layoutWidth =
			Number.isFinite(liveLayoutWidth) && liveLayoutWidth > 0
				? liveLayoutWidth
				: contentWidth;
		const contentHeight = measureHeight();
		const visualOverflow = measureVisualOverflow(contentWidth, contentHeight);
		const width =
			contentWidth +
			visualOverflow.left +
			visualOverflow.right +
			${2 * asr};
		const height =
			contentHeight +
			visualOverflow.top +
			visualOverflow.bottom +
			${2 * asr};
		const exportStyle = document.createElement('style');
		exportStyle.textContent =
			'*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' +
			'html{box-sizing:border-box!important;width:' + width + 'px!important;height:' + height + 'px!important;padding:${asr}px!important;overflow:hidden!important;background:' + background + '!important}' +
			'body{box-sizing:border-box!important;position:relative!important;left:' + visualOverflow.left + 'px!important;top:' + visualOverflow.top + 'px!important;width:' + layoutWidth + 'px!important;overflow:visible!important;background:' + background + '!important}';
		head.appendChild(exportStyle);
		const html = '<!DOCTYPE html>\\n' + clone.outerHTML;
		if (
			!Number.isSafeInteger(width) ||
			!Number.isSafeInteger(height) ||
			width < 1 ||
			height < 1 ||
			width > ${vZ.maxCssWidth} ||
			height > ${vZ.maxCssHeight} ||
			html.length > ${vZ.maxHtmlBytes} ||
			new TextEncoder().encode(html).byteLength > ${vZ.maxHtmlBytes}
		) {
			throw new Error('too-large');
		}
		return { html, width, height, backgroundRgb };
	};

	const originMatchesParent = (origin) =>
		origin === parentOrigin ||
		(parentOrigin === 'file://' && origin === 'null');
	window.addEventListener('message', (event) => {
		if (
			event.source !== window.parent ||
			!originMatchesParent(event.origin) ||
			!event.data ||
			event.data.type !== 'visualization-export-request' ||
			event.data.frameInstanceId !== frameInstanceId ||
			typeof event.data.exportRequestId !== 'string'
		) {
			return;
		}
		const exportRequestId = event.data.exportRequestId;
		void createExportSnapshot().then(
			snapshot => postToHost({
				type: 'visualization-export-snapshot',
				frameInstanceId: frameInstanceId,
				exportRequestId: exportRequestId,
				html: snapshot.html,
				width: snapshot.width,
				height: snapshot.height,
				backgroundRgb: snapshot.backgroundRgb
			}),
			error => postToHost({
				type: 'visualization-export-error',
				frameInstanceId: frameInstanceId,
				exportRequestId: exportRequestId,
				reason: error instanceof Error &&
					(error.message === 'unsupported-content' ||
						error.message === 'too-large')
					? error.message
					: 'prepare-failed'
			})
		);
	});

	window.addEventListener('load', () => {
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				postToHost({
					type: 'visualization-ready',
					frameInstanceId: frameInstanceId
				});
			});
		});
	});
})();`, w9n = "visualization-ready", yNo = "visualization-export-request", C9n = "visualization-export-snapshot", T9n = "visualization-export-error", SNo = 3e3, oGh = {
    errorMessageType: T9n,
    guestBridgeScript: sGh,
    prepareTimeoutMs: SNo,
    parseGuestMessage: rGh,
    readyMessageType: w9n,
    requestMessageType: yNo,
    snapshotMessageType: C9n
};

}
