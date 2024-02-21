[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OuSBNpwM)
# Nammabnb Project

Nammabnb Project README
Project Overview
The Nammabnb project is designed to replicate key functionalities of the popular accommodation booking platform, Nammabnb. This project incorporates HTML, CSS, TypeScript for the front-end, and MongoDB for backend data storage.

# Features
1. Login Page
Description: The login page provides users with a secure authentication mechanism.
Implementation Details:
User credentials are securely processed.
Authentication tokens are used for secure user sessions.

2. Landing Page
Description: The landing page serves as the primary interface for users to explore available accommodations.
Implementation Details:
Accommodation listings are retrieved from the MongoDB database.
Users can browse and filter listings based on various criteria.

3. Payment Functionality
Description: The payment system allows users to complete bookings securely.
Implementation Details:
Users can enter payment details for selected accommodations.
Payment transactions are processed securely using established payment gateways.
Prerequisites

# Ensure that the following software is installed before running the project:
Node.js
MongoDB
npm

![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/145234036/e8617333-971f-4822-a29c-6ce6c03a0004)


# Nammabnb - User Management API
Overview
Nammabnb is a project that implements user management functionalities for a property rental platform using Node.js and MongoDB. This API handles user registration, login, retrieval, update, and deletion, serving as a crucial part of the backend system for managing user-related operations.

Technologies Used
Node.js: JavaScript runtime for server-side development.
Express: Web application framework for Node.js, simplifying API development.
MongoDB: NoSQL database for efficient data storage.
Mongoose: MongoDB object modeling tool for Node.js.
Postman: A comprehensive API development and testing tool.
Setup

# Clone the Repository:
git clone https://github.com/your-username/nammabnb.git

# Install Dependencies:
cd nammabnb
npm install


# Start the Server:
npm start

# Error Handling
The API handles errors gracefully and responds with appropriate status codes and error messages for invalid requests or server errors.

# Testing
Use Postman or any API testing tool to test the API endpoints.
Send requests to the specified endpoints with valid request bodies.
Verify the responses and ensure that the API functions as expected.

# API Endpoints

GET:
![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/145234036/13f02e92-c1b5-44ba-afd9-fb69c01617d7)

POST:
![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/145234036/3b51691f-2175-4499-833d-7af22e3f9b4c)

with validations:
![image](https://github.com/info-6150-fall-2023/final-project-techno-sync/assets/145234036/cf17503f-f964-4ca0-aa0b-6794e62cf250)



----------------
made changes from here
----------------

# Project Tech Stack

This project is built using a variety of technologies to create a modern and efficient web application. Here's a breakdown of the tech stack:

## Libraries/Frameworks

1. **MERN Stack:**
   - MongoDB (Database)
   - Express.js (Backend Framework)
   - React.js (Frontend Library)
   - Node.js (Runtime Environment)

2. **Next.js:**
   - React.js (Frontend Library)
   - Node.js (Runtime Environment)
   - Next.js (React Framework for Server-Side Rendering)

3. **Prisma:**
   - Prisma (Database Access Library)

4. **Axios:**
   - Axios (HTTP client for making requests)

5. **Zustand:**
   - Zustand (React state management library)

6. **NextAuth:**
   - NextAuth (Authentication library for Next.js)

## Languages

1. **JavaScript (JS):**
   - Core language for frontend (React) and backend (Node.js).

2. **TypeScript (TS):**
   - A superset of JavaScript that adds static typing.

3. **HTML:**
   - Markup language for structuring web content.

4. **CSS:**
   - Style sheet language for describing the presentation of a document written in HTML.

## Styling

1. **Tailwind CSS:**
   - Utility-first CSS framework.

## Authentication/Authorization

1. **Bcrypt:**
   - Library for hashing passwords.

2. **NextAuth:**
   - Handles authentication for Next.js applications.

## APIs

1. **Stripe API:**
   - Payment processing API.

2. **REST API:**
   - Architectural style for building web services.

## Database

1. **MongoDB:**
   - NoSQL database.

## Additional

1. **Stripe API:**
   - Payment processing API.

Features:

Tailwind design
Tailwind animations and effects
Full responsiveness
Credential authentication
Google authentication
Github authentication
Image upload using Cloudinary CDN
Client form validation and handling using react-hook-form
Server error handling using react-toast
Calendars with react-date-range
Page loading state
Page empty state
Booking / Reservation system
Guest reservation cancellation
Owner reservation cancellation
Creation and deletion of properties
Pricing calculation
Advanced search algorithm by category, date range, map location, number of guests, rooms and bathrooms
For example we will filter out properties that have a reservation in your desired date range to travel
Favorites system
Shareable URL filters
Lets say you select a category, location and date range, you will be able to share URL with a logged out friend in another browser and they will see the same results
How to write POST and DELETE routes in route handlers (app/api)
How to fetch data in server react components by directly accessing database (WITHOUT API! like Magic!)
How to handle files like error.tsx and loading.tsx which are new Next 13 templating files to unify loading and error handling
How to handle relations between Server and Child components!

## Prerequisites

Make sure you have Node.js version 14.x installed.

## Cloning the Repository

```bash
git clone https://github.com/AntonioErdeljac/next13-airbnb-clone.git

Install Packages
npm install

Setup .env File
Create a .env file in the root of your project and add the following variables:
DATABASE_URL="mongodb+srv://narayanandee:Nammabnb@cluster0.0ylqfuz.mongodb.net/test"
MONGODB_URI=mongodb+srv://Nammabnb:Nammabnb1234@nammabnb.0gsjaiz.mongodb.net/
NEXTAUTH_SECRET="NEXTAUTH_SECRET"
GITHUB_ID=845e59eec3934c95ca75
GITHUB_SECRET=83b6fb92cb52dd24c24207ee9d70d4fe0a41e7b7
GOOGLE_CLIENT_ID=1022443289191-5ju4ibd8cbvev4th0g7amobe285q6ph5.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="dydylqlwn"
AUTH_TOKEN=d41600f6fdd1272e1b19379bc6555133
# SID=AC6fc706f7420469c7583d93dd5e0264ec
# TWILLIO_PHONE_NUMBER=+14199280244
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51OKjBEKXqBj2n8MJyJCxXOfRdWXHO7nVZnI9tJIBVsy9qLKnlbZgTVURMbsxqEoedHykktYUvZjkv6xsZsBpE3J300DEk0nvnV
STRIPE_SECRET_KEY=sk_test_51OKjBEKXqBj2n8MJexDFXubg0umAGmRpgakcPE0hcEgq7fVDHAryDl0ngRADd6payzkV8YZPdLIArrqPICc03ucU00uO5BiN1r
JWT_SECRET=jwtsecret

Setup Prisma
npx prisma db push

npm i react-date-range
npm i -D @types/react-date-range
npm i stripe #for Stripe API (Payments)

Start the App
npm run dev










