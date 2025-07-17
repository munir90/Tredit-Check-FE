import React from "react";

const cards = [
  {
    title: "Company Search",
    description: "Search companies using OpenCorporates and Companies House APIs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 12h14m0 0l-7-7m7 7l-7 7"
        />
      </svg>
    ),
    action: () => (window.location.href = "/company/search"),
    accent: "bg-gradient-to-tr from-blue-100 to-blue-50",
    interactive: true,
  },
  {
    title: "Due Diligence Tools",
    description: "Run sanctions checks, adverse media screenings, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {/* Document */}
        <rect x="6" y="3" width="8" height="12" rx="2" stroke="currentColor" strokeWidth={2} fill="none" />
        <path d="M10 7h2M10 10h2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
        {/* Magnifying Glass */}
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth={2} fill="none" />
        <line x1="19" y1="19" x2="21" y2="21" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
        {/* Gear */}
        <g>
          <circle cx="17" cy="17" r="1" fill="currentColor" />
          <g stroke="currentColor" strokeWidth={1.2}>
            <line x1="17" y1="15.3" x2="17" y2="14.5" />
            <line x1="17" y1="18.7" x2="17" y2="19.5" />
            <line x1="15.3" y1="17" x2="14.5" y2="17" />
            <line x1="18.7" y1="17" x2="19.5" y2="17" />
            <line x1="15.9" y1="15.9" x2="15.3" y2="15.3" />
            <line x1="18.1" y1="18.1" x2="18.7" y2="18.7" />
            <line x1="15.9" y1="18.1" x2="15.3" y2="18.7" />
            <line x1="18.1" y1="15.9" x2="18.7" y2="15.3" />
          </g>
        </g>
      </svg>
    ),
    accent: "bg-gradient-to-tr from-blue-100 to-blue-50",
    interactive: true,
  },
  {
    title: "API Keys",
    description: "Manage your Verit API keys and access settings.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m0 4a2 2 0 100-4 2 2 0 000 4zm6-6V7a2 2 0 00-2-2H8a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2zm-6-6h.01"
        />
      </svg>
    ),
    accent: "bg-gradient-to-tr from-blue-100 to-blue-50",
    interactive: true,
  },
  {
    title: "Coming Soon 🚀",
    description: "More due diligence modules powered by AI will be available soon!",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-7 w-7 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill="none" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3"
        />
      </svg>
    ),
    accent: "bg-gradient-to-tr from-gray-100 to-gray-50",
    interactive: false,
  },
];

let Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 text-blue-700 flex items-center gap-2">
          <span>Welcome to Verit</span>
          <span role="img" aria-label="leaf">🌿</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`card shadow-md p-6 rounded-2xl border border-gray-200 transition-transform hover:scale-105 ${card.accent} ${card.interactive ? "cursor-pointer hover:shadow-lg" : "opacity-70"
                }`}
              onClick={card.interactive ? card.action : undefined}
              style={card.interactive ? { boxShadow: "0 4px 16px 0 rgba(59, 130, 246, 0.08)" } : {}}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="rounded-full p-3 bg-blue-600 shadow-md">
                  {card.icon}
                </div>
              </div>
              <h2 className="text-lg font-bold mb-2 text-blue-700">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;