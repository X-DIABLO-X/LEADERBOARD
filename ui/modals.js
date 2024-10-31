// ui/modals.js

// Basic Modal Component
export function showModal(title, message, onConfirm, onCancel) {
  const modalOverlay = document.createElement("div");
  modalOverlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
    <div class="modal-buttons">
      <button id="modalConfirm">Confirm</button>
      <button id="modalCancel">Cancel</button>
    </div>
  `;

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  // Handle confirm button
  document.getElementById("modalConfirm").onclick = () => {
    onConfirm();
    modalOverlay.remove();
  };

  // Handle cancel button
  document.getElementById("modalCancel").onclick = () => {
    if (onCancel) onCancel();
    modalOverlay.remove();
  };
}

// CSS for the modal
const styles = `
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
  }
  .modal {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    width: 80%;
    text-align: center;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  .modal-buttons button {
    padding: 10px 20px;
    cursor: pointer;
  }
`;

// Append styles to document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
