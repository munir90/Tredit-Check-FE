# Tredit Check — Frontend (FE)

This is the **frontend application** for **Tredit Check**, a unified due diligence platform under the **Tredit Ecosystem**.
It offers an intuitive interface to access real-time compliance data, risk scoring, and due diligence reports for individuals and companies.

---

## 🌐 What is Tredit Check?

**Tredit Check** helps automate and simplify due diligence for regulated financial environments.
It aggregates multiple compliance checks into a single workflow, including:

- 🌍 Sanctions & PEP screening
- 📰 Adverse media lookup
- 🏢 Company and UBO information
- ⚖️ Regulatory & financial background
- 📊 Risk summary & flagging
- 🤖 AI-generated reports *(coming soon)*

---

## 🖥️ Frontend Features

- 🔎 **Due Diligence Search Panel**
  Input names, companies, or registration numbers to perform comprehensive checks.

- 📊 **Risk Overview Dashboard**
  Visual representation of risk levels, flags, and confidence scores.

- 🧾 **Detailed Report Viewer**
  Access unified responses from multiple sources.

- 🧠 **AI Summary Section** *(coming soon)*
  Generated risk narrative from collected data.

- 🔐 **Secure Access**
  Supports API key protection or future wallet-based login (for ERC-3643).

---

## 🚀 Tech Stack

- **Framework:** React (with Vite)
- **Styling:** TailwindCSS + DaisyUI
- **Routing:** React Router
- **State:** React Hooks + Context
- **API:** Axios to communicate with the Tredit Check backend

---

## 🛠️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/Tredit-Finance/Tredit-Check-FE.git
cd Tredit-Check-FE

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
# Then update .env with correct API URLs

# 4. Run the app
npm run dev