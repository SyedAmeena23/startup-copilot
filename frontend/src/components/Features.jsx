function Features() {

  const features = [
    {
      icon: "🧠",
      title: "AI Planner",
      desc: "Transforms ideas into structured startup plans.",
    },
    {
      icon: "📊",
      title: "Market Research",
      desc: "Analyzes demand, trends and opportunities.",
    },
    {
      icon: "🏢",
      title: "Competitor Analysis",
      desc: "Identifies competitors and market gaps.",
    },
    {
      icon: "💰",
      title: "Financial Planning",
      desc: "Estimates investment and revenue.",
    },
    {
      icon: "📦",
      title: "Product Strategy",
      desc: "Defines MVP and roadmap.",
    },
    {
      icon: "📢",
      title: "Marketing",
      desc: "Creates launch and growth strategy.",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 my-12">

      {features.map((feature, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition"
        >

          <div className="text-5xl">
            {feature.icon}
          </div>

          <h2 className="text-2xl font-bold mt-4">
            {feature.title}
          </h2>

          <p className="mt-3 text-gray-600">
            {feature.desc}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Features;