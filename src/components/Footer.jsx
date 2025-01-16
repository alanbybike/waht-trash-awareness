import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-auto h-auto">
    <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
      <p className="text-sm">© WAHT since 2025</p>
      <div className="flex text-sm space-x-2">
          <NavLink to="/legal" className="hover:text-gray-300 px-2">Legal</NavLink>
          <NavLink to="/cookies" className="hover:text-gray-300 px-2">Cookies</NavLink>
          <NavLink to="/contact" className="hover:text-gray-300 px-2">{t('Contact')}</NavLink>
      </div>
    </div>
    </footer>
  );
}

export default Footer;