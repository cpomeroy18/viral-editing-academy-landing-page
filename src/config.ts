// ============================================================
// Time to Build Funnel Kit - site config
// Students edit these values (or run /brand-setup).
// ============================================================

export const site = {
  name: "Viral Editing Academy",
  description: "Helping creators edit viral short-form content",

  // Your Kit (ConvertKit) form ID. The lead form subscribes people to this form,
  // which triggers whatever sequence/automation you connect to it in Kit.
  // Find it in your form's embed URL: app.kit.com/forms/XXXXXXX/...  -> XXXXXXX is the ID.
  kitFormId: "YOUR_KIT_FORM_ID",

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
