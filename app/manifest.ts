import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kite-Spirit-Fun Camp 2025",
    short_name: "Kitecamp",
    description:
      "Kite-Spirit-Fun Camp 2025 in Soma Bay (Ägypten) mit Michaela Süßbauer",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
