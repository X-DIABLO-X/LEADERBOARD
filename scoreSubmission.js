// Import new error message component
import { showError } from './ui/errorMessages.js';
import { showNotification } from './ui/notifications.js';
import { showModal } from './ui/modals.js';

// Function to handle score submission
function scoreSubmission(score) {
  // Validate score input
  if (!Number.isInteger(score) || score <= 0) {
    showError("Please enter a positive integer score.");
    return;
  }

  // Confirmation Modal
  showModal("Confirm Submission", "Are you sure you want to submit this score?", 
    () => {
      // Assuming async score submission logic
      submitScoreToServer(score)
        .then(() => {
          showNotification("Score submitted successfully!", "success");
        })
        .catch(() => {
          showError("Failed to submit score. Please try again.");
        });
    },
    () => {
      showNotification("Score submission canceled.", "error");
    }
  );
}

// Export the scoreSubmission function for use in other modules
export default scoreSubmission;
