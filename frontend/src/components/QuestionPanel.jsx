function QuestionPanel({ question, schema }) {
  return (
    <div
      style={{
        marginBottom: "32px",
        padding: "20px",
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#ffffff"
      }}
    >
      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ marginBottom: "8px" }}>Question</h3>
        <p style={{ margin: 0 }}>{question}</p>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Schema</h4>
        <pre
          style={{
            margin: 0,
            padding: "12px",
            backgroundColor: "#f9fafb",
            borderRadius: "6px",
            fontSize: "14px",
            overflowX: "auto"
          }}
        >
          {schema}
        </pre>
      </div>
    </div>
  );
}

export default QuestionPanel;
