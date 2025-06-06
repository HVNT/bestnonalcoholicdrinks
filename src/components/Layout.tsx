import React from 'react';
import Link from 'next/link';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="/" className="font-bold text-xl text-blue-600">
              BestNonAlcoholicDrinks.org
            </Link>
            <nav className="hidden md:block">
              {/* TODO: Add navigation links when we have more pages */}
              <Link href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} BestNonAlcoholicDrinks.org. All rights reserved.
            </div>
            <div className="mt-4 md:mt-0">
              {/* TODO: Add social media links and other footer content */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;