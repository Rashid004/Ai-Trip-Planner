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

export const AI_PROMPT = `Generate a travel plan for location: {location}, for {totalDays} days for a {traveler} with a {budget} budget.
Give hotel options: hotelName, address, price, imageUrl, geoCoordinates, rating, description.
Then, suggest an itinerary: placeName, placeDetails, imageUrl, geoCoordinates, ticketPricing, travelTime for {totalDays} days in JSON format.`;
