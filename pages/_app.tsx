import { queryClient } from "@/api/query-client";
import i18n from "@/i18";
import "@/styles/globals.css";
import { createTheme } from "@/theme";
import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={createTheme()}>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </ThemeProvider>
      </I18nextProvider>
    </QueryClientProvider>
  );
}
