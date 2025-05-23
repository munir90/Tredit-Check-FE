// src/pages/CompanySearch.jsx
import { useState } from "react";
import Header from "../components/common/Header";

export default function CompanySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`https://verit-be.onrender.com/api/ubo/search?name=${query}`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || ""
        }
      });
      const data = await res.json();
      setResults(data.results || []);
    } catch (err) {
      console.error("Search failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Header />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🔍 Company Search</h2>

        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter company name..."
              className="input input-bordered w-full"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((company, idx) => (
              <div key={idx} className="card bg-base-200 shadow-md p-4">
                <h3 className="text-lg font-semibold">{company.name}</h3>
                <p className="text-sm opacity-70">
                  {company.jurisdiction_code} • {company.company_number} • {company.current_status}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
