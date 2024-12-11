import Modal from './Modal';

const DeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Confirmer la suppression</h2>
        <p className="mb-6">
          Êtes-vous sûr de vouloir supprimer {itemName} ?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Annuler
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
