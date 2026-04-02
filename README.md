
**Assessment 1.2 (Total Marks **20**)**

Assignment: **Software requirements analysis and design (**Full-Stack CRUD Application Development with DevOps Practices**)**

---
## Project Overview
The aim of this project is to design and implement a web-based CRUD application that follows software engineering and DevOps pratices.

This application allows users to register, log in, and manage book records.

This project also demostrates the use of GitHub version control, branching, pull requests, CI/CD workflow configuration, GitHub actions, and EC2 deployment.

---

## Features

### Authentication (which already applied in the start project)
- User registration
- User login
- User logout
- User profile page

### Book management (For admin panel, in the dashboard page)
- Add a new book
- View book list
- Edit book details
- Delete a book

### DevOps / deployment
- GitHub version control with `main` and feature branches
- Pull request workflow
- GitHub Actions CI configuration
- Self-hosted runner on EC2
- Environment secrets configuration
- PM2 process management on EC2

---

## Tech Stack in this project 

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS / CSS styling

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- bcryptjs

### DevOps / Deployment
- GitHub
- GitHub Actions
- AWS EC2
- PM2

---

## Project Structure

```bash
sampleapp_IFQ636/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── axiosConfig.jsx
│   │   └── App.js
│   └── package.json
│
├── package.json
├── package-lock.json
└── README.md
```
---
## Installation and setup
# clone the respository
```bash
`git clone https://github.com/Jayden-cuu10/sampleapp_IFQ636.git`
`cd sampleapp_IFQ636`
```

# install dependencies
```bash
`npm run install-all`
```
This intalls dependencies for:
-'the root project'
-'the backend'
-'the frontend'


# Configure environment variable
Create a `.env` file inside the backend folder. (Before it, to registe an account for MonGo DB frist to get the connection string)

``` env
`MONGO_URI=mongodb+srv://n11196718_db_user:Cjj34792771@cluster0.hviiubh.mongodb.net/taskmanager?appName=Cluster0`
`JWT_SECRET=2J8zqkP7VN6bxzg+Wy7DQZCA3Yx8mF3Bl0kch6HYtFs`
`PORT=5001`
```

# Start the project

``` bash
`npm start`
```

By default:
-`Frontend runs on http://localhost:3000`
-`Backend runs on http://localhost:5001`







 

