import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Verit 🌿</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cards */}
        <div className="card bg-base-200 shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Company Search</h2>
          <p className="text-base-content">
            Search companies using OpenCorporates and Companies House APIs.
          </p>
        </div>

        <div className="card bg-base-200 shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Due Diligence Tools</h2>
          <p className="text-base-content">
            Run sanctions checks, adverse media screenings, and more.
          </p>
        </div>

        <div className="card bg-base-200 shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">API Keys</h2>
          <p className="text-base-content">
            Manage your Verit API keys and access settings.
          </p>
        </div>

        <div className="card bg-base-200 shadow-lg p-6">
          <h2 className="text-xl font-bold mb-2">Coming Soon 🚀</h2>
          <p className="text-base-content">
            More due diligence modules powered by AI will be available soon!
          </p>
        </div>
      </div>
    </div>
  );
}