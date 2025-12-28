# Promote India Foundation Website

A modern, responsive, multi-page website for Promote India Foundation built with React, Express, MySQL, and Redux Toolkit.

## 🎨 Design Features

- **Indian Theme Colors**: Saffron, White, Green, and Blue
- **Modern NGO-style UI**: Clean, premium, and professional design
- **Fully Responsive**: Mobile-friendly layout
- **Smooth Animations**: Enhanced user experience
- **Bilingual Support**: English and Hindi (Devanagari) text

## 🚀 Tech Stack

- **Frontend**: React 18, Redux Toolkit, React Router
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Styling**: CSS3 with custom Indian theme colors

## 📋 Prerequisites

- Node.js (v14 or higher)
- MySQL (v5.7 or higher)
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd PromoteIndia
```

### 2. Install dependencies

```bash
# Install root dependencies
npm install

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Database Setup

1. Create a MySQL database:
```sql
CREATE DATABASE promote_india_db;
```

2. Create a `.env` file in the `server` directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=promote_india_db
```

The database tables will be created automatically when you start the server.

### 4. Run the application

#### Option 1: Run both server and client together
```bash
npm run dev
```

#### Option 2: Run separately

**Terminal 1 - Start the server:**
```bash
cd server
npm run dev
```

**Terminal 2 - Start the client:**
```bash
cd client
npm start
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 📁 Project Structure

```
PromoteIndia/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/          # Page components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   └── Programs/
│   │   ├── store/          # Redux store
│   │   │   ├── store.js
│   │   │   └── slices/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── server/                 # Express backend
│   ├── index.js           # Server entry point
│   └── package.json
└── package.json           # Root package.json
```

## 📄 Pages

1. **Home Page** (`/`)
   - Hero section with Indian theme
   - Overview of all 4 flagship programs
   - Mission statement

2. **About Page** (`/about`)
   - Who We Are
   - Vision
   - Mission
   - Core Values

3. **Program Pages**:
   - **Promote Employment** (`/promote-employment`)
   - **Promote Awareness** (`/promote-awareness`)
   - **Promote Humanity** (`/promote-humanity`)
   - **Promote Governance** (`/promote-governance`)

4. **Contact Page** (`/contact`)
   - Contact form
   - Volunteer registration form
   - Office information
   - Social media links

## 🎯 Features

- ✅ Multi-page navigation with React Router
- ✅ Contact form submission with backend integration
- ✅ Volunteer registration system
- ✅ Responsive design for all devices
- ✅ Redux Toolkit for state management
- ✅ MySQL database for storing submissions
- ✅ Indian theme colors throughout
- ✅ Smooth animations and transitions
- ✅ SEO-friendly structure

## 🔧 API Endpoints

- `POST /api/contact` - Submit contact form
- `POST /api/volunteer` - Register as volunteer
- `GET /api/contacts` - Get all contact submissions (admin)
- `GET /api/volunteers` - Get all volunteer registrations (admin)
- `GET /api/health` - Health check

## 🎨 Color Palette

- **Saffron**: `#FF9933`
- **White**: `#FFFFFF`
- **Green**: `#138808`
- **Blue**: `#000080`

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 📞 Support

For support, email contact@promoteindiafoundation.org or visit the Contact page on the website.

---

**Promote India Foundation** - "एक संकल्प भारत को प्रोत्साहित करने का"

