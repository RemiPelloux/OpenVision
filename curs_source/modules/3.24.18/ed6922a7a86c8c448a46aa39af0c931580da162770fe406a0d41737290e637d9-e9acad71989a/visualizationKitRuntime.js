import { x } from "./tslib.es6.js";
import { mNo, osr } from "./visualizationShell.js";
var GWh, VWh;
export { GWh, VWh };
var __wakaru_jWh_initialized = false;
export function jWh() {
if (__wakaru_jWh_initialized) return;
__wakaru_jWh_initialized = true;
"use strict";
x(), osr(), GWh = `
/* Host tooltip and Lucide runtime chrome. */
.vis-tooltip {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: max-content;
  max-width: min(260px, var(--tooltip-available-width, calc(100vw - 16px)), calc(100vw - 16px));
  max-height: min(var(--tooltip-available-height, calc(100vh - 10px)), calc(100vh - 10px));
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  color: var(--popover-foreground);
  background: var(--popover);
  box-shadow: var(--shadow-sm);
  font-family: var(--font-sans);
  font-size: var(--font-size-small);
  line-height: var(--line-height-normal);
  overflow: auto;
  overflow-wrap: break-word;
  white-space: normal;
  pointer-events: none;
  user-select: none;
}

/* Fragments often position their tooltip absolutely; fixed keeps it from ever
 * growing the document, which the height bridge would turn into a taller iframe. */
.vis-chart-tooltip {
  position: fixed !important;
}

.vis-tooltip-context {
  margin-bottom: 4px;
  color: var(--tertiary-foreground);
}

.vis-tooltip-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
}

.vis-tooltip-label {
  color: var(--muted-foreground);
}

.vis-tooltip-value {
  color: var(--foreground);
  font-weight: var(--font-weight-medium);
  font-variant-numeric: tabular-nums;
}

svg.lucide {
  display: block;
  width: 16px !important;
  height: 16px !important;
  flex: none;
  margin: 0 !important;
  stroke-width: 1.6;
}
`, VWh = `
/**
 * Trusted guest runtime for inline visualizations.
 * Handles tooltips and Lucide icons.
 * Fragment scripts must not depend on document.currentScript.
 */
(() => {
  function ensureTooltipEl() {
    let el = document.querySelector(".vis-tooltip[data-host-tooltip]");
    if (el) return el;
    el = document.createElement("div");
    el.className = "vis-tooltip";
    el.setAttribute("data-host-tooltip", "");
    el.setAttribute("role", "tooltip");
    el.hidden = true;
    document.body.appendChild(el);
    return el;
  }

  function positionTooltip(anchor, tooltip) {
    const rect = anchor.getBoundingClientRect();
    const pad = 8;
    const gap = 8;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spaceBelow = Math.max(0, vh - rect.bottom - pad - gap);
    const spaceAbove = Math.max(0, rect.top - pad - gap);
    const placeBelow = rect.top < 80 || spaceAbove < tooltip.offsetHeight + gap;
    const availableHeight = placeBelow ? spaceBelow : spaceAbove;
    const availableWidth = Math.max(0, vw - pad * 2);
    tooltip.style.setProperty("--tooltip-available-width", \`\${Math.floor(availableWidth)}px\`);
    tooltip.style.setProperty("--tooltip-available-height", \`\${Math.floor(availableHeight)}px\`);

    const tipRect = tooltip.getBoundingClientRect();
    let top = placeBelow ? rect.bottom + gap : rect.top - tipRect.height - gap;
    top = Math.max(pad, Math.min(top, vh - tipRect.height - pad));
    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    left = Math.max(pad, Math.min(left, vw - tipRect.width - pad));
    tooltip.style.top = \`\${Math.round(top)}px\`;
    tooltip.style.left = \`\${Math.round(left)}px\`;
  }

  function bindTooltips() {
    const tooltip = ensureTooltipEl();
    let timer = null;

    const hide = () => {
      if (timer) clearTimeout(timer);
      timer = null;
      tooltip.hidden = true;
      tooltip.textContent = "";
      tooltip.style.top = "";
      tooltip.style.left = "";
      tooltip.style.removeProperty("--tooltip-available-width");
      tooltip.style.removeProperty("--tooltip-available-height");
    };

    const show = (anchor) => {
      const text = anchor.getAttribute("data-tooltip");
      if (!text) return;
      const label = anchor.getAttribute("data-tooltip-label");
      const value = anchor.getAttribute("data-tooltip-value");
      if (label || value) {
        const row = document.createElement("div");
        row.className = "vis-tooltip-row";
        if (label) {
          const labelNode = document.createElement("span");
          labelNode.className = "vis-tooltip-label";
          labelNode.textContent = label;
          row.appendChild(labelNode);
        }
        if (value) {
          const valueNode = document.createElement("span");
          valueNode.className = "vis-tooltip-value";
          valueNode.textContent = value;
          row.appendChild(valueNode);
        }
        tooltip.replaceChildren(row);
      } else {
        tooltip.textContent = text;
      }
      tooltip.hidden = false;
      positionTooltip(anchor, tooltip);
      const id = \`host-tooltip-\${Math.random().toString(36).slice(2, 9)}\`;
      tooltip.id = id;
      anchor.setAttribute("aria-describedby", id);
    };

    // Pointer moves between children of one anchor fire over/out pairs;
    // ignore them so the tooltip neither hides nor restarts its delay.
    const staysWithinAnchor = (event, anchor) => {
      const related = event.relatedTarget;
      return (
        related instanceof Element && related.closest("[data-tooltip]") === anchor
      );
    };

    document.addEventListener("pointerover", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("[data-tooltip]");
      if (!anchor) return;
      if (staysWithinAnchor(event, anchor)) return;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => show(anchor), 250);
    });

    document.addEventListener("pointerout", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("[data-tooltip]");
      if (!anchor) return;
      if (staysWithinAnchor(event, anchor)) return;
      hide();
    });

    document.addEventListener("focusin", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("[data-tooltip]");
      if (anchor) show(anchor);
    });

    document.addEventListener("focusout", () => hide());

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") hide();
    });
  }

  // While the pointer is over the chart, the host draws the visible chart
  // tooltip over the chat as plain text, so it can extend past the frame. The
  // in-frame copy is clipped rather than hidden so assistive technology still
  // reads it. Publishing runs after the fragment's own pointer handlers have
  // filled, moved, or hidden its tooltip.
  function bindChartTooltips() {
    const frameInstanceId = new URLSearchParams(location.search).get("frameInstanceId");
    let pointer = null;
    let lastPosted = "";

    // Visible means it paints and sits within a frame's size of the frame, however
    // the fragment chose to hide it: just past an edge is still shown by the host,
    // parked far off screen is hidden.
    const isVisible = (tooltip) => {
      if (!tooltip.checkVisibility({ opacityProperty: true, visibilityProperty: true })) {
        return false;
      }
      const rect = tooltip.getBoundingClientRect();
      const w = window.innerWidth;
      const h = window.innerHeight;
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.right > -w &&
        rect.bottom > -h &&
        rect.left < w * 2 &&
        rect.top < h * 2
      );
    };

    const text = (node) => (node ? node.textContent || "" : "").replace(/\\s+/g, " ").trim();

    const publish = () => {
      const tooltips = Array.from(document.querySelectorAll(".vis-chart-tooltip"));
      const tooltip = pointer ? tooltips.find(isVisible) : undefined;
      for (const each of tooltips) {
        const clip = each === tooltip ? "inset(50%)" : "";
        if (each.style.clipPath !== clip) each.style.clipPath = clip;
      }
      let content = null;
      if (tooltip) {
        // Legend toggles hide a series' row in place, so copy only the rows shown.
        const rowNodes = Array.from(tooltip.querySelectorAll(".vis-tooltip-row"));
        const rows = rowNodes
          .filter((row) => row.checkVisibility({ opacityProperty: true, visibilityProperty: true }))
          .map((row) => {
            const label = row.querySelector(".vis-tooltip-label");
            const value = row.querySelector(".vis-tooltip-value");
            return label || value
              ? { label: text(label), value: text(value) }
              : { label: text(row), value: "" };
          });
        const context = tooltip.querySelector(".vis-tooltip-context");
        content = {
          x: pointer.x,
          y: pointer.y,
          context: (context || rowNodes.length > 0) ? text(context) : text(tooltip),
          rows,
        };
      }
      const serialized = JSON.stringify(content);
      if (serialized === lastPosted) return;
      lastPosted = serialized;
      window.parent.postMessage(
        { type: "${mNo}", frameInstanceId, tooltip: content },
        "*",
      );
    };

    document.addEventListener(
      "pointermove",
      (event) => {
        pointer = { x: event.clientX, y: event.clientY };
      },
      { capture: true, passive: true },
    );
    document.addEventListener("pointermove", publish, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => {
      pointer = null;
      publish();
    });
    // Fragments also hide or refill their tooltip without a pointer event: on a
    // timer, from a frame callback, or with a CSS fade that ends later.
    const republish = () => {
      if (pointer) publish();
    };
    document.addEventListener("transitionend", republish);
    new MutationObserver(republish).observe(document.body, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });
  }

  function createIconSvg(name) {
    const paths = {
      search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
      "arrow-up-right": '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
      check: '<path d="M20 6 9 17l-5-5"/>',
      x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
      info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
      alert:
        '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
      chart: '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/>',
      refresh:
        '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
      settings:
        '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
      plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
      minus: '<path d="M5 12h14"/>',
      "chevron-down": '<path d="m6 9 6 6 6-6"/>',
      "chevron-up": '<path d="m18 15-6-6-6 6"/>',
      "chevron-left": '<path d="m15 18-6-6 6-6"/>',
      "chevron-right": '<path d="m9 18 6-6-6-6"/>',
      copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
      download:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
      upload:
        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
      link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
      mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
      user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
      users:
        '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      calendar:
        '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      heart:
        '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
      home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
      folder:
        '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
      image:
        '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
      play: '<polygon points="6 3 20 12 6 21 6 3"/>',
      pause:
        '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
      trash:
        '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
      pencil:
        '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
      lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    };
    const inner = paths[name] || paths.info;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.6");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.classList.add("lucide");
    svg.innerHTML = inner;
    return svg;
  }

  function hydrateIcons() {
    document.querySelectorAll("[data-lucide]").forEach((node) => {
      if (!(node instanceof Element)) return;
      if (node.querySelector("svg.lucide")) return;
      const name = node.getAttribute("data-lucide") || "info";
      node.replaceChildren(createIconSvg(name));
    });
  }

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const link = target.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (href === "" || href.startsWith("#")) event.preventDefault();
  });

  bindTooltips();
  bindChartTooltips();
  hydrateIcons();
})();
`.trim();

}
