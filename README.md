# **Game Presenters Scheduling System**

This project is a **Game Presenters Scheduling System** that provides authentication, role-based access control (RBAC), and an automated scheduling system for game presenters across different shifts.

---

## **Project Overview**

In addition, the application includes:  
**Authentication**  
**Automatic Game Presenter Rotation with Breaks**  
**CRUD Operations for Game Presenters & Tables**  
**Protected Routes**

---

## **Features**

**Login System** – Only authenticated users can access the application.  
**Rotation Scheduling** – Assigns presenters to tables in **three shifts (Morning, Afternoon, Night)**.  
**Break Slot Integration** – Ensures every presenter gets a break.  
**CRUD Operations** – Users can **create, view, edit, and delete** game presenters and tables.  
**Persistent Authentication** – Login state is stored using `localStorage`.  
**Protected Routes** – Unauthorized users are redirected.

---

## Possible Improvements

### **Database Integration**

Currently, the application uses a mock API to manage game presenters and tables. A real database like **Firebase or MongoDB** can be integrated to persist data permanently.

### **Role Management System**

- Implement a **dynamic role-based system**, allowing admins to assign or change user roles dynamically.
- Introduce **more granular permissions** for different actions.

### **Real-Time Scheduling Updates**

- Implement **WebSockets (e.g., Socket.io)** to update the rotation schedule in real-time.
- If a presenter is unavailable, the system should auto-adjust the schedule dynamically.

### **Improved Authentication System**

- Replace the **mock login system** with **JWT-based authentication** using an actual backend.
- Store **authentication tokens securely** in HTTP-only cookies.

### **Mobile Responsiveness**

- Improve **mobile UI** for a better experience on smaller screens.

### **Unit & Integration Testing Improvements**

- Increase **test coverage** using Vitest.
- Add **end-to-end tests** using Cypress for simulating user interactions.

---

## **Prerequisites**

Before running the application, ensure you have:  
**Node.js (v16 or later)**
**npm** – Comes with Node.js

---

## **Installation**

Clone the repository and install dependencies:

```sh
git clone https://github.com/grebulll/Technical-Test-Ez.git
cd game-presenters-scheduling
npm install  # or yarn install
```
