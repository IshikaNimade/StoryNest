const { db } = require("../config/firebase");

const getUserByUid = async (uid) => {
  try {
    const userDoc = await db.collection("users").doc(uid).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw new Error("Failed to fetch user data");
  }
};

const createUser = async ({ uid, email, name, photoURL, emailVerified }) => {
  try {
    const userDoc = await db.collection("users").doc(uid).get();
    if (!userDoc.exists) {
      const newUser = {
        uid,
        email,
        name,
        photoURL,
        emailVerified,
      };
      await db.collection("users").doc(uid).set(newUser);
      return newUser;
    } else {
      return userDoc.data();
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user.");
  }
};

module.exports = { getUserByUid, createUser };
