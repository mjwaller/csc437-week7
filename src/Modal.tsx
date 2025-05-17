import React, { useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onCloseRequested: () => void;
  headerLabel: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onCloseRequested, headerLabel, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Handle click outside modal to close it
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onCloseRequested();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-lg p-6 w-96 max-w-sm"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{headerLabel}</h2>
          <button
            aria-label="Close"
            onClick={onCloseRequested}
            className="text-xl font-bold"
          >
            X
          </button>
        </div>
        {/* Modal content */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
