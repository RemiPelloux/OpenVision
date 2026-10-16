import { E } from "./tslib.es6.js";
var tS, Ebi, HRp;
export { Ebi, HRp, tS };
var __wakaru_aE1_initialized = false;
export function aE1() {
if (__wakaru_aE1_initialized) return;
__wakaru_aE1_initialized = true;
"use strict";
E(), tS = {
    red: "oklch(0.577 0.215 27.325)",
    yellow: "oklch(0.681 0.142 75.834)",
    green: "oklch(0.627 0.17 149.214)",
    purple: "oklch(0.627 0.233 303.9)",
    cyan: "oklch(0.609 0.111 221.723)",
    orange: "oklch(0.646 0.194 41.116)"
}, Ebi = {
    light: {
        primary: "oklch(0 0 0 / 0.15)",
        secondary: "oklch(0 0 0 / 0.1)",
        tertiary: "oklch(0 0 0 / 0.05)"
    },
    dark: {
        primary: "oklch(0 0 0 / 0.4)",
        secondary: "oklch(0 0 0 / 0.3)",
        tertiary: "oklch(0 0 0 / 0.2)"
    }
}, HRp = {
    text: {
        primary: "var(--color-theme-text-primary)",
        secondary: "var(--color-theme-text-secondary)",
        tertiary: "var(--color-theme-text-tertiary)",
        quaternary: "var(--color-theme-text-quaternary)",
        invert: "var(--color-theme-bg)",
        active: "var(--color-theme-text-primary)",
        focused: "var(--color-theme-text-primary)",
        redPrimary: tS.red,
        redSecondary: `color-mix(in srgb, ${tS.red} 68%, transparent)`,
        yellowPrimary: tS.yellow,
        yellowSecondary: `color-mix(in srgb, ${tS.yellow} 68%, transparent)`,
        greenPrimary: tS.green,
        greenSecondary: `color-mix(in srgb, ${tS.green} 68%, transparent)`,
        magentaPrimary: tS.purple,
        magentaSecondary: `color-mix(in srgb, ${tS.purple} 68%, transparent)`,
        cyanPrimary: tS.cyan,
        cyanSecondary: `color-mix(in srgb, ${tS.cyan} 68%, transparent)`,
        orangePrimary: tS.orange,
        orangeSecondary: `color-mix(in srgb, ${tS.orange} 68%, transparent)`,
        link: "var(--color-theme-accent, oklch(0.565 0.098 243.005))"
    },
    icon: {
        primary: "color-mix(in srgb, var(--color-theme-fg) 92%, transparent)",
        secondary: "color-mix(in srgb, var(--color-theme-fg) 56%, transparent)",
        tertiary: "color-mix(in srgb, var(--color-theme-fg) 40%, transparent)",
        quaternary: "color-mix(in srgb, var(--color-theme-fg) 12%, transparent)",
        redPrimary: `color-mix(in srgb, ${tS.red} 92%, transparent)`,
        redSecondary: `color-mix(in srgb, ${tS.red} 60%, transparent)`,
        yellowPrimary: `color-mix(in srgb, ${tS.yellow} 92%, transparent)`,
        yellowSecondary: `color-mix(in srgb, ${tS.yellow} 60%, transparent)`,
        greenPrimary: `color-mix(in srgb, ${tS.green} 92%, transparent)`,
        greenSecondary: `color-mix(in srgb, ${tS.green} 60%, transparent)`,
        magentaPrimary: `color-mix(in srgb, ${tS.purple} 92%, transparent)`,
        magentaSecondary: `color-mix(in srgb, ${tS.purple} 60%, transparent)`,
        cyanPrimary: `color-mix(in srgb, ${tS.cyan} 92%, transparent)`,
        cyanSecondary: `color-mix(in srgb, ${tS.cyan} 60%, transparent)`,
        orangePrimary: `color-mix(in srgb, ${tS.orange} 92%, transparent)`,
        orangeSecondary: `color-mix(in srgb, ${tS.orange} 60%, transparent)`,
        purplePrimary: `color-mix(in srgb, ${tS.purple} 92%, transparent)`,
        purpleSecondary: `color-mix(in srgb, ${tS.purple} 60%, transparent)`,
        accentPrimary: "color-mix(in srgb, var(--color-theme-accent, oklch(0.565 0.098 243.005)) 92%, transparent)",
        accentSecondary: "color-mix(in srgb, var(--color-theme-accent, oklch(0.565 0.098 243.005)) 60%, transparent)"
    },
    bg: {
        primary: "var(--color-theme-bg-primary)",
        secondary: "var(--color-theme-bg-secondary)",
        tertiary: "var(--color-theme-bg-tertiary)",
        quaternary: "var(--color-theme-bg-quaternary)",
        quinary: "var(--bg-quinary)",
        elevated: "var(--color-theme-bg-card)",
        card: "var(--color-theme-bg-card)",
        input: "var(--color-theme-bg-card)",
        chrome: "var(--color-theme-bg-secondary)",
        editor: "var(--color-theme-bg-card)",
        sidebar: "var(--color-theme-bg-secondary)",
        diffInserted: `color-mix(in srgb, ${tS.green} 15%, transparent)`,
        diffRemoved: `color-mix(in srgb, ${tS.red} 15%, transparent)`,
        active: "var(--color-theme-bg-secondary)",
        focused: "var(--color-theme-bg-secondary)",
        redPrimary: tS.red,
        redSecondary: `color-mix(in srgb, ${tS.red} 12%, transparent)`,
        yellowPrimary: tS.yellow,
        yellowSecondary: `color-mix(in srgb, ${tS.yellow} 12%, transparent)`,
        greenPrimary: tS.green,
        greenSecondary: `color-mix(in srgb, ${tS.green} 12%, transparent)`,
        magentaPrimary: tS.purple,
        magentaSecondary: `color-mix(in srgb, ${tS.purple} 12%, transparent)`,
        cyanPrimary: tS.cyan,
        cyanSecondary: `color-mix(in srgb, ${tS.cyan} 12%, transparent)`,
        orangePrimary: tS.orange,
        orangeSecondary: `color-mix(in srgb, ${tS.orange} 12%, transparent)`,
        purplePrimary: tS.purple,
        purpleSecondary: `color-mix(in srgb, ${tS.purple} 12%, transparent)`,
        purpleTertiary: `color-mix(in srgb, ${tS.purple} 8%, transparent)`
    },
    stroke: {
        primary: "var(--color-theme-border-primary)",
        secondary: "var(--color-theme-border-secondary)",
        tertiary: "var(--color-theme-border-tertiary)",
        quaternary: "var(--color-theme-border-quaternary)",
        focused: "var(--color-theme-accent)",
        accent: "color-mix(in srgb, var(--color-theme-accent, oklch(0.565 0.098 243.005)) 56%, transparent)",
        redPrimary: `color-mix(in srgb, ${tS.red} 56%, transparent)`,
        redSecondary: `color-mix(in srgb, ${tS.red} 32%, transparent)`,
        yellowPrimary: `color-mix(in srgb, ${tS.yellow} 56%, transparent)`,
        yellowSecondary: `color-mix(in srgb, ${tS.yellow} 32%, transparent)`,
        greenPrimary: `color-mix(in srgb, ${tS.green} 56%, transparent)`,
        greenSecondary: `color-mix(in srgb, ${tS.green} 32%, transparent)`,
        magentaPrimary: `color-mix(in srgb, ${tS.purple} 56%, transparent)`,
        magentaSecondary: `color-mix(in srgb, ${tS.purple} 32%, transparent)`,
        cyanPrimary: `color-mix(in srgb, ${tS.cyan} 56%, transparent)`,
        cyanSecondary: `color-mix(in srgb, ${tS.cyan} 32%, transparent)`,
        orangePrimary: `color-mix(in srgb, ${tS.orange} 56%, transparent)`,
        orangeSecondary: `color-mix(in srgb, ${tS.orange} 32%, transparent)`
    },
    shadow: {
        primary: Ebi.light.primary,
        secondary: Ebi.light.secondary,
        tertiary: Ebi.light.tertiary
    },
    boxShadow: {
        sm: "0 2px 8px 0px var(--cursor-shadow-secondary)",
        base: "0 0 8px 2px var(--cursor-shadow-primary)",
        soft: "0 0 8px 2px var(--cursor-shadow-tertiary)",
        popup: "0 3px 8px var(--cursor-shadow-secondary), 0 2px 5px var(--cursor-shadow-secondary), 0 1px 1px var(--cursor-shadow-secondary)",
        lg: "0 0 4px 0 oklch(1 0 0 / 0.05) inset, 0 0 3px 0 var(--cursor-shadow-secondary), 0 16px 24px 0 var(--cursor-shadow-tertiary)",
        xl: "0 0 4px 0 oklch(1 0 0 / 0.05) inset, 0 0 6px 8px var(--cursor-shadow-secondary), 0 24px 16px 6px var(--cursor-shadow-tertiary)",
        workbench: "var(--color-theme-shadow-card)"
    },
    fontFamily: {
        sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
    },
    scrollbar: {
        verticalSize: "14px",
        horizontalSize: "12px",
        thumbBackground: "color-mix(in srgb, var(--color-theme-fg) 20%, transparent)",
        thumbHoverBackground: "color-mix(in srgb, var(--color-theme-fg) 30%, transparent)",
        thumbActiveBackground: "color-mix(in srgb, var(--color-theme-fg) 40%, transparent)"
    },
    syntax: {
        foreground: "oklch(0.878 0.01 286.202)",
        background: "oklch(0.209 0 0)",
        keyword: "oklch(0.811 0.079 191.639)",
        string: "oklch(0.769 0.132 329.919)",
        function: "oklch(0.805 0.097 58.138)",
        number: "oklch(0.849 0.086 80.222)",
        comment: "oklch(0.565 0.019 250.968)",
        constant: "oklch(0.854 0.131 83.385)",
        parameter: "oklch(0.878 0.01 286.202)",
        punctuation: "oklch(0.878 0.01 286.202)",
        link: "oklch(0.799 0.106 249.274)",
        stringExpression: "oklch(0.769 0.132 329.919)"
    },
    button: {
        background: "var(--color-theme-bg-button, var(--color-theme-bg-primary))",
        foreground: "var(--color-theme-button-text, var(--color-theme-text-inverted))",
        hoverBackground: "var(--color-theme-bg-button-hover, var(--color-theme-fg-02))",
        secondaryBackground: "var(--color-theme-bg-secondary)",
        secondaryForeground: "var(--color-theme-text-primary)",
        secondaryHoverBackground: "var(--color-theme-bg-tertiary)"
    }
};

}
