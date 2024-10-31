const express = require("express");
const cors = require("cors");
const leaderboardData = require("./server/data");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Endpoint to get leaderboard data
app.get("/api/leaderboard", (req, res) => {
    res.json(leaderboardData.getUsers());
});

// Run the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
