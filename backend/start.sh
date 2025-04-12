#!/bin/sh

# Generate Prisma client
npx prisma generate

# Start the application
yarn start:dev 