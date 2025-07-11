import { FiMenu, FiHome, FiGrid, FiPlusCircle, FiZap } from "react-icons/fi";
import NavItems from "./NavItems";
import { NavLink } from "react-router-dom";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navItems = [
    { icon: <FiHome />, label: "Home", path: "/" },
    {
      icon: <FiGrid />,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <FiPlusCircle />,
      label: "Generate Recipe",
      path: "/generate-recipe",
    },
    { icon: <FiZap />, label: "Quick Tips", path: "/quick-tips" },
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
          className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FiMenu size={24} />
        </button>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive
                ? "bg-gray-100 text-blue-600"
                : "text-gray-700 hover:bg-gray-100"
            }
          >
            <NavItems
              key={index}
              icon={item.icon}
              label={item.label}
              IssidebarOpen={sidebarOpen}
            />
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
export default Sidebar;
