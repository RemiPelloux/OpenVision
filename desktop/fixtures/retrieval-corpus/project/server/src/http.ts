// Minimal HTTP types shared by middleware and routes. The real server adapts
// node:http requests into this shape in index.ts.

export interface Request {
  method: string;
  path: string;
  ip: string;
  headers: Record<string, string | undefined>;
  query: Record<string, string | undefined>;
  params: Record<string, string>;
  body?: unknown;
  rawBodyLength?: number;
  user?: { id: string; role: string };
  requestId?: string;
}

export interface Response {
  statusCode: number;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
  send(body: string | Buffer): void;
}

export type NextFunction = (err?: unknown) => void;

export type Handler = (req: Request, res: Response, next: NextFunction) => void | Promise<void>;

export interface Route {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  pattern: string;
  handlers: Handler[];
}

export function matchRoute(pattern: string, path: string): Record<string, string> | null {
  const patternParts = pattern.split("/").filter(Boolean);
  const pathParts = path.split("?")[0].split("/").filter(Boolean);
  if (patternParts.length !== pathParts.length) return null;
  const params: Record<string, string> = {};
  for (let i = 0; i < patternParts.length; i++) {
    const expected = patternParts[i];
    const actual = pathParts[i];
    if (expected.startsWith(":")) {
      params[expected.slice(1)] = decodeURIComponent(actual);
    } else if (expected !== actual) {
      return null;
    }
  }
  return params;
}
