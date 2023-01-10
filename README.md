## Running application locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Searching / listing tv shows
- Showing tv show detail
- Notifying if there is no internet connection

## Project structure

- Routes are defined within /pages - this layer is very thin it has almost no code
- Pages itself are defined within /src/pages/routes, alongside with components which are most likely not going to be reused
- /src/shared contains reusable components such as api functions and general UI components
- /src/features contains reusable components which form project's domain
- /mocks contains server mocking code for running tests

## TODO

Regarding UI

- Add loading indicator while fetching tv shows. Can be skeleton or spinner
- Maybe show possible suggestions box while user is typing in
- Show partial stars for shows which have rating such as 8.3. Right now rating is rounded
- Create special cover for TV shows which do not have one an image. Same goes for when there is no image for cast member. Right now for these cases, user is shown black rectangle with "IMAGE MISSING" text inside of it

Optimizations

- Show different images for desktop and mobile

Code

- Add tests with cypress. Some scenarios are hard to test with react-testing-library
- Move colors, breakpoints to constants
- Think out more elegant way to check if it is possible to redirect user back
- Rewrite connection observer code to not only check whether user has connection or not but also try to measure the quality of it
