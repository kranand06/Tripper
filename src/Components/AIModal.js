import { GoogleGenerativeAI } from "@google/generative-ai";


const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        { text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for A Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url,  rating and suggest itinerary in an array with placeName, Place Details, Place Image Url, Geo Coordinates, ticket, Pricing,ratings, Time to travel each of the location for 3 days with each day plan with best time to visit in JSON format." },
      ],
    },
    {
      role: "model",
      parts: [
        { text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 S Las Vegas Blvd, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/b1/2d/9d/circus-circus-hotel-casino.jpg\",\n      \"rating\": 3.5\n    },\n     {\n      \"hotelName\": \"Excalibur Hotel & Casino\",\n      \"hotelAddress\": \"3850 S Las Vegas Blvd, Las Vegas, NV 89109\",\n       \"price\": \"$50 - $90 per night\",\n      \"hotelImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/7b/b5/e9/excalibur-hotel-casino.jpg\",\n      \"rating\": 3.8\n    },\n    {\n      \"hotelName\": \"Luxor Hotel and Casino\",\n       \"hotelAddress\": \"3900 S Las Vegas Blvd, Las Vegas, NV 89119\",\n        \"price\": \"$60 - $100 per night\",\n      \"hotelImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/df/f7/50/luxor-hotel-casino.jpg\",\n      \"rating\": 4.0\n    },\n    {\n      \"hotelName\": \"The LINQ Hotel + Experience\",\n       \"hotelAddress\": \"3535 S Las Vegas Blvd, Las Vegas, NV 89109\",\n        \"price\": \"$70 - $120 per night\",\n      \"hotelImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/d5/6f/f5/the-linq-hotel-experience.jpg\",\n      \"rating\": 4.2\n    }\n\n  ],\n  \"itinerary\": [\n    {\n      \"day\": 1,\n      \"bestTimeToVisit\": \"Morning and Evening\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fountains of Bellagio\",\n          \"placeDetails\": \"Witness the mesmerizing water show choreographed to music and lights. It's free and beautiful!\",\n          \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/10/55/74/3a/fountains-of-bellagio.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.1128, \"longitude\": -115.1735 },\n          \"ticket\": \"Free\",\n          \"pricing\": \"Free\",\n          \"ratings\": 4.8,\n          \"timeToTravel\": \"Located on the Strip, easy walking distance\"\n        },\n        {\n            \"placeName\": \"The Las Vegas Strip Stroll\",\n            \"placeDetails\":\"Take a stroll and enjoy the sights and sounds of the Las Vegas Strip, observe the themed hotels, street performers, and the overall vibe.\",\n            \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1a/58/52/63/the-las-vegas-strip.jpg\",\n             \"geoCoordinates\": { \"latitude\": 36.114647, \"longitude\": -115.172813 },\n            \"ticket\": \"Free\",\n             \"pricing\": \"Free\",\n            \"ratings\": 4.7,\n            \"timeToTravel\":\"Walking\"\n        },\n          {\n            \"placeName\": \"Bellagio Conservatory & Botanical Gardens\",\n            \"placeDetails\": \"Explore the stunning seasonal floral displays inside the Bellagio, a feast for the eyes.\",\n            \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/1c/62/14/12/bellagio-conservatory-botanical.jpg\",\n             \"geoCoordinates\": { \"latitude\": 36.1128, \"longitude\": -115.1735 },\n            \"ticket\": \"Free\",\n            \"pricing\": \"Free\",\n            \"ratings\": 4.6,\n             \"timeToTravel\": \"Located inside Bellagio, easy walk from the fountains\"\n          },\n        {\n            \"placeName\":\"Free show at Volcano at The Mirage\",\n            \"placeDetails\":\"Experience the visual treat with fire and sound.\",\n            \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/0e/b9/e5/47/the-mirage-volcano-show.jpg\",\n            \"geoCoordinates\": { \"latitude\": 36.1206 , \"longitude\": -115.1743 },\n            \"ticket\":\"Free\",\n            \"pricing\":\"Free\",\n            \"ratings\": 4.5,\n            \"timeToTravel\": \"Located on the Strip, a short walk from other attractions\"\n        }\n      ]\n    },\n    {\n      \"day\": 2,\n      \"bestTimeToVisit\": \"Afternoon and Evening\",\n      \"plan\": [\n           {\n              \"placeName\":\"Fremont Street Experience\",\n              \"placeDetails\":\"Go for an entertainment experience with the amazing video canopy and street performers.\",\n              \"placeImageUrl\":\"https://media-cdn.tripadvisor.com/media/photo-s/1c/87/14/40/fremont-street-experience.jpg\",\n              \"geoCoordinates\": { \"latitude\": 36.1698, \"longitude\": -115.1401 },\n              \"ticket\": \"Free, some attractions have tickets\",\n              \"pricing\": \"Free to explore, but may spend money for food or attractions\",\n              \"ratings\": 4.4,\n              \"timeToTravel\": \"Taxi or Bus Ride from the Strip (approx 15-20 mins)\"\n           },\n           {\n              \"placeName\": \"Container Park\",\n              \"placeDetails\": \"Check out this open-air shopping and entertainment area made from shipping containers.\",\n             \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/11/f2/c7/4f/container-park.jpg\",\n             \"geoCoordinates\": { \"latitude\": 36.1656, \"longitude\": -115.1376 },\n              \"ticket\": \"Free to enter\",\n              \"pricing\": \"Variable depending on shopping and dining\",\n             \"ratings\": 4.3,\n             \"timeToTravel\": \"Walking distance from Fremont Street Experience\"\n           },\n\n        {\n          \"placeName\":\"High Roller Observation Wheel at The LINQ\",\n          \"placeDetails\":\"Ride the giant Ferris wheel for panoramic views of the city. Try going during sunset for a magical view.\",\n          \"placeImageUrl\":\"https://media-cdn.tripadvisor.com/media/photo-s/1c/5d/1c/60/high-roller.jpg\",\n          \"geoCoordinates\":{\"latitude\": 36.1167, \"longitude\": -115.1696 },\n          \"ticket\": \"Paid\",\n           \"pricing\": \"$25-$30 per person (check for deals)\",\n          \"ratings\": 4.6,\n          \"timeToTravel\":\"Taxi or Bus Ride from Fremont Street Area (approx 20 mins) or you can choose the linq hotel where you have booked the stay\"\n        }\n      ]\n    },\n    {\n      \"day\": 3,\n         \"bestTimeToVisit\": \"Morning and Afternoon\",\n      \"plan\": [\n         {\n            \"placeName\": \"Welcome to Fabulous Las Vegas Sign\",\n            \"placeDetails\": \"Take photos at the iconic Las Vegas sign.\",\n            \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/0f/00/c7/d3/welcome-to-fabulous-las.jpg\",\n            \"geoCoordinates\": { \"latitude\": 36.0908, \"longitude\": -115.1716 },\n            \"ticket\":\"Free\",\n             \"pricing\": \"Free\",\n             \"ratings\": 4.7,\n            \"timeToTravel\": \"Taxi or Ride-share from the Strip (approx 10-15 mins)\"\n        },\n        {\n            \"placeName\":\"Ethel M Chocolate Factory and Botanical Cactus Garden\",\n            \"placeDetails\":\"Tour the factory and explore the unique desert plant life\",\n            \"placeImageUrl\":\"https://media-cdn.tripadvisor.com/media/photo-s/10/b1/ff/20/ethel-m-chocolates-factory.jpg\",\n           \"geoCoordinates\": { \"latitude\": 36.0796, \"longitude\": -115.0675 },\n            \"ticket\": \"Free to enter\",\n            \"pricing\":\"Free, but you can spend money on chocolates\",\n           \"ratings\": 4.5,\n           \"timeToTravel\": \"Ride-share or taxi from the Las Vegas sign (approx 20-25 mins)\"\n          },\n        {\n            \"placeName\": \"Explore your hotel or nearby casinos\",\n            \"placeDetails\": \"Spend a little time relaxing or trying your luck at your chosen hotel or nearby casino. Remember to budget wisely!\",\n           \"placeImageUrl\": \"https://media-cdn.tripadvisor.com/media/photo-s/11/92/00/66/casino.jpg\",\n          \"geoCoordinates\": { \"latitude\": 36.114647, \"longitude\": -115.172813 },\n           \"ticket\": \"Free to enter\",\n            \"pricing\": \"Budget according to the game you are planning to play.\",\n           \"ratings\": 4.3,\n          \"timeToTravel\": \"Located at your hotel or close by.\"\n        }\n      ]\n    }\n  ]\n}\n```\n\nI've restructured the `itinerary` into an array of days, where each day contains its best time to visit and an array of plans. This should be more easily processed as an array of structured data.\n" },
      ],
    },
  ],
});

export default chatSession;