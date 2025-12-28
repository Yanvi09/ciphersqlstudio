const API_BASE = "http://localhost:5000/api";

export async function runQuery(query) {
  const res = await fetch(`${API_BASE}/query`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Query failed");
  }

  return res.json();
}

export async function getHint(payload) {
  const res = await fetch(`${API_BASE}/hint`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Hint failed");
  }

  return res.json();
}
