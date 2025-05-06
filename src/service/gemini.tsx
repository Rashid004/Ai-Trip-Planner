import { GoogleGenerativeAI } from "@google/generative-ai";
import { AI_PROMPT } from "../const/option";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  responseMimeType: "application/json",
  maxOutputTokens: 8192,
};

export const generateTripPlan = async (formData: {
  destination: string;
  duration: number;
  budget: string;
  travelList: string;
}) => {
  const prompt = AI_PROMPT.replace("{location}", formData.destination)
    .replace("{traveler}", formData.travelList)
    .replace("{budget}", formData.budget)
    .replace(/{totalDays}/g, String(formData.duration));

  console.log("Prompt:", prompt);
  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig,
    });

    console.log("Gemini Generation Result:", result);
    const text = result.response.text();
    const cleaned = text.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Gemini generation failed:", err);
    throw err;
  }
};
