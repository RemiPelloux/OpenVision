import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { join } from "node:path";
import { loadConfig } from "./config/loadConfig";
import { TokenSigner } from "./auth/tokenSigner";
import { NotificationHub } from "./services/notificationHub";
import { ShipmentService } from "./services/shipmentService";
import { shipmentRoutes } from "./routes/shipments";
import { livenessHandler, readinessHandler, databaseCheck } from "./routes/health";
import { rateLimit } from "./middleware/rateLimiter";
import { matchRoute, type Handler, type Request, type Response, type Route } from "./http";
import { toHttpError } from "./errors";
import { rootLogger } from "./logging/logger";
import type { SqlClient } from "./db/migrate";

function adaptResponse(raw: ServerResponse): Response {
  return {
    get statusCode() {
      return raw.statusCode;
    },
    set statusCode(code: number) {
      raw.statusCode = code;
    },
    setHeader: (name, value) => raw.setHeader(name, value),
    json: (body) => {
      raw.setHeader("Content-Type", "application/json");
      raw.end(JSON.stringify(body));
    },
    send: (body) => raw.end(body),
  };
}

async function runChain(handlers: Handler[], req: Request, res: Response): Promise<void> {
  let index = 0;
  const next = async (err?: unknown): Promise<void> => {
    if (err) throw err;
    const handler = handlers[index++];
    if (handler) await handler(req, res, (e) => void next(e).catch((inner) => sendError(res, inner)));
  };
  await next();
}

function sendError(res: Response, err: unknown): void {
  const httpError = toHttpError(err);
  res.statusCode = httpError.status;
  res.json(httpError.toJSON());
}

export function startServer(db: SqlClient): void {
  const config = loadConfig(join(__dirname, "..", "..", "config"));
  const signer = new TokenSigner({
    secret: config.auth.signingSecret,
    issuer: config.auth.issuer,
    ttlSeconds: config.auth.tokenTtlSeconds,
  });
  const hub = new NotificationHub();
  hub.start();
  const service = new ShipmentService(db, hub);
  const limiter = rateLimit(config.rateLimit);

  const routes: Route[] = [
    { method: "GET", pattern: "/healthz", handlers: [livenessHandler] },
    { method: "GET", pattern: "/readyz", handlers: [readinessHandler([databaseCheck(db)])] },
    ...shipmentRoutes(service, signer).map((r) => ({ ...r, handlers: [limiter, ...r.handlers] })),
  ];

  const server = createServer(async (raw: IncomingMessage, rawRes: ServerResponse) => {
    const res = adaptResponse(rawRes);
    const url = new URL(raw.url ?? "/", "http://localhost");
    for (const route of routes) {
      const params = raw.method === route.method ? matchRoute(route.pattern, url.pathname) : null;
      if (!params) continue;
      const req: Request = {
        method: raw.method ?? "GET",
        path: url.pathname,
        ip: raw.socket.remoteAddress ?? "unknown",
        headers: raw.headers as Record<string, string | undefined>,
        query: Object.fromEntries(url.searchParams),
        params,
      };
      try {
        await runChain(route.handlers, req, res);
      } catch (err) {
        sendError(res, err);
      }
      return;
    }
    res.statusCode = 404;
    res.json({ error: { code: "not_found" } });
  });

  server.listen(config.port, () => rootLogger.info("harbor api listening", { port: config.port }));
  process.on("SIGTERM", () => {
    hub.stop();
    server.close();
  });
}
