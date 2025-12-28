import { useNavigate } from "react-router-dom";

function AssignmentsPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "48px 24px"
      }}
    >
      {/* Page Header */}
      <header style={{ marginBottom: "32px" }}>
        <h1 style={{ marginBottom: "8px" }}>SQL Assignments</h1>
        <p style={{ color: "#6b7280" }}>
          Select an assignment to begin.
        </p>
      </header>

      {/* Assignment Card */}
      <div
        onClick={() => navigate("/assignments/1")}
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "10px",
          padding: "24px",
          cursor: "pointer",
          background: "#ffffff",
          transition: "box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.boxShadow =
            "0 10px 20px rgba(0,0,0,0.06)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.boxShadow = "none")
        }
      >
        <h2 style={{ marginBottom: "8px" }}>Basic Filtering</h2>
        <p style={{ color: "#4b5563", margin: 0 }}>
          Practice filtering records using WHERE conditions.
        </p>
      </div>
    </div>
  );
}

export default AssignmentsPage;
