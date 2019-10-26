<?php

 //Step 0; Validate data
 $db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE MEMBER SET firstName=?, lastName=?, radioNo=?, stationNo=?, pos=?, isActive=?, email=?, phone=?, street=?, city=?, state=?, zip=?, dob=?, startDate=?, gender=? WHERE memberID = ?'
);


$stmt->execute(
  [
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['radioNo'],
  $_POST['stationNo'],
  $_POST['pos'],
  $_POST['isActive'],
  $_POST['email'],
  $_POST['phone'],
  $_POST['street'],
  $_POST['city'],
  $_POST['state'],
  $_POST['zip'],
  $_POST['dob'],
  $_POST['startDate'],
  $_POST['gender'],
  $_POST['memberID']
]

// Needs to post memberID of that specific row to delete the record.
);

// TODO: Error Checking

//Step 4: Output
header('HTTP/1.1 303 See other');
//300 redirect with a git
header('Location: ../dataEntry/');
//Here is where to go
