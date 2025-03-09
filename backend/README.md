# Job Board Platform Backend

This is the backend for the Job Board Platform, built with Node.js, Express, and MongoDB.

## Features
- User registration (applicants & employers)
- Job posting & retrieval
- JWT-based authentication

## Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with MongoDB URI & JWT secret
4. Run the server: `node server.js`

## API Endpoints
- `GET /api/jobs` - Fetch all jobs
- `POST /api/jobs` - Create a job (requires authentication)
- `POST /api/users/register` - Register a new user
