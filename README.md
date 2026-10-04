# Hulen Admin

`under construction`

Internt register over frivillige i Hulen: oversikt, kontrakter og poeng.

## The idea is...

To build a simple front-end that reads data from a database. For now, I'm using PostgreSQL via Supabase, for the sake of simplicity. Will add some dummy data there and interact with it directly from the frontend. This thing called RLS (Row Level Security), together with the authentication provided by Supabase, ensures that users can read, or edit, only the data that we allow them to. In short, it's CRUD operations without a backend. Good enough for a proof of concept, I suppose. Later on, someone smart can build a proper backend on whatever technology they like. We then update the frontend for accessing that data instead, and all is good. Something like that.

## Frontend

- React
- TypeScript

## Database

- PostgreSQL via Supabase
- Row Level Security (RLS)
- Direct database access from the frontend, with access controlled by RLS

## Access

For accessing the Supabase project where the data lives, you need the Supabase-URL, as well as the environment variables. Just ask Henri. Other than that, for running the app locally, just do the usual:

```shell
git clone <repo-url>
cd hulen-admin
pnpm install
pnpm dev
```
