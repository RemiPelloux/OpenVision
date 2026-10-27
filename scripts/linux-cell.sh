#!/bin/sh
# Run a command inside one declared Linux display cell for native verification.
#
#   scripts/linux-cell.sh x11 [--no-keyring] -- npm run verify:welcome
#   scripts/linux-cell.sh wayland [--no-keyring] -- npm run verify:welcome
#   scripts/linux-cell.sh gnome|kde [--no-keyring] -- npm run verify:critical
#
# x11 uses the current DISPLAY, or a private Xvfb screen through xvfb-run when
# none is set. wayland starts a private headless Weston compositor. gnome and kde
# start a private headless GNOME Shell or KWin (with Xwayland) and set the
# session variables a desktop login sets; GNOME Shell needs a system bus with
# logind. All run in a private D-Bus session with a disposable keyring unless
# --no-keyring is given (the documented no-service path): a plaintext
# gnome-keyring, or for kde a KWallet opened the way a Plasma login opens it
# (scripts/kwallet-login.py). They set OPENVISION_OZONE_PLATFORM so every
# verifier launch pins the display backend (Wayland for gnome and kde).
set -eu
cell=${1:-}
case "$cell" in x11|wayland|gnome|kde) shift ;; *) echo "Usage: $0 x11|wayland|gnome|kde [--no-keyring] -- <command>" >&2; exit 2 ;; esac
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

if [ "$OPENVISION_CELL_KEYRING" = 1 ] && [ "$cell" != kde ]; then
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

# Waits up to 30 s for a socket the compositor creates.
wait_socket() {
  tries=0
  until [ -S "$1" ]; do
    tries=$((tries + 1))
    if [ "$tries" -gt 300 ] || ! kill -0 "$compositor" 2>/dev/null; then cat "$runtime/compositor.log" >&2; exit 1; fi
    sleep 0.1
  done
}
socket="openvision-wayland-$$"
case "$cell" in
wayland)
  command -v weston >/dev/null || { echo "weston is not installed" >&2; exit 2; }
  weston --backend=headless --socket="$socket" --width=1920 --height=1080 --idle-time=0 \
    >"$runtime/compositor.log" 2>&1 &
  compositor=$!
  wait_socket "$XDG_RUNTIME_DIR/$socket"
  export WAYLAND_DISPLAY="$socket" XDG_SESSION_TYPE=wayland
  unset DISPLAY
  ;;
gnome|kde)
  before=$(ls /tmp/.X11-unix 2>/dev/null || true)
  if [ "$cell" = gnome ]; then
    command -v gnome-shell >/dev/null || { echo "gnome-shell is not installed" >&2; exit 2; }
    export XDG_CURRENT_DESKTOP=GNOME XDG_SESSION_DESKTOP=gnome DESKTOP_SESSION=gnome
    gnome-shell --headless --wayland --wayland-display="$socket" --virtual-monitor 1920x1080 \
      >"$runtime/compositor.log" 2>&1 &
  else
    command -v kwin_wayland >/dev/null || { echo "kwin_wayland is not installed" >&2; exit 2; }
    export XDG_CURRENT_DESKTOP=KDE XDG_SESSION_DESKTOP=KDE DESKTOP_SESSION=plasma KDE_FULL_SESSION=true KDE_SESSION_VERSION=6
    kwin_wayland --virtual --xwayland --no-lockscreen --width 1920 --height 1080 --socket "$socket" \
      >"$runtime/compositor.log" 2>&1 &
  fi
  compositor=$!
  wait_socket "$XDG_RUNTIME_DIR/$socket"
  export WAYLAND_DISPLAY="$socket" XDG_SESSION_TYPE=wayland
  # Xwayland: the X socket the compositor added, and GNOME's private authority file.
  tries=0; unset DISPLAY
  while [ "$tries" -lt 100 ]; do
    for name in $(ls /tmp/.X11-unix 2>/dev/null); do
      case " $(echo $before) " in *" $name "*) ;; *) export DISPLAY=":${name#X}" ;; esac
    done
    [ -n "${DISPLAY:-}" ] && break
    tries=$((tries + 1)); sleep 0.1
  done
  for auth in "$XDG_RUNTIME_DIR"/.mutter-Xwaylandauth.*; do [ -f "$auth" ] && export XAUTHORITY="$auth"; done
  dbus-update-activation-environment WAYLAND_DISPLAY ${DISPLAY:+DISPLAY} ${XAUTHORITY:+XAUTHORITY} XDG_RUNTIME_DIR \
    XDG_SESSION_TYPE XDG_CURRENT_DESKTOP XDG_SESSION_DESKTOP DESKTOP_SESSION ${KDE_SESSION_VERSION:+KDE_SESSION_VERSION KDE_FULL_SESSION}
  if [ "$cell" = kde ] && [ "$OPENVISION_CELL_KEYRING" = 1 ]; then
    XDG_DATA_HOME="$runtime/data" python3 "$(dirname "$0")/kwallet-login.py" openvision-cell
  fi
  ;;
*)
  export XDG_SESSION_TYPE=x11
  unset WAYLAND_DISPLAY
  ;;
esac
platform=$cell
case "$cell" in gnome|kde) platform=wayland ;; esac
export OPENVISION_OZONE_PLATFORM="$platform"
echo "[linux-cell] $cell display=${WAYLAND_DISPLAY:-${DISPLAY:-}}${WAYLAND_DISPLAY:+ x11=${DISPLAY:-none}} desktop=${XDG_CURRENT_DESKTOP:-none} keyring=$OPENVISION_CELL_KEYRING" >&2
status=0
"$@" || status=$?
exit "$status"
