## React Boilerplate - TypeScript version.

## installing

### `npm install`

###### 
### Available Scripts
###### 

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

### `npm run link-local`

It uses npm symbolic link power to assign local relationship with dependency on different repository that is available on a computer.<br />
Beware: using npm install after setting symbolic linking installs dependency as defined in package.json, so linking has to be reassign.<br />
More [about symbolic links](https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af).
Default repo: 'your-default-dependency-to-link'. To modify this pass a param to npm script, <br />
that equals a directory in parent folder, as: 'npm run link-local -- moduleName'

### `npm run unlink-local`

It removes npm symbolic linking with your dependency module.
Default repo: 'your-default-dependency-to-link'. To modify this pass a param to npm script, <br />
that equals a directory in parent folder, as: 'npm run unlink-local -- moduleName'