<?php

 //Step 0; Validate data
$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'INSERT INTO CERTIFICATION
  (certificationName, certificationAgency, expirationPeriod)
  VALUES (?, ?, ?)'
);


$stmt->execute([
  $_POST['certificationName'],
  $_POST['certificationAgency'],
  $_POST['expirationPeriod']
]);

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../certificationEntry/');
//Here is where to go

//created by pun
