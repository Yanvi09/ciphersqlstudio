function ResultsTable({ data }) {
  if (!data) {
    return <p style={{ color: "#6b7280" }}>Query results will appear here.</p>;
  }

  if (data.length === 0) {
    return <p>No results found.</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "16px"
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col}
              style={{
                textAlign: "left",
                borderBottom: "1px solid #e5e7eb",
                padding: "8px"
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx}>
            {columns.map((col) => (
              <td
                key={col}
                style={{
                  padding: "8px",
                  borderBottom: "1px solid #f3f4f6"
                }}
              >
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ResultsTable;
