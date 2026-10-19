import type { Request, Response, NextFunction } from "../http";
import { PayloadTooLargeError, ValidationError } from "../errors";

const ALLOWED_PROOF_TYPES = new Set(["image/jpeg", "image/png", "application/pdf"]);

export interface UploadLimitOptions {
  maxBytes: number;
  allowedTypes?: Set<string>;
}

/**
 * Rejects proof-of-delivery uploads that are too big or of an unexpected
 * content type before the body is buffered.
 */
export function enforceUploadLimit(options: UploadLimitOptions) {
  const allowed = options.allowedTypes ?? ALLOWED_PROOF_TYPES;

  return function uploadLimit(req: Request, _res: Response, next: NextFunction): void {
    const declared = Number(req.headers["content-length"] ?? "0");
    if (Number.isNaN(declared)) {
      next(new ValidationError("content-length header is not a number"));
      return;
    }
    if (declared > options.maxBytes || (req.rawBodyLength ?? 0) > options.maxBytes) {
      next(new PayloadTooLargeError(options.maxBytes));
      return;
    }
    const contentType = (req.headers["content-type"] ?? "").split(";")[0].trim().toLowerCase();
    if (!allowed.has(contentType)) {
      next(new ValidationError("unsupported upload type", { contentType }));
      return;
    }
    next();
  };
}

export function formatBytes(bytes: number): string {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit++;
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
}
