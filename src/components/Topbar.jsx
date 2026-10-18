
import { useLocation, useNavigate } from "react-router-dom";

function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const pageTitle =
    location.pathname === "/analytics"
      ? "Analytics"
      : "Dashboard";

  function handleLogout() {
    localStorage.removeItem("isLoggedIn");
    navigate("/login", { replace: true });
  }

  return (
    <header className="topbar">
      <h2>{pageTitle}</h2>

      <div className="topbar-actions">
        <p>Admin</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
}

export default Topbar;
