# geo-graffiti-api
An API for managing geo-tagged image uploads.

### Install
- Fork this repository
- `git clone git@github.com:<your-github-username>/book-library.git`
- `npm install`

### Config

A `.env` file is required with the following variables:

  - PORT (The port the app will run on, if no specified the app will run on 4000)
  - DATABASE_CONN (The connection string for the MongoDB database)
  - S3_SERVER (The address of the S3 compatible sorage bucket)
  - JWT_SECRET (Secret key for password hashing)
  
### Usage

`npm start` to run as server.
`npm run dev` to run in nodemon dev server.

Read the documentation [here.](http://geo-graffiti-api.herokuapp.com/)

