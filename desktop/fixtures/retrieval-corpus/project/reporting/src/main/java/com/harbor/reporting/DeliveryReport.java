package com.harbor.reporting;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/** Aggregates delivered shipments into one row per depot per day. */
public class DeliveryReport {

    public record ShipmentRecord(
            String trackingNumber,
            String depotCode,
            ZonedDateTime pickedUpAt,
            ZonedDateTime deliveredAt,
            BigDecimal price,
            String currency) {}

    public record DepotDay(
            String depotCode,
            LocalDate day,
            int delivered,
            double averageTransitHours,
            BigDecimal revenue,
            String currency) {}

    private final ZoneId reportingZone;

    public DeliveryReport(ZoneId reportingZone) {
        this.reportingZone = reportingZone;
    }

    public List<DepotDay> summarizeByDepot(List<ShipmentRecord> shipments) {
        Map<String, List<ShipmentRecord>> groups = new TreeMap<>();
        for (ShipmentRecord s : shipments) {
            if (s.deliveredAt() == null) {
                continue;
            }
            LocalDate day = s.deliveredAt().withZoneSameInstant(reportingZone).toLocalDate();
            String key = s.depotCode() + "|" + day + "|" + s.currency();
            groups.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }

        List<DepotDay> rows = new ArrayList<>();
        for (Map.Entry<String, List<ShipmentRecord>> entry : groups.entrySet()) {
            String[] parts = entry.getKey().split("\\|");
            List<ShipmentRecord> group = entry.getValue();
            double totalHours = 0;
            BigDecimal revenue = BigDecimal.ZERO;
            for (ShipmentRecord s : group) {
                totalHours += Duration.between(s.pickedUpAt(), s.deliveredAt()).toMinutes() / 60.0;
                revenue = revenue.add(s.price());
            }
            rows.add(new DepotDay(
                    parts[0],
                    LocalDate.parse(parts[1]),
                    group.size(),
                    Math.round(totalHours / group.size() * 10) / 10.0,
                    PriceRounding.roundToCurrency(revenue, parts[2]),
                    parts[2]));
        }
        rows.sort(Comparator.comparing(DepotDay::day).thenComparing(DepotDay::depotCode));
        return rows;
    }
}
