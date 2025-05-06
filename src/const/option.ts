export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A Sole Traveles in exploration",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two Traveles in Tendem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A Group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A Group of fun loving adv",
    icon: "⛵",
    people: "6 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Save big with hostels and street food.",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Comfortable stays with a balanced spend.",
    icon: "🪙",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Indulge in premium travel experiences.",
    icon: "💰",
  },
];

export const AI_PROMPT = `
Generate Travel Plan for Location: {destination}, for {duration} Days for {travelList} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {duration} days with each day plan with best time to visit in JSON format.
`;
