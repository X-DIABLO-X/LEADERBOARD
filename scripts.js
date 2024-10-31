
const users = [
    { name: "Alice", codechef: 1500, codeforces: 1200, atcoder: 800, leetcode: 2000 },
    { name: "Bob", codechef: 2000, codeforces: 1800, atcoder: 1600, leetcode: 2500 },
    { name: "Charlie", codechef: 2500, codeforces: 2200, atcoder: 2000, leetcode: 3000 },
    { name: "David", codechef: 1800, codeforces: 1600, atcoder: 1400, leetcode: 2200 },
    { name: "Eve", codechef: 3000, codeforces: 2800, atcoder: 2400, leetcode: 3500 },
];

function getRatingColor(rating) {
    if (rating < 1200) return "gray";
    if (rating < 1400) return "green";
    if (rating < 1600) return "blue";
    if (rating < 1900) return "yellow";
    if (rating < 2100) return "red";
    return "purple";
}

function populateLeaderboard() {
    const tbody = document.getElementById("leaderboardBody");
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.name}</td>
            <td><span class="rating ${getRatingColor(user.codechef)}">${user.codechef}</span></td>
            <td><span class="rating ${getRatingColor(user.codeforces)}">${user.codeforces}</span></td>
            <td><span class="rating ${getRatingColor(user.atcoder)}">${user.atcoder}</span></td>
            <td><span class="rating ${getRatingColor(user.leetcode)}">${user.leetcode}</span></td>
        `;
        tbody.appendChild(row);
    });
}

// Fade in the container when the page loads
window.addEventListener("load", () => {
    document.querySelector(".container").style.opacity = "1";
    populateLeaderboard();
});