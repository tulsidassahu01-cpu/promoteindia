# Setup Guide for Promote India Foundation Website

## Quick Start Guide

### Step 1: Install Node.js and MySQL

Make sure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MySQL** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/)

### Step 2: Install Dependencies

Open terminal in the project root and run:

```bash
npm run install-all
```

This will install dependencies for:
- Root package (concurrently for running both servers)
- Server package (Express, MySQL, etc.)
- Client package (React, Redux, etc.)

### Step 3: Setup MySQL Database

1. **Start MySQL Server**

2. **Create Database** (Option A - Automatic):
   - The server will automatically create tables when it starts
   - Just make sure MySQL is running

3. **Create Database** (Option B - Manual):
   ```sql
   CREATE DATABASE promote_india_db;
   ```
   Or run the SQL file:
   ```bash
   mysql -u root -p < server/database.sql
   ```

### Step 4: Configure Environment Variables

1. Copy the example env file:
   ```bash
   cd server
   copy .env.example .env
   ```
   (On Linux/Mac: `cp .env.example .env`)

2. Edit `server/.env` with your MySQL credentials:
   ```env
   PORT=5000
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=promote_india_db
   ```

### Step 5: Run the Application

#### Option 1: Run Both Together (Recommended)
```bash
npm run dev
```

#### Option 2: Run Separately

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm start
```

### Step 6: Access the Website

- **Frontend**: Open http://localhost:3000 in your browser
- **Backend API**: http://localhost:5000

## Troubleshooting

### MySQL Connection Error

If you see "MySQL connection error":
1. Make sure MySQL is running
2. Check your credentials in `server/.env`
3. Verify the database exists: `SHOW DATABASES;`

### Port Already in Use

If port 3000 or 5000 is already in use:
- Change `PORT` in `server/.env` for backend
- Change port in `client/package.json` scripts for frontend

### Module Not Found Errors

Run:
```bash
npm run install-all
```

### Database Tables Not Created

The tables are created automatically. If they're not:
1. Check MySQL connection
2. Manually run `server/database.sql`

## Development Tips

1. **Hot Reload**: Both frontend and backend support hot reload
2. **Database Changes**: Restart the server after changing database schema
3. **Clear Cache**: Clear browser cache if you see old content

## Production Build

To create a production build:

```bash
cd client
npm run build
```

The build folder will contain optimized production files.

## Need Help?

- Check the main README.md for more details
- Review the code comments
- Check console/terminal for error messages

