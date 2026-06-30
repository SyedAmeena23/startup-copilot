function InfoCard({ title, children, hero = false }) {
  return (
    <div
      className={
        hero
          ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8"
          : "bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
      }
    >
      <h2
        className={
          hero
            ? "text-2xl font-bold mb-4"
            : "text-xl font-bold mb-4"
        }
      >
        {title}
      </h2>

      <pre
        className={
          hero
            ? "whitespace-pre-wrap text-white"
            : "whitespace-pre-wrap text-gray-700"
        }
      >
        {children}
      </pre>
    </div>
  );
}

export default InfoCard;