CREATE DATABASE burger_DB;
USE burger_DB;
CREATE TABLE Burgers (
    ID int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured bool,
    PRIMARY KEY (ID)
);

SELECT * FROM burger_DB.Burgers;