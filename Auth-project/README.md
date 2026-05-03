# FreeAPI Auth App

This project is a simple authentication app built for Web Dev Cohort 2026.  
It uses the FreeAPI authentication endpoints to handle user login and registration.

---

## Timeline

- Start: May 2, 2026  
- Due: May 3, 2026  

---

## What this project does

- Lets a user create an account  
- Lets a user log in  
- Shows current user details  
- Allows logout  
- Handles basic loading and error states  

The goal is to understand how authentication works on the frontend using APIs.

---

## API Used

### Register
POST https://api.freeapi.app/api/v1/users/register  

Body:
{
  "email": "user.email@domain.com",
  "password": "test@123",
  "role": "ADMIN",
  "username": "doejohn"
}

---

### Login
POST https://api.freeapi.app/api/v1/users/login  

Body:
{
  "password": "test@123",
  "username": "doejohn"
}

---

### Logout
POST https://api.freeapi.app/api/v1/users/logout  

---

### Current User
GET https://api.freeapi.app/api/v1/users/current-user  

---

## Features

- Register form  
- Login form  
- Logout button  
- Current user section  
- Error and success messages  
- Loading state  
- Clean UI using Tailwind  

---

## Tech Used

- HTML / React  
- JavaScript / TypeScript  
- Tailwind CSS  
- React Hook Form  

---

## Run locally

git clone https://github.com/Kunalmadoliya/free-apiAuth.git  
cd free-apiAuth  
npm install  
npm run dev  

---

## Links

Live Project: (add your deployed link)  
GitHub Repo: https://github.com/Kunalmadoliya/free-apiAuth  

---

## Notes

This project focuses on understanding API-based authentication, sessions, and user state management on the frontend.