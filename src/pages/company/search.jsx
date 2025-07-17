// src/pages/CompanySearch.jsx
import { useState } from "react";
// import Header from "../components/common/Header";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://verit-be.onrender.com/api";

export default function CompanySearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/ubo/search?name=${query}&provider=companieshouse`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
          "Authorization": `Bearer ${localStorage.getItem("verit_token") || ""}`,
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

  // Helper function to capitalize first letter and make rest lowercase
  function capitalizeFirst(str) {
    if (!str || typeof str !== "string") return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* <Header /> */}
      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700 flex items-center justify-center gap-2">
          <span role="img" aria-label="search">🔍</span> Company Search
        </h2>

        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex gap-2 items-center">
            <input
              type="text"
              placeholder="Enter company name..."
              className="input input-bordered w-full text-lg px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-700"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button
              className={`btn btn-primary px-6 py-2 text-lg rounded-lg shadow transition-all duration-150 ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-xs"></span>
                  Searching...
                </span>
              ) : "Search"}
            </button>
          </div>
        </form>

        {results.length === 0 && !loading && (
          <div className="text-center text-gray-400 mt-12">
            <span className="text-5xl block mb-2">🏢</span>
            <span>No companies found. Try searching for a company name.</span>
          </div>
        )}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((company, idx) => (
              <div
                key={idx}
                className="card bg-white shadow-lg p-6 rounded-xl border border-base-300 hover:border-blue-700 transition-all duration-200 hover:scale-[1.03] cursor-pointer"
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(29, 78, 216, 0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = '';
                  e.currentTarget.style.boxShadow = '';
                }}
                onClick={() => {
                  window.location.href = `/company/profile/${company.company_number}`;
                }}
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
                  <span role="img" aria-label="building">🏢</span>
                  {(company.title).toUpperCase() || "N/A"}
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <div>
                    <span className="font-medium text-gray-500">Company Number:</span>{" "}
                    <span className="font-mono">{company.company_number || "N/A"}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Status:</span>{" "}
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold ${
                      company.company_status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-600"
                    }`}>
                      {capitalizeFirst(company.company_status) || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-500">Address:</span>{" "}
                    {company.address_snippet || "N/A"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
