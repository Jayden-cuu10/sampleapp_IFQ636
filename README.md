
**Assessment 1.2 (Total Marks **20**)**

Assignment: **Software requirements analysis and design (**Full-Stack CRUD Application Development with DevOps Practices**)**

---
## Project Overview
The aim of this project is to design and implement a web-based CRUD application which following software engineering and DevOps pratices.

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

 

