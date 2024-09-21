import DashboardSummary from "./DashboardSummary";
import Header from "./Header";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <DashboardSummary />
    </div>
  );
};

export default Dashboard;
