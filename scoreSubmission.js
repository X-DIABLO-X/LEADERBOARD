// Importing the new components
import { showNotification } from './ui/notifications.js';
import { showModal } from './ui/modals.js';

function scoreSubmission(score) {
  // Confirmation Modal
  showModal("Confirm Submission", "Are you sure you want to submit this score?", 
    () => {
      // Assuming async score submission logic
      submitScoreToServer(score)
        .then(() => {
          showNotification("Score submitted successfully!", "success");
        })
        .catch(() => {
          showNotification("Failed to submit score. Please try again.", "error");
        });
    },
    () => {
      showNotification("Score submission canceled.", "error");
    }
  );
}
