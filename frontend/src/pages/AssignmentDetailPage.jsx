import { useState } from "react";
import { useParams } from "react-router-dom";
import QuestionPanel from "../components/QuestionPanel";
import SqlEditor from "../components/SqlEditor";
import HintBox from "../components/HintBox";
import ResultsTable from "../components/ResultsTable";
import { runQuery, getHint } from "../api/client";

function AssignmentDetailPage() {
  const { id } = useParams();

  const [query, setQuery] = useState("");
  const [hint, setHint] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleRunQuery() {
    try {
      setLoading(true);
      setError(null);
      const data = await runQuery(query);
      setResults(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGetHint() {
    try {
      setError(null);
      setHint("Fetching hint...");
      const res = await getHint({
        question: "Find users older than 25",
        schema: "users(id, name, email, age)",
        userQuery: query
      });
      setHint(res.hint);
    } catch (err) {
      setHint(null);
      setError(err.message);
    }
  }

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px" }}>
      <QuestionPanel
        question="Find users older than 25"
        schema="users(id, name, email, age)"
      />

      <SqlEditor value={query} onChange={setQuery} />

      <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
        <button
          onClick={handleRunQuery}
          disabled={loading}
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          {loading ? "Running..." : "Run Query"}
        </button>

        <button
          onClick={handleGetHint}
          style={{
            padding: "10px 18px",
            background: "#f9fafb",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Get Hint
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "16px" }}>
          {error}
        </p>
      )}

      <HintBox hint={hint} />
      <ResultsTable data={results} />
    </div>
  );
}

export default AssignmentDetailPage;
