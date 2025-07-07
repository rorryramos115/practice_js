// Create a reusable button
function createButton(text, onClick) {
  const button = document.createElement('button');
  button.textContent = text;
  button.className = 'bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold';
  button.addEventListener('click', onClick);
  return button;
}

// Create a card (modal content container)
function createCard(contentNodes, onClose) {
  const card = document.createElement('div');
  card.className = 'bg-white p-6 rounded-xl shadow-xl relative min-w-[300px]';

  // Close button
  const closeButton = document.createElement('button');
  closeButton.textContent = '×';
  closeButton.className = 'absolute top-2 right-3 text-gray-600 text-2xl font-bold';
  closeButton.addEventListener('click', onClose);

  card.appendChild(closeButton);
  contentNodes.forEach(node => card.appendChild(node));

  return card;
}

// Create the modal
function createModal(contentNodes) {
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50';

  function closeModal() {
    modalOverlay.remove();
  }

  const modalCard = createCard(contentNodes, closeModal);
  modalOverlay.appendChild(modalCard);

  return modalOverlay;
}

// Add a listener to show modal on button click
function showModal() {
  const modalTitle = document.createElement('h2');
  modalTitle.textContent = 'This is a Modal!';
  modalTitle.className = 'text-xl font-bold mb-4';

  const modalText = document.createElement('p');
  modalText.textContent = 'You can close me by clicking the × button.';
  modalText.className = 'text-gray-700';

  const modal = createModal([modalTitle, modalText]);
  document.body.appendChild(modal);
}

// Insert button into #app
const appContainer = document.getElementById('app');
const openModalButton = createButton('Open Modal', showModal);
appContainer.appendChild(openModalButton);
