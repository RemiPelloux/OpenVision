#!/bin/sh
set -eu
OPENVISION_ROOT=$(CDPATH= cd -- "$(dirname "$0")" && pwd)
exec "${OPENVISION_NODE_PATH:-node}" "$OPENVISION_ROOT/desktop/start.mjs" "$@"
