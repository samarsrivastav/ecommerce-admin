import React from 'react';
import { Button, Modal } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;
  
  return (
    <Modal show={isOpen} size="md" onClose={onClose} popup>
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete this product?
        </h3>
        <div className="flex justify-center gap-4">
          <Button color="failure" onClick={onConfirm}>
            {"Yes, I'm sure"}
          </Button>
          <Button color="gray" onClick={onClose}>
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);
};
