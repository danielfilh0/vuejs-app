import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut as logout,
} from "firebase/auth";

import {
  getDocs,
  setDoc,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore";

import FirebaseClient from "./utils/FirebaseClient";

class UsersService {
  constructor() {
    this.auth = new FirebaseClient().auth;
    this.db = new FirebaseClient().db;
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

  async signUp(dataUser) {
    const { email, password } = dataUser;
    const userAlreadyExists = await this.getByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists.");

    const uid = await this.createIntoAuth({ email, password });
    const user = await this.createIntoDb(uid, dataUser);

    return user;
  }

  async signIn({ email, password }) {
    const user = await this.getByEmail(email);

    if (!user) throw new Error("User not exists.");

    await signInWithEmailAndPassword(this.auth, email, password);

    return user;
  }

  async signOut() {
    return logout(this.auth);
  }

  async listenLoggedAuth(callback) {
    return onAuthStateChanged(this.auth, callback);
  }

  async createIntoAuth({ email, password }) {
    const { user } = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );

    return user.uid;
  }

  async createIntoDb(uid, dataUser) {
    const user = { ...dataUser, password: "" };
    await setDoc(doc(this.db, "users", uid), user);

    return user;
  }
}

export default new UsersService();
