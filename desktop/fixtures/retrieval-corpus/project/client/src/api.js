const API_BASE = window.HARBOR_API_BASE || "/v1";

export class ApiError extends Error {
  constructor(status, code, message) {
    super(message || code);
    this.status = status;
    this.code = code;
  }
}

function readStoredToken() {
  try {
    return window.sessionStorage.getItem("harbor.accessToken");
  } catch {
    return null;
  }
}

async function request(method, path, body) {
  const headers = { Accept: "application/json" };
  const token = readStoredToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (body !== undefined) headers["Content-Type"] = "application/json";

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    credentials: "same-origin",
  });
  const payload = response.status === 204 ? null : await response.json().catch(() => null);
  if (!response.ok) {
    const code = payload && payload.error ? payload.error.code : "http_error";
    throw new ApiError(response.status, code, payload && payload.error ? payload.error.message : undefined);
  }
  return payload;
}

export function trackParcel(trackingNumber) {
  return request("GET", `/track/${encodeURIComponent(trackingNumber.trim().toUpperCase())}`);
}

export async function listAllShipments(onPage) {
  let pageToken = null;
  const all = [];
  do {
    const query = pageToken ? `?limit=50&pageToken=${encodeURIComponent(pageToken)}` : "?limit=50";
    const page = await request("GET", `/shipments${query}`);
    all.push(...page.items);
    if (onPage) onPage(page.items);
    pageToken = page.nextPageToken;
  } while (pageToken);
  return all;
}

export function updateShipmentStatus(trackingNumber, status) {
  return request("PATCH", `/shipments/${encodeURIComponent(trackingNumber)}/status`, { status });
}
