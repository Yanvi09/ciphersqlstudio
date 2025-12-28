function HintBox({ hint }) {
  if (!hint) return null;

  return (
    <div
      style={{
        background: "#eff6ff",
        borderLeft: "4px solid #2563eb",
        padding: "14px 16px",
        marginBottom: "24px",
        borderRadius: "4px"
      }}
    >
      <strong style={{ display: "block", marginBottom: "6px" }}>
        Hint
      </strong>
      <p style={{ margin: 0 }}>{hint}</p>
    </div>
  );
}

export default HintBox;
