import { useState } from "react";
import { Button } from "../../atoms/Button";
import { Modal } from "../../organisms/UploadModal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

export const UploadButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (formData: {
    title: string;
    author: string;
    album: string;
  }) => {
    try {
      addDoc(collection(db, "Music"), {
        formData,
      });
      console.log("Data del formulario:", formData);
      handleCloseModal();
    } catch (e) {
      console.error("error", e);
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className="bg-[#7855DC] text-white px-6 py-2 m-2 rounded-full whitespace-nowrap"
      >
        Subir obra
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};
