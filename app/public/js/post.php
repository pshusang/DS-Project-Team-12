<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO PatientVisit
  (patientGUid, visitDescription, priority)
  VALUES (?,?,?)'
);


$stmt->execute([
  $_POST['patientGUid'],
  $_POST['visitDescription'],
  $_POSt['priority']
]);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../waiting/');
//Here is where to go
