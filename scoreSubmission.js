// Importing the new components
import { showNotification } from './ui/notifications.js';
import { showModal } from './ui/modals.js';
import { showLoading, hideLoading } from './ui/loading.js'; // Hypothetical loading functions

async function submitScoreToServer(score) {
  // Mock implementation of score submission
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // Randomly resolve or reject for demonstration purposes
      Math.random() > 0.5 ? resolve() : reject(new Error("Network error"));
    }, 2000);
  });
}

async function scoreSubmission(score) {
  // Confirmation Modal
  showModal("Confirm Submission", "Are you sure you want to submit this score?", 
    async () => {
      showLoading(); // Show loading indicator
      try {
        await submitScoreToServer(score);
        showNotification("Score submitted successfully!", "success");
      } catch (error) {
        showNotification(`Failed to submit score: ${error.message}`, "error");
      } finally {
        hideLoading(); // Hide loading indicator
      }
    },
    () => {
      showNotification("Score submission canceled.", "error");
    }
  );
}

// Example usage
scoreSubmission(100); // Replace 100 with the actual score to be submitted
