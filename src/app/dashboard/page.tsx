"use client";

import { useUser } from "../../../shared/context/user_context";
import { Users, BookOpen, Globe, Sparkles } from "lucide-react";
import { Header } from "@/app/components/templates/header";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <Header />

      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Welcome Message */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-stone-800 mb-2">
              Welcome back, {user?.name || "Guest"}!
            </h2>
            <p className="text-stone-600">
              Here&apos;s a quick overview of your activities and sacred spaces.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
            <div className="bg-gradient-to-br from-emerald-100 to-green-200 p-6 rounded-2xl shadow text-center">
              <Users className="w-8 h-8 mx-auto text-emerald-700 mb-2" />
              <h3 className="text-xl font-semibold text-stone-800">128</h3>
              <p className="text-sm text-stone-600">Followers</p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-yellow-200 p-6 rounded-2xl shadow text-center">
              <BookOpen className="w-8 h-8 mx-auto text-amber-700 mb-2" />
              <h3 className="text-xl font-semibold text-stone-800">5</h3>
              <p className="text-sm text-stone-600">Blog Posts</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-200 p-6 rounded-2xl shadow text-center">
              <Globe className="w-8 h-8 mx-auto text-purple-700 mb-2" />
              <h3 className="text-xl font-semibold text-stone-800">3</h3>
              <p className="text-sm text-stone-600">Communities</p>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-rose-200 p-6 rounded-2xl shadow text-center">
              <Sparkles className="w-8 h-8 mx-auto text-pink-700 mb-2" />
              <h3 className="text-xl font-semibold text-stone-800">12</h3>
              <p className="text-sm text-stone-600">Ceremonies Joined</p>
            </div>
          </div>

          {/* Community Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 mb-10">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Your Community
            </h3>
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold text-stone-800">
                Sacred Forest Keepers
              </h4>
              <p className="text-stone-600">Region: Amazonia</p>
              <p className="text-stone-600">Members: 42</p>
              <p className="text-stone-600 mt-2">
                “Guardians of ancient trees and herbal wisdom”
              </p>
            </div>
          </div>

          {/* Blog Previews */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Your Blog Articles
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {["Honoring the Moon", "Sacred Fires & Rituals"].map(
                (title, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-stone-100 to-amber-100 p-6 rounded-2xl hover:shadow-lg transition"
                  >
                    <h4 className="text-lg font-semibold text-stone-800 mb-2">
                      {title}
                    </h4>
                    <p className="text-stone-600 text-sm">
                      Explore the deep meaning behind ancestral practices and
                      why they remain relevant today.
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
