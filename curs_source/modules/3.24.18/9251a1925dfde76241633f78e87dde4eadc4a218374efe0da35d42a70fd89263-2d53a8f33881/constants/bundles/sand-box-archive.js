var SAND_BOX_PERSISTED_PATHS, SAND_BOX_PERSIST_ARCHIVE_EXCLUDES, SAND_WORKSPACE_IGNORE_FILE_NAME, SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS;
export { SAND_BOX_PERSISTED_PATHS, SAND_BOX_PERSIST_ARCHIVE_EXCLUDES, SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS, SAND_WORKSPACE_IGNORE_FILE_NAME };
var __wakaru_init_sand_box_archive_initialized = false;
export function init_sand_box_archive() {
if (__wakaru_init_sand_box_archive_initialized) return;
__wakaru_init_sand_box_archive_initialized = true;
"use strict";
SAND_BOX_PERSISTED_PATHS = [
    "home/box/chrome-profile",
    "workspace",
    "home/box/sand-data",
    "home/box/cli-config"
];
SAND_BOX_PERSIST_ARCHIVE_EXCLUDES = [
    "home/box/chrome-profile/OptGuideOnDeviceModel",
    "home/box/chrome-profile/**/OptGuideOnDeviceModel",
    "home/box/chrome-profile/**/Cache",
    "home/box/chrome-profile/**/Code Cache",
    "home/box/chrome-profile/**/GPUCache",
    "home/box/chrome-profile/**/Service Worker/CacheStorage"
];
SAND_WORKSPACE_IGNORE_FILE_NAME = ".sandignore";
SAND_BOX_WORKSPACE_DEFAULT_IGNORE_PATTERNS = [
    "node_modules/",
    ".next/",
    ".nuxt/",
    ".svelte-kit/",
    ".turbo/",
    ".parcel-cache/",
    ".cache/",
    "dist/",
    "build/",
    "out/",
    "coverage/",
    "__pycache__/",
    "*.pyc",
    "*.pyo",
    ".venv/",
    "venv/",
    ".pytest_cache/",
    ".mypy_cache/",
    ".ruff_cache/",
    ".tox/",
    ".ipynb_checkpoints/",
    "*.egg-info/",
    ".eggs/",
    "target/",
    ".gradle/",
    "core.[0-9]*",
    "*.core",
    "/browser-cdp/",
    "/screenshots/"
];

}
