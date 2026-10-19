#!/bin/sh
# Run the Statsig cache verifier in a loopback-only network namespace (Linux),
# then back as the invoking uid/gid so Chromium's sandbox runs unprivileged.
set -eu
here=$(dirname "$0")
uid=$(id -u); gid=$(id -g)
exec unshare -rn sh -c 'u=$1 g=$2 s=$3; shift 3; ip link set lo up && exec unshare -U --map-user="$u" --map-group="$g" node "$s" "$@"' \
  openvision-netns "$uid" "$gid" "$here/verify-statsig-cache.mjs" "$@"
