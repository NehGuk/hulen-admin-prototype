# Hulen Admin

`under construction`

A frontend for viewing and managing human resources at Hulen.

## The idea is...

To build a simple front-end that reads data from a database. For now, I'm using a simple JSON file populated with some sample data, to simulate the object that will be fetched from the project's API.

## Frontend

- React
- TypeScript
- TailwindCSS

## Design elements

### Colour palette

Based on the same yellow used in Hulen.no, I've created this WCAG AA-compliant colour palette. It should cover the project's basic needs. The reddish shade is just for error messages. Use it sparingly.

![Colour palette](./src/assets/colour-palette.png)

### Typography

For headers, I'm using Bebas Neue and for body text I'm using Abel.

## Running it locally

Assuming you have NodeJS installed, just clone the repo and install its dependencies:

```shell
git clone <repo-url>
cd hulen-admin
pnpm install
pnpm dev
```
