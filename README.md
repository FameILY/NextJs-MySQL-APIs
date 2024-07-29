
# NEXTJS MYSQL CRUD APIs




## Installation

Install all the dependencies using npm

```bash
  npm install
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MYSQL_HOST`

`MYSQL_PORT`

`MYSQL_DATABASE`

`MYSQL_USER`

`MYSQL_PASSWORD`

## Run the Project

To run project, run the following command

```bash
  npm run dev
```
OR use pnpm
```bash
  pnpm dev
```


## Setup

First to create a table, hit the following api using Postman or your web browser

```http
localhost/3000/api/setup

````


## API Reference

#### GET notes

```http
  GET localhost:3000/api/CnR
```

#### Get a specific note with id

```http
  GET localhost:3000/api/CnR/{your_note_id}
```

#### Create a note (needs Postman)

```http
  POST localhost:3000/api/CnR
```
this takes a form data 
content=your text

#### Update a note (needs Postman)

```http
  PUT localhost:3000/api/CnR
```
this takes a form data 
content=your text

#### DELETE a specific note with id

```http
  DELETE localhost:3000/api/CnR/{your_note_id}
```
