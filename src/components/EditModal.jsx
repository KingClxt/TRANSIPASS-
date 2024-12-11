import Modal from './Modal';

const EditModal = ({ isOpen, onClose, onSubmit, item, children }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Modifier</h2>
        <form onSubmit={onSubmit} className="space-y-1">
          {
            children
          }
          {/* Ajoutez d'autres champs selon vos besoins */}
          
          <div className="flex justify-center gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#5D5FEF] text-white rounded-lg hover:bg-[#4B4DDB]"
            >
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default EditModal;
