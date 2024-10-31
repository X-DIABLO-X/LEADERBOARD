// ui/notifications.js

// Basic Notification Component
export function showNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerText = message;

  // Add the notification to the body
  document.body.appendChild(notification);

  // Remove the notification after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// CSS for the notifications
const styles = `
  .notification {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0.9;
  }
  .notification.success {
    background-color: #4caf50; /* Green */
  }
  .notification.error {
    background-color: #f44336; /* Red */
  }
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
