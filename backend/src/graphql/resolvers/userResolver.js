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
          imageUrl: user.imageUrl,
          emailVerified: user.emailVerified,
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw new Error("Failed to fetch user data");
      }
    },
  },
  Mutation: {
    createUser: async (_, { uid, email, name, imageUrl, emailVerified }) => {
      try {
        const newUser = await userService.createUser({
          uid,
          email,
          name,
          imageUrl,
          emailVerified,
        });
        return {
          uid: newUser.uid,
          email: newUser.email,
          name: newUser.name,
          imageUrl: newUser.imageUrl,
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
