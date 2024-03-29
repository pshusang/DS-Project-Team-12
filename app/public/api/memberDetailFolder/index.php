<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT m.firstName, m.lastName, c.certificationName, c.certificationAgency, c.expirationPeriod, mc.expDate, mc.renewDate
  FROM MEMBER as m, CERTIFICATION as c, MEMBER_CERTIFICATION as mc WHERE m.memberID = mc.memberID AND c.certificationID = mc.certificationID');
$stmt->execute();
$members = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($members, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
// test
