import { ImageResponse } from "next/og";
import { organization } from "@/data/organization";

export const alt = "WayToMoksha — Enlightenment Through Dreams";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#F6F0E6",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#0F8A80",
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          {organization.brandName}
        </div>
        <div
          style={{
            display: "flex",
            color: "#2C3324",
            fontSize: 64,
            fontWeight: 600,
            marginTop: 20,
            lineHeight: 1.15,
          }}
        >
          {organization.heroHeadline}
        </div>
        <div
          style={{
            display: "flex",
            color: "#5E675C",
            fontSize: 26,
            marginTop: 28,
          }}
        >
          {`Official website of ${organization.legalName}`}
        </div>
      </div>
    ),
    size,
  );
}
