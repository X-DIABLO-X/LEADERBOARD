const { addScore, getLeaderboard, resetLeaderboard } = require('./leaderboard');

describe('Leaderboard Functions', () => {
  beforeEach(() => {
    resetLeaderboard(); // Reset the leaderboard before each test
  });

  test('should add a score correctly', () => {
    addScore('Alice', 100);
    const leaderboard = getLeaderboard();
    expect(leaderboard).toEqual([{ name: 'Alice', score: 100 }]);
  });

  test('should update score for existing user', () => {
    addScore('Bob', 50);
    addScore('Bob', 75); // Update score
    const leaderboard = getLeaderboard();
    expect(leaderboard).toEqual([{ name: 'Bob', score: 75 }]);
  });

  test('should return an empty leaderboard if no scores added', () => {
    const leaderboard = getLeaderboard();
    expect(leaderboard).toEqual([]);
  });
});

