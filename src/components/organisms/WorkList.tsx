import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { WorkListItem } from "../molecules/WorkListItem";

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

  return (
    <div className="text-white">
      <ul className="flex flex-wrap gap-4">
        {formDataList.map((formData, index) => (
          <WorkListItem key={index} formData={formData} />
        ))}
      </ul>
    </div>
  );
};
