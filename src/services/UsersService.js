import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as logout,
  updateEmail,
  updatePassword,
  deleteUser,
} from "firebase/auth";

import {
  getDocs,
  setDoc,
  updateDoc,
  doc,
  collection,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import FirebaseClient from "./utils/FirebaseClient";

class UsersService {
  constructor() {
    this.auth = new FirebaseClient().auth;
    this.db = new FirebaseClient().db;
    this.storage = new FirebaseClient().storage;
  }

  async getByEmail(email) {
    const docRef = query(
      collection(this.db, "users"),
      where("email", "==", email)
    );
    const querySnapshot = await getDocs(docRef);
    let user;

    querySnapshot.forEach((doc) => {
      user = doc.data();
    });

    return user;
  }

  async createInAuth({ email, password }) {
    const { user } = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    return user.uid;
  }

  async createInDb(uid, dataUser) {
    const user = {
      ...dataUser,
      uid,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    delete user.password;

    await setDoc(doc(this.db, "users", uid), user);

    return user.uid;
  }

  async signUp(dataUser) {
    const { email, password } = dataUser;
    const userAlreadyExists = await this.getByEmail(email);

    if (userAlreadyExists) throw new Error("O usuário já existe.");

    const uid = await this.createInAuth({ email, password });
    const user = await this.createInDb(uid, dataUser);

    return user;
  }

  async signIn({ email, password }) {
    const user = await this.getByEmail(email);

    if (!user) throw new Error("O usuário não existe.");

    await signInWithEmailAndPassword(this.auth, email, password);

    return user;
  }

  signOut() {
    return logout(this.auth);
  }

  listenLoggedAuth(callback) {
    return onAuthStateChanged(this.auth, callback);
  }

  async updateInAuth(uid, { email, password }) {
    if (email) {
      await updateEmail(this.auth.currentUser, email);
      await this.updateInDb(uid, { email });
    }

    if (password) await updatePassword(this.auth.currentUser, password);

    return email;
  }

  async updateInDb(uid, dataUser) {
    const userRef = doc(this.db, "users", uid);
    const user = {
      ...dataUser,
      uid,
      updatedAt: new Date(),
    };

    await updateDoc(userRef, user);

    return user;
  }

  deleteFromAuth() {
    return deleteUser(this.auth.currentUser);
  }

  deleteFromDb(uid) {
    return deleteDoc(doc(this.db, "users", uid));
  }

  async delete(uid) {
    await this.deleteFromDb(uid);
    await this.deletePhoto(uid);
    await this.deleteFromAuth();

    return true;
  }

  uploadPhoto(uid, file) {
    const photoUserRef = ref(this.storage, "users/photos/" + uid);

    return uploadBytes(photoUserRef, file);
  }

  downloadPhoto(uid) {
    const photoUserRef = ref(this.storage, "users/photos/" + uid);

    return getDownloadURL(photoUserRef);
  }

  deletePhoto(uid) {
    const photoUserRef = ref(this.storage, "users/photos/" + uid);

    return deleteObject(photoUserRef);
  }

  async savePhotoInDb(uid, file) {
    await this.uploadPhoto(uid, file);

    const url = await this.downloadPhoto(uid);

    await this.updateInDb(uid, { photo: url });

    return url;
  }
}

export default new UsersService();
