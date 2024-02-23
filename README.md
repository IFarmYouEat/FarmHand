# Farmhand
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `prime_app` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

- Run `npm install`

- Run `npm run server`
- Run `npm run client`


## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

<!-- Break -->

# Prime Solo Project
## Description

The Prime Solo Project is a React-based application focused on providing robust solutions for contract and crop management. It features a user-friendly interface for seamlessly managing and visualizing contracts and agricultural data, making it an indispensable tool for professionals in the agriculture sector.

## Key Components
### Contract Management

    Contract Modal: Facilitates the creation and editing of contract details through a modal dialog, providing inputs for contract specifics and submission functionality.

    Contract Page: A dedicated page for contract management, featuring functionality to open the ContractModal for adding or editing contracts and displaying a list of contracts.

    Contract Table: Displays a comprehensive table of contracts, allowing users to view all contract details at a glance. Includes functionality for editing and removing contracts directly from the table.

### Crop Management

    Crop Modal: Manages crop-related information, offering fields for inputting details about crops, such as names and quantities. Designed for easy management and updating of crop data.

    Crop Form: Allows for the addition of new crop yields, providing inputs for year, crop type, and yield amount. A tool for accurately tracking and updating crop production data.

    Crop Page: Serves as the hub for crop data management, integrating the CropModal for editing purposes and showcasing crop information in an organized manner.

## Styling

The application uses CSS for styling, ensuring a coherent and responsive design across all components. The .ContractPage and .CropPage classes define the layout for their respective pages, emphasizing a user-centric design approach. Modal components are styled to provide a visually appealing and intuitive user interaction experience.

### Installation

Follow these steps to set up the project locally:

    Ensure you have Node.js version 18.x installed.
    Clone the repository and navigate to the project directory.
    Install dependencies with npm install.
    Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. 
    Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). 
    If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.

    Create a new database called `prime_app` and create a `user` table:

    If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Usage

The project includes scripts for development and production environments:

    Start the server: npm run start - Initiates the backend server.
    Start the client: npm run client - Launches the React client for development purposes.
    View on Browser: Enter `localhost:3000` in your address bar. 

## Features

    Contract and Crop Management: Streamlined interfaces for managing contracts and crop data, enhancing operational efficiency.
    Responsive Design: Utilizes CSS and Material-UI for a responsive layout, ensuring compatibility across devices.
    Data Visualization: Offers tables and forms for viewing and inputting data, designed for ease of use and accessibility.

## Contributing

Contributions are encouraged. Please fork the repository, make your changes, and submit a pull request for review.
License

This project is open-sourced under the MIT License.
Acknowledgments

A heartfelt thank you to Prime Digital Academy, My Instructor Chris Black, My classmates, and my family. 
