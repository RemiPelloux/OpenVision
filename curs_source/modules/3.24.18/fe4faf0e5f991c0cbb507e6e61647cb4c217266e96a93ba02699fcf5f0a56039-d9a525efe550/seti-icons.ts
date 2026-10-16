import { F$e, O$e } from "./cursor-icons.ts";
import { i } from "./plugin-brand-icon.js";
import { U4i, g0r } from "./to-kebab-case.ts";
function u3(r) {
    const e = {
        char: F$e(r.cursorIcon),
        color: r.color,
        fontFamily: "cursor",
        semanticColor: r.semanticColor
    };
    return r.glyphScale === void 0 ? e : {
        ...e,
        glyphScale: r.glyphScale
    };
}
function NLt(r) {
    return `var(--cursor-${g0r(r)})`;
}
function MLt(r) {
    const e = (r.split(/[/\\]/u).pop() ?? r).toLowerCase(), a = k0r[e];
    if (a !== void 0) return a;
    if (e.startsWith(".")) {
        const l = e.slice(1).split(".", 1)[0];
        if (l && Object.hasOwn(a$, l)) return a$[l] ?? a$.default;
    }
    const s = e.split(".");
    for(let l = 1; l < s.length; l++){
        const u = s.slice(l).join(".");
        if (Object.hasOwn(a$, u)) return a$[u] ?? a$.default;
    }
    return a$.default;
}
var CC, b0r, TP, RLt, ohe, zJ, y0r, she, w0r, PLt, jLt, _0r, che, iRe, a$, k0r, v0r;
export { CC, MLt, NLt, PLt, RLt, TP, _0r, a$, b0r, che, iRe, jLt, k0r, ohe, she, u3, v0r, w0r, y0r, zJ };
var __wakaru_x0r_initialized = false;
export function x0r() {
if (__wakaru_x0r_initialized) return;
__wakaru_x0r_initialized = true;
"use strict";
O$e(), U4i(), i(u3, "cursorSetiIconEntry"), CC = {
    char: "\uE007",
    color: "#8dc149",
    semanticColor: "iconGreenPrimary"
}, b0r = {
    char: "\uE007",
    color: "#4d5a5e",
    semanticColor: "iconSecondary"
}, TP = {
    char: "\uE025",
    color: "#519aba",
    semanticColor: "iconCyanPrimary"
}, RLt = u3({
    color: "#e37933",
    cursorIcon: "file-type-bower",
    semanticColor: "iconOrangePrimary"
}), ohe = u3({
    color: "#e37933",
    cursorIcon: "file-type-firebase",
    semanticColor: "iconOrangePrimary"
}), zJ = u3({
    color: "#498ae1",
    cursorIcon: "file-type-godot",
    semanticColor: "iconBluePrimary"
}), y0r = u3({
    color: "#519aba",
    cursorIcon: "file-type-ionic",
    semanticColor: "iconCyanPrimary"
}), she = u3({
    color: "#8dc149",
    cursorIcon: "file-type-karma",
    semanticColor: "iconGreenPrimary"
}), w0r = u3({
    color: "#e37933",
    cursorIcon: "file-type-platformio",
    semanticColor: "iconOrangePrimary"
}), PLt = u3({
    color: "#cbcb41",
    cursorIcon: "file-type-puppet",
    semanticColor: "iconYellowPrimary"
}), jLt = u3({
    color: "#e37933",
    cursorIcon: "file-type-sublime",
    semanticColor: "iconOrangePrimary"
}), _0r = u3({
    color: "#519aba",
    cursorIcon: "file-type-vsc",
    semanticColor: "iconCyanPrimary"
}), che = {
    char: "\uE034",
    color: "#41535b",
    semanticColor: "iconSecondary"
}, iRe = {
    char: "\uE05F",
    color: "#e37933",
    semanticColor: "iconOrangePrimary"
}, a$ = {
    bzl: CC,
    bazel: CC,
    build: CC,
    workspace: CC,
    bazelignore: CC,
    bazelrc: b0r,
    bazelversion: CC,
    ts: {
        char: "\uE099",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    tsx: {
        char: "\uE07D",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    js: {
        char: "\uE051",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    jsx: {
        char: "\uE07D",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    mjs: {
        char: "\uE051",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    cjs: {
        char: "\uE051",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    npmignore: {
        char: "\uE067",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    npmrc: {
        char: "\uE067",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    cmd: {
        char: "\uE0A2",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    env: {
        char: "\uE019",
        color: "#6d8086",
        semanticColor: "iconSecondary"
    },
    dockerignore: TP,
    bowerrc: RLt,
    firebaserc: ohe,
    gd: zJ,
    godot: zJ,
    tscn: zJ,
    tres: zJ,
    pp: PLt,
    "sublime-project": jLt,
    "sublime-workspace": jLt,
    "code-workspace": _0r,
    py: {
        char: "\uE07B",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    rs: {
        char: "\uE082",
        color: "#6d8086",
        semanticColor: "iconSecondary"
    },
    go: {
        char: "\uE03A",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    c: {
        char: "\uE00C",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    m: {
        char: "\uE00C",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    h: {
        char: "\uE00C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    cpp: {
        char: "\uE01A",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    cc: {
        char: "\uE01A",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    cxx: {
        char: "\uE01A",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    "c++": {
        char: "\uE01A",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    hpp: {
        char: "\uE01A",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    hh: {
        char: "\uE01A",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    hxx: {
        char: "\uE01A",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    "h++": {
        char: "\uE01A",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    mm: {
        char: "\uE01A",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    rb: {
        char: "\uE081",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    php: {
        char: "\uE070",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    java: {
        char: "\uE050",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    sh: {
        char: "\uE089",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    bash: {
        char: "\uE089",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    zsh: {
        char: "\uE089",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    json: {
        char: "\uE055",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    yaml: {
        char: "\uE0A7",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    yml: {
        char: "\uE0A7",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    md: {
        char: "\uE060",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    mdx: {
        char: "\uE060",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    mdc: {
        char: "\uE060",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    jinja: {
        char: "\uE053",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    jinja2: {
        char: "\uE053",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    mermaid: u3({
        color: "#519aba",
        cursorIcon: "diagram",
        glyphScale: .6,
        semanticColor: "iconCyanPrimary"
    }),
    mmd: u3({
        color: "#519aba",
        cursorIcon: "diagram",
        glyphScale: .6,
        semanticColor: "iconCyanPrimary"
    }),
    html: {
        char: "\uE048",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    htm: {
        char: "\uE048",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    css: {
        char: "\uE01D",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    scss: {
        char: "\uE084",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    sass: {
        char: "\uE084",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    less: {
        char: "\uE059",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    svg: {
        char: "\uE091",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    xml: {
        char: "\uE0A5",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    png: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    jpg: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    jpeg: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    jsonc: {
        char: "\uE055",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    jsonl: {
        char: "\uE055",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    gif: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    webp: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    ico: {
        char: "\uE02F",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    ipynb: {
        char: "\uE066",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    csv: {
        char: "\uE01E",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    tsv: {
        char: "\uE01E",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    sql: {
        char: "\uE022",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    pdf: u3({
        color: "#cc3e44",
        cursorIcon: "file-pdf",
        glyphScale: .72,
        semanticColor: "iconRedPrimary"
    }),
    graphql: {
        char: "\uE03E",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    gql: {
        char: "\uE03E",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    vue: {
        char: "\uE09D",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    svelte: {
        char: "\uE090",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    handlebars: {
        char: "\uE063",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    groovy: {
        char: "\uE03D",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    toml: {
        char: "\uE019",
        color: "#6d8086",
        semanticColor: "iconSecondary"
    },
    tf: {
        char: "\uE093",
        color: "#a074c4",
        semanticColor: "iconPurplePrimary"
    },
    "tf.json": {
        char: "\uE093",
        color: "#a074c4",
        semanticColor: "iconPurplePrimary"
    },
    tfvars: {
        char: "\uE093",
        color: "#a074c4",
        semanticColor: "iconPurplePrimary"
    },
    "tfvars.json": {
        char: "\uE093",
        color: "#a074c4",
        semanticColor: "iconPurplePrimary"
    },
    tex: {
        char: "\uE094",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    latex: {
        char: "\uE094",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    dtx: {
        char: "\uE094",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    ins: {
        char: "\uE094",
        color: "#d4d7d6",
        semanticColor: "iconSecondary"
    },
    lock: {
        char: "\uE05D",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    proto: {
        char: "\uE019",
        color: "#6d8086",
        semanticColor: "iconSecondary"
    },
    ps1: {
        char: "\uE074",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    swift: {
        char: "\uE092",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    kt: {
        char: "\uE058",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    kts: {
        char: "\uE058",
        color: "#e37933",
        semanticColor: "iconOrangePrimary"
    },
    mp3: {
        char: "\uE005",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    mp4: {
        char: "\uE09B",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    ttf: {
        char: "\uE033",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    woff: {
        char: "\uE033",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    woff2: {
        char: "\uE033",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    otf: {
        char: "\uE033",
        color: "#cc3e44",
        semanticColor: "iconRedPrimary"
    },
    zip: {
        char: "\uE0A9",
        color: "#6d8086",
        semanticColor: "iconSecondary"
    },
    wasm: {
        char: "\uE09E",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    webm: {
        char: "\uE09B",
        color: "#f55385",
        semanticColor: "iconMagentaPrimary"
    },
    tiff: {
        char: "\uE04C",
        color: "#a074c4",
        semanticColor: "iconMagentaPrimary"
    },
    r: {
        char: "\uE001",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    xlsx: {
        char: "\uE0A4",
        color: "#8dc149",
        semanticColor: "iconGreenPrimary"
    },
    mk: iRe,
    dart: {
        char: "\uE021",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    lua: {
        char: "\uE05E",
        color: "#519aba",
        semanticColor: "iconCyanPrimary"
    },
    default: {
        char: "\uE023",
        color: "#d4d7d6",
        semanticColor: "iconSecondary"
    }
}, k0r = {
    ".gitattributes": che,
    ".gitconfig": che,
    ".gitignore": che,
    ".gitkeep": che,
    license: {
        char: "\uE05A",
        color: "#cbcb41",
        semanticColor: "iconYellowPrimary"
    },
    build: CC,
    "build.bazel": CC,
    dockerfile: TP,
    containerfile: TP,
    "docker-compose.yml": TP,
    "docker-compose.yaml": TP,
    "compose.yml": TP,
    "compose.yaml": TP,
    "bower.json": RLt,
    "firebase.json": ohe,
    "firestore.rules": ohe,
    "storage.rules": ohe,
    "project.godot": zJ,
    "ionic.config.json": y0r,
    "karma.conf.js": she,
    "karma.conf.ts": she,
    "karma.conf.cjs": she,
    "karma.conf.mjs": she,
    "platformio.ini": w0r,
    puppetfile: PLt,
    gnumakefile: iRe,
    makefile: iRe,
    workspace: CC,
    "workspace.bazel": CC
}, v0r = a$.default, i(NLt, "setiSemanticIconCssVar"), i(MLt, "getSetiIcon");

}
