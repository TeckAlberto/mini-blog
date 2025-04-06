// components/Modal.tsx
import { ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export default function ModalPost({ children, onClose }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white/90 rounded-2xl shadow-lg p-6 max-w-lg w-full relative border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl cursor-pointer"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
}
