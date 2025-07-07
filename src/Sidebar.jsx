import { FiMenu, FiHome, FiGrid, FiPlusCircle, FiZap } from "react-icons/fi";
import NavItems from "./NavItems";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiGrid />, label: "Dashboard" },
    { icon: <FiPlusCircle />, label: "Generate Recipe" },
    { icon: <FiZap />, label: "Quick Tips" },
  ];
  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-20"
      } bg-white shadow-md transition-all duration-300 fixed h-screen`}
    >
      <div className="p-4 flex items-center justify-between">
        {sidebarOpen && <h1 className="text-xl font-bold">Menu</h1>}
        <button
          className="p-2 rounded-lg hover:bg-gra-100 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu size={24} />
        </button>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <NavItems
            key={index}
            icon={item.icon}
            label={item.label}
            IssidebarOpen={sidebarOpen}
          />
        ))}
      </nav>
    </div>
  );
}
export default Sidebar;
