import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "../globals.css";

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Coffe Study Co.",
  description:
    "Forget the lecture hall, enter the learning circle. Connect, collaborate, and thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${raleway.className}`}>
        {children}
      </body>
    </html>
  );
}
