// ============================================================
// Time to Build Funnel Kit - site config
// Students edit these values (or run /brand-setup).
// ============================================================

export const site = {
  name: "Viral Editing Academy",
  description: "Helping creators edit viral short-form content",

  // Your Go High Level (GHL) form embed URL - the `src` from your form's
  // embed snippet (link.contentcreatormachine.com/widget/form/XXXXXXX).
  ghlFormUrl: "https://link.contentcreatormachine.com/widget/form/Sg8rL0t55eWESmBmeSsc",
  ghlFormName: "Viral Content System Email Course",

  // Where your offer-page CTAs send people (your Stripe / checkout link).
  checkoutUrl: "https://buy.stripe.com/14AeVcfv03FH2sl1GDbo400",

  // Default colour theme for your site: "light" or "dark".
  // (Drop in <ThemeToggle /> if you want visitors to switch.)
  theme: "dark" as "light" | "dark",

  // Quick accent preset (just the brand hue). Preview on /showcase.
  preset: "teal" as "teal" | "blue" | "violet" | "orange" | "sage",

  // Full theme - a complete palette (surfaces + text + accent), light & dark.
  // "default" is the baseline; others are defined in global.css and previewed
  // in the Customise Theme panel.
  themePreset: "brutalist" as
    | "default"
    | "sage"
    | "nature"
    | "brutalist"
    | "linen"
    | "amber"
    | "retro"
    | "ocean",
};
