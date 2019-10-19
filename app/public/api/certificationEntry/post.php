<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO CERTIFICATION
  (certificationID, certificationName, certificationAgency, expirationPeriod)
  VALUES (?, ?, ?, ?)'
);


$stmt->execute([
  $_POST['certificationID'],
  $_POST['certificationName'],
  $_POSt['certificationAgency'],
  $_POSt['expirationPeriod']
]);

//  TODO: Error Checking
//
//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../waiting/');
//Here is where to go
