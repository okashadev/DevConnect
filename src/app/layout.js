import "./globals.css";

export const metadata = {
  title: "DevConnect",
  description: "Developer social app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
