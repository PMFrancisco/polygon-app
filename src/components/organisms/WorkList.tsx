import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Text } from "../atoms/Text";
import { UserIcon } from "@heroicons/react/24/solid";

interface FormData {
  author: string;
  pic: string;
  title: string;
  album: string;
  id: string;
  uploader: string;
  uploaderPic: string;
}

export const WorkList: React.FC = () => {
  const [formDataList, setFormDataList] = useState<FormData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Music"));
        const formDataArray: FormData[] = [];
        querySnapshot.forEach((doc) => {
          formDataArray.push(doc.data().formData);
        });
        setFormDataList(formDataArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  const renderUploaderPic = (uploaderPic: string) => {
    if (uploaderPic) {
      return (
        <img
          src={uploaderPic}
          alt="Uploader Pic"
          className="rounded-full w- h-5"
        />
      );
    } else {
      return (
        <UserIcon className="bg-white rounded-full w-5 h-5 flex justify-center text-black" />
      );
    }
  };

  return (
    <div className="text-white">
      <ul className="flex flex-wrap gap-4">
        {formDataList.map((formData, index) => (
          <li key={index}>
            <div className="w-60 rounded-2xl overflow-hidden">
              <img src={formData.pic} alt={formData.title} className="w-full h-48 object-cover"/>
              <div className="bg-[#211626] p-4">
                <Text as="h3" variant="Highlights" className="line-clamp-1">
                  {formData.author}
                </Text>
                <div className="flex items-center gap-2 my-2">
                  <div>{renderUploaderPic(formData.uploaderPic)}</div>
                  <Text as="p" variant="SRegular" className="line-clamp-1">
                    {formData.uploader}
                  </Text>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
