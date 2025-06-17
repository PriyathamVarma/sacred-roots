"use client";
import React from "react";
import {
  TreePine,
  MapPin,
  Users,
  Calendar,
  BookOpen,
  ArrowRight,
  Mountain,
  Droplets,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";

interface Community {
  id: string;
  name: string;
  region: string;
  members: number;
  color: string;
  description: string;
}

interface Initiative {
  id: string;
  title: string;
  description: string;
  date: string;
  participants: number;
}

interface Elder {
  name: string;
  role: string;
  bio: string;
}
interface CommunityTemplateProps {
  id: string;
}

export default function CommunityTemplate({ id }: CommunityTemplateProps) {
  // Sample data structure - replace with your actual data fetching
  const community: Community = {
    id,
    name: "Community Name",
    region: "Region",
    members: 0,
    color: "bg-gradient-to-r from-emerald-100 to-green-100",
    description: "Community description will go here",
  };

  const initiatives: Initiative[] = [
    {
      id: "1",
      title: "Community Initiative",
      description: "Description of what this initiative is about",
      date: "2023-01-01",
      participants: 0,
    },
  ];

  const elders: Elder[] = [
    {
      name: "Elder Name",
      role: "Their Role",
      bio: "Brief bio about this wisdom keeper",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <TreePine className="w-8 h-8 text-emerald-600" />
              <span className="text-xl font-semibold text-stone-800">
                Sacred Roots
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-stone-700 hover:text-emerald-600">
                Home
              </Link>
              <a
                href="/stories"
                className="text-stone-700 hover:text-emerald-600"
              >
                Stories
              </a>
              <a
                href="/events"
                className="text-stone-700 hover:text-emerald-600"
              >
                Events
              </a>
              <a
                href="/about"
                className="text-stone-700 hover:text-emerald-600"
              >
                About
              </a>
            </div>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700">
              Join Community
            </button>
          </div>
        </div>
      </nav>

      {/* Community Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className={`h-48 ${community.color}`}></div>
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm -mt-20">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mb-4">
                      <Mountain className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">
                      {community.name}
                    </h2>
                    <div className="flex items-center justify-center text-stone-600 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{community.region}</span>
                    </div>
                    <div className="flex items-center justify-center bg-stone-100 rounded-lg py-2">
                      <Users className="w-4 h-4 mr-2 text-stone-500" />
                      <span className="font-medium">
                        {community.members.toLocaleString()} members
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-stone-800 mb-4">
                    About This Community
                  </h3>
                  <p className="text-stone-600 mb-6">{community.description}</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-stone-50 rounded-lg p-4">
                      <Sun className="w-6 h-6 text-amber-500 mb-2" />
                      <h4 className="font-medium text-stone-800">
                        Spiritual Focus
                      </h4>
                      <p className="text-sm text-stone-500">
                        [Spiritual focus]
                      </p>
                    </div>
                    <div className="bg-stone-50 rounded-lg p-4">
                      <Moon className="w-6 h-6 text-indigo-500 mb-2" />
                      <h4 className="font-medium text-stone-800">
                        Sacred Elements
                      </h4>
                      <p className="text-sm text-stone-500">
                        [Sacred elements]
                      </p>
                    </div>
                    <div className="bg-stone-50 rounded-lg p-4">
                      <Droplets className="w-6 h-6 text-blue-500 mb-2" />
                      <h4 className="font-medium text-stone-800">
                        Current Focus
                      </h4>
                      <p className="text-sm text-stone-500">[Current focus]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Activities */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BookOpen className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-stone-800 mb-4">
              Community Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative) => (
              <div
                key={initiative.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className={`h-48 ${community.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-stone-500 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{initiative.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-stone-800 mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-stone-600 mb-4">
                    {initiative.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-stone-400 mr-2" />
                      <span className="text-sm text-stone-500">
                        {initiative.participants} participants
                      </span>
                    </div>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium flex items-center">
                      Learn more <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Elders */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">
              Wisdom Keepers
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {elders.map((elder, index) => (
                <div key={index} className="bg-stone-50 rounded-xl p-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 mb-1">
                    {elder.name}
                  </h3>
                  <p className="text-emerald-600 text-sm font-medium mb-3">
                    {elder.role}
                  </p>
                  <p className="text-stone-600 text-sm">{elder.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-stone-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Connect With {community.name}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Contact Community Leaders
            </button>
            <button className="border-2 border-stone-500 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              Donate to Initiatives
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; {new Date().getFullYear()} Sacred Roots</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
