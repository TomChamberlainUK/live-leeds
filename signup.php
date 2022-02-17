<?php
	include "page-start.php";
?>

<html>

<head>
<title>Sign Up</title>
</head>

<body>
<?php

	//collect data from form and save in variables
	$email = $_POST["theEmail"];
	$username = $_POST["theUser"];
	$password = $_POST["thePassword"];
	

	//add data to database
	$SQL = "INSERT INTO people (Email, DisplayName, Password) VALUES('$email', '$username', '$password')";

	$result = $con->query($SQL);
	if (!$result) {
		die('Query error: ' . mysqli_error($con));
	}
 
	$_SESSION["login"] = true;
	$_SESSION["username"] = $username;

	header("Location: index.php");
	
?> 
</body>
</html>

<?php
	include "page-end.php";
?>