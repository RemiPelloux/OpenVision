#!/usr/bin/env bash
# Rolling deploy of the Harbor API and worker to the staging or production hosts.
set -euo pipefail

ENVIRONMENT="${1:?usage: deploy.sh <staging|production> <version>}"
VERSION="${2:?usage: deploy.sh <staging|production> <version>}"
HOSTS_FILE="$(dirname "$0")/hosts.${ENVIRONMENT}"
HEALTH_TIMEOUT=60

log() { printf '[deploy %s] %s\n' "$(date -u +%H:%M:%S)" "$*"; }

wait_for_ready() {
  local host="$1" deadline=$((SECONDS + HEALTH_TIMEOUT))
  until curl -fsS "http://${host}:8080/readyz" >/dev/null; do
    if (( SECONDS > deadline )); then
      log "${host} did not become ready within ${HEALTH_TIMEOUT}s"
      return 1
    fi
    sleep 3
  done
}

[[ -f "$HOSTS_FILE" ]] || { log "missing $HOSTS_FILE"; exit 1; }

log "running database migrations for ${VERSION}"
ssh "$(head -n1 "$HOSTS_FILE")" "cd /srv/harbor/${VERSION} && npm run migrate"

while read -r host; do
  [[ -z "$host" || "$host" == \#* ]] && continue
  log "draining ${host}"
  ssh "$host" "sudo systemctl reload harbor-lb-drain@${host}"
  log "switching ${host} to ${VERSION}"
  ssh "$host" "ln -sfn /srv/harbor/${VERSION} /srv/harbor/current && sudo systemctl restart harbor-api harbor-worker"
  if ! wait_for_ready "$host"; then
    log "aborting; run scripts/rollback.sh ${ENVIRONMENT} to restore the previous release"
    exit 1
  fi
done < "$HOSTS_FILE"

log "deployed ${VERSION} to ${ENVIRONMENT}"
