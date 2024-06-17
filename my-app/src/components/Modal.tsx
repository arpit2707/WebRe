import React, { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
  footer: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, children, footer }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">{children}</div>
        <div>{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
