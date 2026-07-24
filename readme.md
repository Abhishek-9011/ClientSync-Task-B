# 🚀 ClientSync – LeadDesk Mini

A modern full-stack lead management application built with the MERN stack. ClientSync allows visitors to submit inquiries through a beautiful landing page, while administrators can efficiently manage, search, and update lead statuses from a dedicated dashboard.

---

## 🌐 Live Demo

- **Landing Page:** https://client-sync-eight.vercel.app/
- **Admin Dashboard:** https://client-sync-eight.vercel.app/admin

---

## 📸 Screenshots

### 🏠 Landing Page

![Landing Page](https://i.postimg.cc/L61rZ8sV/ladning-page.png)

---

### 📝 Lead Form

![Lead Form](https://i.postimg.cc/hGpwqJCt/lead-form.png)

---

### 📊 Admin Dashboard

![Admin Dashboard](https://i.postimg.cc/9fb3FgQb/admin-page.png)

---


## ✨ Features

### Public Landing Page

- Modern responsive UI
- Hero section
- Features section
- Contact/Lead form
- Client-side validation
- Server-side validation
- Stores submissions in MongoDB

### Admin Dashboard

- View all submitted leads
- Search leads by name or email
- Update lead status
  - New
  - Contacted
  - Closed
- Dashboard summary cards
- Loading & empty states
- Responsive design

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

### Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📁 Project Structure

```text
ClientSync
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   ├── assets
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/ClientSync.git
cd ClientSync
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Run the backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Run the frontend:

```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/leads` | Create a new lead |
| GET | `/api/leads` | Get all leads |
| GET | `/api/leads?search=` | Search leads |
| PATCH | `/api/leads/:id` | Update lead status |

---

## 🗄️ Database Schema

```javascript
{
  name: String,
  email: String,
  budget: String,
  message: String,
  status: "New" | "Contacted" | "Closed",
  createdAt: Date
}
```

---

## 🎯 Validation

### Client Side

- Required fields
- Valid email format
- Budget selection required
- Message validation

### Server Side

- Request validation
- Required fields
- Email validation
- Budget enum validation
- Error handling

---

## 📱 Responsive Design

The application is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile

---

## 🚀 Deployment

### Frontend

- Hosted on **Vercel**

### Backend

- Hosted on **Render**

### Database

- **MongoDB Atlas**

---

## 👨‍💻 Author

**Abhishek Singh**

- GitHub: https://github.com/Abhishek-9011
- LinkedIn: https://www.linkedin.com/in/abhishek-9011-singh/

---

## 📄 License

This project was built for educational purposes as part of a Full Stack Development assessment.
