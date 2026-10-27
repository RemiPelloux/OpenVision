#!/bin/sh
# Run a native verifier inside another Linux distribution or desktop session, in a container.
#
#   scripts/linux-matrix/run.sh build fedora|debian|gnome|kde
#   scripts/linux-matrix/run.sh fedora|debian|gnome|kde -- npm run verify:critical -- --subset linux-critical
#
# The checkout, its build and the pinned Node.js are mounted at their own paths
# (the Electron host links back into the checkout), and the command runs as the
# checkout's owner through scripts/linux-cell.sh: x11 on Xvfb for fedora and
# debian, gnome and kde for the desktop images. Containers share the host
# kernel: they check a distribution's user space and a desktop's services, not
# its kernel, so kernel policy (AppArmor) and other architectures need a VM or
# a machine. Docker or Podman; set OPENVISION_CONTAINER to choose.
set -eu
here=$(cd "$(dirname "$0")" && pwd)
root=$(cd "$here/../.." && pwd)
engine=${OPENVISION_CONTAINER:-$(command -v docker || command -v podman || true)}
[ -n "$engine" ] || { echo "Docker or Podman is required" >&2; exit 2; }
usage() { echo "Usage: $0 build <image> | $0 <image> -- <command>   (images: fedora debian gnome kde)" >&2; exit 2; }
image_ok() { case "$1" in fedora|debian|gnome|kde) ;; *) usage ;; esac; }

if [ "${1:-}" = build ]; then
  image_ok "${2:-}"
  case "$2" in gnome|kde) "$0" build fedora ;; esac
  # Pass any HTTPS proxy through; package managers inside reach the network through it.
  exec "$engine" build --network host ${https_proxy:+--build-arg https_proxy="$https_proxy"} \
    ${HTTPS_PROXY:+--build-arg HTTPS_PROXY="$HTTPS_PROXY"} ${OPENVISION_MATRIX_BASE:+--build-arg BASE="$OPENVISION_MATRIX_BASE"} \
    -f "$here/Containerfile.$2" -t "openvision-matrix:$2" "$here"
fi

image=${1:-}; image_ok "$image"; shift
[ "${1:-}" = -- ] && shift
[ "$#" -gt 0 ] || usage
case "$image" in gnome) cell=gnome ;; kde) cell=kde ;; *) cell=x11 ;; esac
node=$(command -v node) || { echo "node is not on PATH" >&2; exit 2; }
node_root=$(cd "$(dirname "$node")/.." && pwd)
uid=$(stat -c %u "$root"); gid=$(stat -c %g "$root")
mounts="-v $root:$root -v $node_root:$node_root:ro"
for path in "${OPENVISION_BROWSER_PATH:-}" "${NODE_EXTRA_CA_CERTS:-}"; do
  [ -n "$path" ] && [ -e "$path" ] && mounts="$mounts -v $(dirname "$path"):$(dirname "$path"):ro"
done
name="openvision-matrix-$image-$$"
trap '"$engine" stop "$name" >/dev/null 2>&1 || true' INT TERM

# As root inside: the system bus (and a mocked logind for GNOME Shell), the X
# socket directory, then the command as the checkout's owner.
exec "$engine" run --rm --init --name "$name" --network host --shm-size=2g \
  --security-opt seccomp=unconfined --cap-add SYS_NICE $mounts \
  -e https_proxy -e HTTPS_PROXY -e no_proxy -e NO_PROXY -e OPENVISION_BROWSER_PATH -e NODE_EXTRA_CA_CERTS \
  -e "MATRIX_UID=$uid" -e "MATRIX_GID=$gid" -e "MATRIX_PATH=$node_root/bin" -e "MATRIX_ROOT=$root" -e "MATRIX_CELL=$cell" \
  "openvision-matrix:$image" /bin/sh -c '
    set -e
    getent group "$MATRIX_GID" >/dev/null || groupadd -g "$MATRIX_GID" ov
    getent passwd "$MATRIX_UID" >/dev/null || useradd -m -u "$MATRIX_UID" -g "$MATRIX_GID" -d /home/ov ov
    user=$(getent passwd "$MATRIX_UID" | cut -d: -f1)
    # Node.js is installed for this user: login shells (the Agent'"'"'s Shell tool) find it too.
    echo "PATH=\"$MATRIX_PATH:\$PATH\"" > /etc/profile.d/openvision-node.sh
    mkdir -p /run/dbus /tmp/.X11-unix && chmod 1777 /tmp/.X11-unix
    dbus-daemon --system --fork
    if [ "$MATRIX_CELL" = gnome ]; then python3 -m dbusmock --template logind --system >/tmp/logind.log 2>&1 & sleep 1; fi
    grep -E "^(PRETTY_NAME|VERSION_ID)=" /etc/os-release >&2
    exec su "$user" -s /bin/sh -c "cd \"\$MATRIX_ROOT\" && export PATH=\"\$MATRIX_PATH:/usr/bin:/bin\" HOME=\$(getent passwd \$(id -u) | cut -d: -f6) && exec scripts/linux-cell.sh \"\$MATRIX_CELL\" -- \"\$@\"" _ "$@"
  ' _ "$@"
