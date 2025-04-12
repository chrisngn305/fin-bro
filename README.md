# Fin-Bro - Financial Management Application

A comprehensive financial management application built with React, TypeScript, NestJS, and PostgreSQL.

## Features

- User Authentication
- Budget Tracking
- Transaction Management
- Investment Portfolio
- Debt Tracking
- Financial Goals
- Fund Management
- Financial Advisor Integration
- Insights and Analytics

## Tech Stack

### Frontend
- React
- TypeScript
- React Query
- Axios
- Tailwind CSS
- Jest & React Testing Library

### Backend
- NestJS
- TypeScript
- Prisma
- PostgreSQL
- JWT Authentication
- Passport.js

## Getting Started

### Prerequisites

- Node.js (v20 or higher)
- Docker and Docker Compose
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fin-bro.git
cd fin-bro
```

2. Install dependencies:
```bash
# Install frontend dependencies
cd frontend
yarn install

# Install backend dependencies
cd ../backend
yarn install
```

3. Set up environment variables:
```bash
# Backend
cp backend/.env.example backend/.env
# Frontend
cp frontend/.env.example frontend/.env
```

### Running the Application

The application can be run in two ways:

#### Option 1: Using Docker Compose (Recommended)

This will start all services (frontend, backend, and database) in containers:

```bash
# Start all services
docker-compose up --build

# To run in detached mode
docker-compose up -d --build
```

The application will be available at:
- Frontend: http://localhost:8080
- Backend API: http://localhost:3000
- Database: localhost:5432

To stop the services:
```bash
docker-compose down
```

#### Option 2: Running Services Individually

1. Start the database:
```bash
cd backend
docker-compose up db -d
```

2. Start the backend:
```bash
cd backend
yarn install
yarn prisma generate
yarn prisma migrate deploy
yarn start:dev
```

3. Start the frontend:
```bash
cd frontend
yarn install
yarn dev
```

## Development

### Database Migrations

To create and apply new migrations:
```bash
cd backend
yarn prisma migrate dev
```

### Testing

Run the test suite:
```bash
# Frontend tests
cd frontend
yarn test

# Backend tests
cd backend
yarn test
```

## API Documentation

The API documentation is available at `/api/docs` when running the backend server.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
