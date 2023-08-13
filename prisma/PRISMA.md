# Database Connection

# Set the database connection string to connect to your database server. You can use environment variables here as well.

My database connection string is:

create a file called .env.local and add the following line to "DATABASE_URL":

```bash
mongodb+srv://<username>:<password>@cluster0.7mp38ne.mongodb.net/test
```

and replace <username> and <password> with your own username and password.

### and then

```bash
npx prisma db push
```

### and then

```bash
npm run dev
```

This will create the database and the tables in your database server.
