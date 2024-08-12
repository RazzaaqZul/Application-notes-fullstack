**Set up Prisma and Schema**

1. `npm install --save-dev prisma` ; `npm install @prisma/client` ; `npx prisma init` ; `.env`
2. Best practice prisma in NextJs

- In /prisma create a file called /prisma/db.ts

> https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

**Set Up GraphQL Apollo**

1. `npm install @apollo/server graphql` we have dependencies of Apollo
2. create a graphql Server _/pages/api/graphql.ts_

> https://github.com/apollo-server-integrations/apollo-server-integration-next

- `npm i @as-integrations/next`

3. Check ur graphql server is running with access _http://localhost:3000/api/graphql_

**Create ur Schema, Query, Mutation**

1. in graphql server, creating ur schema in `typeDef` function. Match ur type schema with prisma schema. Define ur data like tables looks like
2. Type Query like `get` data and ur _path_.

- Give Id like take one `id`. This `id` will pass into `args` in resolves->Query function.
- `Context` is anything share accross all ur resolvers. In this case is Prisma
- `Parents` whatever `id` all resolves get, can we get from there.

3. Type Mutation like `put`, `update`, `delete`

**Restructuring Code**

1. make a folder _graphql/schema.ts_ for the `typeDefs` and _graphql/resolvers.ts_ for `resolvers`

**Apollo Client**

1. Configure Apollo Client and Fetch data from database
2. `npm install @apollo/client graphql`
3. create folder called _/components_ and make `Providers`
4. Go to _app/layout.tsx_ and give the `Providers`
5. Create _/components/notes.tsx_

**Fetch Data**

1. Get All data. Make a _/graphql/queries_
2. Put, Del, Create data make a _/graphql/mutations_

**Chakra UI**

1. `npm i @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion` & `npm i @chakra-ui/icons`
2. Setup chakra `ChackreProvider` at the root of the app
3. Create _styles/theme_

**Seeder DB**

1. create a _prisma/seed.ts_
2. Next forces the use of ESNext modules. Override this! or we'll not be able to excute the seeding script.
3. `npm install --save-dev ts-node`
4. In the _tsconfig.json_ specify that `ts-node` will use `CommonJS` module

```json
...
  "ts-node": {
    "compilerOptions": {
      "module": "CommonJS"
    }
  }
...
```

5. Update your _package.json_ file by adding a `prisma` key with a seed property defining the script for seeding the database

```json
"prisma": {
    "seed": "ts-node --transpile-only ./prisma/seed.ts"
  }
```

6. To seed your DB
   `npx prisma db seed`
