# University Donation Management (furqan-abid)

A web application built with Node.js, Express, MongoDB, and TypeScript for managing donations, funds, and student records.

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Investment](#investment)
  - [Student Donations](#student-donations)
  - [Student Records](#student-records)
- [Contributing](#contributing)
- [Contact](#contact)

## About the Project

**Donation Management** (furqan-abid) is a web application designed to simplify the management of donations and funds for educational institutions. It allows teachers and administrators to handle various functionalities, including:

- **Authentication**: Secure login for teachers with JWT tokens.
- **Investment**: Record and manage investor information and available balances.
- **Student Donations**: Distribute donations to students with request and approval mechanisms.
- **Student Records**: Maintain records of registered students.

### Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Getting Started

### Prerequisites

Before getting started, ensure you have the following installed on your system:

- Node.js: [Download](https://nodejs.org/)
- MongoDB: [Download](https://www.mongodb.com/try/download/community)
- Git: [Download](https://git-scm.com/downloads)

### Installation

1. Clone the repo, install NPM packages, configure environment variables, and start the server:
   ```sh
   git clone https://github.com/furqan-abid/Donation-Management.git
   npm install
   # Create a .env file in the root directory and add the following:
   # DB_URI=your_mongodb_uri
   # SECRET_KEY=your_secret_key
   # PORT=your_PORT
   npm start
   
## Usage

### Authentication

- Teachers can log in using their credentials.
- Authentication is secured with JWT tokens.

### Investment

- Investors can provide funds to the system.
- The application records investor information and available balance.

### Student Donations

- The system allows for the distribution of donations to students.
- Students can request donations, and teachers/admins can approve or reject requests.
- Donations are deducted from the available balance.

### Student Records

- The application maintains records of registered students.
- Student information can be viewed and updated by authorized users.

