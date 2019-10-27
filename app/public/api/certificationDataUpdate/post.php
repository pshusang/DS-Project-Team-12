<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE CERTIFICATION SET certificationName=?, certificationAgency=?, expirationPeriod=? WHERE certificationID = ?'
);


$stmt->execute(
  [
  $_POST['certificationName'],
  $_POST['certificationAgency'],
  $_POST['expirationPeriod'],
  $_POST['certificationID']
]

// Needs to post memberID of that specific row to delete the record.
);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../certificationEntry/');
//Here is where to go
