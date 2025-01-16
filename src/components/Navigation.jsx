import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navigation() {
  const { t } = useTranslation();
  return (
    <nav className="bg-[#1E90FF]">
      <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 text-lg">
        <li>
          <NavLink to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded">{t('home')}</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded">{t('about')}</NavLink>
        </li>
        <li>
          <NavLink to="/our-work" className="text-white hover:text-gray-300 px-3 py-2 rounded">{t('our_work')}</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;