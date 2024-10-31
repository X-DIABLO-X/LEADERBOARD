# Scaler Leaderboard

A responsive leaderboard website that displays user scores across multiple coding platforms.

## Project Structure

```plaintext
leaderboard/
├── public/
│   ├── index.html         # HTML structure
│   ├── styles.css         # Styling
│   └── scripts.js         # Client-side JavaScript
├── server/
│   └── data.js            # Leaderboard data
├── .gitignore             # Ignore node_modules and other unnecessary files
├── package.json           # Dependencies and scripts
├── app.js                 # Entry point for backend server
└── README.md              # Project documentation
```
Features
Fetches and displays leaderboard data dynamically
Responsive UI built with Tailwind CSS
Rating colors adjust based on user scores for quick visualization
Prerequisites
Node.js (v14 or higher)
npm (Node Package Manager)


```bash
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

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```
