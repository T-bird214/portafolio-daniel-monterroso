"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Envoltura fina sobre `next-themes`.
 *
 * Por qué next-themes en vez de un `useState` + `localStorage` manual
 * (como en la versión Vite anterior): en Next.js el HTML se genera primero
 * en el servidor, donde no existe `localStorage` ni `window`. Una solución
 * manual causaría un "flash" del tema incorrecto (FOUC) en cada carga y un
 * posible error de hidratación. `next-themes` resuelve esto con un script
 * inline de ~100 bytes que se ejecuta antes de pintar la página — es el
 * patrón recomendado oficialmente para dark mode en Next.js y agrega menos
 * peso del que costaría reimplementar ese mismo comportamiento a mano.
 */
export function ThemeProvider({ children, ...props }: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
