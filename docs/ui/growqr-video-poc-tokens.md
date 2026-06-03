# GrowQR Video POC Token Spec

## 1) Token Architecture

Use three layers:

1. **Primitive tokens:** raw values
2. **Semantic tokens:** mapped to role (`text-primary`, `surface-raised`)
3. **Component tokens:** local component controls (`growth-switch-height`)

## 2) Color Tokens (Light Mode First, oklch)

```css
:root {
  /* Neutrals */
  --gq-neutral-50: oklch(0.985 0.004 250);
  --gq-neutral-100: oklch(0.97 0.005 250);
  --gq-neutral-200: oklch(0.93 0.007 250);
  --gq-neutral-300: oklch(0.87 0.009 250);
  --gq-neutral-500: oklch(0.56 0.01 250);
  --gq-neutral-700: oklch(0.34 0.012 250);
  --gq-neutral-900: oklch(0.18 0.012 250);

  /* Brand and semantic */
  --gq-accent-500: oklch(0.56 0.17 250);   /* trust blue */
  --gq-accent-600: oklch(0.49 0.16 250);
  --gq-readiness-500: oklch(0.78 0.14 85); /* amber */
  --gq-success-500: oklch(0.66 0.16 150);  /* success */
  --gq-danger-500: oklch(0.58 0.2 25);     /* error */

  /* Semantic */
  --color-text-primary: var(--gq-neutral-900);
  --color-text-secondary: var(--gq-neutral-700);
  --color-text-tertiary: var(--gq-neutral-500);
  --color-text-inverse: oklch(0.98 0.004 250);

  --color-surface-base: var(--gq-neutral-50);
  --color-surface-raised: oklch(1 0 0);
  --color-surface-inset: var(--gq-neutral-100);
  --color-surface-selected: oklch(0.96 0.01 250);

  --color-border-subtle: oklch(0 0 0 / 0.05);
  --color-border-default: oklch(0 0 0 / 0.08);
  --color-border-strong: oklch(0 0 0 / 0.12);
  --color-border-focus: var(--gq-accent-500);

  --color-accent: var(--gq-accent-500);
  --color-accent-hover: var(--gq-accent-600);
  --color-success: var(--gq-success-500);
  --color-warning: var(--gq-readiness-500);
  --color-destructive: var(--gq-danger-500);
}
```

## 3) Typography Tokens

```css
:root {
  --font-sans: "Plus Jakarta Sans", "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;

  --font-size-xs: 0.75rem;     /* 12 */
  --font-size-sm: 0.8125rem;   /* 13 */
  --font-size-base: 0.875rem;  /* 14 */
  --font-size-md: 1rem;        /* 16 */
  --font-size-lg: 1.125rem;    /* 18 */
  --font-size-xl: 1.25rem;     /* 20 */

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
}
```

## 4) Spacing and Radius Tokens

```css
:root {
  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 20px;
  --radius-full: 9999px;
}
```

## 5) Depth Tokens (Subtle Shadow Strategy)

```css
:root {
  --shadow-sm: 0 1px 2px oklch(0 0 0 / 0.05);
  --shadow-md: 0 2px 6px oklch(0 0 0 / 0.07);
  --shadow-lg: 0 6px 14px oklch(0 0 0 / 0.1);
}
```

Usage:
- Cards default: `--shadow-sm`
- Active/hover emphasis: `--shadow-md`
- Temporary floating panels only: `--shadow-lg`

## 6) Motion Tokens

```css
:root {
  --dur-fast: 150ms;
  --dur-medium: 200ms;
  --dur-slow: 250ms;

  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
}
```

## 7) Component Tokens

```css
:root {
  --top-rail-height: 56px;
  --growth-switch-height: 40px;
  --growth-switch-radius: var(--radius-full);

  --filter-chip-height: 32px;
  --filter-chip-radius: var(--radius-full);
  --filter-chip-padding-x: 12px;

  --video-card-radius: var(--radius-lg);
  --video-card-padding: var(--space-4);
  --video-card-gap: var(--space-3);

  --duration-pill-height: 24px;
  --duration-pill-padding-x: 8px;
  --duration-pill-radius: var(--radius-full);
}
```

## 8) Dark Mode Readiness (Deferred, Not Default)

Dark theme is not primary for this POC, but semantic override support should remain available:

```css
:root[data-theme="dark"] {
  --color-surface-base: oklch(0.11 0.01 250);
  --color-surface-raised: oklch(0.15 0.01 250);
  --color-text-primary: oklch(0.93 0.005 250);
  --color-border-default: oklch(1 0 0 / 0.08);
}
```

## 9) Token Completeness Checklist

- Text hierarchy: primary/secondary/tertiary/inverse
- Surface roles: base/raised/inset/selected
- Border hierarchy: subtle/default/strong/focus
- Brand and semantic accents: accent/success/warning/destructive
- Spacing scale: 4px baseline to 48px
- Radius scale: 8/12/16/20/full
- Motion scale and easing tokens
