DROP DATABASE IF EXISTS wouldyou;
CREATE DATABASE wouldyou;

\c wouldyou

CREATE TABLE questions (
    ID SERIAL PRIMARY KEY,
    ratherA VARCHAR,
    ratherB VARCHAR
);

INSERT INTO questions (ratherA, ratherB)
    VALUES ('be rich', 'be popular');
