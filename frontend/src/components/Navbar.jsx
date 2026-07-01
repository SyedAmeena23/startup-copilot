function Navbar({ user, logout }) {
  return (
    <nav className="bg-white shadow-md rounded-2xl px-8 py-4 flex justify-between items-center mb-8">

      <div className="flex items-center gap-3">

        <div className="text-4xl">
          🚀
        </div>

        <div>
          <h1 className="text-2xl font-extrabold">
            Startup Copilot
          </h1>

          <p className="text-sm text-gray-500">
            AI Business Planning Platform
          </p>
        </div>

      </div>

      <div className="flex items-center gap-6">

        <a href="#" className="font-medium hover:text-blue-600">
          Dashboard
        </a>

        <a href="#" className="font-medium hover:text-blue-600">
          History
        </a>

        <a href="#" className="font-medium hover:text-blue-600">
          Generate
        </a>

        {user && (
          <>
            <img
              src={user.photoURL}
              alt=""
              className="w-10 h-10 rounded-full"
            />

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;