
# Login Template (React Hooks + SWR + Auth0)
![](https://i.imgur.com/kkFhd8z.jpg)
[React Hooks](https://reactjs.org/docs/hooks-intro.html) Login template that fetches with [SWR](https://swr.now.sh) a random dog pic from the [Dog Api](https://dog.ceo/dog-api/) if user is not currently logged through [Auth0](https://auth0.com), and a random cat pic from the [Cat Api](https://thecatapi.com/) if it is. When the user is logged through [Auth0](https://auth0.com) it also gains access to the Profile section.

Users can sign up and log in with the following social accounts: Google, Facebook, Twitter, LinkedIn, Amazon, Apple, Microsoft, PayPal, Dropbox, & Github

Live Version hosted in [Firebase](https://firebase.google.com/): https://react-auth0-login.web.app

  

## Available Scripts

  

In the project directory, you can run:

  

### `yarn start`

  

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

  

### `yarn test`

  

Launches the test runner in the interactive watch mode.<br />

[Running tests with CRA](https://facebook.github.io/create-react-app/docs/running-tests).

  

### `yarn build`

  

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.<br />

  

[Deployment with CRA](https://facebook.github.io/create-react-app/docs/deployment)

  

### `yarn deploy`

Deploys app to Firebase