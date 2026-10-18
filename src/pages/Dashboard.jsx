import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import DataTable from "../components/DataTable";

function Dashboard() {
  const [users, setUsers] = useState(1234);
  useEffect(() => {
    const timerId = setInterval(() => {
      setUsers((currentUsers) => currentUsers + 1);
    }, 5000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <h1>Nexus Admin Dashboard</h1>

      <div className="stat-cards-container">
        <StatCard
          title="Total Users"
          value={users.toLocaleString()}
          change="Live updates"
        />
        <StatCard title="Active Sessions" value="567" change="-2%" />
        <StatCard title="Revenue" value="$12,345" change="+10%" />
      </div>
      <div className="chart-container">
        <h2>Users Overview</h2>
        <div className="chart-wrapper">
          <LineChart />
        </div>
      </div>
      <div className="chart-container">
        <h2>Revenue Overview</h2>
        <div className="chart-wrapper">
          <BarChart />
        </div>
      </div>
      <DataTable />
    </>
  );
}

export default Dashboard;
