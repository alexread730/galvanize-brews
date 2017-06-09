# Galvanize Brews

This is a project on [knex.js](http://knexjs.org/).

You will be implementing the following ERD with knex, and creating knex queries to interact with the data in the database.

![](https://www.lucidchart.com/publicSegments/view/8596c6ba-114c-4061-8e89-a659d2f12404/image.png)

NOTE: The only existing file in this repo you will need to modify is `queries.js`

## Setup

* Fork and clone this repo
* `cd` into the folder and `npm install`
* Run `npm test` to run the tests
  * After each passing test, remove the `x` from `xit` on a test to change it from pending to active
* Run `npm start` to see the views

## Tasks
* Create *2 migrations* and *2 seeds* with the data available in the `/data` directory
  * You do not need to parse the CSV files, it is OK to copy/paste the values into a seed file.
* Update the `queries.js` file with the queries you will need
  * Each query function should return a promise that resolves to the desired data

* When you're done, you should have a site that looks [like this](http://galvanize-brews.herokuapp.com/)
* When all tests are passing, issue a PR to this repo!
