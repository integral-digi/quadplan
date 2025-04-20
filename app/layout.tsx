import type { Metadata } from "next";
import "./globals.css";
import { ContentProvider } from "./context/ContentContext";

export const metadata: Metadata = {
  title: "Quadplan - Software design & development agency",
  description: "UI/UX design and web development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full"
      >
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
