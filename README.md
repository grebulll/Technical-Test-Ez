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

### **Permission-based access**

Currently, the application does not have permission-based access for certain screens, components and/or actions.

### **Show Loading Component when loading data**

There is no sort of loading/skeleton components when loading data.

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

## **Docker Setup**

Ensure you have [Docker](https://www.docker.com/get-started) installed by running `docker --version`.

To build the Docker image, use the command `docker build -t my-app .`, where `-t my-app` assigns a name to the image, and the `.` specifies the current directory as the build context. Once the image is built, run the container using `docker run -d -p 8080:80 my-app`. The `-d` flag runs the container in detached mode, and `-p 8080:80` maps port **8080** on your local machine to port **80** in the container.

After starting the container, open a web browser and go to `http://localhost:8080`. If the application is running correctly, it should be accessible at that address. To check running containers, use `docker ps`. If you need to stop the container, use `docker stop <container_id>`, replacing `<container_id>` with the actual ID obtained from `docker ps`. To remove the container after stopping it, run `docker rm <container_id>`.

If you want to delete the image, use `docker rmi my-app`. To clean up unused Docker resources, including images and containers, use `docker system prune -a`, but be aware that this will remove all unused images and containers.

If changes are made to the source code, rebuild the image using `docker build -t my-app .` and restart the container with `docker run -d -p 8080:80 my-app`. If a different port is needed, modify the `-p` flag accordingly, for example, `docker run -d -p 3000:80 my-app` to map port **3000** on the host machine to **80** inside the container.
