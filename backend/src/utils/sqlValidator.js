const forbiddenKeywords = [
  "DROP",
  "DELETE",
  "UPDATE",
  "INSERT",
  "ALTER",
  "TRUNCATE",
  "CREATE"
];

function isQuerySafe(query) {
  const upperQuery = query.toUpperCase();
  return !forbiddenKeywords.some(keyword =>
    upperQuery.includes(keyword)
  );
}

module.exports = {
  isQuerySafe
};
