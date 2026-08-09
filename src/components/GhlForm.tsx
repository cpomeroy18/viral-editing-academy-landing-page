import { site } from "../config";

interface Props {
  formUrl?: string;
  formName?: string;
  height?: number;
  /** Disambiguates multiple copies of the same form on one page (e.g. desktop + mobile). */
  instanceId?: string;
  /** Set false on repeated instances so the embed script only loads once per page. */
  loadScript?: boolean;
}

// Go High Level form widget - a plain iframe embed, no client-side state needed.
export default function GhlForm({
  formUrl = site.ghlFormUrl,
  formName = site.ghlFormName,
  height = 400,
  instanceId = "a",
  loadScript = true,
}: Props) {
  const formId = formUrl.split("/").pop() ?? "";
  const domId = `inline-${formId}-${instanceId}`;
  const scriptSrc = `${new URL(formUrl).origin}/js/form_embed.js`;

  return (
    <>
      <iframe
        src={formUrl}
        style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "3px" }}
        id={domId}
        data-ghl-form
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={height}
        data-layout-iframe-id={domId}
        data-form-id={formId}
        title={formName}
      />
      {loadScript && <script src={scriptSrc} />}
    </>
  );
}
