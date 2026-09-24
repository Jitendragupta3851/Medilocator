# Medilocator

Medilocator is a MERN-based medical shop locator. It helps users discover nearby medical shops, while shop owners can register their business, manage shop details and update their location. Administrators can manage users, shop owners, shops, contacts and feedback from a separate dashboard.

## Features

### Users

- Register and log in with a profile image
- View and edit the user profile
- Browse available medical shops
- Search shops by location or details
- View shop locations on the map
- Submit feedback and contact messages

### Shop owners

- Register and log in as a shop owner
- Manage shop-owner profile details
- Add and update medical shop information
- Update shop location
- View registered shops

### Administrators

- Admin login and profile access
- View all users and shop owners
- View all registered shops
- Review contact messages and feedback

## Tech Stack

- Frontend: React 19, Vite, React Router, Bootstrap, Bootstrap Icons, Lucide React, Axios
- Backend: Node.js, Express 5, Mongoose, Multer, CORS, dotenv
- Database: MongoDB
- Deployment: Vercel configuration is included for the frontend and backend

## Project Structure

```text
.
├── backend/
│   ├── controller/       Request handlers
│   ├── database/         MongoDB connection
│   ├── middleware/       Upload middleware
│   ├── model/            Mongoose models
│   ├── public/            Uploaded profile images
│   ├── router/           Express route modules
│   ├── .env.example
│   └── server.js
└── frontend/
    └── medilocator/
        ├── src/components/  React pages and shared components
        ├── src/config.js    API URL configuration
        ├── .env.example
        └── package.json
```

## Prerequisites

Install the following before running the project:

- Node.js 18 or newer
- npm
- MongoDB database, local or hosted

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Jitendragupta3851/Medilocator.git
cd Medilocator
```

### 2. Configure the backend

```bash
cd backend
npm install
```

Copy `.env.example` to `.env` and set the values:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
FRONTEND_URL=http://localhost:5173
```

Start the backend:

```bash
npm run dev
```

The API will run at `http://localhost:3000`.

### 3. Configure the frontend

Open a second terminal:

```bash
cd frontend/medilocator
npm install
```

Copy `.env.example` to `.env`:

```env
VITE_API_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Vite will print the local frontend URL, normally `http://localhost:5173`.

## Available Scripts

### Backend

| Command | Description |
| --- | --- |
| `npm start` | Start the production Node.js server |
| `npm run dev` | Start the server with Nodemon |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## API Overview

All API requests are served from the backend URL configured in `VITE_API_URL`.

| Prefix | Main endpoints |
| --- | --- |
| `/` | `POST /addContact` |
| `/user` | Registration, login, profile, shop search, feedback and profile editing |
| `/shopOwner` | Registration, login, shop management, profile editing and location updates |
| `/admin` | Admin login, profile, users, shop owners, shops, contacts and feedback |

Uploaded profile images are served from the backend's `/profilePics` path.

## Deployment Notes

- Set `MONGO_URI` in the backend hosting environment.
- Set `FRONTEND_URL` to the deployed frontend URL. Multiple comma-separated origins are supported.
- Set `VITE_API_URL` to the deployed backend URL before building the frontend.
- Do not commit `.env` files or database credentials. Use the provided `.env.example` files as templates.
- The included `vercel.json` files provide the current Vercel deployment configuration.

## Contributing

1. Create a feature branch.
2. Make focused changes and run the frontend lint/build checks.
3. Test the relevant user, shop-owner or admin flow locally.
4. Open a pull request with a clear description of the change.

## License

This project currently uses the ISC license configuration from the backend package.
