# Farmhand
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

![Screenshot 2024-02-23 at 6 10 43 PM](https://github.com/IFarmYouEat/FarmHand/assets/74782331/375037ff-e970-4296-8b6e-33f64b880223)


## Description

The Prime Solo Project is a React-based application focused on organize and tracking total grain produced and contracts for the amount 
of grain sold while delivering a weighted average price. This allows farmers to have a better picture of their financial position relative 
to their break even number. This App aims to provide a tool for farmers who are utilizing pen and notepad for tracking this information, 
or have no system at all. 

It features a user-friendly interface for seamlessly managing and visualizing contracts and agricultural data, making it an indispensable 
tool for professionals in the agriculture sector.

## Key Components

### Crop Production Management

Crop Page: Serves as the hub for crop data management, integrating the CropModal for editing purposes and showcasing 
crop information in an organized manner.

![Screenshot 2024-02-23 at 5 59 47 PM](https://github.com/IFarmYouEat/FarmHand/assets/74782331/14661908-96d8-4c30-9f37-bfb3a6f754bc)


Crop Modal: Manages crop-related information, offering fields for year, crop selection, yeild, and source of information 
(projected - estimated production, monitor - data from the combine's yeild tracking instruments, actual - after all crop is sold)  

![Screenshot 2024-02-23 at 6 01 05 PM](https://github.com/IFarmYouEat/FarmHand/assets/74782331/dec1572f-a1af-4be2-8694-5c40590961d1)


### Contract Management

Contract Page: A dedicated page for contract management, featuring functionality to open the ContractModal for adding or editing 
contracts and displaying a list of contracts.

![Screenshot 2024-02-23 at 6 16 09 PM](https://github.com/IFarmYouEat/FarmHand/assets/74782331/7557b108-aacf-4a95-aace-b061182d4711)

Contract Modal: Facilitates the creation and editing of contract details through a modal dialog, providing inputs for contract s
pecifics and submission functionality.

### Database

![Screenshot 2024-02-23 at 5 55 18 PM](https://github.com/IFarmYouEat/FarmHand/assets/74782331/37ac665e-bb4b-45e5-a616-60410ad4f044)

## Prerequisites
We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will 
be much easier this way in the long run.

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


### Installation

Follow these steps to set up the project locally:

    Ensure you have Node.js version 18.x installed.
    Clone the repository and navigate to the project directory.
    Install dependencies with npm install.
    Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like 
    `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. 
    Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). 
    If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, 
    you will get a warning.

    Create a new database called `prime_app` and create a `user` table:

    If you would like to name your database something else, you will need to change `prime_app` to the name of your 
    new database name in `server/modules/pool.js`

## Usage

The project includes scripts for development and production environments:

    Start the server: npm run start - Initiates the backend server.
    Start the client: npm run client - Launches the React client for development purposes.
    View on Browser: Enter `localhost:3000` in your address bar. 

## Features

    Contract and Crop Management: Streamlined interfaces for managing contracts and crop data, enhancing operational 
    efficiency. Responsive Design: Utilizes CSS and Material-UI for a responsive layout, ensuring compatibility across devices.
    Data Visualization: Offers tables and forms for viewing and inputting data, designed for ease of use and accessibility.

## Contributing

Contributions are encouraged. Please fork the repository, make your changes, and submit a pull request for review.
License

This project is open-sourced under the MIT License.
Acknowledgments

A heartfelt thank you to Prime Digital Academy, My Instructor Chris Black, My classmates, and my family. 
