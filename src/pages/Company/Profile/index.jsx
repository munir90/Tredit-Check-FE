import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://verit-be.onrender.com/api";

const NewsDetails = (props) => {

  const { newsData } = props;

  if (!newsData || !Array.isArray(newsData) || newsData.length === 0) {
    return (
      <div style={{ marginTop: 32 }}>
        <h3>Company News</h3>
        <div style={{ color: "#64748b" }}>No news found for this company.</div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 40 }}>
      <h3 style={{ fontSize: 22, marginBottom: 20, color: "#1e293b", letterSpacing: 0.2 }}>Company News</h3>
      {newsData.map((news, idx) => (
        <div>
          <div
            key={idx}
            style={{
              marginBottom: 28,
              border: "1px solid #e2e8f0",
              borderRadius: 12,
              padding: 24,
              background: "#fff",
              boxShadow: "0 2px 8px rgba(30,41,59,0.04)",
              transition: "box-shadow 0.2s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <span
                style={{
                  fontWeight: 700,
                  color: "#2563eb",
                  fontSize: 16,
                  marginRight: 16,
                  letterSpacing: 0.1,
                }}
              >
                {news.source}
              </span>
              <span
                style={{
                  background: news.summary.risk_level === "high" ? "#fee2e2" : "#d1fae5",
                  color: news.summary.risk_level === "high" ? "#b91c1c" : "#059669",
                  borderRadius: 6,
                  padding: "2px 12px",
                  fontWeight: 600,
                  fontSize: 13,
                  marginRight: 12,
                }}
              >
                {news.summary.risk_level?.toUpperCase()} RISK
              </span>
              <span style={{ color: "#64748b", fontSize: 13 }}>
                <b>Articles:</b> {news.summary.article_count}
              </span>
            </div>
            <div style={{ color: "#64748b", fontSize: 14, marginBottom: 8 }}>
              <span>
                <b>First Seen:</b> {news.summary.first_seen ? new Date(news.summary.first_seen).toLocaleDateString() : "-"}
              </span>
              {" | "}
              <span>
                <b>Last Seen:</b> {news.summary.last_seen ? new Date(news.summary.last_seen).toLocaleDateString() : "-"}
              </span>
            </div>
            {news.flags && news.flags.length > 0 && (
              <div style={{ marginBottom: 10 }}>
                {news.flags.map((flag, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      background: "#fef3c7",
                      color: "#b45309",
                      borderRadius: 4,
                      padding: "2px 10px",
                      fontSize: 12,
                      fontWeight: 500,
                      marginRight: 8,
                      marginBottom: 2,
                    }}
                  >
                    {flag}
                  </span>
                ))}
              </div>
            )}
            <div>
              {news.findings && news.findings.length > 0 ? (
                <ul style={{ paddingLeft: 0, margin: 0, listStyle: "none" }}>
                  {news.findings.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: 18,
                        padding: "14px 18px",
                        borderRadius: 8,
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        boxShadow: "0 1px 2px rgba(30,41,59,0.03)",
                      }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontWeight: 600,
                          color: "#2563eb",
                          textDecoration: "none",
                          fontSize: 16,
                          lineHeight: 1.3,
                          display: "inline-block",
                          marginBottom: 2,
                          transition: "color 0.15s",
                        }}
                        onMouseOver={e => (e.target.style.color = "#1d4ed8")}
                        onMouseOut={e => (e.target.style.color = "#2563eb")}
                      >
                        {item.title}
                      </a>
                      <div style={{ fontSize: 13, color: "#64748b", marginBottom: 2 }}>
                        {item.source} &middot; {item.published_at ? new Date(item.published_at).toLocaleString() : ""}
                      </div>
                      {item.snippet && (
                        <div style={{ fontSize: 15, color: "#334155", marginTop: 2, marginBottom: 2 }}>
                          {item.snippet}
                        </div>
                      )}
                      <div
                        style={{
                          fontSize: 13,
                          color:
                            item.sentiment === "negative"
                              ? "#b91c1c"
                              : item.sentiment === "positive"
                                ? "#059669"
                                : "#64748b",
                          marginTop: 2,
                          fontWeight: 500,
                        }}
                      >
                        Sentiment: {item.sentiment}
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ color: "#64748b", fontStyle: "italic" }}>No articles found.</div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const OfficerDetails = ({ officers }) => {
  if (!officers || officers.length === 0) {
    return (
      <div style={{ marginTop: 32 }}>
        <h3 style={{ fontSize: 22, marginBottom: 16, color: "#1e293b" }}>Company Officers</h3>
        <div style={{ color: "#64748b" }}>No officers found for this company.</div>
      </div>
    );
  }

  return (
    <div style={{ marginTop: 32 }}>
      <h3 style={{ fontSize: 22, marginBottom: 16, color: "#1e293b" }}>Company Officers</h3>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {officers.map((officer, index) => (
          <div
            key={index}
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: 10,
              padding: "18px 22px",
              boxShadow: "0 2px 8px rgba(30,41,59,0.04)",
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#e0e7ef",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: 22,
                color: "#2563eb",
                marginRight: 10,
              }}
            >
              {officer.name?.[0] || "?"}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 17, color: "#334155" }}>
                {officer.name}
              </div>
              <div style={{ color: "#64748b", fontSize: 15, marginBottom: 2 }}>
                {officer.officer_role ? officer.officer_role.charAt(0).toUpperCase() + officer.officer_role.slice(1) : officer.position || "Officer"}
              </div>
              {officer.appointed_on && (
                <div style={{ color: "#64748b", fontSize: 13 }}>
                  <b>Appointed:</b> {officer.appointed_on}
                </div>
              )}
              {officer.nationality && (
                <div style={{ color: "#64748b", fontSize: 13 }}>
                  <b>Nationality:</b> {officer.nationality}
                </div>
              )}
              {officer.country_of_residence && (
                <div style={{ color: "#64748b", fontSize: 13 }}>
                  <b>Country:</b> {officer.country_of_residence}
                </div>
              )}
              {officer.address && (
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
                  <b>Address:</b>{" "}
                  {[
                    officer.address.address_line_1,
                    officer.address.address_line_2,
                    officer.address.locality,
                    officer.address.region,
                    officer.address.postal_code
                  ].filter(Boolean).join(", ")}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompanyProfile() {
  const params = useParams();

  const { company_number } = params;

  const [companyDetails, setCompanyDetails] = useState(null);
  const [officersData, setOfficersData] = useState([]);
  const [newsData, setNewsData] = useState(null);
  const [sanctionsData, setSanctionsData] = useState(null);

  // Fetch company profile data using company_number
  const fetchCompanyProfile = async () => {
    try {
      const res = await fetch(`${BASE_URL}/ubo/profile/uk/${company_number}?provider=companieshouse`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
          "Authorization": `Bearer ${localStorage.getItem("verit_token") || ""}`,
        }
      });
      if (!res.ok) throw new Error("Failed to fetch company profile");
      const data = await res.json();

      setCompanyDetails(data);
      // Handle the data as needed
    } catch (err) {
      console.error("Error fetching company profile:", err);
    }
  }

  // Fetch company news or updates
  const fetchCompanyNews = async (name) => {
    try {
      const res = await fetch(`${BASE_URL}/media/news-check?name=${name}&country=uk`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
          "Authorization": `Bearer ${localStorage.getItem("verit_token") || ""}`,
        }
      });
      if (!res.ok) throw new Error("Failed to fetch company news");
      const data = await res.json();
      setNewsData(data);
      // Handle the news data as needed
    } catch (err) {
      console.error("Error fetching company news:", err);
    }
  }

  const fetchSanctionsData = async (name) => {
    try {
      const res = await fetch(`${BASE_URL}/due-diligence/sanctions-check?name=${name}&country=uk&entityType=Company`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
          "Authorization": `Bearer ${localStorage.getItem("verit_token") || ""}`,
        }
      });
      if (!res.ok) throw new Error("Failed to fetch sanctions data");
      const data = await res.json();
      setSanctionsData(data);
      // Handle the sanctions data as needed
    } catch (err) {
      console.error("Error fetching sanctions data:", err);
    }
  }

  const fetchComapnyOfficers = async (companyNumber) => {
    try {
      const res = await fetch(`${BASE_URL}/ubo/officers/${companyNumber}`, {
        headers: {
          "x-verit-api-key": localStorage.getItem("verit_api_key") || "",
          "Authorization": `Bearer ${localStorage.getItem("verit_token") || ""}`,
        }
      });
      if (!res.ok) throw new Error("Failed to fetch company officers");
      const data = await res.json();
      // Handle the officers data as needed
      setOfficersData(data.officers || []);
    } catch (err) {
      console.error("Error fetching company officers:", err);
    }
  }

  // Call the fetch function when component mounts
  useEffect(() => {
    if (!company_number) {
      console.error("Company number is required to fetch profile.");
      return;
    }

    fetchCompanyProfile();
  }, [company_number]);

  // Call the fetch function for news if companyDetails is available
  useEffect(() => {
    if (companyDetails && companyDetails.profile) {
      const companyName = companyDetails.profile.subject.name;
      fetchCompanyNews(companyName);
      fetchComapnyOfficers(companyDetails.profile.raw_data.company_number);
      fetchSanctionsData(companyName);
    }
  }, [companyDetails]);

  return (
    <div
      className="company-dashboard-container"
      style={{
        padding: "40px 0",
        background: "linear-gradient(135deg, #f7f9fb 60%, #e0e7ef 100%)",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 4px 32px rgba(30,41,59,0.10)",
          padding: "40px 36px 36px 36px",
          position: "relative",
        }}
      >
        {companyDetails && companyDetails.profile ? (
          <>
            {/* Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 36,
                borderBottom: "1px solid #e2e8f0",
                paddingBottom: 24,
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #e0e7ef 60%, #3b82f6 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 36,
                  fontWeight: 700,
                  color: "#fff",
                  marginRight: 28,
                  boxShadow: "0 2px 8px rgba(30,41,59,0.08)",
                  border: "3px solid #fff",
                }}
              >
                {companyDetails.profile.subject.name?.[0]}
              </div>
              <div>
                <h1
                  style={{
                    margin: 0,
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: 0.2,
                    color: "#1e293b",
                  }}
                >
                  {companyDetails.profile.subject.name}
                </h1>
                <div style={{ color: "#64748b", fontSize: 17, marginTop: 2 }}>
                  <span style={{ marginRight: 18 }}>
                    <b>Company Number:</b> {companyDetails.profile.raw_data.company_number}
                  </span>
                  <span>
                    <b>Jurisdiction:</b> {companyDetails.profile.subject.jurisdiction}
                  </span>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background:
                      companyDetails.profile.raw_data.company_status === "active"
                        ? "#d1fae5"
                        : "#fee2e2",
                    color:
                      companyDetails.profile.raw_data.company_status === "active"
                        ? "#059669"
                        : "#b91c1c",
                    borderRadius: 8,
                    padding: "4px 16px",
                    fontSize: 15,
                    marginTop: 10,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                  }}
                >
                  {companyDetails.profile.raw_data.company_status?.toUpperCase()}
                </div>
              </div>
            </div>

            {/* Grid Info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 36,
                marginBottom: 36,
              }}
            >
              <div>
                <h3 style={{ marginBottom: 10, color: "#2563eb", fontWeight: 700, fontSize: 20 }}>
                  Company Details
                </h3>
                <div style={{ color: "#334155", fontSize: 16, lineHeight: 1.7 }}>
                  <div>
                    <b>Type:</b> {companyDetails.profile.raw_data.type?.toUpperCase()}
                  </div>
                  <div>
                    <b>Incorporation Date:</b>{" "}
                    {companyDetails.profile.raw_data.date_of_creation}
                  </div>
                  <div>
                    <b>Registered Office:</b>
                    <div style={{ fontSize: 15, color: "#64748b", marginTop: 2 }}>
                      {companyDetails.profile.raw_data.registered_office_address?.address_line_1}
                      <br />
                      {companyDetails.profile.raw_data.registered_office_address?.address_line_2 && (
                        <>
                          {companyDetails.profile.raw_data.registered_office_address.address_line_2}
                          <br />
                        </>
                      )}
                      {companyDetails.profile.raw_data.registered_office_address?.locality},{" "}
                      {companyDetails.profile.raw_data.registered_office_address?.region}
                      <br />
                      {companyDetails.profile.raw_data.registered_office_address?.postal_code}
                    </div>
                  </div>
                  <div>
                    <b>SIC Codes:</b>{" "}
                    {companyDetails.profile.raw_data.sic_codes?.join(", ") || "-"}
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{ marginBottom: 10, color: "#2563eb", fontWeight: 700, fontSize: 20 }}>
                  Accounts & Statements
                </h3>
                <div style={{ color: "#334155", fontSize: 16, lineHeight: 1.7 }}>
                  <div>
                    <b>Accounts:</b>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      <li>
                        Last Made Up To:{" "}
                        {companyDetails.profile.raw_data.accounts?.last_accounts?.made_up_to ||
                          "-"}
                      </li>
                      <li>
                        Next Due:{" "}
                        {companyDetails.profile.raw_data.accounts?.next_accounts?.due_on ||
                          "-"}
                      </li>
                      <li>
                        Overdue:{" "}
                        {companyDetails.profile.raw_data.accounts?.overdue ? "Yes" : "No"}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <b>Confirmation Statement:</b>
                    <ul style={{ margin: 0, paddingLeft: 20 }}>
                      <li>
                        Last Made Up To:{" "}
                        {companyDetails.profile.raw_data.confirmation_statement?.last_made_up_to ||
                          "-"}
                      </li>
                      <li>
                        Next Due:{" "}
                        {companyDetails.profile.raw_data.confirmation_statement?.next_due ||
                          "-"}
                      </li>
                      <li>
                        Overdue:{" "}
                        {companyDetails.profile.raw_data.confirmation_statement?.overdue
                          ? "Yes"
                          : "No"}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Names */}
            {companyDetails.profile.raw_data.previous_company_names?.length > 0 && (
              <div
                style={{
                  marginBottom: 36,
                  background: "#f8fafc",
                  borderRadius: 10,
                  padding: "18px 22px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <h3 style={{ marginBottom: 10, color: "#2563eb", fontWeight: 700, fontSize: 18 }}>
                  Previous Company Names
                </h3>
                <ul style={{ color: "#334155", paddingLeft: 18, fontSize: 15 }}>
                  {companyDetails.profile.raw_data.previous_company_names.map((name, idx) => (
                    <li key={idx}>
                      {name.name}{" "}
                      <span style={{ color: "#64748b" }}>
                        (from {name.effective_from} to {name.ceased_on})
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Officers Section */}
            <OfficerDetails officers={officersData} />

            {/* News Section */}
            <NewsDetails newsData={newsData?.checks} />
          </>
        ) : (
          <div style={{ textAlign: "center", padding: 80 }}>
            <div
              className="loader"
              style={{
                margin: "0 auto 20px",
                border: "5px solid #e5e7eb",
                borderTop: "5px solid #3b82f6",
                borderRadius: "50%",
                width: 48,
                height: 48,
                animation: "spin 1s linear infinite",
              }}
            />
            <p style={{ color: "#64748b", fontSize: 18, marginTop: 10 }}>
              Loading company profile...
            </p>
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}