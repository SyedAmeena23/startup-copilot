import { useState } from "react";
import axios from "axios";

function App() {
  const [idea, setIdea] = useState("");
  const [report, setReport] = useState("");
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
      console.log(response.data);

      setReport(response.data.market_analysis);
    } catch (error) {
      console.error(error);
      alert("Error generating startup plan");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>🚀 Startup Copilot</h1>

      <textarea
        rows="5"
        cols="60"
        placeholder="Enter your startup idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
      />

      <br />
      <br />

      <button onClick={generatePlan}>
        Generate Startup Plan
      </button>

      <br />
      <br />

      {loading && <p>Generating...</p>}

      <pre>{report}</pre>
    </div>
  );
}

export default App;