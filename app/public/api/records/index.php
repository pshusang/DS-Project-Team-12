<?php

// Step 1: Get a database connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Patient');
//Take SQL code and prepare it into a string
$stmt->execute();
//Statement object run the query and it has the access to the return data
$patients = $stmt->fetchAll();
//Fetch the result of the query

// Step 3: Convert to JSON
$json = json_encode($patients, JSON_PRETTY_PRINT);
//JSON_PRETTY_PRINT formats the code

// Step 4: Output
header('Content-Type: application/json');
//Design for a connection through JSON
echo $json;
