function Dashboard({ user }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl shadow-xl p-8 mb-8">

      <div className="flex items-center gap-6">

        <img
          src={user.photoURL}
          alt=""
          className="w-24 h-24 rounded-full border-4 border-white"
        />

        <div>

          <h2 className="text-4xl font-bold">
            Welcome, {user.displayName}
          </h2>

          <p className="text-blue-100 text-lg">
            {user.email}
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;