#!/bin/sh
# OV-501 capture namespace. Run as root of a fresh user+network+mount
# namespace (`unshare --map-root-user --net --mount`). It has no route off
# the machine: every IPv4/IPv6 address is local, DNS answers come from the
# verifier, and name lookups cannot reach the host resolver. The command then
# runs as the original user id in a nested user namespace.
# Usage: data-destinations-namespace.sh <run-dir> <uid> <gid> <command...>
set -eu
dir=$1; uid=$2; gid=$3; shift 3
ip link set lo up
ip route add local 0.0.0.0/0 dev lo
ip -6 route add local ::/0 dev lo 2>/dev/null || true
# A non-loopback address: with only 127.0.0.1, getaddrinfo's AI_ADDRCONFIG
# suppresses IPv4 lookups, so a name was never resolved or connected.
ip addr add 198.18.0.2/32 dev lo
echo 0 > /proc/sys/net/ipv4/ip_unprivileged_port_start
printf 'nameserver 127.0.0.53\noptions edns0\n' > "$dir/resolv.conf"
sed -E 's/^hosts:.*/hosts: files dns/' /etc/nsswitch.conf > "$dir/nsswitch.conf"
mount --bind "$dir/resolv.conf" /etc/resolv.conf
mount --bind "$dir/nsswitch.conf" /etc/nsswitch.conf
# Host resolver sockets would bypass the namespace through the filesystem.
for socket_dir in /run/systemd/resolve /run/avahi-daemon /run/systemd/machine; do
  [ -d "$socket_dir" ] && mount -t tmpfs openvision-capture "$socket_dir"
done
# Redirect TCP to any non-loopback port other than 80/443 to the catch-all.
if nft add table ip openvision_capture 2>/dev/null; then
  nft add chain ip openvision_capture output '{ type nat hook output priority -100; }'
  nft add rule ip openvision_capture output ip daddr != 127.0.0.0/8 tcp dport != '{ 80, 443 }' redirect to :9999
  echo nft > "$dir/namespace-redirect"
else
  echo none > "$dir/namespace-redirect"
fi
capture=
if command -v tcpdump >/dev/null 2>&1; then
  # -Z root: stay the namespace's mapped root; dropping to a 'tcpdump' user
  # fails where that user has no mapping in the user namespace.
  tcpdump -Z root -i lo -U -n -w "$dir/bypass.pcap" 'not net 127.0.0.0/8 and not ip6 host ::1' 2>"$dir/tcpdump.log" &
  capture=$!
fi
status=0
unshare --user --map-user="$uid" --map-group="$gid" "$@" || status=$?
# tcpdump exits early when it cannot capture (for example as an unprivileged user);
# a capture that already ended must not turn a passing run into a failure.
if [ -n "$capture" ]; then kill "$capture" 2>/dev/null || true; wait "$capture" || true; fi
exit "$status"
