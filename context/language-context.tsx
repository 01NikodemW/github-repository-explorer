import i18n from "@/i18";
import { Language } from "@/types/constants";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

type LanguageContextType = {
  selectedLanguage: string;
  handleSetSelectedLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const LanguageProvider = ({ children }: Props) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    Language.polish
  );

  useEffect(() => {
    const value = localStorage.getItem("selectedLanguage");
    if (value !== null) {
      setSelectedLanguage(value);
      i18n.changeLanguage(value);
    }
  }, []);

  const handleSetSelectedLanguage = () => {
    const value = selectedLanguage === "en" ? "pl" : "en";
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
    localStorage.setItem("selectedLanguage", value);
  };

  return (
    <LanguageContext.Provider
      value={{
        selectedLanguage,
        handleSetSelectedLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
