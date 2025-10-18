"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <main className="flex-grow container mx-auto p-4">{children}</main>
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
