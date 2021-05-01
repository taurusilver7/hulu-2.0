# Hulu Clone

> Hulu is an American subscription video on demand service fully controlled and majority-owned by The Walt Disney Company, with Comcast as an equity stakeholder.
> Styled using flexbox & tailwind css
> REST API used is Tmdb & Vercel for hosting the next js application.

## Stock

[logo](https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png?fit=1280%2C680)
[logo-alt](https://links.papareact.com/ua6)

### Setup Tailwind for the project.

> A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

`npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

- Add the lastest **jit** (just in time) compiler for the tailwind css.

- Create the configuration file for tailwindcss in the project.

  > generate your tailwind.config.js and postcss.config.js files:

  - `npx tailwindcss init -p`

- Create a CSS file if you don't already have one, and use the @tailwind directive to inject tailwind's base, components, and utilities styles.

### Header & Navbar

- While adding images from other domains to the application, the next.js should always be informed beforehand to use the resources of a particular domain. Create a `next.config.js` to create an array for the permitted domains to use resources.

- lazy loading should be adapted as standard but default img html element to save network usage for unseen image elements at the bottom of the page.

- for the global styles in the application, add the style to the directive `base` with **@layer & @apply** method.
- install [heroicons package](https://github.com/tailwindlabs/heroicons) to use the icons & svg element.

- The navbar contains the genres (categories) pulled from the REST API Tmdb.org. A util/requests.js to carry all functions to meet the requirements to make requests from the back-end api.
  - create a env local file to hold all the confidential keys to the api on the local machine.
  - These local env variables are pushed to github.
- requests.js holds all the api request url made to the api.

- Hide the scrollbar from the ui using a tailwind plugin package `tailwind-scrollbar-hide` and add it to the nav class(parent element class)
- To add a fade tranparent effect on the last genre (of the list), add a self-closing div(className='relative') in the nav element (class='absolute') and add a background-gradient-to-left. To make it transparent, the [to] is left empty [to-colorCode].

  - `<div className="absolute top-0 r-0 bg-gradient-to-l from-[#06020A] h-10 w-1/12" />`

- Add a onClick function on the nav elements to create a query parameter in the main url.

  - `/?genre=${key}`

- create a serverside render function to get the server side rendered data first, before the client side data.
- get the api key from the tmdb.org & load the env var to the next js. restart the server.

- create a get request from the api, get the results & pass it as props to the client-side. The client side renders the pros (destructers it to results) to Results component.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
