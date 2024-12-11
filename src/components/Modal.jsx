const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg my-20 sm:w-1/3">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">&times;</span>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
