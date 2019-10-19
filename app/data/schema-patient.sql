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
  certificationID INT NOT NULL AUTO_INCREMENT,
  memberID INT NOT NULL,
  certificationName VARCHAR(100),
  certificationAgency VARCHAR (100),
  expirationPeriod INT NOT NULL,
  PRIMARY KEY (certificationID),
  FOREIGN KEY (memberID) REFERENCES MEMBER (memberID)
);

INSERT INTO MEMBER (memberID, firstName, lastName, radioNo, stationNo, isActive, email, phone, street, city, state, zip, dob, startDate, gender, pos) VALUES
(1,	"Mark",	"Otto",	18,	18,	0,	"motto@gmail.com",	"1275 E 10th St",	"Bloomington",	"IN",	47405,	1960-09-01 00:00:00,	2010-06-03 00:00:00,	"M",	"Firefighter"),
(2,	"John",	"Doe",	12,	1,	0,	"jdoe@gmail.com",	"1275 E 10th St",	"Bloomington",	"IN",	47403,	1950-03-02 00:00:00,	2000-06-02 00:00:00,	"F",	"Firefighter assistant");


INSERT INTO CERTIFICATION (memberID, certificationName, certificationAgency, expirationPeriod) VALUES
(1, "CPR for Healthcare Providers", "American Heart Association", 2),
(1, "CPR for Professional Rescuer", "American Red Cross", 2),
(2, "CPR for Professional Rescuer", "American Red Cross", 2),
(2, "Firefighter 1", "Athens Technical College", 3),
(2, "Firefighter 1", "Ivy Technical College", 3),
(1, "POST", "Georgia POST Academy", 5);

SELECT * FROM MEMBER as m, CERTIFICATION as c WHERE m.memberID = c.memberID;
SELECT * FROM MEMBER;
SELECT * FROM CERTIFICATION;
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
