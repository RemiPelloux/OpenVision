import { Plv } from "./Asv.js";
import { Di, _r } from "./Iwo.js";
import { vvv } from "./design-mode-add-to-chat-chord.js";
import { PDn, ece } from "./index_27.ts";
import { fvv } from "./ofv.js";
import { kIs } from "./text-edit-annotation.js";
import { E } from "./tslib.es6.js";
var wRv;
export { wRv };
var __wakaru_s20_initialized = false;
export function s20() {
if (__wakaru_s20_initialized) return;
__wakaru_s20_initialized = true;
"use strict";
E(), ece(), Di(), kIs(), vvv(), wRv = `
	// Replaced and embedded content: one keystroke in an edit would delete it,
	// and putting it back reloads or restarts it.
	const TEXT_EDIT_EMBEDDED_SELECTOR =
		'img,picture,svg,math,video,audio,iframe,frame,object,embed,canvas,input,textarea,select,meter,progress';
	const MAX_TEXT_EDIT_DESCENDANTS = 64;

	function isInlineLevel(el) {
		return el.tagName === 'BR' || getComputedStyle(el).display.startsWith('inline');
	}

	// Everything inside the element flows inline with nothing embedded, within
	// what one edit can rewrite.
	function flowsAsInlineText(el) {
		if ((el.textContent || '').length > ${PDn}) return false;
		const descendants = el.getElementsByTagName('*');
		if (descendants.length > MAX_TEXT_EDIT_DESCENDANTS) return false;
		for (const descendant of descendants) {
			if (descendant.matches(TEXT_EDIT_EMBEDDED_SELECTOR) || !isInlineLevel(descendant)) return false;
		}
		return true;
	}

	// Only text the edit can write back without dropping structure: the
	// element owns text directly and flows as inline text.
	function isEditableTextLayer(el) {
		if (![...el.childNodes].some(node => node.nodeType === Node.TEXT_NODE && node.data.trim().length > 0)) return false;
		return flowsAsInlineText(el);
	}

	// Climbs only through inline wrappers: the first block that fails is the
	// boundary, and an edit never takes in embedded content or a page's own
	// editor.
	function editableTextLayerAt(x, y) {
		let el = document.elementFromPoint(x, y);
		if (!el || isPickerOverlayNode(el)) return null;
		while (el instanceof HTMLElement && el !== document.body && el !== document.documentElement) {
			if (el.isContentEditable || el.matches(TEXT_EDIT_EMBEDDED_SELECTOR)) return null;
			if (isEditableTextLayer(el)) return el;
			if (!isInlineLevel(el)) return null;
			el = el.parentElement;
		}
		return null;
	}

	// The page's framework holds references to the original nodes, so an
	// edit undoes exactly its own typing, newest first. \`pageRecords\` are what
	// the page changed afterwards: text it wrote stands, and a node it wrote to
	// is still its node, so it goes back in place. Only nodes the page moved
	// itself stay where the page put them.
	function undoTextEditRecords(records, pageRecords) {
		const written = new Set();
		const moved = new Set();
		for (const record of pageRecords) {
			if (record.type === 'characterData') {
				written.add(record.target);
				continue;
			}
			record.addedNodes.forEach(node => moved.add(node));
			record.removedNodes.forEach(node => moved.add(node));
		}
		for (let i = records.length - 1; i >= 0; i--) {
			const record = records[i];
			if (record.type === 'characterData') {
				if (!written.has(record.target)) record.target.data = record.oldValue;
				continue;
			}
			const parent = record.target;
			for (const node of record.addedNodes) {
				if (!moved.has(node) && !written.has(node) && node.parentNode === parent) {
					parent.removeChild(node);
				}
			}
			const next = record.nextSibling && record.nextSibling.parentNode === parent ? record.nextSibling : null;
			for (const node of record.removedNodes) {
				if (!moved.has(node) && !node.parentNode) parent.insertBefore(node, next);
			}
		}
	}

	// A committed edit changes only the source ranges behind the characters
	// that differ from the value before, so a framework keeps its nodes and
	// inline children whose text did not change keep theirs. A removed <br>
	// is hidden rather than removed, since the page owns it. Both that and
	// the preserve-breaks style set for a written newline are inline CSS the
	// page did not write, so they stay until the page replaces the node.
	function writeTextEditValue(el, before, after) {
		let start = 0;
		while (start < before.length && start < after.length && before[start] === after[start]) start++;
		let tail = 0;
		while (
			tail < before.length - start &&
			tail < after.length - start &&
			before[before.length - 1 - tail] === after[after.length - 1 - tail]
		) tail++;
		const end = before.length - tail;
		const insert = after.slice(start, after.length - tail);
		// Text that collapses shows a written newline only once the element
		// preserves breaks, and then its source newlines would show too. Each
		// becomes a space, which keeps every offset.
		let breaksPrepared = false;
		const prepareBreaks = () => {
			if (breaksPrepared || whiteSpaceCollapseOf(el) !== 'collapse') return;
			breaksPrepared = true;
			const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
			for (let node = walker.nextNode(); node; node = walker.nextNode()) {
				if (whiteSpaceCollapseOf(node.parentElement || el) !== 'collapse') continue;
				const spaced = node.data.replace(/[\\n\\r]/g, ' ');
				if (spaced !== node.data) node.data = spaced;
			}
			el.style.setProperty('white-space-collapse', 'preserve-breaks');
		};
		if (insert.includes('\\n')) prepareBreaks();
		const { text, map } = textEditValue(el);
		const prev = start > 0 ? map[start - 1] : null;
		const next = start < map.length ? map[start] : null;
		const anchor = prev && prev.ranges ? { node: prev.ranges[prev.ranges.length - 1].node, offset: prev.ranges[prev.ranges.length - 1].end }
			: next && next.ranges ? { node: next.ranges[0].node, offset: next.ranges[0].start }
			: null;
		if (text !== before || (insert && !anchor)) {
			// Text typed with no text beside it, such as between two <br>s, has
			// no page node to go in: the whole value goes into one existing
			// text node, and inline formatting around the rest is lost.
			if (after.includes('\\n')) prepareBreaks();
			const texts = [];
			const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
			for (let node = walker.nextNode(); node; node = walker.nextNode()) texts.push(node);
			const target = texts.find(node => node.data.trim().length > 0) || texts[0];
			for (const node of texts) node.data = node === target ? after : '';
			for (const br of el.getElementsByTagName('br')) br.style.setProperty('display', 'none');
		} else {
			const splices = [];
			for (let i = start; i < end; i++) {
				const entry = map[i];
				if (entry.br) entry.br.style.setProperty('display', 'none');
				else for (const range of entry.ranges) splices.push({ ...range, text: '' });
			}
			if (insert) splices.push({ node: anchor.node, start: anchor.offset, end: anchor.offset, text: insert });
			// Right to left within a node, and a removal before an insertion at
			// the same offset, so each splice's offsets still hold.
			splices.sort((a, b) => b.start - a.start || (b.end - b.start) - (a.end - a.start));
			const data = new Map();
			for (const splice of splices) {
				const current = data.has(splice.node) ? data.get(splice.node) : splice.node.data;
				data.set(splice.node, current.slice(0, splice.start) + splice.text + current.slice(splice.end));
			}
			for (const [node, value] of data) {
				if (node.data !== value) node.data = value;
			}
		}
		// A block's last break never shows. When the value ends in a break the
		// page would drop that way, one more newline goes right after it, as
		// Chrome's placeholder <br> did while editing.
		if (!after.endsWith('\\n')) return;
		const shown = textEditValue(el);
		if (shown.text === after || !shown.dropped) return;
		const dropped = shown.dropped;
		let host = null;
		if (dropped.ranges) {
			const range = dropped.ranges[dropped.ranges.length - 1];
			host = { node: range.node, offset: range.end };
		} else {
			const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
			for (let node = walker.nextNode(); node && !host; node = walker.nextNode()) {
				if (dropped.br.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_FOLLOWING) host = { node, offset: 0 };
			}
		}
		if (!host) return;
		prepareBreaks();
		host.node.data = host.node.data.slice(0, host.offset) + '\\n' + host.node.data.slice(host.offset);
	}

	function restoreAttribute(el, name, value) {
		if (value === null) el.removeAttribute(name);
		else el.setAttribute(name, value);
	}

	// uid -> the queue's text for its element: the first queued edit's
	// \`before\`, the last one's \`after\` and queue position, and how many
	// edits the uid has queued.
	let textPreview = new Map();
	// uids whose element has not caught up with the queue: changed, rebound,
	// or waiting because the element is unbound, detached, or open in an edit.
	const staleTextUids = new Set();
	// uid -> the element the uid last resolved to, held weakly, so a revert
	// still finds the element once the uid is no longer tracked.
	const textPreviewElements = new Map();
	// element -> \`own\`, the page's text from before annotate first wrote it;
	// \`shown\`, the text annotate last left on it; and \`held\`, a commit's
	// text that stands until a queued edit ends on it.
	const annotatedTexts = new WeakMap();

	// Only uids whose queued edits changed touch the page, so a post that
	// leaves every element's edits alone never reads or writes it.
	function previewText(edits) {
		const next = new Map();
		edits.forEach(({ uid, before, after }, index) => {
			const earlier = next.get(uid);
			next.set(uid, earlier
				? { before: earlier.before, after, last: index, count: earlier.count + 1 }
				: { before, after, last: index, count: 1 });
		});
		for (const [uid, { after, count }] of textPreview) {
			const now = next.get(uid);
			if (!now || now.after !== after || now.count !== count) staleTextUids.add(uid);
		}
		for (const uid of next.keys()) {
			if (!textPreview.has(uid)) staleTextUids.add(uid);
		}
		textPreview = next;
		syncStaleText();
	}

	// A pin that bound or rebound may sit on a fresh copy of its element,
	// which shows the page's own text.
	function reapplyTextPreview(uids) {
		for (const uid of uids) {
			if (textPreview.has(uid)) staleTextUids.add(uid);
		}
		syncStaleText();
	}

	// A commit's text stands until its own note reaches the queue, and the
	// element keeps the page's own text for when the queue lets go. An
	// excerpted note carries no text, so its commit stands until a reload.
	function holdCommittedText(el, before, edited) {
		const state = annotatedTexts.get(el);
		const own = state && state.shown === before ? state.own : before;
		annotatedTexts.set(el, { own, shown: edited, held: edited });
	}

	// A uid's element is its pin or pick, else the element its queued text
	// last landed on, while either is on the page.
	function textPreviewResolver() {
		const tracked = new Map(trackedSelectionEntries().map(({ uid, el }) => [uid, el]));
		return uid => {
			const el = tracked.get(uid);
			if (el && el.isConnected) return el;
			const last = textPreviewElements.get(uid)?.deref();
			return last && last.isConnected ? last : null;
		};
	}

	function syncStaleText() {
		if (staleTextUids.size === 0) return;
		const elementOf = textPreviewResolver();
		const elements = new Set();
		for (const uid of staleTextUids) {
			const el = elementOf(uid);
			const queued = textPreview.has(uid);
			if (!el) {
				// A dropped uid whose element the page let go of has nothing to
				// revert.
				if (!queued && !textPreviewElements.get(uid)?.deref()) {
					staleTextUids.delete(uid);
					textPreviewElements.delete(uid);
				}
				continue;
			}
			if (textEdit && textEdit.element === el) continue;
			staleTextUids.delete(uid);
			if (!queued) textPreviewElements.delete(uid);
			elements.add(el);
		}
		for (const el of elements) syncElementText(el, elementOf);
	}

	// Puts the latest queued text of the uids on \`el\` there, or the page's own
	// once none is queued, unless the page has since written text the queue
	// neither starts from nor ends on.
	function syncElementText(el, elementOf) {
		let first = null;
		let last = null;
		for (const [uid, entry] of textPreview) {
			if (elementOf(uid) !== el) continue;
			textPreviewElements.set(uid, new WeakRef(el));
			first = first ?? entry;
			if (!last || entry.last > last.last) last = entry;
		}
		const text = textEditValue(el).text;
		let state = annotatedTexts.get(el);
		// Text the page wrote since makes the element the page's again.
		if (state && text !== state.shown) {
			annotatedTexts.delete(el);
			state = undefined;
		}
		if (!state) {
			// An element annotate does not own shows the page's own text, or
			// already the queue's latest; either way the page's own is what the
			// queue's first edit starts from.
			if (!first || (text !== first.before && text !== last.after)) return;
			state = { own: first.before, shown: text, held: null };
			annotatedTexts.set(el, state);
		}
		if (state.held !== null) {
			if (!last || last.after !== state.held) return;
			state.held = null;
		}
		const target = last ? last.after : state.own;
		if (target !== text) writeTextEditValue(el, text, target);
		if (last) state.shown = target;
		else annotatedTexts.delete(el);
	}

	let textEdit = null;
	// The last edit that ended, until the page hands back a press for it, the
	// next edit begins, selection toggles, or the host's overlay takes pointer
	// input again.
	let endedTextEditRequestId = null;
	const TEXT_EDIT_ATTRIBUTE = 'data-cursor-text-edit';
	// CSSOM writes, so a page whose CSP blocks inline style attributes
	// still gets its own values back.
	const TEXT_EDIT_STYLE = [
		['outline', 'none'],
		['cursor', 'text'],
		['caret-color', '#3a96dd'],
		['user-select', 'text'],
		['-webkit-user-select', 'text'],
	];
	// Typing, clipboard, drag, and focus inside the edit are the user's, not
	// the page's: a page key handler must not act on Space or the arrows, and
	// a paste handler must not take over the paste.
	const TEXT_EDIT_ISOLATED_EVENTS = [
		'keydown', 'keyup', 'keypress', 'beforeinput', 'input', 'textInput',
		'paste', 'cut', 'copy', 'compositionstart', 'compositionupdate', 'compositionend',
		'dblclick', 'contextmenu', 'focusin', 'focusout', 'selectstart',
		'dragstart', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	];
	// CSS collapses these and never a non-breaking space, which is text.
	const TEXT_EDIT_WHITESPACE = /[ \\t\\n\\r\\f]/;

	function whiteSpaceCollapseOf(element) {
		return getComputedStyle(element).whiteSpaceCollapse || 'collapse';
	}

	// The edit's text as the page shows it, which both the page commit and
	// the note use. Each text node follows its own computed white-space:
	// where whitespace collapses, a run is one space and a run at a line's
	// start or end is none; where it is preserved, every character counts.
	// A <br> or a preserved newline is a line break, and the last break is
	// dropped, since a block's last break never shows (Chrome adds one as a
	// caret placeholder). \`map[i]\` is what renders character i: the source
	// ranges of a text character or whitespace run, which a run can spread
	// over several nodes, or the <br>. \`dropped\` is the last break, if one
	// was dropped. CSS text-transform does not count, as it would in innerText.
	function textEditValue(el) {
		const modes = new Map();
		const modeOf = element => {
			if (!modes.has(element)) modes.set(element, whiteSpaceCollapseOf(element));
			return modes.get(element);
		};
		const chars = [];
		const map = [];
		const push = (ch, entry) => {
			chars.push(ch);
			map.push(entry);
		};
		const dropCollapsedSpace = () => {
			if (map.length > 0 && map[map.length - 1].collapsed) {
				chars.pop();
				map.pop();
			}
		};
		const visit = node => {
			if (node.nodeType === Node.TEXT_NODE) {
				const mode = modeOf(node.parentElement || el);
				const keepsSpaces = mode === 'preserve' || mode === 'break-spaces' || mode === 'preserve-spaces';
				const keepsBreaks = mode === 'preserve' || mode === 'break-spaces' || mode === 'preserve-breaks';
				const data = node.data;
				for (let i = 0; i < data.length; i++) {
					const ch = data[i];
					const range = { node, start: i, end: i + 1 };
					if (ch === '\\n' && keepsBreaks) {
						dropCollapsedSpace();
						push('\\n', { ranges: [range] });
					} else if (!TEXT_EDIT_WHITESPACE.test(ch)) {
						push(ch, { ranges: [range] });
					} else if (keepsSpaces) {
						push(' ', { ranges: [range] });
					} else {
						const last = map[map.length - 1];
						if (last && last.collapsed) {
							const run = last.ranges[last.ranges.length - 1];
							if (run.node === node && run.end === i) run.end = i + 1;
							else last.ranges.push(range);
						} else if (chars.length > 0 && chars[chars.length - 1] !== '\\n') {
							push(' ', { ranges: [range], collapsed: true });
						}
					}
				}
			} else if (node.nodeName === 'BR') {
				if (getComputedStyle(node).display !== 'none') {
					dropCollapsedSpace();
					push('\\n', { br: node });
				}
			} else {
				node.childNodes.forEach(visit);
			}
		};
		visit(el);
		dropCollapsedSpace();
		let dropped = null;
		if (chars[chars.length - 1] === '\\n') {
			chars.pop();
			dropped = map.pop();
		}
		return { text: chars.join(''), map, dropped };
	}

	// The reply carries at most ${PDn} characters a side,
	// while the page keeps the whole text.
	const excerptTextEditChange = ${Plv.toString()};

	const isAddToChatChord = ${fvv.toString()};

	function beginTextEdit(x, y, requestId) {
		const el = selectionMode ? editableTextLayerAt(x, y) : null;
		if (!el) {
			sendToHost('text-edit', { state: 'rejected', requestId });
			return;
		}
		if (textEdit) endTextEdit('commit', { kind: 'leave', press: null });
		endedTextEditRequestId = null;
		const edit = {
			element: el,
			requestId,
			before: textEditValue(el).text,
			ownRecords: [],
			inOwnInput: false,
			batchingOwnInput: false,
			composing: false,
			finishingComposition: false,
			contentEditable: el.getAttribute('contenteditable'),
			spellcheck: el.getAttribute('spellcheck'),
			styleAttribute: el.getAttribute('style'),
			style: TEXT_EDIT_STYLE.map(([name]) => [
				name,
				el.style.getPropertyValue(name),
				el.style.getPropertyPriority(name),
			]),
			observer: new MutationObserver(records => {
				if (textEdit !== edit) return;
				if (edit.inOwnInput) {
					edit.ownRecords.push(...records);
					return;
				}
				endTextEdit('foreign', undefined, records);
			}),
			// The observer above cannot see the element itself leave the page, as
			// it does when an SPA route change swaps the view out.
			detachObserver: new MutationObserver(() => {
				if (textEdit === edit && !el.isConnected) endTextEdit('revert');
			}),
			selectionStyle: document.createElement('style'),
		};
		textEdit = edit;
		edit.selectionStyle.textContent =
			'[' + TEXT_EDIT_ATTRIBUTE + ']::selection,[' + TEXT_EDIT_ATTRIBUTE + '] *::selection' +
			'{background:rgba(58,150,221,0.32);color:inherit;}';
		(document.head || document.documentElement).appendChild(edit.selectionStyle);
		// Not plaintext-only: that preserves source whitespace and reflows the
		// text. Rich input is kept plain in onTextEditBeforeInput instead.
		el.setAttribute('contenteditable', 'true');
		el.setAttribute('spellcheck', 'false');
		el.setAttribute(TEXT_EDIT_ATTRIBUTE, '');
		for (const [name, value] of TEXT_EDIT_STYLE) el.style.setProperty(name, value, 'important');
		edit.observer.observe(el, {
			childList: true,
			characterData: true,
			characterDataOldValue: true,
			subtree: true,
		});
		edit.detachObserver.observe(document, { childList: true, subtree: true });
		freezeOn(el, 0);
		sendHoveredRect(null);
		el.focus({ preventScroll: true });
		const range = document.createRange();
		range.selectNodeContents(el);
		const selection = window.getSelection();
		if (selection) {
			selection.removeAllRanges();
			selection.addRange(range);
		}
		sendToHost('text-edit', { state: 'began', requestId });
	}

	// \`mode\` is 'commit', 'revert', or 'foreign': the page changed the text
	// itself, so the user's typing is undone around the page's write and the
	// edit ends. \`trigger\` says how a committed edit ended: Return, or leaving it.
	function endTextEdit(mode, trigger, foreignRecords) {
		if (!textEdit) return;
		const edit = textEdit;
		const el = edit.element;
		finishComposition(edit);
		const foreign = foreignRecords ? [...foreignRecords] : [];
		const pending = edit.observer.takeRecords();
		if (edit.inOwnInput) edit.ownRecords.push(...pending);
		else foreign.push(...pending);
		if (foreign.length > 0) mode = 'foreign';
		// Nothing can be written back to an element the page removed.
		if (mode === 'commit' && !el.isConnected) mode = 'revert';
		textEdit = null;
		endedTextEditRequestId = edit.requestId;
		edit.observer.disconnect();
		edit.detachObserver.disconnect();
		const edited = textEditValue(el).text;
		const keep = mode === 'commit' && edited.replace(/\\s+/g, '').length > 0;
		const writesNewText = keep && edited !== edit.before;
		// The reply is an excerpt once either side is too long to carry whole.
		const excerpted = Math.max(edit.before.length, keep ? edited.length : 0) > ${PDn};
		undoTextEditRecords(edit.ownRecords, foreign);
		// A note's pin finds its element again by its text before the edit,
		// which a reload brings back.
		const innerTextBefore = fingerprintOf(el).innerText;
		if (writesNewText) writeTextEditValue(el, edit.before, edited);
		restoreAttribute(el, 'contenteditable', edit.contentEditable);
		restoreAttribute(el, 'spellcheck', edit.spellcheck);
		for (const [name, value, priority] of edit.style) {
			if (value) el.style.setProperty(name, value, priority);
			else el.style.removeProperty(name);
		}
		if (edit.styleAttribute === null && el.style.length === 0) el.removeAttribute('style');
		// CSSOM writes reserialize the attribute; when the style is the same,
		// the page gets its own text back.
		if (edit.styleAttribute !== null && el.getAttribute('style') !== edit.styleAttribute) {
			const probe = document.createElement('div');
			probe.setAttribute('style', edit.styleAttribute);
			if (probe.style.cssText === el.style.cssText) el.setAttribute('style', edit.styleAttribute);
		}
		el.removeAttribute(TEXT_EDIT_ATTRIBUTE);
		edit.selectionStyle.remove();
		const selection = window.getSelection();
		if (selection && selection.rangeCount > 0 && el.contains(selection.anchorNode)) {
			selection.removeAllRanges();
		}
		if (document.activeElement === el) el.blur();
		frozen = false;
		lastHoveredElement = null;
		updateHighlight(null);
		refreshDomMutationObserver();
		if (writesNewText) holdCommittedText(el, edit.before, edited);
		syncStaleText();
		if (mode !== 'commit') {
			sendToHost('text-edit', { state: 'reverted', requestId: edit.requestId });
			return;
		}
		// Editing wraps long text and scrolls the page after the caret. The
		// committed text can lay out smaller and leave the element off screen,
		// where the note's screenshot would show nothing of it. Only a Return
		// that queues a note needs it on screen: a press that left the edit
		// must land where it was aimed.
		if (trigger.kind === 'return' && writesNewText) {
			const rect = el.getBoundingClientRect();
			if (rect.bottom <= 0 || rect.top >= innerHeight || rect.right <= 0 || rect.left >= innerWidth) {
				el.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
			}
		}
		const note = excerptTextEditChange({ before: edit.before, after: keep ? edited : '' }, ${PDn});
		sendToHost('text-edit', {
			state: 'committed',
			requestId: edit.requestId,
			trigger,
			element: { ...buildPayload(el, 0), innerText: innerTextBefore },
			before: note.before,
			after: note.after,
			excerpted,
		});
	}

	function isInsideTextEdit(target) {
		return !!textEdit && target instanceof Node && textEdit.element.contains(target);
	}

	function endOwnInput(edit) {
		if (!edit.inOwnInput || edit.batchingOwnInput || textEdit !== edit) return;
		edit.ownRecords.push(...edit.observer.takeRecords());
		edit.inOwnInput = false;
	}

	// Mutations made inside \`change\` are the user's, however many input events it fires.
	function asOwnInput(edit, change) {
		edit.inOwnInput = true;
		edit.batchingOwnInput = true;
		try {
			change();
		} finally {
			edit.batchingOwnInput = false;
			edit.ownRecords.push(...edit.observer.takeRecords());
			edit.inOwnInput = false;
		}
	}

	// Taking focus off the element makes the browser commit an open IME
	// composition as it stands, as on any blur, so that text is the user's
	// typing before the edit ends.
	function finishComposition(edit) {
		if (!edit.composing) return;
		edit.composing = false;
		const focused = document.activeElement;
		if (!(focused instanceof HTMLElement) || !edit.element.contains(focused)) return;
		edit.finishingComposition = true;
		try {
			asOwnInput(edit, () => focused.blur());
		} finally {
			edit.finishingComposition = false;
		}
	}

	// A text-edit note carries text only, so pastes arrive as plain text and
	// formatting, drags, and new paragraphs never reach the page.
	function onTextEditBeforeInput(ev, edit) {
		if (!isTrustedEvent(ev)) return;
		const type = ev.inputType || '';
		if (type.startsWith('format') || type === 'insertParagraph'
			|| type === 'insertFromDrop' || type === 'deleteByDrag') {
			ev.preventDefault();
			return;
		}
		if (type === 'insertFromPaste' || type === 'insertFromPasteAsQuotation') {
			ev.preventDefault();
			const text = ev.dataTransfer ? ev.dataTransfer.getData('text/plain') : '';
			asOwnInput(edit, () => {
				text.split(/\\r\\n|\\r|\\n/).forEach((line, index) => {
					if (index > 0) document.execCommand('insertLineBreak');
					if (line) document.execCommand('insertText', false, line);
				});
			});
			return;
		}
		// The browser mutates the text between an input's beforeinput and input
		// events; records from that window are the user's own typing. A
		// cancelled beforeinput never gets its input event.
		edit.inOwnInput = true;
		setTimeout(() => endOwnInput(edit), 0);
	}

	function onTextEditFocusOut(ev, edit) {
		// Focus moving onto a focusable child of the text, such as a button,
		// stays inside the edit. With the page itself unfocused, the user
		// switched to Glass or another app; Glass ends the edit itself when its
		// own chrome took focus.
		if (edit.finishingComposition || !isTrustedEvent(ev)
			|| isInsideTextEdit(ev.relatedTarget) || !document.hasFocus()) return;
		// Chrome sends a removed element's focusout while it is still in the
		// page, so the edit ends once the removal has finished.
		queueMicrotask(() => {
			if (textEdit === edit) endTextEdit('commit', { kind: 'leave', press: null });
		});
	}

	function onTextEditEvent(ev) {
		const edit = textEdit;
		if (!edit || !isInsideTextEdit(ev.target)) return;
		if (ev.type === 'beforeinput') onTextEditBeforeInput(ev, edit);
		else if (ev.type === 'input') endOwnInput(edit);
		else if (ev.type === 'focusout') onTextEditFocusOut(ev, edit);
		else if (ev.type === 'compositionstart') edit.composing = true;
		else if (ev.type === 'compositionend') edit.composing = false;
		// While an IME composes, its keys (Escape, Return, Tab, undo) belong to
		// the IME: the edit and Glass leave them alone.
		else if (ev.type === 'keydown' && !ev.isComposing && ev.keyCode !== 229 && isTrustedEvent(ev)) {
			// Cmd/Ctrl+L commits like Return, as it does in the comment input.
			if ((ev.key === 'Enter' || isAddToChatChord(ev, ${_r})) && !ev.shiftKey && !ev.altKey) {
				ev.preventDefault();
				endTextEdit('commit', { kind: 'return' });
			} else if (ev.key === 'Escape') {
				ev.preventDefault();
				endTextEdit('revert');
			} else if (forwardBrowserShortcut(ev)) {
				ev.preventDefault();
			}
		}
		ev.stopPropagation();
		ev.stopImmediatePropagation();
	}
`;

}
