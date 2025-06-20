// Header component

import React from "react";
import { TreePine, Circle } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Circle className="w-8 h-8 text-emerald-600" />
                <TreePine className="w-4 h-4 text-amber-600 absolute top-2 left-2" />
              </div>
              <span className="text-xl font-semibold text-stone-800">
                <Link href="/">
                  {process.env.NEXT_PUBLIC_APP_NAME || "Sacred Roots"}
                </Link>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/community"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Communities
              </Link>
              <a
                href="#wisdom"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Wisdom
              </a>
              <a
                href="#about"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
              <Link
                href="/register/signup"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Join
              </Link>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
