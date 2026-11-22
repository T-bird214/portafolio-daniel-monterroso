import { ImageResponse } from "next/og";
import { contact, seo } from "@/data/profile";

export const runtime = "edge";
export const alt = seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#0d0f14",
        color: "#f5f3ee",
      }}
    >
      <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#e8b04f" }}>
        {`Fundador de EvoNest · ${contact.location}`}
      </div>
      <div style={{ fontSize: 72, fontWeight: 500, marginTop: 24 }}>{contact.fullName}</div>
      <div style={{ fontSize: 28, marginTop: 24, color: "#a9afbd", maxWidth: 900 }}>
        Operaciones, CRM y automatización · HubSpot · n8n · IA
      </div>
    </div>,
    { ...size },
  );
}
