## Getting Started

Hello! I’m Razzaaq, and in this project, I’m building an application called "Application Notes" using the tech stack: Next.js, TypeScript, Chakra UI, PostgreSQL, GraphQL Apollo, and Prisma. This project is designed to fulfill the requirements of the Full Stack Engineer study case provided by Dibimbing.id.

The application allows users to add, view details of, delete, update, and display all notes.

## Running the Project

After cloning the repository and completing the setup, follow these steps to run the project:

### 1. Clone the Repository

If you haven't done so already, clone the repository to your local machine

### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Create `.env` from `.env-example`. Fill that environtment as your database (Postgresql).

### 4. Set Up Prisma and Seed the Database

Turn on your PostgreSQL. Do a migration to your Database and Seed them:

```
npx prisma migrate dev  # Apply migrations to the database
npx prisma db seed      # Seed the database with initial data
```

### 5. Start the Development Server

Run the development server with the following command:

```
npm run dev
```

The development server will be available at http://localhost:3000. Open this URL in your browser to view your application.

### 6. Verify GraphQL Server

Ensure that your GraphQL server is running by visiting:

http://localhost:3000/api/graphql

If the server is running correctly, you should see the GraphQL Playground or any integrated GraphQL server interface.
