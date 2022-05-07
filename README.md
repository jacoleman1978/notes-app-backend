# Notes App MERN Stack Project

## Inspiration
The inspiration for making a Notes App came to me as I was nearing the end of my bootcamp and I wanted to organize my notes. I started organizing them in notebooks, but I frequently needing to add something, which irritated my sense of organization and neatness. I've taken notes using Google Docs before. It was close, but not quite what I was looking for. I wanted something simpler and without the need to adjust the formatting.

## How to Use
The page loads at a login form. From there the user can either login or create a new user account. Upon logging in, the "Home Directory" topic contents are displayed, containing any subtopics and notes that you may have created. 

There is a breadcrumb bar directly beneath the navigation bar. It updates with the names of the topics and links, following the path of your clicks. Clicking on one of the links will bring you to that topic, however there is an unintentional feature where the breadcrumb path resets, starting on that topic.

Beneath the breadcrumb bar is the Topic section. The name of the current topic is displayed at the top with the green '+' button to create a new topic (subtopic) under the current topic. A simple form appears with only one field for the name of the topic, which is currently capped at 50 characters. The 'Home Directory' topic name can not be edited or the topic deleted, so no edit or delete buttons will display. Subtopics can be clicked on to navigate to that topic and view its child topics and notes. All other topics will have an edit and delete button displayed. Deletion requires a confirmation button click to proceed.

Beneath the Topic section is the Note section. It contains all of the notes created as part of the specific topic displayed. There is a green '+' next to the 'Notes' title that is used to create new notes, which currently appear at the bottom of the list of notes. To the right of the 'Notes' title is a checkbox that can be clicked to display or hide the edit and delete buttons for all of the notes. Each note can be individually edited or deleted. Deletion requires a confirmation button click to proceed.

### Technologies Used
Project was bootstraped with [Create React App](https://github.com/facebook/create-react-app).
Node.js
React
MongoDB
Bootstrap
Axios
Express
Bcrypt
CookieSession

### Outstanding Bugs
The app will infrequently not refresh after creating a new Note or Topic, causing the new item to not appear without a refresh or logging back in.

### Proposed Future Functionality
Add subnote functionality
Add ability to add an image or video as a note
Add drag and drop or other method of changing the order of topics and notes within their groups
Add ability to move a Note or Topic to a different Topic
Provide the ability for a user to choose their own color schemes or themes or background

### Contributors 
Jamie Coleman

### License
Copyright 2022 Jamie Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.















































# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)