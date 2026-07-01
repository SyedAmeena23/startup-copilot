import axios from "axios";
import { toast } from "react-toastify";
function RecentPlans({ plans, setPlans, setReport }) {

  const deletePlan = async (id) => {
    try {

      await axios.delete(
        `http://127.0.0.1:8000/delete/${id}`
      );

      setPlans(
        plans.filter((plan) => plan.id !== id)
      );
      toast.success("Startup plan deleted!");

    } catch (err) {
      console.error(err);
    }
  };
  const openReport = (plan) => {
  try {
    const report = JSON.parse(plan.report);

    if (report.final_report) {
      setReport(report.final_report);
    } else {
      setReport(report);
    }
  } catch (err) {
    console.error(err);
  }
};

  if (!plans || plans.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
        <h2 className="text-2xl font-bold mb-4">
          📂 Recent Startup Plans
        </h2>

        <p className="text-gray-500">
          No startup plans generated yet.
        </p>
      </div>
    );
  }


  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        📂 Recent Startup Plans
      </h2>

      <div className="space-y-4">

        {plans.map((plan, index) => (

         <div
  key={plan.id}
  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"
>

  <h2 className="text-2xl font-bold">
    🚀 {plan.idea}
  </h2>

  <p className="text-gray-500 mt-2">
    Generated Startup Report
  </p>

  <div className="flex gap-4 mt-5">

    <button
  onClick={() => openReport(plan)}
  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
  📂 Open
</button>

    <button
  onClick={() => deletePlan(plan.id)}
  className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
>
  Delete
</button>

  </div>

</div>

        ))}

      </div>

    </div>
  );
}

export default RecentPlans;