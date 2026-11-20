# Notes App (Backend)

Simple Notes REST API built with Node.js and Express. Notes are stored in an in-memory array (data resets on server restart).

Features
- Create a note (title and description)
- View all notes
- Update a note
- Delete a note

Requirements
- Node.js 14+ (or newer)

Ports
- Default port: 3000
- You can change by setting the PORT environment variable

Install

1. Install dependencies

   npm install

2. Run the server

   npm start

3. Run in development (auto-reload)

   npm run dev

API Endpoints

Base URL: http://localhost:3000

- GET /api/notes
  - Response: 200 OK
  - Body: array of notes

- GET /api/notes/:id
  - Response: 200 OK
  - 404 Not Found if id does not exist

- POST /api/notes
  - Request JSON: { "title": "string", "description": "string (optional)" }
  - Validation: title is required and must be non-empty
  - Response: 201 Created with created note
  - 400 Bad Request if validation fails

- PUT /api/notes/:id
  - Request JSON: { "title": "string", "description": "string (optional)" }
  - Validation: title is required and must be non-empty
  - Response: 200 OK with updated note
  - 404 Not Found if id does not exist

- DELETE /api/notes/:id
  - Response: 204 No Content on success
  - 404 Not Found if id does not exist

Sample curl requests

Create a note

curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"New note","description":"Note details"}'

List notes

curl http://localhost:3000/api/notes

Get a note by id

curl http://localhost:3000/api/notes/1

Update a note

curl -X PUT http://localhost:3000/api/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated title","description":"Updated"}'

Delete a note

curl -X DELETE http://localhost:3000/api/notes/1

Postman

You can import backend/postman_collection.json into Postman. Create requests pointing to the endpoints above. Set the request body to raw JSON and include the appropriate headers (Content-Type: application/json).

Notes
- Data is stored in-memory; restarting the server will reset notes to the sample data included.
- This project uses CommonJS modules (require/module.exports) as requested.

License: MIT
