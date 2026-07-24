## 📊 Data Model

The application uses two MongoDB collections: **User** and **Lead**.

### User Model

The `User` model is used for administrator authentication.

| Field | Type | Description |
|-------|------|-------------|
| email | String | Admin email address (unique) |
| password | String | Hashed password using bcrypt |


Example:

```json
{
  "email": "admin@gmail.com",
  "password": "<hashed-password>",
}
```

---

### Lead Model

The `Lead` model stores information submitted through the public lead form.

| Field | Type | Description |
|-------|------|-------------|
| name | String | Lead's name |
| email | String | Lead's email |
| budget | String | Estimated budget |
| message | String | Additional message |
| status | String | Lead status (New, Contacted, Closed) |
| createdAt | Date | Automatically generated timestamp |

Example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "budget": "$5,000",
  "message": "Interested in web development.",
  "status": "New",
  "createdAt": "2026-07-24T12:00:00Z"
}
```

---

## 🔐 Authentication Approach

The application secures the admin dashboard using **JWT (JSON Web Tokens)** and **bcrypt**.

### Authentication Flow

1. An administrator logs in using their email and password.
2. The backend verifies the email exists in the database.
3. The entered password is compared with the stored hashed password using **bcrypt**.
4. If the credentials are valid, the server generates a JWT containing the user's ID.
5. The JWT is returned to the frontend.
6. The frontend stores the token in **localStorage**.
7. An Axios interceptor automatically includes the token in the `Authorization` header for protected requests.
8. Backend middleware verifies the JWT before allowing access to protected routes.

Protected routes include:

- `GET /api/leads`
- `PATCH /api/leads/:id`

The lead submission endpoint (`POST /api/leads`) remains public so visitors can submit leads without authentication.

This approach ensures that only authenticated administrators can view or modify lead data while keeping the public lead submission form accessible.
