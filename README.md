This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



# Authentication
https://www.youtube.com/watch?v=Cm6-3pVCPEI

# firebase service account
firebase-adminsdk-d0yho@chatters-7dcde.iam.gserviceaccount.com


# Websocket considerations
Websocket will be run on a separate Node.js server. Authentication to that server will be
implemented using a custom JWT token. This token will be created on successful login to the
app in the Next.js app. This approach is good, because it allows to identify the sender
on Node.js server, and also removes dependency on Google token.
Message write to the database will be performed on Next.js server which sends the message.
So it can happen either simultaneously with sending websocket, or before or after that.



# TODO next
0. Env variables !!!
1. Save user to DB on login
2. Fix finding users
3. Fix sending and receiving messages
4. Fix session and current user info - probably with GlobalStore
5. Fix deleting user
6. Fix UI layout
7. Add loading state
8. Add error handling
9. Refactor
10. Add live functionality