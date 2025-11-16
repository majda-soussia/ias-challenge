import MainLayout from "../components/layout/MainLayout";
import SystemStatusCard from "../components/dashboard/SystemStatusCard";
import CyberAlertSummary from "../components/dashboard/CyberAlertSummary";
import SafetyAlertSummary from "../components/dashboard/SafetyAlertSummary";
const alerts = [
  { type: "Warning", message: "High temperature in Zone A" },
  { type: "Critical", message: "Fire detected in Zone B" },
];
export default function Dashboard() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <SystemStatusCard
            uptime="99.7%"
            sensorsActive={128}
            status="Operational"
          />
        </div>
        <div className="col-md-4">
          <CyberAlertSummary total={18} critical={2} />
        </div>
        <div className="col-md-4">
        <SafetyAlertSummary alerts={alerts} />
        
      </div>
      </div>
    </MainLayout>
  );
}
