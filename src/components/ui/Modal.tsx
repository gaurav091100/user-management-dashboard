import React from "react";

interface ModalProps {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  onClose,
  footer,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* modal box */}
      <div className="relative w-full max-w-max rounded-2xl bg-white shadow-xl animate-in fade-in zoom-in">
        {/* header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* body */}
        <div className="px-5 py-4">{children}</div>

        {/* footer */}
        {footer && (
          <div className="border-t px-5 py-3 flex justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;