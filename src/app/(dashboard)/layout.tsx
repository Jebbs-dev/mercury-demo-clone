import Sidebar from "@/components/sidebar";
import TopBar from "@/components/topbar";


interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <TopBar/>
      <Sidebar/>
      {children}
    </div>
  );
};

export default DashboardLayout;
