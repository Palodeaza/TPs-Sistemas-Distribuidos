import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <Link href="/" className="font-semibold text-lg hover:underline">
            Pokédex
          </Link>
        </nav>

        <main className="flex-grow p-6">{children}</main>

        <footer className="bg-gray-800 text-gray-200 text-center py-4">
          © 2025 - Ejemplo de Pokédex con Next.js
        </footer>
      </body>
    </html>
  );
}
