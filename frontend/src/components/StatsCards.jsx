function StatsCards({ plans }) {

  const totalPlans = plans.length;

  const avgScore =
    plans.length > 0 ? 85 : 0;

  const pdfs = plans.length;

  const today = plans.length;

  const stats = [
    {
      title: "Startup Plans",
      value: totalPlans,
      icon: "🚀",
      color: "bg-blue-500",
    },
    {
      title: "Average Score",
      value: avgScore + "%",
      icon: "⭐",
      color: "bg-green-500",
    },
    {
      title: "PDF Downloads",
      value: pdfs,
      icon: "📄",
      color: "bg-purple-500",
    },
    {
      title: "Today's Plans",
      value: today,
      icon: "🔥",
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 mb-8">

      {stats.map((item, index) => (

        <div
          key={index}
          className={`${item.color} text-white rounded-2xl shadow-lg p-6`}
        >
          <div className="text-4xl">
            {item.icon}
          </div>

          <h2 className="mt-4 text-lg">
            {item.title}
          </h2>

          <h1 className="text-4xl font-bold mt-2">
            {item.value}
          </h1>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;