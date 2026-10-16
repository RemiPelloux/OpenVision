import { L4f } from "./BA.js";
import { Bks, M4f, cce } from "./staticHtmlPngCapture.js";
import { E } from "./tslib.es6.js";
var O4f, hNi, W4l, pNi, mNi, G4l, F4f;
export { F4f, G4l, O4f, W4l, hNi, mNi, pNi };
var __wakaru_B4f_initialized = false;
export function B4f() {
if (__wakaru_B4f_initialized) return;
__wakaru_B4f_initialized = true;
"use strict";
E(), M4f(), O4f = `(function () {
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
				sourceCanvas.width > ${cce.maxPhysicalSide} ||
				sourceCanvas.height > ${cce.maxPhysicalSide} ||
				totalPixels > ${cce.maxPhysicalPixels}
			) {
				throw new Error('too-large');
			}
			const dataUrl = sourceCanvas.toDataURL('image/png');
			if (!dataUrl.startsWith('data:image/png;base64,')) {
				throw new Error('unsupported-content');
			}
			totalDataUrlBytes += dataUrl.length;
			if (totalDataUrlBytes > ${cce.maxHtmlBytes}) {
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
			${2 * Bks};
		const height =
			contentHeight +
			visualOverflow.top +
			visualOverflow.bottom +
			${2 * Bks};
		const exportStyle = document.createElement('style');
		exportStyle.textContent =
			'*,*::before,*::after{animation:none!important;transition:none!important;caret-color:transparent!important}' +
			'html{box-sizing:border-box!important;width:' + width + 'px!important;height:' + height + 'px!important;padding:${Bks}px!important;overflow:hidden!important;background:' + background + '!important}' +
			'body{box-sizing:border-box!important;position:relative!important;left:' + visualOverflow.left + 'px!important;top:' + visualOverflow.top + 'px!important;width:' + layoutWidth + 'px!important;overflow:visible!important;background:' + background + '!important}';
		head.appendChild(exportStyle);
		const html = '<!DOCTYPE html>\\n' + clone.outerHTML;
		if (
			!Number.isSafeInteger(width) ||
			!Number.isSafeInteger(height) ||
			width < 1 ||
			height < 1 ||
			width > ${cce.maxCssWidth} ||
			height > ${cce.maxCssHeight} ||
			html.length > ${cce.maxHtmlBytes} ||
			new TextEncoder().encode(html).byteLength > ${cce.maxHtmlBytes}
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
})();`, hNi = "visualization-ready", W4l = "visualization-export-request", pNi = "visualization-export-snapshot", mNi = "visualization-export-error", G4l = 3e3, F4f = {
    errorMessageType: mNi,
    guestBridgeScript: O4f,
    prepareTimeoutMs: G4l,
    parseGuestMessage: L4f,
    readyMessageType: hNi,
    requestMessageType: W4l,
    snapshotMessageType: pNi
};

}
