DROP DATABASE IF EXISTS wouldyou;
CREATE DATABASE wouldyou;

\c wouldyou

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    password VARCHAR
);

CREATE TABLE questions (
    ID SERIAL PRIMARY KEY,
    ratherA VARCHAR,
    ratherB VARCHAR,
    createdBy INT
);

CREATE TABLE answers (
    ID SERIAL PRIMARY KEY,
    questionId INT,
    choice BOOLEAN,
    addedBy INT
);


-- 1
INSERT INTO users (username, email, password)
    VALUES ('Charlotte', 'cmd@gmail.com', 'zebedee');

-- 2
INSERT INTO users (username, email, password)
    VALUES ('Jav', 'jav@gmail.com', 'password');

-- 1
INSERT INTO questions (ratherA, ratherB, createdBy)
    VALUES ('be rich', 'be popular', 1);

-- 2
INSERT INTO questions (ratherA, ratherB, createdBy)
    VALUES ('be happy', 'be rich', 1);

-- 1
INSERT INTO answers (questionId, choice, addedBy)
    VALUES ('1', 'true', '2');

-- 2
INSERT INTO answers (questionId, choice, addedBy)
    VALUES ('2', 'false', '1');


SELECT 
    users.ID,
    users.username,
    questions.ratherA,
    questions.ratherB,
    questions.createdBy
FROM questions INNER JOIN users
     ON questions.createdBy=users.ID;

SELECT 
    users.ID,
    users.username,
    answers.choice,
    answers.addedBy,
    answers.questionId
FROM answers INNER JOIN users
     ON answers.addedBy=users.ID;

SELECT 
    questions.ID,
    questions.ratherA,
    questions.ratherB,
    questions.createdBy,
    answers.questionId,
    answers.choice,
    answers.addedBy
FROM answers INNER JOIN questions  
    ON answers.questionId=questions.ID;