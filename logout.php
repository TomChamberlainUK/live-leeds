<?php
	include "page-start.php";
?>

<?php
//this page does not display anything, it simply logs 
//the user out and redirects to the login page
//the session itself is kept intact. To completely
//destroy all session information, use session_destroy();

	//get details of the current user and prepare a message
	//that will be displayed on the login page
	$username = $_SESSION["authenticatedUser"];
	$_SESSION["logoutmessage"] =  "$username has logged out";

	//remove the reference to the currently logged in user
	session_unset("authenticatedUser");	

	//relocate back to the login page
	header("Location: index.php");

?> 

<?php
	include "page-end.php";
?>