<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name ="erka"; 
try {
  $conn = new PDO("mysql:host=$servername;dbname=".$db_name, $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//   echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>