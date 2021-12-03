DROP DATABASE IF EXISTS auto_tweet;

CREATE DATABASE auto_tweet;

USE auto_tweet;

CREATE TABLE daily_word (
  id int NOT NULL AUTO_INCREMENT,
  english varchar(50) NOT NULL,
  hirigana varchar(50) NOT NULL,
  kanji varchar(50) NOT NULL,
  details varchar(200), 
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    //mysql -u root -p
 mysql -u root < server/schema.sql
 *  to create the database and the tables.*/