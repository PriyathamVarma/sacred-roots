"use client";
import React from "react";
import {
  TreePine,
  BookOpen,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import {
  communities,
  communityInitiatives,
} from "../../../shared/constants/community";
import Link from "next/link";

const BlogsPage = () => {
  const [activeFilter, setActiveFilter] = React.useState("all");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredInitiatives = communityInitiatives.filter((initiative) => {
    const matchesFilter =
      activeFilter === "all" || initiative.communityId === activeFilter;
    const matchesSearch = initiative.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation - Same as Homepage */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <TreePine className="w-8 h-8 text-emerald-600" />
              </div>
              <span className="text-xl font-semibold text-stone-800">
                Sacred Roots
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
              <a
                href="#stories"
                className="text-emerald-600 font-medium transition-colors"
              >
                Community Stories
              </a>
              <a
                href="/events"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                Events
              </a>
              <a
                href="/about"
                className="text-stone-700 hover:text-emerald-600 transition-colors"
              >
                About
              </a>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
              Share Your Story
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800 mb-6">
              Community <span className="text-emerald-600">Stories</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Discover the living traditions, initiatives, and wisdom being
              shared by indigenous communities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search stories..."
                className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-4">
              <Filter className="text-stone-600" />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    activeFilter === "all"
                      ? "bg-emerald-600 text-white"
                      : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                  }`}
                >
                  All Communities
                </button>
                {communities.slice(0, 3).map((community) => (
                  <button
                    key={community.id}
                    onClick={() => setActiveFilter(community.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      activeFilter === community.id
                        ? "bg-emerald-600 text-white"
                        : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                    }`}
                  >
                    {community.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stories Grid */}
      <section id="stories" className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInitiatives.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInitiatives.map((initiative) => {
                const community = communities.find(
                  (c) => c.id === initiative.communityId,
                );
                return (
                  <article
                    key={initiative.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 bg-gradient-to-r from-emerald-100 to-amber-100 relative">
                      <div className="absolute bottom-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-emerald-800 px-3 py-1 rounded-full text-xs font-medium">
                          {community?.name}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-stone-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{initiative.date}</span>
                        <MapPin className="w-4 h-4 ml-3 mr-1" />
                        <span>{community?.region}</span>
                      </div>
                      <h3 className="text-xl font-bold text-stone-800 mb-3">
                        {initiative.title}
                      </h3>
                      <p className="text-stone-600 mb-4 line-clamp-3">
                        {initiative.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 text-stone-400 mr-1" />
                          <span className="text-sm text-stone-500">
                            {initiative.participants} participants
                          </span>
                        </div>
                        <a
                          href={`/stories/${initiative.id}`}
                          className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center"
                        >
                          Read more <ArrowRight className="w-4 h-4 ml-1" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-stone-400" />
              </div>
              <h3 className="text-xl font-medium text-stone-700 mb-2">
                No stories found
              </h3>
              <p className="text-stone-500 max-w-md mx-auto">
                Try adjusting your search or filter to find what you&apos;re
                looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Community */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gradient-to-r from-emerald-200 to-amber-200 p-8 flex items-center justify-center">
                <div className="text-center">
                  <TreePine className="w-16 h-16 text-emerald-700 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-stone-800 mb-2">
                    The Lakota Wisdom Keepers
                  </h3>
                  <p className="text-stone-600 mb-4">
                    Preserving the sacred traditions of the Great Plains
                  </p>
                  <div className="flex justify-center gap-4">
                    <span className="bg-white/80 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                      42 Stories
                    </span>
                    <span className="bg-white/80 text-stone-700 px-3 py-1 rounded-full text-xs font-medium">
                      1.2k Followers
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-bold text-stone-800 mb-4">
                  Featured Story: The Return of the Buffalo
                </h3>
                <p className="text-stone-600 mb-6">
                  How the Lakota community is reviving ancient buffalo hunting
                  traditions as a spiritual practice and ecological restoration
                  effort. This initiative has brought together elders and youth
                  to reconnect with their heritage while promoting sustainable
                  land management.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-800">
                        Community Project
                      </p>
                      <p className="text-xs text-stone-500">Ongoing</p>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center"
                  >
                    Follow <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Share Your Community&apos;s Story
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-3xl mx-auto">
            Every tradition has wisdom worth preserving. Help us document and
            celebrate your community&apos;s spiritual practices and initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105">
              Submit a Story
            </button>
            <button className="border-2 border-stone-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-stone-700 transition-all">
              Learn How to Contribute
            </button>
          </div>
        </div>
      </section>

      {/* Footer - Same as Homepage */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <TreePine className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-xl font-semibold">Sacred Roots</span>
              </div>
              <p className="text-stone-400">
                Preserving ancient wisdom for future generations.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    All Communities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Featured Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural Events
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contribution Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cultural Sensitivity
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Research Partners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Elders Council
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Volunteer Opportunities
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Newsletter
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

export default BlogsPage;
