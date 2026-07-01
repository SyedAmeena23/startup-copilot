import { useState, useEffect } from "react";
import axios from "axios";
import InfoCard from "./components/InfoCard";
import FinanceChart from "./components/FinanceChart";
import StatsCards from "./components/StatsCards";
import Dashboard from "./components/Dashboard";
import RecentPlans from "./components/RecentPlans";
import { auth, provider } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  signInWithPopup,
  signOut,
} from "firebase/auth";
function App() {
  const [idea, setIdea] = useState("");
  const [report, setReport] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);
useEffect(() => {

  if (!user) return;

  fetch(`http://127.0.0.1:8000/history?user_id=${user.uid}`)
    .then((res) => res.json())
    .then((data) => setPlans(data))
    .catch(console.error);

}, [user]);
  const generatePlan = async () => {
    if (!user) {
  alert("Please sign in first.");
  return;
}
    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/generate",
        {
           user_id: user.uid,
          idea: idea,
        }
      );

      console.log("Response:", response.data);

      // If your backend returns the complete graph state,
      // use final_report if available, otherwise use the whole response.
      if (response.data.final_report) {
        setReport(response.data.final_report);
        toast.success("Startup plan generated successfully!");

      } else {
        setReport(response.data);
      }

    } catch (error) {
  console.error("FULL ERROR:", error);

  if (error.response) {
    console.log("Status:", error.response.status);
    console.log("Response:", error.response.data);
  } else if (error.request) {
    console.log("No response received:", error.request);
  } else {
    console.log("Error message:", error.message);
  }

  toast.error("Error generating startup plan");
}

    setLoading(false);
  };
  const login = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    toast.success("Welcome " + result.user.displayName + "!");
  } catch (err) {
    console.error(err);
  }
};
const logout = async () => {
  await signOut(auth);
  setUser(null);
  toast.info("Logged out successfully");
};

  const downloadPDF = () => {
  toast.success("Downloading PDF...");
  window.open("http://127.0.0.1:8000/download-pdf", "_blank");
};

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="max-w-7xl mx-auto p-8">

 <Navbar user={user} logout={logout} />
 <div className="text-center py-12">

  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
    🚀 AI Powered Startup Planning
  </div>

  <h1 className="text-6xl font-extrabold mt-6 leading-tight">
    Build Your Startup
    <br />
    <span className="text-blue-600">
      With AI Multi-Agent Intelligence
    </span>
  </h1>

  <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
    Generate investor-ready startup plans including market research,
    competitor analysis, financial projections, product strategy,
    marketing strategy, and downloadable reports in minutes.
  </p>

</div>

</div>
        <div className="flex justify-end mt-4">

  {!user ? (

    <button
      onClick={login}
      className="bg-red-500 text-white px-6 py-2 rounded-lg"
    >
      Sign in with Google
    </button>

  ) : (

    <div className="flex items-center gap-4">

      <img
        src={user.photoURL}
        alt=""
        className="w-10 h-10 rounded-full"
      />

      <span>{user.displayName}</span>

      <button
        onClick={logout}
        className="bg-gray-700 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>

  )}

</div>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mt-8 border border-gray-100">

          <h2 className="text-3xl font-bold mb-3">
  💡 Describe Your Startup Idea
</h2>

<p className="text-gray-500 mb-6">
  Example: AI-powered study planner for engineering students
</p>

          <textarea
            className="w-full p-5 text-lg rounded-2xl border border-gray-300 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition resize-none"
            placeholder="Describe your startup idea..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
          />

          <div className="flex justify-center gap-4 mt-6">

            <button
              onClick={generatePlan}
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:scale-105 text-white px-10 py-4 rounded-2xl shadow-lg transition duration-300"
            >
              🚀 ✨ Generate AI Business Plan
            </button>

            <button
              onClick={downloadPDF}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
            >
              📄 Download PDF
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
        <Features />

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

            <StatsCards plans={plans} />

            <div className="bg-yellow-100 border-l-8 border-yellow-500 rounded-xl shadow-md p-6 mb-8">

              <h2 className="text-3xl font-bold">
                ⭐ Startup Score
              </h2>

              <h1 className="text-6xl font-extrabold text-yellow-700 mt-2">
                {report.startup_score}/100
              </h1>

              <p className="mt-4 text-lg text-gray-700">
                💡 {report.recommendation}
              </p>

            </div>

            <InfoCard title="🚀 Executive Summary">
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
                {typeof report.finance_plan === "object"
                  ? JSON.stringify(report.finance_plan, null, 2)
                  : report.finance_plan}
              </InfoCard>

              <InfoCard title="📦 Product Strategy">
                {report.product_strategy}
              </InfoCard>

              <div className="md:col-span-2">
                <InfoCard title="📢 Marketing Strategy">
                  {report.marketing_strategy}
                </InfoCard>

                <FinanceChart />
              </div>

            </div>

          </>
        )}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

  <h2 className="text-2xl font-bold mb-4">
    🔍 Search Startup Plans
  </h2>

  <input
    type="text"
    placeholder="Search by startup idea..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />

</div>
        <RecentPlans
  plans={plans.filter((plan) =>
    plan.idea.toLowerCase().includes(search.toLowerCase())
  )}
  setPlans={setPlans}
  setReport={setReport}
/>
<Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}


export default App;