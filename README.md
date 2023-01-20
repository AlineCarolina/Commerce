# Project Commerce MongoDB !

The idea of ​​the Commerce MongoDB project is to work with the commerce database, which contains data from the McDonald's menu, such as ingredients, nutritional values ​​and fictitious sales data.

---

## About the project

This project was developed with a focus on learning how to use the NoSQL MongoDB database.

---

## Technologies used

* Javascript
* MongoDB

---

## How to run the project

To run the project locally:

1. Clone the repository
```
$ git clone 
```
2. Install dependencies
```
$ npm install
```
3. Connect to your local MongoDB instance and in the root of the project directory, run the following command which will restore the commerce database:
```
$ DBNAME=commerce ./scripts/resetdb.sh assets/produtos
```
To run the tests locally, you need to write the following in your terminal, being in the root of the project directory:
```
$ ./scripts/evaluate.sh
```
To run just one challenge test, run the command below, replacing N with the challenge number
```
$ ./scripts/evaluate.sh desafioN
```

---