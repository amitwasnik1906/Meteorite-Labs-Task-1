import React from 'react';
import { Globe, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-2 py-2 md:px-8 md:py-5">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 flex-1 justify-center md:justify-start">
          <img src="logo.svg" alt="" className="h-5 w-auto md:h-7" />
        </div>

        <div className="flex items-center space-x-4">
          <button className="px-6 py-1 text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-300 font-bold hidden md:block">
            Log in
          </button>
          <button className="hover:bg-gray-100 rounded-lg">
            <Globe className="w-5 h-5 text-gray-400" />
          </button>
          <button className="hover:bg-gray-100 rounded-lg hidden md:block">
            <Menu className="w-7 h-7 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
