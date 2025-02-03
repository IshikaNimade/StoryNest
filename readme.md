
# StoryNest 🪺

**StoryNest** is a cozy blogging platform that allows users to "nest" their stories. With an intuitive WYSIWYG editor, users can create, save drafts, and publish their blogs. The platform supports server-side rendering for SEO-friendly blogs and leverages Firebase for authentication and database storage.

---

## 🌟 Features

1. **Authentication**:
   - Firebase Authentication (email/password).
   
2. **WYSIWYG Editor**:
   - Rich text editor for creating and editing posts.

3. **Post Management**:
   - Save drafts, edit, and publish blogs.
   - View paginated blog posts.

4. **SEO-Friendly Blogs**:
   - Server-Side Rendering (SSR) with React.js.

5. **GraphQL API**:
   - Fetch paginated posts.
   - CRUD operations for posts.

6. **Cloud Storage**:
   - Firebase Firestore for storing posts and user data.

---

## 🛠️ Tech Stack

### **Frontend**
- [React.js](https://react.dev/).
- [Material UI](https://mui.com/material-ui/).
- [Quill.js](https://quilljs.com/) - WYSIWYG editor.

### **Backend**
- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [Express.js](https://expressjs.com/) - Web framework for the API.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - GraphQL server for API management.
- [Firebase Admin SDK](https://firebase.google.com/docs/admin) - For backend integration with Firebase.

### **Database**
- [Firebase Firestore](https://firebase.google.com/docs/firestore) - NoSQL database.

---

## 🚀 Getting Started

### **Prerequisites**
1. Node.js (v16 or higher)
2. Firebase account with a Firestore database.
3. Firebase project set up with:
   - Firebase Authentication
   - Firestore database

---

## 🧩 Project Structure

```
storynest/
├── frontend/                  # Next.js frontend application
│   ├── components/            # Reusable React components
│   │   ├── Layout.js          # App-wide layout component
│   │   ├── PostCard.js        # Blog post card component
│   │   └── Editor.js          # WYSIWYG editor component
│   ├── graphql/               # GraphQL queries, mutations, and client
│   │   ├── client.js          # Apollo Client setup
│   │   ├── queries.js         # GraphQL queries
│   │   └── mutations.js       # GraphQL mutations
│   ├── pages/                 # Next.js pages
│   │   ├── index.js           # Home page (list of posts)
│   │   ├── blog/[id].js       # Blog detail page (dynamic routing)
│   │   ├── dashboard/         # User dashboard for managing posts
│   │   │   ├── index.js       # Dashboard main page
│   │   │   └── edit/[id].js   # Edit blog post
│   │   └── editor.js          # Create new post page
│   ├── styles/                # Styling for the application
│   │   ├── globals.css        # Global styles
│   │   └── components/        # Component-specific styles
│   ├── utils/                 # Utility functions and helpers
│   │   ├── auth.js            # Firebase authentication helpers
│   │   ├── constants.js       # Application-wide constants
│   │   └── helpers.js         # Miscellaneous helper functions
│   ├── public/                # Public assets (images, icons, etc.)
│   ├── .env.local             # Environment variables for frontend
│   ├── next.config.js         # Next.js configuration
│   └── package.json           # Dependencies for the frontend
├── backend/                   # Express.js backend with GraphQL
│   ├── src/                   # Source code
│   │   ├── config/            # Configuration files
│   │   │   └── firebase.js    # Firebase initialization
│   │   ├── graphql/           # GraphQL schema and resolvers
│   │   │   ├── schema.js      # Root GraphQL schema
│   │   │   └── resolvers/     # Resolvers split by entity
│   │   │       ├── postResolver.js
│   │   │       └── userResolver.js
│   │   ├── services/          # Business logic
│   │   │   ├── postService.js # Post CRUD operations
│   │   │   └── userService.js # User CRUD operations
│   │   ├── middlewares/       # Middleware for Express.js
│   │   │   ├── auth.js        # Firebase JWT authentication middleware
│   │   │   └── errorHandler.js # Centralized error handling
│   │   ├── utils/             # Utility functions
│   │   │   ├── logger.js      # Winston logger setup
│   │   │   └── validators.js  # Input validation functions
│   │   └── app.js             # Express app setup
│   ├── server.js              # Entry point for backend server
│   ├── .env                   # Environment variables for backend
│   └── package.json           # Dependencies for the backend
└── README.md                  # Root documentation for the project
```

---

## ⚙️ Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the application for production.
- **`npm start`**: Start the production server.
- **`npm run lint`**: Run ESLint to lint the codebase.

---

## 🎨 UI Design

- **Home Page**: Displays a list of published blogs with pagination.
- **Blog Detail Page**: SEO-friendly page with server-side rendering.
- **User Dashboard**: View, edit, and manage drafts and published posts.
- **Editor**: Rich text editor for writing and editing posts.

---

## 🛡️ Security

- Firebase Authentication ensures only authenticated users can create or edit posts.
- Firestore security rules restrict unauthorized access to user and post data.

---

## 📧 Contact

For any inquiries, reach out to **ishikanimade56@gmail.com**.

---
