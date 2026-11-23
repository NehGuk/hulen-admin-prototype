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

The chosen font pairing for now is Bebas Neue (headers) and Abel (body). I've installed them via pnpm packages, from the [Fontsource](https://fontsource.org) archive.

### Icons

The [Lucide](https://lucide.dev) icon library is currently being used in this project.

## Running it locally

Assuming you have NodeJS installed, just clone the repo and install its dependencies:

```shell
git clone <repo-url>
cd hulen-admin
pnpm install
pnpm dev
```
