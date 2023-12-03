# Quotes Time App

**Quotes Time** is a React Native Expo app that allows users to share and manage their favorite quotes. Users can add quotes along with their names, view a list of all quotes retrieved from Firebase, and edit or delete quotes with ease.

## Features

- **List All Quotes:** Display a list of quotes retrieved from Firebase, showcasing contributions from various users.

- **Add Quotes:** Users can contribute by adding their favorite quotes along with their names.

- **Edit and Delete Quotes:** Long-press on a quote in the list to go to the input page for editing or deleting the selected quote.

- **Firebase Integration:** Utilizes Firebase to store and retrieve quotes, providing real-time data updates.


## Getting Started

Follow these steps to get the app up and running on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed
- [Firebase](https://firebase.google.com/) account (for setting up Firestore)

### Installation

1. Clone the repository:

    ```
    git clone https://github.com/manoj-dev-001/quotesTime.git
    ```

2. Navigate to the project directory:

    ```
    cd quotesTime
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. Configure Firebase:
   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firestore as the database.
   - Obtain your Firebase project configuration and replace the configuration in the app's code.

5. Start the Expo development server:

    ```
    npx expo start
    ```

6. Use the Expo client on your mobile device or an emulator to run the app.

## Acknowledgments

- Special thanks to [Expo](https://expo.dev/) and [Firebase](https://firebase.google.com/) for their fantastic tools and services.

## Contact

For any inquiries, please contact iammanojofficial@gmail.com

## Screenshots

<p>List Page</p><img src="https://github.com/manoj-dev-001/quotesTime/assets/111769769/c9835723-c73e-4e39-98d3-b91f6be86b68" width="360" height="700"> 

<p>Add new Quote</p><img src="https://github.com/manoj-dev-001/quotesTime/assets/111769769/179d1b2d-92af-4db5-aa9d-8a82dbdc5b9f" width="360" height="700">

<p>Quote added to Firebase</p><img src="https://github.com/manoj-dev-001/quotesTime/assets/111769769/010851e3-e154-44b8-a3de-78abc33f3007" width="360" height="700">

<p>Delete 'Manoj' quote</p><img src="https://github.com/manoj-dev-001/quotesTime/assets/111769769/f2909704-88fb-490c-a0a9-f49ac002acdc" width="360" height="700">

<p>'Manoj' Quote Deleted</p><img src="https://github.com/manoj-dev-001/quotesTime/assets/111769769/97476f16-de5d-4eec-903d-972418b941f4" width="360" height="700">
