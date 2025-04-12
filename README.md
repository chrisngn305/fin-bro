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

- Node.js (v18 or higher)
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

4. Start the development environment:
```bash
# Start the database and backend
cd backend
docker-compose up -d

# Start the frontend development server
cd ../frontend
yarn dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001

## Testing

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
