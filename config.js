// config.js

const config = {
  apiEndpoint: "https://api.example.com",
  leaderboardLimit: 10, // Number of top scores to display
  timeout: 5000, // Request timeout in milliseconds
  environment: process.env.NODE_ENV || "development",
  // Add more configuration settings as needed
};

export default config;
