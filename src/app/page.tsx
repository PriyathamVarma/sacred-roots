"use client";
import React, { useState, useEffect } from "react";
import {
  TreePine,
  Globe,
  Users,
  BookOpen,
  Leaf,
  Mountain,
  Sun,
  Moon,
  Star,
  Circle,
} from "lucide-react";
import { communities, recentWisdom } from "../../shared/constants/data";

const Homepage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Circle className="w-8 h-8 text-emerald-600" />
                <TreePine className="w-4 h-4 text-amber-600 absolute top-2 left-2" />
              </div>
              <span className="text-xl font-semibold text-stone-800">
                Sacred Roots
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#communities"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Communities
              </a>
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
              <a
                href="#join"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Join
              </a>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Sun className="w-16 h-16 text-amber-500 mx-auto mb-4 animate-pulse" />
            <Moon className="w-12 h-12 text-stone-400 mx-auto -mt-2 ml-8 opacity-70" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-6">
            Rekindling
            <span className="text-emerald-600 block">Ancient Wisdom</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A sacred digital sanctuary where indigenous spiritual traditions
            unite, preserving ancestral knowledge and honoring the sacred
            connection between humanity and the natural world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
              Join the Movement
            </button>
            <button className="border-2 border-stone-400 text-stone-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all">
              Explore Traditions
            </button>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="w-12 h-12 text-stone-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Why We Exist
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              For millennia, indigenous spiritual traditions have been the
              guardians of profound wisdom, connecting humanity to the sacred
              rhythms of the natural world.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-green-100">
              <Leaf className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">
                Preserve
              </h3>
              <p className="text-stone-600">
                Safeguard ancient rituals, ceremonies, and sacred knowledge for
                future generations before they are lost to time.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100">
              <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">
                Unite
              </h3>
              <p className="text-stone-600">
                Connect scattered communities worldwide, fostering dialogue and
                mutual support among keepers of traditional wisdom.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-indigo-100">
              <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-stone-800 mb-4">
                Educate
              </h3>
              <p className="text-stone-600">
                Share authentic teachings with respect and reverence, helping
                others understand the depth of indigenous spiritual practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Communities */}
      <section
        id="communities"
        className="py-20 bg-gradient-to-br from-stone-100 to-amber-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Globe className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Voices of Tradition
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Sacred communities from every corner of the Earth, each preserving
              unique wisdom passed down through generations.
            </p>
          </div>

          {/* World Map Visualization */}
          <div className="relative mb-16 p-8 bg-white rounded-3xl shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-block relative">
                <div className="w-64 h-32 bg-gradient-to-r from-emerald-200 to-blue-200 rounded-2xl relative overflow-hidden">
                  {/* Simplified world map representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-20 h-20 text-emerald-600 opacity-30" />
                  </div>
                  {/* Active community dots */}
                  {communities.map((community, index) => (
                    <div
                      key={index}
                      className="absolute w-3 h-3 bg-emerald-500 rounded-full animate-pulse"
                      style={{
                        top: `${20 + index * 15}%`,
                        left: `${15 + index * 15}%`,
                      }}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-stone-500 mt-4">
                <Star className="w-4 h-4 inline mr-1" />
                {communities.length} Active Communities Worldwide
              </p>
            </div>
          </div>

          {/* Community Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <div
                  className={`w-full h-32 ${community.color} rounded-xl mb-4 flex items-center justify-center`}
                >
                  <TreePine className="w-8 h-8 text-stone-600" />
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {community.name}
                </h3>
                <p className="text-stone-600 mb-3">{community.region}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500">
                    {community.members} members
                  </span>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wisdom from the Earth */}
      <section id="wisdom" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-4">
              <Leaf className="w-8 h-8 text-emerald-600 mr-2" />
              <BookOpen className="w-12 h-12 text-stone-600" />
              <Leaf className="w-8 h-8 text-emerald-600 ml-2" />
            </div>
            <h2 className="text-4xl font-bold text-stone-800 mb-6">
              Wisdom from the Earth
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Recent teachings, ceremonies, and insights shared by our global
              community of wisdom keepers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWisdom.map((wisdom, index) => (
              <article
                key={index}
                className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-sm text-stone-500">
                    {wisdom.community}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {wisdom.title}
                </h3>
                <p className="text-stone-600 mb-4">{wisdom.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500">{wisdom.date}</span>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement */}
      <section
        id="join"
        className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Circle className="w-16 h-16 mx-auto mb-4 opacity-80" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you&apos;re a community leader, spiritual practitioner, or
            someone called to honor ancient wisdom, your voice matters in this
            sacred circle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-100 transition-all transform hover:scale-105">
              Start Your Community
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-emerald-600 transition-all">
              Explore Traditions
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Circle className="w-8 h-8 text-emerald-400" />
                  <TreePine className="w-4 h-4 text-amber-400 absolute top-2 left-2" />
                </div>
                <span className="text-xl font-semibold">Sacred Roots</span>
              </div>
              <p className="text-stone-400">
                Preserving ancient wisdom for future generations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Communities</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Find Your Tradition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Start a Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Wisdom</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sacred Texts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rituals & Ceremonies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Seasonal Practices
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural Respect
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-700 mt-8 pt-8 text-center text-stone-400">
            <p>
              &copy; 2025 Sacred Roots. Honoring ancient wisdom with reverence
              and respect.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
