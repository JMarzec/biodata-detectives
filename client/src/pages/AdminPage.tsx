import { useState } from "react";
import { Language } from "@shared/translations";
import AdminPanel from "@/components/AdminPanel";

export default function AdminPage() {
  const [language, setLanguage] = useState<Language>("pt");

  return (
    <AdminPanel
      language={language}
      onLanguageChange={setLanguage}
    />
  );
}
