# Next.js with Custom Server

A Next.js application integrated with Express.js custom server for advanced routing and API management.

## Overview

This project demonstrates how to use Next.js with a custom Express server instead of the default Next.js server. Useful for custom middleware, advanced routing, and backend integration.

## Features

- **Custom Express Server** - Full control over request handling and routing
- **Next.js Framework** - React-based frontend with server-side rendering
- **API Routes** - Organized backend API routes with Express
- **Environment Support** - Development and production configurations
- **Tailwind CSS** - Utility-first CSS framework for styling

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Server runs on [http://localhost:3000](http://localhost:3000)

### Production

```bash
npm run build
npm start
```

## Project Structure

- `server.js` - Custom Express server entry point
- `server/routes/` - API route definitions
- `app/` - Next.js pages and components
- `public/` - Static assets

## Tech Stack

- Next.js 13
- Express.js
- React 18
- Tailwind CSS

## Notes

- Authentication middleware is available but commented out for customization
- Database connection (MongoDB) is configured but commented out
