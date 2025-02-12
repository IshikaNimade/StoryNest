const userService = require("../../services/userService");

const userResolver = {
  Query: {
    getUser: async (_, { uid }) => {
      try {
        const user = await userService.getUserByUid(uid);
        return {
          uid: user.uid,
          email: user.email,
          name: user.name,
          photoURL: user.photoURL,
          emailVerified: user.emailVerified,
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
      }
    },
  },
  Mutation: {
    createUser: async (_, { uid, email, name, photoURL, emailVerified }) => {
      try {
        const newUser = await userService.createUser({
          uid,
          email,
          name,
          photoURL,
          emailVerified,
        });
        return {
          uid: newUser.uid,
          email: newUser.email,
          name: newUser.name,
          photoURL: newUser.photoURL,
          emailVerified: newUser.emailVerified,
        };
      } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user.");
      }
    },
  },
};

module.exports = userResolver;
