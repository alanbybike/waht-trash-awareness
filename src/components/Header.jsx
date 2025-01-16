import React, { useState } from 'react';
import Navigation from './Navigation';
import SocialMedia from './SocialMedia';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1E90FF] text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold cursor-pointer" onClick={toggleMenu}>WAHT</h1>
        <div className="hidden lg:flex items-center space-x-4">
          <Navigation />
          <SocialMedia />
          <LanguageSwitcher />
        </div>
      </div>
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#1E90FF]`}>
        <div className="p-4 flex flex-col items-end space-y-2">
          <Navigation />
          <SocialMedia />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;