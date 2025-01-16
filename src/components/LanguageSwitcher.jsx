import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
      i18n.changeLanguage(event.target.value);
      localStorage.setItem("language", event.target.value);
    };
    if (!i18n.language) {
        return null
    }

  return (
    <select
      onChange={handleLanguageChange}
      value={i18n.language}
      className="bg-white text-gray-800 px-2 py-1 rounded focus:outline-none max-w-[8rem]"
    >
        <option value="ar">عربي</option>
        <option value="zh">中国人</option>
        <option value="de">Deutsch</option>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="hi">हिन्दी</option>
         <option value="it">Italiano</option>
        <option value="ja">日本語</option>
        <option value="pa">ਪੰਜਾਬੀ</option>
         <option value="pt">Português</option>
         <option value="ru">Русский</option>
    </select>
  );
}

export default LanguageSwitcher;