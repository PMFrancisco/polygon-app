import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const obrasRef = collection(db, "Music");

interface Obra {
    // Define the properties of your Obra interface here
}

const setObra = async (data: Obra): Promise<void> => {
    await setDoc(doc(obrasRef), data);
};

export { setObra };
