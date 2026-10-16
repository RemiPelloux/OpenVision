import { x } from "./tslib.es6.js";
var MWh, pNo, mNo, PWh, LWh, NWh, gNo;
export { LWh, MWh, NWh, PWh, gNo, mNo, pNo };
var __wakaru_osr_initialized = false;
export function osr() {
if (__wakaru_osr_initialized) return;
__wakaru_osr_initialized = true;
"use strict";
x(), MWh = "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src data: blob:; font-src data:; connect-src 'none'; object-src 'none'; worker-src 'none'; media-src 'none'; frame-src 'none'; form-action 'none'; base-uri 'none'", pNo = "visualization-height", mNo = "visualization-chart-tooltip", PWh = 2e4, LWh = `
html { color-scheme: light; }
html[data-theme="dark"] { color-scheme: dark; }
html, body {
	margin: 0;
	overflow: hidden;
	background: transparent;
	box-sizing: border-box;
}
body {
	padding: 12px 0;
	color: var(--foreground);
	font-family: var(--font-sans);
	font-size: var(--font-size-normal);
	font-weight: var(--font-weight-normal);
	line-height: var(--line-height-normal);
}
main { display: block; width: 100%; }
`.trim(), NWh = `(function () {
	const sendToHost = window.parent.postMessage.bind(window.parent);
	const postToHost = (message) => sendToHost(message, '*');
	const params = new URL(location.href).searchParams;
	const parentOrigin = params.get('parentOrigin');
	const frameInstanceId = params.get('frameInstanceId');
	let lastHeight = -1;
	let heightRaf = 0;

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

	const postHeight = () => {
		heightRaf = 0;
		const height = measureHeight();
		if (height === lastHeight) {
			return;
		}
		lastHeight = height;
		postToHost({
			type: '${pNo}',
			frameInstanceId: frameInstanceId,
			height: height
		});
	};

	const scheduleHeight = () => {
		if (heightRaf) {
			return;
		}
		heightRaf = requestAnimationFrame(postHeight);
	};

	window.addEventListener('load', scheduleHeight);
	window.addEventListener('resize', scheduleHeight, { passive: true });

	const resizeObserver = new ResizeObserver(scheduleHeight);
	const observedNodes = new WeakSet();
	const observeContent = () => {
		for (const node of [document.documentElement, document.body, document.querySelector('main')]) {
			if (node && !observedNodes.has(node)) {
				observedNodes.add(node);
				resizeObserver.observe(node);
			}
		}
	};
	observeContent();

	const mutationObserver = new MutationObserver(() => {
		observeContent();
		scheduleHeight();
	});
	mutationObserver.observe(document.documentElement, {
		childList: true,
		subtree: true,
		characterData: true,
		attributes: true
	});

	document.addEventListener('click', (event) => {
		const anchor = event.target instanceof Element
			? event.target.closest('a[href]')
			: null;
		if (anchor) event.preventDefault();
	}, true);

	scheduleHeight();
})();`, gNo = '<script data-runtime="d3"></script>';

}
