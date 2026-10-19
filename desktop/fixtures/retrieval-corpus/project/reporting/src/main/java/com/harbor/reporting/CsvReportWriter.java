package com.harbor.reporting;

import java.io.IOException;
import java.io.Writer;
import java.util.List;

/** Writes depot summaries as RFC 4180 CSV for the monthly finance pack. */
public class CsvReportWriter {

    private static final String HEADER = "depot,day,delivered,avg_transit_hours,revenue,currency";

    static String escapeField(String value) {
        if (value == null) {
            return "";
        }
        boolean needsQuotes = value.contains(",") || value.contains("\"") || value.contains("\n");
        String escaped = value.replace("\"", "\"\"");
        if (!escaped.isEmpty() && "=+-@".indexOf(escaped.charAt(0)) >= 0) {
            escaped = "'" + escaped;
        }
        return needsQuotes ? "\"" + escaped + "\"" : escaped;
    }

    public void write(List<DeliveryReport.DepotDay> rows, Writer out) throws IOException {
        out.write(HEADER);
        out.write("\n");
        for (DeliveryReport.DepotDay row : rows) {
            out.write(String.join(",",
                    escapeField(row.depotCode()),
                    row.day().toString(),
                    Integer.toString(row.delivered()),
                    Double.toString(row.averageTransitHours()),
                    row.revenue().toPlainString(),
                    row.currency()));
            out.write("\n");
        }
        out.flush();
    }
}
