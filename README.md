# fileManagement

## Table of contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Run](#run)
- [Technology](#technology)
- [Features](#features)
- [License](#license)

## Introduction

A virtual file storage application using React, Nodejs, Expressjs and Mongodb.


In order to access the admin panel on "/admin/signup" you need to provide the name, email and password.


## Demo

![screenshot](https://github.com/RAZIBK/fileManagement/blob/main/Screenshot%202022-12-20%20164524.jpg)
![screenshot](https://github.com/RAZIBK/fileManagement/blob/main/Screenshot%202022-12-20%20164539.jpg)
![screenshot](https://github.com/RAZIBK/fileManagement/blob/main/Screenshot%202022-12-20%20164602.jpg)

## Run

To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:

- MONGODB_URL:     This is the mongodb url (string).

- JWT_KEY:  This is the jwt Secret key (string).

- CLOUDINARY_CLOUD_NAME  : This is the cloudenary name  (string)

- CLOUDINARY_API_KEY  : This is the cloudenary api key (string)

- CLOUDINARY_SECURITY_KEY  : This is the cloudenary security key (string)

- PORT: Specify the port Number

After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using  `npm install`

Now you can run `npm start` in the terminal and the application should work.

## Technology

The application is built with:

- Reactjs
- Nodejs
- Expressjs
- Mongodb
- Tailwind


## Features


User can do the following:

- Login and signup
- upload files
- List All uploaded files
- Download files

admin can do the following:

- Login and signup
- List All user files
- Download files

## License

[![License](https://img.shields.io/:License-MIT-blue.svg?style=flat-square)](http://badges.mit-license.org)

- MIT License
- Copyright 2022 © [Muhammed Razi B K](https://github.com/RAZIBK/)
