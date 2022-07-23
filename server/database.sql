CREATE DATABASE eventdatabase;

CREATE TABLE eventform(
    event_id SERIAL PRIMARY KEY,
    department VARCHAR(255),
    typeofactivity VARCHAR(200)
);


CREATE TABLE usertable(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);