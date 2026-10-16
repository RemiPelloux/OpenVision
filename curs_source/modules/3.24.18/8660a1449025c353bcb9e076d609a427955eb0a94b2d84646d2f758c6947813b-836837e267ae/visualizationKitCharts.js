import { E } from "./tslib.es6.js";
var w4f, C4f;
export { C4f, w4f };
var __wakaru_T4f_initialized = false;
export function T4f() {
if (__wakaru_T4f_initialized) return;
__wakaru_T4f_initialized = true;
"use strict";
E(), w4f = `
/* Agent-facing chart styles; loaded last. */
.vis-chart-figure {
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  flex-direction: column;
  gap: 12px;
  margin: 0;
  padding: 0;
  background: transparent;
}

.vis-chart {
  display: block;
  overflow: hidden;
  width: 100%;
  height: clamp(280px, 48vw, 400px);
}

.vis-chart-text,
.vis-chart text {
  font-family: var(--font-sans);
  font-size: 12px;
  line-height: 16px;
  font-variant-numeric: tabular-nums;
}

.vis-chart .vis-axis text {
  fill: var(--foreground);
  font-size: 11px;
}

.vis-chart .vis-axis-label {
  fill: var(--muted-foreground);
  font-size: 12px;
}

.vis-chart .vis-axis line {
  fill: none;
  stroke: var(--border);
  stroke-width: 1px;
}

.vis-chart .vis-grid-x,
.vis-chart .vis-grid-y {
  fill: none;
  stroke: var(--border);
  stroke-width: 1px;
}

.vis-chart .vis-grid-y {
  stroke-dasharray: none;
}

.vis-chart :is(.vis-reference-guide, .vis-hover-guide) {
  fill: none;
  stroke: var(--muted-foreground);
  stroke-width: 1px;
}

.vis-chart .vis-reference-guide {
  stroke-dasharray: 4 3;
  opacity: 0.7;
}

.vis-chart .vis-hover-guide {
  stroke-dasharray: 2 3;
  opacity: 0.5;
}

.vis-chart .vis-axis .vis-domain {
  display: none;
}

.vis-chart .vis-mark:not([fill]):not(.vis-line) {
  fill: var(--tone, var(--foreground));
}

.vis-chart .vis-mark {
  stroke: none;
}

.vis-chart .vis-mark.vis-segment-gap {
  stroke: var(--background);
  stroke-width: 2px;
}

.vis-chart :is(line, path, polyline, circle, rect) {
  stroke-width: 1px;
}

.vis-chart line.vis-mark {
  fill: none;
}

/* A line has no enclosed area, so its stroke is the mark itself, not a
 * border; line.vis-mark keeps its tone stroke (dumbbell connectors, stored
 * fragments) while .vis-mark's stroke: none keeps filled shapes border-free. */
.vis-chart line.vis-mark:not([stroke]),
.vis-chart :is(line, path).vis-line:not([stroke]) {
  stroke: var(--tone, var(--foreground));
}

.vis-chart path.vis-mark.vis-line,
.vis-chart path.vis-line {
  fill: none;
}

.vis-chart :is(line, path).vis-data-series {
  stroke-width: 1.5px;
}

.vis-chart .vis-mark.vis-tone-secondary:not([fill]):not(.vis-line) {
  fill: var(--tone-secondary, var(--tone, var(--foreground)));
}

.vis-chart .vis-mark.vis-tone-tertiary:not([fill]):not(.vis-line) {
  fill: var(--tone-tertiary, var(--tone, var(--foreground)));
}

.vis-chart :is(line, path).vis-line.vis-tone-secondary:not([stroke]) {
  stroke: var(--tone-secondary, var(--tone, var(--foreground)));
}

.vis-chart :is(line, path).vis-line.vis-tone-tertiary:not([stroke]) {
  stroke: var(--tone-tertiary, var(--tone, var(--foreground)));
}

.vis-chart .vis-track {
  fill: var(--muted);
  stroke: none;
}

.vis-chart :is(line, path).vis-track {
  fill: none;
  stroke: var(--border);
  stroke-width: 1px;
}

.vis-chart .vis-selection-guide {
  fill: none;
  stroke: var(--muted-foreground);
  stroke-width: 1px;
  stroke-dasharray: 2 3;
  opacity: 0.5;
}

.vis-chart :is([data-chart-hover-guide], [data-chart-hover-marker]) {
  pointer-events: none;
}

.vis-chart .vis-label:not([fill]) {
  fill: var(--tone, var(--muted-foreground));
  font-size: 12px;
}

.vis-chart text.vis-stat-value {
  font-family: var(--font-mono);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  font-variant-numeric: tabular-nums;
  fill: var(--foreground);
}

.vis-chart :is(.vis-mark, .vis-label).vis-fg-60 {
  opacity: 0.6;
}

.vis-chart :is(.vis-mark, .vis-label).vis-fg-30 {
  opacity: 0.3;
}

.vis-chart .vis-fill-20:not(.vis-line) {
  fill: var(--tone, var(--foreground));
  fill-opacity: 0.2;
}

.vis-chart-meta {
  display: flex;
  width: 100%;
  min-width: 0;
  flex-direction: column;
  align-items: stretch;
  gap: 12px;
}

.vis-chart-meta-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  width: 100%;
  min-width: 0;
}

.vis-chart-meta-copy h3 {
  margin: 0;
  font-size: 15px;
  font-weight: var(--font-weight-medium);
  line-height: 24px;
  letter-spacing: 0;
}

.vis-chart-meta-copy > :is(span, small, p) {
  margin: 0;
  color: var(--muted-foreground);
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0;
}

.vis-chart-meta > h3 {
  flex: 1 0 100%;
  margin: 0;
}

.vis-chart-meta > h3 + :is(.vis-text-small, small, p) {
  flex: 1 1 200px;
  margin: 0;
}

.vis-chart-meta .vis-legend {
  width: 100%;
  margin-left: 0;
}

.vis-chart-meta + .vis-chart {
  margin-top: 12px;
}

.vis-column > .vis-chart-meta + .vis-chart {
  margin-top: 0;
}

.vis-chart-figure > .vis-chart-meta + .vis-chart {
  margin-top: 0;
}

.vis-section-stack > .vis-chart-meta + .vis-chart {
  margin-top: -8px;
}

.vis-chart + .vis-legend {
  margin-top: 16px;
}

.vis-column > .vis-chart + .vis-legend {
  margin-top: 4px;
}

.vis-section-stack > .vis-chart + .vis-legend {
  margin-top: -8px;
}

.vis-legend {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 8px 14px;
  max-width: 100%;
  min-width: 0;
}

.vis-legend-item,
.vis-legend > span {
  display: inline-flex;
  flex: none;
  align-items: center;
  gap: 6px;
  color: var(--muted-foreground);
  font-family: var(--font-sans);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  line-height: 18px;
}

button.vis-legend-item {
  appearance: none;
  padding: 0;
  border: 0;
  color: var(--muted-foreground);
  background: transparent;
  cursor: pointer;
}

button.vis-legend-item[aria-pressed="false"] {
  color: var(--tertiary-foreground);
}

button.vis-legend-item[aria-pressed="false"] .vis-swatch {
  opacity: 0.3;
}

button.vis-legend-item:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

.vis-swatch {
  display: block;
  width: 10px;
  height: 10px;
  flex: none;
  border-radius: 3px;
  color: inherit;
  background: var(--tone, var(--foreground));
  opacity: var(--tone-opacity, 1);
}

.vis-swatch.vis-fill-20 {
  background: var(--tone, var(--foreground));
  opacity: 0.2;
}

.vis-swatch.vis-tone-secondary {
  background: var(--tone-secondary, var(--tone, var(--foreground)));
}

.vis-swatch.vis-tone-tertiary {
  background: var(--tone-tertiary, var(--tone, var(--foreground)));
}

`, C4f = `
/**
 * Host chart helpers for agent D3 fragments.
 * Injected before the fragment so window.chart exists when agent scripts run.
 * Requires global d3 when calling frame() or band().
 */
(() => {
  const DEFAULT_MARGIN = { top: 16, right: 16, bottom: 48, left: 56 };
  const GRID_PAD = 12;
  const MIN_SIZE = 32;
  const BAND_PADDING = 0.2;
  const AXIS_LABEL_MARGIN = 80;
  const AXIS_TICK_MARGIN = 40;
  const BAR_MAX = 32;
  const BAR_GAP = 4;

  function resolveNode(target) {
    return target && typeof target.node === "function" ? target.node() : target;
  }

  function readSize(node) {
    node = resolveNode(node);
    if (!node || typeof node.getBoundingClientRect !== "function") {
      return { width: 0, height: 0 };
    }
    const width = Math.round(node.getBoundingClientRect().width);
    const height = Math.round(node.getBoundingClientRect().height);
    if (width < MIN_SIZE || height < MIN_SIZE) return { width: 0, height: 0 };
    return { width, height };
  }

  // Size for draw, gated on width only. A diagram container is empty until its
  // first paint, so it has a width but no height; gating on height would mean
  // draw never paints into it. Charts get their height from host CSS.
  function readDrawSize(node) {
    node = resolveNode(node);
    if (!node || typeof node.getBoundingClientRect !== "function") {
      return { width: 0, height: 0 };
    }
    const rect = node.getBoundingClientRect();
    const width = Math.round(rect.width);
    if (width < MIN_SIZE) return { width: 0, height: 0 };
    return { width, height: Math.round(rect.height) };
  }

  function requireD3(method) {
    if (typeof d3 === "undefined") {
      throw new Error(\`chart.\${method} requires d3\`);
    }
  }

  function band(domain, range) {
    requireD3("band");
    const scale = d3.scaleBand().domain(domain).padding(BAND_PADDING);
    if (range) scale.range(range);
    return scale;
  }

  function labelMargin(labels, options) {
    const opts = options || {};
    const min = opts.min ?? DEFAULT_MARGIN.left;
    const max = opts.max ?? 200;
    const charWidth = opts.charWidth ?? 7;
    const padding = opts.padding ?? 24;
    const longest = Array.from(labels || []).reduce(
      (length, label) => Math.max(length, String(label).length),
      0,
    );
    return Math.min(max, Math.max(min, longest * charWidth + padding));
  }

  function isBand(scale) {
    return typeof scale.bandwidth === "function";
  }

  function gridCenters(scale) {
    if (isBand(scale)) {
      return scale.domain().map((value) => (scale(value) ?? 0) + scale.bandwidth() / 2);
    }
    if (typeof scale.ticks === "function") {
      return scale.ticks();
    }
    return scale.domain();
  }

  // Grid ticks must match the axis: explicit values win, arrays passed as
  // the count option are values, and only then does the scale generate them.
  function gridDomainValues(scale, options, prefix) {
    const tickValues = options[\`\${prefix}TickValues\`];
    if (Array.isArray(tickValues)) return tickValues;
    const ticks = options[\`\${prefix}Ticks\`];
    if (Array.isArray(ticks)) return ticks;
    if (typeof scale.ticks === "function" && !isBand(scale)) return scale.ticks(ticks);
    return null;
  }

  function applyAxisOptions(axis, options, prefix) {
    const ticks = options[\`\${prefix}Ticks\`];
    const tickValues = options[\`\${prefix}TickValues\`];
    const format = options[\`\${prefix}Format\`] ?? options[\`\${prefix}TickFormat\`];
    // A tick array passed as the count option means explicit tick values.
    if (Array.isArray(ticks)) axis.tickValues(ticks);
    else if (ticks != null) axis.ticks(ticks);
    if (tickValues != null) axis.tickValues(tickValues);
    if (format != null) axis.tickFormat(format);
    const customize = options[\`\${prefix}Axis\`];
    if (typeof customize === "function") customize(axis);
    return axis;
  }

  // D3's axis generator writes class="domain"; alias it for the kit CSS.
  function markAxisDomain(axis) {
    axis.select("path.domain").classed("vis-domain", true);
  }

  function frame(node, options) {
    requireD3("frame");
    node = resolveNode(node);
    const opts = options || {};
    const { width, height } = readSize(node);
    if (!width) return null;

    // One-dimensional plots (beeswarm, strip) disable an axis and skip its
    // scale; substitute a stub so positioning helpers still work.
    let x = opts.x ?? opts.xScale;
    let y = opts.y ?? opts.yScale;
    const xStubbed = !x && opts.xAxis === false;
    const yStubbed = !y && opts.yAxis === false;
    if (xStubbed) x = d3.scaleLinear();
    if (yStubbed) y = d3.scaleLinear();
    if (!x || !y) throw new Error("chart.frame requires x and y scales");

    const authoredMargin = opts.margin || {};
    const margin = Object.assign({}, DEFAULT_MARGIN, authoredMargin);
    if (opts.xAxis === false && !opts.xLabel && authoredMargin.bottom == null) {
      margin.bottom = DEFAULT_MARGIN.top;
    }
    if (opts.yAxis === false && !opts.yLabel && authoredMargin.left == null) {
      margin.left = DEFAULT_MARGIN.right;
    }
    if (opts.xLabel) margin.bottom = Math.max(margin.bottom, AXIS_LABEL_MARGIN);
    if (opts.yLabel) margin.left = Math.max(margin.left, AXIS_LABEL_MARGIN);
    // Host tick text extends ~35px past the plot edge; smaller margins clip.
    if (opts.xAxis !== false) margin.bottom = Math.max(margin.bottom, AXIS_TICK_MARGIN);
    if (opts.yAxis !== false) margin.left = Math.max(margin.left, AXIS_TICK_MARGIN);
    if (opts.yAxis !== false && isBand(y)) {
      const probe = d3.select(node).append("g").attr("class", "vis-axis");
      const text = probe.append("text");
      const format = opts.yFormat ?? opts.yTickFormat ?? String;
      const widest = d3.max(y.domain(), (label) => text.text(format(label)).node().getComputedTextLength()) ?? 0;
      probe.remove();
      // 24px matches the y axis tickPadding below, 4px keeps labels off the svg edge, and a y title takes 24px more.
      margin.left = Math.max(margin.left, Math.min(Math.ceil(widest) + (opts.yLabel ? 52 : 28), width / 2));
    }
    x.range([margin.left, width - margin.right]);
    y.range(
      isBand(y) ? [margin.top, height - margin.bottom] : [height - margin.bottom, margin.top],
    );

    const svg = d3.select(node);
    const x0 = margin.left;
    const x1 = width - margin.right;
    const y0 = margin.top;
    const y1 = height - margin.bottom;
    const drawGrid = opts.grid !== false;
    // Band axes carry their own visual rhythm; default their gridlines off.
    // Horizontal plots (linear x, band y) get vertical value grids by default,
    // matching yGrid on vertical plots. Two-dimensional plots stay yGrid-only.
    const drawXGrid =
      drawGrid &&
      !xStubbed &&
      (opts.xGrid === undefined ? !isBand(x) && isBand(y) : opts.xGrid !== false);
    const drawYGrid =
      drawGrid && !yStubbed && (opts.yGrid === undefined ? !isBand(y) : opts.yGrid !== false);

    if (drawYGrid) {
      const yValues = gridDomainValues(y, opts, "y");
      for (const value of yValues ?? gridCenters(y)) {
        const py = isBand(y) ? (yValues ? (y(value) ?? 0) + y.bandwidth() / 2 : value) : y(value);
        svg
          .append("line")
          .attr("class", "vis-grid-y")
          .attr("x1", x0 - GRID_PAD)
          .attr("x2", x1 + GRID_PAD)
          .attr("y1", py)
          .attr("y2", py);
      }

      if (isBand(y)) {
        svg
          .append("line")
          .attr("class", "vis-grid-y")
          .attr("x1", x0 - GRID_PAD)
          .attr("x2", x1 + GRID_PAD)
          .attr("y1", y1)
          .attr("y2", y1);
      }
    }

    if (drawXGrid) {
      const xValues = gridDomainValues(x, opts, "x");
      for (const value of xValues ?? gridCenters(x)) {
        const px = isBand(x) ? (xValues ? (x(value) ?? 0) + x.bandwidth() / 2 : value) : x(value);
        svg
          .append("line")
          .attr("class", "vis-grid-x")
          .attr("x1", px)
          .attr("x2", px)
          .attr("y1", y0 - GRID_PAD)
          .attr("y2", y1 + GRID_PAD);
      }
    }

    let xAxis = null;
    let yAxis = null;
    if (opts.xAxis !== false) {
      const xAxisGenerator = applyAxisOptions(
        d3.axisBottom(x).tickSize(0).tickPadding(24),
        opts,
        "x",
      );
      xAxis = svg
        .append("g")
        .attr("class", "vis-axis vis-x")
        .attr("transform", \`translate(0,\${y1})\`)
        .call(xAxisGenerator);
      markAxisDomain(xAxis);
    }
    if (opts.yAxis !== false) {
      const yAxisGenerator = applyAxisOptions(
        d3.axisLeft(y).tickSize(0).tickPadding(24),
        opts,
        "y",
      );
      yAxis = svg
        .append("g")
        .attr("class", "vis-axis vis-y")
        .attr("transform", \`translate(\${x0},0)\`)
        .call(yAxisGenerator);
      markAxisDomain(yAxis);
    }
    if (opts.xLabel) {
      svg
        .append("text")
        .attr("class", "vis-axis-label vis-x")
        .attr("x", (x0 + x1) / 2)
        .attr("y", height - 8)
        .attr("text-anchor", "middle")
        .text(opts.xLabel);
    }
    if (opts.yLabel) {
      svg
        .append("text")
        .attr("class", "vis-axis-label vis-y")
        .attr("x", -(y0 + y1) / 2)
        .attr("y", 12)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .text(opts.yLabel);
    }

    const bounds = { x0, x1, y0, y1 };
    return { width, height, margin, x, y, x0, x1, y0, y1, bounds, xAxis, yAxis };
  }

  function draw(node, paint) {
    node = resolveNode(node);
    let lastW = 0;
    let frame = 0;
    const run = () => {
      const box = readDrawSize(node);
      // Repaint on width change only. The first paint into an empty container
      // gives it a height, which would otherwise trigger a second, identical paint.
      if (!box.width || box.width === lastW) return;
      lastW = box.width;
      paint(box);
    };
    const schedule = () => {
      if (frame) return;
      if (typeof requestAnimationFrame !== "function") {
        run();
        return;
      }
      frame = requestAnimationFrame(() => {
        frame = 0;
        run();
      });
    };
    run();
    if (typeof ResizeObserver === "function") {
      new ResizeObserver(schedule).observe(node);
    }
    return () => {
      lastW = 0;
      schedule();
    };
  }

  // Only these members form the supported API; other helpers and constants stay internal.
  window.chart = {
    draw,
    frame,
    band,
    labelMargin,
    DEFAULT_MARGIN,
    GRID_PAD,
    BAND_PADDING,
    BAR_MAX,
    BAR_GAP,
  };
})();
`.trim();

}
