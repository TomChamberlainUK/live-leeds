
<?php
//connect to mysql
	$con = mysqli_connect("localhost","wd","wd","liveleedsattractions")
		or die("Cannot connect to db: " . mysqli_connect_error($con));

	//load western character set
	$con->set_charset("utf8");

	//start the session
	session_start();

?>