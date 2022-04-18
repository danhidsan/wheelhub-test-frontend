import React, {
  createContext,
  FC,
  useContext,
  ReactNode,
  useState,
} from 'react';

export type LaguageProviderProps = {
  defaultLanguage: 'es' | 'en';
  children: ReactNode;
};

type LanguageContextType = {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageContextProvider: FC<LaguageProviderProps> = ({
  defaultLanguage,
  children,
}) => {
  const [lang, setLang] = useState<'es' | 'en'>(defaultLanguage);
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
