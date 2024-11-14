# What's Good In Metrograph

This project is a ReactJS-based web application for browsing movie information in Metrograph, November, 2024. The application features an interactive interface that allows users to view summaries of movies in a card format and access detailed movie information along with ticket purchase options.

## Features

- **Responsive UI**: Uses React components to create a dynamic and responsive user interface.
- **Movie Cards**: The left side of the app displays movie cards with basic information.
- **Detailed Information**: When a movie card is clicked, the right side of the app shows additional details, including ticket purchasing options.
- **Navigation Bar**: Includes a navbar for easy navigation throughout the app.

## Project Structure

- **App.jsx**: The main component that structures the website layout, manages state, and coordinates the data flow between other components.
- **MovieDetails.jsx**: Displays detailed information for a selected movie, including an option to purchase tickets.
- **Card.jsx**: Defines individual movie cards containing essential movie information.
- **Navbar.jsx**: A navigation bar for easy access and interaction with the app.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. Clone this repository:
   
    `   git clone < https://github.com/JiazhenLuo/whatsgoodinMetrograph.git>`

2.	Navigate to the project directory:

    `cd movie-information-website
`

3.	Install the required dependencies:

    `npm install
`

## Running the Application

### To start the development server:

`npm run dev
`

This will launch the app locally. Open http://localhost:3000 in your browser to view it.

### Folder Structure
-	**public/:** Contains public assets used in the app, such as thumbnail and posters images stored in the public/asset folder.
-	**src/:** Contains all React components and styles.

### Configuration

Ensure your Vite project is configured to load images from the public folder, as specified in the project requirements.

## Future Improvements

- **Search Functionality:** Implement a search bar for filtering movies.
- **User Authentication:** Add user login and account features.
- **Rating System:** Enable users to rate and review movies.
