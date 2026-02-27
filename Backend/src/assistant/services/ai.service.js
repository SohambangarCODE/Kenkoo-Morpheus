const { ChatGoogleGenerativeAI } = require("@langchain/google-genai");

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: process.env.GEMINI_API_KEY,
});

const analyzeMedicalReport = async (text, question = null) => {
  const prompt = `
You are a medical AI assistant.

Analyze the medical report.

Return ONLY JSON.
The "answer_to_user" field MUST be formatted as a text-based table for data, followed by insights in plain text.
Use strictly aligned columns for the table.

Format example for "answer_to_user":
"
| Test Name | Result | Reference Range | Status |
| :--- | :--- | :--- | :--- |
| Hemoglobin | 11.0 g/dL | 13.5-17.5 | LOW |
| WBC | 12000 | 4500-11000 | HIGH |

INSIGHTS:
The patient has anemia and leukocytosis...
"

JSON Structure:
{
  "patient_name": "",
  "diagnosis": "",
  "abnormal_values": [],
  "risk_level": "",
  "summary": "",
  "answer_to_user": "",
  "metrics": [
    { "name": "Hemoglobin", "value": 14.1, "unit": "g/dL", "status": "Normal" },
    { "name": "Cholesterol", "value": 190, "unit": "mg/dL", "status": "Normal" }
  ],
  "recommendations": [
    "Increase iron intake through leafy greens.",
    "Maintain regular exercise routine."
  ]
}

User Question: ${question || "No question asked"}

Report:
${text}
`;

  const response = await model.invoke(prompt);

  try {
    const cleaned = response.content.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return { raw: response.content };
  }
};

const chatWithAI = async (message) => {
  const prompt = `
You are a helpful and knowledgeable medical AI assistant.
Answer the user's health-related questions clearly and concisely.
If the question is not related to health, politely steer the conversation back to health topics.

User: ${message}
`;

  const response = await model.invoke(prompt);
  return response.content;
};

module.exports = { analyzeMedicalReport, chatWithAI };
