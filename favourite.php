<?php
	include "page-start.php";
?>

<html>

<head>
<title>Favourite</title>
</head>

<body>
<?php
	
	//collect data from form and save in variables
	$userid = $_SESSION["userid"];
	$attrid = $_POST["AttractionID"];

	
	$myQuery = "SELECT * FROM favourite WHERE UserID = '$userid' AND AttractionID = '$attrid'";
	$result = $con->query($myQuery);
	if (!$result) {
		die('Query error: ' . mysqli_error($con));
	}


	if (mysqli_num_rows($result) > 0) {
		$delete = "DELETE FROM favourite WHERE UserID = '$userid' AND AttractionID = '$attrid'";
		$dresult = $con->query($delete);
		if (!$dresult) {
			die('Query error: ' . mysqli_error($con));
		}
	} else {
		//add data to database
		$add = "INSERT INTO favourite (UserID, AttractionID) VALUES('$userid', '$attrid')";
		$aresult = $con->query($add);
		if (!$aresult) {
			die('Query error: ' . mysqli_error($con));
		}
	}
	
?> 
</body>
</html>

<?php
	include "page-end.php";
?>