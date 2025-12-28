import { useNavigate } from "react-router-dom";

function AssignmentCard({ id, title, description }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/assignments/${id}`)}
      style={{
        border: "1px solid #e5e7eb",
        padding: "20px",
        borderRadius: "8px",
        cursor: "pointer",
        background: "#fff",
        marginTop: "16px"
      }}
    >
      <h3>{title}</h3>
      <p style={{ color: "#6b7280" }}>{description}</p>
    </div>
  );
}

export default AssignmentCard;
