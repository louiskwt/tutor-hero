import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/config";

export function uploadFile(file: File, path: string) {
  const storageRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      console.log(snapshot.state);
    },
    (err) => {
      alert(err);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log(downloadURL);
      });
    }
  );
}
