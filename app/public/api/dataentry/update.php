<?php

$_POST;
$_GET;


 //Step 0; Validate data
$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO MEMBER
  (memberID, firstName, lastName, radioNo, stationNo, startDate, pos)
  VALUES (?,?,?,?,?,?``)'
);


$stmt->execute([
  $_POST['memberID'],
  $_POST['firstName'],
  $_POSt['lastName'],
  $_POSt['radioNo'],
  $_POSt['stationNo'],
  $_POSt['radioNo'],
  $_POSt['startDate'],
  $_POSt['pos']
]);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../waiting/');
//Here is where to go
