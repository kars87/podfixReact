import React from "react";

export default function LogInCard() {
  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-lg border border-white/5 max-w-sm mx-auto mt-12">
      <h2 className="text-2xl font-bold mb-4">Log In</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 bg-slate-900/20 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 bg-slate-900/20 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
}