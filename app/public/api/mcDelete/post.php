<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'DELETE FROM MEMBER_CERTIFICATION WHERE memberID = ? AND certificationID = ?'
);


$stmt->execute(
  [
  $_POST['memberID'],
  $_POST['certificationID']
]

// Needs to post memberID of that specific row to delete the record.
);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../mcentry/');
//Here is where to go
