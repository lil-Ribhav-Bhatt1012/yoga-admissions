# Yoga Class Enrollment System

This project is a web-based enrollment system for yoga classes. It is designed to allow users to sign up for classes, select their desired batch, and manage their monthly enrollments.

Live link: https://yoga-admissions.netlify.app/

## Approach

The system is split into two main components:

- **Frontend**: Developed using React, the frontend provides a user-friendly interface for students to enter their details and enroll in yoga classes. The UI is designed to be simple and intuitive, utilizing React state to manage form data and Axios for making API calls to the backend.

- **Backend**: The backend is a Node.js application built with the Express framework. It is responsible for handling HTTP requests, performing basic input validation, and interacting with a SQLite database for persistent storage of enrollment data.

### Key Features

- Age validation to ensure only users between 18 to 65 can enroll.
- Month-to-month payment functionality, with users able to pay at any time during the month.
- Flexible batch selection, allowing users to choose from 4 different time slots.

## Libraries/Frameworks Used

- **React**: For building the dynamic frontend.
- **Axios**: For making HTTP requests from the frontend.
- **Node.js/Express**: For creating the backend server.
- **SQLite**: For the database to store enrollment details.
- **Cors**: To enable CORS for the Express server.

## Assumptions

During development, the following assumptions were made:

- Users will pay for the entire month, regardless of when they enroll within the month.
- There is no requirement for user authentication in the current scope.
- The payment process is mocked and assumed to be successful for all transactions.

## Database Schema (ER Diagram)

The database consists of two tables:

- **Students**: To store student details.
- **Enrollments**: To store information about the class batches that students enroll in.
<img width="1318" alt="ER" src="https://github.com/lil-Ribhav-Bhatt1012/yoga-admissions/assets/77582313/001a54c4-8efd-4d47-851a-43dda3bb428f">


## Setup and Installation

1. Clone the repository.
2. Navigate to the project directory and run `npm install` to install dependencies for both frontend and backend.
3. Start the backend server with `node backend/server.js` or `nodemon backend/server.js`.
4. Start the frontend application with `npm start` within the root directory.
5. Open `http://localhost:3000` in a browser to view the application.

For detailed instructions, refer to the `SETUP.md` file in the repository.

## Contributing

Please read `CONTRIBUTING.md` for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## Acknowledgments

- Yoga instructors who provided insights into the class scheduling.
- All contributors who have submitted pull requests or opened issues.
- The open-source community for the myriad of tools that made this project possible.
<img width="1680" alt="yoga" src="https://github.com/lil-Ribhav-Bhatt1012/yoga-admissions/assets/77582313/e3af0231-23a4-4581-9701-6e48d7bf064a">
