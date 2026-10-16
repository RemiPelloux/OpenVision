import { ece } from "./index_27.ts";
import { JMi, _ct, mPl } from "./picked-element.ts";
import { GV, aYl } from "./pin-placement.js";
import { E } from "./tslib.es6.js";
var yRv;
export { yRv };
var __wakaru_n20_initialized = false;
export function n20() {
if (__wakaru_n20_initialized) return;
__wakaru_n20_initialized = true;
"use strict";
E(), ece(), aYl(), yRv = `
	// id -> { members: [{ uid, element, fingerprint }] }. A member whose
	// element is gone holds element null and reports a null rect. The host
	// sends the whole set again on every overlay mount, so turning selection
	// off drops it.
	const annotationAnchors = new Map();
	// uid -> where that element was last seen, in page coordinates. Outlives
	// the registry so a pin seen earlier in this document keeps its place
	// across a design mode re-entry.
	const lastSeenPageRects = new Map();
	// annotation id -> uid of the element its badge last sat on, so a stacked
	// badge holds that spot once none of its elements is on screen.
	const lastBadgeUids = new Map();
	// Added nodes might hold a missing member since it last tried to
	// re-resolve. Kept apart from reconcileHasNewCandidates so a missing
	// member never re-arms the grace-window retry timer.
	let anchorsHaveNewCandidates = false;
	let lastSentAnchorsJson = null;
	let lastSentDevicePixelRatio = null;
	// A set is answered even when nothing moved: a remounted overlay starts
	// with an empty store.
	let anchorsAnswerOwed = false;

	function hasAnnotationAnchors() {
		return annotationAnchors.size > 0;
	}

	function clearAnnotationAnchors() {
		annotationAnchors.clear();
		anchorsHaveNewCandidates = false;
		lastSentAnchorsJson = null;
		anchorsAnswerOwed = false;
	}

	function markAnchorsForRetry() {
		anchorsHaveNewCandidates = true;
	}

	function* anchorMembers() {
		for (const anchor of annotationAnchors.values()) yield* anchor.members;
	}

	// A missing pin re-resolves only when an added subtree could hold its
	// tag, so a page that streams unrelated DOM does not rescan every frame.
	function noteAddedAnchorCandidates(addedNodeLists) {
		if (anchorsHaveNewCandidates || addedNodeLists.length === 0) return;
		const tags = new Set();
		for (const member of anchorMembers()) {
			if (!member.element && member.fingerprint) {
				tags.add(member.fingerprint.tagName.toLowerCase());
			}
		}
		if (tags.size === 0) return;
		for (const nodes of addedNodeLists) {
			for (const node of nodes) {
				if (node.nodeType !== Node.ELEMENT_NODE) continue;
				for (const tag of tags) {
					if (node.tagName.toLowerCase() === tag || node.getElementsByTagName(tag).length > 0) {
						anchorsHaveNewCandidates = true;
						return;
					}
				}
			}
		}
	}

	// A pin that turns up after the page loaded gets the queue's preview too.
	function retryMissingAnchors() {
		if (!anchorsHaveNewCandidates) return;
		anchorsHaveNewCandidates = false;
		const bound = resolveAnchorMembersByFingerprint([...anchorMembers()]);
		if (bound.length > 0) renderQueuePreviews(bound);
	}

	// Adds each pinned element to the uid -> element map the reconcile walks.
	function mergeAnchorTrackedEntries(byUid) {
		for (const member of anchorMembers()) {
			if (member.uid && member.element) trackPreferringConnected(byUid, member.uid, member.element);
		}
	}

	function rebindAnchorMembers(uid, replacement) {
		const fingerprint = selectionFingerprints.get(replacement);
		for (const member of anchorMembers()) {
			if (member.uid !== uid) continue;
			member.element = replacement;
			if (fingerprint) member.fingerprint = fingerprint;
		}
	}

	function outlivesDraft(uid) {
		return launchMemberships.has(uid) || annotationAnchorsOwnUid(uid);
	}

	function annotationAnchorsOwnUid(uid) {
		for (const member of anchorMembers()) {
			if (member.uid === uid) return true;
		}
		return false;
	}

	// The pinned element is really gone. Its badge stays at the last known
	// place, so the member keeps its latest fingerprint to re-resolve later.
	// It drops the slot: once the element is gone, whatever later fills its
	// position is a different element.
	function detachAnnotationAnchorUid(uid) {
		for (const member of anchorMembers()) {
			if (member.uid !== uid || !member.element) continue;
			member.fingerprint = anchorFingerprintOf(
				selectionFingerprints.get(member.element) || member.fingerprint
			);
			member.element = null;
		}
	}

	// Never carries tagPositions; detach relies on that to drop the slot.
	function anchorFingerprintOf(item) {
		if (!item || typeof item.tagName !== 'string' || !item.tagName) return null;
		return {
			tagName: item.tagName,
			id: typeof item.id === 'string' ? item.id : '',
			className: typeof item.className === 'string' ? item.className : '',
			innerText: typeof item.innerText === 'string' ? item.innerText : '',
		};
	}

	function findConnectedElementByUid(uid, tagName, trackedByUid) {
		if (!uid) return null;
		const tracked = trackedByUid.get(uid);
		if (tracked && tracked.isConnected) return tracked;
		if (!tagName) return null;
		const candidates = document.getElementsByTagName(tagName);
		for (let i = 0; i < candidates.length; i++) {
			if (cursorElementIdMap.get(candidates[i]) === uid) return candidates[i];
		}
		return null;
	}

	function bindAnnotationMember(member, element) {
		member.element = element;
		captureSelectionFingerprint(element);
		member.fingerprint = selectionFingerprints.get(element) || member.fingerprint;
	}

	// Fingerprint fallback for members their uid no longer names: a reload
	// mints fresh uids, and a detached member waits for its element to come
	// back. Members sharing a uid (two notes on one element) resolve together
	// instead of competing for it, and an element another pin already holds
	// is never a candidate. The element takes the member's uid unless the
	// live selection or a launch group already owns it under another, so a
	// later pick of it reports the uid the host stored for the pin. Returns
	// the uids that found their element.
	function resolveAnchorMembersByFingerprint(members) {
		const groups = new Map();
		const bound = new Set();
		for (const member of members) {
			if (member.element) {
				bound.add(member.element);
				continue;
			}
			if (!member.fingerprint) continue;
			const key = member.uid || member;
			const group = groups.get(key);
			if (group) group.push(member);
			else groups.set(key, [member]);
		}
		if (groups.size === 0) return [];
		const grouped = Array.from(groups.values());
		const resolved = resolveRestoreItems(
			grouped.map(group => group[0].fingerprint),
			{ isReserved: el => bound.has(el) }
		);
		const found = [];
		for (let i = 0; i < grouped.length; i++) {
			const element = resolved[i];
			if (!element) continue;
			const uid = grouped[i][0].uid;
			if (uid) found.push(uid);
			const currentUid = cursorElementIdMap.get(element);
			if (
				uid &&
				currentUid !== uid &&
				!(currentUid && (ownsSelectionUid(currentUid) || launchMemberships.has(currentUid)))
			) {
				cursorElementIdMap.set(element, uid);
			}
			for (const member of grouped[i]) bindAnnotationMember(member, element);
		}
		return found;
	}

	function setAnnotationAnchors(rawAnchors) {
		const trackedByUid = new Map(
			trackedSelectionEntries().map(entry => [entry.uid, entry.el])
		);
		const next = new Map();
		// Fresh members, plus kept bound ones so no fresh member takes their
		// elements. Kept members that are still missing wait for an added
		// subtree that could hold them, like between sets.
		const resolving = [];
		for (const raw of rawAnchors.slice(0, ${mPl})) {
			if (
				!raw ||
				typeof raw.id !== 'string' ||
				!raw.id ||
				raw.id.length > ${JMi} ||
				next.has(raw.id)
			) {
				continue;
			}
			const items = Array.isArray(raw.elements)
				? raw.elements.slice(0, ${_ct})
				: [];
			const uids = items.map(item => item && typeof item.uid === 'string' ? item.uid : '');
			const existing = annotationAnchors.get(raw.id);
			if (
				existing &&
				existing.members.length === uids.length &&
				existing.members.every((member, i) => member.uid === uids[i])
			) {
				for (const member of existing.members) if (member.element) resolving.push(member);
				next.set(raw.id, existing);
				continue;
			}
			const members = items.map((item, i) => {
				const fingerprint = anchorFingerprintOf(item);
				const member = { uid: uids[i], element: null, fingerprint };
				const element = findConnectedElementByUid(
					uids[i],
					fingerprint ? fingerprint.tagName : '',
					trackedByUid
				);
				if (element) bindAnnotationMember(member, element);
				resolving.push(member);
				return member;
			});
			next.set(raw.id, { members });
		}
		resolveAnchorMembersByFingerprint(resolving);
		annotationAnchors.clear();
		for (const [id, anchor] of next) annotationAnchors.set(id, anchor);
		refreshDomMutationObserver();
		anchorsAnswerOwed = true;
		scheduleGeometryRefresh();
	}

	function anchorRectOf(element) {
		if (!element || !element.isConnected) return null;
		const rect = element.getBoundingClientRect();
		// Both zero: display:none at this breakpoint, not a real box.
		return rect.width === 0 && rect.height === 0 ? null : plainRect(rect);
	}

	// Reads every member's rect and records where each was last seen. Null
	// means there is nothing to send: selection is off, a capture is in
	// progress, or the host already knows the registry is empty.
	function measureAnnotationAnchors() {
		if (!selectionMode || hiddenForScreenshot) return null;
		if (
			annotationAnchors.size === 0 &&
			(lastSentAnchorsJson === null || lastSentAnchorsJson === '[]')
		) {
			return null;
		}
		const anchors = [];
		for (const [id, anchor] of annotationAnchors) {
			const rects = anchor.members.map(member => {
				const rect = anchorRectOf(member.element);
				if (rect && member.uid) {
					lastSeenPageRects.set(member.uid, {
						top: rect.top + window.scrollY,
						left: rect.left + window.scrollX,
						width: rect.width,
						height: rect.height,
					});
				}
				return rect;
			});
			const onScreen = anchor.members[rects.findIndex(rect => rect !== null)];
			if (onScreen && onScreen.uid) lastBadgeUids.set(id, onScreen.uid);
			const badgeUid = lastBadgeUids.get(id);
			const seenMember =
				anchor.members.find(member => member.uid === badgeUid && lastSeenPageRects.has(member.uid)) ||
				anchor.members.find(member => lastSeenPageRects.has(member.uid));
			const last = seenMember ? lastSeenPageRects.get(seenMember.uid) : null;
			anchors.push({
				id,
				rects,
				lastKnownRect: last && {
					top: last.top - window.scrollY,
					left: last.left - window.scrollX,
					width: last.width,
					height: last.height,
				},
			});
		}
		return anchors;
	}

	// The next document's picker only arrives after its load finishes, so the
	// host clears this one's badges when it goes away, at the new document's
	// commit. Sent directly: no frame follows a pagehide.
	window.addEventListener('pagehide', () => {
		if (lastSentAnchorsJson === null || lastSentAnchorsJson === '[]') return;
		clearAnnotationAnchors();
		sendToHost('annotation-anchors', { anchors: [] });
	});

	function sendAnnotationAnchors(anchors) {
		if (!anchors) return;
		const json = JSON.stringify(anchors);
		// A zoom rescales the host's badges while the CSS rects stay put.
		const devicePixelRatio = window.devicePixelRatio;
		if (
			!anchorsAnswerOwed &&
			json === lastSentAnchorsJson &&
			devicePixelRatio === lastSentDevicePixelRatio
		) {
			return;
		}
		anchorsAnswerOwed = false;
		lastSentAnchorsJson = json;
		lastSentDevicePixelRatio = devicePixelRatio;
		sendToHost('annotation-anchors', { anchors });
	}

	function parseRect(value) {
		if (!value || typeof value !== 'object') return null;
		const { top, left, width, height } = value;
		return [top, left, width, height].every(n => typeof n === 'number' && Number.isFinite(n))
			? { top, left, width, height }
			: null;
	}

	// The page-level scroller around an element: the window, or a body that
	// scrolls in its place. Null when a nested container scrolls it, or when
	// it or an ancestor is fixed, since no page scroll moves it. A fixed
	// element under a transformed ancestor does move with the page, but
	// still only gets scrollIntoView. A body's overflow moves to the viewport unless the root sets its own, and
	// then the window scrolls, not the body. The root's own overflow always
	// scrolls the viewport; in quirks mode scrolling the root does nothing.
	function pageScrollerOf(element) {
		for (let el = element; el && el !== document.documentElement; el = el.parentElement) {
			const style = getComputedStyle(el);
			if (style.position === 'fixed') return null;
			if (
				el !== element &&
				/(auto|scroll|overlay)/.test(style.overflowX + style.overflowY) &&
				(el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth)
			) {
				if (el === document.body) {
					const root = getComputedStyle(document.documentElement);
					return root.overflowX === 'visible' && root.overflowY === 'visible' ? window : el;
				}
				return null;
			}
		}
		return window;
	}

	// Centering the anchor does not always show the note: a region sits at an
	// offset from its anchor, which can be the whole document, and an element
	// taller than the viewport would leave the badge on its top edge above it.
	// Center the region or that top edge when the page scrolls it; a nested
	// scroller still gets the anchor scrolled into view.
	function scrollAnnotationIntoView(id, behavior, regionOffset) {
		if (!selectionMode || hiddenForScreenshot) return;
		const anchor = annotationAnchors.get(id);
		if (!anchor) return;
		const member = anchor.members.find(m => m.element && m.element.isConnected);
		if (!member) return;
		const scrollBehavior = behavior === 'smooth' ? 'smooth' : 'instant';
		const rect = member.element.getBoundingClientRect();
		const target = parseRect(regionOffset) || (rect.height > window.innerHeight
			? { top: 0, left: 0, width: rect.width, height: ${GV} }
			: null);
		const scroller = target ? pageScrollerOf(member.element) : null;
		if (target && scroller) {
			scroller.scrollBy({
				top: rect.top + target.top + target.height / 2 - window.innerHeight / 2,
				left: rect.left + target.left + target.width / 2 - window.innerWidth / 2,
				behavior: scrollBehavior,
			});
		} else {
			member.element.scrollIntoView({ block: 'center', inline: 'nearest', behavior: scrollBehavior });
		}
		sendAnnotationAnchors(measureAnnotationAnchors());
	}
`;

}
