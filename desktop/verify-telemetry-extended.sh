#!/bin/sh
# Run the extended telemetry verifier inside a loopback-only network namespace
# (Linux). No packet can leave the host from the owned process family; DNS
# names still reach systemd-resolved over its Unix socket and are recorded.
# The outer namespace maps root only to bring `lo` up, then drops back to the
# invoking uid/gid so Chromium's sandbox runs unprivileged.
set -eu
here=$(dirname "$0")
uid=$(id -u); gid=$(id -g)
# Name lookups go to a recording resolver on 127.0.0.53 (started by the
# verifier, answers NXDOMAIN), so they are observed even where no
# systemd-resolved socket exists; a non-loopback address keeps getaddrinfo's
# AI_ADDRCONFIG from suppressing IPv4 lookups.
resolv=$(mktemp); printf 'nameserver 127.0.0.53\n' > "$resolv"
exec unshare -rnm sh -c 'u=$1 g=$2 s=$3 r=$4; shift 4; ip link set lo up && ip addr add 198.18.0.2/32 dev lo &&
  echo 0 > /proc/sys/net/ipv4/ip_unprivileged_port_start && mount --bind "$r" /etc/resolv.conf &&
  exec unshare -U --map-user="$u" --map-group="$g" node "$s" "$@"' \
  openvision-netns "$uid" "$gid" "$here/verify-telemetry-extended.mjs" "$resolv" --netns "$@"
