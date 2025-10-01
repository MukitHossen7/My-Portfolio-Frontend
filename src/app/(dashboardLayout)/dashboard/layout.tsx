const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#020617]">
      {/* sidebar */}
      {children}
    </div>
  );
};

export default DashboardLayout;
