import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 text-base-content px-4">
      <div className="text-center space-y-4 max-w-md">
        <h1 className="text-4xl font-bold">🌿 Verit by Tredit</h1>
        <p className="text-lg opacity-80">
          The easiest way to begin your due diligence journey. Sign in and get started with Verit.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            className="btn btn-primary w-full sm:w-auto"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <select
            className="select select-bordered w-full sm:w-auto"
            onChange={(e) =>
              document.documentElement.setAttribute("data-theme", e.target.value)
            }
          >
            <option disabled selected>Pick a theme</option>
            <option value="emerald">Emerald</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;