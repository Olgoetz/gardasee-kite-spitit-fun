import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kite-Spirit-Fun Camp 2024",
    short_name: "Kitecamp",
    description: "Kite-Spirit-Fun Camp 2024 am Gardasee mit Michael Süßbauer",
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
