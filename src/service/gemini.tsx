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
  console.log(prompt);

  const chatSession = await model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {
            text: `Generate a travel plan for location: Las Vegas, for 3 days, for a couple on a cheap budget. Include hotel options with hotelName, address, price, imageUrl, geoCoordinates, rating, description. Suggest a day-by-day itinerary with placeName, placeDetails, imageUrl, geoCoordinates, ticketPricing, travelTime.`,
          },
        ],
      },
      {
        role: "model",
        parts: [
          {
            text: `\`\`\`json
{
  "hotelOptions": [
    {
      "hotelName": "Circus Circus Hotel & Casino",
      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
      "price": {
        "low": 30,
        "high": 80
      },
      "hotelImageUrl": "https://example.com/circus.jpg",
      "geoCoordinates": { "latitude": 36.1215, "longitude": -115.1724 },
      "rating": 3.5,
      "description": "A budget-friendly option with a classic Vegas vibe."
    }
  ],
  "itinerary": {
    "day1": [
      {
        "placeName": "Fremont Street",
        "placeDetails": "Street performers and LED shows",
        "placeImageUrl": "https://example.com/fremont.jpg",
        "geoCoordinates": { "latitude": 36.1692, "longitude": -115.1407 },
        "ticketPricing": "Free",
        "travelTime": "15 mins from hotel"
      }
    ]
  }
}
\`\`\``,
          },
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const text = result.response.text();

  try {
    const cleaned = text.replace(/```json|```/g, "").trim();
    return JSON.parse(cleaned);
  } catch {
    return text;
  }
};
