import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { WorkListItem } from "../molecules/WorkListItem";
import { useSearch } from "../../context/SearchContext";

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
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const { query } = useSearch();

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

  const filteredFormDataList = formDataList.filter(
    (formData) =>
      formData.uploader.toLowerCase().includes(query.toLowerCase()) ||
      formData.author.toLowerCase().includes(query.toLowerCase()) 
  );

  return (
    <div className="text-white h-96 overflow-x-auto scrollbar-custom">
      <ul className="flex flex-start gap-4">
        {filteredFormDataList.map((formData, index) => (
          <WorkListItem
            key={index}
            formData={formData}
            isFocused={focusedIndex === index}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          />
        ))}
      </ul>
    </div>
  );
};
