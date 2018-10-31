DROP DATABASE IF EXISTS wouldyou;
CREATE DATABASE wouldyou;

\c wouldyou

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE questions (
    ID SERIAL PRIMARY KEY,
    ratherA VARCHAR,
    ratherB VARCHAR,
    createdBy VARCHAR
);

CREATE TABLE answers (
    ID SERIAL PRIMARY KEY,
    questionId VARCHAR,
    choice BOOLEAN,
    addedBy VARCHAR
);


INSERT INTO users (name, email, password)
    VALUES ('Charlotte', 'cmd@gmail.com', 'zebedee');

INSERT INTO users (name, email, password)
    VALUES ('Jav', 'jav@gmail.com', 'password');

INSERT INTO questions (ratherA, ratherB)
    VALUES ('be rich', 'be popular');

INSERT INTO questions (ratherA, ratherB)
    VALUES ('be happy', 'be rich');

INSERT INTO answers (questionId, choice, addedBy)
    VALUES ('1', 'true', '2');

INSERT INTO answers (questionId, choice, addedBy)
    VALUES ('2', 'false', '4');
