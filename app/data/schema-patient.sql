USE dsfinalproject;

CREATE TABLE MEMBER (
  memberID INTEGER NOT NULL AUTO_INCREMENT,
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
  dob DATE,
  startDate DATE,
  gender VARCHAR (1),
  pos VARCHAR (50),
  PRIMARY KEY (memberID)
);

CREATE TABLE CERTIFICATION (
  certificationID INT NOT NULL AUTO_INCREMENT,
  certificationName VARCHAR(100),
  certificationAgency VARCHAR (100),
  expirationPeriod INT NOT NULL,
  PRIMARY KEY (certificationID)
);

CREATE TABLE MEMBER_CERTIFICATION(
memberID INT NOT NULL,
certificationID INT NOT NULL,
expDate DATE not null,
renewDate DATE,
FOREIGN KEY (memberID) REFERENCES MEMBER(memberID) ON DELETE CASCADE,
FOREIGN KEY (certificationID) REFERENCES CERTIFICATION(certificationID) ON DELETE CASCADE);

INSERT INTO MEMBER (firstName, lastName, radioNo, stationNo, isActive, email, phone, street, city, state, zip, dob, startDate, gender, pos) VALUES
("Mark", "Otto", 18,	18,	TRUE,	"motto@gmail.com","8124578603","1275 E 10th St",	"Bloomington",	"IN",	47405,	"1960-09-01",	"2010-06-03",	"M",	"Firefighter"),
("Kathryn", "Pryde", 1,	8,	TRUE,	"kpryde@gmail.com","7075551234",	"1123 Xavier School Drive",	"Wakinsville",	"GA",	306077,	"1950-03-02",	"2000-06-02",	"F",	"Cheif");
("Piori", "Raspustin", 841, 8, False, "praspustin@gmail.com", "2065559876", "A31 Mother Russia Road", "Seattle", "WA", 98133, "1940-02-08", "2007-11-12", "M", "Firefighter");
("Warren", "Worthington", 122, 1, False, "wworthington@gmail.com", "7065553945", "1140 Experiment Station Road", "Watkinsville", "GA", 10230, "1943-02-08", "2004-06-08", "M", "Firefighter");


INSERT INTO CERTIFICATION (certificationName, certificationAgency, expirationPeriod) VALUES
("CPR for Healthcare Providers", "American Heart Association", 2),
("CPR for Professional Rescuer", "American Red Cross", 2),
("Firefighter 1", "Athens Technical College", 3),
("Firefighter 1", "Ivy Technical College", 3),
("POST", "Georgia POST Academy", 5);

INSERT INTO MEMBER_CERTIFICATION (memberID, certificationID, expDate, renewDate) VALUES
(1, 1, "2018-10-10",null),
(1, 2, "2019-12-10",null),
(1, 3, "2020-10-10",null),
(2, 5, "2018-03-29",null),
(2, 3, "2017-04-11",null),
(2, 1, "2015-12-04",null);

SELECT * FROM MEMBER as m, CERTIFICATION as c WHERE m.memberID = c.memberID;
SELECT * FROM MEMBER;
SELECT * FROM CERTIFICATION;
