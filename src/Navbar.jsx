function Navbar() {
  return (
    <nav className="bg-white shadow-md py-2 px-4 sticky top-0 z-50">
      <div className="max-w-7x1 mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick="#">
          <img
            src="src\assets\robot_chef.png"
            alt="robot chef"
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-gray-800">
            Leftover Chef (AI)
          </span>
        </div>
        <div className="flex-1 min-w-[120px] max-w-[600px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
