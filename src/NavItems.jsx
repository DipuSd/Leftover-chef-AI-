function NavItems({ icon, label, IssidebarOpen }) {
  return (
    <div className="px-4 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
      <span className="text-xl mr-3">{icon}</span>
      {IssidebarOpen && (
        <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">
          {label}
        </span>
      )}
    </div>
  );
}
export default NavItems;
