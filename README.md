# 🏔️ Himalyan Roots

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn%20UI-18181B?style=for-the-badge)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON%20Server-FF6F00?style=for-the-badge&logo=json&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

---

**Himalyan Roots** is a modern resort website built using **Next.js** for performance, **Tailwind CSS + Shadcn UI** for elegant design, and **Redux Toolkit** for global state management.  
The project uses **JSON Server** as a mock backend to simulate real API data, ensuring a smooth development experience.

---

## 🚀 Technologies, Libraries & Frameworks Used

| Library / Framework | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Next.js**         | A React-based framework for building fast, SEO-friendly, and scalable web applications with server-side rendering. |
| **JSON Server**     | Creates a mock REST API to test frontend functionalities without needing a real backend.                           |
| **Shadcn/UI**       | Provides pre-styled, elegant UI components that integrate perfectly with Tailwind CSS.                             |
| **Tailwind CSS**    | A utility-first CSS framework for crafting responsive, modern designs efficiently.                                 |
| **Redux Toolkit**   | Simplifies state management and handles asynchronous data fetching throughout the app.                             |
| **Axios**           | A promise-based HTTP client used for making API requests and handling responses easily.                            |

---

## ⚙️ Project Structure Overview

### Folder Explanation

- **`app`** → Contains all page components and logic. Each page has its own route, and reusable components are imported into parent components.
- **`redux-toolkit`** → Contains the Redux setup for managing global state and async API logic using `createAsyncThunk`.
- **`types`** → Stores TypeScript interfaces for maintaining strict type safety.
- **`public`** → Holds assets like images, typography files, and icons used across the app.

---

## 🧩 Scripts to Run the Project

### 1️⃣ Start JSON Server

Run this first to start the mock backend:

```bash
cd json-server
npx json-server db.json --port 5000

#### 2️⃣ Start the Frontend (Next.js UI)

In another terminal, run:

npm run dev


Your app will start at http://localhost:3000


🌱 Upcoming Updates

✅ Booking functionality integration

✅ Admin Panel integration

✅ TANSTACK Query

✅ UI/UX fixes and enhancements

✅ Additional improvements and optimizations

💡 Notes

All pages and components are modular and reusable.

Redux Toolkit ensures clean, centralized global state management.

Tailwind CSS + Shadcn UI provide a professional and responsive design system.

The project follows a scalable and developer-friendly structure for future updates.

🧠 Tip

Always start JSON Server first before running the UI to ensure all API data loads correctly on initial render.

💻 Developed by [Amit Jamwal] using Next.js, Redux Toolkit & Tailwind CSS

