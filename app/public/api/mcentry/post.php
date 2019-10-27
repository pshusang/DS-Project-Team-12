<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO MEMBER_CERTIFICATION
  (memberID, certificationID, expDate, renewDate)
  VALUES (?,?,?,?)'
);


$stmt->execute([
  $_POST['memberID'],
  $_POST['certificationID'],
  $_POST['expDate'],
  $_POST['renewDate']
]);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../mcentry/');
//Here is where to go
