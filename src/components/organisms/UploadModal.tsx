import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider";
import { Button } from "../atoms/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  author: string;
  pic: string;
  title: string;
  album: string;
  id: string;
  uploader: string;
  uploaderPic: string;
}

const formFields = [
  { id: "author", label: "Autor", type: "text" },
  { id: "pic", label: "Link de Imagen", type: "text" },
  { id: "title", label: "Título de la Canción", type: "text" },
  { id: "album", label: "Disco", type: "text" },
];

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { currentUser } = useAuth();

  const [uploader, setUploader] = useState<string>(
    currentUser ? currentUser.displayName || "Anonymous" : "Anonymous"
  );
  const [uploaderPic, setUploaderPic] = useState<string>(
    currentUser ? currentUser.photoURL || "" : ""
  );

  const [formData, setFormData] = useState<FormData>({
    author: "",
    pic: "",
    title: "",
    album: "",
    id: "",
    uploader: "",
    uploaderPic: "",
  });

  useEffect(() => {
    if (currentUser) {
      setUploader(currentUser.displayName || "Anonymous");
      setUploaderPic(currentUser.photoURL || "");
    }
  }, [currentUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      id: new Date().toISOString(),
      uploader: uploader,
      uploaderPic: uploaderPic,
    });
    onClose();
    setFormData({
      author: "",
      pic: "",
      title: "",
      album: "",
      id: "",
      uploader: "",
      uploaderPic: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          &times;
        </button>
        <h2>Subir Obra</h2>
        <form onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id} className="mb-4">
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={formData[field.id as keyof FormData]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <Button
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded-full mr-2"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#7855DC] text-white px-4 py-2 rounded-full"
            >
              Subir
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
