![App Screenshot](https://i.ibb.co/DsD0cmf/eco-adventure.png)

# 🌐 **Learn Link**

## 📝 **Project Overview**

- **Purpose:** Learn Link is a modern service-sharing platform designed for educational services, offering a seamless way to browse, add, and manage courses.
- **Target Users:** Students looking for courses, instructors offering courses, and individuals wanting to manage their learning journey.
- **Problem Solved:** Makes education more accessible and collaborative by enabling course discovery, booking, and management in one platform.
- **Key Objectives:**
  1. Provide a user-friendly platform for instructors to create, manage, and offer courses.
  2. Allow students to easily browse, book, and interact with courses.
  3. Offer a clean, responsive, and interactive UI for a pleasant user experience.
- **Impact:** Empowering students and instructors to connect and share knowledge, making education more accessible for everyone.

---

**🔗 Live Site URL:** [Learn Link Live Site](https://learn-link.netlify.app/)

---

## 🔥 **Core Features**

### User Features
1. **Dynamic Popular Section:**
   - Fetches real-time data to display the most popular courses dynamically.
   
2. **Course Management:**
   - Add, update, and delete courses through an intuitive interface.
   
3. **Personalized Course Interaction:**
   - Registered users can manage their booked courses and interact with courses booked by others.
   
4. **Detailed Course Pages:**
   - Each course has its own dedicated page with comprehensive details for better decision-making.

5. **Theme Toggler:**
   - Switch effortlessly between dark and light modes for a personalized experience.

### Main Functionality
- **Two Types of Users:**
  - **Instructors:** Can add, manage, and provide courses.
  - **Students:** Can browse, book, and interact with courses offered by instructors.

---

## 🛠️ **Technologies Used**

| **Frontend**                      | **Backend**                    |
|-----------------------------------|--------------------------------|
| React                             | Node.js                        |
| React Router                      | Express.js                     |
| Tailwind CSS & DaisyUI            | MongoDB                        |
| React Icons                       | JWT (JSON Web Token)           |
| Framer Motion                     |                                |
| React-Date-Picker                 |                                |
| React Helmet                      |                                |
| React Hot Toast                   |                                |
| Swiper JS                         |                                |
| Firebase                          |                                |
| Axios                             |                                |


---

## 📍 **Pages / Routes**

### **Public Routes** 🌐

1. **Home Page**: Includes banner, popular courses, category section, and top instructors. 🏠
2. **All Services Page**: Displays all available courses. 📑

### **Private Routes** 🔒

1. **Add Service**: Allows registered users to add courses. ➕
2. **Manage Service**: Enables users to manage, update, and delete their courses. 🛠️
3. **Booked Service**: Shows courses booked by the user. 📅
4. **Service To-Do**: Displays courses booked by others from the user. ✅
5. **Service Details Page**: Detailed information about a specific course. 📘

---

## 📦 **Dependencies**

### **Client-Side Dependencies:**
```json
{
  "axios": "^1.7.9",
  "date-fns": "^4.1.0",
  "firebase": "^11.1.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "motion": "^11.15.0",
  "react": "^18.3.1",
  "react-datepicker": "^7.5.0",
  "react-dom": "^18.3.1",
  "react-helmet": "^6.1.0",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.1.0",
  "sort-by": "^1.2.0",
  "swiper": "^11.1.15"
}
```
### **Server-Side Dependencies:**
```json
{
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.4.7",
  "express": "^4.21.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.12.0"
}
```

---
# 🌱 **Environment Variables Setup**

## 🧑‍💻 **Frontend Environment Variables:**

Make sure to add the following variables in your `.env` file for the frontend:

- `VITE_apiKey`: Firebase API key.
- `VITE_authDomain`: Firebase authentication domain.
- `VITE_projectId`: Firebase project ID.
- `VITE_storageBucket`: Firebase storage bucket URL.
- `VITE_messagingSenderId`: Firebase messaging sender ID.
- `VITE_appId`: Firebase app ID.
- `VITE_API_URL`: Backend API URL.

## 💻 **Backend Environment Variables:**

Add the following variables in your `.env` file for the backend:

- `DB_USER`: Database username.
- `DB_PASS`: Database password.
- `SECRET_KEY`: Secret key for JWT authentication.

> **Note:**  
> Make sure to keep these keys private and add them only in your `.env` file.

---
## How to run locally

### ✅ Prerequisites

Before running this project locally, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- **Git** (latest version recommended) - [Download here](https://git-scm.com/)

### Verify Installation
To check if you have the required tools installed, run these commands in your terminal:

```bash
node -v

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



