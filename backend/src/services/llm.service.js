/**
 -> LLM Hint Service
 
 1 This function is intentionally kept simple.
 2 Calling a real LLM API during evaluation can be unreliable
 3 because of API keys, rate limits, or network issues.
  
 4 In a real application, this is where an LLM would be used
 5 with strict rules to provide guidance only,
 5 not full SQL queries or direct answers.
 */




function generateHint() {
  return "Focus on filtering records based on the condition described in the question.";
}

/*
Production outline (not executed here):

async function generateHint({ question, schema, userQuery }) {
  const prompt = buildConstrainedPrompt(question, schema, userQuery);

  const response = await llmClient.send({
    prompt,
    temperature: 0.2
  });

  return response.text;
}
*/

module.exports = { generateHint };
