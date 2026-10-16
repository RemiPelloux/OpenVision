import { Atw, Rtw } from "./Ycg.js";
import { RDn, ece } from "./index_27.ts";
import { E } from "./tslib.es6.js";
var kRv;
export { kRv };
var __wakaru_r20_initialized = false;
export function r20() {
if (__wakaru_r20_initialized) return;
__wakaru_r20_initialized = true;
"use strict";
E(), ece(), kRv = `
	const launchMemberships = new Map();
	const launchGroups = new Map();
	const launchDisplacedStacks = new Map();
	let launchPromotionCounter = 0;

	const planLaunchGroupPromotion = ${Atw.toString()};
	const pickLaunchGroupActivation = ${Rtw.toString()};

	function ensureShimmerStyles() {
		if (document.querySelector('[data-cursor-picker-shimmer-styles="true"]')) return;
		const style = document.createElement('style');
		style.setAttribute('data-cursor-picker-shimmer-styles', 'true');
		style.textContent =
			'@keyframes cursor-picker-shimmer-sweep {' +
			'0% { transform: translateX(-140%); opacity: 0; }' +
			'15% { opacity: 0.72; }' +
			'85% { opacity: 0.72; }' +
			'100% { transform: translateX(240%); opacity: 0; }' +
			'}' +
			'@media (prefers-reduced-motion: reduce) {' +
			'[data-cursor-picker-shimmer="true"] > [data-cursor-picker-shimmer-sweep="true"] {' +
			'animation: none !important; transform: none !important; opacity: 1 !important;' +
			'background: rgba(127,127,127,0.12) !important; width: 100% !important;' +
			'}' +
			'}';
		document.head.appendChild(style);
	}

	function createShimmerBox(groupId, hueIndex) {
		ensureShimmerStyles();
		const color = getHueColor(hueIndex || 0);
		const box = document.createElement('div');
		box.setAttribute('data-cursor-picker-shimmer', 'true');
		box.setAttribute('data-cursor-picker-shimmer-group', groupId);
		box.style.cssText =
			'position:fixed;border:2px solid ' + color.border + ';' +
			'background:rgba(127,127,127,0.06);border-radius:${RDn}px;' +
			'pointer-events:none;z-index:2147483645;display:none;overflow:hidden;';
		const sweep = document.createElement('div');
		sweep.setAttribute('data-cursor-picker-shimmer-sweep', 'true');
		sweep.style.cssText =
			'position:absolute;inset:0 auto 0 0;width:55%;height:100%;' +
			'background:linear-gradient(90deg,transparent,rgba(255,255,255,0.58),transparent);' +
			'transform:translateX(-140%);opacity:0;will-change:transform,opacity;' +
			'animation:cursor-picker-shimmer-sweep 1.8s linear infinite;';
		box.appendChild(sweep);
		document.body.appendChild(box);
		return box;
	}

	function updateShimmerBox(box, element) {
		if (!element.isConnected) return false;
		applyBoxRect(box, element.getBoundingClientRect());
		return true;
	}

	function removeLaunchMembership(uid) {
		const membership = launchMemberships.get(uid);
		if (!membership) return;
		membership.box.remove();
		launchMemberships.delete(uid);
	}

	// False when the element is disconnected and its box stays unplaced.
	function setLaunchMembership(uid, snapshot) {
		const box = createShimmerBox(snapshot.groupId, snapshot.hueIndex);
		launchMemberships.set(uid, {
			groupId: snapshot.groupId,
			element: snapshot.element,
			box,
			hueIndex: snapshot.hueIndex,
			promotedAt: snapshot.promotedAt,
		});
		return updateShimmerBox(box, snapshot.element);
	}

	function pushDisplacedMembership(uid, membership) {
		let stack = launchDisplacedStacks.get(uid);
		if (!stack) {
			stack = [];
			launchDisplacedStacks.set(uid, stack);
		}
		stack.push({
			groupId: membership.groupId,
			element: membership.element,
			hueIndex: membership.hueIndex,
			promotedAt: membership.promotedAt,
		});
	}

	function popRestorableDisplacedMembership(uid) {
		const stack = launchDisplacedStacks.get(uid);
		if (!stack) return null;
		while (stack.length > 0) {
			const candidate = stack.pop();
			const group = launchGroups.get(candidate.groupId);
			if (group && group.state !== 'failed' && candidate.element.isConnected) {
				return candidate;
			}
		}
		launchDisplacedStacks.delete(uid);
		return null;
	}

	function promoteSelectionToGroup(groupId, uids) {
		if (typeof groupId !== 'string' || groupId.length === 0 || groupId.length > 64) return;
		if (!Array.isArray(uids)) return;
		const existingGroup = launchGroups.get(groupId);
		if (existingGroup) {
			if (existingGroup.state !== 'failed') return;
			launchGroups.delete(groupId);
		}
		const currentOwners = new Map();
		for (const [uid, membership] of launchMemberships) {
			currentOwners.set(uid, membership.groupId);
		}
		const plan = planLaunchGroupPromotion(
			currentOwners,
			uids.filter(uid => typeof uid === 'string' && uid.length > 0),
			groupId
		);
		const resolved = new Map();
		for (const uid of plan.assign) {
			const prior = launchMemberships.get(uid);
			let element = multiSelectElements.get(uid);
			let hueIndex = multiSelectHueIndices.get(uid);
			if (!element && lastHoveredElement && cursorElementIdMap.get(lastHoveredElement) === uid) {
				element = lastHoveredElement;
				hueIndex = frozenSelectionHueIndex;
			}
			if (!element && prior) {
				element = prior.element;
				hueIndex = prior.hueIndex;
			}
			if (element && element.isConnected) {
				resolved.set(uid, {
					element,
					hueIndex: typeof hueIndex === 'number' ? hueIndex : 0,
				});
			}
		}
		if (resolved.size === 0) return;

		const promotedAt = ++launchPromotionCounter;
		launchGroups.set(groupId, { state: 'pending', promotedAt });
		const evictedUids = new Set(plan.evict.map(eviction => eviction.uid));
		dropSelection();
		sendHoveredRect(null);

		for (const [uid, value] of resolved) {
			const prior = launchMemberships.get(uid);
			if (prior && evictedUids.has(uid)) {
				pushDisplacedMembership(uid, prior);
				removeLaunchMembership(uid);
			}
			setLaunchMembership(uid, { groupId, element: value.element, hueIndex: value.hueIndex, promotedAt });
		}
		refreshDomMutationObserver();
	}

	function markLaunchGroupReady(groupId) {
		const group = launchGroups.get(groupId);
		if (group && group.state === 'pending') {
			group.state = 'ready';
		}
	}

	function demoteGroupToSelection(groupId, restoreSelection) {
		const group = launchGroups.get(groupId);
		if (!group || group.state === 'failed') return;
		group.state = 'failed';
		for (const [uid, membership] of Array.from(launchMemberships.entries())) {
			if (membership.groupId !== groupId) continue;
			removeLaunchMembership(uid);
			const displaced = popRestorableDisplacedMembership(uid);
			if (displaced) {
				if (!setLaunchMembership(uid, displaced)) removeLaunchMembership(uid);
				continue;
			}
			if (!restoreSelection || !membership.element.isConnected) continue;
			addMultiSelect(uid, membership.element, membership.hueIndex);
		}
		refreshHoverHues();
		refreshDomMutationObserver();
	}

	function refreshLaunchGroupBoxes() {
		// Read all rects before writing any box style; interleaved
		// read/write would force one reflow per shimmer box. Disconnected
		// memberships are hidden, not reaped: reconcileDisconnectedSelections
		// owns disconnect handling and gives them the same fingerprint
		// rebind and grace window as selection picks.
		const updates = [];
		const hidden = [];
		for (const membership of launchMemberships.values()) {
			if (membership.element.isConnected) {
				updates.push([membership.box, membership.element.getBoundingClientRect()]);
			} else {
				hidden.push(membership.box);
			}
		}
		for (const [box, rect] of updates) {
			applyBoxRect(box, rect);
		}
		for (const box of hidden) {
			box.style.display = 'none';
		}
	}

	function hitTestReadyLaunchGroup(x, y) {
		const hits = [];
		for (const membership of launchMemberships.values()) {
			const group = launchGroups.get(membership.groupId);
			if (!group || group.state !== 'ready' || !membership.element.isConnected) continue;
			const rect = membership.element.getBoundingClientRect();
			if (
				x >= rect.left &&
				x <= rect.right &&
				y >= rect.top &&
				y <= rect.bottom
			) {
				hits.push({
					groupId: membership.groupId,
					promotedAt: membership.promotedAt,
				});
			}
		}
		return pickLaunchGroupActivation(hits);
	}

	function clearLaunchGroups() {
		for (const membership of launchMemberships.values()) {
			membership.box.remove();
		}
		launchMemberships.clear();
		launchGroups.clear();
		launchDisplacedStacks.clear();
		document.querySelector('[data-cursor-picker-shimmer-styles="true"]')?.remove();
	}
`;

}
