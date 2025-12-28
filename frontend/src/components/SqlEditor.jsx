function SqlEditor({ value, onChange }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write your SQL query here..."
      style={{
        width: "100%",
        height: "140px",
        padding: "12px",
        fontFamily: "monospace",
        marginBottom: "16px"
      }}
    />
  );
}

export default SqlEditor;
