import { $Kl, Mut, yAs } from "./design-css-inspect.js";
import { E } from "./tslib.es6.js";
var SRv;
export { SRv };
var __wakaru_i20_initialized = false;
export function i20() {
if (__wakaru_i20_initialized) return;
__wakaru_i20_initialized = true;
"use strict";
E(), Mut(), SRv = `
	const previewSlots = { queue: {}, draft: {} };
	const pageValues = new Map();
	const unstyled = new WeakSet();
	const CSS_PROPERTIES = ${JSON.stringify($Kl.map(({ name: t })=>t))};
	const CSS_TARGET_ATTRIBUTE = ${JSON.stringify(yAs)};
	const CSS_TEXT_TAGS = new Set(['P', 'SPAN', 'A', 'BUTTON', 'LABEL', 'LI', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'STRONG', 'EM', 'B', 'I', 'SMALL', 'BLOCKQUOTE', 'FIGCAPTION', 'TD', 'TH', 'SUMMARY', 'CODE', 'PRE']);
	// The logical properties that set the physical sides of the catalog's length
	// properties; a color or style never shows declared, so it needs none.
	const CSS_LOGICAL = {
		padding: ['padding-inline', 'padding-block'],
		margin: ['margin-inline', 'margin-block'],
		inset: ['inset-inline', 'inset-block'],
		'border-width': ['border-inline-width', 'border-block-width'],
		'border-radius': ['border-start-start-radius', 'border-start-end-radius', 'border-end-start-radius', 'border-end-end-radius'],
		width: ['inline-size'],
		height: ['block-size'],
	};
	const CSS_REPLACED_TAGS = new Set(['IMG', 'VIDEO', 'CANVAS', 'SVG', 'IFRAME', 'INPUT', 'SELECT', 'TEXTAREA', 'OBJECT', 'EMBED']);

	function trackedElementForUid(uid) {
		const entry = trackedSelectionEntries().find(entry => entry.uid === uid);
		return entry && entry.el.isConnected ? entry.el : null;
	}

	function cssRect(el) {
		const { top, left, width, height } = el.getBoundingClientRect();
		return { top, left, width, height };
	}

	// The host finds the pick over CDP by this attribute, since it can't see
	// this world's references. The host serializes reads per page, so one slot
	// is enough; it lets unmarkCss take the attribute off even once the pick is
	// untracked or detached.
	let cssMarked = null;
	function markCss(uid, token) {
		const el = trackedElementForUid(uid);
		if (!el) return false;
		el.setAttribute(CSS_TARGET_ATTRIBUTE, token);
		cssMarked = el;
		return true;
	}

	function unmarkCss(token) {
		if (cssMarked?.getAttribute(CSS_TARGET_ATTRIBUTE) !== token) return;
		cssMarked.removeAttribute(CSS_TARGET_ATTRIBUTE);
		cssMarked = null;
	}

	// \`blocks\` are the declaration blocks Chromium applies to the element,
	// lowest priority first. A shorthand is authored when any of its longhands
	// is, which is what setting it on a scratch declaration expands to, and the
	// browser's own rules count for the value but not as authored. The declared
	// value is the last block's, an important one winning. A block that sets
	// only some of a shorthand's longhands has no shorthand value, and one that
	// sets a logical counterpart can override it; either leaves the value taken
	// so far stale, so the computed value shows instead, unless that value is
	// important and the override isn't. An important override likewise keeps a
	// later plain shorthand from taking the value back.
	function cssDeclared(blocks) {
		const names = new Set();
		const declared = {};
		const important = new Set();
		const expand = properties => {
			const scratch = document.createElement('div').style;
			for (const name of properties) scratch.setProperty(name, 'initial');
			return Array.from(scratch);
		};
		const physical = new Map(CSS_PROPERTIES.map(property => [property, expand([property])]));
		const logical = new Map(CSS_PROPERTIES.map(property => [property, expand(CSS_LOGICAL[property] ?? [])]));
		const take = style => {
			const set = Array.from(style);
			for (const property of CSS_PROPERTIES) {
				const value = style.getPropertyValue(property);
				const isImportant = style.getPropertyPriority(property) === 'important';
				const overriding = set.filter(name => logical.get(property).includes(name) || (!value && physical.get(property).includes(name)));
				const overridingImportant = overriding.some(name => style.getPropertyPriority(name) === 'important');
				// The rule's own important shorthand beats a weaker override beside it.
				if (overriding.length > 0 && (overridingImportant || !isImportant)) {
					if (important.has(property) && !overridingImportant) continue;
					delete declared[property];
					if (overridingImportant) important.add(property);
					continue;
				}
				if (!value || (important.has(property) && !isImportant)) continue;
				declared[property] = value;
				if (isImportant) important.add(property);
			}
		};
		for (const { userAgent, declarations } of blocks) {
			const style = document.createElement('div').style;
			// Within a block an important declaration beats every plain one, a later shorthand too.
			for (const { name, value, important: isImportant } of declarations) {
				if (!isImportant) style.setProperty(name, value);
			}
			for (const { name, value, important: isImportant } of declarations) {
				if (isImportant) style.setProperty(name, value, 'important');
			}
			if (!userAgent) for (const name of style) names.add(name);
			take(style);
		}
		const authored = CSS_PROPERTIES.filter(property => [...physical.get(property), ...logical.get(property)].some(name => names.has(name)));
		return { authored, declared };
	}

	// The most of each kind sent to the host, only to bound the message; not a choice of tokens.
	const CSS_VARIABLE_LIMIT = 300;

	// Each variable resolved where the element sits, in the order the page declares them. The
	// browser decides its kind: a length is what a length-only property takes and a number-only one
	// doesn't, so a bare 0 isn't one, and a color is what color takes.
	function cssVariables(cs, names) {
		const colors = [];
		const lengths = [];
		for (const name of names) {
			const value = cs.getPropertyValue(name).trim();
			if (!value) continue;
			if (CSS.supports('outline-offset', value) && !CSS.supports('flex-grow', value)) {
				if (lengths.length < CSS_VARIABLE_LIMIT) lengths.push({ name, value });
			} else if (CSS.supports('color', value) && colors.length < CSS_VARIABLE_LIMIT) {
				colors.push({ name, value });
			}
		}
		return { colors, lengths };
	}

	// Computed values round to two decimals, and a length clamped from an infinite one (Tailwind's
	// rounded-full computes to about 3.35544e+07px) reads 9999px, which looks the same and scrubs.
	function cssRounded(value) {
		return value.replace(/(?<![\\w#.-])-?(\\d+\\.?\\d*|\\.\\d+)(e[+-]?\\d+)?([a-z%]*)/g, (token, digits, exponent, unit) => {
			const amount = parseFloat(token);
			if (unit && Math.abs(amount) >= 1e6) return (amount < 0 ? '-' : '') + '9999' + unit;
			return exponent || digits.includes('.') ? Math.round(amount * 100) / 100 + unit : token;
		});
	}

	// A computed value snaps to device pixels at page zoom, so a declared plain
	// length shows when the page has one; colors and var() stay computed.
	function readCss(uid, matched) {
		const el = trackedElementForUid(uid);
		if (!el) return null;
		const cs = getComputedStyle(el);
		const { authored, declared } = cssDeclared(matched.blocks);
		const values = {};
		for (const property of CSS_PROPERTIES) {
			const own = declared[property];
			values[property] = own && /^-?[\\d.]+[a-z%]*( -?[\\d.]+[a-z%]*)*$/.test(own) ? own : cssRounded(cs.getPropertyValue(property));
		}
		const tag = el.tagName.toUpperCase();
		const hasText = Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '');
		return {
			rendersText: !CSS_REPLACED_TAGS.has(tag) && (hasText || CSS_TEXT_TAGS.has(tag)),
			values,
			authored,
			variables: cssVariables(cs, matched.variableNames),
			rect: cssRect(el),
		};
	}

	// Resolves to the rect of the slot's first pick, so the card can follow it.
	function previewCss(slot, spec) {
		previewSlots[slot] = spec;
		renderPreview();
		const uid = Object.keys(spec)[0];
		const el = uid && trackedElementForUid(uid);
		return el ? cssRect(el) : null;
	}

	// A null value disables the property: it drops an inline declaration the
	// page wrote, and reverts one that comes from a stylesheet.
	function renderPreview() {
		const wanted = new Map();
		for (const spec of [previewSlots.queue, previewSlots.draft]) {
			for (const [uid, edits] of Object.entries(spec)) {
				const el = trackedElementForUid(uid);
				if (el) wanted.set(el, { ...wanted.get(el), ...edits });
			}
		}
		for (const [el, saved] of pageValues) {
			const edits = wanted.get(el) ?? {};
			for (const [property, value] of saved) {
				if (property in edits) continue;
				if (value === '') el.style.removeProperty(property);
				else el.style.setProperty(property, value);
				saved.delete(property);
			}
			if (saved.size > 0) continue;
			pageValues.delete(el);
			if (unstyled.has(el) && el.style.length === 0) el.removeAttribute('style');
		}
		for (const [el, edits] of wanted) {
			const saved = pageValues.get(el) ?? new Map();
			if (!pageValues.has(el) && !el.hasAttribute('style')) unstyled.add(el);
			pageValues.set(el, saved);
			for (const [property, value] of Object.entries(edits)) {
				if (!saved.has(property)) saved.set(property, el.style.getPropertyValue(property));
				if (value !== null) el.style.setProperty(property, value);
				else if (saved.get(property) !== '') el.style.removeProperty(property);
				else el.style.setProperty(property, 'revert');
			}
		}
	}
`;

}
