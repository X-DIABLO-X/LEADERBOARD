// ui/errorMessages.js

export function showError(message) {
  const error = document.createElement("div");
  error.className = "error-message";
  error.innerText = message;

  // Append error message to the body
  document.body.appendChild(error);

  // Remove error message after 3 seconds
  setTimeout(() => {
    error.remove();
  }, 3000);
}

// CSS for error messages
const styles = `
  .error-message {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #f44336; /* Red */
    color: white;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0.9;
  }
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
