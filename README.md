# Landed Records Backend

This is a Node.js backend project for managing and searching land records, generating PDF reports for each record. The backend uses Express, MySQL, and PDFKit.

---

## Features

- Search land records by plot number, owner name, or ID
- Generate a PDF report for any land record
- RESTful API structure
- Environment-based configuration

---

## Folder Structure

```
backend/
│
├── .env                  # Environment variables (not committed)
├── package.json          # Project dependencies and scripts
├── public/               # Static files (if any)
└── src/
    ├── app.js            # Express app setup
    ├── server.js         # Entry point to start the server
    ├── controllers/
    │   └── land.controllers.js   # Controller for land record logic
    ├── db/
    │   ├── connection.js         # MySQL connection setup
    │   └── tables.sql            # SQL to create and seed the database
    ├── routers/
    │   └── land.routes.js        # API routes for land records
    └── utils/
        └── pdfGenerator.js       # Utility to generate PDF reports
```

---

## Prerequisites

- **Node.js** (v16 or above)
- **npm** (comes with Node.js)
- **MySQL** (local or remote instance)

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository-url>
cd backend
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend` directory with the following content (replace values as needed):

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=landed_records_db
CORS_ORIGIN=http://localhost:3000
```

### 4. Set Up the Database

- Open MySQL (CLI or GUI like phpMyAdmin).
- Run the SQL script in [`src/db/tables.sql`](src/db/tables.sql) to create the database and seed sample data:

```sh
mysql -u root -p < src/db/tables.sql
```

### 5. Start the Server

```sh
npm run dev
```

The server will start on the port specified in `.env` (default: 5000).

---

## API Usage

### Search Land Record & Generate PDF

**Endpoint:**  
`GET /api/v1/search?query=<search_term>`

- `query` can be a plot number, owner name, or record ID.
- If a record is found, a PDF will be generated and downloaded.

**Example:**

```
GET http://localhost:5000/api/v1/search?query=Rajesh
```

---

## Approach & Code Explanation

1. **Express App Setup:**  
   - Configured in [`src/app.js`](src/app.js) with CORS, JSON parsing, and static file serving.
   - Routes are modularized.

2. **Database Connection:**  
   - MySQL connection is managed in [`src/db/connection.js`](src/db/connection.js) using environment variables.

3. **Routing:**  
   - All land record-related routes are defined in [`src/routers/land.routes.js`](src/routers/land.routes.js).

4. **Controller Logic:**  
   - [`src/controllers/land.controllers.js`](src/controllers/land.controllers.js) handles the search logic:
     - Receives a query from the user.
     - Searches the `landed_records` table for matches.
     - If found, calls the PDF generator.

5. **PDF Generation:**  
   - [`src/utils/pdfGenerator.js`](src/utils/pdfGenerator.js) uses PDFKit to create a formatted PDF with land record details.

6. **Server Startup:**  
   - [`src/server.js`](src/server.js) loads environment variables, starts the Express app, and listens on the configured port.

---

## Troubleshooting

- **Database errors:**  
  Ensure MySQL is running and credentials in `.env` are correct.

- **CORS issues:**  
  Make sure `CORS_ORIGIN` in `.env` matches your frontend URL.

- **PDF not downloading:**  
  Check for errors in the server logs and ensure the record exists.

---
END OF DOCUMENT