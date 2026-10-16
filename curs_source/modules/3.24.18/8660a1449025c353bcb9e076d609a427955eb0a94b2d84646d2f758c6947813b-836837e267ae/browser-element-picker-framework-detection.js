import { E } from "./tslib.es6.js";
var Wec, Gec, qec, zec, gRv, fRv, vRv, _Rv;
export { Gec, Wec, _Rv, fRv, gRv, qec, vRv, zec };
var __wakaru_bRv_initialized = false;
export function bRv() {
if (__wakaru_bRv_initialized) return;
__wakaru_bRv_initialized = true;
"use strict";
E(), Wec = "cursor-picker-component-query", Gec = "cursor-picker-component-result", qec = "__cursorPickerComponentProbe", zec = 5, gRv = JSON.stringify([
    "react",
    "vue",
    "svelte"
]), fRv = `
	const NON_COMPONENT_PREFIXES = ['_', '$', 'Primitive.', 'Slot.'];

	const FRAMEWORK_INTERNAL_NAMES = new Set([
		'Suspense', 'Fragment', 'StrictMode', 'Profiler', 'SuspenseList',
		'InnerLayoutRouter', 'RedirectErrorBoundary', 'RedirectBoundary',
		'HTTPAccessFallbackErrorBoundary', 'HTTPAccessFallbackBoundary',
		'LoadingBoundary', 'ErrorBoundary', 'InnerScrollAndFocusHandler',
		'ScrollAndFocusHandler', 'RenderFromTemplateContext', 'OuterLayoutRouter',
		'DevRootHTTPAccessFallbackBoundary', 'AppDevOverlayErrorBoundary',
		'AppDevOverlay', 'HotReload', 'Router', 'ErrorBoundaryHandler',
		'AppRouter', 'ServerRoot', 'SegmentStateProvider', 'RootErrorBoundary',
		'LoadableComponent', 'MotionDOMComponent', 'SlotClone',
	]);

	const MAX_COMPONENT_STACK_DEPTH = ${zec};

	function isUserComponentName(name) {
		if (!name || name.length <= 1) return false;
		if (name[0] !== name[0].toUpperCase()) return false;
		if (FRAMEWORK_INTERNAL_NAMES.has(name)) return false;
		if (name.endsWith('Provider') || name.endsWith('Context')) return false;
		for (let i = 0; i < NON_COMPONENT_PREFIXES.length; i++) {
			if (name.startsWith(NON_COMPONENT_PREFIXES[i])) return false;
		}
		return true;
	}

	function extractFiberComponentName(fiber) {
		const typeToCheck = fiber.elementType || fiber.type;
		if (!typeToCheck || typeof typeToCheck === 'string') return null;
		let name = null;
		if (typeof typeToCheck === 'function') {
			name = typeToCheck.displayName || typeToCheck.name || null;
		} else if (typeof typeToCheck === 'object' && typeToCheck.$$typeof) {
			if (typeToCheck.render) {
				name = typeToCheck.render.displayName || typeToCheck.render.name || null;
			} else if (typeToCheck.type) {
				const inner = typeToCheck.type;
				name = (typeof inner === 'function' ? (inner.displayName || inner.name) : null) || null;
			}
		}
		return name;
	}

	function getReactFiber(element) {
		if (!element || typeof element !== 'object') return null;
		try {
			const reactKey = Object.keys(element).find(k =>
				k.startsWith('__reactFiber$') || k.startsWith('__reactInternalInstance$')
			);
			if (!reactKey) return null;
			return element[reactKey] || null;
		} catch { return null; }
	}

	function getReactComponentStack(element) {
		const stack = [];
		try {
			let fiber = getReactFiber(element);
			if (!fiber) return stack;
			while (fiber && stack.length < MAX_COMPONENT_STACK_DEPTH) {
				const name = extractFiberComponentName(fiber);
				if (name && isUserComponentName(name)) {
					stack.push(name);
				}
				fiber = fiber.return;
			}
		} catch {}
		return stack;
	}

	function getVueComponentStack(element) {
		const stack = [];
		try {
			let current = element;
			while (current) {
				const component = Reflect.get(current, '__vueParentComponent');
				if (component && typeof component === 'object') {
					let comp = component;
					while (comp && stack.length < MAX_COMPONENT_STACK_DEPTH) {
						const type = comp.type;
						if (type && typeof type === 'object') {
							const name = type.__name || type.name || null;
							if (name && typeof name === 'string') {
								stack.push(name);
							}
						}
						comp = comp.parent;
					}
					break;
				}
				current = current.parentElement;
			}
		} catch {}
		return stack;
	}

	function getSvelteComponentStack(element) {
		const stack = [];
		try {
			let current = element;
			while (current) {
				const meta = Reflect.get(current, '__svelte_meta');
				if (meta && typeof meta === 'object') {
					let m = meta.parent;
					while (m && typeof m === 'object' && stack.length < MAX_COMPONENT_STACK_DEPTH) {
						if (m.componentTag && typeof m.componentTag === 'string') {
							stack.push(m.componentTag);
						}
						m = m.parent;
					}
					break;
				}
				current = current.parentElement;
			}
		} catch {}
		return stack;
	}

	function detectFrameworkInfo(element) {
		const reactStack = getReactComponentStack(element);
		if (reactStack.length > 0) return { framework: 'react', stack: reactStack };
		const vueStack = getVueComponentStack(element);
		if (vueStack.length > 0) return { framework: 'vue', stack: vueStack };
		const svelteStack = getSvelteComponentStack(element);
		if (svelteStack.length > 0) return { framework: 'svelte', stack: svelteStack };
		return null;
	}
`, vRv = `
(function() {
	'use strict';
	${fRv}

	const previous = window.${qec};
	if (previous && typeof previous.abort === 'function') previous.abort();
	const controller = new AbortController();
	Object.defineProperty(window, '${qec}', { value: controller, configurable: true });

	window.addEventListener('${Wec}', (event) => {
		event.stopImmediatePropagation();
		const element = event.composedPath()[0];
		const info = element instanceof Element ? detectFrameworkInfo(element) : null;
		window.dispatchEvent(new CustomEvent('${Gec}', {
			detail: JSON.stringify(info),
		}));
	}, { capture: true, signal: controller.signal });
})();
`, _Rv = `
	const COMPONENT_FRAMEWORKS = new Set(${gRv});
	let componentProbeReply = null;
	window.addEventListener('${Gec}', (event) => {
		componentProbeReply = event.detail;
	});

	function parseComponentProbeReply(reply) {
		if (typeof reply !== 'string') return null;
		let info;
		try { info = JSON.parse(reply); } catch { return null; }
		if (!info || typeof info !== 'object' || !COMPONENT_FRAMEWORKS.has(info.framework)) return null;
		if (!Array.isArray(info.stack)) return null;
		const stack = info.stack
			.filter(name => typeof name === 'string' && name.length > 0)
			.slice(0, ${zec});
		if (stack.length === 0) return null;
		return { framework: info.framework, name: stack[0], stack };
	}

	function queryComponentProbe(element) {
		componentProbeReply = null;
		element.dispatchEvent(new CustomEvent('${Wec}', { composed: true }));
		const reply = componentProbeReply;
		componentProbeReply = null;
		return parseComponentProbeReply(reply);
	}

	let _cachedFwInfoElement = null;
	let _cachedFwInfoResult = null;

	// Only answers with a name are cached: the probe may not be listening
	// yet, or the framework may not have hydrated the element.
	function detectFrameworkInfoCached(element) {
		if (element === _cachedFwInfoElement) {
			return _cachedFwInfoResult;
		}
		const result = queryComponentProbe(element);
		if (result) {
			_cachedFwInfoElement = element;
			_cachedFwInfoResult = result;
		}
		return result;
	}
`;

}
