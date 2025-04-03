"use-client";

import "dayjs/locale/es-mx";
import { Metadata } from "next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";

import { theme } from "@/configurations";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";

export const metadata: Metadata = {
  title: "Maikron Forms",
  description:
    "Maikron Forms es una aplicación web diseñada para la creación de formularios dinámicos y el análisis avanzado de respuestas mediante inteligencia artificial. Su objetivo es optimizar la recopilación, procesamiento y evaluación de datos, ofreciendo una experiencia intuitiva y eficiente para diversos sectores.",
  authors: {
    name: "Abraham Espinosa Mendoza",
    url: "mailto:abrahamespinosa3132@gmail.com",
  },
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <DatesProvider settings={{ consistentWeeks: true, locale: "es-mx" }}>
            {children}
          </DatesProvider>
          <Notifications />
        </MantineProvider>
      </body>
    </html>
  );
}
