import type { Handler, Request, Response, NextFunction, Route } from "../http";
import { AuthError } from "../errors";
import { extractBearerToken, type TokenSigner } from "../auth/tokenSigner";
import { validateBody, isValidTrackingNumber } from "../utils/validation";
import { parsePageRequest } from "../utils/pagination";
import type { ShipmentService, ShipmentStatus } from "../services/shipmentService";
import { enforceUploadLimit } from "../middleware/uploadLimit";

export function requireAuth(signer: TokenSigner, roles?: string[]): Handler {
  return (req: Request, _res: Response, next: NextFunction) => {
    const token = extractBearerToken(req.headers.authorization);
    if (!token) {
      next(new AuthError("missing bearer token"));
      return;
    }
    try {
      const claims = signer.verifyAccessToken(token);
      if (roles && !roles.includes(claims.role)) {
        next(new AuthError("insufficient role", "forbidden"));
        return;
      }
      req.user = { id: claims.sub, role: claims.role };
      next();
    } catch (err) {
      next(err);
    }
  };
}

export function shipmentRoutes(service: ShipmentService, signer: TokenSigner): Route[] {
  return [
    {
      method: "GET",
      pattern: "/v1/shipments",
      handlers: [
        requireAuth(signer),
        async (req, res) => {
          const page = await service.listForCustomer(req.user!.id, parsePageRequest(req.query));
          res.json(page);
        },
      ],
    },
    {
      method: "GET",
      pattern: "/v1/track/:trackingNumber",
      handlers: [
        async (req, res) => {
          const trackingNumber = req.params.trackingNumber.toUpperCase();
          if (!isValidTrackingNumber(trackingNumber)) {
            res.statusCode = 400;
            res.json({ error: { code: "bad_tracking_number" } });
            return;
          }
          const shipment = await service.getByTrackingNumber(trackingNumber);
          res.json({ trackingNumber, status: shipment.status, createdAt: shipment.createdAt });
        },
      ],
    },
    {
      method: "PATCH",
      pattern: "/v1/shipments/:trackingNumber/status",
      handlers: [
        requireAuth(signer, ["courier", "dispatcher", "admin"]),
        async (req, res) => {
          const body = validateBody<{ status: ShipmentStatus }>(req.body, {
            status: {
              kind: "enum",
              required: true,
              values: ["picked_up", "in_transit", "out_for_delivery", "delivered", "failed"],
            },
          });
          res.json(await service.updateStatus(req.params.trackingNumber, body.status));
        },
      ],
    },
    {
      method: "POST",
      pattern: "/v1/shipments/:trackingNumber/proof",
      handlers: [
        requireAuth(signer, ["courier"]),
        enforceUploadLimit({ maxBytes: 5 * 1024 * 1024 }),
        async (_req, res) => {
          res.statusCode = 202;
          res.json({ accepted: true });
        },
      ],
    },
  ];
}
