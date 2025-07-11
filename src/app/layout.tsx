'use client';
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentQuestion = pathname.split("-").pop();
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page} style={{maxWidth: '1200px', margin: '0 auto'}}>
          <main className={styles.main}>
            {children}
          </main>
          <footer className={styles.footer}>
            {pathname !== "/" && (<div style={{ display: 'flex', gap: '12px' }}>
              {pathname !== "/question-01" && <a href={`/question-0${parseInt(currentQuestion as string) - 1}`}>Prev</a>}
              <a href="/"> home </a>
              {pathname !== "/question-07" && <a href={`/question-0${parseInt(currentQuestion as string) + 1}`}>Next</a>}
            </div>)}
            Metrobi
          </footer>
        </div>
      </body>
    </html>
  );
}
