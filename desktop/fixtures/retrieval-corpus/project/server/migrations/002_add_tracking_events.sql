CREATE TABLE tracking_events (
  id bigserial PRIMARY KEY,
  shipment_id uuid NOT NULL REFERENCES shipments (id) ON DELETE CASCADE,
  kind text NOT NULL,
  depot_code text,
  latitude double precision,
  longitude double precision,
  note text,
  occurred_at timestamptz NOT NULL,
  recorded_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX tracking_events_shipment_idx ON tracking_events (shipment_id, occurred_at);

ALTER TABLE shipments ADD COLUMN proof_of_delivery_key text;
ALTER TABLE shipments ADD COLUMN delivered_at timestamptz;
