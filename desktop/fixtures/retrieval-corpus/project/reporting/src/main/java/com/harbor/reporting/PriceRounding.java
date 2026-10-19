package com.harbor.reporting;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Currency;

/** Money helpers for invoices: every amount is rounded once, at the end. */
public final class PriceRounding {

    private PriceRounding() {}

    /**
     * Rounds an amount to the currency's minor unit using half-even rounding,
     * so long columns of totals do not drift upwards.
     */
    public static BigDecimal roundToCurrency(BigDecimal amount, String currencyCode) {
        int digits = Currency.getInstance(currencyCode).getDefaultFractionDigits();
        return amount.setScale(Math.max(0, digits), RoundingMode.HALF_EVEN);
    }

    public static BigDecimal applyVat(BigDecimal net, BigDecimal ratePercent) {
        BigDecimal factor = BigDecimal.ONE.add(ratePercent.movePointLeft(2));
        return net.multiply(factor);
    }

    public static long toMinorUnits(BigDecimal amount, String currencyCode) {
        BigDecimal rounded = roundToCurrency(amount, currencyCode);
        return rounded.movePointRight(rounded.scale()).longValueExact();
    }
}
