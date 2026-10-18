
import StatCard from "../components/StatCard";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

function Analytics() {
  return (
    <section className="analytics-page">
      <h1>Analytics Overview</h1>
      <p>Track your business performance and growth.</p>

      <div className="stat-cards-container">
        <StatCard
          title="Total Visitors"
          value="8,549"
          change="+12.5%"
        />

        <StatCard
          title="Conversion Rate"
          value="4.8%"
          change="+0.8%"
        />

        <StatCard
          title="Bounce Rate"
          value="32.4%"
          change="-2.1%"
        />
      </div>

      <div className="chart-container">
        <h2>Visitors Growth</h2>
        <div className="chart-wrapper">
          <LineChart />
        </div>
      </div>

      <div className="chart-container">
        <h2>Revenue Analysis</h2>
        <div className="chart-wrapper">
          <BarChart />
        </div>
      </div>
    </section>
  );
}

export default Analytics;
