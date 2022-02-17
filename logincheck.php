<?php
	include "page-start.php";
?>

<html>

<head>
<title>Check user credentials</title>
</head>

<body>
<?php

	//collect data from form and save in variables
	$username = $_POST["theUser"];
	$password = $_POST["thePassword"];
	


	//check whether this user's credentials are correct
	$myQuery = "SELECT * FROM people WHERE DisplayName='$username' AND Password='$password'";
	$result = $con->query($myQuery);
	if (!$result) {
		die('Query error: ' . mysqli_error($con));
	}




	// if rows found, set session variable 'authenticated user' to the username entered 
	// NB: this is a very simple and unsafe method. Ideally you would use an encrypted ID 
	// instead of the user name 
	if (mysqli_num_rows($result) > 0) { 
		$_SESSION["authenticatedUser"] = $username;
		// Hide login section
		$_SESSION["successmessage"] = "Welcome back, " . $username . "!";
		$_SESSION["login"] = "1";
		$_SESSION["username"] = $username;

		$myQuery2 = "SELECT UserID FROM people WHERE DisplayName ='$username'";

		$result2 = $con->query($myQuery);
	if (!$result) {
		die('Query error: ' . mysqli_error($con));
	}

		$row = mysqli_fetch_array($result2);
		echo $row['UserID'] = $_SESSION["userid"];



		// Relocate to the user's profile page. On some MAMP installations this doesn't work by default and
		// you have to edit the php.ini file. See http://hibbard.eu/php-headerlocation-not-working-in-mamp/
		header("Location: index.php");
	}

	else {
		// login failed, redirect back to login page with error message	
		$_SESSION["failmessage"] = "Could not login with username '" . $username . "'";
		header("Location: index.php");
	}

?> 
</body>
</html>

<?php
	include "page-end.php";
?>