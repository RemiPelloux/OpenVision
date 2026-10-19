#!/bin/sh
# Run a command inside one declared Linux display cell for native verification.
#
#   scripts/linux-cell.sh x11 [--no-keyring] -- npm run verify:welcome
#   scripts/linux-cell.sh wayland [--no-keyring] -- npm run verify:welcome
#
# x11 uses the current DISPLAY, or a private Xvfb screen through xvfb-run when
# none is set. wayland starts a private headless Weston compositor. Both run in
# a private D-Bus session with a disposable plaintext gnome-keyring Secret
# Service unless --no-keyring is given (the documented no-service path) and set
# OPENVISION_OZONE_PLATFORM so every verifier launch pins the display backend.
set -eu
cell=${1:-}
case "$cell" in x11|wayland) shift ;; *) echo "Usage: $0 x11|wayland [--no-keyring] -- <command>" >&2; exit 2 ;; esac
keyring=1
while [ "$#" -gt 0 ]; do
  case "$1" in --no-keyring) keyring=0; shift ;; --) shift; break ;; *) break ;; esac
done
[ "$#" -gt 0 ] || { echo "No command given" >&2; exit 2; }
[ "$(id -u)" -ne 0 ] || { echo "Run native cells as a normal user; Chromium's sandbox refuses root." >&2; exit 2; }

if [ -z "${OPENVISION_CELL_INNER:-}" ]; then
  export OPENVISION_CELL_INNER=1 OPENVISION_CELL_KEYRING=$keyring
  if [ "$cell" = x11 ] && [ -z "${DISPLAY:-}" ]; then
    command -v xvfb-run >/dev/null || { echo "No DISPLAY and xvfb-run is not installed" >&2; exit 2; }
    exec xvfb-run -a -s "-screen 0 1920x1080x24" dbus-run-session -- "$0" "$cell" -- "$@"
  fi
  exec dbus-run-session -- "$0" "$cell" -- "$@"
fi

runtime=$(mktemp -d "${TMPDIR:-/tmp}/openvision-cell.XXXXXX")
compositor=
cleanup() {
  [ -n "$compositor" ] && kill "$compositor" 2>/dev/null && wait "$compositor" 2>/dev/null || true
  rm -rf "$runtime"
}
trap cleanup EXIT INT TERM
if [ -z "${XDG_RUNTIME_DIR:-}" ] || [ ! -w "${XDG_RUNTIME_DIR:-/nonexistent}" ]; then
  export XDG_RUNTIME_DIR="$runtime"; chmod 700 "$runtime"
fi

if [ "$OPENVISION_CELL_KEYRING" = 1 ]; then
  command -v gnome-keyring-daemon >/dev/null || { echo "gnome-keyring-daemon is not installed; use --no-keyring" >&2; exit 2; }
  # A disposable, unencrypted login keyring set as default: no graphical
  # first-run prompt (gcr-prompter) can block Chromium's Secret Service calls.
  mkdir -p "$runtime/data/keyrings"
  printf '[keyring]\ndisplay-name=login\nctime=0\nmtime=0\nlock-on-idle=false\nlock-after=false\n' \
    > "$runtime/data/keyrings/login.keyring"
  printf 'login' > "$runtime/data/keyrings/default"
  chmod 700 "$runtime/data/keyrings"; chmod 600 "$runtime/data/keyrings/login.keyring"
  eval "$(XDG_DATA_HOME="$runtime/data" gnome-keyring-daemon --start --components=secrets)"
  export GNOME_KEYRING_CONTROL
fi

if [ "$cell" = wayland ]; then
  command -v weston >/dev/null || { echo "weston is not installed" >&2; exit 2; }
  socket="openvision-wayland-$$"
  weston --backend=headless --socket="$socket" --width=1920 --height=1080 --idle-time=0 \
    >"$runtime/weston.log" 2>&1 &
  compositor=$!
  tries=0
  until [ -S "$XDG_RUNTIME_DIR/$socket" ]; do
    tries=$((tries + 1))
    if [ "$tries" -gt 100 ] || ! kill -0 "$compositor" 2>/dev/null; then cat "$runtime/weston.log" >&2; exit 1; fi
    sleep 0.1
  done
  export WAYLAND_DISPLAY="$socket" XDG_SESSION_TYPE=wayland
  unset DISPLAY
else
  export XDG_SESSION_TYPE=x11
  unset WAYLAND_DISPLAY
fi
export OPENVISION_OZONE_PLATFORM="$cell"
echo "[linux-cell] $cell display=${WAYLAND_DISPLAY:-${DISPLAY:-}} keyring=$OPENVISION_CELL_KEYRING" >&2
status=0
"$@" || status=$?
exit "$status"
