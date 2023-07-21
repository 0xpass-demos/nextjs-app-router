import "0xpass/styles.css";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Create 0xPass App",
  description: "Generated by create-0xpass-app",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
      <html lang="en">
      <Providers>
        <body>{children}</body>
      </Providers>
      </html>
  );
}
