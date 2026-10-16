var zV=`/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties;
.x-commerce *, .x-commerce, .x-commerce ::after, .x-commerce::after, .x-commerce ::before, .x-commerce::before, .x-commerce ::backdrop, .x-commerce::backdrop, .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0 solid;
}
.x-commerce hr, hr.x-commerce {
  height: 0;
  color: inherit;
  border-top-width: 1px;
}
.x-commerce abbr:where([title]), abbr.x-commerce:where([title]) {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}
.x-commerce h1, h1.x-commerce, .x-commerce h2, h2.x-commerce, .x-commerce h3, h3.x-commerce, .x-commerce h4, h4.x-commerce, .x-commerce h5, h5.x-commerce, .x-commerce h6, h6.x-commerce {
  font-size: inherit;
  font-weight: inherit;
}
.x-commerce a, a.x-commerce {
  color: inherit;
  -webkit-text-decoration: inherit;
  text-decoration: inherit;
}
.x-commerce b, b.x-commerce, .x-commerce strong, strong.x-commerce {
  font-weight: bolder;
}
.x-commerce code, code.x-commerce, .x-commerce kbd, kbd.x-commerce, .x-commerce samp, samp.x-commerce, .x-commerce pre, pre.x-commerce {
  font-family: var(--default-mono-font-family, var(--font-mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace));
  font-feature-settings: var(--default-mono-font-feature-settings, normal);
  font-variation-settings: var(--default-mono-font-variation-settings, normal);
  font-size: 1em;
}
.x-commerce small, small.x-commerce {
  font-size: 80%;
}
.x-commerce sub, sub.x-commerce, .x-commerce sup, sup.x-commerce {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
.x-commerce sub, sub.x-commerce {
  bottom: -0.25em;
}
.x-commerce sup, sup.x-commerce {
  top: -0.5em;
}
.x-commerce table, table.x-commerce {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}
.x-commerce :-moz-focusring:where(:not(iframe)), .x-commerce:-moz-focusring:where(:not(iframe)) {
  outline: auto;
}
.x-commerce progress, progress.x-commerce {
  vertical-align: baseline;
}
.x-commerce summary, summary.x-commerce {
  display: list-item;
}
.x-commerce ol, ol.x-commerce, .x-commerce ul, ul.x-commerce, .x-commerce menu, menu.x-commerce {
  list-style: none;
}
.x-commerce img, img.x-commerce, .x-commerce svg, svg.x-commerce, .x-commerce video, video.x-commerce, .x-commerce canvas, canvas.x-commerce, .x-commerce audio, audio.x-commerce, .x-commerce iframe, iframe.x-commerce, .x-commerce embed, embed.x-commerce, .x-commerce object, object.x-commerce {
  display: block;
  vertical-align: middle;
}
.x-commerce img, img.x-commerce, .x-commerce video, video.x-commerce {
  max-width: 100%;
  height: auto;
}
.x-commerce button, button.x-commerce, .x-commerce input, input.x-commerce, .x-commerce select, select.x-commerce, .x-commerce optgroup, optgroup.x-commerce, .x-commerce textarea, textarea.x-commerce, .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  font: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  letter-spacing: inherit;
  color: inherit;
  border-radius: 0;
  background-color: transparent;
  opacity: 1;
}
.x-commerce :where(select:is([multiple], [size])) optgroup, .x-commerce:where(select:is([multiple], [size])) optgroup {
  font-weight: bolder;
}
.x-commerce :where(select:is([multiple], [size])) optgroup option, .x-commerce:where(select:is([multiple], [size])) optgroup option {
  padding-inline-start: 20px;
}
.x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  margin-inline-end: 4px;
}
.x-commerce ::placeholder, .x-commerce::placeholder {
  opacity: 1;
}
@supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
  .x-commerce ::placeholder, .x-commerce::placeholder {
    color: currentcolor;
    @supports (color: color-mix(in lab, red, red)) {
      color: color-mix(in oklab, currentcolor 50%, transparent);
    }
  }
}
.x-commerce textarea, textarea.x-commerce {
  resize: vertical;
}
.x-commerce ::-webkit-search-decoration, .x-commerce::-webkit-search-decoration {
  -webkit-appearance: none;
}
.x-commerce ::-webkit-date-and-time-value, .x-commerce::-webkit-date-and-time-value {
  min-height: 1lh;
  text-align: inherit;
}
.x-commerce ::-webkit-datetime-edit, .x-commerce::-webkit-datetime-edit {
  display: inline-flex;
}
.x-commerce ::-webkit-datetime-edit-fields-wrapper, .x-commerce::-webkit-datetime-edit-fields-wrapper {
  padding: 0;
}
.x-commerce ::-webkit-datetime-edit, .x-commerce::-webkit-datetime-edit, .x-commerce ::-webkit-datetime-edit-year-field, .x-commerce::-webkit-datetime-edit-year-field, .x-commerce ::-webkit-datetime-edit-month-field, .x-commerce::-webkit-datetime-edit-month-field, .x-commerce ::-webkit-datetime-edit-day-field, .x-commerce::-webkit-datetime-edit-day-field, .x-commerce ::-webkit-datetime-edit-hour-field, .x-commerce::-webkit-datetime-edit-hour-field, .x-commerce ::-webkit-datetime-edit-minute-field, .x-commerce::-webkit-datetime-edit-minute-field, .x-commerce ::-webkit-datetime-edit-second-field, .x-commerce::-webkit-datetime-edit-second-field, .x-commerce ::-webkit-datetime-edit-millisecond-field, .x-commerce::-webkit-datetime-edit-millisecond-field, .x-commerce ::-webkit-datetime-edit-meridiem-field, .x-commerce::-webkit-datetime-edit-meridiem-field {
  padding-block: 0;
}
.x-commerce ::-webkit-calendar-picker-indicator, .x-commerce::-webkit-calendar-picker-indicator {
  line-height: 1;
}
.x-commerce :-moz-ui-invalid, .x-commerce:-moz-ui-invalid {
  box-shadow: none;
}
.x-commerce button, button.x-commerce, .x-commerce input:where([type='button'], [type='reset'], [type='submit']), input.x-commerce:where([type='button'], [type='reset'], [type='submit']), .x-commerce ::file-selector-button, .x-commerce::file-selector-button {
  appearance: button;
}
.x-commerce ::-webkit-inner-spin-button, .x-commerce::-webkit-inner-spin-button, .x-commerce ::-webkit-outer-spin-button, .x-commerce::-webkit-outer-spin-button {
  height: auto;
}
.x-commerce [hidden]:where(:not([hidden='until-found'])), .x-commerce[hidden]:where(:not([hidden='until-found'])) {
  display: none !important;
}
.x-commerce .\\@container\\/choice, .x-commerce.\\@container\\/choice {
  container-type: inline-size;
  container-name: choice;
}
.x-commerce .\\@container\\/grid, .x-commerce.\\@container\\/grid {
  container-type: inline-size;
  container-name: grid;
}
.x-commerce .\\@container\\/plan-title, .x-commerce.\\@container\\/plan-title {
  container-type: inline-size;
  container-name: plan-title;
}
.x-commerce .\\@container\\/review, .x-commerce.\\@container\\/review {
  container-type: inline-size;
  container-name: review;
}
.x-commerce .\\@container\\/single, .x-commerce.\\@container\\/single {
  container-type: inline-size;
  container-name: single;
}
.x-commerce .\\@container, .x-commerce.\\@container {
  container-type: inline-size;
}
.x-commerce .pointer-events-auto, .x-commerce.pointer-events-auto {
  pointer-events: auto;
}
.x-commerce .pointer-events-none, .x-commerce.pointer-events-none {
  pointer-events: none;
}
.x-commerce .collapse, .x-commerce.collapse {
  visibility: collapse;
}
.x-commerce .invisible, .x-commerce.invisible {
  visibility: hidden;
}
.x-commerce .visible, .x-commerce.visible {
  visibility: visible;
}
.x-commerce .sr-only, .x-commerce.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
}
.x-commerce .x-button, .x-commerce.x-button {
  position: relative;
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: calc(var(--spacing, 0.25rem) * 2);
  border-radius: 9999px;
  --tw-font-weight: var(--font-weight-medium, 500);
  font-weight: var(--font-weight-medium, 500);
  -webkit-user-select: none;
  user-select: none;
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .x-commerce &:focus-visible, .x-commerce&:focus-visible {
    outline-offset: 2px;
  }
  .x-commerce &:disabled, .x-commerce&:disabled {
    cursor: not-allowed;
  }
  .x-commerce &:disabled, .x-commerce&:disabled {
    opacity: var(--x-btn-disabled-opacity,0.7);
  }
  .x-commerce &[aria-disabled="true"], .x-commerce&[aria-disabled="true"] {
    cursor: not-allowed;
  }
  .x-commerce &[aria-disabled="true"], .x-commerce&[aria-disabled="true"] {
    opacity: var(--x-btn-disabled-opacity,0.7);
  }
}
.x-commerce .absolute, .x-commerce.absolute {
  position: absolute;
}
.x-commerce .fixed, .x-commerce.fixed {
  position: fixed;
}
.x-commerce .relative, .x-commerce.relative {
  position: relative;
}
.x-commerce .static, .x-commerce.static {
  position: static;
}
.x-commerce .sticky, .x-commerce.sticky {
  position: sticky;
}
.x-commerce .inset-0, .x-commerce.inset-0 {
  inset: 0px;
}
.x-commerce .inset-x-0, .x-commerce.inset-x-0 {
  inset-inline: 0px;
}
.x-commerce .inset-x-\\[calc\\(var\\(--x-plan-tabs-page-x\\,0px\\)\\*-1\\)\\],.x-commerce.inset-x-\\[calc\\(var\\(--x-plan-tabs-page-x\\,0px\\)\\*-1\\)\\] {
  inset-inline: calc(var(--x-plan-tabs-page-x,0px) * -1);
}
.x-commerce .inset-y-0, .x-commerce.inset-y-0 {
  inset-block: 0px;
}
.x-commerce .inset-y-0\\.5, .x-commerce.inset-y-0\\.5 {
  inset-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .start-0, .x-commerce.start-0 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 0);
}
.x-commerce .start-0\\.5, .x-commerce.start-0\\.5 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .start-1, .x-commerce.start-1 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 1);
}
.x-commerce .start-2, .x-commerce.start-2 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .start-3, .x-commerce.start-3 {
  inset-inline-start: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .start-\\[calc\\(var\\(--x-safe-start\\)\\+0\\.75rem\\)\\], .x-commerce.start-\\[calc\\(var\\(--x-safe-start\\)\\+0\\.75rem\\)\\] {
  inset-inline-start: calc(var(--x-safe-start) + 0.75rem);
}
.x-commerce .start-\\[calc\\(var\\(--x-safe-start\\)\\+1rem\\)\\], .x-commerce.start-\\[calc\\(var\\(--x-safe-start\\)\\+1rem\\)\\] {
  inset-inline-start: calc(var(--x-safe-start) + 1rem);
}
.x-commerce .end-2, .x-commerce.end-2 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .end-3, .x-commerce.end-3 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .end-4, .x-commerce.end-4 {
  inset-inline-end: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .end-\\[4\\%\\], .x-commerce.end-\\[4\\%\\] {
  inset-inline-end: 4%;
}
.x-commerce .top-0, .x-commerce.top-0 {
  top: 0px;
}
.x-commerce .top-1, .x-commerce.top-1 {
  top: var(--spacing, 0.25rem);
}
.x-commerce .top-1\\/2, .x-commerce.top-1\\/2 {
  top: calc(1 / 2 * 100%);
}
.x-commerce .top-2, .x-commerce.top-2 {
  top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .top-3, .x-commerce.top-3 {
  top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .top-4, .x-commerce.top-4 {
  top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .top-6, .x-commerce.top-6 {
  top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .top-10, .x-commerce.top-10 {
  top: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .top-14, .x-commerce.top-14 {
  top: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .top-\\[-7\\.14\\%\\], .x-commerce.top-\\[-7\\.14\\%\\] {
  top: -7.14%;
}
.x-commerce .top-\\[-32px\\], .x-commerce.top-\\[-32px\\] {
  top: -32px;
}
.x-commerce .top-\\[7\\.64px\\], .x-commerce.top-\\[7\\.64px\\] {
  top: 7.64px;
}
.x-commerce .top-\\[9\\.43\\%\\], .x-commerce.top-\\[9\\.43\\%\\] {
  top: 9.43%;
}
.x-commerce .top-\\[10px\\], .x-commerce.top-\\[10px\\] {
  top: 10px;
}
.x-commerce .top-\\[13\\%\\], .x-commerce.top-\\[13\\%\\] {
  top: 13%;
}
.x-commerce .top-\\[13\\.93\\%\\], .x-commerce.top-\\[13\\.93\\%\\] {
  top: 13.93%;
}
.x-commerce .top-\\[14\\.44\\%\\], .x-commerce.top-\\[14\\.44\\%\\] {
  top: 14.44%;
}
.x-commerce .top-\\[24\\.64\\%\\], .x-commerce.top-\\[24\\.64\\%\\] {
  top: 24.64%;
}
.x-commerce .top-\\[30\\.36\\%\\], .x-commerce.top-\\[30\\.36\\%\\] {
  top: 30.36%;
}
.x-commerce .top-\\[37\\.23\\%\\], .x-commerce.top-\\[37\\.23\\%\\] {
  top: 37.23%;
}
.x-commerce .top-\\[50\\.54\\%\\], .x-commerce.top-\\[50\\.54\\%\\] {
  top: 50.54%;
}
.x-commerce .top-\\[59\\.11\\%\\], .x-commerce.top-\\[59\\.11\\%\\] {
  top: 59.11%;
}
.x-commerce .top-\\[63\\.68\\%\\], .x-commerce.top-\\[63\\.68\\%\\] {
  top: 63.68%;
}
.x-commerce .top-\\[78\\.23\\%\\], .x-commerce.top-\\[78\\.23\\%\\] {
  top: 78.23%;
}
.x-commerce .top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+0\\.75rem\\)\\],.x-commerce.top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+0\\.75rem\\)\\] {
  top: calc(env(safe-area-inset-top,0px) + 0.75rem);
}
.x-commerce .top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+1rem\\)\\],.x-commerce.top-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+1rem\\)\\] {
  top: calc(env(safe-area-inset-top,0px) + 1rem);
}
.x-commerce .right-0, .x-commerce.right-0 {
  right: 0px;
}
.x-commerce .right-2, .x-commerce.right-2 {
  right: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .right-3, .x-commerce.right-3 {
  right: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .bottom-0, .x-commerce.bottom-0 {
  bottom: 0px;
}
.x-commerce .bottom-1, .x-commerce.bottom-1 {
  bottom: var(--spacing, 0.25rem);
}
.x-commerce .bottom-2, .x-commerce.bottom-2 {
  bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .bottom-\\[calc\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\*-1\\)\\],.x-commerce.bottom-\\[calc\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\*-1\\)\\] {
  bottom: calc(var(--x-plan-tabs-page-bottom,0px) * -1);
}
.x-commerce .left-0, .x-commerce.left-0 {
  left: 0px;
}
.x-commerce .left-1\\/2, .x-commerce.left-1\\/2 {
  left: calc(1 / 2 * 100%);
}
.x-commerce .left-2, .x-commerce.left-2 {
  left: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .left-4, .x-commerce.left-4 {
  left: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .left-10, .x-commerce.left-10 {
  left: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .left-\\[-4\\.79\\%\\], .x-commerce.left-\\[-4\\.79\\%\\] {
  left: -4.79%;
}
.x-commerce .left-\\[-60px\\], .x-commerce.left-\\[-60px\\] {
  left: -60px;
}
.x-commerce .left-\\[2\\.34\\%\\], .x-commerce.left-\\[2\\.34\\%\\] {
  left: 2.34%;
}
.x-commerce .left-\\[3\\.21\\%\\], .x-commerce.left-\\[3\\.21\\%\\] {
  left: 3.21%;
}
.x-commerce .left-\\[5\\.54\\%\\], .x-commerce.left-\\[5\\.54\\%\\] {
  left: 5.54%;
}
.x-commerce .left-\\[6\\.716px\\], .x-commerce.left-\\[6\\.716px\\] {
  left: 6.716px;
}
.x-commerce .left-\\[9\\.71\\%\\], .x-commerce.left-\\[9\\.71\\%\\] {
  left: 9.71%;
}
.x-commerce .left-\\[9px\\], .x-commerce.left-\\[9px\\] {
  left: 9px;
}
.x-commerce .left-\\[13\\.41\\%\\], .x-commerce.left-\\[13\\.41\\%\\] {
  left: 13.41%;
}
.x-commerce .left-\\[13\\.68\\%\\], .x-commerce.left-\\[13\\.68\\%\\] {
  left: 13.68%;
}
.x-commerce .left-\\[22\\.34\\%\\], .x-commerce.left-\\[22\\.34\\%\\] {
  left: 22.34%;
}
.x-commerce .left-\\[22\\.68\\%\\], .x-commerce.left-\\[22\\.68\\%\\] {
  left: 22.68%;
}
.x-commerce .left-\\[25\\.01\\%\\], .x-commerce.left-\\[25\\.01\\%\\] {
  left: 25.01%;
}
.x-commerce .left-\\[35px\\], .x-commerce.left-\\[35px\\] {
  left: 35px;
}
.x-commerce .left-\\[58\\.53\\%\\], .x-commerce.left-\\[58\\.53\\%\\] {
  left: 58.53%;
}
.x-commerce .left-\\[calc\\(50\\%-12px\\)\\], .x-commerce.left-\\[calc\\(50\\%-12px\\)\\] {
  left: calc(50% - 12px);
}
.x-commerce .left-\\[calc\\(50\\%-52px\\)\\], .x-commerce.left-\\[calc\\(50\\%-52px\\)\\] {
  left: calc(50% - 52px);
}
.x-commerce .isolate, .x-commerce.isolate {
  isolation: isolate;
}
.x-commerce .-z-10, .x-commerce.-z-10 {
  z-index: calc(10 * -1);
}
.x-commerce .z-5, .x-commerce.z-5 {
  z-index: 5;
}
.x-commerce .z-10, .x-commerce.z-10 {
  z-index: 10;
}
.x-commerce .z-20, .x-commerce.z-20 {
  z-index: 20;
}
.x-commerce .z-50, .x-commerce.z-50 {
  z-index: 50;
}
.x-commerce .z-\\[70\\], .x-commerce.z-\\[70\\] {
  z-index: 70;
}
.x-commerce .z-\\[9999\\], .x-commerce.z-\\[9999\\] {
  z-index: 9999;
}
.x-commerce .col-span-2, .x-commerce.col-span-2 {
  grid-column: span 2 / span 2;
}
.x-commerce .col-start-1, .x-commerce.col-start-1 {
  grid-column-start: 1;
}
.x-commerce .col-start-2, .x-commerce.col-start-2 {
  grid-column-start: 2;
}
.x-commerce .row-start-1, .x-commerce.row-start-1 {
  grid-row-start: 1;
}
.x-commerce .container, .x-commerce.container {
  width: 100%;
  @media (width >= 517px) {
    max-width: 517px;
  }
  @media (width >= 774px) {
    max-width: 774px;
  }
  @media (width >= 1117px) {
    max-width: 1117px;
  }
  @media (width >= 1150px) {
    max-width: 1150px;
  }
  @media (width >= 40rem) {
    max-width: 40rem;
  }
  @media (width >= 48rem) {
    max-width: 48rem;
  }
  @media (width >= 64rem) {
    max-width: 64rem;
  }
  @media (width >= 80rem) {
    max-width: 80rem;
  }
  @media (width >= 96rem) {
    max-width: 96rem;
  }
}
.x-commerce .-m-\\(--x-modal-pad\\), .x-commerce.-m-\\(--x-modal-pad\\) {
  margin: calc(var(--x-modal-pad) * -1);
}
.x-commerce .-m-3, .x-commerce.-m-3 {
  margin: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .m-0, .x-commerce.m-0 {
  margin: 0px;
}
.x-commerce .-mx-\\(--x-modal-pad\\), .x-commerce.-mx-\\(--x-modal-pad\\) {
  margin-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .-mx-2, .x-commerce.-mx-2 {
  margin-inline: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mx-3, .x-commerce.-mx-3 {
  margin-inline: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mx-6, .x-commerce.-mx-6 {
  margin-inline: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .mx-0\\.5, .x-commerce.mx-0\\.5 {
  margin-inline: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .mx-1\\.5, .x-commerce.mx-1\\.5 {
  margin-inline: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .mx-2, .x-commerce.mx-2 {
  margin-inline: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mx-3, .x-commerce.mx-3 {
  margin-inline: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .mx-\\[calc\\(var\\(--x-commerce-gutter\\,0px\\)\\*-1\\)\\],.x-commerce.mx-\\[calc\\(var\\(--x-commerce-gutter\\,0px\\)\\*-1\\)\\] {
  margin-inline: calc(var(--x-commerce-gutter,0px) * -1);
}
.x-commerce .mx-auto, .x-commerce.mx-auto {
  margin-inline: auto;
}
.x-commerce .-my-\\(--x-number-flow-bleed\\), .x-commerce.-my-\\(--x-number-flow-bleed\\) {
  margin-block: calc(var(--x-number-flow-bleed) * -1);
}
.x-commerce .-my-2, .x-commerce.-my-2 {
  margin-block: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-my-4, .x-commerce.-my-4 {
  margin-block: calc(var(--spacing, 0.25rem) * -4);
}
.x-commerce .-my-\\[7px\\], .x-commerce.-my-\\[7px\\] {
  margin-block: calc(7px * -1);
}
.x-commerce .my-0, .x-commerce.my-0 {
  margin-block: 0px;
}
.x-commerce .my-0\\.5, .x-commerce.my-0\\.5 {
  margin-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .my-1, .x-commerce.my-1 {
  margin-block: var(--spacing, 0.25rem);
}
.x-commerce .my-2, .x-commerce.my-2 {
  margin-block: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .my-8, .x-commerce.my-8 {
  margin-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .my-auto, .x-commerce.my-auto {
  margin-block: auto;
}
.x-commerce .-ms-1, .x-commerce.-ms-1 {
  margin-inline-start: calc(var(--spacing, 0.25rem) * -1);
}
.x-commerce .-ms-2, .x-commerce.-ms-2 {
  margin-inline-start: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-ms-\\[9px\\], .x-commerce.-ms-\\[9px\\] {
  margin-inline-start: calc(9px * -1);
}
.x-commerce .ms-1, .x-commerce.ms-1 {
  margin-inline-start: var(--spacing, 0.25rem);
}
.x-commerce .ms-auto, .x-commerce.ms-auto {
  margin-inline-start: auto;
}
.x-commerce .-me-1, .x-commerce.-me-1 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -1);
}
.x-commerce .-me-2, .x-commerce.-me-2 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-me-2\\.5, .x-commerce.-me-2\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * -2.5);
}
.x-commerce .-me-\\[9px\\], .x-commerce.-me-\\[9px\\] {
  margin-inline-end: calc(9px * -1);
}
.x-commerce .me-0\\.5, .x-commerce.me-0\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .me-1, .x-commerce.me-1 {
  margin-inline-end: var(--spacing, 0.25rem);
}
.x-commerce .me-1\\.5, .x-commerce.me-1\\.5 {
  margin-inline-end: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .me-auto, .x-commerce.me-auto {
  margin-inline-end: auto;
}
.x-commerce .-mt-2, .x-commerce.-mt-2 {
  margin-top: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mt-3, .x-commerce.-mt-3 {
  margin-top: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mt-4, .x-commerce.-mt-4 {
  margin-top: calc(var(--spacing, 0.25rem) * -4);
}
.x-commerce .mt-0\\.5, .x-commerce.mt-0\\.5 {
  margin-top: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .mt-1, .x-commerce.mt-1 {
  margin-top: var(--spacing, 0.25rem);
}
.x-commerce .mt-2, .x-commerce.mt-2 {
  margin-top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mt-3, .x-commerce.mt-3 {
  margin-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .mt-4, .x-commerce.mt-4 {
  margin-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .mt-5, .x-commerce.mt-5 {
  margin-top: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .mt-6, .x-commerce.mt-6 {
  margin-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .mt-8, .x-commerce.mt-8 {
  margin-top: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .mt-auto, .x-commerce.mt-auto {
  margin-top: auto;
}
.x-commerce .mt-px, .x-commerce.mt-px {
  margin-top: 1px;
}
.x-commerce .-mb-\\(--x-plan-tabs-page-bottom\\,0px\\),.x-commerce.-mb-\\(--x-plan-tabs-page-bottom\\,0px\\) {
  margin-bottom: calc(var(--x-plan-tabs-page-bottom,0px) * -1);
}
.x-commerce .-mb-2, .x-commerce.-mb-2 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -2);
}
.x-commerce .-mb-3, .x-commerce.-mb-3 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .-mb-6, .x-commerce.-mb-6 {
  margin-bottom: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .-mb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\],.x-commerce.-mb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\] {
  margin-bottom: calc(max(1rem, env(safe-area-inset-bottom,0px)) * -1);
}
.x-commerce .-mb-px, .x-commerce.-mb-px {
  margin-bottom: -1px;
}
.x-commerce .mb-1, .x-commerce.mb-1 {
  margin-bottom: var(--spacing, 0.25rem);
}
.x-commerce .mb-2, .x-commerce.mb-2 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .mb-4, .x-commerce.mb-4 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .mb-6, .x-commerce.mb-6 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .mb-7, .x-commerce.mb-7 {
  margin-bottom: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .box-content, .x-commerce.box-content {
  box-sizing: content-box;
}
.x-commerce .scrollbar-hide, .x-commerce.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  .x-commerce &::-webkit-scrollbar, .x-commerce&::-webkit-scrollbar {
    display: none;
  }
}
.x-commerce .x-button-slot, .x-commerce.x-button-slot {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}
.x-commerce .line-clamp-1, .x-commerce.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.x-commerce .line-clamp-2, .x-commerce.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.x-commerce .line-clamp-3, .x-commerce.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.x-commerce .line-clamp-4, .x-commerce.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.x-commerce .line-clamp-5, .x-commerce.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
}
.x-commerce .block, .x-commerce.block {
  display: block;
}
.x-commerce .contents, .x-commerce.contents {
  display: contents;
}
.x-commerce .flex, .x-commerce.flex {
  display: flex;
}
.x-commerce .grid, .x-commerce.grid {
  display: grid;
}
.x-commerce .hidden, .x-commerce.hidden {
  display: none;
}
.x-commerce .inline, .x-commerce.inline {
  display: inline;
}
.x-commerce .inline-block, .x-commerce.inline-block {
  display: inline-block;
}
.x-commerce .inline-flex, .x-commerce.inline-flex {
  display: inline-flex;
}
.x-commerce .inline-grid, .x-commerce.inline-grid {
  display: inline-grid;
}
.x-commerce .table, .x-commerce.table {
  display: table;
}
.x-commerce .\\[field-sizing\\:content\\], .x-commerce.\\[field-sizing\\:content\\] {
  field-sizing: content;
}
.x-commerce .aspect-\\[61\\/57\\], .x-commerce.aspect-\\[61\\/57\\] {
  aspect-ratio: 61/57;
}
.x-commerce .aspect-\\[900\\/490\\], .x-commerce.aspect-\\[900\\/490\\] {
  aspect-ratio: 900/490;
}
.x-commerce .aspect-square, .x-commerce.aspect-square {
  aspect-ratio: 1 / 1;
}
.x-commerce .aspect-video, .x-commerce.aspect-video {
  aspect-ratio: var(--aspect-video, 16 / 9);
}
.x-commerce .size-1\\.5, .x-commerce.size-1\\.5 {
  width: calc(var(--spacing, 0.25rem) * 1.5);
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .size-2, .x-commerce.size-2 {
  width: calc(var(--spacing, 0.25rem) * 2);
  height: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .size-2\\.5, .x-commerce.size-2\\.5 {
  width: calc(var(--spacing, 0.25rem) * 2.5);
  height: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .size-3, .x-commerce.size-3 {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .size-3\\.5, .x-commerce.size-3\\.5 {
  width: calc(var(--spacing, 0.25rem) * 3.5);
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .size-4, .x-commerce.size-4 {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .size-5, .x-commerce.size-5 {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .size-6, .x-commerce.size-6 {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .size-7, .x-commerce.size-7 {
  width: calc(var(--spacing, 0.25rem) * 7);
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .size-8, .x-commerce.size-8 {
  width: calc(var(--spacing, 0.25rem) * 8);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .size-9, .x-commerce.size-9 {
  width: calc(var(--spacing, 0.25rem) * 9);
  height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .size-10, .x-commerce.size-10 {
  width: calc(var(--spacing, 0.25rem) * 10);
  height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .size-16, .x-commerce.size-16 {
  width: calc(var(--spacing, 0.25rem) * 16);
  height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .size-\\[0\\.85em\\], .x-commerce.size-\\[0\\.85em\\] {
  width: 0.85em;
  height: 0.85em;
}
.x-commerce .size-\\[16px\\], .x-commerce.size-\\[16px\\] {
  width: 16px;
  height: 16px;
}
.x-commerce .size-\\[18px\\], .x-commerce.size-\\[18px\\] {
  width: 18px;
  height: 18px;
}
.x-commerce .size-\\[22px\\], .x-commerce.size-\\[22px\\] {
  width: 22px;
  height: 22px;
}
.x-commerce .size-\\[26px\\], .x-commerce.size-\\[26px\\] {
  width: 26px;
  height: 26px;
}
.x-commerce .size-\\[29px\\], .x-commerce.size-\\[29px\\] {
  width: 29px;
  height: 29px;
}
.x-commerce .size-\\[61\\.714px\\], .x-commerce.size-\\[61\\.714px\\] {
  width: 61.714px;
  height: 61.714px;
}
.x-commerce .size-full, .x-commerce.size-full {
  width: 100%;
  height: 100%;
}
.x-commerce .h-0, .x-commerce.h-0 {
  height: 0px;
}
.x-commerce .h-1, .x-commerce.h-1 {
  height: var(--spacing, 0.25rem);
}
.x-commerce .h-1\\.5, .x-commerce.h-1\\.5 {
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .h-3\\.5, .x-commerce.h-3\\.5 {
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .h-4, .x-commerce.h-4 {
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .h-5, .x-commerce.h-5 {
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .h-6, .x-commerce.h-6 {
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .h-7, .x-commerce.h-7 {
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .h-8, .x-commerce.h-8 {
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .h-9, .x-commerce.h-9 {
  height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .h-10, .x-commerce.h-10 {
  height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .h-11, .x-commerce.h-11 {
  height: calc(var(--spacing, 0.25rem) * 11);
}
.x-commerce .h-12, .x-commerce.h-12 {
  height: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .h-14, .x-commerce.h-14 {
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .h-16, .x-commerce.h-16 {
  height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .h-24, .x-commerce.h-24 {
  height: calc(var(--spacing, 0.25rem) * 24);
}
.x-commerce .h-40, .x-commerce.h-40 {
  height: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .h-48, .x-commerce.h-48 {
  height: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .h-60, .x-commerce.h-60 {
  height: calc(var(--spacing, 0.25rem) * 60);
}
.x-commerce .h-64, .x-commerce.h-64 {
  height: calc(var(--spacing, 0.25rem) * 64);
}
.x-commerce .h-\\[1lh\\], .x-commerce.h-\\[1lh\\] {
  height: 1lh;
}
.x-commerce .h-\\[11\\.79\\%\\], .x-commerce.h-\\[11\\.79\\%\\] {
  height: 11.79%;
}
.x-commerce .h-\\[14\\.29\\%\\], .x-commerce.h-\\[14\\.29\\%\\] {
  height: 14.29%;
}
.x-commerce .h-\\[20\\.71\\%\\], .x-commerce.h-\\[20\\.71\\%\\] {
  height: 20.71%;
}
.x-commerce .h-\\[20px\\], .x-commerce.h-\\[20px\\] {
  height: 20px;
}
.x-commerce .h-\\[22px\\], .x-commerce.h-\\[22px\\] {
  height: 22px;
}
.x-commerce .h-\\[25\\.36\\%\\], .x-commerce.h-\\[25\\.36\\%\\] {
  height: 25.36%;
}
.x-commerce .h-\\[26px\\], .x-commerce.h-\\[26px\\] {
  height: 26px;
}
.x-commerce .h-\\[28px\\], .x-commerce.h-\\[28px\\] {
  height: 28px;
}
.x-commerce .h-\\[29\\.46\\%\\], .x-commerce.h-\\[29\\.46\\%\\] {
  height: 29.46%;
}
.x-commerce .h-\\[33\\.21\\%\\], .x-commerce.h-\\[33\\.21\\%\\] {
  height: 33.21%;
}
.x-commerce .h-\\[34px\\], .x-commerce.h-\\[34px\\] {
  height: 34px;
}
.x-commerce .h-\\[36px\\], .x-commerce.h-\\[36px\\] {
  height: 36px;
}
.x-commerce .h-\\[43px\\], .x-commerce.h-\\[43px\\] {
  height: 43px;
}
.x-commerce .h-\\[48\\.76px\\], .x-commerce.h-\\[48\\.76px\\] {
  height: 48.76px;
}
.x-commerce .h-\\[50px\\], .x-commerce.h-\\[50px\\] {
  height: 50px;
}
.x-commerce .h-\\[55px\\], .x-commerce.h-\\[55px\\] {
  height: 55px;
}
.x-commerce .h-\\[60\\.18\\%\\], .x-commerce.h-\\[60\\.18\\%\\] {
  height: 60.18%;
}
.x-commerce .h-\\[71\\.25\\%\\], .x-commerce.h-\\[71\\.25\\%\\] {
  height: 71.25%;
}
.x-commerce .h-\\[76\\.07\\%\\], .x-commerce.h-\\[76\\.07\\%\\] {
  height: 76.07%;
}
.x-commerce .h-\\[82px\\], .x-commerce.h-\\[82px\\] {
  height: 82px;
}
.x-commerce .h-\\[88px\\], .x-commerce.h-\\[88px\\] {
  height: 88px;
}
.x-commerce .h-\\[94\\.29\\%\\], .x-commerce.h-\\[94\\.29\\%\\] {
  height: 94.29%;
}
.x-commerce .h-\\[114\\.29\\%\\], .x-commerce.h-\\[114\\.29\\%\\] {
  height: 114.29%;
}
.x-commerce .h-\\[124px\\], .x-commerce.h-\\[124px\\] {
  height: 124px;
}
.x-commerce .h-\\[136px\\], .x-commerce.h-\\[136px\\] {
  height: 136px;
}
.x-commerce .h-\\[142px\\], .x-commerce.h-\\[142px\\] {
  height: 142px;
}
.x-commerce .h-\\[149px\\], .x-commerce.h-\\[149px\\] {
  height: 149px;
}
.x-commerce .h-\\[200px\\], .x-commerce.h-\\[200px\\] {
  height: 200px;
}
.x-commerce .h-\\[254px\\], .x-commerce.h-\\[254px\\] {
  height: 254px;
}
.x-commerce .h-\\[340px\\], .x-commerce.h-\\[340px\\] {
  height: 340px;
}
.x-commerce .h-\\[420px\\], .x-commerce.h-\\[420px\\] {
  height: 420px;
}
.x-commerce .h-\\[460px\\], .x-commerce.h-\\[460px\\] {
  height: 460px;
}
.x-commerce .h-\\[497px\\], .x-commerce.h-\\[497px\\] {
  height: 497px;
}
.x-commerce .h-\\[872px\\], .x-commerce.h-\\[872px\\] {
  height: 872px;
}
.x-commerce .h-\\[min\\(880px\\,calc\\(100dvh-32px\\)\\)\\],.x-commerce.h-\\[min\\(880px\\,calc\\(100dvh-32px\\)\\)\\] {
  height: min(880px, calc(100dvh - 32px));
}
.x-commerce .h-auto, .x-commerce.h-auto {
  height: auto;
}
.x-commerce .h-dvh, .x-commerce.h-dvh {
  height: 100dvh;
}
.x-commerce .h-full, .x-commerce.h-full {
  height: 100%;
}
.x-commerce .h-px, .x-commerce.h-px {
  height: 1px;
}
.x-commerce .max-h-\\(--available-height\\), .x-commerce.max-h-\\(--available-height\\) {
  max-height: var(--available-height);
}
.x-commerce .max-h-\\[70dvh\\], .x-commerce.max-h-\\[70dvh\\] {
  max-height: 70dvh;
}
.x-commerce .max-h-\\[280px\\], .x-commerce.max-h-\\[280px\\] {
  max-height: 280px;
}
.x-commerce .max-h-\\[420px\\], .x-commerce.max-h-\\[420px\\] {
  max-height: 420px;
}
.x-commerce .max-h-\\[calc\\(100dvh-32px\\)\\], .x-commerce.max-h-\\[calc\\(100dvh-32px\\)\\] {
  max-height: calc(100dvh - 32px);
}
.x-commerce .min-h-0, .x-commerce.min-h-0 {
  min-height: 0px;
}
.x-commerce .min-h-4, .x-commerce.min-h-4 {
  min-height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .min-h-5, .x-commerce.min-h-5 {
  min-height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .min-h-6, .x-commerce.min-h-6 {
  min-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .min-h-9, .x-commerce.min-h-9 {
  min-height: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .min-h-10, .x-commerce.min-h-10 {
  min-height: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .min-h-12, .x-commerce.min-h-12 {
  min-height: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .min-h-16, .x-commerce.min-h-16 {
  min-height: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .min-h-28, .x-commerce.min-h-28 {
  min-height: calc(var(--spacing, 0.25rem) * 28);
}
.x-commerce .min-h-40, .x-commerce.min-h-40 {
  min-height: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .min-h-48, .x-commerce.min-h-48 {
  min-height: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .min-h-\\[43px\\], .x-commerce.min-h-\\[43px\\] {
  min-height: 43px;
}
.x-commerce .min-h-\\[45px\\], .x-commerce.min-h-\\[45px\\] {
  min-height: 45px;
}
.x-commerce .min-h-\\[62px\\], .x-commerce.min-h-\\[62px\\] {
  min-height: 62px;
}
.x-commerce .min-h-\\[149px\\], .x-commerce.min-h-\\[149px\\] {
  min-height: 149px;
}
.x-commerce .min-h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(28\\)\\)\\],.x-commerce.min-h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(28\\)\\)\\] {
  min-height: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 28));
}
.x-commerce .min-h-dvh, .x-commerce.min-h-dvh {
  min-height: 100dvh;
}
.x-commerce .min-h-full, .x-commerce.min-h-full {
  min-height: 100%;
}
.x-commerce .min-h-lh, .x-commerce.min-h-lh {
  min-height: 1lh;
}
.x-commerce .w-\\(--anchor-width\\), .x-commerce.w-\\(--anchor-width\\) {
  width: var(--anchor-width);
}
.x-commerce .w-0, .x-commerce.w-0 {
  width: 0px;
}
.x-commerce .w-1\\.5, .x-commerce.w-1\\.5 {
  width: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .w-1\\/2, .x-commerce.w-1\\/2 {
  width: calc(1 / 2 * 100%);
}
.x-commerce .w-2, .x-commerce.w-2 {
  width: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .w-2\\/3, .x-commerce.w-2\\/3 {
  width: calc(2 / 3 * 100%);
}
.x-commerce .w-3\\/4, .x-commerce.w-3\\/4 {
  width: calc(3 / 4 * 100%);
}
.x-commerce .w-3\\/6, .x-commerce.w-3\\/6 {
  width: calc(3 / 6 * 100%);
}
.x-commerce .w-4\\/6, .x-commerce.w-4\\/6 {
  width: calc(4 / 6 * 100%);
}
.x-commerce .w-5\\/6, .x-commerce.w-5\\/6 {
  width: calc(5 / 6 * 100%);
}
.x-commerce .w-6, .x-commerce.w-6 {
  width: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .w-8, .x-commerce.w-8 {
  width: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .w-9, .x-commerce.w-9 {
  width: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .w-10, .x-commerce.w-10 {
  width: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .w-11\\/12, .x-commerce.w-11\\/12 {
  width: calc(11 / 12 * 100%);
}
.x-commerce .w-12, .x-commerce.w-12 {
  width: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .w-16, .x-commerce.w-16 {
  width: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .w-20, .x-commerce.w-20 {
  width: calc(var(--spacing, 0.25rem) * 20);
}
.x-commerce .w-24, .x-commerce.w-24 {
  width: calc(var(--spacing, 0.25rem) * 24);
}
.x-commerce .w-28, .x-commerce.w-28 {
  width: calc(var(--spacing, 0.25rem) * 28);
}
.x-commerce .w-32, .x-commerce.w-32 {
  width: calc(var(--spacing, 0.25rem) * 32);
}
.x-commerce .w-36, .x-commerce.w-36 {
  width: calc(var(--spacing, 0.25rem) * 36);
}
.x-commerce .w-40, .x-commerce.w-40 {
  width: calc(var(--spacing, 0.25rem) * 40);
}
.x-commerce .w-48, .x-commerce.w-48 {
  width: calc(var(--spacing, 0.25rem) * 48);
}
.x-commerce .w-52, .x-commerce.w-52 {
  width: calc(var(--spacing, 0.25rem) * 52);
}
.x-commerce .w-56, .x-commerce.w-56 {
  width: calc(var(--spacing, 0.25rem) * 56);
}
.x-commerce .w-64, .x-commerce.w-64 {
  width: calc(var(--spacing, 0.25rem) * 64);
}
.x-commerce .w-72, .x-commerce.w-72 {
  width: calc(var(--spacing, 0.25rem) * 72);
}
.x-commerce .w-80, .x-commerce.w-80 {
  width: calc(var(--spacing, 0.25rem) * 80);
}
.x-commerce .w-\\[11\\.79\\%\\], .x-commerce.w-\\[11\\.79\\%\\] {
  width: 11.79%;
}
.x-commerce .w-\\[13\\.21\\%\\], .x-commerce.w-\\[13\\.21\\%\\] {
  width: 13.21%;
}
.x-commerce .w-\\[16\\%\\], .x-commerce.w-\\[16\\%\\] {
  width: 16%;
}
.x-commerce .w-\\[18\\.93\\%\\], .x-commerce.w-\\[18\\.93\\%\\] {
  width: 18.93%;
}
.x-commerce .w-\\[18px\\], .x-commerce.w-\\[18px\\] {
  width: 18px;
}
.x-commerce .w-\\[20px\\], .x-commerce.w-\\[20px\\] {
  width: 20px;
}
.x-commerce .w-\\[21\\%\\], .x-commerce.w-\\[21\\%\\] {
  width: 21%;
}
.x-commerce .w-\\[24\\%\\], .x-commerce.w-\\[24\\%\\] {
  width: 24%;
}
.x-commerce .w-\\[31\\.61\\%\\], .x-commerce.w-\\[31\\.61\\%\\] {
  width: 31.61%;
}
.x-commerce .w-\\[33\\.21\\%\\], .x-commerce.w-\\[33\\.21\\%\\] {
  width: 33.21%;
}
.x-commerce .w-\\[34px\\], .x-commerce.w-\\[34px\\] {
  width: 34px;
}
.x-commerce .w-\\[35\\.71\\%\\], .x-commerce.w-\\[35\\.71\\%\\] {
  width: 35.71%;
}
.x-commerce .w-\\[36\\%\\], .x-commerce.w-\\[36\\%\\] {
  width: 36%;
}
.x-commerce .w-\\[43\\.21\\%\\], .x-commerce.w-\\[43\\.21\\%\\] {
  width: 43.21%;
}
.x-commerce .w-\\[48px\\], .x-commerce.w-\\[48px\\] {
  width: 48px;
}
.x-commerce .w-\\[50\\.568px\\], .x-commerce.w-\\[50\\.568px\\] {
  width: 50.568px;
}
.x-commerce .w-\\[68\\.93\\%\\], .x-commerce.w-\\[68\\.93\\%\\] {
  width: 68.93%;
}
.x-commerce .w-\\[70px\\], .x-commerce.w-\\[70px\\] {
  width: 70px;
}
.x-commerce .w-\\[72vw\\], .x-commerce.w-\\[72vw\\] {
  width: 72vw;
}
.x-commerce .w-\\[75\\%\\], .x-commerce.w-\\[75\\%\\] {
  width: 75%;
}
.x-commerce .w-\\[77\\.68\\%\\], .x-commerce.w-\\[77\\.68\\%\\] {
  width: 77.68%;
}
.x-commerce .w-\\[93\\.333\\%\\], .x-commerce.w-\\[93\\.333\\%\\] {
  width: 93.333%;
}
.x-commerce .w-\\[100cqw\\], .x-commerce.w-\\[100cqw\\] {
  width: 100cqw;
}
.x-commerce .w-\\[104px\\], .x-commerce.w-\\[104px\\] {
  width: 104px;
}
.x-commerce .w-\\[109\\.59\\%\\], .x-commerce.w-\\[109\\.59\\%\\] {
  width: 109.59%;
}
.x-commerce .w-\\[144px\\], .x-commerce.w-\\[144px\\] {
  width: 144px;
}
.x-commerce .w-\\[240px\\], .x-commerce.w-\\[240px\\] {
  width: 240px;
}
.x-commerce .w-\\[260px\\], .x-commerce.w-\\[260px\\] {
  width: 260px;
}
.x-commerce .w-\\[280px\\], .x-commerce.w-\\[280px\\] {
  width: 280px;
}
.x-commerce .w-\\[300px\\], .x-commerce.w-\\[300px\\] {
  width: 300px;
}
.x-commerce .w-\\[318px\\], .x-commerce.w-\\[318px\\] {
  width: 318px;
}
.x-commerce .w-\\[320px\\], .x-commerce.w-\\[320px\\] {
  width: 320px;
}
.x-commerce .w-\\[360px\\], .x-commerce.w-\\[360px\\] {
  width: 360px;
}
.x-commerce .w-\\[372px\\], .x-commerce.w-\\[372px\\] {
  width: 372px;
}
.x-commerce .w-\\[388px\\], .x-commerce.w-\\[388px\\] {
  width: 388px;
}
.x-commerce .w-\\[400px\\], .x-commerce.w-\\[400px\\] {
  width: 400px;
}
.x-commerce .w-\\[413px\\], .x-commerce.w-\\[413px\\] {
  width: 413px;
}
.x-commerce .w-\\[430px\\], .x-commerce.w-\\[430px\\] {
  width: 430px;
}
.x-commerce .w-\\[450px\\], .x-commerce.w-\\[450px\\] {
  width: 450px;
}
.x-commerce .w-\\[500px\\], .x-commerce.w-\\[500px\\] {
  width: 500px;
}
.x-commerce .w-\\[600px\\], .x-commerce.w-\\[600px\\] {
  width: 600px;
}
.x-commerce .w-\\[822px\\], .x-commerce.w-\\[822px\\] {
  width: 822px;
}
.x-commerce .w-\\[1080px\\], .x-commerce.w-\\[1080px\\] {
  width: 1080px;
}
.x-commerce .w-\\[1296px\\], .x-commerce.w-\\[1296px\\] {
  width: 1296px;
}
.x-commerce .w-\\[calc\\(50\\%-2px\\)\\], .x-commerce.w-\\[calc\\(50\\%-2px\\)\\] {
  width: calc(50% - 2px);
}
.x-commerce .w-\\[min\\(24rem\\,calc\\(100vw-2rem\\)\\,calc\\(var\\(--available-width\\,100vw\\)-1rem\\)\\)\\],.x-commerce.w-\\[min\\(24rem\\,calc\\(100vw-2rem\\)\\,calc\\(var\\(--available-width\\,100vw\\)-1rem\\)\\)\\] {
  width: min(24rem, calc(100vw - 2rem), calc(var(--available-width,100vw) - 1rem));
}
.x-commerce .w-auto, .x-commerce.w-auto {
  width: auto;
}
.x-commerce .w-fit, .x-commerce.w-fit {
  width: fit-content;
}
.x-commerce .w-full, .x-commerce.w-full {
  width: 100%;
}
.x-commerce .max-w-4xl, .x-commerce.max-w-4xl {
  max-width: var(--container-4xl, 56rem);
}
.x-commerce .max-w-72, .x-commerce.max-w-72 {
  max-width: calc(var(--spacing, 0.25rem) * 72);
}
.x-commerce .max-w-\\[50\\%\\], .x-commerce.max-w-\\[50\\%\\] {
  max-width: 50%;
}
.x-commerce .max-w-\\[320px\\], .x-commerce.max-w-\\[320px\\] {
  max-width: 320px;
}
.x-commerce .max-w-\\[360px\\], .x-commerce.max-w-\\[360px\\] {
  max-width: 360px;
}
.x-commerce .max-w-\\[400px\\], .x-commerce.max-w-\\[400px\\] {
  max-width: 400px;
}
.x-commerce .max-w-\\[420px\\], .x-commerce.max-w-\\[420px\\] {
  max-width: 420px;
}
.x-commerce .max-w-\\[440px\\], .x-commerce.max-w-\\[440px\\] {
  max-width: 440px;
}
.x-commerce .max-w-\\[450px\\], .x-commerce.max-w-\\[450px\\] {
  max-width: 450px;
}
.x-commerce .max-w-\\[480px\\], .x-commerce.max-w-\\[480px\\] {
  max-width: 480px;
}
.x-commerce .max-w-\\[570px\\], .x-commerce.max-w-\\[570px\\] {
  max-width: 570px;
}
.x-commerce .max-w-\\[610px\\], .x-commerce.max-w-\\[610px\\] {
  max-width: 610px;
}
.x-commerce .max-w-\\[916px\\], .x-commerce.max-w-\\[916px\\] {
  max-width: 916px;
}
.x-commerce .max-w-\\[calc\\(100vw-32px\\)\\], .x-commerce.max-w-\\[calc\\(100vw-32px\\)\\] {
  max-width: calc(100vw - 32px);
}
.x-commerce .max-w-full, .x-commerce.max-w-full {
  max-width: 100%;
}
.x-commerce .max-w-none, .x-commerce.max-w-none {
  max-width: none;
}
.x-commerce .max-w-sm, .x-commerce.max-w-sm {
  max-width: var(--container-sm, 24rem);
}
.x-commerce .max-w-xl, .x-commerce.max-w-xl {
  max-width: var(--container-xl, 36rem);
}
.x-commerce .min-w-0, .x-commerce.min-w-0 {
  min-width: 0px;
}
.x-commerce .min-w-6, .x-commerce.min-w-6 {
  min-width: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .min-w-8, .x-commerce.min-w-8 {
  min-width: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .min-w-9, .x-commerce.min-w-9 {
  min-width: calc(var(--spacing, 0.25rem) * 9);
}
.x-commerce .min-w-10, .x-commerce.min-w-10 {
  min-width: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .min-w-12, .x-commerce.min-w-12 {
  min-width: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .min-w-60, .x-commerce.min-w-60 {
  min-width: calc(var(--spacing, 0.25rem) * 60);
}
.x-commerce .min-w-\\[1ch\\], .x-commerce.min-w-\\[1ch\\] {
  min-width: 1ch;
}
.x-commerce .min-w-\\[76px\\], .x-commerce.min-w-\\[76px\\] {
  min-width: 76px;
}
.x-commerce .min-w-\\[180px\\], .x-commerce.min-w-\\[180px\\] {
  min-width: 180px;
}
.x-commerce .min-w-\\[200px\\], .x-commerce.min-w-\\[200px\\] {
  min-width: 200px;
}
.x-commerce .min-w-\\[var\\(--anchor-width\\)\\], .x-commerce.min-w-\\[var\\(--anchor-width\\)\\] {
  min-width: var(--anchor-width);
}
.x-commerce .min-w-min, .x-commerce.min-w-min {
  min-width: min-content;
}
.x-commerce .flex-1, .x-commerce.flex-1 {
  flex: 1;
}
.x-commerce .flex-none, .x-commerce.flex-none {
  flex: none;
}
.x-commerce .shrink, .x-commerce.shrink {
  flex-shrink: 1;
}
.x-commerce .shrink-0, .x-commerce.shrink-0 {
  flex-shrink: 0;
}
.x-commerce .grow, .x-commerce.grow {
  flex-grow: 1;
}
.x-commerce .basis-0, .x-commerce.basis-0 {
  flex-basis: 0px;
}
.x-commerce .border-collapse, .x-commerce.border-collapse {
  border-collapse: collapse;
}
.x-commerce .origin-\\[var\\(--transform-origin\\)\\], .x-commerce.origin-\\[var\\(--transform-origin\\)\\] {
  transform-origin: var(--transform-origin);
}
.x-commerce .-translate-x-1\\/2, .x-commerce.-translate-x-1\\/2 {
  --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-0, .x-commerce.translate-x-0 {
  --tw-translate-x: 0px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[2px\\], .x-commerce.translate-x-\\[2px\\] {
  --tw-translate-x: 2px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[3px\\], .x-commerce.translate-x-\\[3px\\] {
  --tw-translate-x: 3px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[calc\\(50cqw-50\\%\\)\\], .x-commerce.translate-x-\\[calc\\(50cqw-50\\%\\)\\] {
  --tw-translate-x: calc(50cqw - 50%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-\\[calc\\(100cqw-100\\%\\)\\], .x-commerce.translate-x-\\[calc\\(100cqw-100\\%\\)\\] {
  --tw-translate-x: calc(100cqw - 100%);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .translate-x-full, .x-commerce.translate-x-full {
  --tw-translate-x: 100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .-translate-y-1\\/2, .x-commerce.-translate-y-1\\/2 {
  --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .scale-0, .x-commerce.scale-0 {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .scale-50, .x-commerce.scale-50 {
  --tw-scale-x: 50%;
  --tw-scale-y: 50%;
  --tw-scale-z: 50%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .-scale-x-100, .x-commerce.-scale-x-100 {
  --tw-scale-x: calc(100% * -1);
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .rotate-180, .x-commerce.rotate-180 {
  rotate: 180deg;
}
.x-commerce .transform, .x-commerce.transform {
  transform: var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
}
.x-commerce .transform-gpu, .x-commerce.transform-gpu {
  transform: translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,);
}
.x-commerce .animate-\\[x-commerce-price-fade-in_110ms_ease-out\\], .x-commerce.animate-\\[x-commerce-price-fade-in_110ms_ease-out\\] {
  animation: x-commerce-price-fade-in 110ms ease-out;
}
.x-commerce .animate-\\[x-commerce-price-fade-out_110ms_ease-in_forwards\\], .x-commerce.animate-\\[x-commerce-price-fade-out_110ms_ease-in_forwards\\] {
  animation: x-commerce-price-fade-out 110ms ease-in forwards;
}
.x-commerce .animate-fade-in, .x-commerce.animate-fade-in {
  animation: fadeIn 150ms ease-out;
}
.x-commerce .animate-spin, .x-commerce.animate-spin {
  animation: var(--animate-spin, spin 1s linear infinite);
}
.x-commerce .cursor-auto, .x-commerce.cursor-auto {
  cursor: auto;
}
.x-commerce .cursor-default, .x-commerce.cursor-default {
  cursor: default;
}
.x-commerce .cursor-not-allowed, .x-commerce.cursor-not-allowed {
  cursor: not-allowed;
}
.x-commerce .cursor-pointer, .x-commerce.cursor-pointer {
  cursor: pointer;
}
.x-commerce .cursor-text, .x-commerce.cursor-text {
  cursor: text;
}
.x-commerce .cursor-wait, .x-commerce.cursor-wait {
  cursor: wait;
}
.x-commerce .resize, .x-commerce.resize {
  resize: both;
}
.x-commerce .snap-x, .x-commerce.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.x-commerce .snap-mandatory, .x-commerce.snap-mandatory {
  --tw-scroll-snap-strictness: mandatory;
}
.x-commerce .snap-proximity, .x-commerce.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}
.x-commerce .snap-center, .x-commerce.snap-center {
  scroll-snap-align: center;
}
.x-commerce .snap-start, .x-commerce.snap-start {
  scroll-snap-align: start;
}
.x-commerce .scroll-px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\],.x-commerce.scroll-px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\] {
  scroll-padding-inline: var(--x-commerce-gutter,0.75rem);
}
.x-commerce .scroll-px-\\[var\\(--x-commerce-gutter\\,0px\\)\\],.x-commerce.scroll-px-\\[var\\(--x-commerce-gutter\\,0px\\)\\] {
  scroll-padding-inline: var(--x-commerce-gutter,0px);
}
.x-commerce .scroll-py-6, .x-commerce.scroll-py-6 {
  scroll-padding-block: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .scroll-py-8, .x-commerce.scroll-py-8 {
  scroll-padding-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .scroll-pt-\\[59px\\], .x-commerce.scroll-pt-\\[59px\\] {
  scroll-padding-top: 59px;
}
.x-commerce .scroll-pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+56px\\)\\],.x-commerce.scroll-pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+56px\\)\\] {
  scroll-padding-top: calc(env(safe-area-inset-top,0px) + 56px);
}
.x-commerce .scroll-pt-\\[calc\\(var\\(--x-modal-header-h\\,0px\\)\\+--spacing\\(6\\)\\)\\],.x-commerce.scroll-pt-\\[calc\\(var\\(--x-modal-header-h\\,0px\\)\\+--spacing\\(6\\)\\)\\] {
  scroll-padding-top: calc(var(--x-modal-header-h,0px) + calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .scroll-pb-6, .x-commerce.scroll-pb-6 {
  scroll-padding-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .scroll-pb-\\[calc\\(var\\(--x-modal-footer-h\\,0px\\)\\+--spacing\\(6\\)\\)\\],.x-commerce.scroll-pb-\\[calc\\(var\\(--x-modal-footer-h\\,0px\\)\\+--spacing\\(6\\)\\)\\] {
  scroll-padding-bottom: calc(var(--x-modal-footer-h,0px) + calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .\\[scrollbar-width\\:none\\], .x-commerce.\\[scrollbar-width\\:none\\] {
  scrollbar-width: none;
}
.x-commerce .\\[scrollbar-gutter\\:stable\\], .x-commerce.\\[scrollbar-gutter\\:stable\\] {
  scrollbar-gutter: stable;
}
.x-commerce .list-none, .x-commerce.list-none {
  list-style-type: none;
}
.x-commerce .appearance-none, .x-commerce.appearance-none {
  appearance: none;
}
.x-commerce .grid-cols-1, .x-commerce.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.x-commerce .grid-cols-2, .x-commerce.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.x-commerce .grid-cols-8, .x-commerce.grid-cols-8 {
  grid-template-columns: repeat(8, minmax(0, 1fr));
}
.x-commerce .grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)\\],.x-commerce.grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)\\] {
  grid-template-columns: 2.25rem minmax(0,1fr);
}
.x-commerce .grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)_2\\.25rem\\],.x-commerce.grid-cols-\\[2\\.25rem_minmax\\(0\\,1fr\\)_2\\.25rem\\] {
  grid-template-columns: 2.25rem minmax(0,1fr) 2.25rem;
}
.x-commerce .grid-cols-\\[auto_auto\\], .x-commerce.grid-cols-\\[auto_auto\\] {
  grid-template-columns: auto auto;
}
.x-commerce .grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\],.x-commerce.grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\] {
  grid-template-columns: auto minmax(0,1fr);
}
.x-commerce .grid-rows-\\[0fr\\], .x-commerce.grid-rows-\\[0fr\\] {
  grid-template-rows: 0fr;
}
.x-commerce .grid-rows-\\[1fr\\], .x-commerce.grid-rows-\\[1fr\\] {
  grid-template-rows: 1fr;
}
.x-commerce .flex-col, .x-commerce.flex-col {
  flex-direction: column;
}
.x-commerce .flex-col-reverse, .x-commerce.flex-col-reverse {
  flex-direction: column-reverse;
}
.x-commerce .flex-row, .x-commerce.flex-row {
  flex-direction: row;
}
.x-commerce .flex-nowrap, .x-commerce.flex-nowrap {
  flex-wrap: nowrap;
}
.x-commerce .flex-wrap, .x-commerce.flex-wrap {
  flex-wrap: wrap;
}
.x-commerce .place-items-center, .x-commerce.place-items-center {
  place-items: center;
}
.x-commerce .content-start, .x-commerce.content-start {
  align-content: flex-start;
}
.x-commerce .items-baseline, .x-commerce.items-baseline {
  align-items: baseline;
}
.x-commerce .items-center, .x-commerce.items-center {
  align-items: center;
}
.x-commerce .items-end, .x-commerce.items-end {
  align-items: flex-end;
}
.x-commerce .items-start, .x-commerce.items-start {
  align-items: flex-start;
}
.x-commerce .items-stretch, .x-commerce.items-stretch {
  align-items: stretch;
}
.x-commerce .justify-between, .x-commerce.justify-between {
  justify-content: space-between;
}
.x-commerce .justify-center, .x-commerce.justify-center {
  justify-content: center;
}
.x-commerce .justify-end, .x-commerce.justify-end {
  justify-content: flex-end;
}
.x-commerce .justify-items-center, .x-commerce.justify-items-center {
  justify-items: center;
}
.x-commerce .gap-0, .x-commerce.gap-0 {
  gap: 0px;
}
.x-commerce .gap-0\\.5, .x-commerce.gap-0\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .gap-1, .x-commerce.gap-1 {
  gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-1\\.5, .x-commerce.gap-1\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .gap-2, .x-commerce.gap-2 {
  gap: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .gap-2\\.5, .x-commerce.gap-2\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .gap-3, .x-commerce.gap-3 {
  gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-3\\.5, .x-commerce.gap-3\\.5 {
  gap: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .gap-4, .x-commerce.gap-4 {
  gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-5, .x-commerce.gap-5 {
  gap: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .gap-6, .x-commerce.gap-6 {
  gap: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .gap-7, .x-commerce.gap-7 {
  gap: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .gap-8, .x-commerce.gap-8 {
  gap: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .gap-10, .x-commerce.gap-10 {
  gap: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .gap-px, .x-commerce.gap-px {
  gap: 1px;
}
.x-commerce :where(.space-y-1 > :not(:last-child)), .x-commerce:where(.space-y-1 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(var(--spacing, 0.25rem) * var(--tw-space-y-reverse));
  margin-block-end: calc(var(--spacing, 0.25rem) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce :where(.space-y-2 > :not(:last-child)), .x-commerce:where(.space-y-2 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing, 0.25rem) * 2) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing, 0.25rem) * 2) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce :where(.space-y-3 > :not(:last-child)), .x-commerce:where(.space-y-3 > :not(:last-child)) {
  --tw-space-y-reverse: 0;
  margin-block-start: calc(calc(var(--spacing, 0.25rem) * 3) * var(--tw-space-y-reverse));
  margin-block-end: calc(calc(var(--spacing, 0.25rem) * 3) * calc(1 - var(--tw-space-y-reverse)));
}
.x-commerce .gap-x-1, .x-commerce.gap-x-1 {
  column-gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-x-1\\.5, .x-commerce.gap-x-1\\.5 {
  column-gap: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .gap-x-2, .x-commerce.gap-x-2 {
  column-gap: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .gap-x-3, .x-commerce.gap-x-3 {
  column-gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-x-4, .x-commerce.gap-x-4 {
  column-gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-x-\\[300px\\], .x-commerce.gap-x-\\[300px\\] {
  column-gap: 300px;
}
.x-commerce .gap-x-px, .x-commerce.gap-x-px {
  column-gap: 1px;
}
.x-commerce .gap-y-1, .x-commerce.gap-y-1 {
  row-gap: var(--spacing, 0.25rem);
}
.x-commerce .gap-y-3, .x-commerce.gap-y-3 {
  row-gap: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .gap-y-4, .x-commerce.gap-y-4 {
  row-gap: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .gap-y-\\[300px\\], .x-commerce.gap-y-\\[300px\\] {
  row-gap: 300px;
}
.x-commerce .self-center, .x-commerce.self-center {
  align-self: center;
}
.x-commerce .self-end, .x-commerce.self-end {
  align-self: flex-end;
}
.x-commerce .self-start, .x-commerce.self-start {
  align-self: flex-start;
}
.x-commerce .self-stretch, .x-commerce.self-stretch {
  align-self: stretch;
}
.x-commerce .justify-self-end, .x-commerce.justify-self-end {
  justify-self: flex-end;
}
.x-commerce .truncate, .x-commerce.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.x-commerce .overflow-clip, .x-commerce.overflow-clip {
  overflow: clip;
}
.x-commerce .overflow-hidden, .x-commerce.overflow-hidden {
  overflow: hidden;
}
.x-commerce .overflow-visible, .x-commerce.overflow-visible {
  overflow: visible;
}
.x-commerce .overflow-visible\\!, .x-commerce.overflow-visible\\! {
  overflow: visible !important;
}
.x-commerce .overflow-x-auto, .x-commerce.overflow-x-auto {
  overflow-x: auto;
}
.x-commerce .overflow-x-clip, .x-commerce.overflow-x-clip {
  overflow-x: clip;
}
.x-commerce .overflow-y-auto, .x-commerce.overflow-y-auto {
  overflow-y: auto;
}
.x-commerce .overflow-y-hidden, .x-commerce.overflow-y-hidden {
  overflow-y: hidden;
}
.x-commerce .overscroll-contain, .x-commerce.overscroll-contain {
  overscroll-behavior: contain;
}
.x-commerce .overscroll-none, .x-commerce.overscroll-none {
  overscroll-behavior: none;
}
.x-commerce .overscroll-x-none, .x-commerce.overscroll-x-none {
  overscroll-behavior-x: none;
}
.x-commerce .overscroll-y-none, .x-commerce.overscroll-y-none {
  overscroll-behavior-y: none;
}
.x-commerce .rounded, .x-commerce.rounded {
  border-radius: calc(12px * var(--x-radius-m));
}
.x-commerce .rounded-2xl, .x-commerce.rounded-2xl {
  border-radius: var(--radius-2xl, 1rem);
}
.x-commerce .rounded-3xl, .x-commerce.rounded-3xl {
  border-radius: var(--radius-3xl, 1.5rem);
}
.x-commerce .rounded-\\[11px\\], .x-commerce.rounded-\\[11px\\] {
  border-radius: 11px;
}
.x-commerce .rounded-\\[12px\\], .x-commerce.rounded-\\[12px\\] {
  border-radius: 12px;
}
.x-commerce .rounded-\\[14\\.4px\\], .x-commerce.rounded-\\[14\\.4px\\] {
  border-radius: 14.4px;
}
.x-commerce .rounded-\\[14px\\], .x-commerce.rounded-\\[14px\\] {
  border-radius: 14px;
}
.x-commerce .rounded-\\[18px\\], .x-commerce.rounded-\\[18px\\] {
  border-radius: 18px;
}
.x-commerce .rounded-\\[20px\\], .x-commerce.rounded-\\[20px\\] {
  border-radius: 20px;
}
.x-commerce .rounded-\\[22\\%\\], .x-commerce.rounded-\\[22\\%\\] {
  border-radius: 22%;
}
.x-commerce .rounded-\\[22px\\], .x-commerce.rounded-\\[22px\\] {
  border-radius: 22px;
}
.x-commerce .rounded-\\[24px\\], .x-commerce.rounded-\\[24px\\] {
  border-radius: 24px;
}
.x-commerce .rounded-\\[32px\\], .x-commerce.rounded-\\[32px\\] {
  border-radius: 32px;
}
.x-commerce .rounded-\\[44px\\], .x-commerce.rounded-\\[44px\\] {
  border-radius: 44px;
}
.x-commerce .rounded-\\[calc\\(12px\\*var\\(--x-radius-m\\,1\\)\\)\\],.x-commerce.rounded-\\[calc\\(12px\\*var\\(--x-radius-m\\,1\\)\\)\\] {
  border-radius: calc(12px * var(--x-radius-m,1));
}
.x-commerce .rounded-full, .x-commerce.rounded-full {
  border-radius: 9999px;
}
.x-commerce .rounded-lg, .x-commerce.rounded-lg {
  border-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .rounded-md, .x-commerce.rounded-md {
  border-radius: calc(16px * var(--x-radius-m));
}
.x-commerce .rounded-none, .x-commerce.rounded-none {
  border-radius: 0px;
}
.x-commerce .rounded-sm, .x-commerce.rounded-sm {
  border-radius: calc(8px * var(--x-radius-m));
}
.x-commerce .rounded-xl, .x-commerce.rounded-xl {
  border-radius: calc(32px * var(--x-radius-m));
}
.x-commerce .rounded-xs, .x-commerce.rounded-xs {
  border-radius: calc(4px * var(--x-radius-m));
}
.x-commerce .rounded-e-lg, .x-commerce.rounded-e-lg {
  border-start-end-radius: calc(24px * var(--x-radius-m));
  border-end-end-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .rounded-t-\\[32px\\], .x-commerce.rounded-t-\\[32px\\] {
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
}
.x-commerce .rounded-l-lg, .x-commerce.rounded-l-lg {
  border-top-left-radius: calc(24px * var(--x-radius-m));
  border-bottom-left-radius: calc(24px * var(--x-radius-m));
}
.x-commerce .border, .x-commerce.border {
  border-style: var(--tw-border-style);
  border-width: 1px;
}
.x-commerce .border-0, .x-commerce.border-0 {
  border-style: var(--tw-border-style);
  border-width: 0px;
}
.x-commerce .border-2, .x-commerce.border-2 {
  border-style: var(--tw-border-style);
  border-width: 2px;
}
.x-commerce .border-\\[0\\.5px\\], .x-commerce.border-\\[0\\.5px\\] {
  border-style: var(--tw-border-style);
  border-width: 0.5px;
}
.x-commerce .border-\\[10px\\], .x-commerce.border-\\[10px\\] {
  border-style: var(--tw-border-style);
  border-width: 10px;
}
.x-commerce .border-t, .x-commerce.border-t {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .border-t-\\[0\\.5px\\], .x-commerce.border-t-\\[0\\.5px\\] {
  border-top-style: var(--tw-border-style);
  border-top-width: 0.5px;
}
.x-commerce .border-b, .x-commerce.border-b {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 1px;
}
.x-commerce .border-b-\\[0\\.5px\\], .x-commerce.border-b-\\[0\\.5px\\] {
  border-bottom-style: var(--tw-border-style);
  border-bottom-width: 0.5px;
}
.x-commerce .border-solid, .x-commerce.border-solid {
  --tw-border-style: solid;
  border-style: solid;
}
.x-commerce .border-\\(--x-fg-brand\\), .x-commerce.border-\\(--x-fg-brand\\) {
  border-color: var(--x-fg-brand);
}
.x-commerce .border-\\[\\#3d3d3d\\], .x-commerce.border-\\[\\#3d3d3d\\] {
  border-color: #3d3d3d;
}
.x-commerce .border-\\[\\#0890ff\\], .x-commerce.border-\\[\\#0890ff\\] {
  border-color: #0890ff;
}
.x-commerce .border-\\[\\#b42318\\], .x-commerce.border-\\[\\#b42318\\] {
  border-color: #b42318;
}
.x-commerce .border-\\[\\#c4c4c4\\], .x-commerce.border-\\[\\#c4c4c4\\] {
  border-color: #c4c4c4;
}
.x-commerce .border-\\[\\#d93025\\], .x-commerce.border-\\[\\#d93025\\] {
  border-color: #d93025;
}
.x-commerce .border-\\[\\#dadce0\\], .x-commerce.border-\\[\\#dadce0\\] {
  border-color: #dadce0;
}
.x-commerce .border-\\[\\#e5e5e5\\], .x-commerce.border-\\[\\#e5e5e5\\] {
  border-color: #e5e5e5;
}
.x-commerce .border-black-10, .x-commerce.border-black-10 {
  border-color: var(--x-black-10);
}
.x-commerce .border-black\\/4, .x-commerce.border-black\\/4 {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 4%, transparent);
  }
}
.x-commerce .border-black\\/10, .x-commerce.border-black\\/10 {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 10%, transparent);
  }
}
.x-commerce .border-blue-500, .x-commerce.border-blue-500 {
  border-color: var(--x-blue-500);
}
.x-commerce .border-current, .x-commerce.border-current {
  border-color: currentcolor;
}
.x-commerce .border-destructive, .x-commerce.border-destructive {
  border-color: var(--x-border-destructive);
}
.x-commerce .border-destructive-light, .x-commerce.border-destructive-light {
  border-color: var(--x-border-destructive-light);
}
.x-commerce .border-destructive\\/60, .x-commerce.border-destructive\\/60 {
  border-color: var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-border-destructive) 60%, transparent);
  }
}
.x-commerce .border-elevated, .x-commerce.border-elevated {
  border-color: var(--x-border-elevated);
}
.x-commerce .border-fg-alpha-05, .x-commerce.border-fg-alpha-05 {
  border-color: var(--x-fg-alpha-05);
}
.x-commerce .border-fg-alpha-06, .x-commerce.border-fg-alpha-06 {
  border-color: var(--x-fg-alpha-06);
}
.x-commerce .border-fg-alpha-10, .x-commerce.border-fg-alpha-10 {
  border-color: var(--x-fg-alpha-10);
}
.x-commerce .border-fg-alpha-20, .x-commerce.border-fg-alpha-20 {
  border-color: var(--x-fg-alpha-20);
}
.x-commerce .border-media, .x-commerce.border-media {
  border-color: var(--x-border-media);
}
.x-commerce .border-neutral-500, .x-commerce.border-neutral-500 {
  border-color: var(--x-neutral-500);
}
.x-commerce .border-neutral-900, .x-commerce.border-neutral-900 {
  border-color: var(--x-neutral-900);
}
.x-commerce .border-normal, .x-commerce.border-normal {
  border-color: var(--x-border-normal);
}
.x-commerce .border-normal\\/40, .x-commerce.border-normal\\/40 {
  border-color: var(--x-border-normal);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-border-normal) 40%, transparent);
  }
}
.x-commerce .border-red-400\\/80, .x-commerce.border-red-400\\/80 {
  border-color: var(--x-red-400);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-red-400) 80%, transparent);
  }
}
.x-commerce .border-teal-500, .x-commerce.border-teal-500 {
  border-color: var(--x-teal-500);
}
.x-commerce .border-transparent, .x-commerce.border-transparent {
  border-color: transparent;
}
.x-commerce .border-white\\/30, .x-commerce.border-white\\/30 {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 30%, transparent);
  }
}
.x-commerce .bg-\\[\\#0b5cab\\], .x-commerce.bg-\\[\\#0b5cab\\] {
  background-color: #0b5cab;
}
.x-commerce .bg-\\[\\#1a73e8\\], .x-commerce.bg-\\[\\#1a73e8\\] {
  background-color: #1a73e8;
}
.x-commerce .bg-\\[\\#1c1c1e\\], .x-commerce.bg-\\[\\#1c1c1e\\] {
  background-color: #1c1c1e;
}
.x-commerce .bg-\\[\\#0890ff\\], .x-commerce.bg-\\[\\#0890ff\\] {
  background-color: #0890ff;
}
.x-commerce .bg-\\[\\#0890ff\\]\\/12, .x-commerce.bg-\\[\\#0890ff\\]\\/12 {
  background-color: color-mix(in oklab, #0890ff 12%, transparent);
}
.x-commerce .bg-\\[\\#050505\\], .x-commerce.bg-\\[\\#050505\\] {
  background-color: #050505;
}
.x-commerce .bg-\\[\\#626262\\], .x-commerce.bg-\\[\\#626262\\] {
  background-color: #626262;
}
.x-commerce .bg-\\[\\#f5f5f5\\], .x-commerce.bg-\\[\\#f5f5f5\\] {
  background-color: #f5f5f5;
}
.x-commerce .bg-\\[\\#f9f8f7\\], .x-commerce.bg-\\[\\#f9f8f7\\] {
  background-color: #f9f8f7;
}
.x-commerce .bg-\\[\\#fcfcfc\\], .x-commerce.bg-\\[\\#fcfcfc\\] {
  background-color: #fcfcfc;
}
.x-commerce .bg-\\[rgba\\(118\\,118\\,128\\,0\\.12\\)\\],.x-commerce.bg-\\[rgba\\(118\\,118\\,128\\,0\\.12\\)\\] {
  background-color: rgba(118,118,128,0.12);
}
.x-commerce .bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-modal\\)\\)\\],.x-commerce.bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-modal\\)\\)\\] {
  background-color: var(--x-modal-bg,var(--x-bg-modal));
}
.x-commerce .bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\],.x-commerce.bg-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\] {
  background-color: var(--x-modal-bg,var(--x-bg-primary));
}
.x-commerce .bg-amber-400, .x-commerce.bg-amber-400 {
  background-color: var(--color-amber-400, oklch(82.8% 0.189 84.429));
}
.x-commerce .bg-black, .x-commerce.bg-black {
  background-color: var(--x-black);
}
.x-commerce .bg-black-04, .x-commerce.bg-black-04 {
  background-color: var(--x-black-04);
}
.x-commerce .bg-black-40, .x-commerce.bg-black-40 {
  background-color: var(--x-black-40);
}
.x-commerce .bg-black-80, .x-commerce.bg-black-80 {
  background-color: var(--x-black-80);
}
.x-commerce .bg-black\\/40, .x-commerce.bg-black\\/40 {
  background-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-black) 40%, transparent);
  }
}
.x-commerce .bg-black\\/50, .x-commerce.bg-black\\/50 {
  background-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-black) 50%, transparent);
  }
}
.x-commerce .bg-blue-500, .x-commerce.bg-blue-500 {
  background-color: var(--x-blue-500);
}
.x-commerce .bg-blue-500\\/10, .x-commerce.bg-blue-500\\/10 {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 10%, transparent);
  }
}
.x-commerce .bg-blue-500\\/12, .x-commerce.bg-blue-500\\/12 {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 12%, transparent);
  }
}
.x-commerce .bg-btn-brand, .x-commerce.bg-btn-brand {
  background-color: var(--x-btn-brand);
}
.x-commerce .bg-btn-destructive, .x-commerce.bg-btn-destructive {
  background-color: var(--x-btn-destructive);
}
.x-commerce .bg-btn-inverted, .x-commerce.bg-btn-inverted {
  background-color: var(--x-btn-inverted);
}
.x-commerce .bg-btn-primary, .x-commerce.bg-btn-primary {
  background-color: var(--x-btn-primary);
}
.x-commerce .bg-btn-secondary, .x-commerce.bg-btn-secondary {
  background-color: var(--x-btn-secondary);
}
.x-commerce .bg-btn-tertiary, .x-commerce.bg-btn-tertiary {
  background-color: var(--x-btn-tertiary);
}
.x-commerce .bg-destructive, .x-commerce.bg-destructive {
  background-color: var(--x-bg-destructive);
}
.x-commerce .bg-destructive\\/30, .x-commerce.bg-destructive\\/30 {
  background-color: var(--x-bg-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-bg-destructive) 30%, transparent);
  }
}
.x-commerce .bg-fg-alpha-05, .x-commerce.bg-fg-alpha-05 {
  background-color: var(--x-fg-alpha-05);
}
.x-commerce .bg-fg-alpha-10, .x-commerce.bg-fg-alpha-10 {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .bg-fg-alpha-20, .x-commerce.bg-fg-alpha-20 {
  background-color: var(--x-fg-alpha-20);
}
.x-commerce .bg-fg-alpha-40, .x-commerce.bg-fg-alpha-40 {
  background-color: var(--x-fg-alpha-40);
}
.x-commerce .bg-info, .x-commerce.bg-info {
  background-color: var(--x-bg-info);
}
.x-commerce .bg-inputs, .x-commerce.bg-inputs {
  background-color: var(--x-bg-inputs);
}
.x-commerce .bg-modal, .x-commerce.bg-modal {
  background-color: var(--x-bg-modal);
}
.x-commerce .bg-neutral-500, .x-commerce.bg-neutral-500 {
  background-color: var(--x-neutral-500);
}
.x-commerce .bg-neutral-700, .x-commerce.bg-neutral-700 {
  background-color: var(--x-neutral-700);
}
.x-commerce .bg-neutral-900, .x-commerce.bg-neutral-900 {
  background-color: var(--x-neutral-900);
}
.x-commerce .bg-overlay-normal, .x-commerce.bg-overlay-normal {
  background-color: var(--x-overlay-normal);
}
.x-commerce .bg-primary, .x-commerce.bg-primary {
  background-color: var(--x-bg-primary);
}
.x-commerce .bg-primary\\/60, .x-commerce.bg-primary\\/60 {
  background-color: var(--x-bg-primary);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-bg-primary) 60%, transparent);
  }
}
.x-commerce .bg-purple-500, .x-commerce.bg-purple-500 {
  background-color: var(--x-purple-500);
}
.x-commerce .bg-quaternary, .x-commerce.bg-quaternary {
  background-color: var(--x-bg-quaternary);
}
.x-commerce .bg-secondary, .x-commerce.bg-secondary {
  background-color: var(--x-bg-secondary);
}
.x-commerce .bg-success, .x-commerce.bg-success {
  background-color: var(--x-bg-success);
}
.x-commerce .bg-tertiary, .x-commerce.bg-tertiary {
  background-color: var(--x-bg-tertiary);
}
.x-commerce .bg-transparent, .x-commerce.bg-transparent {
  background-color: transparent;
}
.x-commerce .bg-warning, .x-commerce.bg-warning {
  background-color: var(--x-bg-warning);
}
.x-commerce .bg-white, .x-commerce.bg-white {
  background-color: var(--x-white);
}
.x-commerce .bg-white-20, .x-commerce.bg-white-20 {
  background-color: var(--x-white-20);
}
.x-commerce .bg-linear-to-b, .x-commerce.bg-linear-to-b {
  --tw-gradient-position: to bottom;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .bg-linear-to-br, .x-commerce.bg-linear-to-br {
  --tw-gradient-position: to bottom right;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom right in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-primary\\)_--spacing\\(4\\)\\)\\],.x-commerce.bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-primary\\)_--spacing\\(4\\)\\)\\] {
  background-image: linear-gradient(to bottom,transparent,var(--x-bg-primary) calc(var(--spacing, 0.25rem) * 4));
}
.x-commerce .bg-\\[repeating-linear-gradient\\(45deg\\,\\#1d9bf0_0\\,\\#1d9bf0_22px\\,\\#8b5cf6_22px\\,\\#8b5cf6_44px\\)\\],.x-commerce.bg-\\[repeating-linear-gradient\\(45deg\\,\\#1d9bf0_0\\,\\#1d9bf0_22px\\,\\#8b5cf6_22px\\,\\#8b5cf6_44px\\)\\] {
  background-image: repeating-linear-gradient(45deg,#1d9bf0 0,#1d9bf0 22px,#8b5cf6 22px,#8b5cf6 44px);
}
.x-commerce .from-\\(--x-btn-primary\\), .x-commerce.from-\\(--x-btn-primary\\) {
  --tw-gradient-from: var(--x-btn-primary);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-\\[\\#0890ff\\]\\/1, .x-commerce.from-\\[\\#0890ff\\]\\/1 {
  --tw-gradient-from: color-mix(in oklab, #0890ff 1%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-\\[\\#d6e9ff\\], .x-commerce.from-\\[\\#d6e9ff\\] {
  --tw-gradient-from: #d6e9ff;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-blue-400, .x-commerce.from-blue-400 {
  --tw-gradient-from: var(--x-blue-400);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-blue-500\\/1, .x-commerce.from-blue-500\\/1 {
  --tw-gradient-from: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-from: color-mix(in oklab, var(--x-blue-500) 1%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-gray-700, .x-commerce.from-gray-700 {
  --tw-gradient-from: var(--color-gray-700, oklch(37.3% 0.034 259.733));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .from-indigo-500, .x-commerce.from-indigo-500 {
  --tw-gradient-from: var(--color-indigo-500, oklch(58.5% 0.233 277.117));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .via-fuchsia-500, .x-commerce.via-fuchsia-500 {
  --tw-gradient-via: var(--color-fuchsia-500, oklch(66.7% 0.295 322.15));
  --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-via-stops);
}
.x-commerce .to-\\[\\#0890ff\\]\\/8, .x-commerce.to-\\[\\#0890ff\\]\\/8 {
  --tw-gradient-to: color-mix(in oklab, #0890ff 8%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-\\[\\#b5d6ff\\], .x-commerce.to-\\[\\#b5d6ff\\] {
  --tw-gradient-to: #b5d6ff;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\],.x-commerce.to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\] {
  --tw-gradient-to: var(--x-btn-primary);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary),var(--x-bg-primary) 16%);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-amber-400, .x-commerce.to-amber-400 {
  --tw-gradient-to: var(--color-amber-400, oklch(82.8% 0.189 84.429));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-blue-500\\/5, .x-commerce.to-blue-500\\/5 {
  --tw-gradient-to: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-gray-900, .x-commerce.to-gray-900 {
  --tw-gradient-to: var(--color-gray-900, oklch(21% 0.034 264.665));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .to-purple-600, .x-commerce.to-purple-600 {
  --tw-gradient-to: var(--x-purple-600);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\] {
  mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_right\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\,linear-gradient\\(to_bottom\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_right\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\,linear-gradient\\(to_bottom\\,transparent\\,black_24px\\,black_calc\\(100\\%-24px\\)\\,transparent\\)\\] {
  mask-image: linear-gradient(to right,transparent,black 24px,black calc(100% - 24px),transparent),linear-gradient(to bottom,transparent,black 24px,black calc(100% - 24px),transparent);
}
.x-commerce .\\[mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\],.x-commerce.\\[mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\] {
  mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\)\\] {
  mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px));
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
  mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-y-end,0px), 32px)),transparent);
}
.x-commerce .mask-\\[linear-gradient\\(to_bottom\\,transparent_var\\(--x-number-flow-fade-out\\)\\,black_var\\(--x-number-flow-bleed\\)\\,black_calc\\(100\\%_-_var\\(--x-number-flow-bleed\\)\\)\\,transparent_calc\\(100\\%_-_var\\(--x-number-flow-fade-out\\)\\)\\)\\],.x-commerce.mask-\\[linear-gradient\\(to_bottom\\,transparent_var\\(--x-number-flow-fade-out\\)\\,black_var\\(--x-number-flow-bleed\\)\\,black_calc\\(100\\%_-_var\\(--x-number-flow-bleed\\)\\)\\,transparent_calc\\(100\\%_-_var\\(--x-number-flow-fade-out\\)\\)\\)\\] {
  mask-image: linear-gradient(to bottom,transparent var(--x-number-flow-fade-out),black var(--x-number-flow-bleed),black calc(100% - var(--x-number-flow-bleed)),transparent calc(100% - var(--x-number-flow-fade-out)));
}
.x-commerce .\\[mask-composite\\:intersect\\], .x-commerce.\\[mask-composite\\:intersect\\] {
  mask-composite: intersect;
}
.x-commerce .object-contain, .x-commerce.object-contain {
  object-fit: contain;
}
.x-commerce .object-cover, .x-commerce.object-cover {
  object-fit: cover;
}
.x-commerce .object-bottom, .x-commerce.object-bottom {
  object-position: bottom;
}
.x-commerce .object-left-bottom, .x-commerce.object-left-bottom {
  object-position: left bottom;
}
.x-commerce .p-\\(--x-modal-pad\\), .x-commerce.p-\\(--x-modal-pad\\) {
  padding: var(--x-modal-pad);
}
.x-commerce .p-0, .x-commerce.p-0 {
  padding: 0px;
}
.x-commerce .p-0\\.5, .x-commerce.p-0\\.5 {
  padding: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .p-1, .x-commerce.p-1 {
  padding: var(--spacing, 0.25rem);
}
.x-commerce .p-2, .x-commerce.p-2 {
  padding: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .p-3, .x-commerce.p-3 {
  padding: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .p-4, .x-commerce.p-4 {
  padding: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .p-5, .x-commerce.p-5 {
  padding: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .p-6, .x-commerce.p-6 {
  padding: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .p-8, .x-commerce.p-8 {
  padding: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .p-16, .x-commerce.p-16 {
  padding: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .p-20, .x-commerce.p-20 {
  padding: calc(var(--spacing, 0.25rem) * 20);
}
.x-commerce .p-\\[18px\\], .x-commerce.p-\\[18px\\] {
  padding: 18px;
}
.x-commerce .p-\\[23px\\], .x-commerce.p-\\[23px\\] {
  padding: 23px;
}
.x-commerce .px-\\(--x-modal-pad\\), .x-commerce.px-\\(--x-modal-pad\\) {
  padding-inline: var(--x-modal-pad);
}
.x-commerce .px-0, .x-commerce.px-0 {
  padding-inline: 0px;
}
.x-commerce .px-1\\.5, .x-commerce.px-1\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .px-2, .x-commerce.px-2 {
  padding-inline: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .px-2\\.5, .x-commerce.px-2\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .px-3, .x-commerce.px-3 {
  padding-inline: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .px-3\\.5, .x-commerce.px-3\\.5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .px-4, .x-commerce.px-4 {
  padding-inline: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .px-5, .x-commerce.px-5 {
  padding-inline: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .px-6, .x-commerce.px-6 {
  padding-inline: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .px-8, .x-commerce.px-8 {
  padding-inline: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .px-\\[25px\\], .x-commerce.px-\\[25px\\] {
  padding-inline: 25px;
}
.x-commerce .px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\],.x-commerce.px-\\[var\\(--x-commerce-gutter\\,0\\.75rem\\)\\] {
  padding-inline: var(--x-commerce-gutter,0.75rem);
}
.x-commerce .px-\\[var\\(--x-commerce-gutter\\,0px\\)\\],.x-commerce.px-\\[var\\(--x-commerce-gutter\\,0px\\)\\] {
  padding-inline: var(--x-commerce-gutter,0px);
}
.x-commerce .py-\\(--x-number-flow-bleed\\), .x-commerce.py-\\(--x-number-flow-bleed\\) {
  padding-block: var(--x-number-flow-bleed);
}
.x-commerce .py-0, .x-commerce.py-0 {
  padding-block: 0px;
}
.x-commerce .py-0\\.5, .x-commerce.py-0\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 0.5);
}
.x-commerce .py-1, .x-commerce.py-1 {
  padding-block: var(--spacing, 0.25rem);
}
.x-commerce .py-1\\.5, .x-commerce.py-1\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .py-2, .x-commerce.py-2 {
  padding-block: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .py-2\\.5, .x-commerce.py-2\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .py-3, .x-commerce.py-3 {
  padding-block: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .py-3\\.5, .x-commerce.py-3\\.5 {
  padding-block: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .py-4, .x-commerce.py-4 {
  padding-block: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .py-6, .x-commerce.py-6 {
  padding-block: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .py-8, .x-commerce.py-8 {
  padding-block: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .py-12, .x-commerce.py-12 {
  padding-block: calc(var(--spacing, 0.25rem) * 12);
}
.x-commerce .py-\\[3px\\], .x-commerce.py-\\[3px\\] {
  padding-block: 3px;
}
.x-commerce .py-\\[9px\\], .x-commerce.py-\\[9px\\] {
  padding-block: 9px;
}
.x-commerce .py-\\[10px\\], .x-commerce.py-\\[10px\\] {
  padding-block: 10px;
}
.x-commerce .py-\\[15px\\], .x-commerce.py-\\[15px\\] {
  padding-block: 15px;
}
.x-commerce .py-\\[22px\\], .x-commerce.py-\\[22px\\] {
  padding-block: 22px;
}
.x-commerce .ps-1, .x-commerce.ps-1 {
  padding-inline-start: var(--spacing, 0.25rem);
}
.x-commerce .ps-2, .x-commerce.ps-2 {
  padding-inline-start: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .ps-10, .x-commerce.ps-10 {
  padding-inline-start: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .ps-\\[35px\\], .x-commerce.ps-\\[35px\\] {
  padding-inline-start: 35px;
}
.x-commerce .pe-1, .x-commerce.pe-1 {
  padding-inline-end: var(--spacing, 0.25rem);
}
.x-commerce .pe-2, .x-commerce.pe-2 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pe-3, .x-commerce.pe-3 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pe-4, .x-commerce.pe-4 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pe-10, .x-commerce.pe-10 {
  padding-inline-end: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .pt-1, .x-commerce.pt-1 {
  padding-top: var(--spacing, 0.25rem);
}
.x-commerce .pt-1\\.5, .x-commerce.pt-1\\.5 {
  padding-top: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .pt-2, .x-commerce.pt-2 {
  padding-top: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pt-3, .x-commerce.pt-3 {
  padding-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pt-4, .x-commerce.pt-4 {
  padding-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pt-5, .x-commerce.pt-5 {
  padding-top: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .pt-6, .x-commerce.pt-6 {
  padding-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .pt-16, .x-commerce.pt-16 {
  padding-top: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .pt-\\[5px\\], .x-commerce.pt-\\[5px\\] {
  padding-top: 5px;
}
.x-commerce .pt-\\[59px\\], .x-commerce.pt-\\[59px\\] {
  padding-top: 59px;
}
.x-commerce .pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+2px\\)\\],.x-commerce.pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+2px\\)\\] {
  padding-top: calc(env(safe-area-inset-top,0px) + 2px);
}
.x-commerce .pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+4rem\\)\\],.x-commerce.pt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+4rem\\)\\] {
  padding-top: calc(env(safe-area-inset-top,0px) + 4rem);
}
.x-commerce .pt-\\[calc\\(var\\(--flow-inset-top\\,0px\\)\\+24px\\)\\],.x-commerce.pt-\\[calc\\(var\\(--flow-inset-top\\,0px\\)\\+24px\\)\\] {
  padding-top: calc(var(--flow-inset-top,0px) + 24px);
}
.x-commerce .pt-\\[env\\(safe-area-inset-top\\,0px\\)\\],.x-commerce.pt-\\[env\\(safe-area-inset-top\\,0px\\)\\] {
  padding-top: env(safe-area-inset-top,0px);
}
.x-commerce .pr-4, .x-commerce.pr-4 {
  padding-right: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pr-16, .x-commerce.pr-16 {
  padding-right: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .pr-\\[env\\(safe-area-inset-right\\,0px\\)\\],.x-commerce.pr-\\[env\\(safe-area-inset-right\\,0px\\)\\] {
  padding-right: env(safe-area-inset-right,0px);
}
.x-commerce .pr-\\[max\\(16px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\],.x-commerce.pr-\\[max\\(16px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\] {
  padding-right: max(16px, env(safe-area-inset-right,0px));
}
.x-commerce .pr-\\[max\\(24px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\],.x-commerce.pr-\\[max\\(24px\\,env\\(safe-area-inset-right\\,0px\\)\\)\\] {
  padding-right: max(24px, env(safe-area-inset-right,0px));
}
.x-commerce .pb-0, .x-commerce.pb-0 {
  padding-bottom: 0px;
}
.x-commerce .pb-1, .x-commerce.pb-1 {
  padding-bottom: var(--spacing, 0.25rem);
}
.x-commerce .pb-1\\.5, .x-commerce.pb-1\\.5 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .pb-2, .x-commerce.pb-2 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 2);
}
.x-commerce .pb-2\\.5, .x-commerce.pb-2\\.5 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 2.5);
}
.x-commerce .pb-3, .x-commerce.pb-3 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .pb-4, .x-commerce.pb-4 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .pb-6, .x-commerce.pb-6 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .pb-8, .x-commerce.pb-8 {
  padding-bottom: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .pb-\\[34px\\], .x-commerce.pb-\\[34px\\] {
  padding-bottom: 34px;
}
.x-commerce .pb-\\[calc\\(env\\(safe-area-inset-bottom\\,0px\\)\\+24px\\)\\],.x-commerce.pb-\\[calc\\(env\\(safe-area-inset-bottom\\,0px\\)\\+24px\\)\\] {
  padding-bottom: calc(env(safe-area-inset-bottom,0px) + 24px);
}
.x-commerce .pb-\\[calc\\(max\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\+--spacing\\(3\\)\\)\\],.x-commerce.pb-\\[calc\\(max\\(var\\(--x-plan-tabs-page-bottom\\,0px\\)\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\+--spacing\\(3\\)\\)\\] {
  padding-bottom: calc(max(var(--x-plan-tabs-page-bottom,0px), env(safe-area-inset-bottom,0px)) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .pb-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\],.x-commerce.pb-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\] {
  padding-bottom: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\] {
  padding-bottom: env(safe-area-inset-bottom,0px);
}
.x-commerce .pb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\],.x-commerce.pb-\\[max\\(1rem\\,env\\(safe-area-inset-bottom\\,0px\\)\\)\\] {
  padding-bottom: max(1rem, env(safe-area-inset-bottom,0px));
}
.x-commerce .pl-10, .x-commerce.pl-10 {
  padding-left: calc(var(--spacing, 0.25rem) * 10);
}
.x-commerce .pl-\\[env\\(safe-area-inset-left\\,0px\\)\\],.x-commerce.pl-\\[env\\(safe-area-inset-left\\,0px\\)\\] {
  padding-left: env(safe-area-inset-left,0px);
}
.x-commerce .pl-\\[max\\(16px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\],.x-commerce.pl-\\[max\\(16px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\] {
  padding-left: max(16px, env(safe-area-inset-left,0px));
}
.x-commerce .pl-\\[max\\(24px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\],.x-commerce.pl-\\[max\\(24px\\,env\\(safe-area-inset-left\\,0px\\)\\)\\] {
  padding-left: max(24px, env(safe-area-inset-left,0px));
}
.x-commerce .text-center, .x-commerce.text-center {
  text-align: center;
}
.x-commerce .text-end, .x-commerce.text-end {
  text-align: end;
}
.x-commerce .text-justify, .x-commerce.text-justify {
  text-align: justify;
}
.x-commerce .text-left, .x-commerce.text-left {
  text-align: left;
}
.x-commerce .text-start, .x-commerce.text-start {
  text-align: start;
}
.x-commerce .align-\\[-0\\.08em\\], .x-commerce.align-\\[-0\\.08em\\] {
  vertical-align: -0.08em;
}
.x-commerce .align-middle, .x-commerce.align-middle {
  vertical-align: middle;
}
.x-commerce .\\[font-family\\:-apple-system\\,BlinkMacSystemFont\\,\\'SF_Pro\\'\\,\\'SF_Pro_Text\\'\\,system-ui\\,sans-serif\\],.x-commerce.\\[font-family\\:-apple-system\\,BlinkMacSystemFont\\,\\'SF_Pro\\'\\,\\'SF_Pro_Text\\'\\,system-ui\\,sans-serif\\] {
  font-family: -apple-system,BlinkMacSystemFont,'SF Pro','SF Pro Text',system-ui,sans-serif;
}
.x-commerce .\\[font-family\\:var\\(--x-font-sans\\)\\], .x-commerce.\\[font-family\\:var\\(--x-font-sans\\)\\] {
  font-family: var(--x-font-sans);
}
.x-commerce .text-body, .x-commerce.text-body {
  font-size: calc(15 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-headline1, .x-commerce.text-headline1 {
  font-size: calc(20 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(24 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-headline2, .x-commerce.text-headline2 {
  font-size: calc(17 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-sm, .x-commerce.text-sm {
  font-size: var(--text-sm, 0.875rem);
  line-height: var(--tw-leading, var(--text-sm--line-height, calc(1.25 / 0.875)));
}
.x-commerce .text-subtext1, .x-commerce.text-subtext1 {
  font-size: calc(14 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(16 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-subtext2, .x-commerce.text-subtext2 {
  font-size: calc(13 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(16 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-subtext3, .x-commerce.text-subtext3 {
  font-size: calc(11 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(12 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title1, .x-commerce.text-title1 {
  font-size: calc(34 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(40 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title2, .x-commerce.text-title2 {
  font-size: calc(30 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(36 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title3, .x-commerce.text-title3 {
  font-size: calc(26 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(32 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-title4, .x-commerce.text-title4 {
  font-size: calc(23 / var(--x-root-font-size, 16) * 1rem);
  line-height: var(--tw-leading, calc(28 / var(--x-root-font-size, 16) * 1rem));
}
.x-commerce .text-xs, .x-commerce.text-xs {
  font-size: var(--text-xs, 0.75rem);
  line-height: var(--tw-leading, var(--text-xs--line-height, calc(1 / 0.75)));
}
.x-commerce .text-\\[10px\\], .x-commerce.text-\\[10px\\] {
  font-size: 10px;
}
.x-commerce .text-\\[11px\\], .x-commerce.text-\\[11px\\] {
  font-size: 11px;
}
.x-commerce .text-\\[12px\\], .x-commerce.text-\\[12px\\] {
  font-size: 12px;
}
.x-commerce .text-\\[13px\\], .x-commerce.text-\\[13px\\] {
  font-size: 13px;
}
.x-commerce .text-\\[14px\\], .x-commerce.text-\\[14px\\] {
  font-size: 14px;
}
.x-commerce .text-\\[15px\\], .x-commerce.text-\\[15px\\] {
  font-size: 15px;
}
.x-commerce .text-\\[16px\\], .x-commerce.text-\\[16px\\] {
  font-size: 16px;
}
.x-commerce .text-\\[17px\\], .x-commerce.text-\\[17px\\] {
  font-size: 17px;
}
.x-commerce .text-\\[18px\\], .x-commerce.text-\\[18px\\] {
  font-size: 18px;
}
.x-commerce .text-\\[20px\\], .x-commerce.text-\\[20px\\] {
  font-size: 20px;
}
.x-commerce .text-\\[22px\\], .x-commerce.text-\\[22px\\] {
  font-size: 22px;
}
.x-commerce .text-\\[24px\\], .x-commerce.text-\\[24px\\] {
  font-size: 24px;
}
.x-commerce .text-\\[28px\\], .x-commerce.text-\\[28px\\] {
  font-size: 28px;
}
.x-commerce .text-\\[32px\\], .x-commerce.text-\\[32px\\] {
  font-size: 32px;
}
.x-commerce .text-\\[44px\\], .x-commerce.text-\\[44px\\] {
  font-size: 44px;
}
.x-commerce .text-\\[length\\:inherit\\], .x-commerce.text-\\[length\\:inherit\\] {
  font-size: inherit;
}
.x-commerce .leading-4, .x-commerce.leading-4 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 4);
  line-height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .leading-5, .x-commerce.leading-5 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 5);
  line-height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .leading-6, .x-commerce.leading-6 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 6);
  line-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .leading-7, .x-commerce.leading-7 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 7);
  line-height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .leading-8, .x-commerce.leading-8 {
  --tw-leading: calc(var(--spacing, 0.25rem) * 8);
  line-height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .leading-\\[1\\.2\\], .x-commerce.leading-\\[1\\.2\\] {
  --tw-leading: 1.2;
  line-height: 1.2;
}
.x-commerce .leading-\\[1\\.3\\], .x-commerce.leading-\\[1\\.3\\] {
  --tw-leading: 1.3;
  line-height: 1.3;
}
.x-commerce .leading-\\[1\\.15\\], .x-commerce.leading-\\[1\\.15\\] {
  --tw-leading: 1.15;
  line-height: 1.15;
}
.x-commerce .leading-\\[13px\\], .x-commerce.leading-\\[13px\\] {
  --tw-leading: 13px;
  line-height: 13px;
}
.x-commerce .leading-\\[14px\\], .x-commerce.leading-\\[14px\\] {
  --tw-leading: 14px;
  line-height: 14px;
}
.x-commerce .leading-\\[17\\.895px\\], .x-commerce.leading-\\[17\\.895px\\] {
  --tw-leading: 17.895px;
  line-height: 17.895px;
}
.x-commerce .leading-\\[18px\\], .x-commerce.leading-\\[18px\\] {
  --tw-leading: 18px;
  line-height: 18px;
}
.x-commerce .leading-\\[19px\\], .x-commerce.leading-\\[19px\\] {
  --tw-leading: 19px;
  line-height: 19px;
}
.x-commerce .leading-\\[22px\\], .x-commerce.leading-\\[22px\\] {
  --tw-leading: 22px;
  line-height: 22px;
}
.x-commerce .leading-\\[23\\.86px\\], .x-commerce.leading-\\[23\\.86px\\] {
  --tw-leading: 23.86px;
  line-height: 23.86px;
}
.x-commerce .leading-\\[25px\\], .x-commerce.leading-\\[25px\\] {
  --tw-leading: 25px;
  line-height: 25px;
}
.x-commerce .leading-\\[28px\\], .x-commerce.leading-\\[28px\\] {
  --tw-leading: 28px;
  line-height: 28px;
}
.x-commerce .leading-\\[34px\\], .x-commerce.leading-\\[34px\\] {
  --tw-leading: 34px;
  line-height: 34px;
}
.x-commerce .leading-none, .x-commerce.leading-none {
  --tw-leading: 1;
  line-height: 1;
}
.x-commerce .font-\\[510\\], .x-commerce.font-\\[510\\] {
  --tw-font-weight: 510;
  font-weight: 510;
}
.x-commerce .font-\\[590\\], .x-commerce.font-\\[590\\] {
  --tw-font-weight: 590;
  font-weight: 590;
}
.x-commerce .font-\\[weight\\:inherit\\], .x-commerce.font-\\[weight\\:inherit\\] {
  --tw-font-weight: inherit;
  font-weight: inherit;
}
.x-commerce .font-bold, .x-commerce.font-bold {
  --tw-font-weight: var(--font-weight-bold, 700);
  font-weight: var(--font-weight-bold, 700);
}
.x-commerce .font-extrabold, .x-commerce.font-extrabold {
  --tw-font-weight: var(--font-weight-extrabold, 800);
  font-weight: var(--font-weight-extrabold, 800);
}
.x-commerce .font-medium, .x-commerce.font-medium {
  --tw-font-weight: var(--font-weight-medium, 500);
  font-weight: var(--font-weight-medium, 500);
}
.x-commerce .font-normal, .x-commerce.font-normal {
  --tw-font-weight: var(--font-weight-normal, 400);
  font-weight: var(--font-weight-normal, 400);
}
.x-commerce .font-semibold, .x-commerce.font-semibold {
  --tw-font-weight: var(--font-weight-semibold, 600);
  font-weight: var(--font-weight-semibold, 600);
}
.x-commerce .tracking-\\[-0\\.02em\\], .x-commerce.tracking-\\[-0\\.02em\\] {
  --tw-tracking: -0.02em;
  letter-spacing: -0.02em;
}
.x-commerce .tracking-\\[-0\\.004em\\], .x-commerce.tracking-\\[-0\\.004em\\] {
  --tw-tracking: -0.004em;
  letter-spacing: -0.004em;
}
.x-commerce .tracking-\\[-0\\.4px\\], .x-commerce.tracking-\\[-0\\.4px\\] {
  --tw-tracking: -0.4px;
  letter-spacing: -0.4px;
}
.x-commerce .tracking-\\[-0\\.005em\\], .x-commerce.tracking-\\[-0\\.005em\\] {
  --tw-tracking: -0.005em;
  letter-spacing: -0.005em;
}
.x-commerce .tracking-\\[-0\\.08px\\], .x-commerce.tracking-\\[-0\\.08px\\] {
  --tw-tracking: -0.08px;
  letter-spacing: -0.08px;
}
.x-commerce .tracking-\\[-0\\.12px\\], .x-commerce.tracking-\\[-0\\.12px\\] {
  --tw-tracking: -0.12px;
  letter-spacing: -0.12px;
}
.x-commerce .tracking-\\[-0\\.15px\\], .x-commerce.tracking-\\[-0\\.15px\\] {
  --tw-tracking: -0.15px;
  letter-spacing: -0.15px;
}
.x-commerce .tracking-\\[-0\\.26px\\], .x-commerce.tracking-\\[-0\\.26px\\] {
  --tw-tracking: -0.26px;
  letter-spacing: -0.26px;
}
.x-commerce .tracking-\\[-0\\.38px\\], .x-commerce.tracking-\\[-0\\.38px\\] {
  --tw-tracking: -0.38px;
  letter-spacing: -0.38px;
}
.x-commerce .tracking-\\[-0\\.46px\\], .x-commerce.tracking-\\[-0\\.46px\\] {
  --tw-tracking: -0.46px;
  letter-spacing: -0.46px;
}
.x-commerce .tracking-\\[-0\\.085px\\], .x-commerce.tracking-\\[-0\\.085px\\] {
  --tw-tracking: -0.085px;
  letter-spacing: -0.085px;
}
.x-commerce .tracking-\\[0\\.2px\\], .x-commerce.tracking-\\[0\\.2px\\] {
  --tw-tracking: 0.2px;
  letter-spacing: 0.2px;
}
.x-commerce .tracking-\\[0\\.06px\\], .x-commerce.tracking-\\[0\\.06px\\] {
  --tw-tracking: 0.06px;
  letter-spacing: 0.06px;
}
.x-commerce .tracking-\\[0\\.12px\\], .x-commerce.tracking-\\[0\\.12px\\] {
  --tw-tracking: 0.12px;
  letter-spacing: 0.12px;
}
.x-commerce .tracking-\\[0\\.15px\\], .x-commerce.tracking-\\[0\\.15px\\] {
  --tw-tracking: 0.15px;
  letter-spacing: 0.15px;
}
.x-commerce .tracking-\\[0\\.16em\\], .x-commerce.tracking-\\[0\\.16em\\] {
  --tw-tracking: 0.16em;
  letter-spacing: 0.16em;
}
.x-commerce .tracking-\\[0\\.16px\\], .x-commerce.tracking-\\[0\\.16px\\] {
  --tw-tracking: 0.16px;
  letter-spacing: 0.16px;
}
.x-commerce .tracking-\\[0\\.23px\\], .x-commerce.tracking-\\[0\\.23px\\] {
  --tw-tracking: 0.23px;
  letter-spacing: 0.23px;
}
.x-commerce .tracking-\\[0\\.31px\\], .x-commerce.tracking-\\[0\\.31px\\] {
  --tw-tracking: 0.31px;
  letter-spacing: 0.31px;
}
.x-commerce .tracking-\\[0\\.35px\\], .x-commerce.tracking-\\[0\\.35px\\] {
  --tw-tracking: 0.35px;
  letter-spacing: 0.35px;
}
.x-commerce .tracking-\\[0\\.43px\\], .x-commerce.tracking-\\[0\\.43px\\] {
  --tw-tracking: 0.43px;
  letter-spacing: 0.43px;
}
.x-commerce .tracking-\\[0\\.44px\\], .x-commerce.tracking-\\[0\\.44px\\] {
  --tw-tracking: 0.44px;
  letter-spacing: 0.44px;
}
.x-commerce .tracking-\\[0\\.47px\\], .x-commerce.tracking-\\[0\\.47px\\] {
  --tw-tracking: 0.47px;
  letter-spacing: 0.47px;
}
.x-commerce .text-pretty, .x-commerce.text-pretty {
  text-wrap: pretty;
}
.x-commerce .break-words, .x-commerce.break-words {
  overflow-wrap: break-word;
}
.x-commerce .wrap-anywhere, .x-commerce.wrap-anywhere {
  overflow-wrap: anywhere;
}
.x-commerce .wrap-break-word, .x-commerce.wrap-break-word {
  overflow-wrap: break-word;
}
.x-commerce .break-all, .x-commerce.break-all {
  word-break: break-all;
}
.x-commerce .whitespace-normal, .x-commerce.whitespace-normal {
  white-space: normal;
}
.x-commerce .whitespace-nowrap, .x-commerce.whitespace-nowrap {
  white-space: nowrap;
}
.x-commerce .whitespace-pre, .x-commerce.whitespace-pre {
  white-space: pre;
}
.x-commerce .whitespace-pre-wrap, .x-commerce.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.x-commerce .text-\\[\\#1a1a1a\\], .x-commerce.text-\\[\\#1a1a1a\\] {
  color: #1a1a1a;
}
.x-commerce .text-\\[\\#3c4043\\], .x-commerce.text-\\[\\#3c4043\\] {
  color: #3c4043;
}
.x-commerce .text-\\[\\#5e5e5e\\], .x-commerce.text-\\[\\#5e5e5e\\] {
  color: #5e5e5e;
}
.x-commerce .text-\\[\\#333\\], .x-commerce.text-\\[\\#333\\] {
  color: #333;
}
.x-commerce .text-\\[\\#0890ff\\], .x-commerce.text-\\[\\#0890ff\\] {
  color: #0890ff;
}
.x-commerce .text-\\[\\#003087\\], .x-commerce.text-\\[\\#003087\\] {
  color: #003087;
}
.x-commerce .text-\\[\\#202124\\], .x-commerce.text-\\[\\#202124\\] {
  color: #202124;
}
.x-commerce .text-\\[\\#b42318\\], .x-commerce.text-\\[\\#b42318\\] {
  color: #b42318;
}
.x-commerce .text-\\[\\#d93025\\], .x-commerce.text-\\[\\#d93025\\] {
  color: #d93025;
}
.x-commerce .text-\\[\\#f5f5f7\\], .x-commerce.text-\\[\\#f5f5f7\\] {
  color: #f5f5f7;
}
.x-commerce .text-\\[\\#fcfcfc\\], .x-commerce.text-\\[\\#fcfcfc\\] {
  color: #fcfcfc;
}
.x-commerce .text-\\[color\\:inherit\\], .x-commerce.text-\\[color\\:inherit\\] {
  color: inherit;
}
.x-commerce .text-\\[var\\(--x-bg-primary\\)\\], .x-commerce.text-\\[var\\(--x-bg-primary\\)\\] {
  color: var(--x-bg-primary);
}
.x-commerce .text-\\[var\\(--x-fg-destructive\\)\\]\\!, .x-commerce.text-\\[var\\(--x-fg-destructive\\)\\]\\! {
  color: var(--x-fg-destructive) !important;
}
.x-commerce .text-black, .x-commerce.text-black {
  color: var(--x-black);
}
.x-commerce .text-black-70, .x-commerce.text-black-70 {
  color: var(--x-black-70);
}
.x-commerce .text-blue-500, .x-commerce.text-blue-500 {
  color: var(--x-blue-500);
}
.x-commerce .text-blue-600, .x-commerce.text-blue-600 {
  color: var(--x-blue-600);
}
.x-commerce .text-brand, .x-commerce.text-brand {
  color: var(--x-fg-brand);
}
.x-commerce .text-destructive, .x-commerce.text-destructive {
  color: var(--x-fg-destructive);
}
.x-commerce .text-fg-alpha-10, .x-commerce.text-fg-alpha-10 {
  color: var(--x-fg-alpha-10);
}
.x-commerce .text-inherit, .x-commerce.text-inherit {
  color: inherit;
}
.x-commerce .text-inverted, .x-commerce.text-inverted {
  color: var(--x-fg-inverted);
}
.x-commerce .text-on-color, .x-commerce.text-on-color {
  color: var(--x-fg-on-color);
}
.x-commerce .text-plum-500, .x-commerce.text-plum-500 {
  color: var(--x-plum-500);
}
.x-commerce .text-primary, .x-commerce.text-primary {
  color: var(--x-fg-primary);
}
.x-commerce .text-primary\\/70, .x-commerce.text-primary\\/70 {
  color: var(--x-fg-primary);
  @supports (color: color-mix(in lab, red, red)) {
    color: color-mix(in oklab, var(--x-fg-primary) 70%, transparent);
  }
}
.x-commerce .text-red-400, .x-commerce.text-red-400 {
  color: var(--x-red-400);
}
.x-commerce .text-secondary, .x-commerce.text-secondary {
  color: var(--x-fg-secondary);
}
.x-commerce .text-success, .x-commerce.text-success {
  color: var(--x-fg-success);
}
.x-commerce .text-teal-500, .x-commerce.text-teal-500 {
  color: var(--x-teal-500);
}
.x-commerce .text-tertiary, .x-commerce.text-tertiary {
  color: var(--x-fg-tertiary);
}
.x-commerce .text-transparent, .x-commerce.text-transparent {
  color: transparent;
}
.x-commerce .text-warning, .x-commerce.text-warning {
  color: var(--x-fg-warning);
}
.x-commerce .text-white, .x-commerce.text-white {
  color: var(--x-white);
}
.x-commerce .text-white-70, .x-commerce.text-white-70 {
  color: var(--x-white-70);
}
.x-commerce .capitalize, .x-commerce.capitalize {
  text-transform: capitalize;
}
.x-commerce .lowercase, .x-commerce.lowercase {
  text-transform: lowercase;
}
.x-commerce .uppercase, .x-commerce.uppercase {
  text-transform: uppercase;
}
.x-commerce .italic, .x-commerce.italic {
  font-style: italic;
}
.x-commerce .tabular-nums, .x-commerce.tabular-nums {
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,);
}
.x-commerce .line-through, .x-commerce.line-through {
  text-decoration-line: line-through;
}
.x-commerce .underline, .x-commerce.underline {
  text-decoration-line: underline;
}
.x-commerce .antialiased, .x-commerce.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.x-commerce .opacity-0, .x-commerce.opacity-0 {
  opacity: 0%;
}
.x-commerce .opacity-25, .x-commerce.opacity-25 {
  opacity: 25%;
}
.x-commerce .opacity-40, .x-commerce.opacity-40 {
  opacity: 40%;
}
.x-commerce .opacity-50, .x-commerce.opacity-50 {
  opacity: 50%;
}
.x-commerce .opacity-60, .x-commerce.opacity-60 {
  opacity: 60%;
}
.x-commerce .opacity-70, .x-commerce.opacity-70 {
  opacity: 70%;
}
.x-commerce .opacity-75, .x-commerce.opacity-75 {
  opacity: 75%;
}
.x-commerce .opacity-100, .x-commerce.opacity-100 {
  opacity: 100%;
}
.x-commerce .mix-blend-soft-light, .x-commerce.mix-blend-soft-light {
  mix-blend-mode: soft-light;
}
.x-commerce .shadow, .x-commerce.shadow {
  --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-2xl, .x-commerce.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, rgb(0 0 0 / 0.25));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_0\\.3px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\,0_23px_20px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\,0_7px_9px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_0_0\\.3px_rgba\\(0\\,0\\,0\\,0\\.16\\)\\,0_23px_20px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\,0_7px_9px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 0 0.3px var(--tw-shadow-color, rgba(0,0,0,0.16)), 0 23px 20px var(--tw-shadow-color, rgba(0,0,0,0.08)), 0 7px 9px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_0_0_transparent\\], .x-commerce.shadow-\\[0_0_0_0_transparent\\] {
  --tw-shadow: 0 0 0 0 var(--tw-shadow-color, transparent);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_2px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\],.x-commerce.shadow-\\[0_0_2px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\] {
  --tw-shadow: 0 0 2px var(--tw-shadow-color, rgba(0,0,0,0.06));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_0_12px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0_0_12px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0 0 12px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\],.x-commerce.shadow-\\[0_1px_2px_rgba\\(0\\,0\\,0\\,0\\.08\\)\\] {
  --tw-shadow: 0 1px 2px var(--tw-shadow-color, rgba(0,0,0,0.08));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_6px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_2px_6px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 2px 6px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\],.x-commerce.shadow-\\[0_2px_8px_rgba\\(0\\,0\\,0\\,0\\.04\\)\\] {
  --tw-shadow: 0 2px 8px var(--tw-shadow-color, rgba(0,0,0,0.04));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_2px_10px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\],.x-commerce.shadow-\\[0_2px_10px_rgba\\(0\\,0\\,0\\,0\\.06\\)\\] {
  --tw-shadow: 0 2px 10px var(--tw-shadow-color, rgba(0,0,0,0.06));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_4px_24px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0_4px_24px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0 4px 24px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0_40px_0_0_var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\],.x-commerce.shadow-\\[0_40px_0_0_var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\] {
  --tw-shadow: 0 40px 0 0 var(--tw-shadow-color, var(--x-modal-bg,var(--x-bg-primary)));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_0px_1px_rgba\\(20\\,20\\,20\\,0\\.08\\)\\,0px_0px_4px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\,0px_16px_24px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\],.x-commerce.shadow-\\[0px_0px_0px_1px_rgba\\(20\\,20\\,20\\,0\\.08\\)\\,0px_0px_4px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\,0px_16px_24px_0px_rgba\\(20\\,20\\,20\\,0\\.07\\)\\] {
  --tw-shadow: 0px 0px 0px 1px var(--tw-shadow-color, rgba(20,20,20,0.08)), 0px 0px 4px 0px var(--tw-shadow-color, rgba(20,20,20,0.07)), 0px 16px 24px 0px var(--tw-shadow-color, rgba(20,20,20,0.07));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_12px_0px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\],.x-commerce.shadow-\\[0px_0px_12px_0px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\] {
  --tw-shadow: 0px 0px 12px 0px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\,0px_10\\.154px_32\\.307px_1\\.846px_rgba\\(0\\,0\\,0\\,0\\.36\\)\\,0px_0px_0px_0\\.231px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\,0px_10\\.154px_32\\.307px_1\\.846px_rgba\\(0\\,0\\,0\\,0\\.36\\)\\,0px_0px_0px_0\\.231px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0px 0px 16px 0px var(--tw-shadow-color, rgba(0,0,0,0.12)), 0px 10.154px 32.307px 1.846px var(--tw-shadow-color, rgba(0,0,0,0.36)), 0px 0px 0px 0.231px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\],.x-commerce.shadow-\\[0px_0px_16px_0px_rgba\\(0\\,0\\,0\\,0\\.12\\)\\] {
  --tw-shadow: 0px 0px 16px 0px var(--tw-shadow-color, rgba(0,0,0,0.12));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-\\[0px_1px_2px_0px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\,0px_0px_8px_0px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\],.x-commerce.shadow-\\[0px_1px_2px_0px_rgba\\(0\\,0\\,0\\,0\\.15\\)\\,0px_0px_8px_0px_rgba\\(0\\,0\\,0\\,0\\.1\\)\\] {
  --tw-shadow: 0px 1px 2px 0px var(--tw-shadow-color, rgba(0,0,0,0.15)), 0px 0px 8px 0px var(--tw-shadow-color, rgba(0,0,0,0.1));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-lg, .x-commerce.shadow-lg {
  --tw-shadow: var(--x-shadow-lg);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-none, .x-commerce.shadow-none {
  --tw-shadow: 0 0 #0000;
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-sm, .x-commerce.shadow-sm {
  --tw-shadow: var(--x-shadow-sm);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .shadow-xs, .x-commerce.shadow-xs {
  --tw-shadow: 0 1px 2px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.05));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring, .x-commerce.ring {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-1, .x-commerce.ring-1 {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-2, .x-commerce.ring-2 {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .ring-\\[\\#0890ff\\], .x-commerce.ring-\\[\\#0890ff\\] {
  --tw-ring-color: #0890ff;
}
.x-commerce .ring-black\\/10, .x-commerce.ring-black\\/10 {
  --tw-ring-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-ring-color: color-mix(in oklab, var(--x-black) 10%, transparent);
  }
}
.x-commerce .ring-blue-500, .x-commerce.ring-blue-500 {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .ring-fg-alpha-15, .x-commerce.ring-fg-alpha-15 {
  --tw-ring-color: var(--x-fg-alpha-15);
}
.x-commerce .outline-hidden, .x-commerce.outline-hidden {
  --tw-outline-style: none;
  outline-style: none;
  @media (forced-colors: active) {
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
}
.x-commerce .x-link:focus-visible, .x-commerce.x-link:focus-visible {
  outline-width: 1px;
  outline-style: var(--tw-outline-style);
  outline-width: 2px;
  outline-offset: 2px;
}
.x-commerce .outline, .x-commerce.outline {
  outline-style: var(--tw-outline-style);
  outline-width: 1px;
}
.x-commerce .blur, .x-commerce.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .drop-shadow-\\[0px_0px_6px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\],.x-commerce.drop-shadow-\\[0px_0px_6px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\] {
  --tw-drop-shadow-size: drop-shadow(0px 0px 6px var(--tw-drop-shadow-color, rgba(0,0,0,0.2)));
  --tw-drop-shadow: var(--tw-drop-shadow-size);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .filter, .x-commerce.filter {
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .backdrop-blur-\\[6px\\], .x-commerce.backdrop-blur-\\[6px\\] {
  --tw-backdrop-blur: blur(6px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .backdrop-blur-lg, .x-commerce.backdrop-blur-lg {
  --tw-backdrop-blur: blur(var(--blur-lg, 16px));
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .backdrop-blur-xs, .x-commerce.backdrop-blur-xs {
  --tw-backdrop-blur: blur(var(--blur-xs, 4px));
  -webkit-backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
  backdrop-filter: var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);
}
.x-commerce .transition, .x-commerce.transition {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter, display, content-visibility, overlay, pointer-events;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[background-color\\], .x-commerce.transition-\\[background-color\\] {
  transition-property: background-color;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[color\\,border-color\\,box-shadow\\,background-color\\],.x-commerce.transition-\\[color\\,border-color\\,box-shadow\\,background-color\\] {
  transition-property: color,border-color,box-shadow,background-color;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[grid-template-rows\\,margin\\,opacity\\],.x-commerce.transition-\\[grid-template-rows\\,margin\\,opacity\\] {
  transition-property: grid-template-rows,margin,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[grid-template-rows\\], .x-commerce.transition-\\[grid-template-rows\\] {
  transition-property: grid-template-rows;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[height\\], .x-commerce.transition-\\[height\\] {
  transition-property: height;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[opacity\\,scale\\],.x-commerce.transition-\\[opacity\\,scale\\] {
  transition-property: opacity,scale;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[scale\\,opacity\\],.x-commerce.transition-\\[scale\\,opacity\\] {
  transition-property: scale,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[scale\\,rotate\\],.x-commerce.transition-\\[scale\\,rotate\\] {
  transition-property: scale,rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[transform\\,opacity\\],.x-commerce.transition-\\[transform\\,opacity\\] {
  transition-property: transform,opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-\\[translate\\,rotate\\],.x-commerce.transition-\\[translate\\,rotate\\] {
  transition-property: translate,rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-all, .x-commerce.transition-all {
  transition-property: all;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-colors, .x-commerce.transition-colors {
  transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-opacity, .x-commerce.transition-opacity {
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-transform, .x-commerce.transition-transform {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .transition-none, .x-commerce.transition-none {
  transition-property: none;
}
.x-commerce .delay-0, .x-commerce.delay-0 {
  transition-delay: 0ms;
}
.x-commerce .delay-\\[60ms\\], .x-commerce.delay-\\[60ms\\] {
  transition-delay: 60ms;
}
.x-commerce .duration-\\(--x-commerce-motion-duration\\), .x-commerce.duration-\\(--x-commerce-motion-duration\\) {
  --tw-duration: var(--x-commerce-motion-duration);
  transition-duration: var(--x-commerce-motion-duration);
}
.x-commerce .duration-100, .x-commerce.duration-100 {
  --tw-duration: 100ms;
  transition-duration: 100ms;
}
.x-commerce .duration-150, .x-commerce.duration-150 {
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .duration-200, .x-commerce.duration-200 {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
.x-commerce .duration-300, .x-commerce.duration-300 {
  --tw-duration: 300ms;
  transition-duration: 300ms;
}
.x-commerce .duration-\\[400ms\\], .x-commerce.duration-\\[400ms\\] {
  --tw-duration: 400ms;
  transition-duration: 400ms;
}
.x-commerce .ease-\\(--x-commerce-motion-ease\\), .x-commerce.ease-\\(--x-commerce-motion-ease\\) {
  --tw-ease: var(--x-commerce-motion-ease);
  transition-timing-function: var(--x-commerce-motion-ease);
}
.x-commerce .ease-\\[cubic-bezier\\(0\\.2\\,1\\.15\\,0\\.4\\,1\\)\\],.x-commerce.ease-\\[cubic-bezier\\(0\\.2\\,1\\.15\\,0\\.4\\,1\\)\\] {
  --tw-ease: cubic-bezier(0.2,1.15,0.4,1);
  transition-timing-function: cubic-bezier(0.2,1.15,0.4,1);
}
.x-commerce .ease-\\[cubic-bezier\\(0\\.34\\,1\\.56\\,0\\.64\\,1\\)\\],.x-commerce.ease-\\[cubic-bezier\\(0\\.34\\,1\\.56\\,0\\.64\\,1\\)\\] {
  --tw-ease: cubic-bezier(0.34,1.56,0.64,1);
  transition-timing-function: cubic-bezier(0.34,1.56,0.64,1);
}
.x-commerce .ease-out, .x-commerce.ease-out {
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .\\[contain\\:layout\\], .x-commerce.\\[contain\\:layout\\] {
  contain: layout;
}
.x-commerce .\\[contain\\:size\\], .x-commerce.\\[contain\\:size\\] {
  contain: size;
}
.x-commerce .outline-none, .x-commerce.outline-none {
  --tw-outline-style: none;
  outline-style: none;
}
.x-commerce .select-none, .x-commerce.select-none {
  -webkit-user-select: none;
  user-select: none;
}
.x-commerce .\\[--flow-inset-top\\:env\\(safe-area-inset-top\\,0px\\)\\],.x-commerce.\\[--flow-inset-top\\:env\\(safe-area-inset-top\\,0px\\)\\] {
  --flow-inset-top: env(safe-area-inset-top,0px);
}
.x-commerce .\\[--x-btn-disabled-opacity\\:0\\.4\\], .x-commerce.\\[--x-btn-disabled-opacity\\:0\\.4\\] {
  --x-btn-disabled-opacity: 0.4;
}
.x-commerce .\\[--x-commerce-gutter\\:--spacing\\(3\\)\\], .x-commerce.\\[--x-commerce-gutter\\:--spacing\\(3\\)\\] {
  --x-commerce-gutter: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[--x-commerce-gutter\\:1rem\\], .x-commerce.\\[--x-commerce-gutter\\:1rem\\] {
  --x-commerce-gutter: 1rem;
}
.x-commerce .\\[--x-commerce-plan-row-card\\:279px\\], .x-commerce.\\[--x-commerce-plan-row-card\\:279px\\] {
  --x-commerce-plan-row-card: 279px;
}
.x-commerce .\\[--x-commerce-surface-cap\\:100svh\\], .x-commerce.\\[--x-commerce-surface-cap\\:100svh\\] {
  --x-commerce-surface-cap: 100svh;
}
.x-commerce .\\[--x-modal-bg\\:var\\(--x-bg-modal\\)\\], .x-commerce.\\[--x-modal-bg\\:var\\(--x-bg-modal\\)\\] {
  --x-modal-bg: var(--x-bg-modal);
}
.x-commerce .\\[--x-modal-pad\\:--spacing\\(6\\)\\], .x-commerce.\\[--x-modal-pad\\:--spacing\\(6\\)\\] {
  --x-modal-pad: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[--x-modal-pad\\:0px\\], .x-commerce.\\[--x-modal-pad\\:0px\\] {
  --x-modal-pad: 0px;
}
.x-commerce .\\[--x-number-flow-fade-out\\:calc\\(\\(1_-_var\\(--x-number-flow-fade\\)\\)_\\*_var\\(--x-number-flow-bleed\\)\\)\\], .x-commerce.\\[--x-number-flow-fade-out\\:calc\\(\\(1_-_var\\(--x-number-flow-fade\\)\\)_\\*_var\\(--x-number-flow-bleed\\)\\)\\] {
  --x-number-flow-fade-out: calc((1 - var(--x-number-flow-fade)) * var(--x-number-flow-bleed));
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:1rem\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:1rem\\] {
  --x-plan-tabs-page-bottom: 1rem;
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:34px\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:34px\\] {
  --x-plan-tabs-page-bottom: 34px;
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.\\[--x-plan-tabs-page-bottom\\:env\\(safe-area-inset-bottom\\,0px\\)\\] {
  --x-plan-tabs-page-bottom: env(safe-area-inset-bottom,0px);
}
.x-commerce .\\[--x-plan-tabs-page-bottom\\:var\\(--x-modal-pad\\)\\], .x-commerce.\\[--x-plan-tabs-page-bottom\\:var\\(--x-modal-pad\\)\\] {
  --x-plan-tabs-page-bottom: var(--x-modal-pad);
}
.x-commerce .\\[--x-plan-tabs-page-x\\:1rem\\], .x-commerce.\\[--x-plan-tabs-page-x\\:1rem\\] {
  --x-plan-tabs-page-x: 1rem;
}
.x-commerce .\\[--x-plan-tabs-page-x\\:var\\(--x-modal-pad\\)\\], .x-commerce.\\[--x-plan-tabs-page-x\\:var\\(--x-modal-pad\\)\\] {
  --x-plan-tabs-page-x: var(--x-modal-pad);
}
.x-commerce .\\[--x-plan-tabs-page\\:var\\(--x-bg-primary\\)\\], .x-commerce.\\[--x-plan-tabs-page\\:var\\(--x-bg-primary\\)\\] {
  --x-plan-tabs-page: var(--x-bg-primary);
}
.x-commerce .\\[--x-safe-start\\:env\\(safe-area-inset-left\\,0px\\)\\],.x-commerce.\\[--x-safe-start\\:env\\(safe-area-inset-left\\,0px\\)\\] {
  --x-safe-start: env(safe-area-inset-left,0px);
}
.x-commerce .\\[--x-tab-pill-dir\\:1\\], .x-commerce.\\[--x-tab-pill-dir\\:1\\] {
  --x-tab-pill-dir: 1;
}
.x-commerce .\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\],.x-commerce.\\[-webkit-mask-image\\:linear-gradient\\(to_bottom\\,black\\,transparent\\)\\] {
  -webkit-mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\],.x-commerce.\\[-webkit-mask-image\\:linear-gradient\\(to_top\\,black\\,transparent\\)\\] {
  -webkit-mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .\\[-webkit-touch-callout\\:none\\], .x-commerce.\\[-webkit-touch-callout\\:none\\] {
  -webkit-touch-callout: none;
}
.x-commerce .\\[grid-area\\:1\\/1\\], .x-commerce.\\[grid-area\\:1\\/1\\] {
  grid-area: 1/1;
}
.x-commerce .ring-inset, .x-commerce.ring-inset {
  --tw-ring-inset: inset;
}
.x-commerce :is(.\\*\\*\\:scroll-mt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+52px\\)\\] *),.x-commerce:is(.\\*\\*\\:scroll-mt-\\[calc\\(env\\(safe-area-inset-top\\,0px\\)\\+52px\\)\\] *) {
  scroll-margin-top: calc(env(safe-area-inset-top,0px) + 52px);
}
.x-commerce .not-first\\:border-t:not(:first-child), .x-commerce.not-first\\:border-t:not(:first-child) {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .not-first\\:border-black\\/6:not(:first-child), .x-commerce.not-first\\:border-black\\/6:not(:first-child) {
  border-color: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-black) 6%, transparent);
  }
}
.x-commerce .not-first\\:pt-3:not(:first-child), .x-commerce.not-first\\:pt-3:not(:first-child) {
  padding-top: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .not-first\\:pt-3\\.5:not(:first-child), .x-commerce.not-first\\:pt-3\\.5:not(:first-child) {
  padding-top: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:bg-black-04:not(:has( > [data-list-group])), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:bg-black-04:not(:has( > [data-list-group])) {
  background-color: var(--x-black-04);
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:p-1:not(:has( > [data-list-group])), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:p-1:not(:has( > [data-list-group])) {
  padding: var(--spacing, 0.25rem);
}
@media (hover: hover) {
  .x-commerce .group-hover\\:translate-x-0\\.5:is(:where(.group):hover *), .x-commerce.group-hover\\:translate-x-0\\.5:is(:where(.group):hover *) {
    --tw-translate-x: calc(var(--spacing, 0.25rem) * 0.5);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .group-hover\\:text-primary:is(:where(.group):hover *), .x-commerce.group-hover\\:text-primary:is(:where(.group):hover *) {
    color: var(--x-fg-primary);
  }
  .x-commerce .group-hover\\:underline:is(:where(.group):hover *), .x-commerce.group-hover\\:underline:is(:where(.group):hover *) {
    text-decoration-line: underline;
  }
}
.x-commerce .group-active\\:text-primary:is(:where(.group):active *), .x-commerce.group-active\\:text-primary:is(:where(.group):active *) {
  color: var(--x-fg-primary);
}
.x-commerce .group-active\\:underline:is(:where(.group):active *), .x-commerce.group-active\\:underline:is(:where(.group):active *) {
  text-decoration-line: underline;
}
.x-commerce .group-data-checked\\:scale-100:is(:where(.group)[data-checked] *), .x-commerce.group-data-checked\\:scale-100:is(:where(.group)[data-checked] *) {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .group-data-checked\\/tile\\:scale-100:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:scale-100:is(:where(.group\\/tile)[data-checked] *) {
  --tw-scale-x: 100%;
  --tw-scale-y: 100%;
  --tw-scale-z: 100%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .group-data-checked\\/tile\\:opacity-0:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:opacity-0:is(:where(.group\\/tile)[data-checked] *) {
  opacity: 0%;
}
.x-commerce .group-data-checked\\/tile\\:opacity-100:is(:where(.group\\/tile)[data-checked] *), .x-commerce.group-data-checked\\/tile\\:opacity-100:is(:where(.group\\/tile)[data-checked] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:translate-x-\\[16px\\]:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:translate-x-\\[16px\\]:is(:where(.group\\/switch)[data-checked] *) {
  --tw-translate-x: 16px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:translate-x-\\[23px\\]:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:translate-x-\\[23px\\]:is(:where(.group\\/switch)[data-checked] *) {
  --tw-translate-x: 23px;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-blue-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-blue-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-blue-500);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-green-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-green-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-green-500);
}
.x-commerce .group-data-\\[checked\\]\\/switch\\:bg-red-500:is(:where(.group\\/switch)[data-checked] *), .x-commerce.group-data-\\[checked\\]\\/switch\\:bg-red-500:is(:where(.group\\/switch)[data-checked] *) {
  background-color: var(--x-red-500);
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="both"] *), .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="both"] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="end"] *), .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="end"] *) {
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="start"] *), .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/surface\\:opacity-100:is(:where(.group\\/surface)[data-scroll-fade="start"] *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=both\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="both"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=both\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="both"] ~ *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=end\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="end"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=end\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="end"] ~ *) {
  opacity: 100%;
}
.x-commerce .peer-data-\\[scroll-fade\\=start\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="start"] ~ *), .x-commerce.peer-data-\\[scroll-fade\\=start\\]\\:opacity-100:is(:where(.peer)[data-scroll-fade="start"] ~ *) {
  opacity: 100%;
}
.x-commerce .placeholder\\:text-secondary::placeholder, .x-commerce.placeholder\\:text-secondary::placeholder {
  color: var(--x-fg-secondary);
}
.x-commerce .placeholder\\:text-tertiary::placeholder, .x-commerce.placeholder\\:text-tertiary::placeholder {
  color: var(--x-fg-tertiary);
}
.x-commerce .before\\:pointer-events-none::before, .x-commerce.before\\:pointer-events-none::before {
  content: var(--tw-content);
  pointer-events: none;
}
.x-commerce .before\\:absolute::before, .x-commerce.before\\:absolute::before {
  content: var(--tw-content);
  position: absolute;
}
.x-commerce .before\\:-inset-x-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-inset-x-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  inset-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-inset-x-3::before, .x-commerce.before\\:-inset-x-3::before {
  content: var(--tw-content);
  inset-inline: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .before\\:inset-x-0::before, .x-commerce.before\\:inset-x-0::before {
  content: var(--tw-content);
  inset-inline: 0px;
}
.x-commerce .before\\:-top-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-top-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  top: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-top-6::before, .x-commerce.before\\:-top-6::before {
  content: var(--tw-content);
  top: calc(var(--spacing, 0.25rem) * -6);
}
.x-commerce .before\\:-top-8::before, .x-commerce.before\\:-top-8::before {
  content: var(--tw-content);
  top: calc(var(--spacing, 0.25rem) * -8);
}
.x-commerce .before\\:-bottom-\\(--x-modal-pad\\)::before, .x-commerce.before\\:-bottom-\\(--x-modal-pad\\)::before {
  content: var(--tw-content);
  bottom: calc(var(--x-modal-pad) * -1);
}
.x-commerce .before\\:-bottom-3::before, .x-commerce.before\\:-bottom-3::before {
  content: var(--tw-content);
  bottom: calc(var(--spacing, 0.25rem) * -3);
}
.x-commerce .before\\:-bottom-8::before, .x-commerce.before\\:-bottom-8::before {
  content: var(--tw-content);
  bottom: calc(var(--spacing, 0.25rem) * -8);
}
.x-commerce .before\\:bottom-full::before, .x-commerce.before\\:bottom-full::before {
  content: var(--tw-content);
  bottom: 100%;
}
.x-commerce .before\\:-z-10::before, .x-commerce.before\\:-z-10::before {
  content: var(--tw-content);
  z-index: calc(10 * -1);
}
.x-commerce .before\\:hidden::before, .x-commerce.before\\:hidden::before {
  content: var(--tw-content);
  display: none;
}
.x-commerce .before\\:h-6::before, .x-commerce.before\\:h-6::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .before\\:h-8::before, .x-commerce.before\\:h-8::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .before\\:h-14::before, .x-commerce.before\\:h-14::before {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .before\\:h-screen::before, .x-commerce.before\\:h-screen::before {
  content: var(--tw-content);
  height: 100vh;
}
.x-commerce .before\\:bg-\\(--x-modal-bg\\)::before, .x-commerce.before\\:bg-\\(--x-modal-bg\\)::before {
  content: var(--tw-content);
  background-color: var(--x-modal-bg);
}
.x-commerce .before\\:bg-\\(--x-plan-tabs-page\\)::before, .x-commerce.before\\:bg-\\(--x-plan-tabs-page\\)::before {
  content: var(--tw-content);
  background-color: var(--x-plan-tabs-page);
}
.x-commerce .before\\:bg-modal::before, .x-commerce.before\\:bg-modal::before {
  content: var(--tw-content);
  background-color: var(--x-bg-modal);
}
.x-commerce .before\\:bg-primary::before, .x-commerce.before\\:bg-primary::before {
  content: var(--tw-content);
  background-color: var(--x-bg-primary);
}
.x-commerce .before\\:bg-linear-to-b::before, .x-commerce.before\\:bg-linear-to-b::before {
  content: var(--tw-content);
  --tw-gradient-position: to bottom;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to bottom in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .before\\:bg-linear-to-t::before, .x-commerce.before\\:bg-linear-to-t::before {
  content: var(--tw-content);
  --tw-gradient-position: to top;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to top in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .before\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)_--spacing\\(6\\)\\)\\]::before,.x-commerce.before\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)_--spacing\\(6\\)\\)\\]::before {
  content: var(--tw-content);
  background-image: linear-gradient(to bottom,transparent,var(--x-modal-bg,var(--x-bg-primary)) calc(var(--spacing, 0.25rem) * 6));
}
.x-commerce .before\\:from-\\(--x-modal-bg\\)::before, .x-commerce.before\\:from-\\(--x-modal-bg\\)::before {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:from-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\]::before,.x-commerce.before\\:from-\\[var\\(--x-modal-bg\\,var\\(--x-bg-primary\\)\\)\\]::before {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg,var(--x-bg-primary));
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:to-transparent::before, .x-commerce.before\\:to-transparent::before {
  content: var(--tw-content);
  --tw-gradient-to: transparent;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_bottom\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_bottom\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to bottom,black calc(100% - 32px),rgb(0 0 0/var(--x-modal-fade)) calc(100% - 32px),transparent);
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_top\\,black\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_top\\,black\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to top,black,transparent);
}
.x-commerce .before\\:mask-\\[linear-gradient\\(to_top\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before,.x-commerce.before\\:mask-\\[linear-gradient\\(to_top\\,black_calc\\(100\\%-32px\\)\\,rgb\\(0_0_0\\/var\\(--x-modal-fade\\)\\)_calc\\(100\\%-32px\\)\\,transparent\\)\\]::before {
  content: var(--tw-content);
  mask-image: linear-gradient(to top,black calc(100% - 32px),rgb(0 0 0/var(--x-modal-fade)) calc(100% - 32px),transparent);
}
.x-commerce .before\\:opacity-0::before, .x-commerce.before\\:opacity-0::before {
  content: var(--tw-content);
  opacity: 0%;
}
.x-commerce .before\\:transition-opacity::before, .x-commerce.before\\:transition-opacity::before {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .before\\:\\[transition-property\\:--x-modal-fade\\]::before, .x-commerce.before\\:\\[transition-property\\:--x-modal-fade\\]::before {
  content: var(--tw-content);
  transition-property: --x-modal-fade;
}
.x-commerce .before\\:duration-150::before, .x-commerce.before\\:duration-150::before {
  content: var(--tw-content);
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .before\\:ease-out::before, .x-commerce.before\\:ease-out::before {
  content: var(--tw-content);
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .before\\:content-\\[\\'\\'\\]::before, .x-commerce.before\\:content-\\[\\'\\'\\]::before {
  --tw-content: '';
  content: var(--tw-content);
}
.x-commerce .before\\:content-\\[\\'\\\\2060\\'\\]::before, .x-commerce.before\\:content-\\[\\'\\\\2060\\'\\]::before {
  --tw-content: '\\2060';
  content: var(--tw-content);
}
.x-commerce .before\\:content-\\[attr\\(data-price\\)\\]::before, .x-commerce.before\\:content-\\[attr\\(data-price\\)\\]::before {
  --tw-content: attr(data-price);
  content: var(--tw-content);
}
.x-commerce .before\\:\\[--x-modal-fade\\:0\\]::before, .x-commerce.before\\:\\[--x-modal-fade\\:0\\]::before {
  content: var(--tw-content);
  --x-modal-fade: 0;
}
.x-commerce .group-data-\\[overflow-y-end\\]\\/choice-column\\:before\\:opacity-100:is(:where(.group\\/choice-column)[data-overflow-y-end] *)::before, .x-commerce.group-data-\\[overflow-y-end\\]\\/choice-column\\:before\\:opacity-100:is(:where(.group\\/choice-column)[data-overflow-y-end] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="both"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="both"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="end"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/migration-scroll\\:before\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="end"] *)::before {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=end\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="end"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=end\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="end"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="start"] *)::before, .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/xds-modal\\:before\\:\\[--x-modal-fade\\:1\\]:is(:where(.group\\/xds-modal)[data-scroll-fade="start"] *)::before {
  content: var(--tw-content);
  --x-modal-fade: 1;
}
.x-commerce .after\\:pointer-events-none::after, .x-commerce.after\\:pointer-events-none::after {
  content: var(--tw-content);
  pointer-events: none;
}
.x-commerce .after\\:absolute::after, .x-commerce.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}
.x-commerce .after\\:inset-0::after, .x-commerce.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}
.x-commerce .after\\:-inset-x-\\(--x-modal-pad\\)::after, .x-commerce.after\\:-inset-x-\\(--x-modal-pad\\)::after {
  content: var(--tw-content);
  inset-inline: calc(var(--x-modal-pad) * -1);
}
.x-commerce .after\\:inset-x-0::after, .x-commerce.after\\:inset-x-0::after {
  content: var(--tw-content);
  inset-inline: 0px;
}
.x-commerce .after\\:top-full::after, .x-commerce.after\\:top-full::after {
  content: var(--tw-content);
  top: 100%;
}
.x-commerce .after\\:-bottom-\\(--x-modal-pad\\)::after, .x-commerce.after\\:-bottom-\\(--x-modal-pad\\)::after {
  content: var(--tw-content);
  bottom: calc(var(--x-modal-pad) * -1);
}
.x-commerce .after\\:block::after, .x-commerce.after\\:block::after {
  content: var(--tw-content);
  display: block;
}
.x-commerce .after\\:size-1\\.5::after, .x-commerce.after\\:size-1\\.5::after {
  content: var(--tw-content);
  width: calc(var(--spacing, 0.25rem) * 1.5);
  height: calc(var(--spacing, 0.25rem) * 1.5);
}
.x-commerce .after\\:h-8::after, .x-commerce.after\\:h-8::after {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 8);
}
.x-commerce .after\\:h-14::after, .x-commerce.after\\:h-14::after {
  content: var(--tw-content);
  height: calc(var(--spacing, 0.25rem) * 14);
}
.x-commerce .after\\:h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\]::after,.x-commerce.after\\:h-\\[calc\\(var\\(--x-plan-tabs-footer-h\\,0px\\)\\+--spacing\\(3\\)\\)\\]::after {
  content: var(--tw-content);
  height: calc(var(--x-plan-tabs-footer-h,0px) + calc(var(--spacing, 0.25rem) * 3));
}
.x-commerce .after\\:shrink-0::after, .x-commerce.after\\:shrink-0::after {
  content: var(--tw-content);
  flex-shrink: 0;
}
.x-commerce .after\\:rounded-\\[inherit\\]::after, .x-commerce.after\\:rounded-\\[inherit\\]::after {
  content: var(--tw-content);
  border-radius: inherit;
}
.x-commerce .after\\:rounded-full::after, .x-commerce.after\\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}
.x-commerce .after\\:border::after, .x-commerce.after\\:border::after {
  content: var(--tw-content);
  border-style: var(--tw-border-style);
  border-width: 1px;
}
.x-commerce .after\\:border-\\[0\\.63px\\]::after, .x-commerce.after\\:border-\\[0\\.63px\\]::after {
  content: var(--tw-content);
  border-style: var(--tw-border-style);
  border-width: 0.63px;
}
.x-commerce .after\\:border-\\[rgba\\(252\\,252\\,252\\,0\\.06\\)\\]::after,.x-commerce.after\\:border-\\[rgba\\(252\\,252\\,252\\,0\\.06\\)\\]::after {
  content: var(--tw-content);
  border-color: rgba(252,252,252,0.06);
}
.x-commerce .after\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\]::after,.x-commerce.after\\:border-\\[rgba\\(255\\,255\\,255\\,0\\.1\\)\\]::after {
  content: var(--tw-content);
  border-color: rgba(255,255,255,0.1);
}
.x-commerce .after\\:bg-modal::after, .x-commerce.after\\:bg-modal::after {
  content: var(--tw-content);
  background-color: var(--x-bg-modal);
}
.x-commerce .after\\:bg-white::after, .x-commerce.after\\:bg-white::after {
  content: var(--tw-content);
  background-color: var(--x-white);
}
.x-commerce .after\\:bg-linear-to-t::after, .x-commerce.after\\:bg-linear-to-t::after {
  content: var(--tw-content);
  --tw-gradient-position: to top;
  @supports (background-image: linear-gradient(in lab, red, red)) {
    --tw-gradient-position: to top in oklab;
  }
  background-image: linear-gradient(var(--tw-gradient-stops));
}
.x-commerce .after\\:from-\\(--x-modal-bg\\)::after, .x-commerce.after\\:from-\\(--x-modal-bg\\)::after {
  content: var(--tw-content);
  --tw-gradient-from: var(--x-modal-bg);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .after\\:to-transparent::after, .x-commerce.after\\:to-transparent::after {
  content: var(--tw-content);
  --tw-gradient-to: transparent;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .after\\:mask-\\[linear-gradient\\(to_bottom\\,black\\,transparent\\)\\]::after,.x-commerce.after\\:mask-\\[linear-gradient\\(to_bottom\\,black\\,transparent\\)\\]::after {
  content: var(--tw-content);
  mask-image: linear-gradient(to bottom,black,transparent);
}
.x-commerce .after\\:opacity-0::after, .x-commerce.after\\:opacity-0::after {
  content: var(--tw-content);
  opacity: 0%;
}
.x-commerce .after\\:transition-opacity::after, .x-commerce.after\\:transition-opacity::after {
  content: var(--tw-content);
  transition-property: opacity;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .after\\:duration-150::after, .x-commerce.after\\:duration-150::after {
  content: var(--tw-content);
  --tw-duration: 150ms;
  transition-duration: 150ms;
}
.x-commerce .after\\:ease-out::after, .x-commerce.after\\:ease-out::after {
  content: var(--tw-content);
  --tw-ease: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
  transition-timing-function: var(--ease-out, cubic-bezier(0, 0, 0.2, 1));
}
.x-commerce .after\\:content-\\[\\'\\'\\]::after, .x-commerce.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}
.x-commerce .group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::after, .x-commerce.group-data-\\[scroll-fade\\=both\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="both"] *)::after {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .group-data-\\[scroll-fade\\=start\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="start"] *)::after, .x-commerce.group-data-\\[scroll-fade\\=start\\]\\/migration-scroll\\:after\\:opacity-100:is(:where(.group\\/migration-scroll)[data-scroll-fade="start"] *)::after {
  content: var(--tw-content);
  opacity: 100%;
}
.x-commerce .first\\:mt-0:first-child, .x-commerce.first\\:mt-0:first-child {
  margin-top: 0px;
}
.x-commerce .first\\:mb-1:first-child, .x-commerce.first\\:mb-1:first-child {
  margin-bottom: var(--spacing, 0.25rem);
}
.x-commerce .first\\:border-t-0:first-child, .x-commerce.first\\:border-t-0:first-child {
  border-top-style: var(--tw-border-style);
  border-top-width: 0px;
}
.x-commerce .first\\:pt-0:first-child, .x-commerce.first\\:pt-0:first-child {
  padding-top: 0px;
}
.x-commerce .first\\:pt-4:first-child, .x-commerce.first\\:pt-4:first-child {
  padding-top: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .last\\:pb-0:last-child, .x-commerce.last\\:pb-0:last-child {
  padding-bottom: 0px;
}
.x-commerce .last\\:pb-4:last-child, .x-commerce.last\\:pb-4:last-child {
  padding-bottom: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .empty\\:hidden:empty, .x-commerce.empty\\:hidden:empty {
  display: none;
}
.x-commerce .focus-within\\:border-active:focus-within, .x-commerce.focus-within\\:border-active:focus-within {
  border-color: var(--x-border-active);
}
.x-commerce .focus-within\\:border-destructive:focus-within, .x-commerce.focus-within\\:border-destructive:focus-within {
  border-color: var(--x-border-destructive);
}
.x-commerce .focus-within\\:border-normal:focus-within, .x-commerce.focus-within\\:border-normal:focus-within {
  border-color: var(--x-border-normal);
}
.x-commerce .focus-within\\:shadow-focus:focus-within, .x-commerce.focus-within\\:shadow-focus:focus-within {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-within\\:shadow-focus-destructive:focus-within, .x-commerce.focus-within\\:shadow-focus-destructive:focus-within {
  --tw-shadow: var(--x-shadow-focus-destructive);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
@media (hover: hover) {
  .x-commerce .hover\\:border-active:hover, .x-commerce.hover\\:border-active:hover {
    border-color: var(--x-border-active);
  }
  .x-commerce .hover\\:border-destructive:hover, .x-commerce.hover\\:border-destructive:hover {
    border-color: var(--x-border-destructive);
  }
  .x-commerce .hover\\:border-hover:hover, .x-commerce.hover\\:border-hover:hover {
    border-color: var(--x-border-hover);
  }
  .x-commerce .hover\\:border-neutral-700:hover, .x-commerce.hover\\:border-neutral-700:hover {
    border-color: var(--x-neutral-700);
  }
  .x-commerce .hover\\:bg-\\[var\\(--x-hover-subtle\\)\\]:hover, .x-commerce.hover\\:bg-\\[var\\(--x-hover-subtle\\)\\]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .hover\\:bg-black-50:hover, .x-commerce.hover\\:bg-black-50:hover {
    background-color: var(--x-black-50);
  }
  .x-commerce .hover\\:bg-btn-brand-hover:hover, .x-commerce.hover\\:bg-btn-brand-hover:hover {
    background-color: var(--x-btn-brand-hover);
  }
  .x-commerce .hover\\:bg-btn-destructive-hover:hover, .x-commerce.hover\\:bg-btn-destructive-hover:hover {
    background-color: var(--x-btn-destructive-hover);
  }
  .x-commerce .hover\\:bg-btn-ghost-hover:hover, .x-commerce.hover\\:bg-btn-ghost-hover:hover {
    background-color: var(--x-btn-ghost-hover);
  }
  .x-commerce .hover\\:bg-btn-inverted-hover:hover, .x-commerce.hover\\:bg-btn-inverted-hover:hover {
    background-color: var(--x-btn-inverted-hover);
  }
  .x-commerce .hover\\:bg-btn-primary-hover:hover, .x-commerce.hover\\:bg-btn-primary-hover:hover {
    background-color: var(--x-btn-primary-hover);
  }
  .x-commerce .hover\\:bg-btn-secondary-hover:hover, .x-commerce.hover\\:bg-btn-secondary-hover:hover {
    background-color: var(--x-btn-secondary-hover);
  }
  .x-commerce .hover\\:bg-btn-tertiary-hover:hover, .x-commerce.hover\\:bg-btn-tertiary-hover:hover {
    background-color: var(--x-btn-tertiary-hover);
  }
  .x-commerce .hover\\:bg-fg-alpha-10:hover, .x-commerce.hover\\:bg-fg-alpha-10:hover {
    background-color: var(--x-fg-alpha-10);
  }
  .x-commerce .hover\\:bg-fg-alpha-30:hover, .x-commerce.hover\\:bg-fg-alpha-30:hover {
    background-color: var(--x-fg-alpha-30);
  }
  .x-commerce .hover\\:bg-fg-alpha-50:hover, .x-commerce.hover\\:bg-fg-alpha-50:hover {
    background-color: var(--x-fg-alpha-50);
  }
  .x-commerce .hover\\:bg-gray-100:hover, .x-commerce.hover\\:bg-gray-100:hover {
    background-color: var(--color-gray-100, oklch(96.7% 0.003 264.542));
  }
  .x-commerce .hover\\:bg-purple-600:hover, .x-commerce.hover\\:bg-purple-600:hover {
    background-color: var(--x-purple-600);
  }
  .x-commerce .hover\\:bg-teal-500:hover, .x-commerce.hover\\:bg-teal-500:hover {
    background-color: var(--x-teal-500);
  }
  .x-commerce .hover\\:bg-white-10:hover, .x-commerce.hover\\:bg-white-10:hover {
    background-color: var(--x-white-10);
  }
  .x-commerce .hover\\:bg-white-30:hover, .x-commerce.hover\\:bg-white-30:hover {
    background-color: var(--x-white-30);
  }
  .x-commerce .hover\\:bg-white-90:hover, .x-commerce.hover\\:bg-white-90:hover {
    background-color: var(--x-white-90);
  }
  .x-commerce .hover\\:from-\\(--x-btn-primary-hover\\):hover, .x-commerce.hover\\:from-\\(--x-btn-primary-hover\\):hover {
    --tw-gradient-from: var(--x-btn-primary-hover);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
    --tw-gradient-to: var(--x-btn-primary-hover);
  }
  @supports (color: color-mix(in lab, red, red)) {
    .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
      --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary-hover),var(--x-bg-primary) 16%);
    }
  }
  .x-commerce .hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover,.x-commerce.hover\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-hover\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:hover {
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }
  .x-commerce .hover\\:text-on-color:hover, .x-commerce.hover\\:text-on-color:hover {
    color: var(--x-fg-on-color);
  }
  .x-commerce .hover\\:text-primary:hover, .x-commerce.hover\\:text-primary:hover {
    color: var(--x-fg-primary);
  }
  .x-commerce .hover\\:underline:hover, .x-commerce.hover\\:underline:hover {
    text-decoration-line: underline;
  }
  .x-commerce .hover\\:opacity-90:hover, .x-commerce.hover\\:opacity-90:hover {
    opacity: 90%;
  }
  .x-commerce .hover\\:shadow-md:hover, .x-commerce.hover\\:shadow-md:hover {
    --tw-shadow: var(--x-shadow-md);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
}
.x-commerce .focus\\:border-active:focus, .x-commerce.focus\\:border-active:focus {
  border-color: var(--x-border-active);
}
.x-commerce .focus\\:border-destructive:focus, .x-commerce.focus\\:border-destructive:focus {
  border-color: var(--x-border-destructive);
}
.x-commerce .focus\\:text-primary:focus, .x-commerce.focus\\:text-primary:focus {
  color: var(--x-fg-primary);
}
.x-commerce .focus-visible\\:border-active:focus-visible, .x-commerce.focus-visible\\:border-active:focus-visible {
  border-color: var(--x-border-active);
}
.x-commerce .focus-visible\\:bg-\\(--x-hover-subtle\\):focus-visible, .x-commerce.focus-visible\\:bg-\\(--x-hover-subtle\\):focus-visible {
  background-color: var(--x-hover-subtle);
}
.x-commerce .focus-visible\\:bg-\\[var\\(--x-bg-destructive\\)\\]:focus-visible, .x-commerce.focus-visible\\:bg-\\[var\\(--x-bg-destructive\\)\\]:focus-visible {
  background-color: var(--x-bg-destructive);
}
.x-commerce .focus-visible\\:bg-\\[var\\(--x-hover-subtle\\)\\]:focus-visible, .x-commerce.focus-visible\\:bg-\\[var\\(--x-hover-subtle\\)\\]:focus-visible {
  background-color: var(--x-hover-subtle);
}
.x-commerce .focus-visible\\:bg-black-10:focus-visible, .x-commerce.focus-visible\\:bg-black-10:focus-visible {
  background-color: var(--x-black-10);
}
.x-commerce .focus-visible\\:bg-fg-alpha-10:focus-visible, .x-commerce.focus-visible\\:bg-fg-alpha-10:focus-visible {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .focus-visible\\:bg-white-10:focus-visible, .x-commerce.focus-visible\\:bg-white-10:focus-visible {
  background-color: var(--x-white-10);
}
.x-commerce .focus-visible\\:text-primary:focus-visible, .x-commerce.focus-visible\\:text-primary:focus-visible {
  color: var(--x-fg-primary);
}
.x-commerce .focus-visible\\:shadow-focus:focus-visible, .x-commerce.focus-visible\\:shadow-focus:focus-visible {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-visible\\:ring-2:focus-visible, .x-commerce.focus-visible\\:ring-2:focus-visible {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .focus-visible\\:ring-blue-500:focus-visible, .x-commerce.focus-visible\\:ring-blue-500:focus-visible {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .focus-visible\\:outline:focus-visible, .x-commerce.focus-visible\\:outline:focus-visible {
  outline-style: var(--tw-outline-style);
  outline-width: 1px;
}
.x-commerce .focus-visible\\:outline-2:focus-visible, .x-commerce.focus-visible\\:outline-2:focus-visible {
  outline-style: var(--tw-outline-style);
  outline-width: 2px;
}
.x-commerce .focus-visible\\:-outline-offset-1:focus-visible, .x-commerce.focus-visible\\:-outline-offset-1:focus-visible {
  outline-offset: calc(1px * -1);
}
.x-commerce .focus-visible\\:-outline-offset-2:focus-visible, .x-commerce.focus-visible\\:-outline-offset-2:focus-visible {
  outline-offset: calc(2px * -1);
}
.x-commerce .focus-visible\\:outline-offset-2:focus-visible, .x-commerce.focus-visible\\:outline-offset-2:focus-visible {
  outline-offset: 2px;
}
.x-commerce .focus-visible\\:outline-offset-4:focus-visible, .x-commerce.focus-visible\\:outline-offset-4:focus-visible {
  outline-offset: 4px;
}
.x-commerce .focus-visible\\:outline-focus:focus-visible, .x-commerce.focus-visible\\:outline-focus:focus-visible {
  outline-color: var(--x-ring);
}
.x-commerce .active\\:bg-black-60:active, .x-commerce.active\\:bg-black-60:active {
  background-color: var(--x-black-60);
}
.x-commerce .active\\:bg-btn-brand-pressed:active, .x-commerce.active\\:bg-btn-brand-pressed:active {
  background-color: var(--x-btn-brand-pressed);
}
.x-commerce .active\\:bg-btn-destructive-pressed:active, .x-commerce.active\\:bg-btn-destructive-pressed:active {
  background-color: var(--x-btn-destructive-pressed);
}
.x-commerce .active\\:bg-btn-ghost-pressed:active, .x-commerce.active\\:bg-btn-ghost-pressed:active {
  background-color: var(--x-btn-ghost-pressed);
}
.x-commerce .active\\:bg-btn-inverted-pressed:active, .x-commerce.active\\:bg-btn-inverted-pressed:active {
  background-color: var(--x-btn-inverted-pressed);
}
.x-commerce .active\\:bg-btn-primary-pressed:active, .x-commerce.active\\:bg-btn-primary-pressed:active {
  background-color: var(--x-btn-primary-pressed);
}
.x-commerce .active\\:bg-btn-secondary-pressed:active, .x-commerce.active\\:bg-btn-secondary-pressed:active {
  background-color: var(--x-btn-secondary-pressed);
}
.x-commerce .active\\:bg-btn-tertiary-pressed:active, .x-commerce.active\\:bg-btn-tertiary-pressed:active {
  background-color: var(--x-btn-tertiary-pressed);
}
.x-commerce .active\\:bg-fg-alpha-60:active, .x-commerce.active\\:bg-fg-alpha-60:active {
  background-color: var(--x-fg-alpha-60);
}
.x-commerce .active\\:bg-white-15:active, .x-commerce.active\\:bg-white-15:active {
  background-color: var(--x-white-15);
}
.x-commerce .active\\:bg-white-40:active, .x-commerce.active\\:bg-white-40:active {
  background-color: var(--x-white-40);
}
.x-commerce .active\\:bg-white-80:active, .x-commerce.active\\:bg-white-80:active {
  background-color: var(--x-white-80);
}
.x-commerce .active\\:from-\\(--x-btn-primary-pressed\\):active, .x-commerce.active\\:from-\\(--x-btn-primary-pressed\\):active {
  --tw-gradient-from: var(--x-btn-primary-pressed);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .active\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-pressed\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:active,.x-commerce.active\\:to-\\[color-mix\\(in_srgb\\,var\\(--x-btn-primary-pressed\\)\\,var\\(--x-bg-primary\\)_16\\%\\)\\]:active {
  --tw-gradient-to: var(--x-btn-primary-pressed);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in srgb,var(--x-btn-primary-pressed),var(--x-bg-primary) 16%);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
@media (hover: hover) {
  .x-commerce .enabled\\:hover\\:bg-btn-primary-hover:enabled:hover, .x-commerce.enabled\\:hover\\:bg-btn-primary-hover:enabled:hover {
    background-color: var(--x-btn-primary-hover);
  }
  .x-commerce .enabled\\:hover\\:bg-btn-secondary-hover:enabled:hover, .x-commerce.enabled\\:hover\\:bg-btn-secondary-hover:enabled:hover {
    background-color: var(--x-btn-secondary-hover);
  }
}
.x-commerce .disabled\\:pointer-events-none:disabled, .x-commerce.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}
.x-commerce .disabled\\:cursor-default:disabled, .x-commerce.disabled\\:cursor-default:disabled {
  cursor: default;
}
.x-commerce .disabled\\:cursor-not-allowed:disabled, .x-commerce.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}
.x-commerce .disabled\\:opacity-50:disabled, .x-commerce.disabled\\:opacity-50:disabled {
  opacity: 50%;
}
.x-commerce .disabled\\:opacity-60:disabled, .x-commerce.disabled\\:opacity-60:disabled {
  opacity: 60%;
}
.x-commerce .disabled\\:opacity-70:disabled, .x-commerce.disabled\\:opacity-70:disabled {
  opacity: 70%;
}
@media (hover: hover) {
  .x-commerce .disabled\\:hover\\:border-normal:disabled:hover, .x-commerce.disabled\\:hover\\:border-normal:disabled:hover {
    border-color: var(--x-border-normal);
  }
}
.x-commerce :where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:block, .x-commerce:where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:block {
  display: block;
}
.x-commerce :where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:hidden, .x-commerce:where([data-theme='dark']) .in-data-\\[theme\\=\\'dark\\'\\]\\:hidden {
  display: none;
}
.x-commerce :where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:min-h-6, .x-commerce:where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:min-h-6 {
  min-height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce :where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:items-center, .x-commerce:where(:is(.x-commerce-plan-picker)) .in-\\[\\.x-commerce-plan-picker\\]\\:items-center {
  align-items: center;
}
.x-commerce .has-disabled\\:pointer-events-none:has(:disabled), .x-commerce.has-disabled\\:pointer-events-none:has(:disabled) {
  pointer-events: none;
}
.x-commerce .has-disabled\\:opacity-50:has(:disabled), .x-commerce.has-disabled\\:opacity-50:has(:disabled) {
  opacity: 50%;
}
@media (hover: hover) {
  .x-commerce .has-disabled\\:hover\\:border-normal:has(:disabled):hover, .x-commerce.has-disabled\\:hover\\:border-normal:has(:disabled):hover {
    border-color: var(--x-border-normal);
  }
}
.x-commerce .has-\\[\\[data-checkout-success\\]\\]\\:mx-auto:has(:is([data-checkout-success])), .x-commerce.has-\\[\\[data-checkout-success\\]\\]\\:mx-auto:has(:is([data-checkout-success])) {
  margin-inline: auto;
}
.x-commerce .has-\\[\\[data-checkout-success\\]\\]\\:max-w-\\[450px\\]:has(:is([data-checkout-success])), .x-commerce.has-\\[\\[data-checkout-success\\]\\]\\:max-w-\\[450px\\]:has(:is([data-checkout-success])) {
  max-width: 450px;
}
.x-commerce .aria-expanded\\:bg-black-50[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-black-50[aria-expanded="true"] {
  background-color: var(--x-black-50);
}
.x-commerce .aria-expanded\\:bg-btn-brand-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-brand-hover[aria-expanded="true"] {
  background-color: var(--x-btn-brand-hover);
}
.x-commerce .aria-expanded\\:bg-btn-destructive-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-destructive-hover[aria-expanded="true"] {
  background-color: var(--x-btn-destructive-hover);
}
.x-commerce .aria-expanded\\:bg-btn-ghost-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-ghost-hover[aria-expanded="true"] {
  background-color: var(--x-btn-ghost-hover);
}
.x-commerce .aria-expanded\\:bg-btn-inverted-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-inverted-hover[aria-expanded="true"] {
  background-color: var(--x-btn-inverted-hover);
}
.x-commerce .aria-expanded\\:bg-btn-primary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-primary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-primary-hover);
}
.x-commerce .aria-expanded\\:bg-btn-secondary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-secondary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-secondary-hover);
}
.x-commerce .aria-expanded\\:bg-btn-tertiary-hover[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-btn-tertiary-hover[aria-expanded="true"] {
  background-color: var(--x-btn-tertiary-hover);
}
.x-commerce .aria-expanded\\:bg-fg-alpha-50[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-fg-alpha-50[aria-expanded="true"] {
  background-color: var(--x-fg-alpha-50);
}
.x-commerce .aria-expanded\\:bg-white-10[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-10[aria-expanded="true"] {
  background-color: var(--x-white-10);
}
.x-commerce .aria-expanded\\:bg-white-30[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-30[aria-expanded="true"] {
  background-color: var(--x-white-30);
}
.x-commerce .aria-expanded\\:bg-white-90[aria-expanded="true"], .x-commerce.aria-expanded\\:bg-white-90[aria-expanded="true"] {
  background-color: var(--x-white-90);
}
.x-commerce .data-checked\\:border-\\(--x-fg-primary\\)[data-checked], .x-commerce.data-checked\\:border-\\(--x-fg-primary\\)[data-checked] {
  border-color: var(--x-fg-primary);
}
.x-commerce .data-checked\\:border-transparent[data-checked], .x-commerce.data-checked\\:border-transparent[data-checked] {
  border-color: transparent;
}
.x-commerce .data-checked\\:bg-blue-500\\/5[data-checked], .x-commerce.data-checked\\:bg-blue-500\\/5[data-checked] {
  background-color: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
}
.x-commerce .data-checked\\:text-primary[data-checked], .x-commerce.data-checked\\:text-primary[data-checked] {
  color: var(--x-fg-primary);
}
.x-commerce .data-checked\\:ring-2[data-checked], .x-commerce.data-checked\\:ring-2[data-checked] {
  --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .data-checked\\:ring-blue-500[data-checked], .x-commerce.data-checked\\:ring-blue-500[data-checked] {
  --tw-ring-color: var(--x-blue-500);
}
.x-commerce .data-disabled\\:cursor-not-allowed[data-disabled], .x-commerce.data-disabled\\:cursor-not-allowed[data-disabled] {
  cursor: not-allowed;
}
.x-commerce .data-disabled\\:opacity-50[data-disabled], .x-commerce.data-disabled\\:opacity-50[data-disabled] {
  opacity: 50%;
}
.x-commerce .data-disabled\\:opacity-70[data-disabled], .x-commerce.data-disabled\\:opacity-70[data-disabled] {
  opacity: 70%;
}
.x-commerce .data-disabled\\:opacity-100[data-disabled], .x-commerce.data-disabled\\:opacity-100[data-disabled] {
  opacity: 100%;
}
.x-commerce .data-ending-style\\:opacity-0[data-ending-style], .x-commerce.data-ending-style\\:opacity-0[data-ending-style] {
  opacity: 0%;
}
.x-commerce .data-ending-style\\:duration-200[data-ending-style], .x-commerce.data-ending-style\\:duration-200[data-ending-style] {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
.x-commerce .data-highlighted\\:bg-\\(--x-hover-subtle\\)[data-highlighted], .x-commerce.data-highlighted\\:bg-\\(--x-hover-subtle\\)[data-highlighted] {
  background-color: var(--x-hover-subtle);
}
@media (hover: hover) {
  .x-commerce .data-highlighted\\:hover\\:bg-\\(--x-hover-subtle\\)[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\(--x-hover-subtle\\)[data-highlighted]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-\\[var\\(--x-bg-destructive\\)\\][data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\[var\\(--x-bg-destructive\\)\\][data-highlighted]:hover {
    background-color: var(--x-bg-destructive);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-highlighted]:hover {
    background-color: var(--x-hover-subtle);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-black-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-black-10[data-highlighted]:hover {
    background-color: var(--x-black-10);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-fg-alpha-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-fg-alpha-10[data-highlighted]:hover {
    background-color: var(--x-fg-alpha-10);
  }
  .x-commerce .data-highlighted\\:hover\\:bg-white-10[data-highlighted]:hover, .x-commerce.data-highlighted\\:hover\\:bg-white-10[data-highlighted]:hover {
    background-color: var(--x-white-10);
  }
}
.x-commerce .data-placeholder\\:text-tertiary[data-placeholder], .x-commerce.data-placeholder\\:text-tertiary[data-placeholder] {
  color: var(--x-fg-tertiary);
}
.x-commerce .data-popup-open\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-popup-open], .x-commerce.data-popup-open\\:bg-\\[var\\(--x-hover-subtle\\)\\][data-popup-open] {
  background-color: var(--x-hover-subtle);
}
.x-commerce .data-popup-open\\:bg-black-10[data-popup-open], .x-commerce.data-popup-open\\:bg-black-10[data-popup-open] {
  background-color: var(--x-black-10);
}
.x-commerce .data-popup-open\\:bg-fg-alpha-10[data-popup-open], .x-commerce.data-popup-open\\:bg-fg-alpha-10[data-popup-open] {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .data-popup-open\\:bg-white-10[data-popup-open], .x-commerce.data-popup-open\\:bg-white-10[data-popup-open] {
  background-color: var(--x-white-10);
}
.x-commerce .data-starting-style\\:scale-0[data-starting-style], .x-commerce.data-starting-style\\:scale-0[data-starting-style] {
  --tw-scale-x: 0%;
  --tw-scale-y: 0%;
  --tw-scale-z: 0%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-starting-style\\:opacity-0[data-starting-style], .x-commerce.data-starting-style\\:opacity-0[data-starting-style] {
  opacity: 0%;
}
.x-commerce .data-unchecked\\:opacity-0[data-unchecked], .x-commerce.data-unchecked\\:opacity-0[data-unchecked] {
  opacity: 0%;
}
.x-commerce .data-\\[disabled\\]\\:pointer-events-none[data-disabled], .x-commerce.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}
.x-commerce .data-\\[disabled\\]\\:opacity-50[data-disabled], .x-commerce.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 50%;
}
.x-commerce .data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.data-\\[ending-style\\]\\:scale-95[data-ending-style] {
  --tw-scale-x: 95%;
  --tw-scale-y: 95%;
  --tw-scale-z: 95%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
  opacity: 0%;
}
.x-commerce .data-\\[popup-open\\]\\:rotate-180[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:rotate-180[data-popup-open] {
  rotate: 180deg;
}
.x-commerce .data-\\[popup-open\\]\\:border-active[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:border-active[data-popup-open] {
  border-color: var(--x-border-active);
}
.x-commerce .data-\\[popup-open\\]\\:border-destructive[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:border-destructive[data-popup-open] {
  border-color: var(--x-border-destructive);
}
.x-commerce .data-\\[popup-open\\]\\:shadow-focus[data-popup-open], .x-commerce.data-\\[popup-open\\]\\:shadow-focus[data-popup-open] {
  --tw-shadow: var(--x-shadow-focus);
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.data-\\[starting-style\\]\\:scale-95[data-starting-style] {
  --tw-scale-x: 95%;
  --tw-scale-y: 95%;
  --tw-scale-z: 95%;
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
  opacity: 0%;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .motion-safe\\:animate-pulse, .x-commerce.motion-safe\\:animate-pulse {
    animation: var(--animate-pulse, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite);
  }
  @media (hover: hover) {
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-1\\.04\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-1\\.04\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -1.04%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-4\\.5\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-4\\.5\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -4.5%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-10\\.17\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-10\\.17\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -10.17%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-11\\.3\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-11\\.3\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -11.3%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[-13\\.87\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[-13\\.87\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: -13.87%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[4\\.81\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[4\\.81\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: 4.81%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-x-\\[9\\.22\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-x-\\[9\\.22\\%\\]:is(:where(.group):hover *) {
      --tw-translate-x: 9.22%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:-translate-y-\\[1\\.674\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:-translate-y-\\[1\\.674\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: calc(1.674% * -1);
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-1\\.41\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-1\\.41\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -1.41%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-7\\.58\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-7\\.58\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -7.58%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[-14\\.09\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[-14\\.09\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: -14.09%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:translate-y-\\[0\\.26\\%\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:translate-y-\\[0\\.26\\%\\]:is(:where(.group):hover *) {
      --tw-translate-y: 0.26%;
      translate: var(--tw-translate-x) var(--tw-translate-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:scale-100:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:scale-100:is(:where(.group):hover *) {
      --tw-scale-x: 100%;
      --tw-scale-y: 100%;
      --tw-scale-z: 100%;
      scale: var(--tw-scale-x) var(--tw-scale-y);
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-1deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-1deg\\]:is(:where(.group):hover *) {
      rotate: -1deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-2deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-2deg\\]:is(:where(.group):hover *) {
      rotate: -2deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[-3deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[-3deg\\]:is(:where(.group):hover *) {
      rotate: -3deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[1deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[1deg\\]:is(:where(.group):hover *) {
      rotate: 1deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[3deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[3deg\\]:is(:where(.group):hover *) {
      rotate: 3deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:rotate-\\[5deg\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:rotate-\\[5deg\\]:is(:where(.group):hover *) {
      rotate: 5deg;
    }
    .x-commerce .motion-safe\\:group-hover\\:delay-0:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:delay-0:is(:where(.group):hover *) {
      transition-delay: 0ms;
    }
    .x-commerce .motion-safe\\:group-hover\\:delay-\\[60ms\\]:is(:where(.group):hover *), .x-commerce.motion-safe\\:group-hover\\:delay-\\[60ms\\]:is(:where(.group):hover *) {
      transition-delay: 60ms;
    }
  }
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .motion-reduce\\:hidden, .x-commerce.motion-reduce\\:hidden {
    display: none;
  }
  .x-commerce .motion-reduce\\:animate-none, .x-commerce.motion-reduce\\:animate-none {
    animation: none;
  }
  .x-commerce .motion-reduce\\:transition-none, .x-commerce.motion-reduce\\:transition-none {
    transition-property: none;
  }
  .x-commerce .motion-reduce\\:before\\:transition-none::before, .x-commerce.motion-reduce\\:before\\:transition-none::before {
    content: var(--tw-content);
    transition-property: none;
  }
  .x-commerce .motion-reduce\\:after\\:transition-none::after, .x-commerce.motion-reduce\\:after\\:transition-none::after {
    content: var(--tw-content);
    transition-property: none;
  }
}
@media (width < 729px) {
  .x-commerce .max-\\[729px\\]\\:static, .x-commerce.max-\\[729px\\]\\:static {
    position: static;
  }
  .x-commerce .max-\\[729px\\]\\:shrink-0, .x-commerce.max-\\[729px\\]\\:shrink-0 {
    flex-shrink: 0;
  }
  .x-commerce .max-\\[729px\\]\\:before\\:hidden::before, .x-commerce.max-\\[729px\\]\\:before\\:hidden::before {
    content: var(--tw-content);
    display: none;
  }
}
@media (width < 517px) {
  .x-commerce .max-narrow\\:inset-0, .x-commerce.max-narrow\\:inset-0 {
    inset: 0px;
  }
  .x-commerce .max-narrow\\:inset-x-2, .x-commerce.max-narrow\\:inset-x-2 {
    inset-inline: calc(var(--spacing, 0.25rem) * 2);
  }
  .x-commerce .max-narrow\\:inset-x-4, .x-commerce.max-narrow\\:inset-x-4 {
    inset-inline: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:top-1\\/2, .x-commerce.max-narrow\\:top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .x-commerce .max-narrow\\:bottom-2, .x-commerce.max-narrow\\:bottom-2 {
    bottom: calc(var(--spacing, 0.25rem) * 2);
  }
  .x-commerce .max-narrow\\:bottom-auto, .x-commerce.max-narrow\\:bottom-auto {
    bottom: auto;
  }
  .x-commerce .max-narrow\\:mx-auto, .x-commerce.max-narrow\\:mx-auto {
    margin-inline: auto;
  }
  .x-commerce .max-narrow\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.max-narrow\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .max-narrow\\:max-h-\\[85svh\\], .x-commerce.max-narrow\\:max-h-\\[85svh\\] {
    max-height: 85svh;
  }
  .x-commerce .max-narrow\\:max-h-\\[calc\\(100svh-2rem\\)\\], .x-commerce.max-narrow\\:max-h-\\[calc\\(100svh-2rem\\)\\] {
    max-height: calc(100svh - 2rem);
  }
  .x-commerce .max-narrow\\:min-h-full, .x-commerce.max-narrow\\:min-h-full {
    min-height: 100%;
  }
  .x-commerce .max-narrow\\:w-\\[calc\\(100vw-1rem\\)\\], .x-commerce.max-narrow\\:w-\\[calc\\(100vw-1rem\\)\\] {
    width: calc(100vw - 1rem);
  }
  .x-commerce .max-narrow\\:max-w-\\[400px\\], .x-commerce.max-narrow\\:max-w-\\[400px\\] {
    max-width: 400px;
  }
  .x-commerce .max-narrow\\:max-w-\\[calc\\(100vw-1rem\\)\\], .x-commerce.max-narrow\\:max-w-\\[calc\\(100vw-1rem\\)\\] {
    max-width: calc(100vw - 1rem);
  }
  .x-commerce .max-narrow\\:-translate-y-1\\/2, .x-commerce.max-narrow\\:-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:touch-none, .x-commerce.max-narrow\\:touch-none {
    touch-action: none;
  }
  .x-commerce .max-narrow\\:rounded-lg, .x-commerce.max-narrow\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
  .x-commerce .max-narrow\\:rounded-none, .x-commerce.max-narrow\\:rounded-none {
    border-radius: 0px;
  }
  .x-commerce .max-narrow\\:rounded-xl, .x-commerce.max-narrow\\:rounded-xl {
    border-radius: calc(32px * var(--x-radius-m));
  }
  .x-commerce .max-narrow\\:bg-primary, .x-commerce.max-narrow\\:bg-primary {
    background-color: var(--x-bg-primary);
  }
  .x-commerce .max-narrow\\:p-0, .x-commerce.max-narrow\\:p-0 {
    padding: 0px;
  }
  .x-commerce .max-narrow\\:p-4, .x-commerce.max-narrow\\:p-4 {
    padding: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:p-6, .x-commerce.max-narrow\\:p-6 {
    padding: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .max-narrow\\:pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\],.x-commerce.max-narrow\\:pb-\\[env\\(safe-area-inset-bottom\\,0px\\)\\] {
    padding-bottom: env(safe-area-inset-bottom,0px);
  }
  .x-commerce .max-narrow\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\],.x-commerce.max-narrow\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\] {
    font-size: max(16px, calc(16 / var(--x-root-font-size,16) * 1rem));
  }
  .x-commerce .max-narrow\\:shadow-none, .x-commerce.max-narrow\\:shadow-none {
    --tw-shadow: 0 0 #0000;
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-bg\\:var\\(--x-bg-primary\\)\\], .x-commerce.max-narrow\\:\\[--x-modal-bg\\:var\\(--x-bg-primary\\)\\] {
    --x-modal-bg: var(--x-bg-primary);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-pad\\:--spacing\\(4\\)\\], .x-commerce.max-narrow\\:\\[--x-modal-pad\\:--spacing\\(4\\)\\] {
    --x-modal-pad: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .max-narrow\\:\\[--x-modal-pad\\:0px\\], .x-commerce.max-narrow\\:\\[--x-modal-pad\\:0px\\] {
    --x-modal-pad: 0px;
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-ending-style] {
    --tw-translate-y: calc(100% + 8px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:translate-y-full[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:translate-y-full[data-ending-style] {
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .max-narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.max-narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
    opacity: 0%;
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:translate-y-\\[calc\\(100\\%\\+8px\\)\\][data-starting-style] {
    --tw-translate-y: calc(100% + 8px);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:translate-y-full[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:translate-y-full[data-starting-style] {
    --tw-translate-y: 100%;
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .max-narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.max-narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
    opacity: 0%;
  }
}
@media (width < 360px) {
  .x-commerce .max-\\[360px\\]\\:max-w-\\[calc\\(100vw-16px\\)\\], .x-commerce.max-\\[360px\\]\\:max-w-\\[calc\\(100vw-16px\\)\\] {
    max-width: calc(100vw - 16px);
  }
}
@media (width < 40rem) {
  .x-commerce .max-sm\\:grow, .x-commerce.max-sm\\:grow {
    flex-grow: 1;
  }
  .x-commerce .max-sm\\:grow-\\[1000000\\], .x-commerce.max-sm\\:grow-\\[1000000\\] {
    flex-grow: 1000000;
  }
  .x-commerce .max-sm\\:flex-col, .x-commerce.max-sm\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .max-sm\\:flex-nowrap, .x-commerce.max-sm\\:flex-nowrap {
    flex-wrap: nowrap;
  }
}
@media (width >= 360px) {
  .x-commerce .min-\\[360px\\]\\:px-8, .x-commerce.min-\\[360px\\]\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
}
@media (width >= 517px) {
  .x-commerce .narrow\\:inset-auto, .x-commerce.narrow\\:inset-auto {
    inset: auto;
  }
  .x-commerce .narrow\\:top-1\\/2, .x-commerce.narrow\\:top-1\\/2 {
    top: calc(1 / 2 * 100%);
  }
  .x-commerce .narrow\\:left-1\\/2, .x-commerce.narrow\\:left-1\\/2 {
    left: calc(1 / 2 * 100%);
  }
  .x-commerce .narrow\\:-mx-8, .x-commerce.narrow\\:-mx-8 {
    margin-inline: calc(var(--spacing, 0.25rem) * -8);
  }
  .x-commerce .narrow\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.narrow\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .narrow\\:max-h-\\[calc\\(100dvh-2rem\\)\\], .x-commerce.narrow\\:max-h-\\[calc\\(100dvh-2rem\\)\\] {
    max-height: calc(100dvh - 2rem);
  }
  .x-commerce .narrow\\:max-h-\\[min\\(85svh\\,640px\\)\\],.x-commerce.narrow\\:max-h-\\[min\\(85svh\\,640px\\)\\] {
    max-height: min(85svh, 640px);
  }
  .x-commerce .narrow\\:w-\\[min\\(450px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(450px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(450px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(500px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(500px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(500px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\] {
    width: min(524px, calc(100vw - 4rem));
  }
  .x-commerce .narrow\\:w-\\[min\\(634px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(634px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(634px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(916px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(916px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(916px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(974px\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(974px\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(974px, calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-card-max\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-card-max\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(2 * var(--x-commerce-plan-card-max) + 60px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(4\\*var\\(--x-commerce-plan-row-card\\)\\+84px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(4\\*var\\(--x-commerce-plan-row-card\\)\\+84px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(4 * var(--x-commerce-plan-row-card) + 84px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-card-max\\)\\+490px\\)\\,calc\\(100vw-96px\\)\\)\\],.x-commerce.narrow\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-card-max\\)\\+490px\\)\\,calc\\(100vw-96px\\)\\)\\] {
    width: min(calc(var(--x-commerce-plan-card-max) + 490px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:w-fit, .x-commerce.narrow\\:w-fit {
    width: fit-content;
  }
  .x-commerce .narrow\\:w-full, .x-commerce.narrow\\:w-full {
    width: 100%;
  }
  .x-commerce .narrow\\:max-w-\\[400px\\], .x-commerce.narrow\\:max-w-\\[400px\\] {
    max-width: 400px;
  }
  .x-commerce .narrow\\:max-w-\\[524px\\], .x-commerce.narrow\\:max-w-\\[524px\\] {
    max-width: 524px;
  }
  .x-commerce .narrow\\:max-w-\\[634px\\], .x-commerce.narrow\\:max-w-\\[634px\\] {
    max-width: 634px;
  }
  .x-commerce .narrow\\:max-w-\\[880px\\], .x-commerce.narrow\\:max-w-\\[880px\\] {
    max-width: 880px;
  }
  .x-commerce .narrow\\:max-w-\\[calc\\(100vw-4rem\\)\\], .x-commerce.narrow\\:max-w-\\[calc\\(100vw-4rem\\)\\] {
    max-width: calc(100vw - 4rem);
  }
  .x-commerce .narrow\\:-translate-x-1\\/2, .x-commerce.narrow\\:-translate-x-1\\/2 {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:-translate-y-1\\/2, .x-commerce.narrow\\:-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:grid-cols-2, .x-commerce.narrow\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .x-commerce .narrow\\:rounded-3xl, .x-commerce.narrow\\:rounded-3xl {
    border-radius: var(--radius-3xl, 1.5rem);
  }
  .x-commerce .narrow\\:rounded-lg, .x-commerce.narrow\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
  .x-commerce .narrow\\:p-0, .x-commerce.narrow\\:p-0 {
    padding: 0px;
  }
  .x-commerce .narrow\\:p-6, .x-commerce.narrow\\:p-6 {
    padding: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .narrow\\:p-8, .x-commerce.narrow\\:p-8 {
    padding: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .narrow\\:px-0, .x-commerce.narrow\\:px-0 {
    padding-inline: 0px;
  }
  .x-commerce .narrow\\:px-8, .x-commerce.narrow\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .narrow\\:ring-1, .x-commerce.narrow\\:ring-1 {
    --tw-ring-shadow: var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .x-commerce .narrow\\:\\[--x-commerce-surface-cap\\:calc\\(100svh-96px\\)\\], .x-commerce.narrow\\:\\[--x-commerce-surface-cap\\:calc\\(100svh-96px\\)\\] {
    --x-commerce-surface-cap: calc(100svh - 96px);
  }
  .x-commerce .narrow\\:first\\:text-start:first-child, .x-commerce.narrow\\:first\\:text-start:first-child {
    text-align: start;
  }
  .x-commerce .narrow\\:last\\:text-end:last-child, .x-commerce.narrow\\:last\\:text-end:last-child {
    text-align: end;
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(2\\)\\:last-child\\]\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-row-card\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(2):last-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(2\\)\\:last-child\\]\\:w-\\[min\\(calc\\(2\\*var\\(--x-commerce-plan-row-card\\)\\+60px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(2):last-child)) {
    width: min(calc(2 * var(--x-commerce-plan-row-card) + 60px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(3\\)\\:last-child\\]\\:w-\\[min\\(calc\\(3\\*var\\(--x-commerce-plan-row-card\\)\\+72px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(3):last-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:nth-child\\(3\\)\\:last-child\\]\\:w-\\[min\\(calc\\(3\\*var\\(--x-commerce-plan-row-card\\)\\+72px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:nth-child(3):last-child)) {
    width: min(calc(3 * var(--x-commerce-plan-row-card) + 72px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:only-child\\]\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-row-card\\)\\+48px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:only-child)),.x-commerce.narrow\\:has-\\[\\.x-commerce-plan-picker\\>li\\:only-child\\]\\:w-\\[min\\(calc\\(var\\(--x-commerce-plan-row-card\\)\\+48px\\)\\,calc\\(100vw-96px\\)\\)\\]:has(:is(.x-commerce-plan-picker > li:only-child)) {
    width: min(calc(var(--x-commerce-plan-row-card) + 48px), calc(100vw - 96px));
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:-translate-x-1\\/2[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:-translate-x-1\\/2[data-ending-style] {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:-translate-y-1\\/2[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:-translate-y-1\\/2[data-ending-style] {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:scale-95[data-ending-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style], .x-commerce.narrow\\:data-\\[ending-style\\]\\:opacity-0[data-ending-style] {
    opacity: 0%;
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:-translate-x-1\\/2[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:-translate-x-1\\/2[data-starting-style] {
    --tw-translate-x: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:-translate-y-1\\/2[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:-translate-y-1\\/2[data-starting-style] {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:scale-95[data-starting-style] {
    --tw-scale-x: 95%;
    --tw-scale-y: 95%;
    --tw-scale-z: 95%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style], .x-commerce.narrow\\:data-\\[starting-style\\]\\:opacity-0[data-starting-style] {
    opacity: 0%;
  }
  .x-commerce .narrow\\:data-\\[width\\=content\\]\\:w-max[data-width="content"], .x-commerce.narrow\\:data-\\[width\\=content\\]\\:w-max[data-width="content"] {
    width: max-content;
  }
  .x-commerce .narrow\\:data-\\[width\\=content\\]\\:min-w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\][data-width="content"],.x-commerce.narrow\\:data-\\[width\\=content\\]\\:min-w-\\[min\\(524px\\,calc\\(100vw-4rem\\)\\)\\][data-width="content"] {
    min-width: min(524px, calc(100vw - 4rem));
  }
}
@media (width >= 730px) {
  .x-commerce .min-\\[730px\\]\\:hidden, .x-commerce.min-\\[730px\\]\\:hidden {
    display: none;
  }
  .x-commerce .min-\\[730px\\]\\:flex-1, .x-commerce.min-\\[730px\\]\\:flex-1 {
    flex: 1;
  }
}
@media (width >= 1012px) {
  .x-commerce .min-\\[1012px\\]\\:flex, .x-commerce.min-\\[1012px\\]\\:flex {
    display: flex;
  }
  .x-commerce .min-\\[1012px\\]\\:h-\\[min\\(80vh\\,750px\\)\\],.x-commerce.min-\\[1012px\\]\\:h-\\[min\\(80vh\\,750px\\)\\] {
    height: min(80vh, 750px);
  }
  .x-commerce .min-\\[1012px\\]\\:min-h-0, .x-commerce.min-\\[1012px\\]\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .min-\\[1012px\\]\\:flex-1, .x-commerce.min-\\[1012px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .min-\\[1012px\\]\\:flex-col, .x-commerce.min-\\[1012px\\]\\:flex-col {
    flex-direction: column;
  }
}
@media (width >= 40rem) {
  .x-commerce .sm\\:-mx-8, .x-commerce.sm\\:-mx-8 {
    margin-inline: calc(var(--spacing, 0.25rem) * -8);
  }
  .x-commerce .sm\\:ms-auto, .x-commerce.sm\\:ms-auto {
    margin-inline-start: auto;
  }
  .x-commerce .sm\\:inline, .x-commerce.sm\\:inline {
    display: inline;
  }
  .x-commerce .sm\\:w-auto, .x-commerce.sm\\:w-auto {
    width: auto;
  }
  .x-commerce .sm\\:max-w-max, .x-commerce.sm\\:max-w-max {
    max-width: max-content;
  }
  .x-commerce .sm\\:grow-\\[1000000\\], .x-commerce.sm\\:grow-\\[1000000\\] {
    flex-grow: 1000000;
  }
  .x-commerce .sm\\:basis-\\[min-content\\], .x-commerce.sm\\:basis-\\[min-content\\] {
    flex-basis: min-content;
  }
  .x-commerce .sm\\:flex-row, .x-commerce.sm\\:flex-row {
    flex-direction: row;
  }
  .x-commerce .sm\\:items-center, .x-commerce.sm\\:items-center {
    align-items: center;
  }
  .x-commerce .sm\\:justify-end, .x-commerce.sm\\:justify-end {
    justify-content: flex-end;
  }
  .x-commerce .sm\\:p-5, .x-commerce.sm\\:p-5 {
    padding: calc(var(--spacing, 0.25rem) * 5);
  }
  .x-commerce .sm\\:px-6, .x-commerce.sm\\:px-6 {
    padding-inline: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .sm\\:px-8, .x-commerce.sm\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .sm\\:pb-10, .x-commerce.sm\\:pb-10 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 10);
  }
  .x-commerce .sm\\:\\[--x-plan-tabs-page-x\\:1\\.5rem\\], .x-commerce.sm\\:\\[--x-plan-tabs-page-x\\:1\\.5rem\\] {
    --x-plan-tabs-page-x: 1.5rem;
  }
}
@media (width >= 48rem) {
  .x-commerce .md\\:mx-0, .x-commerce.md\\:mx-0 {
    margin-inline: 0px;
  }
  .x-commerce .md\\:w-60, .x-commerce.md\\:w-60 {
    width: calc(var(--spacing, 0.25rem) * 60);
  }
  .x-commerce .md\\:flex-none, .x-commerce.md\\:flex-none {
    flex: none;
  }
  .x-commerce .md\\:snap-none, .x-commerce.md\\:snap-none {
    scroll-snap-type: none;
  }
  .x-commerce .md\\:scroll-px-3, .x-commerce.md\\:scroll-px-3 {
    scroll-padding-inline: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .md\\:px-3, .x-commerce.md\\:px-3 {
    padding-inline: calc(var(--spacing, 0.25rem) * 3);
  }
}
@container (width < 890px) {
  .x-commerce .\\@max-\\[890px\\]\\:flex-col, .x-commerce.\\@max-\\[890px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[890px\\]\\:gap-3, .x-commerce.\\@max-\\[890px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@max-\\[890px\\]\\:text-center, .x-commerce.\\@max-\\[890px\\]\\:text-center {
    text-align: center;
  }
}
@container (width < 706px) {
  .x-commerce .\\@max-\\[706px\\]\\:flex-col, .x-commerce.\\@max-\\[706px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[706px\\]\\:gap-3, .x-commerce.\\@max-\\[706px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@max-\\[706px\\]\\:text-center, .x-commerce.\\@max-\\[706px\\]\\:text-center {
    text-align: center;
  }
}
@container (width < 420px) {
  .x-commerce .\\@max-\\[420px\\]\\:sr-only, .x-commerce.\\@max-\\[420px\\]\\:sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
}
@container (width < 401px) {
  .x-commerce .\\@max-\\[401px\\]\\:order-last, .x-commerce.\\@max-\\[401px\\]\\:order-last {
    order: 9999;
  }
  .x-commerce .\\@max-\\[401px\\]\\:contents, .x-commerce.\\@max-\\[401px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@max-\\[401px\\]\\:flex-1, .x-commerce.\\@max-\\[401px\\]\\:flex-1 {
    flex: 1;
  }
}
@container plan-title (width < 232px) {
  .x-commerce .\\@max-\\[232px\\]\\/plan-title\\:text-\\[20px\\], .x-commerce.\\@max-\\[232px\\]\\/plan-title\\:text-\\[20px\\] {
    font-size: 20px;
  }
}
@container (width < 220px) {
  .x-commerce .\\@max-\\[220px\\]\\:sr-only, .x-commerce.\\@max-\\[220px\\]\\:sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border-width: 0;
  }
}
@container (width < 200px) {
  .x-commerce .\\@max-\\[200px\\]\\:order-last, .x-commerce.\\@max-\\[200px\\]\\:order-last {
    order: 9999;
  }
  .x-commerce .\\@max-\\[200px\\]\\:contents, .x-commerce.\\@max-\\[200px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@max-\\[200px\\]\\:flex-1, .x-commerce.\\@max-\\[200px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@max-\\[200px\\]\\:flex-col, .x-commerce.\\@max-\\[200px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@max-\\[200px\\]\\:items-start, .x-commerce.\\@max-\\[200px\\]\\:items-start {
    align-items: flex-start;
  }
  .x-commerce .\\@max-\\[200px\\]\\:gap-0\\.5, .x-commerce.\\@max-\\[200px\\]\\:gap-0\\.5 {
    gap: calc(var(--spacing, 0.25rem) * 0.5);
  }
}
@container (width >= 420px) {
  .x-commerce .\\@min-\\[420px\\]\\:w-4, .x-commerce.\\@min-\\[420px\\]\\:w-4 {
    width: calc(var(--spacing, 0.25rem) * 4);
  }
}
@container (width >= 560px) {
  .x-commerce .\\@min-\\[560px\\]\\:top-4, .x-commerce.\\@min-\\[560px\\]\\:top-4 {
    top: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:left-4, .x-commerce.\\@min-\\[560px\\]\\:left-4 {
    left: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:size-8, .x-commerce.\\@min-\\[560px\\]\\:size-8 {
    width: calc(var(--spacing, 0.25rem) * 8);
    height: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[560px\\]\\:w-full, .x-commerce.\\@min-\\[560px\\]\\:w-full {
    width: 100%;
  }
  .x-commerce .\\@min-\\[560px\\]\\:grid-cols-3, .x-commerce.\\@min-\\[560px\\]\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .x-commerce .\\@min-\\[560px\\]\\:flex-col, .x-commerce.\\@min-\\[560px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[560px\\]\\:items-stretch, .x-commerce.\\@min-\\[560px\\]\\:items-stretch {
    align-items: stretch;
  }
  .x-commerce .\\@min-\\[560px\\]\\:gap-4, .x-commerce.\\@min-\\[560px\\]\\:gap-4 {
    gap: calc(var(--spacing, 0.25rem) * 4);
  }
  .x-commerce .\\@min-\\[560px\\]\\:rounded-2xl, .x-commerce.\\@min-\\[560px\\]\\:rounded-2xl {
    border-radius: var(--radius-2xl, 1rem);
  }
  .x-commerce .\\@min-\\[560px\\]\\:rounded-lg, .x-commerce.\\@min-\\[560px\\]\\:rounded-lg {
    border-radius: calc(24px * var(--x-radius-m));
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:row-span-2, .x-commerce.\\@min-\\[586px\\]\\/grid\\:row-span-2 {
    grid-row: span 2 / span 2;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:row-span-3, .x-commerce.\\@min-\\[586px\\]\\/grid\\:row-span-3 {
    grid-row: span 3 / span 3;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-h-0, .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-h-\\[2lh\\], .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-h-\\[2lh\\] {
    min-height: 2lh;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:w-\\(--x-commerce-plan-card-max\\), .x-commerce.\\@min-\\[586px\\]\\/single\\:w-\\(--x-commerce-plan-card-max\\) {
    width: var(--x-commerce-plan-card-max);
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:min-w-\\(--x-commerce-plan-row-card\\), .x-commerce.\\@min-\\[586px\\]\\/grid\\:min-w-\\(--x-commerce-plan-row-card\\) {
    min-width: var(--x-commerce-plan-row-card);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:flex-1, .x-commerce.\\@min-\\[586px\\]\\/grid\\:flex-1 {
    flex: 1;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:flex-1, .x-commerce.\\@min-\\[586px\\]\\/single\\:flex-1 {
    flex: 1;
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:snap-x, .x-commerce.\\@min-\\[586px\\]\\/grid\\:snap-x {
    scroll-snap-type: x var(--tw-scroll-snap-strictness);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:snap-mandatory, .x-commerce.\\@min-\\[586px\\]\\/grid\\:snap-mandatory {
    --tw-scroll-snap-strictness: mandatory;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:auto-cols-\\[minmax\\(min-content\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:auto-cols-\\[minmax\\(min-content\\,1fr\\)\\] {
    grid-auto-columns: minmax(min-content,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-flow-col, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-flow-col {
    grid-auto-flow: column;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:auto-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:auto-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-auto-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-cols-none, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-cols-none {
    grid-template-columns: none;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-rows-\\[auto_auto_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-rows-\\[auto_auto_minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: auto auto minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:grid-rows-subgrid, .x-commerce.\\@min-\\[586px\\]\\/grid\\:grid-rows-subgrid {
    grid-template-rows: subgrid;
  }
}
@container single (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/single\\:flex-row, .x-commerce.\\@min-\\[586px\\]\\/single\\:flex-row {
    flex-direction: row;
  }
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:justify-start, .x-commerce.\\@min-\\[586px\\]\\/grid\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:gap-y-0, .x-commerce.\\@min-\\[586px\\]\\/grid\\:gap-y-0 {
    row-gap: 0px;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:overflow-y-auto, .x-commerce.\\@min-\\[586px\\]\\/grid\\:overflow-y-auto {
    overflow-y: auto;
  }
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:mask-\\[linear-gradient\\(to_right\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.\\@min-\\[586px\\]\\/grid\\:mask-\\[linear-gradient\\(to_right\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
    mask-image: linear-gradient(to right,transparent,black min(var(--scroll-area-overflow-x-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-x-end,0px), 32px)),transparent);
  }
}
@container (width >= 706px) {
  .x-commerce .\\@min-\\[706px\\]\\:contents, .x-commerce.\\@min-\\[706px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[706px\\]\\:grid, .x-commerce.\\@min-\\[706px\\]\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[706px\\]\\:grid-cols-\\[1fr_auto_1fr\\], .x-commerce.\\@min-\\[706px\\]\\:grid-cols-\\[1fr_auto_1fr\\] {
    grid-template-columns: 1fr auto 1fr;
  }
}
@container (width >= 800px) {
  .x-commerce .\\@min-\\[800px\\]\\:static, .x-commerce.\\@min-\\[800px\\]\\:static {
    position: static;
  }
  .x-commerce .\\@min-\\[800px\\]\\:start-7, .x-commerce.\\@min-\\[800px\\]\\:start-7 {
    inset-inline-start: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:top-7, .x-commerce.\\@min-\\[800px\\]\\:top-7 {
    top: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:col-start-1, .x-commerce.\\@min-\\[800px\\]\\:col-start-1 {
    grid-column-start: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:col-start-2, .x-commerce.\\@min-\\[800px\\]\\:col-start-2 {
    grid-column-start: 2;
  }
  .x-commerce .\\@min-\\[800px\\]\\:row-start-1, .x-commerce.\\@min-\\[800px\\]\\:row-start-1 {
    grid-row-start: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:mt-6, .x-commerce.\\@min-\\[800px\\]\\:mt-6 {
    margin-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[800px\\]\\:-mb-3, .x-commerce.\\@min-\\[800px\\]\\:-mb-3 {
    margin-bottom: calc(var(--spacing, 0.25rem) * -3);
  }
  .x-commerce .\\@min-\\[800px\\]\\:block, .x-commerce.\\@min-\\[800px\\]\\:block {
    display: block;
  }
  .x-commerce .\\@min-\\[800px\\]\\:contents, .x-commerce.\\@min-\\[800px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex, .x-commerce.\\@min-\\[800px\\]\\:flex {
    display: flex;
  }
  .x-commerce .\\@min-\\[800px\\]\\:max-h-\\(--x-commerce-surface-cap\\), .x-commerce.\\@min-\\[800px\\]\\:max-h-\\(--x-commerce-surface-cap\\) {
    max-height: var(--x-commerce-surface-cap);
  }
  .x-commerce .\\@min-\\[800px\\]\\:min-h-0, .x-commerce.\\@min-\\[800px\\]\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex-1, .x-commerce.\\@min-\\[800px\\]\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@min-\\[800px\\]\\:scroll-pt-18, .x-commerce.\\@min-\\[800px\\]\\:scroll-pt-18 {
    scroll-padding-top: calc(var(--spacing, 0.25rem) * 18);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,380px\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,380px\\)\\] {
    grid-template-columns: minmax(0,1fr) minmax(0,380px);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,420px\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-cols-\\[minmax\\(0\\,1fr\\)_minmax\\(0\\,420px\\)\\] {
    grid-template-columns: minmax(0,1fr) minmax(0,420px);
  }
  .x-commerce .\\@min-\\[800px\\]\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[800px\\]\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[800px\\]\\:flex-col, .x-commerce.\\@min-\\[800px\\]\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[800px\\]\\:justify-start, .x-commerce.\\@min-\\[800px\\]\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[800px\\]\\:gap-3, .x-commerce.\\@min-\\[800px\\]\\:gap-3 {
    gap: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\@min-\\[800px\\]\\:overflow-y-auto, .x-commerce.\\@min-\\[800px\\]\\:overflow-y-auto {
    overflow-y: auto;
  }
  .x-commerce .\\@min-\\[800px\\]\\:rounded-none, .x-commerce.\\@min-\\[800px\\]\\:rounded-none {
    border-radius: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:border-0, .x-commerce.\\@min-\\[800px\\]\\:border-0 {
    border-style: var(--tw-border-style);
    border-width: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:bg-transparent, .x-commerce.\\@min-\\[800px\\]\\:bg-transparent {
    background-color: transparent;
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-0, .x-commerce.\\@min-\\[800px\\]\\:p-0 {
    padding: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-7, .x-commerce.\\@min-\\[800px\\]\\:p-7 {
    padding: calc(var(--spacing, 0.25rem) * 7);
  }
  .x-commerce .\\@min-\\[800px\\]\\:p-8, .x-commerce.\\@min-\\[800px\\]\\:p-8 {
    padding: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[800px\\]\\:px-8, .x-commerce.\\@min-\\[800px\\]\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-6, .x-commerce.\\@min-\\[800px\\]\\:pt-6 {
    padding-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-15, .x-commerce.\\@min-\\[800px\\]\\:pt-15 {
    padding-top: calc(var(--spacing, 0.25rem) * 15);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-16, .x-commerce.\\@min-\\[800px\\]\\:pt-16 {
    padding-top: calc(var(--spacing, 0.25rem) * 16);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pt-20, .x-commerce.\\@min-\\[800px\\]\\:pt-20 {
    padding-top: calc(var(--spacing, 0.25rem) * 20);
  }
  .x-commerce .\\@min-\\[800px\\]\\:pb-0, .x-commerce.\\@min-\\[800px\\]\\:pb-0 {
    padding-bottom: 0px;
  }
  .x-commerce .\\@min-\\[800px\\]\\:pb-8, .x-commerce.\\@min-\\[800px\\]\\:pb-8 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 8);
  }
}
@container (width >= 880px) {
  .x-commerce .\\@min-\\[880px\\]\\:col-span-1, .x-commerce.\\@min-\\[880px\\]\\:col-span-1 {
    grid-column: span 1 / span 1;
  }
  .x-commerce .\\@min-\\[880px\\]\\:grid-cols-3, .x-commerce.\\@min-\\[880px\\]\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@container (width >= 891px) {
  .x-commerce .\\@min-\\[891px\\]\\:contents, .x-commerce.\\@min-\\[891px\\]\\:contents {
    display: contents;
  }
  .x-commerce .\\@min-\\[891px\\]\\:grid, .x-commerce.\\@min-\\[891px\\]\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[891px\\]\\:grid-cols-\\[1fr_auto_1fr\\], .x-commerce.\\@min-\\[891px\\]\\:grid-cols-\\[1fr_auto_1fr\\] {
    grid-template-columns: 1fr auto 1fr;
  }
}
@container review (width >= 980px) {
  .x-commerce .\\@min-\\[980px\\]\\/review\\:relative, .x-commerce.\\@min-\\[980px\\]\\/review\\:relative {
    position: relative;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:static, .x-commerce.\\@min-\\[980px\\]\\/review\\:static {
    position: static;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:col-start-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:col-start-1 {
    grid-column-start: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:col-start-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:col-start-2 {
    grid-column-start: 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-span-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-span-2 {
    grid-row: span 2 / span 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-start-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-start-1 {
    grid-row-start: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:row-start-2, .x-commerce.\\@min-\\[980px\\]\\/review\\:row-start-2 {
    grid-row-start: 2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex {
    display: flex;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid, .x-commerce.\\@min-\\[980px\\]\\/review\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:min-h-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:min-h-0 {
    min-height: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:w-auto, .x-commerce.\\@min-\\[980px\\]\\/review\\:w-auto {
    width: auto;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex-1, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex-1 {
    flex: 1;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid-cols-\\[500px_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:grid-cols-\\[500px_minmax\\(0\\,1fr\\)\\] {
    grid-template-columns: 500px minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:grid-rows-\\[auto_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:grid-rows-\\[auto_minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: auto minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:flex-col, .x-commerce.\\@min-\\[980px\\]\\/review\\:flex-col {
    flex-direction: column;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:items-start, .x-commerce.\\@min-\\[980px\\]\\/review\\:items-start {
    align-items: flex-start;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:justify-start, .x-commerce.\\@min-\\[980px\\]\\/review\\:justify-start {
    justify-content: flex-start;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:bg-secondary, .x-commerce.\\@min-\\[980px\\]\\/review\\:bg-secondary {
    background-color: var(--x-bg-secondary);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\],.x-commerce.\\@min-\\[980px\\]\\/review\\:mask-\\[linear-gradient\\(to_bottom\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-y-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-y-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\] {
    mask-image: linear-gradient(to bottom,transparent,black min(var(--scroll-area-overflow-y-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-y-end,0px), 32px)),transparent);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-0 {
    padding-inline: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-6, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-6 {
    padding-inline: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-8, .x-commerce.\\@min-\\[980px\\]\\/review\\:px-8 {
    padding-inline: calc(var(--spacing, 0.25rem) * 8);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:px-\\[60px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:px-\\[60px\\] {
    padding-inline: 60px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-6, .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-6 {
    padding-top: calc(var(--spacing, 0.25rem) * 6);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-\\[30px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-\\[30px\\] {
    padding-top: 30px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pt-\\[60px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:pt-\\[60px\\] {
    padding-top: 60px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-0, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-0 {
    padding-bottom: 0px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-10, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-10 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 10);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:pb-12, .x-commerce.\\@min-\\[980px\\]\\/review\\:pb-12 {
    padding-bottom: calc(var(--spacing, 0.25rem) * 12);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:text-\\[32px\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:text-\\[32px\\] {
    font-size: 32px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:leading-\\[1\\.2\\], .x-commerce.\\@min-\\[980px\\]\\/review\\:leading-\\[1\\.2\\] {
    --tw-leading: 1.2;
    line-height: 1.2;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:tracking-normal, .x-commerce.\\@min-\\[980px\\]\\/review\\:tracking-normal {
    --tw-tracking: var(--tracking-normal, 0em);
    letter-spacing: var(--tracking-normal, 0em);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:before\\:hidden::before, .x-commerce.\\@min-\\[980px\\]\\/review\\:before\\:hidden::before {
    content: var(--tw-content);
    display: none;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-2:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-2:focus-visible {
    outline-style: var(--tw-outline-style);
    outline-width: 2px;
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:-outline-offset-2:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:-outline-offset-2:focus-visible {
    outline-offset: calc(2px * -1);
  }
  .x-commerce .\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-focus:focus-visible, .x-commerce.\\@min-\\[980px\\]\\/review\\:focus-visible\\:outline-focus:focus-visible {
    outline-color: var(--x-ring);
  }
}
@container choice (width >= 1042px) {
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid, .x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid {
    display: grid;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid-cols-\\[360px_minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid-cols-\\[360px_minmax\\(0\\,1fr\\)\\] {
    grid-template-columns: 360px minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\],.x-commerce.\\@min-\\[1042px\\]\\/choice\\:grid-rows-\\[minmax\\(0\\,1fr\\)\\] {
    grid-template-rows: minmax(0,1fr);
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:gap-x-\\[38px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:gap-x-\\[38px\\] {
    column-gap: 38px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:ps-\\[26px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:ps-\\[26px\\] {
    padding-inline-start: 26px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pe-\\[32px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pe-\\[32px\\] {
    padding-inline-end: 32px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pt-\\[5px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pt-\\[5px\\] {
    padding-top: 5px;
  }
  .x-commerce .\\@min-\\[1042px\\]\\/choice\\:pt-\\[27px\\], .x-commerce.\\@min-\\[1042px\\]\\/choice\\:pt-\\[27px\\] {
    padding-top: 27px;
  }
}
@container (width >= 32rem) {
  .x-commerce .\\@lg\\:h-auto, .x-commerce.\\@lg\\:h-auto {
    height: auto;
  }
  .x-commerce .\\@lg\\:min-h-32, .x-commerce.\\@lg\\:min-h-32 {
    min-height: calc(var(--spacing, 0.25rem) * 32);
  }
  .x-commerce .\\@lg\\:w-2\\/5, .x-commerce.\\@lg\\:w-2\\/5 {
    width: calc(2 / 5 * 100%);
  }
  .x-commerce .\\@lg\\:max-w-72, .x-commerce.\\@lg\\:max-w-72 {
    max-width: calc(var(--spacing, 0.25rem) * 72);
  }
  .x-commerce .\\@lg\\:shrink-0, .x-commerce.\\@lg\\:shrink-0 {
    flex-shrink: 0;
  }
  .x-commerce .\\@lg\\:flex-row, .x-commerce.\\@lg\\:flex-row {
    flex-direction: row;
  }
  .x-commerce .\\@lg\\:gap-5, .x-commerce.\\@lg\\:gap-5 {
    gap: calc(var(--spacing, 0.25rem) * 5);
  }
}
.x-commerce .rtl\\:-translate-x-\\[calc\\(50cqw-50\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-\\[calc\\(50cqw-50\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: calc(calc(50cqw - 50%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-translate-x-\\[calc\\(100cqw-100\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-\\[calc\\(100cqw-100\\%\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: calc(calc(100cqw - 100%) * -1);
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-translate-x-full:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-translate-x-full:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-translate-x: -100%;
  translate: var(--tw-translate-x) var(--tw-translate-y);
}
.x-commerce .rtl\\:-scale-x-100:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:-scale-x-100:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --tw-scale-x: calc(100% * -1);
  scale: var(--tw-scale-x) var(--tw-scale-y);
}
.x-commerce .rtl\\:\\[--x-safe-start\\:env\\(safe-area-inset-right\\,0px\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *),.x-commerce.rtl\\:\\[--x-safe-start\\:env\\(safe-area-inset-right\\,0px\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --x-safe-start: env(safe-area-inset-right,0px);
}
.x-commerce .rtl\\:\\[--x-tab-pill-dir\\:-1\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *), .x-commerce.rtl\\:\\[--x-tab-pill-dir\\:-1\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
  --x-tab-pill-dir: -1;
}
@container grid (width >= 586px) {
  .x-commerce .\\@min-\\[586px\\]\\/grid\\:rtl\\:mask-\\[linear-gradient\\(to_left\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *),.x-commerce.\\@min-\\[586px\\]\\/grid\\:rtl\\:mask-\\[linear-gradient\\(to_left\\,transparent\\,black_min\\(var\\(--scroll-area-overflow-x-start\\,0px\\)\\,32px\\)\\,black_calc\\(100\\%_-_min\\(var\\(--scroll-area-overflow-x-end\\,0px\\)\\,32px\\)\\)\\,transparent\\)\\]:where(:dir(rtl), [dir="rtl"], [dir="rtl"] *) {
    mask-image: linear-gradient(to left,transparent,black min(var(--scroll-area-overflow-x-start,0px), 32px),black calc(100% - min(var(--scroll-area-overflow-x-end,0px), 32px)),transparent);
  }
}
.x-commerce .dark\\:border-\\[\\#c4c4c4\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-\\[\\#c4c4c4\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: #c4c4c4;
}
.x-commerce .dark\\:border-normal:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-normal:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-border-normal);
}
.x-commerce .dark\\:border-white\\/8:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-white\\/8:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 8%, transparent);
  }
}
.x-commerce .dark\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 10%, transparent);
  }
}
.x-commerce .dark\\:bg-black:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-black:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-black);
}
.x-commerce .dark\\:bg-btn-secondary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-btn-secondary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-btn-secondary);
}
.x-commerce .dark\\:bg-fg-alpha-05:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-fg-alpha-05:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-fg-alpha-05);
}
.x-commerce .dark\\:bg-fg-alpha-10:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-fg-alpha-10:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-fg-alpha-10);
}
.x-commerce .dark\\:bg-secondary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-secondary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-bg-secondary);
}
.x-commerce .dark\\:bg-tertiary:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-tertiary:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-bg-tertiary);
}
.x-commerce .dark\\:bg-transparent:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-transparent:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: transparent;
}
.x-commerce .dark\\:bg-white-04:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white-04:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-04);
}
.x-commerce .dark\\:bg-white-08:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white-08:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-08);
}
.x-commerce .dark\\:bg-white\\/4:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:bg-white\\/4:where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    background-color: color-mix(in oklab, var(--x-white) 4%, transparent);
  }
}
.x-commerce .dark\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-secondary\\)_--spacing\\(4\\)\\)\\]:where([data-theme='dark'], [data-theme='dark'] *),.x-commerce.dark\\:bg-\\[linear-gradient\\(to_bottom\\,transparent\\,var\\(--x-bg-secondary\\)_--spacing\\(4\\)\\)\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  background-image: linear-gradient(to bottom,transparent,var(--x-bg-secondary) calc(var(--spacing, 0.25rem) * 4));
}
.x-commerce .dark\\:from-\\[\\#0b2f5c\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-\\[\\#0b2f5c\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: #0b2f5c;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:from-\\[\\#0890ff\\]\\/5:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-\\[\\#0890ff\\]\\/5:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: color-mix(in oklab, #0890ff 5%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:from-blue-500\\/5:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:from-blue-500\\/5:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-from: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-from: color-mix(in oklab, var(--x-blue-500) 5%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-\\[\\#0890ff\\]\\/15:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-\\[\\#0890ff\\]\\/15:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: color-mix(in oklab, #0890ff 15%, transparent);
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-\\[\\#07407b\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-\\[\\#07407b\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: #07407b;
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:to-blue-500\\/15:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:to-blue-500\\/15:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-gradient-to: var(--x-blue-500);
  @supports (color: color-mix(in lab, red, red)) {
    --tw-gradient-to: color-mix(in oklab, var(--x-blue-500) 15%, transparent);
  }
  --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
}
.x-commerce .dark\\:text-\\[\\#009cde\\]:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:text-\\[\\#009cde\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  color: #009cde;
}
.x-commerce .dark\\:text-white:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:text-white:where([data-theme='dark'], [data-theme='dark'] *) {
  color: var(--x-white);
}
.x-commerce .dark\\:shadow-\\[0_0_16px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]:where([data-theme='dark'], [data-theme='dark'] *),.x-commerce.dark\\:shadow-\\[0_0_16px_rgba\\(0\\,0\\,0\\,0\\.2\\)\\]:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-shadow: 0 0 16px var(--tw-shadow-color, rgba(0,0,0,0.2));
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .dark\\:shadow-none:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:shadow-none:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-shadow: 0 0 #0000;
  box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
.x-commerce .dark\\:invert:where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.dark\\:invert:where([data-theme='dark'], [data-theme='dark'] *) {
  --tw-invert: invert(100%);
  filter: var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,);
}
.x-commerce .dark\\:not-first\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *):not(:first-child), .x-commerce.dark\\:not-first\\:border-white\\/10:where([data-theme='dark'], [data-theme='dark'] *):not(:first-child) {
  border-color: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    border-color: color-mix(in oklab, var(--x-white) 10%, transparent);
  }
}
.x-commerce .not-has-\\[\\>\\[data-list-group\\]\\]\\:dark\\:bg-white-04:not(:has( > [data-list-group])):where([data-theme='dark'], [data-theme='dark'] *), .x-commerce.not-has-\\[\\>\\[data-list-group\\]\\]\\:dark\\:bg-white-04:not(:has( > [data-list-group])):where([data-theme='dark'], [data-theme='dark'] *) {
  background-color: var(--x-white-04);
}
@media (hover: hover) {
  .x-commerce .dark\\:hover\\:bg-btn-secondary-hover:where([data-theme='dark'], [data-theme='dark'] *):hover, .x-commerce.dark\\:hover\\:bg-btn-secondary-hover:where([data-theme='dark'], [data-theme='dark'] *):hover {
    background-color: var(--x-btn-secondary-hover);
  }
}
@starting-style {
  .x-commerce .starting\\:-mb-5, .x-commerce.starting\\:-mb-5 {
    margin-bottom: calc(var(--spacing, 0.25rem) * -5);
  }
  .x-commerce .starting\\:grid-rows-\\[0fr\\], .x-commerce.starting\\:grid-rows-\\[0fr\\] {
    grid-template-rows: 0fr;
  }
  .x-commerce .starting\\:opacity-0, .x-commerce.starting\\:opacity-0 {
    opacity: 0%;
  }
}
@media (pointer: coarse) {
  .x-commerce .pointer-coarse\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\],.x-commerce.pointer-coarse\\:text-\\[length\\:max\\(16px\\,calc\\(16\\/var\\(--x-root-font-size\\,16\\)\\*1rem\\)\\)\\] {
    font-size: max(16px, calc(16 / var(--x-root-font-size,16) * 1rem));
  }
}
.x-commerce .\\[\\&_a\\]\\:text-inherit a, .x-commerce.\\[\\&_a\\]\\:text-inherit a {
  color: inherit;
}
.x-commerce .\\[\\&_a\\]\\:text-primary a, .x-commerce.\\[\\&_a\\]\\:text-primary a {
  color: var(--x-fg-primary);
}
.x-commerce .\\[\\&_a\\]\\:underline a, .x-commerce.\\[\\&_a\\]\\:underline a {
  text-decoration-line: underline;
}
.x-commerce .\\[\\&_path\\]\\:animate-checkmark path, .x-commerce.\\[\\&_path\\]\\:animate-checkmark path {
  animation: checkmark 250ms ease-out forwards;
}
.x-commerce .\\[\\&_strong\\]\\:font-semibold strong, .x-commerce.\\[\\&_strong\\]\\:font-semibold strong {
  --tw-font-weight: var(--font-weight-semibold, 600);
  font-weight: var(--font-weight-semibold, 600);
}
.x-commerce .\\[\\&_strong\\]\\:text-primary strong, .x-commerce.\\[\\&_strong\\]\\:text-primary strong {
  color: var(--x-fg-primary);
}
.x-commerce .\\[\\&_svg\\]\\:size-3 svg, .x-commerce.\\[\\&_svg\\]\\:size-3 svg {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[\\&_svg\\]\\:size-3\\.5 svg, .x-commerce.\\[\\&_svg\\]\\:size-3\\.5 svg {
  width: calc(var(--spacing, 0.25rem) * 3.5);
  height: calc(var(--spacing, 0.25rem) * 3.5);
}
.x-commerce .\\[\\&_svg\\]\\:size-4 svg, .x-commerce.\\[\\&_svg\\]\\:size-4 svg {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .\\[\\&_svg\\]\\:size-5 svg, .x-commerce.\\[\\&_svg\\]\\:size-5 svg {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&_svg\\]\\:size-6 svg, .x-commerce.\\[\\&_svg\\]\\:size-6 svg {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&_svg\\]\\:size-7 svg, .x-commerce.\\[\\&_svg\\]\\:size-7 svg {
  width: calc(var(--spacing, 0.25rem) * 7);
  height: calc(var(--spacing, 0.25rem) * 7);
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[1em\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[1em\\] svg {
  width: 1em;
  height: 1em;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[17px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[17px\\] svg {
  width: 17px;
  height: 17px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[18px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[18px\\] svg {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[20px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[20px\\] svg {
  width: 20px;
  height: 20px;
}
.x-commerce .\\[\\&_svg\\]\\:size-\\[30\\.857px\\] svg, .x-commerce.\\[\\&_svg\\]\\:size-\\[30\\.857px\\] svg {
  width: 30.857px;
  height: 30.857px;
}
.x-commerce .\\[\\&_svg\\]\\:transition-transform svg, .x-commerce.\\[\\&_svg\\]\\:transition-transform svg {
  transition-property: transform, translate, scale, rotate;
  transition-timing-function: var(--tw-ease, var(--default-transition-timing-function, cubic-bezier(0.4, 0, 0.2, 1)));
  transition-duration: var(--tw-duration, var(--default-transition-duration, 150ms));
}
.x-commerce .\\[\\&_svg\\]\\:duration-200 svg, .x-commerce.\\[\\&_svg\\]\\:duration-200 svg {
  --tw-duration: 200ms;
  transition-duration: 200ms;
}
@media (hover: hover) {
  .x-commerce .group-hover\\:\\[\\&_svg\\]\\:scale-110:is(:where(.group):hover *) svg, .x-commerce.group-hover\\:\\[\\&_svg\\]\\:scale-110:is(:where(.group):hover *) svg {
    --tw-scale-x: 110%;
    --tw-scale-y: 110%;
    --tw-scale-z: 110%;
    scale: var(--tw-scale-x) var(--tw-scale-y);
  }
  .x-commerce .group-hover\\:\\[\\&_svg\\]\\:rotate-\\[7deg\\]:is(:where(.group):hover *) svg, .x-commerce.group-hover\\:\\[\\&_svg\\]\\:rotate-\\[7deg\\]:is(:where(.group):hover *) svg {
    rotate: 7deg;
  }
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-3 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-3 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 3);
  height: calc(var(--spacing, 0.25rem) * 3);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 4);
  height: calc(var(--spacing, 0.25rem) * 4);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-5 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 svg:not([class*='size-']) {
  width: calc(var(--spacing, 0.25rem) * 6);
  height: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-\\[18px\\] svg:not([class*='size-']), .x-commerce.\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-\\[18px\\] svg:not([class*='size-']) {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&\\:\\:-webkit-scrollbar\\]\\:hidden::-webkit-scrollbar, .x-commerce.\\[\\&\\:\\:-webkit-scrollbar\\]\\:hidden::-webkit-scrollbar {
  display: none;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:size-5::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:size-5::-webkit-slider-thumb {
  width: calc(var(--spacing, 0.25rem) * 5);
  height: calc(var(--spacing, 0.25rem) * 5);
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:appearance-none::-webkit-slider-thumb {
  appearance: none;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:rounded-full::-webkit-slider-thumb {
  border-radius: 9999px;
}
.x-commerce .\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-white::-webkit-slider-thumb, .x-commerce.\\[\\&\\:\\:-webkit-slider-thumb\\]\\:bg-white::-webkit-slider-thumb {
  background-color: var(--x-white);
}
.x-commerce .\\[\\&\\:has\\(\\+\\*\\:not\\(\\:empty\\)\\)\\]\\:hidden:has( + :not(:empty)), .x-commerce.\\[\\&\\:has\\(\\+\\*\\:not\\(\\:empty\\)\\)\\]\\:hidden:has( + :not(:empty)) {
  display: none;
}
@media (width < 517px) {
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:h-12 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:h-12 > [data-slot=xds-button] {
    height: calc(var(--spacing, 0.25rem) * 12);
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:flex-1 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:flex-1 > [data-slot=xds-button] {
    flex: 1;
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:text-headline2 > [data-slot=xds-button], .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]\\]\\:text-headline2 > [data-slot=xds-button] {
    font-size: calc(17 / var(--x-root-font-size, 16) * 1rem);
    line-height: var(--tw-leading, calc(20 / var(--x-root-font-size, 16) * 1rem));
  }
  .x-commerce .max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 > [data-slot=xds-button] svg:not([class*='size-']), .x-commerce.max-narrow\\:\\[\\&\\>\\[data-slot\\=xds-button\\]_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-6 > [data-slot=xds-button] svg:not([class*='size-']) {
    width: calc(var(--spacing, 0.25rem) * 6);
    height: calc(var(--spacing, 0.25rem) * 6);
  }
}
.x-commerce .\\[\\&\\>input\\]\\:min-w-16 > input, .x-commerce.\\[\\&\\>input\\]\\:min-w-16 > input {
  min-width: calc(var(--spacing, 0.25rem) * 16);
}
.x-commerce .\\[\\&\\>li\\:first-child\\]\\:border-t > li:first-child, .x-commerce.\\[\\&\\>li\\:first-child\\]\\:border-t > li:first-child {
  border-top-style: var(--tw-border-style);
  border-top-width: 1px;
}
.x-commerce .\\[\\&\\>li\\:first-child\\]\\:pt-6 > li:first-child, .x-commerce.\\[\\&\\>li\\:first-child\\]\\:pt-6 > li:first-child {
  padding-top: calc(var(--spacing, 0.25rem) * 6);
}
.x-commerce .\\[\\&\\>svg\\]\\:size-\\[18px\\] > svg, .x-commerce.\\[\\&\\>svg\\]\\:size-\\[18px\\] > svg {
  width: 18px;
  height: 18px;
}
.x-commerce .\\[\\&\\>svg\\]\\:shrink-0 > svg, .x-commerce.\\[\\&\\>svg\\]\\:shrink-0 > svg {
  flex-shrink: 0;
}
.x-commerce .\\[\\&\\>svg\\]\\:text-tertiary > svg, .x-commerce.\\[\\&\\>svg\\]\\:text-tertiary > svg {
  color: var(--x-fg-tertiary);
}
@media (height<720px) {
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:bottom-3, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:bottom-3 {
    bottom: calc(var(--spacing, 0.25rem) * 3);
  }
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:overflow-visible\\!, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:overflow-visible\\! {
    overflow: visible !important;
  }
  .x-commerce .\\[\\@media\\(height\\<720px\\)\\]\\:before\\:opacity-100::before, .x-commerce.\\[\\@media\\(height\\<720px\\)\\]\\:before\\:opacity-100::before {
    content: var(--tw-content);
    opacity: 100%;
  }
}
@media (min-height:720px) {
  .x-commerce .\\[\\@media\\(min-height\\:720px\\)\\]\\:h-full, .x-commerce.\\[\\@media\\(min-height\\:720px\\)\\]\\:h-full {
    height: 100%;
  }
  .x-commerce .\\[\\@media\\(min-height\\:720px\\)\\]\\:flex-1, .x-commerce.\\[\\@media\\(min-height\\:720px\\)\\]\\:flex-1 {
    flex: 1;
  }
}
.cursor-commerce {
  --x-black: #000000;
  --x-white: #ffffff;
  --x-neutral-000: #f2f2f2;
  --x-neutral-050: #ebebeb;
  --x-neutral-100: #d9d9d9;
  --x-neutral-200: #cccccc;
  --x-neutral-300: #b2b2b2;
  --x-neutral-400: #999999;
  --x-neutral-500: #808080;
  --x-neutral-600: #666666;
  --x-neutral-700: #4d4d4d;
  --x-neutral-800: #333333;
  --x-neutral-900: #262626;
  --x-neutral-1000: #141414;
  --x-neutral-1100: #0d0d0d;
  --x-blue-000: #eafaff;
  --x-blue-050: #d7f6ff;
  --x-blue-100: #bff2ff;
  --x-blue-200: #97e3ff;
  --x-blue-300: #6bc9fb;
  --x-blue-400: #43b3f6;
  --x-blue-500: #1d9bf0;
  --x-blue-600: #0083eb;
  --x-blue-700: #006fd6;
  --x-blue-800: #005ac2;
  --x-blue-900: #003886;
  --x-blue-1000: #00154a;
  --x-blue-1100: #02113d;
  --x-green-000: #edfff9;
  --x-green-050: #dbf8eb;
  --x-green-100: #c2f1dc;
  --x-green-200: #92e3bf;
  --x-green-300: #61d6a3;
  --x-green-400: #31c88e;
  --x-green-500: #00ba7c;
  --x-green-600: #009c64;
  --x-green-700: #007e50;
  --x-green-800: #00613d;
  --x-green-900: #004329;
  --x-green-1000: #00251a;
  --x-green-1100: #002218;
  --x-red-000: #fff0f1;
  --x-red-050: #fedee3;
  --x-red-100: #fdc9ce;
  --x-red-200: #fb9fa8;
  --x-red-300: #f87580;
  --x-red-400: #f64b5c;
  --x-red-500: #f4212e;
  --x-red-600: #d11a28;
  --x-red-700: #ae1425;
  --x-red-800: #8a0d20;
  --x-red-900: #67070f;
  --x-red-1000: #440004;
  --x-red-1100: #3d0105;
  --x-orange-000: #fef5ec;
  --x-orange-050: #ffeddb;
  --x-orange-100: #ffe0c2;
  --x-orange-200: #ffc692;
  --x-orange-300: #ffad61;
  --x-orange-400: #ff9331;
  --x-orange-500: #ff7a00;
  --x-orange-600: #d86000;
  --x-orange-700: #b04500;
  --x-orange-800: #892b00;
  --x-orange-900: #692100;
  --x-orange-1000: #491600;
  --x-orange-1100: #3c1201;
  --x-yellow-000: #fffdea;
  --x-yellow-050: #fffed7;
  --x-yellow-100: #fffec0;
  --x-yellow-200: #fff595;
  --x-yellow-300: #ffeb6b;
  --x-yellow-400: #ffe042;
  --x-yellow-500: #ffd400;
  --x-yellow-600: #dcab00;
  --x-yellow-700: #b88200;
  --x-yellow-800: #955900;
  --x-yellow-900: #6f3e00;
  --x-yellow-1000: #482300;
  --x-yellow-1100: #3d1e02;
  --x-purple-000: #f5f3ff;
  --x-purple-050: #ece8ff;
  --x-purple-100: #dfd8ff;
  --x-purple-200: #c5b7ff;
  --x-purple-300: #ac97ff;
  --x-purple-400: #9276ff;
  --x-purple-500: #7856ff;
  --x-purple-600: #6545db;
  --x-purple-700: #5234b7;
  --x-purple-800: #3f2292;
  --x-purple-900: #2c116e;
  --x-purple-1000: #19004a;
  --x-purple-1100: #160634;
  --x-plum-000: #ffefff;
  --x-plum-050: #fae0fa;
  --x-plum-100: #f4cdf5;
  --x-plum-200: #e9a7eb;
  --x-plum-300: #df82e0;
  --x-plum-400: #d45cd6;
  --x-plum-500: #c936cc;
  --x-plum-600: #ab2bae;
  --x-plum-700: #8d2090;
  --x-plum-800: #701671;
  --x-plum-900: #520b53;
  --x-plum-1000: #340035;
  --x-plum-1100: #2d032d;
  --x-magenta-000: #fff1f8;
  --x-magenta-050: #ffdded;
  --x-magenta-100: #fec7e1;
  --x-magenta-200: #fd9bc9;
  --x-magenta-300: #fb70b0;
  --x-magenta-400: #fa4498;
  --x-magenta-500: #f91880;
  --x-magenta-600: #d4136d;
  --x-magenta-700: #af0e5a;
  --x-magenta-800: #890a46;
  --x-magenta-900: #640533;
  --x-magenta-1000: #3f001f;
  --x-magenta-1100: #37011c;
  --x-teal-000: #e9feff;
  --x-teal-050: #d1f8fa;
  --x-teal-100: #b3f1f4;
  --x-teal-200: #78e4e8;
  --x-teal-300: #3cd6dd;
  --x-teal-400: #00c9d1;
  --x-teal-500: #00afb6;
  --x-teal-600: #009399;
  --x-teal-700: #00777c;
  --x-teal-800: #005a5f;
  --x-teal-900: #003e42;
  --x-teal-1000: #002225;
  --x-teal-1100: #022023;
  --x-black-00: rgba(0, 0, 0, 0);
  --x-black-01: rgba(0, 0, 0, 0.01);
  --x-black-02: rgba(0, 0, 0, 0.02);
  --x-black-03: rgba(0, 0, 0, 0.03);
  --x-black-04: rgba(0, 0, 0, 0.04);
  --x-black-05: rgba(0, 0, 0, 0.05);
  --x-black-06: rgba(0, 0, 0, 0.06);
  --x-black-07: rgba(0, 0, 0, 0.07);
  --x-black-08: rgba(0, 0, 0, 0.08);
  --x-black-09: rgba(0, 0, 0, 0.09);
  --x-black-10: rgba(0, 0, 0, 0.1);
  --x-black-15: rgba(0, 0, 0, 0.15);
  --x-black-20: rgba(0, 0, 0, 0.2);
  --x-black-30: rgba(0, 0, 0, 0.3);
  --x-black-40: rgba(0, 0, 0, 0.4);
  --x-black-50: rgba(0, 0, 0, 0.5);
  --x-black-60: rgba(0, 0, 0, 0.6);
  --x-black-70: rgba(0, 0, 0, 0.7);
  --x-black-80: rgba(0, 0, 0, 0.8);
  --x-black-85: rgba(0, 0, 0, 0.85);
  --x-black-90: rgba(0, 0, 0, 0.9);
  --x-black-95: rgba(0, 0, 0, 0.95);
  --x-white-00: rgba(255, 255, 255, 0);
  --x-white-01: rgba(255, 255, 255, 0.01);
  --x-white-02: rgba(255, 255, 255, 0.02);
  --x-white-03: rgba(255, 255, 255, 0.03);
  --x-white-04: rgba(255, 255, 255, 0.04);
  --x-white-05: rgba(255, 255, 255, 0.05);
  --x-white-06: rgba(255, 255, 255, 0.06);
  --x-white-07: rgba(255, 255, 255, 0.07);
  --x-white-08: rgba(255, 255, 255, 0.08);
  --x-white-09: rgba(255, 255, 255, 0.09);
  --x-white-10: rgba(255, 255, 255, 0.1);
  --x-white-15: rgba(255, 255, 255, 0.15);
  --x-white-20: rgba(255, 255, 255, 0.2);
  --x-white-30: rgba(255, 255, 255, 0.3);
  --x-white-40: rgba(255, 255, 255, 0.4);
  --x-white-50: rgba(255, 255, 255, 0.5);
  --x-white-60: rgba(255, 255, 255, 0.6);
  --x-white-70: rgba(255, 255, 255, 0.7);
  --x-white-80: rgba(255, 255, 255, 0.8);
  --x-white-85: rgba(255, 255, 255, 0.85);
  --x-white-90: rgba(255, 255, 255, 0.9);
  --x-white-95: rgba(255, 255, 255, 0.95);
  --x-radius-m: 1;
  --x-font-sans: TwitterChirp, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif;
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  --x-blue-000: #02113d;
  --x-blue-050: #00154a;
  --x-blue-100: #003886;
  --x-blue-200: #005ac2;
  --x-blue-300: #006fd6;
  --x-blue-400: #0083eb;
  --x-blue-500: #1d9bf0;
  --x-blue-600: #43b3f6;
  --x-blue-700: #6bc9fb;
  --x-blue-800: #97e3ff;
  --x-blue-900: #bff2ff;
  --x-blue-1000: #d7f6ff;
  --x-blue-1100: #eafaff;
  --x-green-000: #002218;
  --x-green-050: #00251a;
  --x-green-100: #004329;
  --x-green-200: #00613d;
  --x-green-300: #007e50;
  --x-green-400: #009c64;
  --x-green-500: #00ba7c;
  --x-green-600: #31c88e;
  --x-green-700: #61d6a3;
  --x-green-800: #92e3bf;
  --x-green-900: #c2f1dc;
  --x-green-1000: #dbf8eb;
  --x-green-1100: #edfff9;
  --x-red-000: #3d0105;
  --x-red-050: #440004;
  --x-red-100: #67070f;
  --x-red-200: #8a0d20;
  --x-red-300: #ae1425;
  --x-red-400: #d11a28;
  --x-red-500: #f4212e;
  --x-red-600: #f64b5c;
  --x-red-700: #f87580;
  --x-red-800: #fb9fa8;
  --x-red-900: #fdc9ce;
  --x-red-1000: #fedee3;
  --x-red-1100: #fff0f1;
  --x-orange-000: #3c1201;
  --x-orange-050: #491600;
  --x-orange-100: #692100;
  --x-orange-200: #892b00;
  --x-orange-300: #b04500;
  --x-orange-400: #d86000;
  --x-orange-500: #ff7a00;
  --x-orange-600: #ff9331;
  --x-orange-700: #ffad61;
  --x-orange-800: #ffc692;
  --x-orange-900: #ffe0c2;
  --x-orange-1000: #ffeddb;
  --x-orange-1100: #fef5ec;
  --x-yellow-000: #3d1e02;
  --x-yellow-050: #482300;
  --x-yellow-100: #6f3e00;
  --x-yellow-200: #955900;
  --x-yellow-300: #b88200;
  --x-yellow-400: #dcab00;
  --x-yellow-500: #ffd400;
  --x-yellow-600: #ffe042;
  --x-yellow-700: #ffeb6b;
  --x-yellow-800: #fff595;
  --x-yellow-900: #fffec0;
  --x-yellow-1000: #fffed7;
  --x-yellow-1100: #fffdea;
  --x-purple-000: #160634;
  --x-purple-050: #19004a;
  --x-purple-100: #2c116e;
  --x-purple-200: #3f2292;
  --x-purple-300: #5234b7;
  --x-purple-400: #6545db;
  --x-purple-500: #7856ff;
  --x-purple-600: #9276ff;
  --x-purple-700: #ac97ff;
  --x-purple-800: #c5b7ff;
  --x-purple-900: #dfd8ff;
  --x-purple-1000: #ece8ff;
  --x-purple-1100: #f5f3ff;
  --x-plum-000: #2d032d;
  --x-plum-050: #340035;
  --x-plum-100: #520b53;
  --x-plum-200: #701671;
  --x-plum-300: #8d2090;
  --x-plum-400: #ab2bae;
  --x-plum-500: #c936cc;
  --x-plum-600: #d45cd6;
  --x-plum-700: #df82e0;
  --x-plum-800: #e9a7eb;
  --x-plum-900: #f4cdf5;
  --x-plum-1000: #fae0fa;
  --x-plum-1100: #ffefff;
  --x-magenta-000: #37011c;
  --x-magenta-050: #3f001f;
  --x-magenta-100: #640533;
  --x-magenta-200: #890a46;
  --x-magenta-300: #af0e5a;
  --x-magenta-400: #d4136d;
  --x-magenta-500: #f91880;
  --x-magenta-600: #fa4498;
  --x-magenta-700: #fb70b0;
  --x-magenta-800: #fd9bc9;
  --x-magenta-900: #fec7e1;
  --x-magenta-1000: #ffdded;
  --x-magenta-1100: #fff1f8;
  --x-teal-000: #022023;
  --x-teal-050: #002225;
  --x-teal-100: #003e42;
  --x-teal-200: #005a5f;
  --x-teal-300: #00777c;
  --x-teal-400: #009399;
  --x-teal-500: #00afb6;
  --x-teal-600: #00c9d1;
  --x-teal-700: #3cd6dd;
  --x-teal-800: #78e4e8;
  --x-teal-900: #b3f1f4;
  --x-teal-1000: #d1f8fa;
  --x-teal-1100: #e9feff;
}
.cursor-commerce, .cursor-commerce[data-theme='light'], .cursor-commerce[data-theme='light'], .x-commerce .light-theme, .x-commerce.light-theme {
  color-scheme: light;
  --x-bg-primary: var(--x-white);
  --x-bg-secondary: var(--x-neutral-000);
  --x-bg-tertiary: var(--x-neutral-050);
  --x-bg-quaternary: var(--x-black-04);
  --x-bg-sheets: var(--x-white);
  --x-bg-inputs: var(--x-black-04);
  --x-bg-modal: var(--x-white);
  --x-bg-transparent: transparent;
  --x-bg-destructive: var(--x-red-050);
  --x-bg-success: var(--x-green-000);
  --x-bg-info: var(--x-blue-000);
  --x-bg-warning: var(--x-yellow-000);
  --x-bg-subscribe: var(--x-plum-050);
  --x-fg-primary: var(--x-black);
  --x-fg-secondary: var(--x-black-60);
  --x-fg-tertiary: var(--x-black-30);
  --x-fg-inverted: var(--x-white);
  --x-fg-on-color: var(--x-white);
  --x-fg-brand: var(--x-blue-500);
  --x-fg-destructive: var(--x-red-500);
  --x-fg-success: var(--x-green-500);
  --x-fg-warning: var(--x-yellow-500);
  --x-fg-subscribe: var(--x-plum-500);
  --x-border-normal: var(--x-black-15);
  --x-border-hover: var(--x-black-20);
  --x-border-active: var(--x-black-30);
  --x-border-media: var(--x-black-04);
  --x-border-elevated: rgba(255, 255, 255, 0.2);
  --x-border-destructive: var(--x-red-500);
  --x-border-destructive-light: var(--x-red-100);
  --x-btn-primary: var(--x-black);
  --x-btn-primary-hover: var(--x-black-80);
  --x-btn-primary-pressed: var(--x-black-70);
  --x-btn-secondary: var(--x-neutral-050);
  --x-btn-secondary-hover: var(--x-neutral-100);
  --x-btn-secondary-pressed: var(--x-neutral-200);
  --x-btn-tertiary: var(--x-black-04);
  --x-btn-tertiary-hover: var(--x-black-08);
  --x-btn-tertiary-pressed: var(--x-black-15);
  --x-btn-tertiary-opaque: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque: color-mix(
    in srgb,
    var(--x-black) 4%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-hover: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-hover: color-mix(
    in srgb,
    var(--x-black) 8%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-pressed: var(--x-black);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-pressed: color-mix(
    in srgb,
    var(--x-black) 15%,
    var(--x-bg-primary)
  );
  }
  --x-btn-ghost-hover: var(--x-black-04);
  --x-btn-ghost-pressed: var(--x-black-15);
  --x-btn-inverted: var(--x-white);
  --x-btn-inverted-hover: var(--x-white-90);
  --x-btn-inverted-pressed: var(--x-white-80);
  --x-btn-brand: var(--x-blue-500);
  --x-btn-brand-hover: var(--x-blue-600);
  --x-btn-brand-pressed: var(--x-blue-700);
  --x-btn-destructive: var(--x-red-500);
  --x-btn-destructive-hover: var(--x-red-600);
  --x-btn-destructive-pressed: var(--x-red-700);
  --x-hover-subtle: var(--x-black-04);
  --x-overlay-normal: var(--x-black-20);
  --x-overlay-strong: var(--x-black-40);
  --x-toast-bg: rgba(34, 34, 34, 0.6);
  --x-tooltip-bg: var(--x-neutral-800);
  --x-tooltip-fg: var(--x-white);
  --x-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.08);
  --x-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --x-shadow-toast: 0 8px 32px rgba(0, 0, 0, 0.2);
  --x-shadow-popup: 0 4px 20px rgba(0, 0, 0, 0.08);
  --x-ring: var(--x-blue-500);
  --x-shadow-focus: 0 0 0 2px var(--x-ring);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus: 0 0 0 2px color-mix(in srgb, var(--x-ring) 75%, transparent);
  }
  --x-shadow-focus-destructive: 0 0 0 2px
    var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus-destructive: 0 0 0 2px
    color-mix(in srgb, var(--x-border-destructive) 80%, transparent);
  }
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  color-scheme: dark;
  --x-bg-primary: var(--x-black);
  --x-bg-secondary: var(--x-neutral-1000);
  --x-bg-tertiary: var(--x-neutral-900);
  --x-bg-quaternary: var(--x-white-04);
  --x-bg-modal: var(--x-neutral-1000);
  --x-bg-sheets: var(--x-neutral-1000);
  --x-bg-inputs: var(--x-white-08);
  --x-bg-transparent: transparent;
  --x-bg-destructive: var(--x-red-050);
  --x-bg-success: var(--x-green-000);
  --x-bg-info: var(--x-blue-000);
  --x-bg-warning: var(--x-yellow-000);
  --x-bg-subscribe: var(--x-plum-050);
  --x-fg-primary: var(--x-white);
  --x-fg-secondary: var(--x-white-60);
  --x-fg-tertiary: var(--x-white-30);
  --x-fg-inverted: var(--x-black);
  --x-fg-on-color: var(--x-white);
  --x-fg-brand: var(--x-blue-500);
  --x-fg-destructive: var(--x-red-500);
  --x-fg-success: var(--x-green-500);
  --x-fg-warning: var(--x-yellow-500);
  --x-fg-subscribe: var(--x-plum-500);
  --x-border-normal: var(--x-white-15);
  --x-border-hover: var(--x-white-20);
  --x-border-active: var(--x-white-30);
  --x-border-media: var(--x-white-04);
  --x-border-elevated: rgba(255, 255, 255, 0.2);
  --x-border-destructive: var(--x-red-500);
  --x-border-destructive-light: var(--x-red-100);
  --x-btn-primary: var(--x-white);
  --x-btn-primary-hover: var(--x-white-80);
  --x-btn-primary-pressed: var(--x-white-70);
  --x-btn-secondary: var(--x-neutral-900);
  --x-btn-secondary-hover: var(--x-neutral-800);
  --x-btn-secondary-pressed: var(--x-neutral-700);
  --x-btn-tertiary: var(--x-white-10);
  --x-btn-tertiary-hover: var(--x-white-15);
  --x-btn-tertiary-pressed: var(--x-white-20);
  --x-btn-tertiary-opaque: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque: color-mix(
    in srgb,
    var(--x-white) 10%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-hover: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-hover: color-mix(
    in srgb,
    var(--x-white) 15%,
    var(--x-bg-primary)
  );
  }
  --x-btn-tertiary-opaque-pressed: var(--x-white);
  @supports (color: color-mix(in lab, red, red)) {
    --x-btn-tertiary-opaque-pressed: color-mix(
    in srgb,
    var(--x-white) 20%,
    var(--x-bg-primary)
  );
  }
  --x-btn-ghost-hover: var(--x-white-08);
  --x-btn-ghost-pressed: var(--x-white-15);
  --x-btn-inverted: var(--x-black);
  --x-btn-inverted-hover: var(--x-black-90);
  --x-btn-inverted-pressed: var(--x-black-80);
  --x-btn-brand: var(--x-blue-500);
  --x-btn-brand-hover: var(--x-blue-600);
  --x-btn-brand-pressed: var(--x-blue-700);
  --x-btn-destructive: var(--x-red-500);
  --x-btn-destructive-hover: var(--x-red-600);
  --x-btn-destructive-pressed: var(--x-red-700);
  --x-hover-subtle: var(--x-white-08);
  --x-overlay-normal: var(--x-black-40);
  --x-overlay-strong: var(--x-black-80);
  --x-toast-bg: rgba(34, 34, 34, 0.6);
  --x-tooltip-bg: var(--x-neutral-300);
  --x-tooltip-fg: var(--x-black);
  --x-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.15);
  --x-shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.2);
  --x-shadow-toast: 0 8px 32px rgba(0, 0, 0, 0.35);
  --x-shadow-popup: 0 4px 20px rgba(0, 0, 0, 0.4);
  --x-ring: var(--x-blue-500);
  --x-shadow-focus: 0 0 0 2px var(--x-ring);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus: 0 0 0 2px color-mix(in srgb, var(--x-ring) 75%, transparent);
  }
  --x-shadow-focus-destructive: 0 0 0 2px
    var(--x-border-destructive);
  @supports (color: color-mix(in lab, red, red)) {
    --x-shadow-focus-destructive: 0 0 0 2px
    color-mix(in srgb, var(--x-border-destructive) 80%, transparent);
  }
}
.cursor-commerce, .cursor-commerce[data-theme='light'], .cursor-commerce[data-theme='light'], .x-commerce .light-theme, .x-commerce.light-theme {
  --x-fg-alpha-00: rgba(0, 0, 0, 0);
  --x-fg-alpha-01: rgba(0, 0, 0, 0.01);
  --x-fg-alpha-02: rgba(0, 0, 0, 0.02);
  --x-fg-alpha-03: rgba(0, 0, 0, 0.03);
  --x-fg-alpha-04: rgba(0, 0, 0, 0.04);
  --x-fg-alpha-05: rgba(0, 0, 0, 0.05);
  --x-fg-alpha-06: rgba(0, 0, 0, 0.06);
  --x-fg-alpha-07: rgba(0, 0, 0, 0.07);
  --x-fg-alpha-08: rgba(0, 0, 0, 0.08);
  --x-fg-alpha-09: rgba(0, 0, 0, 0.09);
  --x-fg-alpha-10: rgba(0, 0, 0, 0.1);
  --x-fg-alpha-15: rgba(0, 0, 0, 0.15);
  --x-fg-alpha-20: rgba(0, 0, 0, 0.2);
  --x-fg-alpha-30: rgba(0, 0, 0, 0.3);
  --x-fg-alpha-40: rgba(0, 0, 0, 0.4);
  --x-fg-alpha-50: rgba(0, 0, 0, 0.5);
  --x-fg-alpha-60: rgba(0, 0, 0, 0.6);
  --x-fg-alpha-70: rgba(0, 0, 0, 0.7);
  --x-fg-alpha-80: rgba(0, 0, 0, 0.8);
  --x-fg-alpha-85: rgba(0, 0, 0, 0.85);
  --x-fg-alpha-90: rgba(0, 0, 0, 0.9);
  --x-fg-alpha-95: rgba(0, 0, 0, 0.95);
  --x-fg-alpha-100: rgba(0, 0, 0, 1);
  --x-bg-alpha-00: rgba(255, 255, 255, 0);
  --x-bg-alpha-01: rgba(255, 255, 255, 0.01);
  --x-bg-alpha-02: rgba(255, 255, 255, 0.02);
  --x-bg-alpha-03: rgba(255, 255, 255, 0.03);
  --x-bg-alpha-04: rgba(255, 255, 255, 0.04);
  --x-bg-alpha-05: rgba(255, 255, 255, 0.05);
  --x-bg-alpha-06: rgba(255, 255, 255, 0.06);
  --x-bg-alpha-07: rgba(255, 255, 255, 0.07);
  --x-bg-alpha-08: rgba(255, 255, 255, 0.08);
  --x-bg-alpha-09: rgba(255, 255, 255, 0.09);
  --x-bg-alpha-10: rgba(255, 255, 255, 0.1);
  --x-bg-alpha-15: rgba(255, 255, 255, 0.15);
  --x-bg-alpha-20: rgba(255, 255, 255, 0.2);
  --x-bg-alpha-30: rgba(255, 255, 255, 0.3);
  --x-bg-alpha-40: rgba(255, 255, 255, 0.4);
  --x-bg-alpha-50: rgba(255, 255, 255, 0.5);
  --x-bg-alpha-60: rgba(255, 255, 255, 0.6);
  --x-bg-alpha-70: rgba(255, 255, 255, 0.7);
  --x-bg-alpha-80: rgba(255, 255, 255, 0.8);
  --x-bg-alpha-85: rgba(255, 255, 255, 0.85);
  --x-bg-alpha-90: rgba(255, 255, 255, 0.9);
  --x-bg-alpha-95: rgba(255, 255, 255, 0.95);
  --x-bg-alpha-100: rgba(255, 255, 255, 1);
}
.cursor-commerce[data-theme='dark'], .cursor-commerce[data-theme='dark'], .x-commerce .dark-theme, .x-commerce.dark-theme {
  --x-fg-alpha-00: rgba(255, 255, 255, 0);
  --x-fg-alpha-01: rgba(255, 255, 255, 0.01);
  --x-fg-alpha-02: rgba(255, 255, 255, 0.02);
  --x-fg-alpha-03: rgba(255, 255, 255, 0.03);
  --x-fg-alpha-04: rgba(255, 255, 255, 0.04);
  --x-fg-alpha-05: rgba(255, 255, 255, 0.05);
  --x-fg-alpha-06: rgba(255, 255, 255, 0.06);
  --x-fg-alpha-07: rgba(255, 255, 255, 0.07);
  --x-fg-alpha-08: rgba(255, 255, 255, 0.08);
  --x-fg-alpha-09: rgba(255, 255, 255, 0.09);
  --x-fg-alpha-10: rgba(255, 255, 255, 0.1);
  --x-fg-alpha-15: rgba(255, 255, 255, 0.15);
  --x-fg-alpha-20: rgba(255, 255, 255, 0.2);
  --x-fg-alpha-30: rgba(255, 255, 255, 0.3);
  --x-fg-alpha-40: rgba(255, 255, 255, 0.4);
  --x-fg-alpha-50: rgba(255, 255, 255, 0.5);
  --x-fg-alpha-60: rgba(255, 255, 255, 0.6);
  --x-fg-alpha-70: rgba(255, 255, 255, 0.7);
  --x-fg-alpha-80: rgba(255, 255, 255, 0.8);
  --x-fg-alpha-85: rgba(255, 255, 255, 0.85);
  --x-fg-alpha-90: rgba(255, 255, 255, 0.9);
  --x-fg-alpha-95: rgba(255, 255, 255, 0.95);
  --x-fg-alpha-100: rgba(255, 255, 255, 1);
  --x-bg-alpha-00: rgba(0, 0, 0, 0);
  --x-bg-alpha-01: rgba(0, 0, 0, 0.01);
  --x-bg-alpha-02: rgba(0, 0, 0, 0.02);
  --x-bg-alpha-03: rgba(0, 0, 0, 0.03);
  --x-bg-alpha-04: rgba(0, 0, 0, 0.04);
  --x-bg-alpha-05: rgba(0, 0, 0, 0.05);
  --x-bg-alpha-06: rgba(0, 0, 0, 0.06);
  --x-bg-alpha-07: rgba(0, 0, 0, 0.07);
  --x-bg-alpha-08: rgba(0, 0, 0, 0.08);
  --x-bg-alpha-09: rgba(0, 0, 0, 0.09);
  --x-bg-alpha-10: rgba(0, 0, 0, 0.1);
  --x-bg-alpha-15: rgba(0, 0, 0, 0.15);
  --x-bg-alpha-20: rgba(0, 0, 0, 0.2);
  --x-bg-alpha-30: rgba(0, 0, 0, 0.3);
  --x-bg-alpha-40: rgba(0, 0, 0, 0.4);
  --x-bg-alpha-50: rgba(0, 0, 0, 0.5);
  --x-bg-alpha-60: rgba(0, 0, 0, 0.6);
  --x-bg-alpha-70: rgba(0, 0, 0, 0.7);
  --x-bg-alpha-80: rgba(0, 0, 0, 0.8);
  --x-bg-alpha-85: rgba(0, 0, 0, 0.85);
  --x-bg-alpha-90: rgba(0, 0, 0, 0.9);
  --x-bg-alpha-95: rgba(0, 0, 0, 0.95);
  --x-bg-alpha-100: rgba(0, 0, 0, 1);
}
.x-commerce .x-commerce, .x-commerce.x-commerce {
  color: var(--x-fg-primary);
}
.x-commerce .x-commerce-brand-mark, .x-commerce.x-commerce-brand-mark {
  color: inherit;
}
@keyframes x-commerce-rise {
  from {
    opacity: 0;
    translate: 0 10px;
  }
  to {
    opacity: 1;
    translate: 0 0;
  }
}
@keyframes x-commerce-pop {
  0% {
    opacity: 0;
    scale: 0.5;
  }
  70% {
    scale: 1.08;
  }
  100% {
    opacity: 1;
    scale: 1;
  }
}
@keyframes x-commerce-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes x-commerce-pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes x-commerce-price-fade-in {
  from {
    opacity: 0;
  }
}
@keyframes x-commerce-price-fade-out {
  to {
    opacity: 0;
  }
}
@keyframes x-commerce-modal-in {
  from {
    opacity: 0;
    scale: 0.96;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}
.x-commerce .x-commerce-rise, .x-commerce.x-commerce-rise {
  animation: x-commerce-rise 0.35s ease-out backwards;
}
.x-commerce .x-commerce-stagger > *, .x-commerce.x-commerce-stagger > * {
  animation: x-commerce-rise 0.35s ease-out backwards;
}
.x-commerce .x-commerce-stagger > *:nth-child(2), .x-commerce.x-commerce-stagger > *:nth-child(2) {
  animation-delay: 70ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(3), .x-commerce.x-commerce-stagger > *:nth-child(3) {
  animation-delay: 140ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(4), .x-commerce.x-commerce-stagger > *:nth-child(4) {
  animation-delay: 210ms;
}
.x-commerce .x-commerce-stagger > *:nth-child(n + 5), .x-commerce.x-commerce-stagger > *:nth-child(n + 5) {
  animation-delay: 280ms;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .x-commerce-step-forward, .x-commerce.x-commerce-step-forward, .x-commerce .x-commerce-step-back, .x-commerce.x-commerce-step-back {
    animation: x-commerce-fade-in var(--x-commerce-motion-duration) var(--x-commerce-motion-ease) backwards;
  }
}
.x-commerce .x-commerce-fade-in, .x-commerce.x-commerce-fade-in {
  animation: x-commerce-fade-in 0.2s ease-out both;
}
.x-commerce .x-commerce-pop, .x-commerce.x-commerce-pop {
  animation: x-commerce-pop 0.4s ease-out both;
}
.x-commerce .x-commerce-modal-in, .x-commerce.x-commerce-modal-in {
  animation: x-commerce-modal-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-rise, .x-commerce.x-commerce-rise, .x-commerce .x-commerce-stagger > *, .x-commerce.x-commerce-stagger > *, .x-commerce .x-commerce-step-forward, .x-commerce.x-commerce-step-forward, .x-commerce .x-commerce-step-back, .x-commerce.x-commerce-step-back, .x-commerce .x-commerce-fade-in, .x-commerce.x-commerce-fade-in, .x-commerce .x-commerce-modal-in, .x-commerce.x-commerce-modal-in, .x-commerce .x-commerce-pop, .x-commerce.x-commerce-pop {
    animation-duration: 0.01ms;
    animation-delay: 0ms;
  }
}
.x-commerce .x-commerce-modal .x-commerce-rise, .x-commerce.x-commerce-modal .x-commerce-rise, .x-commerce .x-commerce-modal .x-commerce-stagger:not(.x-commerce-plan-picker) > *, .x-commerce.x-commerce-modal .x-commerce-stagger:not(.x-commerce-plan-picker) > *, .x-commerce .x-commerce-modal .x-commerce-fade-in, .x-commerce.x-commerce-modal .x-commerce-fade-in, .x-commerce .x-commerce-modal .x-commerce-pop, .x-commerce.x-commerce-modal .x-commerce-pop, .x-commerce [data-x-commerce-returning] .x-commerce-stagger > *, .x-commerce[data-x-commerce-returning] .x-commerce-stagger > * {
  animation: none;
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-modal, .x-commerce.x-commerce-modal, .x-commerce .x-commerce-modal *, .x-commerce.x-commerce-modal * {
    transition: none;
  }
}
.cursor-commerce {
  --x-commerce-motion-duration: 270ms;
  --x-commerce-motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --x-commerce-step-out: 100ms;
  --x-commerce-step-in: calc(
    var(--x-commerce-motion-duration) - var(--x-commerce-step-out)
  );
  --x-commerce-column-delay: calc(var(--x-commerce-motion-duration) - 40ms);
  --x-commerce-column-in: 220ms;
  --x-commerce-column-stagger: 45ms;
  --x-commerce-plan-card-max: 324px;
  --x-commerce-plan-row-card: 362px;
}
.x-commerce .x-commerce-step-surface, .x-commerce.x-commerce-step-surface {
  view-transition-name: x-commerce-step-surface;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-content, .x-commerce.x-commerce-step-content {
  view-transition-name: x-commerce-step-content;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-summary-tint, .x-commerce.x-commerce-step-surface .x-commerce-summary-tint {
  view-transition-name: x-commerce-summary-tint;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-plan-transit .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-plan-transit .x-commerce-plan-head, .x-commerce .x-commerce-step-surface .x-commerce-summary .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-summary .x-commerce-plan-head {
  view-transition-name: x-commerce-plan-head;
  view-transition-class: x-commerce-step;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(1), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(1) {
  view-transition-name: x-commerce-payment-row-1;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(2), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(2) {
  view-transition-name: x-commerce-payment-row-2;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(3), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(3) {
  view-transition-name: x-commerce-payment-row-3;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(4), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(4) {
  view-transition-name: x-commerce-payment-row-4;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(5), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(5) {
  view-transition-name: x-commerce-payment-row-5;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(6), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(6) {
  view-transition-name: x-commerce-payment-row-6;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(7), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(7) {
  view-transition-name: x-commerce-payment-row-7;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-payment-column > :nth-child(8), .x-commerce.x-commerce-step-surface .x-commerce-payment-column > :nth-child(8) {
  view-transition-name: x-commerce-payment-row-8;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-summary-actions, .x-commerce.x-commerce-step-surface .x-commerce-summary-actions {
  view-transition-name: x-commerce-summary-actions;
  view-transition-class: x-commerce-payment-row;
}
.x-commerce .x-commerce-step-surface .x-commerce-preparing, .x-commerce.x-commerce-step-surface .x-commerce-preparing {
  min-height: var(--x-commerce-surface-cap);
}
.x-commerce .x-commerce-step-surface .x-commerce-step-content, .x-commerce.x-commerce-step-surface .x-commerce-step-content, .x-commerce .x-commerce-step-surface .x-commerce-summary-tint, .x-commerce.x-commerce-step-surface .x-commerce-summary-tint, .x-commerce .x-commerce-step-surface .x-commerce-plan-head, .x-commerce.x-commerce-step-surface .x-commerce-plan-head, .x-commerce .x-commerce-step-surface .x-commerce-summary-actions, .x-commerce.x-commerce-step-surface .x-commerce-summary-actions, .x-commerce .x-commerce-step-surface .x-commerce-payment-column > *, .x-commerce.x-commerce-step-surface .x-commerce-payment-column > * {
  view-transition-group: x-commerce-step-surface;
}
.cursor-commerce::view-transition {
  --x-commerce-step-radius: calc(24px * var(--x-radius-m));
  @media (width < 517px) {
    --x-commerce-step-radius: 0px;
  }
}
.cursor-commerce::view-transition-group-children(x-commerce-step-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.x-commerce .x-commerce.x-commerce-step-surface, .x-commerce.x-commerce.x-commerce-step-surface {
  transition-property: opacity, translate, scale, transform;
}
.x-commerce .x-commerce-step-surface :has(.x-commerce-step-title), .x-commerce.x-commerce-step-surface :has(.x-commerce-step-title) {
  transition: none;
}
.cursor-commerce::view-transition-group(.x-commerce-step) {
  animation-delay: var(--x-commerce-step-out);
  animation-duration: var(--x-commerce-step-in);
  animation-timing-function: var(--x-commerce-motion-ease);
  animation-fill-mode: both;
}
.cursor-commerce::view-transition-group(x-commerce-step-surface) {
  z-index: 1;
  border-radius: var(--x-commerce-step-radius);
  box-shadow: 0 0 0 1px var(--x-border-normal), var(--x-shadow-lg);
}
.cursor-commerce::view-transition-group(x-commerce-summary-tint) {
  z-index: 2;
}
.cursor-commerce::view-transition-group(x-commerce-step-content) {
  z-index: 3;
}
.cursor-commerce::view-transition-group(x-commerce-plan-head), .cursor-commerce::view-transition-group(.x-commerce-payment-row) {
  z-index: 4;
}
.cursor-commerce::view-transition-group(.x-commerce-payment-row) {
  animation-delay: var(--x-commerce-step-out);
  animation-duration: var(--x-commerce-step-in);
  animation-timing-function: var(--x-commerce-motion-ease);
  animation-fill-mode: both;
}
.cursor-commerce::view-transition-old(.x-commerce-payment-row) {
  animation: x-commerce-step-fade-out var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(.x-commerce-payment-row) {
  animation: x-commerce-column-enter var(--x-commerce-column-in) var(--x-commerce-motion-ease) var(--x-commerce-column-delay) both;
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-1) {
  animation-delay: calc( var(--x-commerce-column-delay) + 0 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-2) {
  animation-delay: calc( var(--x-commerce-column-delay) + 1 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-3) {
  animation-delay: calc( var(--x-commerce-column-delay) + 2 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-4) {
  animation-delay: calc( var(--x-commerce-column-delay) + 3 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-5) {
  animation-delay: calc( var(--x-commerce-column-delay) + 4 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-6) {
  animation-delay: calc( var(--x-commerce-column-delay) + 5 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-7) {
  animation-delay: calc( var(--x-commerce-column-delay) + 6 * var(--x-commerce-column-stagger) );
}
.cursor-commerce::view-transition-new(x-commerce-payment-row-8) {
  animation-delay: calc( var(--x-commerce-column-delay) + 7 * var(--x-commerce-column-stagger) );
}
@keyframes x-commerce-column-enter {
  from {
    opacity: 0;
    translate: 0 12px;
  }
}
.cursor-commerce::view-transition-old(x-commerce-plan-head), .cursor-commerce::view-transition-new(x-commerce-plan-head) {
  inset: 0 auto auto 0;
  width: auto;
  height: auto;
}
.cursor-commerce::view-transition-old(x-commerce-step-surface) {
  display: none;
}
.cursor-commerce::view-transition-new(x-commerce-step-surface) {
  animation: none;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cursor-commerce::view-transition-image-pair(x-commerce-step-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.cursor-commerce::view-transition-old(x-commerce-step-content), .cursor-commerce::view-transition-new(x-commerce-step-content) {
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: none;
}
.cursor-commerce::view-transition-image-pair(x-commerce-step-content) {
  overflow: clip;
  border-radius: var(--x-commerce-step-radius);
}
.cursor-commerce::view-transition-old(x-commerce-step-content) {
  animation: x-commerce-step-leave var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(x-commerce-step-content) {
  animation: x-commerce-fade-in var(--x-commerce-step-in) cubic-bezier(0.6, 0, 1, 1) var(--x-commerce-step-out) both, x-commerce-step-grow var(--x-commerce-step-in) var(--x-commerce-motion-ease) var(--x-commerce-step-out) both;
}
.cursor-commerce::view-transition-old(x-commerce-summary-tint), .cursor-commerce::view-transition-new(x-commerce-summary-tint) {
  inset: 0;
  width: 100%;
  height: 100%;
}
.cursor-commerce::view-transition-old(x-commerce-summary-tint) {
  animation: x-commerce-step-fade-out var(--x-commerce-step-out) cubic-bezier(0.4, 0, 1, 1) both;
}
.cursor-commerce::view-transition-new(x-commerce-summary-tint) {
  animation: x-commerce-fade-in var(--x-commerce-step-in) cubic-bezier(0.6, 0, 1, 1) var(--x-commerce-step-out) both;
}
@keyframes x-commerce-step-leave {
  to {
    opacity: 0;
    scale: 0.96;
  }
}
@keyframes x-commerce-step-grow {
  from {
    scale: 0.96;
  }
}
@keyframes x-commerce-step-fade-out {
  to {
    opacity: 0;
  }
}
.x-commerce .x-commerce-credits-surface, .x-commerce.x-commerce-credits-surface {
  view-transition-name: x-commerce-credits-surface;
  view-transition-class: x-commerce-credits-step;
}
.cursor-commerce::view-transition-group(.x-commerce-credits-step), .cursor-commerce::view-transition-old(.x-commerce-credits-step), .cursor-commerce::view-transition-new(.x-commerce-credits-step) {
  animation-duration: var(--x-commerce-motion-duration);
  animation-timing-function: var(--x-commerce-motion-ease);
}
.cursor-commerce::view-transition-old(x-commerce-credits-surface), .cursor-commerce::view-transition-new(x-commerce-credits-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-credits-radius);
  inline-size: auto;
  block-size: auto;
}
.cursor-commerce::view-transition {
  --x-commerce-credits-radius: calc(24px * var(--x-radius-m));
  @media (width < 517px) {
    --x-commerce-credits-radius: calc(32px * var(--x-radius-m));
  }
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-surface) {
  overflow: clip;
  border-radius: var(--x-commerce-credits-radius);
}
.cursor-commerce::view-transition-group(x-commerce-credits-surface) {
  border-radius: var(--x-commerce-credits-radius);
  background-color: var(--x-bg-modal);
  box-shadow: var(--x-shadow-lg);
}
.x-commerce .x-commerce-credits-footer, .x-commerce.x-commerce-credits-footer {
  view-transition-name: x-commerce-credits-footer;
  view-transition-class: x-commerce-credits-step;
}
.x-commerce .x-commerce-credits-footer .x-commerce-credits-primary, .x-commerce.x-commerce-credits-footer .x-commerce-credits-primary {
  view-transition-name: x-commerce-credits-primary;
  view-transition-class: x-commerce-credits-step;
}
.cursor-commerce::view-transition-old(x-commerce-credits-footer), .cursor-commerce::view-transition-new(x-commerce-credits-footer) {
  inline-size: auto;
  block-size: auto;
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-footer) {
  overflow: clip;
}
.cursor-commerce::view-transition-old(x-commerce-credits-primary), .cursor-commerce::view-transition-new(x-commerce-credits-primary) {
  inset: 0;
  inline-size: auto;
  block-size: auto;
  margin: auto;
}
.cursor-commerce::view-transition-image-pair(x-commerce-credits-primary) {
  overflow: clip;
  border-radius: 9999px;
}
.cursor-commerce::view-transition-old(x-commerce-credits-primary.x-commerce-credits-step), .cursor-commerce::view-transition-new(x-commerce-credits-primary.x-commerce-credits-step) {
  animation-duration: calc(var(--x-commerce-motion-duration) / 2);
}
.x-commerce .x-commerce-stacked-scrim, .x-commerce.x-commerce-stacked-scrim {
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms var(--x-commerce-motion-ease);
}
.x-commerce .x-commerce-stacked-scrim[data-open], .x-commerce.x-commerce-stacked-scrim[data-open] {
  opacity: 1;
  pointer-events: auto;
}
.x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim) {
  transition-timing-function: var(--x-commerce-motion-ease);
}
.x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim[data-open]), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim[data-open]) {
  transform: scale(0.95);
}
@media (prefers-reduced-motion: reduce) {
  .x-commerce .x-commerce-stacked-scrim, .x-commerce.x-commerce-stacked-scrim, .x-commerce [role='dialog']:has(~ .x-commerce-stacked-scrim), .x-commerce[role='dialog']:has(~ .x-commerce-stacked-scrim) {
    transition-duration: 0.01ms;
  }
}
@container (width < 200px) {
  .x-commerce .x-commerce-plan-offer, .x-commerce.x-commerce-plan-offer {
    flex-basis: 100%;
    min-height: 24px;
  }
}
@media (width >= 730px) {
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-step-content, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-step-content {
    flex: none;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header {
    position: static;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header::before, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-grid-step-header::before {
    display: none;
  }
  .x-commerce .x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-surface-fade, .x-commerce.x-commerce-modal:has(.x-commerce-plan-picker > li:only-child) .x-commerce-surface-fade {
    display: block;
  }
}
@container grid (width >= 586px) {
  .x-commerce .x-commerce-plan-picker > li:not(:only-child) [data-fits-row], .x-commerce.x-commerce-plan-picker > li:not(:only-child) [data-fits-row] {
    contain: size;
  }
}
@container single (width >= 586px) {
  .x-commerce .x-commerce-plan-single [data-fits-row], .x-commerce.x-commerce-plan-single [data-fits-row] {
    contain: size;
    overflow-y: auto;
  }
}
.x-commerce .x-commerce-price, .x-commerce.x-commerce-price {
  display: inline-flex;
  align-items: baseline;
  gap: 0.375rem;
}
.x-commerce .x-commerce-price s, .x-commerce.x-commerce-price s {
  color: var(--x-neutral-400);
  font-weight: 400;
}
.cursor-commerce[data-theme='dark'] .x-commerce-price s {
  color: var(--x-neutral-600);
}
.x-commerce .x-commerce-totals [data-billing-summary], .x-commerce.x-commerce-totals [data-billing-summary] {
  margin: 0 0 0.5rem;
  color: var(--x-fg-secondary);
  font-size: 0.875rem;
}
.x-commerce .x-commerce-totals [data-billing-summary='offer'], .x-commerce.x-commerce-totals [data-billing-summary='offer'] {
  margin: 0.75rem 0 0.125rem;
  color: var(--x-fg-primary);
  font-size: 1.0625rem;
  font-weight: 700;
}
.x-commerce .x-commerce-totals [data-billing-summary='standing'], .x-commerce.x-commerce-totals [data-billing-summary='standing'] {
  margin: 0 0 0.875rem;
  color: var(--x-fg-primary);
}
.x-commerce .x-commerce-totals [data-billing-summary='tax'], .x-commerce.x-commerce-totals [data-billing-summary='tax'] {
  margin: 0.5rem 0 0;
}
.x-commerce .x-commerce-totals dl, .x-commerce.x-commerce-totals dl {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
}
.x-commerce .x-commerce-totals dl > div, .x-commerce.x-commerce-totals dl > div {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
}
.x-commerce .x-commerce-totals dl > div:last-child, .x-commerce.x-commerce-totals dl > div:last-child {
  font-weight: 700;
}
.x-commerce .x-commerce-totals dd, .x-commerce.x-commerce-totals dd {
  margin: 0;
  font-variant-numeric: tabular-nums;
}
.x-commerce .x-commerce-totals dd[data-placeholder], .x-commerce.x-commerce-totals dd[data-placeholder] {
  color: var(--x-fg-tertiary);
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl {
  gap: 0.75rem;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl > div, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl > div {
  color: var(--x-fg-secondary);
  line-height: 1.25rem;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals dl > div:last-child, .x-commerce.x-commerce-summary-lines .x-commerce-totals dl > div:last-child {
  color: var(--x-fg-primary);
  font-weight: 500;
}
.x-commerce .x-commerce-summary-lines .x-commerce-totals [data-billing-summary], .x-commerce.x-commerce-summary-lines .x-commerce-totals [data-billing-summary] {
  margin-bottom: 0.5rem;
}
.x-commerce .x-commerce-totals dd:empty, .x-commerce.x-commerce-totals dd:empty {
  width: 3rem;
  height: 1em;
  border-radius: 0.25rem;
  background: var(--x-bg-secondary);
  align-self: center;
}
@media (prefers-reduced-motion: no-preference) {
  .x-commerce .x-commerce-totals dd:empty, .x-commerce.x-commerce-totals dd:empty {
    animation: x-commerce-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
}
.x-commerce .x-commerce-error-state, .x-commerce.x-commerce-error-state {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.x-commerce .x-commerce-error-state > p, .x-commerce.x-commerce-error-state > p {
  color: var(--x-fg-secondary);
  font-size: var(--text-headline1);
  line-height: var(--text-headline1--line-height);
  text-align: center;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-scale-x {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-y {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-scale-z {
  syntax: "*";
  inherits: false;
  initial-value: 1;
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
}
@property --tw-scroll-snap-strictness {
  syntax: "*";
  inherits: false;
  initial-value: proximity;
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-gradient-position {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}
@property --tw-gradient-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false;
}
@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}
@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}
@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-leading {
  syntax: "*";
  inherits: false;
}
@property --tw-tracking {
  syntax: "*";
  inherits: false;
}
@property --tw-ordinal {
  syntax: "*";
  inherits: false;
}
@property --tw-slashed-zero {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-figure {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-spacing {
  syntax: "*";
  inherits: false;
}
@property --tw-numeric-fraction {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false;
}
@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false;
}
@property --tw-duration {
  syntax: "*";
  inherits: false;
}
@property --tw-ease {
  syntax: "*";
  inherits: false;
}
@property --tw-content {
  syntax: "*";
  initial-value: "";
  inherits: false;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
@keyframes pulse {
  50% {
    opacity: 0.5;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes checkmark {
  0% {
    stroke-dashoffset: 24;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@layer properties {
  @supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))) {
    .x-commerce *, .x-commerce, .x-commerce ::before, .x-commerce::before, .x-commerce ::after, .x-commerce::after, .x-commerce ::backdrop, .x-commerce::backdrop {
      --tw-font-weight: initial;
      --tw-outline-style: solid;
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-scale-z: 1;
      --tw-rotate-x: initial;
      --tw-rotate-y: initial;
      --tw-rotate-z: initial;
      --tw-skew-x: initial;
      --tw-skew-y: initial;
      --tw-scroll-snap-strictness: proximity;
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-tracking: initial;
      --tw-ordinal: initial;
      --tw-slashed-zero: initial;
      --tw-numeric-figure: initial;
      --tw-numeric-spacing: initial;
      --tw-numeric-fraction: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
      --tw-duration: initial;
      --tw-ease: initial;
      --tw-content: "";
    }
  }
}
`,Ar={};
