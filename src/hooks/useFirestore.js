import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { projectFirestore } from "../config/firebase/config";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      query(
        collection(projectFirestore, collectionName),
        orderBy("createdAt", "desc")
      ),
      (snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      }
    );

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
