// This is the signup page
"use client";

import { Header } from "@/app/components/templates/header";
import { useState } from "react";
import { UserPlus } from "lucide-react";
import { IUser } from "../../../../shared/interfaces/user";
import { useRouter } from "next/navigation";

export default function JoinForm() {
  const route = useRouter();
  const [formData, setFormData] = useState<IUser>({
    name: "",
    email: "",
    role: "follower",
    country: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const roles = ["follower", "elder", "priest", "guardian", "student"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/v1/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setResponseMessage("✅ Thank you for joining the movement!");
        // Redirecting to the dashboard page
        route.push("/dashboard");
      } else {
        setResponseMessage("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("❌ Server error. Please try later.");
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
            <div className="text-center mb-8">
              <UserPlus className="w-12 h-12 text-emerald-600 mx-auto mb-3 animate-bounce" />
              <h2 className="text-4xl font-bold text-stone-800 mb-2">
                Join the Movement
              </h2>
              <p className="text-stone-600 max-w-xl mx-auto">
                Become part of a sacred network honoring ancient traditions and
                living wisdom.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Name
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
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Role
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role.charAt(0).toUpperCase() + role.slice(1)}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  placeholder="e.g. India, Kenya, Brazil"
                  className="w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-all transform hover:scale-105"
                >
                  Join Now
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
