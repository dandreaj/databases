CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userID INT,
  roomID INT,
  username TEXT,
  createdAt TIME,
  updatedAt TIME
);


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user VARCHAR(255)
  /* Describe your table here.*/
);


CREATE TABLE rooms (
  id INT AUTO_INCREMENT PRIMARY KEY,
  room VARCHAR(255)
  /* Describe your table here.*/
);
/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
