import { useState } from "react";
import axios from "axios";
import InfoCard from "./components/InfoCard";

function App() {
  const [idea, setIdea] = useState("");
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
          idea: idea,
        }
      );

      setReport(response.data.final_report);
    } catch (error) {
      console.error(error);
      alert("Error generating startup plan");
    }

    setLoading(false);
  };

 return (
  <div className="min-h-screen bg-gray-100">

    <div className="max-w-7xl mx-auto p-8">

      <h1 className="text-5xl font-bold text-center text-blue-600">
        🚀 Startup Copilot
      </h1>

      <p className="text-center text-gray-600 mt-3">
        AI Powered Multi-Agent Startup Generator
      </p>

      <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">

        <h2 className="text-2xl font-semibold mb-4">
          Startup Idea
        </h2>

        <textarea
          className="w-full p-4 rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Describe your startup idea..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
        />

        <div className="flex justify-center gap-4 mt-6">

          <button
            onClick={generatePlan}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-md transition"
          >
            🚀 Generate Startup Plan
          </button>

          <button
            onClick={() => {
              setIdea("");
              setReport({});
            }}
            className="bg-gray-200 hover:bg-gray-300 px-8 py-3 rounded-xl transition"
          >
            Clear
          </button>

        </div>

      </div>

      {loading && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 text-center">
          <div className="animate-pulse">
            <h2 className="text-2xl font-bold text-blue-700">
              🤖 AI Agents are working...
            </h2>

            <p className="mt-2 text-gray-700">
              Planner • Market • Competitor • Finance • Product • Marketing
            </p>
          </div>
        </div>
      )}

      {!loading && !report.market_analysis && (
        <div className="bg-white rounded-2xl shadow-md p-10 mt-8 text-center">
          <h2 className="text-3xl font-bold text-gray-700">
            🚀 Ready to build your startup?
          </h2>

          <p className="mt-3 text-gray-500">
            Enter your startup idea above and let multiple AI agents create a complete business plan.
          </p>
        </div>
      )}

      {report.market_analysis && (
        <>

    <InfoCard title="🚀 Executive Summary" hero={true}>
      {report.summary}
    </InfoCard>

    <div className="grid md:grid-cols-2 gap-6 mt-8">

      <InfoCard title="📊 Market Analysis">
        {report.market_analysis}
      </InfoCard>

      <InfoCard title="🏢 Competitor Analysis">
        {report.competitor_analysis}
      </InfoCard>

      <InfoCard title="💰 Financial Plan">
        {report.finance_plan}
      </InfoCard>

      <InfoCard title="📦 Product Strategy">
        {report.product_strategy}
      </InfoCard>

      <div className="md:col-span-2">
        <InfoCard title="📢 Marketing Strategy">
          {report.marketing_strategy}
        </InfoCard>
      </div>

    </div>

  </>
)}

      </div>

    </div>
  );
}

export default App;