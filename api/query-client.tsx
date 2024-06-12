import { QueryCache, QueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { t } from "i18next";

export function queryErrorHandler(error: unknown): void {
  if (error && typeof error === "object" && "errorSimpleMessage" in error) {
    const splitStringBySemicolon = (inputString: string) => {
      return inputString.split(" ; ");
    };

    const title = errorType.errorSimpleMessage;
    const resultArray = splitStringBySemicolon(title);

    resultArray.forEach((element: string) => {
      const parts = element.split(":");
      if (parts.length > 1) {
        const partToTranslate = parts[0].trim();
        const partNotToTranslate = parts.slice(1).join(":").trim();

        const translatedPart = t(partToTranslate) + ": " + partNotToTranslate;
        toast.error(translatedPart);
      } else {
        toast.error(t(element));
      }
    });
  } else {
    toast.error(t("No server connection"));
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600000,
      refetchOnWindowFocus: false,
    },
  },
});
