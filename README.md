This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Folders

(Components) => that have all components used in pages and i tried to write reusables the components as much as possible and all of this component are LazyLoad.\

(Context) => this context has globl theme value that all component have access to this value. and this value saved to localStorage to we have theme valuse also, when we refresh the page.\

(hook) => at them moment this folder just have to hooks (useAppDispatch, useAppSelector) that they associated with (redux-toolkit).\

(layout) => the global layout that all component wraped with that.\

(pages) => we just have two page (index, details).\

(redux) => with manage the global states, i use the redux-toolkit that more comfortable than pure redux, and i separate the actions and reducers.\

(styles) => have global styles and variables in sass that used for (dark mode).\

(utils) => numberSpliter: split numbers(like population in cards) to read easier the numbers
config: configuration the axios, handeling errors with interseptors and toastify, define baseURL & create requestClass to handle all request methods

## demo link
