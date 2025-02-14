# Tech Quiz Application

This is a Tech Quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to take a quiz of ten random questions and view their final score.

## Features

- Start a quiz with ten random questions
- Answer questions and navigate through the quiz
- View the final score after completing the quiz
- Option to start a new quiz

## Installation

1. Clone the repository:
    ```sh
    git clone <github.com/cholmun/Module-19-Challenge.git>
    ```

2. Install dependencies for both the server and client:
    ```sh
    cd server
    npm install
    cd ../client
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the [server](http://_vscodecontentref_/1) directory with the following content:
    ```properties
    MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
    ```

4. Start the development server:
    ```sh
    cd server
    npm start
    ```

5. Start the React client:
    ```sh
    cd client
    npm start
    ```

## Testing

This project uses Cypress for both component and end-to-end testing.

### Install Cypress

```sh
npm install --save-dev cypress @cypress/react @cypress/webpack-dev-server
