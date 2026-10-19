import { trackParcel, ApiError } from "./api.js";
import { LiveUpdates } from "./liveUpdates.js";
import { statusLabel, formatRelativeTime, debounce } from "./formatters.js";

const THEME_KEY = "harbor.theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* storage may be unavailable */
  }
}

function initThemeToggle(button) {
  let saved = null;
  try {
    saved = localStorage.getItem(THEME_KEY);
  } catch {
    saved = null;
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));
  button.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    button.setAttribute("aria-pressed", String(document.documentElement.dataset.theme === "dark"));
  });
}

function renderResult(container, result) {
  container.replaceChildren();
  const heading = document.createElement("h2");
  heading.textContent = result.trackingNumber;
  const status = document.createElement("p");
  status.className = `status status--${result.status}`;
  status.textContent = statusLabel(result.status);
  const created = document.createElement("p");
  created.className = "muted";
  created.textContent = `Created ${formatRelativeTime(result.createdAt)}`;
  container.append(heading, status, created);
  container.focus();
}

function announce(region, message) {
  region.textContent = "";
  window.requestAnimationFrame(() => {
    region.textContent = message;
  });
}

export function main() {
  const form = document.querySelector("#track-form");
  const input = document.querySelector("#tracking-input");
  const output = document.querySelector("#result");
  const liveRegion = document.querySelector("#announcer");
  initThemeToggle(document.querySelector("#theme-toggle"));

  const live = new LiveUpdates(`${location.origin.replace(/^http/, "ws")}/ws`, (update) => {
    renderResult(output, update);
    announce(liveRegion, `Status changed to ${statusLabel(update.status)}`);
  });
  live.connect();

  input.addEventListener(
    "input",
    debounce(() => {
      input.setAttribute("aria-invalid", String(!/^HBR\d{11}$/i.test(input.value.trim())));
    }, 200),
  );

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const result = await trackParcel(input.value);
      renderResult(output, result);
      live.follow(result.trackingNumber);
    } catch (err) {
      const message = err instanceof ApiError && err.status === 404 ? "We could not find that parcel." : "Something went wrong.";
      announce(liveRegion, message);
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
