// Page for creating a new community
"use client";

import { Header } from "@/app/components/templates/header";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function CommunityForm() {
  const [formData, setFormData] = useState({
    name: "",
    region: "",
    members: "",
    color: "bg-emerald-400",
    description: "",
  });

  const [colorFamily, setColorFamily] = useState("emerald");
  const [intensity, setIntensity] = useState("400");
  const [responseMessage, setResponseMessage] = useState("");

  const colorFamilies = [
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "rose",
  ];

  const intensities = ["100", "200", "300", "400", "500"];

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      color: `bg-${colorFamily}-${intensity}`,
    }));
  }, [colorFamily, intensity]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...formData,
      members: parseInt(formData.members) || 0,
    };

    try {
      const res = await fetch("/api/v1/community", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage(data.message);
        setFormData({
          name: "",
          region: "",
          members: "",
          color: `bg-${colorFamily}-${intensity}`,
          description: "",
        });
      } else {
        setResponseMessage("❌ Failed to create community.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("❌ Server error.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-amber-600/10" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-10">
            <div className="mb-8 text-center">
              <Sun className="w-12 h-12 text-amber-500 mx-auto mb-2 animate-pulse" />
              <Moon className="w-10 h-10 text-stone-400 mx-auto -mt-4" />
              <h2 className="text-4xl font-bold text-stone-800 mb-4">
                Add a New Community
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Create a spiritual community to preserve ancestral knowledge and
                sacred traditions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Community Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Number of Members
                </label>
                <input
                  type="number"
                  name="members"
                  value={formData.members}
                  onChange={handleChange}
                  min="0"
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Choose Color
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={colorFamily}
                    onChange={(e) => setColorFamily(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {colorFamilies.map((color) => (
                      <option key={color} value={color}>
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                      </option>
                    ))}
                  </select>

                  <select
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {intensities.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Preview */}
                <div
                  className={`mt-4 w-full h-12 rounded-lg ${formData.color}`}
                  title={formData.color}
                />
                <p className="text-sm text-stone-500 mt-2 font-mono">
                  Tailwind Class:{" "}
                  <span className="font-bold">{formData.color}</span>
                </p>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105"
                >
                  Submit
                </button>
              </div>

              {responseMessage && (
                <p className="text-center text-sm text-emerald-600 mt-4">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
