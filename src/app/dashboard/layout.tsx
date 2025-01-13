import { DashboardNavbar } from "./_components/dashboard-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <DashboardNavbar />
      {children}
    </div>
  );
};

export default DashboardLayout;
