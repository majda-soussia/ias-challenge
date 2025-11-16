import SidebarNavigation from "./SidebarNavigation";
import TopNavbar from "./TopNavbar";

export default function MainLayout({ children }) {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <SidebarNavigation />

      {/* Content */}
      <div className="flex-grow-1 d-flex flex-column">

        <TopNavbar />

        <div className="p-4 overflow-auto" style={{ height: "calc(100vh - 60px)" }}>
          {children}
        </div>

      </div>
    </div>
  );
}
