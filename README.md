# The Pie Beat Social Network

## About
This is the MVP backend API for The Pie Beat Social Network using MongoDb, Mongoose, and Express.js. 

Have thoughts on pies? Share your recipes by posting a 'thought'. 
Add friends and fellow bakers to your profile. Remove them too. 

Use the Pie Beat to interact with your friends and post a 'reaction' to their 'thoughts'.

Adding users includes email validation and timestamps.

Repository: https://github.com/robyng/the-pie-beat-social-network 

## Walkthrough
See all the available routes in action: 

Add, update, delete, view all or single 'thought'. 
Add or remove 'reactions'.
Add or remove friends.
Add a user, view all or one user.

## Requirements
1. MongoDB
2. Command Line Interface like Git Bash or VS Code
3. NPM mongoose
4. NPM express
5. Insomnia app or similar


## Installation

Download or clone the app files from this link:
https://github.com/robyng/the-pie-beat-social-network 

Go to your terminal and cd into the root of the app file. 
Write these commands one line at a time to download node modules and then install all dependencies including Sequelize, mysql2, dotenv, and express.

    npm init -y
    
    npm intall

This app requires MongoDB on your computer. If you don't have it, follow this guide from UC Berkeley Extension Full Stack Coding Bootcamp: https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb 


## Usage

To start the program use this command:

    npm start

Use Insomnia app to add new users, thoughts, and reactions. 

## Local API Routes

http://localhost:3001/api/users
http://localhost:3001/api/users/:id
http://localhost:3001/api/users/:id/friends/:friendsId

http://localhost:3001/api/thoughts
http://localhost:3001/api/thoughts/:id
http://localhost:3001/api/thoughts/:id/reactions
http://localhost:3001/api/thoughts/:id/reactions/:reactionsId

## Questions?

Submit an issue here: https://github.com/robyng/the-pie-beat-social-network/issues

Contact me directly at: robyn@sitereworks.com
