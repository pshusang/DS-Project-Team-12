USE dsfinalproject;

CREATE TABLE MEMBER (
  memberID INT NOT NULL,
  firstName VARCHAR (50),
  lastName VARCHAR (50),
  radioNo INT,
  stationNo INT,
  isActive BOOLEAN,
  email VARCHAR (50),
  phone VARCHAR (50),
  street VARCHAR (50),
  city VARCHAR (50),
  state VARCHAR (50),
  zip INT,
  dob DATETIME,
  startDate DATETIME,
  gender VARCHAR (1),
  pos VARCHAR (50),
  PRIMARY KEY (memberID)
);

CREATE TABLE CERTIFICATION (
  certificationID INT NOT NULL,
  memberID INT NOT NULL,
  certification_agency VARCHAR (100),
  expiration_period DATETIME,
  PRIMARY KEY (certificationID),
  FOREIGN KEY (memberID) REFERENCES MEMBER (memberID)
);

INSERT INTO MEMBER (memberID, firstName, lastName, radioNo, stationNo, isActive, email, phone, street, city, state, zip, dob, startDate, gender, pos) VALUES
("SOME-REALLY-LONG-1234", "Sylvia", "Hernandez", "2012-09-01",  "F"),
("SOME-REALLY-SHORT-5678", "Vish", "Balasubramanian", "1950-12-15",  "M"),
("SOME-UNIQUE-ABCDE1", "J", "Doe", "1950",  ""),
("SOME-DUMMY-DATA", "Pepper", "Potts", "1990-01-31",  "F");


--
-- CREATE TABLE PHONE (
--             phoneID INT NOT NULL,
--             memberID INT NOT NULL,
--     workPhone varchar(12),
--     mobilePhone VARCHAR (12),
--     PRIMARY KEY (phoneID),
--     FOREIGN KEY (memberID) REFERENCES MEMBER (memberID)
-- );
--
-- CREATE TABLE USERS (
--             userID INT NOT NULL,
--     passwrd VARCHAR (100) NOT NULL,
--     email VARCHAR (50),
--     PRIMARY KEY (userID)
-- );
