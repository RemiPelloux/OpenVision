#!/usr/bin/env bash
# Points every host back at the previous release directory and restarts services.
set -euo pipefail

ENVIRONMENT="${1:?usage: rollback.sh <staging|production>}"
HOSTS_FILE="$(dirname "$0")/hosts.${ENVIRONMENT}"

previous_release() {
  ssh "$1" "ls -1dt /srv/harbor/v* | sed -n 2p"
}

while read -r host; do
  [[ -z "$host" || "$host" == \#* ]] && continue
  target="$(previous_release "$host")"
  if [[ -z "$target" ]]; then
    echo "no previous release on ${host}" >&2
    exit 1
  fi
  echo "rolling ${host} back to ${target}"
  ssh "$host" "ln -sfn ${target} /srv/harbor/current && sudo systemctl restart harbor-api harbor-worker"
done < "$HOSTS_FILE"

echo "rollback complete; database migrations are NOT reverted automatically"
