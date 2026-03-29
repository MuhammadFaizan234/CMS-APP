# CMS-APP

A simple Content Management System built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating. It allows users to register, log in, and — once authenticated — create and manage blog posts from a protected admin dashboard.

---

## Features

- User registration and login with session-based authentication
- Protected admin dashboard (accessible only when logged in)
- Create and publish blog posts
- View all posts on the home page
- Individual post detail pages
- Session logout with cookie cleanup

---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Runtime    | Node.js (ES Modules)                |
| Framework  | Express.js v5                       |
| Database   | MongoDB + Mongoose                  |
| Templating | EJS + express-ejs-layouts           |
| Sessions   | express-session                     |
| Dev Tool   | nodemon                             |

---

## Project Structure

```
CMS-APP/
├── app.js                  # Express app setup (middleware, routes, session)
├── server.js               # Entry point — starts the server
├── config/
│   └── db.js               # MongoDB connection
├── routes/
│   ├── router.js           # Public & protected page routes
│   ├── user.js             # Auth routes (login, register, logout)
│   └── admin.js            # Admin post creation route
├── controllers/
│   ├── pages.js            # Page render controllers
│   ├── user.js             # Login, register, logout logic
│   └── admin.js            # Post creation logic
├── model/
│   ├── user.js             # User Mongoose schema
│   └── admin.js            # Post Mongoose schema
├── middleware/
│   └── auth.js             # isAuth session guard middleware
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB running locally on port `27017`

### Installation

```bash
# Clone the repository
git clone https://github.com/MuhammadFaizan234/CMS-APP.git
cd CMS-APP

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=4000
```

### Run the App

```bash
# Development (with nodemon)
npm run dev

# Production
node server.js
```

The app will be available at `http://localhost:4000`

---

## Routes

### Public Routes

| Method | Path           | Description              |
|--------|----------------|--------------------------|
| GET    | `/`            | Home — lists all posts   |
| GET    | `/about`       | About page               |
| GET    | `/contact`     | Contact page             |
| GET    | `/post/:postID`| Single post detail page  |
| GET    | `/login`       | Login page               |
| GET    | `/register`    | Register page            |

### Auth Routes

| Method | Path        | Description         |
|--------|-------------|---------------------|
| POST   | `/Login`    | Handle login form   |
| POST   | `/register` | Handle register form|
| GET    | `/logout`   | Destroy session     |

### Protected Routes (require login)

| Method | Path         | Description              |
|--------|--------------|--------------------------|
| GET    | `/dashboard` | Admin dashboard          |
| GET    | `/addpost`   | Add new post form        |
| POST   | `/post`      | Submit new post          |

---

## Data Models

### User

| Field      | Type   | Required |
|------------|--------|----------|
| firstName  | String | ✅       |
| lastName   | String | ✅       |
| email      | String | ✅ unique|
| password   | String | ✅       |
| mobile     | String | ✅       |
| address    | String | ❌       |

### Post

| Field  | Type   | Required |
|--------|--------|----------|
| Title  | String | ✅       |
| Body   | String | ✅       |

Both models include `createdAt` and `updatedAt` timestamps automatically.

---

## Known Limitations / Future Improvements

- Passwords are stored in plain text — should be hashed with **bcrypt**
- Session secret is hardcoded in `app.js` — should be moved to `.env`
- MongoDB connection string is hardcoded in `config/db.js` — should use `process.env.MONGO_URI`
- No input validation or sanitization on forms
- No role-based access control (all logged-in users can access admin routes)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
