import { IQa } from "./AddPlugin.js";
import { LK1 } from "./AgentHostAutoRoutingRow.js";
import { qK1 } from "./AgentHostEnvironmentStatusRow.js";
import { KK1 } from "./AgentHostOptimisticPlanningRow.js";
import { QK1 } from "./AgentHostStreamErrorRow.js";
import { xq1 } from "./ArtifactPreviewCard.js";
import { az1 } from "./ArtifactTextReferenceCard.js";
import { cz1 } from "./ArtifactVideoCard.js";
import { uXa } from "./Breadcrumb_2.js";
import { gX1 } from "./ComposerSlashMenu.js";
import { Ees } from "./ComposerSlashMenuContext.js";
import { aHm } from "./ComposerSlashMenuTooltipContent.js";
import { UJ1 } from "./Customize.js";
import { ZWm } from "./CustomizeEngine.js";
import { CV1 } from "./DetailHeader.js";
import { pek } from "./EnvironmentSetupBlockedAgentTray.js";
import { vek } from "./EnvironmentSetupExternalActionTray.js";
import { SGm } from "./EnvironmentSetupNetworkSection.js";
import { Cek } from "./EnvironmentSetupNetworkTray.js";
import { hGm } from "./EnvironmentSetupRepoScopeDropdown.js";
import { IGm } from "./EnvironmentSetupSecretLevelSelect.js";
import { Rek } from "./EnvironmentSetupSecretsEditorModal.js";
import { i$m } from "./McpServerConfigForm.js";
import { otk } from "./PlanExecutionCard.js";
import { Btk } from "./PluginDetailView.js";
import { Htk } from "./PluginInstalledCard.js";
import { Etk } from "./PluginItem.js";
import { Gtk } from "./SimulatedAction.js";
import { oXa } from "./artifact-media-markdown.js";
import { D7m } from "./artifact-text-chunk-utils.js";
import { bz1 } from "./artifact-video-dom-attrs.js";
import { VXa } from "./composerMentionMenuPayload.js";
import { nZa } from "./composerMentionPreview.types.js";
import { P$m } from "./composerSlashItemScope.js";
import { fZa } from "./composerSlashMenuUtils.js";
import { lHm } from "./composerStructuredSlashTooltip.js";
import { OQa } from "./cursor-content-tag.js";
import { bnk } from "./cursor-markdown-plugins.js";
import { eZa } from "./defaultComposerMentionPreviews.js";
import { dQa } from "./env-egress-policy.js";
import { Yek } from "./env-pane-header.js";
import { zek } from "./env-saved-state.js";
import { jek } from "./env-setup-blocking-actions.js";
import { sts } from "./env-setup-secret.js";
import { RWm } from "./marketplaceSections.js";
import { atk } from "./plan-execution-card-model.js";
import { E } from "./tslib.es6.js";
import { Qtk } from "./turn-feedback-details-encoding.js";
import { Ytk } from "./turn-feedback-resolution.js";
var Uqm;
export { Uqm };
var __wakaru_d__initialized = false;
export function d_() {
if (__wakaru_d__initialized) return;
__wakaru_d__initialized = true;
E(), xq1(), az1(), cz1(), oXa(), D7m(), bz1(), uXa(), CV1(), i$m(), LK1(), qK1(), KK1(), QK1(), VXa(), eZa(), nZa(), Ees(), gX1(), aHm(), lHm(), fZa(), P$m(), ZWm(), UJ1(), RWm(), sts(), hGm(), pek(), vek(), SGm(), Cek(), IGm(), Rek(), dQa(), jek(), zek(), Yek(), otk(), atk(), IQa(), Btk(), Htk(), Etk(), Gtk(), Ytk(), Qtk(), OQa(), bnk(), Uqm = `/*
 * StyleX CSS entry, shared by the Vite gallery pipeline and the workbench
 * bundle pipeline (scripts/bundle.mjs).
 *
 * The StyleX PostCSS plugin replaces this \`@stylex;\` at-rule with the atomic
 * CSS collected from the pipeline's include globs. In the gallery
 * (vite.config.ts) that covers this package's source plus the @anysphere/ui
 * source it renders, and wrap-stylex-in-layer.mjs moves the rules into the
 * \`anysphere.stylex\` cascade layer declared by
 * @anysphere/ui/styles/layer-order.css. In the workbench bundle it covers
 * this package's source only, and the atoms stay unlayered like the
 * @anysphere/ui workbench CSS.
 */
/* biome-ignore lint/suspicious/noUnknownAtRules: replaced by the StyleX PostCSS plugin at build time */
@property --x---plan-execution-header-height { syntax: "*"; inherits: false;}
@property --x---plan-execution-hover-border { syntax: "*"; inherits: false;}
@property --x-bcbnzo { syntax: "*"; inherits: false;}
@property --x-height { syntax: "*"; inherits: false;}
@property --x-marginInline { syntax: "*"; inherits: false;}
@property --x-marginTop { syntax: "*"; inherits: false;}
@property --x-minHeight { syntax: "*"; inherits: false;}
@property --x-paddingBlock { syntax: "*"; inherits: false;}
@property --x-paddingInline { syntax: "*"; inherits: false;}
@property --x-width { syntax: "*"; inherits: false;}
@property --x-1e2mv7m { syntax: "*"; inherits: true;}
@keyframes cursor-ui-1ofn8cw-B{0%{background-position:200% 0;}100%{background-position:-200% 0;}}
@keyframes cursor-ui-zlch56-B{from{opacity:0;}to{opacity:.4;}}
@keyframes cursor-ui-gccbuu-B{0%, 100%{opacity:1;}50%{opacity:.45;}}
@keyframes cursor-ui-tuip0s-B{0%{opacity:1;}50%{opacity:.65;}100%{opacity:1;}}
@keyframes cursor-ui-jeqzys-B{from{opacity:0;transform:translateY(2px);}to{opacity:1;transform:translateY(0);}}
@keyframes cursor-ui-1fy8ia8-B{to{transform:rotate(360deg);}}
@keyframes cursor-ui-13n5nbw-B{0%{transform:translateX(-100%);}100%{transform:translateX(100%);}}
.cursor-ui-43uua0{--bg-elevated:var(--cursor-bg-elevated)}
.cursor-ui-1bizyrg{--border-quaternary:var(--cursor-stroke-quaternary)}
.cursor-ui-l2ecb6{--border-secondary:var(--cursor-stroke-secondary)}
.cursor-ui-tsey96{--border-tertiary:var(--cursor-stroke-tertiary)}
.cursor-ui-1iset56{--plan-execution-header-height:var(--x---plan-execution-header-height)}
.cursor-ui-165ctgr{--plan-execution-hover-border:var(--x---plan-execution-hover-border)}
.cursor-ui-19yhc0{--plugin-row-divider-opacity:1}
.cursor-ui-1ham5me{--ui-add-plugin-description-fade-bg:var(--cursor-bg-elevated)}
.cursor-ui-1q4akjn{--ui-customize-view-background:var(--glass-chat-surface-background,var(--cursor-bg-chrome))}
:where(.cursor-ui--default-marker:is([data-component-row]):hover) ~ .cursor-ui-12t9qvr.cursor-ui-12t9qvr{--plugin-row-divider-opacity:0}
.cursor-ui-1v0wckl:focus-within{--plugin-row-divider-opacity:0}
:where(.cursor-ui--default-marker:is([data-component-row]):focus-within) ~ .cursor-ui-nrabgm.cursor-ui-nrabgm{--plugin-row-divider-opacity:0}
.cursor-ui-v1zvwj:hover{--plugin-row-divider-opacity:0}
.cursor-ui-ln7xf2{font:inherit}
.cursor-ui-1cfmmib{grid-area:actions}
.cursor-ui-1sgvmt9{grid-area:auto}
.cursor-ui-19tbii3{grid-area:description}
.cursor-ui-4lrnbh{grid-area:header}
.cursor-ui-xiv3zo{grid-area:meta}
.cursor-ui-gopf35{grid-area:unset}
.cursor-ui-1ghz6dp{margin:0}
.cursor-ui-1717udv{padding:0}
.cursor-ui-15wvsb0{padding:var(--cursor-spacing-3)}
.cursor-ui-1r7ld26{border-color:currentColor}
.cursor-ui-2u8bby{border-radius:0}
.cursor-ui-1q4ynmn{border-radius:10px}
.cursor-ui-12oqio5{border-radius:4px}
.cursor-ui-1kogg8i{border-radius:6px}
.cursor-ui-ur7f20{border-radius:8px}
.cursor-ui-1e6avla{border-radius:999px}
.cursor-ui-1043rbw{border-radius:var(--cursor-radius-base)}
.cursor-ui-1i4c3av{border-radius:var(--cursor-radius-full)}
.cursor-ui-1m7fhj7{border-radius:var(--cursor-radius-lg)}
.cursor-ui-1e1y6u3{border-radius:var(--cursor-radius-sm)}
.cursor-ui-1pkpdue{border-radius:var(--cursor-radius-xl)}
.cursor-ui-1bl94mz{border-radius:var(--cursor-radius-xs)}
.cursor-ui-16uee96{border-radius:3px}
.cursor-ui-ng3xce{border-style:none}
.cursor-ui-c342km{border-width:0}
.cursor-ui-d1x6vq{flex-flow:row wrap}
.cursor-ui-98rzlu{flex:1}
.cursor-ui-xhr3t{gap:0}
.cursor-ui-883omv{gap:10px}
.cursor-ui-1v2ro7d{gap:12px}
.cursor-ui-ou54vl{gap:16px}
.cursor-ui-12mrbbr{gap:1px}
.cursor-ui-195vfkc{gap:2px}
.cursor-ui-1jnr06f{gap:4px}
.cursor-ui-17d4w8g{gap:6px}
.cursor-ui-k884or{gap:8px 10px}
.cursor-ui-167g77z{gap:8px}
.cursor-ui-5cdhqx{gap:var(--cursor-spacing-0-25)}
.cursor-ui-137clkk{gap:var(--cursor-spacing-0-5)}
.cursor-ui-pkkfsy{gap:var(--cursor-spacing-1-5)}
.cursor-ui-11twubx{gap:var(--cursor-spacing-1)}
.cursor-ui-135vroj{gap:var(--cursor-spacing-16)}
.cursor-ui-1dbef6d{gap:var(--cursor-spacing-2-5)}
.cursor-ui-ehausa{gap:var(--cursor-spacing-2)}
.cursor-ui-1oot3zn{gap:var(--cursor-spacing-3)}
.cursor-ui-1jlwbde{gap:var(--cursor-spacing-4)}
.cursor-ui-1m87ff3{gap:var(--cursor-spacing-6)}
.cursor-ui-3qzy4x{gap:var(--cursor-spacing-7)}
.cursor-ui-t4v3it{gap:var(--cursor-spacing-8)}
.cursor-ui-1y48gol{gap:var(--ui-collapsible-content-gap,4px)}
.cursor-ui-427cgg{grid-column:1/ -1}
.cursor-ui-18ibe41{grid-template-areas:"back back" "header actions" "description description" "meta meta"}
.cursor-ui-zj22jy{grid-template-areas:"back" "header" "description" "meta" "actions"}
.cursor-ui-1c1h1ny{grid-template-areas:"back" "header" "description" "meta"}
.cursor-ui-t1igoo{grid-template-areas:"header actions" "description description" "meta meta"}
.cursor-ui-aq3cq3{grid-template-areas:"header" "description" "meta" "actions"}
.cursor-ui-6n7fbk{grid-template-areas:"header" "description" "meta"}
.cursor-ui-1bxj7xt{margin-block:var(--artifact-preview-card-margin-block,var(--cursor-spacing-2-25))}
.cursor-ui-i73qgi{margin-block:var(--artifact-text-reference-margin-block,var(--cursor-spacing-2-25))}
.cursor-ui-vlecxo{margin-inline:var(--x-marginInline)}
.cursor-ui-1a2a7pz{outline:none}
.cursor-ui-b3r6kr{overflow:hidden}
.cursor-ui-1rea2x4{overflow:visible}
.cursor-ui-1giekp1{padding-block:var(--x-paddingBlock)}
.cursor-ui-dqyycr{padding-inline:8px}
.cursor-ui-30g6up{padding-inline:var(--x-paddingInline)}
.cursor-ui-1di6z1p{scroll-snap-type:x proximity}
.cursor-ui-1hl2dhg{text-decoration:none}
.cursor-ui-po99wt{transition:color.15s ease}
.cursor-ui-1y4qxsw{transition:opacity.15s ease}
.cursor-ui-1k5g069:not(:first-child){background-position:center top}
:where(.cursor-ui--default-marker[data-card-container]) .cursor-ui-hqbdba.cursor-ui-hqbdba{border-radius:0}
.cursor-ui-gfvp02:focus-visible{border-radius:2px}
.cursor-ui-113s99w .ui-input-group__input{flex:0 1 auto}
.cursor-ui-aky6re:is(.ui-mcp-server-actions-menu__header){gap:var(--cursor-spacing-3)}
.cursor-ui-33oy4v:focus-visible{outline:1px solid var(--cursor-stroke-focused)}
.cursor-ui-t0b8zv:hover{text-decoration:underline}
.cursor-ui-1lugfcp{-webkit-appearance:none}
.cursor-ui-1t23j8t{-webkit-background-clip:text}
.cursor-ui-1ua5tub{-webkit-box-orient:vertical}
.cursor-ui-h0615m{-webkit-line-clamp:1}
.cursor-ui-1h7i4cw{-webkit-line-clamp:2}
.cursor-ui-1gzmk7r{-webkit-line-clamp:3}
.cursor-ui-najbk2{-webkit-line-clamp:4}
.cursor-ui-kufosk{-webkit-mask-image:linear-gradient(to bottom,transparent 0,black var(--cursor-spacing-8))}
.cursor-ui-g7jpbn{-webkit-text-fill-color:transparent}
.cursor-ui-1pha0wt{align-items:baseline}
.cursor-ui-6s0dn4{align-items:center}
.cursor-ui-uk3077{align-items:flex-end}
.cursor-ui-1cy8zhl{align-items:flex-start}
.cursor-ui-7a106z{align-items:start}
.cursor-ui-1qjc9v5{align-items:stretch}
.cursor-ui-amitd3{align-self:center}
.cursor-ui-qcrz7y{align-self:flex-start}
.cursor-ui-1y8v6su{align-self:start}
.cursor-ui-kh2ocl{align-self:stretch}
.cursor-ui-w8ag78{animation-duration:.1s}
.cursor-ui-5hsz1j{animation-duration:.2s}
.cursor-ui-emfg65{animation-duration:.8s}
.cursor-ui-1sbju2s{animation-duration:1.4s}
.cursor-ui-mg6eyc{animation-duration:1.5s}
.cursor-ui-1c74tu6{animation-duration:2s}
.cursor-ui-10e4vud{animation-fill-mode:forwards}
.cursor-ui-a4qsjk{animation-iteration-count:infinite}
.cursor-ui-mnbsl9{animation-name:cursor-ui-1fy8ia8-B}
.cursor-ui-1ef5yzf{animation-name:cursor-ui-1ofn8cw-B}
.cursor-ui-b6nxcn{animation-name:cursor-ui-gccbuu-B}
.cursor-ui-1kip9ok{animation-name:cursor-ui-jeqzys-B}
.cursor-ui-es54gt{animation-name:cursor-ui-tuip0s-B}
.cursor-ui-xiu2{animation-name:cursor-ui-zlch56-B}
.cursor-ui-4hg4is{animation-timing-function:ease-in-out}
.cursor-ui-n0cd8s{animation-timing-function:ease-in}
.cursor-ui-a3vuyk{animation-timing-function:ease-out}
.cursor-ui-1esw782{animation-timing-function:linear}
.cursor-ui-rjyh25{animation-timing-function:var(--cursor-easing-in-out)}
.cursor-ui-jyslct{appearance:none}
.cursor-ui-11fneen{aspect-ratio:auto}
.cursor-ui-gv0goc{backdrop-filter:blur(10px)}
.cursor-ui-1ta4xzc{background-clip:text}
.cursor-ui-1hq4fii{background-color:color-mix(in srgb,var(--cursor-text-error,var(--vscode-errorForeground)) 8%,transparent)}
.cursor-ui-gyntjw{background-color:color-mix(in srgb,var(--cursor-text-primary) 12%,transparent)}
.cursor-ui-r7npkh{background-color:color-mix(in srgb,var(--cursor-text-primary) 3%,transparent)}
.cursor-ui-19vtf2p{background-color:color-mix(in srgb,var(--cursor-text-primary) 4%,transparent)}
.cursor-ui-5fu045{background-color:color-mix(in srgb,var(--cursor-text-primary) 7%,var(--cursor-bg-secondary))}
.cursor-ui-qcqck4{background-color:color-mix(in srgb,var(--cursor-text-primary) 8%,transparent)}
.cursor-ui-k5ndsm{background-color:color-mix(in srgb,var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground)) 8%,transparent)}
.cursor-ui-1bhy06v{background-color:rgba(255,255,255,.04)}
.cursor-ui-jbqb8w{background-color:transparent}
.cursor-ui-j4g6bo{background-color:var(--composer-pane-background,var(--cursor-bg-editor))}
.cursor-ui-cq4si4{background-color:var(--cursor-bg-card)}
.cursor-ui-1ua6jya{background-color:var(--cursor-bg-editor)}
.cursor-ui-f1vpex{background-color:var(--cursor-bg-elevated)}
.cursor-ui-18gyud7{background-color:var(--cursor-bg-input)}
.cursor-ui-16tgz1k{background-color:var(--cursor-bg-orange-secondary)}
.cursor-ui-flfp0o{background-color:var(--cursor-bg-quaternary)}
.cursor-ui-1xnwcy6{background-color:var(--cursor-bg-red-secondary)}
.cursor-ui-59yu97{background-color:var(--cursor-bg-secondary)}
.cursor-ui-i07v4r{background-color:var(--cursor-bg-tertiary)}
.cursor-ui-1h2qwge{background-color:var(--cursor-bg-yellow-primary)}
.cursor-ui-1qmjd7y{background-color:var(--cursor-stroke-secondary)}
.cursor-ui-17g3yut{background-color:var(--cursor-text-code-block-background)}
.cursor-ui-1my5qk1{background-color:var(--cursor-text-green-primary)}
.cursor-ui-16kho9k{background-color:var(--cursor-text-red-primary)}
.cursor-ui-4bbodi{background-color:var(--cursor-text-yellow-primary)}
.cursor-ui-ie3lvd{background-color:var(--ui-add-plugin-description-fade-bg,var(--cursor-bg-elevated))}
.cursor-ui-rslw9t{background-color:var(--ui-customize-view-background,var(--cursor-bg-chrome))}
.cursor-ui-18wphcr{background-color:var(--vscode-button-background)}
.cursor-ui-72hokp{background-color:var(--vscode-button-secondaryBackground)}
.cursor-ui-1p4fnnf{background-color:var(--vscode-editorWidget-background)}
.cursor-ui-1vosee3{background-color:var(--vscode-menu-background,var(--vscode-dropdown-background))}
.cursor-ui-13qktax{background-color:var(--vscode-settings-dropdownBorder,var(--vscode-widget-border))}
.cursor-ui-20rimb{background-color:var(--vscode-sideBar-background)}
.cursor-ui-1fvhpy6{background-color:var(--x-bcbnzo)}
.cursor-ui-1sy6ety{background-image:linear-gradient(90deg,color-mix(in srgb,var(--cursor-foreground,currentColor) 60%,transparent) 0%,color-mix(in srgb,var(--cursor-foreground,currentColor) 60%,transparent) 25%,var(--cursor-text-primary) 60%,color-mix(in srgb,var(--cursor-foreground,currentColor) 60%,transparent) 75%,color-mix(in srgb,var(--cursor-foreground,currentColor) 60%,transparent) 100%)}
.cursor-ui-18o3ruo{background-image:none}
.cursor-ui-akli9p{background-size:200% 100%}
.cursor-ui-1vathgz{border-collapse:separate}
.cursor-ui-16uus16{border-end-end-radius:0}
.cursor-ui-biv7yw{border-end-start-radius:0}
.cursor-ui-1o3jo1z{border-inline-end-color:transparent}
.cursor-ui-5q6521{border-inline-end-color:var(--cursor-stroke-tertiary)}
.cursor-ui-18b5jzi{border-inline-end-style:solid}
.cursor-ui-1lun4ml{border-inline-end-width:1px}
.cursor-ui-v5lvn5{border-inline-start-color:transparent}
.cursor-ui-4n2izg{border-inline-start-color:var(--cursor-stroke-tertiary)}
.cursor-ui-1t7ytsu{border-inline-start-style:solid}
.cursor-ui-pilrb4{border-inline-start-width:1px}
.cursor-ui-17efq8h{border-spacing:0 var(--cursor-spacing-0-5)}
.cursor-ui-1ga7v0g{border-start-end-radius:0}
.cursor-ui-15mokao{border-start-start-radius:0}
.cursor-ui-1ferf1y{box-shadow:-12px 0 12px var(--ui-customize-view-background,var(--cursor-bg-chrome))}
.cursor-ui-z3dw7k{box-shadow:0 0 0 2px var(--ui-customize-view-background,var(--cursor-bg-chrome))}
.cursor-ui-1yrga6n{box-shadow:0 2px 8px var(--vscode-widget-shadow)}
.cursor-ui-194kt9y{box-shadow:0 6px 20px rgba(0,0,0,.3)}
.cursor-ui-1u01kyz{box-shadow:inset 0 0 0 1px var(--cursor-stroke-secondary)}
.cursor-ui-189dmb1{box-shadow:var(--cursor-box-shadow-lg)}
.cursor-ui-e8b6fs{box-shadow:var(--cursor-box-shadow-sm)}
.cursor-ui-9f619{box-sizing:border-box}
.cursor-ui-1hyvwdk{clip-path:inset(50%)}
.cursor-ui-zpqnlu{clip:rect(0,0,0,0)}
.cursor-ui-1uagk0{color:color-mix(in srgb,var(--cursor-text-accent) 70%,transparent)}
.cursor-ui-15rks2t{color:currentColor}
.cursor-ui-1heor9g{color:inherit}
.cursor-ui-4qtrdv{color:var(--cursor-icon-orange-primary)}
.cursor-ui-1qh17o{color:var(--cursor-icon-quaternary)}
.cursor-ui-1mh7f6w{color:var(--cursor-icon-secondary)}
.cursor-ui-1lbmi28{color:var(--cursor-icon-tertiary)}
.cursor-ui-1d0l12{color:var(--cursor-text-cyan-primary)}
.cursor-ui-17t3aaf{color:var(--cursor-text-danger-primary)}
.cursor-ui-jvea20{color:var(--cursor-text-error,var(--vscode-errorForeground))}
.cursor-ui-dy93n0{color:var(--cursor-text-primary,var(--cursor-text-primary))}
.cursor-ui-1wd3ewq{color:var(--cursor-text-primary)}
.cursor-ui-1e4uaio{color:var(--cursor-text-quaternary)}
.cursor-ui-1a0my6m{color:var(--cursor-text-red-primary,var(--vscode-errorForeground))}
.cursor-ui-1jh5svw{color:var(--cursor-text-red-primary)}
.cursor-ui-19aaqeu{color:var(--cursor-text-secondary)}
.cursor-ui-6m2qi5{color:var(--cursor-text-success-primary)}
.cursor-ui-4b2ntj{color:var(--cursor-text-tertiary)}
.cursor-ui-18a2aav{color:var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground))}
.cursor-ui-1izesbo{color:var(--cursor-text-yellow-primary)}
.cursor-ui-jz5xfr{color:var(--text-danger,var(--cursor-text-red-primary))}
.cursor-ui-1c87s1m{color:var(--vscode-button-foreground)}
.cursor-ui-1dordt6{color:var(--vscode-descriptionForeground)}
.cursor-ui-166svh4{color:var(--vscode-editor-foreground)}
.cursor-ui-1nbrn3g{color:var(--vscode-foreground,var(--cursor-text-primary))}
.cursor-ui-8xm47y{color:var(--vscode-menu-foreground,inherit)}
.cursor-ui-tqikln{column-gap:12px}
.cursor-ui-10iwvqk{column-gap:var(--cursor-spacing-1-5)}
.cursor-ui-vptqrk{column-gap:var(--cursor-spacing-2)}
.cursor-ui-4r3nzd{column-gap:var(--cursor-spacing-3)}
.cursor-ui-j1vagl{column-gap:var(--cursor-spacing-4)}
.cursor-ui-12h1iku{container-type:inline-size}
.cursor-ui-t0e3qv{cursor:default}
.cursor-ui-1ypdohk{cursor:pointer}
.cursor-ui-1ed109x{cursor:text}
.cursor-ui-104kibb{display:-webkit-box}
.cursor-ui-1lliihq{display:block}
.cursor-ui-78zum5{display:flex}
.cursor-ui-rvj5dj{display:grid}
.cursor-ui-1rg5ohu{display:inline-block}
.cursor-ui-3nfvp2{display:inline-flex}
.cursor-ui-t0psk2{display:inline}
.cursor-ui-1s85apg{display:none}
.cursor-ui-1r8uery{flex-basis:0}
.cursor-ui-1t1x2f9{flex-basis:0%}
.cursor-ui-xm9e6e{flex-basis:120px}
.cursor-ui-5z4jtk{flex-basis:240px}
.cursor-ui-dl72j9{flex-basis:auto}
.cursor-ui-dt5ytf{flex-direction:column}
.cursor-ui-1q0g3np{flex-direction:row}
.cursor-ui-1c4vz4f{flex-grow:0}
.cursor-ui-1iyjqo2{flex-grow:1}
.cursor-ui-2lah0s{flex-shrink:0}
.cursor-ui-s83m0k{flex-shrink:1}
.cursor-ui-ozqiw3{flex-wrap:nowrap}
.cursor-ui-1a02dak{flex-wrap:wrap}
.cursor-ui-jb2p0i{font-family:inherit}
.cursor-ui-hayvgc{font-family:var(--cursor-font-family-mono,monospace)}
.cursor-ui-xwulf8{font-family:var(--cursor-font-family-mono,ui-monospace,monospace)}
.cursor-ui-ul7cyv{font-family:var(--cursor-font-family-mono,var(--monaco-monospace-font,monospace))}
.cursor-ui-mpsg8l{font-family:var(--cursor-font-family-mono)}
.cursor-ui-111yc6f{font-family:var(--cursor-font-family-sans,var(--vscode-font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif))}
.cursor-ui-esxkg8{font-family:var(--cursor-font-family,var(--vscode-font-family,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif))}
.cursor-ui-x6mr1u{font-size:.85em}
.cursor-ui-1wx7ac5{font-size:.92em}
.cursor-ui-1k6wstc{font-size:10px}
.cursor-ui-fifm61{font-size:12px}
.cursor-ui-4z9k3i{font-size:13px}
.cursor-ui-if65rj{font-size:14px}
.cursor-ui-1j61zf2{font-size:16px}
.cursor-ui-19d36u7{font-size:17px}
.cursor-ui-osj86m{font-size:18px}
.cursor-ui-1qlqyl8{font-size:inherit}
.cursor-ui-hwpfco{font-size:var(--conversation-font-size,13px)}
.cursor-ui-nz8xg5{font-size:var(--conversation-text-font-size,var(--cursor-font-size-lg))}
.cursor-ui-raizn5{font-size:var(--conversation-text-font-size)}
.cursor-ui-1b2ts6l{font-size:var(--conversation-tool-font-size,var(--cursor-font-size-base))}
.cursor-ui-ewv1ur{font-size:var(--conversation-tray-font-size,var(--cursor-font-size-base))}
.cursor-ui-11wthnw{font-size:var(--cursor-font-size-base)}
.cursor-ui-fc7y3v{font-size:var(--cursor-font-size-lg)}
.cursor-ui-1wm8ruf{font-size:var(--cursor-font-size-sm)}
.cursor-ui-y5h43f{font-size:var(--cursor-font-size-xs)}
.cursor-ui-1t35e8{font-style:inherit}
.cursor-ui-ss6m8b{font-variant-numeric:tabular-nums}
.cursor-ui-o1l8bm{font-weight:400}
.cursor-ui-k50ysn{font-weight:500}
.cursor-ui-1pd3egz{font-weight:inherit}
.cursor-ui-1yl5bsf{font-weight:var(--cursor-font-weight-medium,500)}
.cursor-ui-20ajya{font-weight:var(--cursor-font-weight-normal,400)}
.cursor-ui-13ebx5f{font-weight:var(--cursor-font-weight-semibold,590)}
.cursor-ui-1kjrdcj{font-weight:var(--cursor-font-weight-semibold,600)}
.cursor-ui-ju1xpo{grid-template-columns:minmax(0,1fr) auto}
.cursor-ui-o7z09w{grid-template-columns:minmax(0,1fr) minmax(0,.9fr) minmax(var(--cursor-spacing-18),max-content) var(--cursor-spacing-5)}
.cursor-ui-1mkdm3x{grid-template-columns:minmax(0,1fr)}
.cursor-ui-nby9oq{grid-template-columns:repeat(2,minmax(0,1fr))}
.cursor-ui-97mirn{grid-template-columns:var(--cursor-spacing-20) minmax(0,1fr)}
.cursor-ui-c8icb0{isolation:isolate}
.cursor-ui-l56j7k{justify-content:center}
.cursor-ui-13a6bvl{justify-content:flex-end}
.cursor-ui-1nhvcw1{justify-content:flex-start}
.cursor-ui-1qughib{justify-content:space-between}
.cursor-ui-12fk4p8{justify-self:auto}
.cursor-ui-1qab1bc{justify-self:end}
.cursor-ui-1lqcxt8{justify-self:start}
.cursor-ui-10b1f50{letter-spacing:-0.44px}
.cursor-ui-1yf5rgg{letter-spacing:.01em}
.cursor-ui-18cvvyg{letter-spacing:.07px}
.cursor-ui-1dg6oi4{letter-spacing:.12px}
.cursor-ui-12oo3zp{letter-spacing:0}
.cursor-ui-1i21sxh{letter-spacing:normal}
.cursor-ui-vu1jfw{letter-spacing:var(--cursor-letter-spacing-base)}
.cursor-ui-14s4slr{letter-spacing:var(--cursor-letter-spacing-sm)}
.cursor-ui-wn7fz2{line-height:1.3}
.cursor-ui-1xfvgam{line-height:1.35}
.cursor-ui-37zpob{line-height:1.4}
.cursor-ui-1evy7pa{line-height:1.5}
.cursor-ui-o5v014{line-height:1}
.cursor-ui-1a6qonq{line-height:140%}
.cursor-ui-152skdk{line-height:15px}
.cursor-ui-1d3mw78{line-height:16px}
.cursor-ui-d4r4e8{line-height:18px}
.cursor-ui-dod15v{line-height:21px}
.cursor-ui-15bjb6t{line-height:inherit}
.cursor-ui-1u83ck7{line-height:var(--composer-human-message-line-height,1.5)}
.cursor-ui-1vwwtox{line-height:var(--conversation-line-height,var(--cursor-line-height-lg,22px))}
.cursor-ui-1s40n5t{line-height:var(--conversation-line-height,var(--cursor-line-height-lg))}
.cursor-ui-1penmkt{line-height:var(--cursor-line-height-base,18px)}
.cursor-ui-1ja60sm{line-height:var(--cursor-line-height-base)}
.cursor-ui-1yxxptd{line-height:var(--cursor-line-height-lg)}
.cursor-ui-spwq11{line-height:var(--cursor-line-height-sm)}
.cursor-ui-19ji09o{line-height:var(--cursor-line-height-xs)}
.cursor-ui-snq1vn{line-height:var(--cursor-spacing-5-5)}
.cursor-ui-11t971q{margin-inline-end:auto}
.cursor-ui-1hb08if{margin-inline-start:-1px}
.cursor-ui-wklpps{margin-inline-start:2px}
.cursor-ui-1na8g2l{margin-inline-start:var(--cursor-spacing-ne-2)}
.cursor-ui-6scme3{mask-image:linear-gradient(to bottom,black 0%,transparent 100%)}
.cursor-ui-1v70q60{mask-image:linear-gradient(to bottom,transparent 0,black var(--cursor-spacing-8))}
.cursor-ui-19kjcj4{object-fit:contain}
.cursor-ui-l1xv1r{object-fit:cover}
.cursor-ui-ti2d7y{opacity:.4}
.cursor-ui-byyjgo{opacity:.5}
.cursor-ui-wq05k6{opacity:.55}
.cursor-ui-1ktcbtz{opacity:.56}
.cursor-ui-197sbye{opacity:.6}
.cursor-ui-1us6l5c{opacity:.8}
.cursor-ui-iiclqw{opacity:.85}
.cursor-ui-g01cxk{opacity:0}
.cursor-ui-1hc1fzr{opacity:1}
.cursor-ui-1uczgqu{outline-color:transparent}
.cursor-ui-1g40iwv{outline-offset:-1px}
.cursor-ui-1wfwxd8{outline-offset:0}
.cursor-ui-1t137rt{outline-style:none}
.cursor-ui-1k57tk5{outline-width:0}
.cursor-ui-j0a0fe{overflow-wrap:anywhere}
.cursor-ui-1mzt3pk{overflow-wrap:break-word}
.cursor-ui-yri2b{padding-inline-end:0}
.cursor-ui-1icxu4v{padding-inline-end:6px}
.cursor-ui-1tlft3r{padding-inline-end:var(--cursor-spacing-1)}
.cursor-ui-1c1uobl{padding-inline-start:0}
.cursor-ui-25sj25{padding-inline-start:6px}
.cursor-ui-tw3t59{padding-inline-start:var(--cursor-spacing-1)}
.cursor-ui-22095l{padding-inline-start:var(--cursor-spacing-2)}
.cursor-ui-47corl{pointer-events:none}
.cursor-ui-10l6tqk{position:absolute}
.cursor-ui-1n2onr6{position:relative}
.cursor-ui-288g5{resize:vertical}
.cursor-ui-xs79tx{row-gap:0}
.cursor-ui-gpatz3{row-gap:16px}
.cursor-ui-ub5gp9{row-gap:var(--conversation-tool-card-gap,var(--cursor-spacing-1-5))}
.cursor-ui-fbz45d{row-gap:var(--cursor-spacing-1-5)}
.cursor-ui-3r2rup{row-gap:var(--cursor-spacing-2)}
.cursor-ui-bldk9i{row-gap:var(--cursor-spacing-5)}
.cursor-ui-kcv6ua{scroll-behavior:smooth}
.cursor-ui-1bhewko{scroll-snap-align:start}
.cursor-ui-6m4x6a{scrollbar-color:color-mix(in srgb,var(--cursor-text-quaternary) 55%,transparent) transparent}
.cursor-ui-4o0cs4{scrollbar-color:var(--vscode-scrollbarSlider-background) transparent}
.cursor-ui-liy32w{scrollbar-gutter:stable both-edges}
.cursor-ui-1rohswg{scrollbar-width:none}
.cursor-ui-1597r2g{scrollbar-width:thin}
.cursor-ui-140o2bo{table-layout:fixed}
.cursor-ui-2b8uid{text-align:center}
.cursor-ui-16tdsg8{text-align:inherit}
.cursor-ui-dpxx8g{text-align:left}
.cursor-ui-1hr2gdg{text-align:right}
.cursor-ui-1yc453h{text-align:start}
.cursor-ui-68av9p{text-box:trim-both cap alphabetic}
.cursor-ui-5lhwog{text-decoration-line:line-through}
.cursor-ui-krqix3{text-decoration-line:none}
.cursor-ui-brixnn{text-overflow:clip}
.cursor-ui-lyipyv{text-overflow:ellipsis}
.cursor-ui-rys4gj{text-underline-offset:2px}
.cursor-ui-jlip5{text-wrap-mode:nowrap}
.cursor-ui-ggy1nq{touch-action:manipulation}
.cursor-ui-1bndym7{transform-origin:50% 50%}
.cursor-ui-19jd1h0{transform:rotate(180deg)}
.cursor-ui-1iffjtl{transform:rotate(90deg)}
.cursor-ui-11lhmoz{transform:translate(-50%,-50%)}
.cursor-ui-1cb1t30{transform:translateY(-50%)}
.cursor-ui-gdialr{transition-duration:.12s}
.cursor-ui-x6bhzk{transition-duration:.15s}
.cursor-ui-1g2r6go{transition-duration:.1s}
.cursor-ui-1rvut6x{transition-duration:.25s}
.cursor-ui-13dflua{transition-duration:.2s}
.cursor-ui-7pq1vu{transition-duration:var(--cursor-duration-fast)}
.cursor-ui-17o9ct7{transition-duration:var(--cursor-duration-normal),0s,0s}
.cursor-ui-4f0zl0{transition-duration:var(--cursor-duration-normal),var(--cursor-duration-fast),var(--cursor-duration-fast)}
.cursor-ui-1vaoic9{transition-duration:var(--cursor-duration-normal),var(--cursor-duration-normal)}
.cursor-ui-g3p6pi{transition-duration:var(--cursor-duration-normal)}
.cursor-ui-1bqoo3p{transition-duration:var(--cursor-duration-slow)}
.cursor-ui-fagghw{transition-property:all}
.cursor-ui-ts7igz{transition-property:background-color,border-color}
.cursor-ui-s2xxs2{transition-property:background-color,color}
.cursor-ui-15406qy{transition-property:background-color}
.cursor-ui-hds75k{transition-property:background}
.cursor-ui-1a0aruy{transition-property:color,opacity}
.cursor-ui-t3l3uh{transition-property:color}
.cursor-ui-rok2fi{transition-property:max-height}
.cursor-ui-19991ni{transition-property:opacity}
.cursor-ui-p33vsb{transition-property:transform,color,opacity}
.cursor-ui-wcsmn1{transition-property:transform,opacity}
.cursor-ui-11xpdln{transition-property:transform}
.cursor-ui-z4gly6{transition-timing-function:ease-in-out}
.cursor-ui-wji4o3{transition-timing-function:ease}
.cursor-ui-1aiz5cx{transition-timing-function:var(--cursor-easing-default),var(--cursor-easing-default)}
.cursor-ui-6ekqhr{transition-timing-function:var(--cursor-easing-default)}
.cursor-ui-1bt1wk1{transition-timing-function:var(--cursor-easing-in-out)}
.cursor-ui-87ps6o{user-select:none}
.cursor-ui-1hx0egp{user-select:text}
.cursor-ui-11njtxf{vertical-align:baseline}
.cursor-ui-xymvpz{vertical-align:middle}
.cursor-ui-lshs6z{visibility:hidden}
.cursor-ui-kyw5k8{white-space-collapse:collapse}
.cursor-ui-uxw1ft{white-space:nowrap}
.cursor-ui-126k92a{white-space:pre-wrap}
.cursor-ui-1sdyfia{white-space:pre}
.cursor-ui-1larqbn{will-change:opacity}
.cursor-ui-1yn0g08{word-break:break-all}
.cursor-ui-13faqbe{word-break:break-word}
.cursor-ui-1ja2u2z{z-index:0}
.cursor-ui-1vjfegm{z-index:1}
.cursor-ui-fo81ep{z-index:1000}
.cursor-ui-htitgo{z-index:2}
.cursor-ui-a9119d{z-index:50}
:where(.cursor-ui--default-marker:hover) .cursor-ui-1wryemj.cursor-ui-1wryemj{background-color:var(--cursor-bg-tertiary)}
:where(.cursor-ui--default-marker:hover) .cursor-ui-52jm1j.cursor-ui-52jm1j{color:var(--cursor-icon-secondary)}
.cursor-ui-hdyiov:hover:not(:disabled){background-color:color-mix(in srgb,var(--cursor-text-primary) 10%,var(--cursor-bg-secondary))}
.cursor-ui-14rb9jf:focus-visible{background-color:transparent}
:where(.cursor-ui--default-marker[data-card-container]) .cursor-ui-1xge86u.cursor-ui-1xge86u{background-color:transparent}
.cursor-ui-bo9e4s button:focus-visible:not(:hover):not([data-popup-open]){background-color:transparent}
.cursor-ui-1j7bdtq:is([data-plugin-search-row][data-highlighted]){background-color:var(--cursor-bg-secondary)}
.cursor-ui-1w9gnzd:is([data-selected]){background-color:var(--cursor-bg-secondary)}
.cursor-ui-k24vx2:focus-within{background-color:var(--cursor-bg-tertiary)}
.cursor-ui-mj0db2:hover:not([data-selected]){background-color:var(--cursor-bg-tertiary)}
.cursor-ui-ftk7kb:hover:not(:disabled){background-color:var(--vscode-list-hoverBackground,rgba(42,42,42,.6))}
.cursor-ui-q0ftij:not(:first-child){background-image:linear-gradient(var(--cursor-stroke-quaternary),var(--cursor-stroke-quaternary))}
.cursor-ui-c0eeaq:not(:first-child){background-repeat:no-repeat}
.cursor-ui-1k0ajt5:not(:first-child){background-size:calc(100% - 32px) 1px}
.cursor-ui-1jpggdu .ui-marketplace-plugins-list .ui-plugin-item--btn:focus{box-shadow:none}
.cursor-ui-1xk3k8f:focus-visible{box-shadow:none}
.cursor-ui-os9n3 button:is(:focus,:focus-visible,:active){box-shadow:none}
.cursor-ui-rpah8y .ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{box-shadow:none}
.cursor-ui-ve0efs.ui-marketplace-plugins-list .ui-plugin-item--btn:focus{box-shadow:none}
.cursor-ui-zdybtb.ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{box-shadow:none}
.cursor-ui-1j96v56 > .ui-button[data-variant=outline][aria-pressed=true]{color:var(--cursor-bg-accent)}
.cursor-ui-te972t > .ui-button[data-variant=outline][aria-pressed=true]:hover{color:var(--cursor-bg-accent)}
.cursor-ui-1xv6bh5[data-variant='primary'][data-tone='accent'] .ui-button__kbs{color:var(--cursor-button-primary-foreground)}
:where(.cursor-ui--default-marker:hover[data-chevron-emphasis='hover']) .cursor-ui-1uosulm.cursor-ui-1uosulm{color:var(--cursor-icon-primary)}
:where(.cursor-ui--default-marker:focus-visible[data-chevron-emphasis='hover']) .cursor-ui-j6bow0.cursor-ui-j6bow0{color:var(--cursor-icon-primary)}
:is(.ui-slash-menu__pin-button:focus-visible) .cursor-ui-12qavlr{color:var(--cursor-icon-secondary)}
:is(.ui-slash-menu__pin-button:hover) .cursor-ui-zynx0u{color:var(--cursor-icon-secondary)}
.cursor-ui-1b6ezvb:focus-visible{color:var(--cursor-text-accent)}
.cursor-ui-1dsx48b:hover:not(:disabled){color:var(--cursor-text-primary)}
.cursor-ui-a4jsi8 .ui-plugin-item__body > .ui-text:first-child{color:var(--cursor-text-primary)}
.cursor-ui-n2mk8z:is([data-selected]){color:var(--cursor-text-primary)}
.cursor-ui-rx72uk.ui-plugin-item__body > .ui-text:first-child{color:var(--cursor-text-primary)}
.cursor-ui-f8eauk:is([data-selected]){color:var(--vscode-foreground)}
.cursor-ui-1l2wm4q svg{display:block}
:where(.cursor-ui--default-marker:is([data-plugin-search-row][data-highlighted])) .cursor-ui-90pljr.cursor-ui-90pljr{display:block}
:where(.cursor-ui--default-marker:hover[data-plugin-search-row]) .cursor-ui-lym4gz.cursor-ui-lym4gz{display:block}
.cursor-ui-1rmc6lp .ui-input-group__input{field-sizing:content}
.cursor-ui-1bth3th.ui-plugin-item__icon-fallback svg path{fill:currentColor}
.cursor-ui-hf712e .ui-plugin-item__icon-fallback svg path{fill:currentColor}
.cursor-ui-csamtt:hover:not(:disabled){filter:brightness(1.04)}
.cursor-ui-3hx2px svg{flex-shrink:0}
.cursor-ui-17niyvi .ui-input-group__input{font-size:17px}
.cursor-ui-6e9wec .ui-plugin-item__body > .ui-text:first-child{font-size:var(--cursor-font-size-sm)}
.cursor-ui-xq0ddj.ui-plugin-item__body > .ui-text:first-child{font-size:var(--cursor-font-size-sm)}
.cursor-ui-hzi931:is([data-selected]){font-weight:var(--cursor-font-weight-medium,500)}
.cursor-ui-84zdf9.ui-plugin-item__body > .ui-text:first-child{font-weight:var(--cursor-font-weight-normal,400)}
.cursor-ui-rkel43 .ui-plugin-item__body > .ui-text:first-child{font-weight:var(--cursor-font-weight-normal,400)}
.cursor-ui-1xrotn .ui-input-group__input{letter-spacing:-0.44px}
.cursor-ui-m2ncoe .ui-input-group__input{line-height:21px}
.cursor-ui-1gm5cng.ui-plugin-item__body > .ui-text:first-child{line-height:var(--cursor-line-height-sm)}
.cursor-ui-1pdpb8q .ui-plugin-item__body > .ui-text:first-child{line-height:var(--cursor-line-height-sm)}
.cursor-ui-1b080l3 .ui-plugin-detail-view__plugin-logo img{object-fit:contain}
.cursor-ui-ru56p.ui-plugin-detail-view__plugin-logo img{object-fit:contain}
:where(.cursor-ui--default-marker:hover[data-component-row]) .cursor-ui-hl745e.cursor-ui-hl745e{opacity:.7}
.cursor-ui-2pmxpp:disabled[aria-busy=true]{opacity:.94}
:where(.cursor-ui--default-marker:is([data-selected])) .cursor-ui-1pxj48f.cursor-ui-1pxj48f{opacity:1}
.cursor-ui-3u2poo[data-size][data-variant]:hover .automations-detail-title-edit-icon{opacity:1}
.cursor-ui-fb00z5[data-size][data-variant]:focus-within .automations-detail-title-edit-icon{opacity:1}
:where(.cursor-ui--default-marker[data-focused='true']) .cursor-ui-y33kzq.cursor-ui-y33kzq{opacity:1}
.cursor-ui-1sgnpv4 .ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-color:transparent}
.cursor-ui-f4nt9h.ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-color:transparent}
.cursor-ui-tr58m7.ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-color:transparent}
.cursor-ui-wcw5fa .ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-color:transparent}
.cursor-ui-z2lg3n:focus-visible{outline-color:transparent}
.cursor-ui-1725o6r:focus-visible{outline-color:var(--cursor-stroke-focused)}
.cursor-ui-8w47nc:focus-visible{outline-color:var(--vscode-focusBorder)}
.cursor-ui-y9f4xx:focus-visible{outline-offset:-1px}
.cursor-ui-wlpgjh:focus-visible{outline-offset:0}
.cursor-ui-13iak60:focus-visible{outline-offset:1px}
.cursor-ui-7s97pk:focus-visible{outline-offset:2px}
.cursor-ui-13o1sjz.ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-style:none}
.cursor-ui-1l11cw3.ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-style:none}
.cursor-ui-1nhd0we .ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-style:none}
.cursor-ui-45a3qv button:is(:focus,:focus-visible,:active){outline-style:none}
.cursor-ui-i5y0ii:focus-visible{outline-style:none}
.cursor-ui-owazg5 .ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-style:none}
.cursor-ui-9v5kkp:focus-visible{outline-style:solid}
.cursor-ui-1osm4s.ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-width:0}
.cursor-ui-1x65lqo:focus-visible{outline-width:0}
.cursor-ui-1yljat6.ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-width:0}
.cursor-ui-35jd68 .ui-marketplace-plugins-list .ui-plugin-item--btn:focus{outline-width:0}
.cursor-ui-8j35wa button:is(:focus,:focus-visible,:active){outline-width:0}
.cursor-ui-hp5j2h .ui-marketplace-plugins-list .ui-plugin-item--btn:focus-visible{outline-width:0}
.cursor-ui-4xl6zf:focus-visible{outline-width:1px}
.cursor-ui-784prv:focus-visible{outline-width:2px}
:where(.cursor-ui--default-marker[data-focused='true']) .cursor-ui-1f14m6m.cursor-ui-1f14m6m{pointer-events:auto}
.cursor-ui-1speawj > *{position:relative}
.cursor-ui-9jxpam .ui-plugin-detail-view__add-button > *{position:relative}
.cursor-ui-1f2jko9:focus-visible{text-decoration-line:underline}
.cursor-ui-s55268 > *{z-index:1}
.cursor-ui-usyfxl .ui-plugin-detail-view__add-button > *{z-index:1}
.cursor-ui-jl7jj:empty{display:none}
.cursor-ui-tgyt42:disabled{cursor:default}
.cursor-ui-8ivg66:disabled{opacity:.48}
.cursor-ui-ijokvz:disabled{opacity:.5}
.cursor-ui-1fzehxr:disabled{opacity:1}
.cursor-ui-jj1c2b:hover{background-color:color-mix(in srgb,var(--cursor-text-primary) 3%,transparent)}
.cursor-ui-1n5bzlp:hover{background-color:transparent}
.cursor-ui-1kj6vsg:hover{background-color:var(--cursor-bg-secondary)}
.cursor-ui-1iuyybk:hover{background-color:var(--cursor-bg-tertiary)}
.cursor-ui-ekwuk8:hover{background-color:var(--vscode-button-hoverBackground)}
.cursor-ui-1j2k28p:hover{background-color:var(--x-1e2mv7m)}
.cursor-ui-5408cx:hover{color:var(--cursor-icon-secondary)}
.cursor-ui-e7p720:hover{color:var(--cursor-text-accent)}
.cursor-ui-7gh5u8:hover{color:var(--cursor-text-primary)}
.cursor-ui-xs50az:hover{color:var(--cursor-text-secondary)}
.cursor-ui-1meac5u:hover{color:var(--vscode-foreground)}
.cursor-ui-18uuni6:hover{opacity:.9}
.cursor-ui-1o7uuvo:hover{opacity:1}
.cursor-ui-1sur9pj:hover{text-decoration-line:underline}
.cursor-ui-r9r2s9:focus{box-shadow:none}
.cursor-ui-tce524:focus{color:var(--cursor-text-accent)}
.cursor-ui-1xwnvu1:focus{outline-color:transparent}
.cursor-ui-1n5q8uh:focus{outline-offset:0}
.cursor-ui-hlp2gg:focus{outline-style:none}
.cursor-ui-1l9t207:focus{outline-width:0}
.cursor-ui-tpb3dr:active{color:var(--cursor-text-accent)}
@media (max-width: 600px){.cursor-ui-f823wh.cursor-ui-f823wh{grid-template-columns:minmax(0,1fr)}}
@media (prefers-reduced-motion: reduce){.cursor-ui-g83hb1.cursor-ui-g83hb1{scroll-behavior:auto}}
@container (max-width: 280px){.cursor-ui-1mds6oj.cursor-ui-1mds6oj{aspect-ratio:16/ 10}}
@container (min-width: 480px){.cursor-ui-lrknoy.cursor-ui-lrknoy{display:inline}}
@container (max-width: 520px){.cursor-ui-jw786u.cursor-ui-jw786u{grid-template-columns:minmax(0,1fr)}}
.cursor-ui-10a0z64{border-bottom-color:color-mix(in srgb,var(--cursor-text-error,var(--vscode-errorForeground)) 30%,transparent)}
.cursor-ui-1fxii13{border-bottom-color:color-mix(in srgb,var(--cursor-text-primary) 11%,var(--cursor-stroke-tertiary))}
.cursor-ui-6nivw1{border-bottom-color:color-mix(in srgb,var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground)) 30%,transparent)}
.cursor-ui-1tnzt7h{border-bottom-color:currentColor}
.cursor-ui-16stqrj{border-bottom-color:transparent}
.cursor-ui-meep7c{border-bottom-color:var(--cursor-stroke-orange-secondary)}
.cursor-ui-1g95lbd{border-bottom-color:var(--cursor-stroke-quaternary)}
.cursor-ui-f4c8ic{border-bottom-color:var(--cursor-stroke-red-primary)}
.cursor-ui-1jfuf7k{border-bottom-color:var(--cursor-stroke-secondary)}
.cursor-ui-17fyfba{border-bottom-color:var(--cursor-stroke-tertiary)}
.cursor-ui-1kdfb9l{border-bottom-color:var(--vscode-widget-border,transparent)}
.cursor-ui-frllxf{border-bottom-left-radius:0}
.cursor-ui-1orjc0r{border-bottom-left-radius:4px}
.cursor-ui-abvvm4{border-bottom-left-radius:8px}
.cursor-ui-1urvxhu{border-bottom-left-radius:var(--conversation-surface-border-radius,6px)}
.cursor-ui-8slwbi{border-bottom-left-radius:var(--conversation-tool-card-radius,6px)}
.cursor-ui-famn59{border-bottom-left-radius:var(--cursor-radius-base)}
.cursor-ui-10a2chs{border-bottom-left-radius:var(--cursor-radius-lg)}
.cursor-ui-jppbhk{border-bottom-right-radius:0}
.cursor-ui-1nhu2vm{border-bottom-right-radius:4px}
.cursor-ui-eyy32k{border-bottom-right-radius:8px}
.cursor-ui-1jsxy9{border-bottom-right-radius:var(--conversation-surface-border-radius,6px)}
.cursor-ui-qvbcrl{border-bottom-right-radius:var(--conversation-tool-card-radius,6px)}
.cursor-ui-1talola{border-bottom-right-radius:var(--cursor-radius-base)}
.cursor-ui-1u51yxl{border-bottom-right-radius:var(--cursor-radius-lg)}
.cursor-ui-1sy0etr{border-bottom-style:none}
.cursor-ui-1q0q8m5{border-bottom-style:solid}
.cursor-ui-1qhh985{border-bottom-width:0}
.cursor-ui-so031l{border-bottom-width:1px}
.cursor-ui-xw8qd{border-left-color:color-mix(in srgb,var(--cursor-text-error,var(--vscode-errorForeground)) 30%,transparent)}
.cursor-ui-515z0x{border-left-color:color-mix(in srgb,var(--cursor-text-primary) 11%,var(--cursor-stroke-tertiary))}
.cursor-ui-102cs4x{border-left-color:color-mix(in srgb,var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground)) 30%,transparent)}
.cursor-ui-1pjslub{border-left-color:currentColor}
.cursor-ui-1g4hjc{border-left-color:transparent}
.cursor-ui-zqeu2x{border-left-color:var(--cursor-stroke-orange-secondary)}
.cursor-ui-fektcw{border-left-color:var(--cursor-stroke-quaternary)}
.cursor-ui-14wxl4x{border-left-color:var(--cursor-stroke-red-primary)}
.cursor-ui-1l09f48{border-left-color:var(--cursor-stroke-secondary)}
.cursor-ui-1arpupx{border-left-color:var(--cursor-stroke-tertiary)}
.cursor-ui-16rds5o{border-left-color:var(--vscode-widget-border,transparent)}
.cursor-ui-1b16gh4{border-left-style:none}
.cursor-ui-19ypqd9{border-left-style:solid}
.cursor-ui-yj58a3{border-left-width:0}
.cursor-ui-e0pwq{border-left-width:1px}
.cursor-ui-19sr0n1{border-left-width:2px}
.cursor-ui-cf6eh4{border-right-color:color-mix(in srgb,var(--cursor-text-error,var(--vscode-errorForeground)) 30%,transparent)}
.cursor-ui-1l2piib{border-right-color:color-mix(in srgb,var(--cursor-text-primary) 11%,var(--cursor-stroke-tertiary))}
.cursor-ui-1lwr8j2{border-right-color:color-mix(in srgb,var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground)) 30%,transparent)}
.cursor-ui-1ws9gjp{border-right-color:currentColor}
.cursor-ui-he5wa1{border-right-color:transparent}
.cursor-ui-1udnrsu{border-right-color:var(--cursor-stroke-orange-secondary)}
.cursor-ui-1ppb01f{border-right-color:var(--cursor-stroke-quaternary)}
.cursor-ui-3oy5ia{border-right-color:var(--cursor-stroke-red-primary)}
.cursor-ui-hnkhp4{border-right-color:var(--cursor-stroke-secondary)}
.cursor-ui-141kqco{border-right-color:var(--cursor-stroke-tertiary)}
.cursor-ui-kno8ku{border-right-color:var(--vscode-widget-border,transparent)}
.cursor-ui-11pwa6s{border-right-style:none}
.cursor-ui-32b0ac{border-right-style:solid}
.cursor-ui-gfja2r{border-right-width:0}
.cursor-ui-s1s249{border-right-width:1px}
.cursor-ui-qnmwfc{border-top-color:color-mix(in srgb,var(--cursor-text-error,var(--vscode-errorForeground)) 30%,transparent)}
.cursor-ui-1xoiqdv{border-top-color:color-mix(in srgb,var(--cursor-text-primary) 11%,var(--cursor-stroke-tertiary))}
.cursor-ui-6tbur2{border-top-color:color-mix(in srgb,var(--cursor-text-primary) 6%,transparent)}
.cursor-ui-1muuk8f{border-top-color:color-mix(in srgb,var(--cursor-text-warning-primary,var(--vscode-editorWarning-foreground)) 30%,transparent)}
.cursor-ui-1b4hy2t{border-top-color:currentColor}
.cursor-ui-1v8p93f{border-top-color:transparent}
.cursor-ui-131pd1f{border-top-color:var(--cursor-stroke-orange-secondary)}
.cursor-ui-1w002xl{border-top-color:var(--cursor-stroke-quaternary)}
.cursor-ui-1ys92yt{border-top-color:var(--cursor-stroke-red-primary)}
.cursor-ui-2kampu{border-top-color:var(--cursor-stroke-secondary)}
.cursor-ui-1aeic0j{border-top-color:var(--cursor-stroke-tertiary)}
.cursor-ui-kdp8iq{border-top-color:var(--vscode-widget-border,transparent)}
.cursor-ui-1ia1hqs{border-top-left-radius:0}
.cursor-ui-2b5lcy{border-top-left-radius:4px}
.cursor-ui-1k1lpwg{border-top-left-radius:8px}
.cursor-ui-1cartw4{border-top-left-radius:var(--conversation-surface-border-radius,6px)}
.cursor-ui-18hk3q6{border-top-left-radius:var(--conversation-tool-card-radius,6px)}
.cursor-ui-1njmyyh{border-top-left-radius:var(--cursor-radius-base)}
.cursor-ui-1vb4fzf{border-top-left-radius:var(--cursor-radius-lg)}
.cursor-ui-1a2w583{border-top-right-radius:0}
.cursor-ui-1lzl9kk{border-top-right-radius:4px}
.cursor-ui-5omr3n{border-top-right-radius:8px}
.cursor-ui-1sarufa{border-top-right-radius:var(--conversation-surface-border-radius,6px)}
.cursor-ui-aivnq7{border-top-right-radius:var(--conversation-tool-card-radius,6px)}
.cursor-ui-y7i79c{border-top-right-radius:var(--cursor-radius-base)}
.cursor-ui-14gibnr{border-top-right-radius:var(--cursor-radius-lg)}
.cursor-ui-1ejq31n{border-top-style:none}
.cursor-ui-13fuv20{border-top-style:solid}
.cursor-ui-972fbf{border-top-width:0}
.cursor-ui-178xt8z{border-top-width:1px}
.cursor-ui-1ey2m1c{bottom:0}
.cursor-ui-5ip1eo{bottom:var(--cursor-spacing-ne-0-5)}
.cursor-ui-5yr21d{height:100%}
.cursor-ui-170jfvy{height:10px}
.cursor-ui-1v9usgg{height:14px}
.cursor-ui-lup9mm{height:16px}
.cursor-ui-mix8c7{height:18px}
.cursor-ui-jm9jq1{height:1px}
.cursor-ui-1qx5ct2{height:20px}
.cursor-ui-1fgtraw{height:28px}
.cursor-ui-1lkextc{height:33.3px}
.cursor-ui-1vqgdyp{height:40px}
.cursor-ui-dd8jsf{height:52px}
.cursor-ui-egnrdp{height:9px}
.cursor-ui-t7dq6l{height:auto}
.cursor-ui-18fp285{height:var(--cursor-font-size-sm)}
.cursor-ui-1th6cxs{height:var(--cursor-height-base)}
.cursor-ui-tsj531{height:var(--cursor-height-lg)}
.cursor-ui-rar8zy{height:var(--cursor-height-xs)}
.cursor-ui-1feg4er{height:var(--cursor-spacing-1-5)}
.cursor-ui-f2gx5w{height:var(--cursor-spacing-10)}
.cursor-ui-pgsqhg{height:var(--cursor-spacing-15)}
.cursor-ui-px1j5t{height:var(--cursor-spacing-3-25)}
.cursor-ui-1q5geii{height:var(--cursor-spacing-3-5)}
.cursor-ui-1d74i34{height:var(--cursor-spacing-3)}
.cursor-ui-1vatr1o{height:var(--cursor-spacing-4)}
.cursor-ui-1a6rlst{height:var(--cursor-spacing-5)}
.cursor-ui-1e94bgo{height:var(--cursor-spacing-6)}
.cursor-ui-170hpbr{height:var(--cursor-spacing-7)}
.cursor-ui-16ye13r{height:var(--x-height)}
.cursor-ui-u96u03{left:0}
.cursor-ui-1nrll8i{left:50%}
.cursor-ui-ud0vyx{left:var(--cursor-spacing-1-5)}
.cursor-ui-1qxw02l{line-clamp:1}
.cursor-ui-1l13ptj{line-clamp:2}
.cursor-ui-1codfmr{line-clamp:3}
.cursor-ui-1eesoy2{line-clamp:4}
.cursor-ui-1jyxor1{margin-bottom:-1px}
.cursor-ui-at24cr{margin-bottom:0}
.cursor-ui-jpr12u{margin-bottom:2px}
.cursor-ui-ahult9{margin-bottom:3px}
.cursor-ui-12nagc{margin-bottom:4px}
.cursor-ui-zueoph{margin-bottom:6px}
.cursor-ui-fynt6u{margin-bottom:var(--cursor-spacing-0-5)}
.cursor-ui-8kmwxx{margin-bottom:var(--cursor-spacing-1-5)}
.cursor-ui-1qaq26d{margin-bottom:var(--cursor-spacing-1)}
.cursor-ui-iu1vb2{margin-bottom:var(--cursor-spacing-2-5)}
.cursor-ui-1vnbkiq{margin-bottom:var(--cursor-spacing-2)}
.cursor-ui-h9i6ac{margin-left:-1px}
.cursor-ui-j3b58b{margin-left:0}
.cursor-ui-16ydxro{margin-left:10px}
.cursor-ui-1payohk{margin-left:22px}
.cursor-ui-1iog12x{margin-left:4px}
.cursor-ui-8x9d4c{margin-left:auto}
.cursor-ui-1kde42o{margin-left:var(--cursor-spacing-0-75)}
.cursor-ui-dpwr4b{margin-left:var(--cursor-spacing-1-5)}
.cursor-ui-7cu23a{margin-left:var(--cursor-spacing-1)}
.cursor-ui-v5sl7z{margin-left:var(--cursor-spacing-2)}
.cursor-ui-hzmqz5{margin-left:var(--cursor-spacing-5)}
.cursor-ui-1y7amh{margin-right:-1px}
.cursor-ui-1yf7rl7{margin-right:0}
.cursor-ui-yo1k6t{margin-right:10px}
.cursor-ui-1wsuqlk{margin-right:12px}
.cursor-ui-l010v5{margin-right:4px}
.cursor-ui-ack27t{margin-right:auto}
.cursor-ui-dt55o3{margin-right:var(--cursor-spacing-1-5)}
.cursor-ui-1y332i5{margin-top:-1px}
.cursor-ui-1rdy4ex{margin-top:-4px}
.cursor-ui-dj266r{margin-top:0}
.cursor-ui-14vqqas{margin-top:12px}
.cursor-ui-w7yly9{margin-top:16px}
.cursor-ui-vijh9v{margin-top:1px}
.cursor-ui-g87l8a{margin-top:32px}
.cursor-ui-7r5mf7{margin-top:3px}
.cursor-ui-1gslohp{margin-top:4px}
.cursor-ui-vkph5b{margin-top:60px}
.cursor-ui-1xmf6yo{margin-top:8px}
.cursor-ui-uji7tg{margin-top:calc((36px - 21px) / -2)}
.cursor-ui-1k5org8{margin-top:var(--cursor-spacing-0-5)}
.cursor-ui-1mdx765{margin-top:var(--cursor-spacing-1-5)}
.cursor-ui-1om1abp{margin-top:var(--cursor-spacing-1)}
.cursor-ui-1e66mq1{margin-top:var(--cursor-spacing-2)}
.cursor-ui-19snzy6{margin-top:var(--cursor-spacing-3)}
.cursor-ui-1gkbulp{margin-top:var(--x-marginTop)}
.cursor-ui-1mu601j{max-height:120px}
.cursor-ui-1hkcv85{max-height:200px}
.cursor-ui-l34oae{max-height:33.3px}
.cursor-ui-2z3yb8{max-height:360px}
.cursor-ui-1rq5m6k{max-height:500px}
.cursor-ui-cwfpss{max-height:70dvh}
.cursor-ui-1ji7a8m{max-height:min(28rem,60vh)}
.cursor-ui-193iq5w{max-width:100%}
.cursor-ui-1e4dklr{max-width:180px}
.cursor-ui-1racy4e{max-width:220px}
.cursor-ui-14lruf5{max-width:260px}
.cursor-ui-w5ewwj{max-width:300px}
.cursor-ui-xc7z9f{max-width:360px}
.cursor-ui-1iasaxs{max-width:448px}
.cursor-ui-14jpq49{max-width:60rem}
.cursor-ui-w7nakj{max-width:calc(100vw - 32px)}
.cursor-ui-1x1rfll{max-width:none}
.cursor-ui-1w4qmfv{max-width:var(--customize-content-max-width,764px)}
.cursor-ui-2lwn1j{min-height:0}
.cursor-ui-isnujt{min-height:20px}
.cursor-ui-1ficeh5{min-height:240px}
.cursor-ui-e0p6wg{min-height:28px}
.cursor-ui-21xpn4{min-height:32px}
.cursor-ui-u0aao5{min-height:36px}
.cursor-ui-1qafhyn{min-height:72px}
.cursor-ui-3zvfii{min-height:var(--cursor-height-sm)}
.cursor-ui-18j89ly{min-height:var(--cursor-line-height-sm)}
.cursor-ui-1vsofuc{min-height:var(--cursor-spacing-5-5)}
.cursor-ui-4jlmx6{min-height:var(--cursor-spacing-5)}
.cursor-ui-14rubhf{min-height:var(--cursor-spacing-6-5)}
.cursor-ui-82snj4{min-height:var(--x-minHeight)}
.cursor-ui-euugli{min-width:0}
.cursor-ui-gqtt45{min-width:100%}
.cursor-ui-1d77m7x{min-width:140px}
.cursor-ui-t7fyls{min-width:150px}
.cursor-ui-5w4yej{min-width:160px}
.cursor-ui-15hfatp{min-width:36px}
.cursor-ui-6c5l4p{min-width:80px}
.cursor-ui-450l9j{min-width:90px}
.cursor-ui-1w0wmb8{min-width:var(--cursor-spacing-6)}
.cursor-ui-w2csxc{overflow-x:auto}
.cursor-ui-101abm8{overflow-x:clip}
.cursor-ui-6ikm8r{overflow-x:hidden}
.cursor-ui-1odjw0f{overflow-y:auto}
.cursor-ui-10wlt62{overflow-y:hidden}
.cursor-ui-ryxfnj{overflow-y:visible}
.cursor-ui-18d9i69{padding-bottom:0}
.cursor-ui-sag5q8{padding-bottom:12px}
.cursor-ui-1l90r2v{padding-bottom:16px}
.cursor-ui-1j85h84{padding-bottom:1px}
.cursor-ui-1120s5i{padding-bottom:2px}
.cursor-ui-jkvuk6{padding-bottom:4px}
.cursor-ui-10b6aqq{padding-bottom:6px}
.cursor-ui-wib8y2{padding-bottom:8px}
.cursor-ui-b6dno7{padding-bottom:var(--cursor-spacing-0-5)}
.cursor-ui-1cea8gx{padding-bottom:var(--cursor-spacing-0-75)}
.cursor-ui-1rgtt3y{padding-bottom:var(--cursor-spacing-1-5)}
.cursor-ui-cnij5n{padding-bottom:var(--cursor-spacing-1)}
.cursor-ui-1l37tef{padding-bottom:var(--cursor-spacing-10)}
.cursor-ui-2lprc{padding-bottom:var(--cursor-spacing-2-5)}
.cursor-ui-1xlntvz{padding-bottom:var(--cursor-spacing-2)}
.cursor-ui-1mdop1q{padding-bottom:var(--cursor-spacing-3-5)}
.cursor-ui-usxwy5{padding-bottom:var(--cursor-spacing-3)}
.cursor-ui-20eq2h{padding-bottom:var(--cursor-spacing-4)}
.cursor-ui-ab0n8b{padding-bottom:var(--cursor-spacing-6)}
.cursor-ui-1dbk7ps{padding-bottom:var(--cursor-spacing-8)}
.cursor-ui-1uhho1l{padding-left:0}
.cursor-ui-1lqa7cf{padding-left:10px}
.cursor-ui-f18ygs{padding-left:12px}
.cursor-ui-zjhap9{padding-left:14px}
.cursor-ui-nm25rq{padding-left:16px}
.cursor-ui-d3ty66{padding-left:24px}
.cursor-ui-j9uezu{padding-left:2px}
.cursor-ui-1hi4g37{padding-left:3rem}
.cursor-ui-6wrskw{padding-left:4px}
.cursor-ui-11iknt3{padding-left:6px}
.cursor-ui-163pfp{padding-left:8px}
.cursor-ui-1pbdsak{padding-left:var(--conversation-text-inset,0px)}
.cursor-ui-1lfpczk{padding-left:var(--cursor-spacing-1-5)}
.cursor-ui-43mhey{padding-left:var(--cursor-spacing-1)}
.cursor-ui-1kb82z{padding-left:var(--cursor-spacing-10)}
.cursor-ui-o7x2bt{padding-left:var(--cursor-spacing-2-5)}
.cursor-ui-yab65l{padding-left:var(--cursor-spacing-2)}
.cursor-ui-1jpuwqu{padding-left:var(--cursor-spacing-3-5)}
.cursor-ui-1o7kk3e{padding-left:var(--cursor-spacing-3)}
.cursor-ui-193t4r6{padding-left:var(--cursor-spacing-4)}
.cursor-ui-v0g687{padding-left:var(--cursor-spacing-6)}
.cursor-ui-1xpa7k{padding-right:0}
.cursor-ui-cicffo{padding-right:10px}
.cursor-ui-nuq7ks{padding-right:12px}
.cursor-ui-19tmk5i{padding-right:14px}
.cursor-ui-yfqnmn{padding-right:16px}
.cursor-ui-8e5d8q{padding-right:24px}
.cursor-ui-pf9j6y{padding-right:2px}
.cursor-ui-l8an7g{padding-right:3rem}
.cursor-ui-mzs88n{padding-right:4px}
.cursor-ui-1ug7bdz{padding-right:6px}
.cursor-ui-y13l1i{padding-right:8px}
.cursor-ui-1fgieo2{padding-right:var(--conversation-text-inset,0px)}
.cursor-ui-17v7654{padding-right:var(--cursor-spacing-1-5)}
.cursor-ui-g31tg3{padding-right:var(--cursor-spacing-1)}
.cursor-ui-16vt6tx{padding-right:var(--cursor-spacing-10)}
.cursor-ui-16b7oty{padding-right:var(--cursor-spacing-2-5)}
.cursor-ui-1yxiud8{padding-right:var(--cursor-spacing-2)}
.cursor-ui-1yraood{padding-right:var(--cursor-spacing-3-5)}
.cursor-ui-1jkygx{padding-right:var(--cursor-spacing-3)}
.cursor-ui-10cfkro{padding-right:var(--cursor-spacing-4)}
.cursor-ui-1qg3m7i{padding-right:var(--cursor-spacing-6)}
.cursor-ui-exx8yu{padding-top:0}
.cursor-ui-z9dl7a{padding-top:12px}
.cursor-ui-yamay9{padding-top:16px}
.cursor-ui-4p5aij{padding-top:1px}
.cursor-ui-1nn3v0j{padding-top:2px}
.cursor-ui-10lzpyj{padding-top:38px}
.cursor-ui-1iorvi4{padding-top:4px}
.cursor-ui-ahk0qz{padding-top:58px}
.cursor-ui-1yrsyyn{padding-top:6px}
.cursor-ui-1y1aw1k{padding-top:8px}
.cursor-ui-493x5y{padding-top:var(--cursor-spacing-0-5)}
.cursor-ui-1gv78wz{padding-top:var(--cursor-spacing-0-75)}
.cursor-ui-uve7l6{padding-top:var(--cursor-spacing-1-5)}
.cursor-ui-f6zju3{padding-top:var(--cursor-spacing-1)}
.cursor-ui-1buc1yo{padding-top:var(--cursor-spacing-10)}
.cursor-ui-oyc9vk{padding-top:var(--cursor-spacing-2-5)}
.cursor-ui-13ly8rp{padding-top:var(--cursor-spacing-2)}
.cursor-ui-1gkbk22{padding-top:var(--cursor-spacing-3-5)}
.cursor-ui-1t8xvyj{padding-top:var(--cursor-spacing-3)}
.cursor-ui-t9g0qb{padding-top:var(--cursor-spacing-4)}
.cursor-ui-1avjwpx{padding-top:var(--cursor-spacing-6)}
.cursor-ui-tgesqp{padding-top:var(--cursor-spacing-8)}
.cursor-ui-1vdilah{padding-top:var(--ui-collapsible-content-gap,4px)}
.cursor-ui-3m8u43{right:0}
.cursor-ui-n5hqff{right:16px}
.cursor-ui-1s3hisn{right:var(--cursor-spacing-1-5)}
.cursor-ui-1uvdcuh{right:var(--cursor-spacing-ne-0-5)}
.cursor-ui-11ki8km{scroll-margin-top:0}
.cursor-ui-13vifvy{top:0}
.cursor-ui-dsb8wn{top:100%}
.cursor-ui-omnu4r{top:16px}
.cursor-ui-wa60dl{top:50%}
.cursor-ui-wwefxd{top:calc(100% + 6px)}
.cursor-ui-h8yej3{width:100%}
.cursor-ui-ygnafs{width:120px}
.cursor-ui-smyaan{width:12px}
.cursor-ui-16s0kzc{width:132px}
.cursor-ui-6jxa94{width:14px}
.cursor-ui-1kky2od{width:16px}
.cursor-ui-1g6vzv9{width:170px}
.cursor-ui-1xp8n7a{width:18px}
.cursor-ui-1i1rx1s{width:1px}
.cursor-ui-1oysuqx{width:200px}
.cursor-ui-1dz1jew{width:280px}
.cursor-ui-s5h3dt{width:2rem}
.cursor-ui-1td3qas{width:32px}
.cursor-ui-1d419hs{width:38%}
.cursor-ui-z84dc7{width:40%}
.cursor-ui-187nhsf{width:44px}
.cursor-ui-inu3np{width:45%}
.cursor-ui-ht4xr3{width:480px}
.cursor-ui-15yg21f{width:56px}
.cursor-ui-ycev2y{width:60%}
.cursor-ui-1hmiwze{width:62%}
.cursor-ui-1fu8urw{width:64px}
.cursor-ui-65xoit{width:70%}
.cursor-ui-1dmp6jm{width:80px}
.cursor-ui-29ncy0{width:88px}
.cursor-ui-1wc42o8{width:9px}
.cursor-ui-14atkfc{width:auto}
.cursor-ui-upz64d{width:calc(var(--cursor-spacing-20) + var(--cursor-spacing-4))}
.cursor-ui-eq5yr9{width:fit-content}
.cursor-ui-ezivpi{width:max-content}
.cursor-ui-16w9d4f{width:var(--cursor-height-base)}
.cursor-ui-1tsk5d4{width:var(--cursor-height-lg)}
.cursor-ui-1f0ij18{width:var(--cursor-height-xs)}
.cursor-ui-akrjlu{width:var(--cursor-spacing-0-25)}
.cursor-ui-19j8p08{width:var(--cursor-spacing-1-5)}
.cursor-ui-1niwmkg{width:var(--cursor-spacing-10)}
.cursor-ui-8c0t0h{width:var(--cursor-spacing-15)}
.cursor-ui-ek66a6{width:var(--cursor-spacing-3-5)}
.cursor-ui-ncpac4{width:var(--cursor-spacing-3)}
.cursor-ui-q08q9o{width:var(--cursor-spacing-4-5)}
.cursor-ui-1pwdyn5{width:var(--cursor-spacing-4)}
.cursor-ui-16bvwqk{width:var(--cursor-spacing-5)}
.cursor-ui-1eu7oa3{width:var(--cursor-spacing-6)}
.cursor-ui-jst10v{width:var(--cursor-spacing-7)}
.cursor-ui-5lhr3w{width:var(--x-width)}
:where(.cursor-ui--default-marker:hover) .cursor-ui-b9ed0.cursor-ui-b9ed0{border-bottom-left-radius:10px}
:where(.cursor-ui--default-marker:hover) .cursor-ui-1d571mg.cursor-ui-1d571mg{border-bottom-right-radius:10px}
:where(.cursor-ui--default-marker:hover) .cursor-ui-1go36yk.cursor-ui-1go36yk{border-top-left-radius:10px}
:where(.cursor-ui--default-marker:hover) .cursor-ui-1ybcgki.cursor-ui-1ybcgki{border-top-right-radius:10px}
.cursor-ui-1mzclvs:hover:not(:disabled){border-bottom-color:color-mix(in srgb,var(--cursor-text-primary) 15%,var(--cursor-stroke-secondary))}
.cursor-ui-18lfe2a.ui-plugin-detail-view__add-button--active.ui-button{border-bottom-color:transparent}
.cursor-ui-19y1ask button:not(.ui-select-trigger):is(:focus,:focus-visible,:active){border-bottom-color:transparent}
.cursor-ui-1d8yjet .ui-plugin-detail-view__add-button--active.ui-button{border-bottom-color:transparent}
.cursor-ui-1jxl75k > .ui-button[data-variant=outline][aria-pressed=true]:hover{border-bottom-color:var(--cursor-bg-accent)}
.cursor-ui-ow2wjs > .ui-button[data-variant=outline][aria-pressed=true]{border-bottom-color:var(--cursor-bg-accent)}
.cursor-ui-bqnjih:focus-visible{border-bottom-left-radius:10px}
.cursor-ui-7ne0kr:focus-visible{border-bottom-right-radius:10px}
.cursor-ui-o13fmp:hover:not(:disabled){border-left-color:color-mix(in srgb,var(--cursor-text-primary) 15%,var(--cursor-stroke-secondary))}
.cursor-ui-1e8nljl button:not(.ui-select-trigger):is(:focus,:focus-visible,:active){border-left-color:transparent}
.cursor-ui-8pgsqm.ui-plugin-detail-view__add-button--active.ui-button{border-left-color:transparent}
.cursor-ui-i6d28a .ui-plugin-detail-view__add-button--active.ui-button{border-left-color:transparent}
.cursor-ui-16majkz > .ui-button[data-variant=outline][aria-pressed=true]:hover{border-left-color:var(--cursor-bg-accent)}
.cursor-ui-1m04nkf > .ui-button[data-variant=outline][aria-pressed=true]{border-left-color:var(--cursor-bg-accent)}
.cursor-ui-njn0x0:hover:not(:disabled){border-right-color:color-mix(in srgb,var(--cursor-text-primary) 15%,var(--cursor-stroke-secondary))}
.cursor-ui-1mosxl4 .ui-plugin-detail-view__add-button--active.ui-button{border-right-color:transparent}
.cursor-ui-bpcxxz button:not(.ui-select-trigger):is(:focus,:focus-visible,:active){border-right-color:transparent}
.cursor-ui-o7oumi.ui-plugin-detail-view__add-button--active.ui-button{border-right-color:transparent}
.cursor-ui-1h452ua > .ui-button[data-variant=outline][aria-pressed=true]{border-right-color:var(--cursor-bg-accent)}
.cursor-ui-40j8lx > .ui-button[data-variant=outline][aria-pressed=true]:hover{border-right-color:var(--cursor-bg-accent)}
.cursor-ui-1mjb2r4:hover:not(:disabled){border-top-color:color-mix(in srgb,var(--cursor-text-primary) 15%,var(--cursor-stroke-secondary))}
.cursor-ui-1cnxp3p .ui-plugin-detail-view__add-button--active.ui-button{border-top-color:transparent}
.cursor-ui-kmi6va button:not(.ui-select-trigger):is(:focus,:focus-visible,:active){border-top-color:transparent}
.cursor-ui-ue9dvu.ui-plugin-detail-view__add-button--active.ui-button{border-top-color:transparent}
.cursor-ui-15e2b5d > .ui-button[data-variant=outline][aria-pressed=true]{border-top-color:var(--cursor-bg-accent)}
.cursor-ui-1q1sde > .ui-button[data-variant=outline][aria-pressed=true]:hover{border-top-color:var(--cursor-bg-accent)}
.cursor-ui-10kfwgp:focus-visible{border-top-left-radius:10px}
.cursor-ui-1qwi9e9:focus-visible{border-top-right-radius:10px}
.cursor-ui-13z26n .ui-plugin-detail-view__plugin-logo img{height:35px}
.cursor-ui-18c7tgd.ui-plugin-detail-view__plugin-logo img{height:35px}
.cursor-ui-rlij5q.cursor-ui-rlij5q:where(ol + p){margin-left:var(--cursor-spacing-4)}
.cursor-ui-w0urke .ui-input-group__input{max-width:100%}
.cursor-ui-1h8g1is .ui-input-group__input{min-width:1ch}
.cursor-ui-gcucsy:is(.ui-mcp-server-actions-menu__section-body){overflow-x:hidden}
.cursor-ui-1shir73:is(.ui-mcp-server-actions-menu__section-body){overflow-y:hidden}
.cursor-ui-4z4o2h.ui-plugin-detail-view__plugin-logo img{width:35px}
.cursor-ui-plbtv9 .ui-plugin-detail-view__plugin-logo img{width:35px}
.cursor-ui-b0taqm .ui-input-group__input{width:auto}
.cursor-ui-l6bsgv:empty{padding-top:0}
.cursor-ui-1qyl5ef:hover{border-bottom-color:var(--plan-execution-hover-border)}
.cursor-ui-10aknu6:hover{border-left-color:var(--plan-execution-hover-border)}
.cursor-ui-187alvo:hover{border-right-color:var(--plan-execution-hover-border)}
.cursor-ui-1p4j8si:hover{border-top-color:var(--plan-execution-hover-border)}
.cursor-ui-x1lvw9:focus{border-bottom-color:var(--cursor-stroke-focused)}
.cursor-ui-v56yai:focus{border-left-color:var(--cursor-stroke-focused)}
.cursor-ui-1r989m5:focus{border-right-color:var(--cursor-stroke-focused)}
.cursor-ui-saxbar:focus{border-top-color:var(--cursor-stroke-focused)}
@media (max-width: 639px){.cursor-ui-1kyyjj0.cursor-ui-1kyyjj0{padding-left:1.5rem}}
@media (max-width: 639px){.cursor-ui-98fzwu.cursor-ui-98fzwu{padding-right:1.5rem}}
@container (max-width: 280px){.cursor-ui-h2ylfo.cursor-ui-h2ylfo{height:auto}}
@container (max-width: 440px){.cursor-ui-phdvex.cursor-ui-phdvex{padding-left:0}}
@container (max-width: 520px){.cursor-ui-5yr4ai.cursor-ui-5yr4ai{padding-left:0}}
@container (max-width: 440px){.cursor-ui-cnomtp.cursor-ui-cnomtp{padding-right:0}}
@container (max-width: 520px){.cursor-ui-11mpw84.cursor-ui-11mpw84{padding-right:0}}
@container (max-width: 440px){.cursor-ui-1fohrsg.cursor-ui-1fohrsg{width:0}}
@container (max-width: 520px){.cursor-ui-17h7dkw.cursor-ui-17h7dkw{width:0}}
@container (max-width: 280px){.cursor-ui-1mm9u0k.cursor-ui-1mm9u0k{width:100%}}
@container ((max-width: 600px) and (min-width: 520.01px)){.cursor-ui-1e3eesr.cursor-ui-1e3eesr{width:120px}}
.cursor-ui-177lmp6[data-size]{border-radius:var(--cursor-radius-base)}
.cursor-ui-yek0jx[data-size][data-variant]{border-radius:var(--cursor-radius-base)}
.cursor-ui-bbsey2[data-size]{gap:var(--cursor-spacing-1-5)}
.cursor-ui-lr0b6f[data-size][data-variant]{gap:var(--cursor-spacing-2)}
.cursor-ui-16ib1pd[data-size][data-variant]{align-items:center}
.cursor-ui-5ni0aj[data-size][data-variant]{background-color:transparent}
.cursor-ui-x3ycno[data-size][data-variant]:hover{background-color:transparent}
.cursor-ui-zzsv5h[data-size][data-variant]:focus-visible{background-color:transparent}
.cursor-ui-148mvo3[data-selected]{background-color:var(--cursor-bg-secondary)}
.cursor-ui-10meh72[data-popup-open]{background-color:var(--cursor-bg-tertiary)}
.cursor-ui-19ohla0[data-size][data-variant]{border-inline-end-style:none}
.cursor-ui-2fku17[data-size][data-variant]{border-inline-end-width:0}
.cursor-ui-85p71c[data-size][data-variant]{border-inline-start-style:none}
.cursor-ui-1l6c0fs[data-size][data-variant]{border-inline-start-width:0}
.cursor-ui-1nbh50h[data-variant='primary'][data-tone='accent']{color:var(--cursor-button-primary-foreground)}
.cursor-ui-126wgu6[data-placeholder="true"]{color:var(--cursor-text-tertiary)}
.cursor-ui-1l8te3o[data-size]{font-size:13px}
.cursor-ui-cjzwwj[data-size][data-variant]{font-size:17px}
.cursor-ui-1h5trzc::before{inset:-1px}
.cursor-ui-gmhms5::after{inset:-1px}
.cursor-ui-arstr8::after{inset:0}
.cursor-ui-xx281p::before{inset:0}
.cursor-ui-15wi9yd[data-size][data-variant]{justify-content:flex-start}
.cursor-ui-f76rtq[data-size][data-variant]{letter-spacing:-0.44px}
.cursor-ui-1padcyd[data-size]{line-height:18px}
.cursor-ui-b9h2z8[data-size][data-variant]{line-height:21px}
.cursor-ui-1tryf6n[data-size]{padding-inline-end:0}
.cursor-ui-1ds1q6w[data-size]{padding-inline-end:var(--cursor-spacing-2)}
.cursor-ui-3ckduk[data-size][data-variant]{padding-inline-end:var(--cursor-spacing-2)}
.cursor-ui-gwquho[data-size]{padding-inline-start:0}
.cursor-ui-qooaik[data-size]{padding-inline-start:var(--cursor-spacing-2)}
.cursor-ui-zczp6e[data-size][data-variant]{padding-inline-start:var(--cursor-spacing-2)}
.cursor-ui-ox42u2[data-size][data-variant]{text-align:left}
.cursor-ui-1qeg96r[data-size][data-variant]{border-bottom-style:none}
.cursor-ui-ebk3ot[data-size][data-variant]{border-bottom-width:0}
.cursor-ui-1pg4vwx::after{border-radius:calc(var(--conversation-surface-border-radius,6px) + 1px)}
.cursor-ui-1x5np5k::before{border-radius:calc(var(--conversation-surface-border-radius,6px) + 1px)}
.cursor-ui-xyica1::before{border-radius:inherit}
.cursor-ui-9xsh1y::-webkit-scrollbar-thumb{border-radius:var(--cursor-radius-full)}
.cursor-ui-slcx10::-webkit-scrollbar-thumb{border-radius:var(--cursor-spacing-0-75)}
.cursor-ui-24ytr9[data-size][data-variant]{border-top-style:none}
.cursor-ui-17lgxix[data-size][data-variant]{border-top-width:0}
.cursor-ui-1e2jjag[data-size]{height:24px}
.cursor-ui-a5by1y[data-size][data-variant]{height:36px}
.cursor-ui-73ozlk[data-size][data-variant]{max-width:100%}
.cursor-ui-ivuov2[data-size][data-variant]{min-width:0}
.cursor-ui-141n0u1[data-size][data-variant]{padding-bottom:0}
.cursor-ui-18zxypt[data-size]{padding-bottom:0}
.cursor-ui-hrb6o2[data-size][data-variant]{padding-top:0}
.cursor-ui-k51ieo[data-size]{padding-top:0}
.cursor-ui-1in3q7t[data-size]{width:24px}
.cursor-ui-4leush[data-size][data-variant]{width:fit-content}
.cursor-ui-4s59pg::before{-webkit-mask-image:linear-gradient(to right,transparent 0%,black calc(100% - 4px),black 100%)}
.cursor-ui-1ui9q4k::after{animation-duration:1.5s}
.cursor-ui-13ee8us::after{animation-iteration-count:infinite}
.cursor-ui-d1mj5j::after{animation-name:cursor-ui-13n5nbw-B}
.cursor-ui-jkto4i::after{animation-timing-function:var(--cursor-easing-in-out)}
.cursor-ui-1ftd4sf::-webkit-scrollbar-thumb{background-clip:padding-box}
.cursor-ui-1nz211u::-webkit-scrollbar-thumb{background-color:color-mix(in srgb,var(--cursor-text-quaternary) 45%,transparent)}
.cursor-ui-6hr8qo::before{background-color:rgba(255,255,255,.34)}
.cursor-ui-122zoth::-webkit-scrollbar-track{background-color:transparent}
.cursor-ui-jftzih::after{background-color:var(--cursor-stroke-quaternary)}
.cursor-ui-1850n35::before{background-color:var(--cursor-stroke-tertiary)}
.cursor-ui-5kpnyo::before{background-color:var(--ui-add-plugin-description-fade-bg,var(--cursor-bg-elevated))}
.cursor-ui-5xjfoy::-webkit-scrollbar-thumb{background-color:var(--vscode-scrollbarSlider-background)}
.cursor-ui-1b45uga::after{background-image:linear-gradient(270deg,var(--ui-customize-view-background) 0%,transparent 100%)}
.cursor-ui-aglvbq::after{background-image:linear-gradient(90deg,transparent 0%,var(--cursor-bg-secondary) 50%,transparent 100%)}
.cursor-ui-i9wlq6::before{background-image:linear-gradient(90deg,var(--ui-customize-view-background) 0%,transparent 100%)}
.cursor-ui-1qddspw::after{background-image:var(--glass-chat-backdrop,none)}
.cursor-ui-twaucc::before{background-image:var(--glass-chat-backdrop,none)}
.cursor-ui-ltfok3::placeholder{color:var(--cursor-text-tertiary)}
.cursor-ui-1cpjm7i::before{content:""}
.cursor-ui-1s928wv::after{content:""}
.cursor-ui-fk6m8::-webkit-scrollbar{display:none}
.cursor-ui-1v06k4l::before{font-size:var(--cursor-font-size-lg)}
.cursor-ui-14rd50k::after{mask-image:linear-gradient(rgb(from var(--cursor-bg-editor) 0 0 0 / clamp(0, (1 - alpha) * 1000, 1)), rgb(from var(--cursor-bg-editor) 0 0 0 / clamp(0, (1 - alpha) * 1000, 1)))}
.cursor-ui-1x4fsev::before{mask-image:linear-gradient(rgb(from var(--cursor-bg-editor) 0 0 0 / clamp(0, (1 - alpha) * 1000, 1)), rgb(from var(--cursor-bg-editor) 0 0 0 / clamp(0, (1 - alpha) * 1000, 1)))}
.cursor-ui-q6k3b2::before{mask-image:linear-gradient(to right,transparent 0%,black calc(100% - 4px),black 100%)}
.cursor-ui-1obv6hi::before{opacity:.62}
.cursor-ui-124lp2h::before{opacity:0}
.cursor-ui-mf22ne::after{opacity:0}
.cursor-ui-1rw2j67::after{opacity:1}
.cursor-ui-fbg1o9::before{opacity:1}
.cursor-ui-b3gzco::before{opacity:var(--plugin-row-divider-opacity)}
.cursor-ui-2q1x1w::after{pointer-events:none}
.cursor-ui-kk1bqk::before{pointer-events:none}
.cursor-ui-1hmns74::before{position:absolute}
.cursor-ui-1j6awrg::after{position:absolute}
.cursor-ui-gu12d::before{transform-origin:left center}
.cursor-ui-5porm6::before{transform:scaleX(calc(var(--ui-add-plugin-progress,0) * .01))}
.cursor-ui-12d56wv::before{transform:scaleX(calc(var(--ui-plugin-detail-view-add-progress,0) * .01))}
.cursor-ui-vs0bi2::after{transform:translateX(-100%)}
.cursor-ui-1790gqu::before{transition-duration:.09s,.12s}
.cursor-ui-1ikho1h::after{transition-duration:.12s}
.cursor-ui-qfulrc::before{transition-duration:.12s}
.cursor-ui-zwr48f::before{transition-duration:.1s}
.cursor-ui-1de4urk::before{transition-property:opacity}
.cursor-ui-1hbq0ec::after{transition-property:opacity}
.cursor-ui-1j7sxfd::before{transition-property:transform,opacity}
.cursor-ui-g98cju::before{transition-timing-function:ease}
.cursor-ui-1jsbol1::before{transition-timing-function:linear,linear}
.cursor-ui-e7ju4t::after{transition-timing-function:var(--cursor-easing-default)}
.cursor-ui-jnukix::before{transition-timing-function:var(--cursor-easing-default)}
.cursor-ui-42zfpc::before{will-change:transform,opacity}
.cursor-ui-1i83b49::after{will-change:transform}
.cursor-ui-i4xitw::after{z-index:-1}
.cursor-ui-y5mcqj::before{z-index:-1}
.cursor-ui-2hztxu::before{z-index:0}
.cursor-ui-12maryy::before{z-index:1}
.cursor-ui-itxdhh::after{z-index:1}
:where(.cursor-ui--default-marker:is([data-component-row])) ~ .cursor-ui-wi3nf1.cursor-ui-wi3nf1::before{content:""}
.cursor-ui-h4bufa:hover::-webkit-scrollbar-thumb{background-color:color-mix(in srgb,var(--cursor-text-quaternary) 70%,transparent)}
.cursor-ui-nbssts::-webkit-scrollbar-thumb:hover{background-color:var(--vscode-scrollbarSlider-hoverBackground)}
.cursor-ui-9z2bt5::-webkit-scrollbar-thumb{border-bottom-color:transparent}
.cursor-ui-1w2qy2t::-webkit-scrollbar-thumb{border-bottom-style:solid}
.cursor-ui-q4csgg::-webkit-scrollbar-thumb{border-bottom-width:2px}
.cursor-ui-jburdt::-webkit-scrollbar-thumb{border-left-color:transparent}
.cursor-ui-47c6vt::-webkit-scrollbar-thumb{border-left-style:solid}
.cursor-ui-1jjkgcc::-webkit-scrollbar-thumb{border-left-width:2px}
.cursor-ui-c2x3b::-webkit-scrollbar-thumb{border-right-color:transparent}
.cursor-ui-1h7ukko::-webkit-scrollbar-thumb{border-right-style:solid}
.cursor-ui-3kcff6::-webkit-scrollbar-thumb{border-right-width:2px}
.cursor-ui-ko1upl::-webkit-scrollbar-thumb{border-top-color:transparent}
.cursor-ui-9lj5z4::-webkit-scrollbar-thumb{border-top-style:solid}
.cursor-ui-xefvfb::-webkit-scrollbar-thumb{border-top-width:2px}
.cursor-ui-1xrz1ek::after{bottom:0}
.cursor-ui-hq5o37::before{bottom:0}
.cursor-ui-rnkxd5::before{bottom:auto}
.cursor-ui-1yqm8si::-webkit-scrollbar{height:0}
.cursor-ui-cock1l::after{height:1px}
.cursor-ui-y80zi5::before{height:1px}
.cursor-ui-1epwkjl::before{height:calc(var(--plan-execution-header-height) + 2px)}
.cursor-ui-45edv5::-webkit-scrollbar{height:var(--cursor-spacing-1-5)}
.cursor-ui-1wlytlt::before{left:0}
.cursor-ui-1jl5xyf::after{left:12px}
.cursor-ui-zir4s5::before{left:12px}
.cursor-ui-1oqcqab::after{left:calc(var(--conversation-glass-corner-rule,0px) - 1px)}
.cursor-ui-nbfe2x::after{right:0}
.cursor-ui-3cmejs::before{right:100%}
.cursor-ui-14cqbmr::after{right:12px}
.cursor-ui-9lkry3::before{right:12px}
.cursor-ui-nbmjs6::after{right:calc(var(--conversation-glass-corner-rule,0px) - 1px)}
.cursor-ui-1m1drc7::after{top:0}
.cursor-ui-1y3wzot::before{top:0}
.cursor-ui-jx87ck::-webkit-scrollbar{width:0}
.cursor-ui-12o6m6d::-webkit-scrollbar{width:8px}
.cursor-ui-t8qhtf::before{width:var(--cursor-height-sm)}
.cursor-ui-1fx9dl4::-webkit-scrollbar{width:var(--cursor-spacing-1-5)}
.cursor-ui-jyez6j::before{width:var(--cursor-spacing-16)}
.cursor-ui-2wmc1r::after{width:var(--cursor-spacing-20)}
`;

}
