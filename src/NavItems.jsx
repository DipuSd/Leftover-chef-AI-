function NavItems({ icon, label, IssidebarOpen }) {
  return (
    <div className="px-4 py-3 flex items-center text-gray-700 hover:bg-gray-100 cursor-pointer">
      <span className="text-xl mr-3">{icon}</span>
      {IssidebarOpen && <span>{label}</span>}
    </div>
  );
}
export default NavItems;
