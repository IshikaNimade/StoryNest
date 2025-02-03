const { admin, db } = require("../config/firebase");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization || "";
  if (token) {
    try {
      req.currentUser = await admin.auth().verifyIdToken(token);
    } catch (error) {
      console.error("Authentication failed:", error);
      return res.status(401).json({ error: "Unauthorized" });
    }
  }
  next();
};

module.exports = authenticate;
