#!/bin/sh
# Run the extended telemetry verifier inside a loopback-only network namespace
# (Linux). No packet can leave the host from the owned process family; DNS
# names still reach systemd-resolved over its Unix socket and are recorded.
# The outer namespace maps root only to bring `lo` up, then drops back to the
# invoking uid/gid so Chromium's sandbox runs unprivileged.
set -eu
here=$(dirname "$0")
uid=$(id -u); gid=$(id -g)
exec unshare -rn sh -c 'u=$1 g=$2 s=$3; shift 3; ip link set lo up && exec unshare -U --map-user="$u" --map-group="$g" node "$s" "$@"' \
  openvision-netns "$uid" "$gid" "$here/verify-telemetry-extended.mjs" --netns "$@"
