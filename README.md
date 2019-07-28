This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About this project

This project has not been ejected, the project is a kick starter which will allow developers to start developing with a core foundation

## Styled components

This project utilises Styled components themes with CSS in JS
- Theme info is found /src/assets/styles/config
- Media querys are found /src/assets/styles/media and are called like this 
```
import { above, below, between } from '../../assets/styles/media';
    ${above.tablet(css`
        color: yellow;
      `)}
      
      ${below.tablet(css`
        color: orange;
        background-color: green;
      `)}

      ${between.tablet.desktop(css`
        background-color: purple;
        color: green;
      `)}
```
- further information can be found - https://www.styled-components.com/docs

## Typescript

- Custom Typings are created in /src/typings
- Eslint has a typescript parser, TSLINT is being DEPRECATED as of 2019
- Typescript docs = https://www.typescriptlang.org/docs/home.html

## Testing

- React testing library docs https://testing-library.com/docs/react-testing-library/intro 

##VSCODE setup IMPORTANT

#### Extensions

- ESLint setup requires these settings
```"eslint.autoFixOnSave": true,
  "eslint.validate": [
    {"language": "javascript", "autoFix": false},
    {"language": "javascriptreact", "autoFix": false},
    {"language": "typescript", "autoFix": true},
    {"language": "typescriptreact", "autoFix": true},
  ]
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
