import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopBar />
      <div className="flex flex-row space-x-4">
        <Sidebar />
        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
