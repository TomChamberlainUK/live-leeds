<?php
	include "page-start.php";
?>

<html>

<head>
<title>Favourite</title>
</head>

<body>
<?php
	
	//get user id
	$userid = $_SESSION["userid"];


	//select all favourites of current user
  	$myQuery = "SELECT * FROM attraction, favourite WHERE attraction.AttractionID = favourite.AttractionID AND favourite.UserID = '$userid'";
  	$myQuery .= " ORDER BY FavouriteID DESC";
  	//run query
  	$result = $con->query($myQuery);
  	if (!$result) die('Query error: ' . mysqli_error($con));
  	//write data to html
    while($row = mysqli_fetch_assoc($result))
    	{
    		echo '<row>';
	        echo '<div id="fav-item-' . $row["FavouriteID"] . '" class="box small-12 medium-6 large-4 columns">';
            echo '<div class="fav-margin">';
            echo '<div class="fav-img info-item-' . $row["AttractionID"] . ' small-12 medium-6 columns"></div>';
            echo '<div class="fav-info small-12 medium-6 columns">';
            echo '<div class="fav-title small-12 columns"><p class="text"><b>' . $row["Name"] . '</b></p></div>';
	        echo '<div class="fav-details small-6 medium-6 columns"><p class="text">' . $row["Address"] . '</p></div>';
	        echo '<div class="fav-desc small-6 medium-6 columns"><p class="text">' . $row["Phone"] . '<br><a href="' . $row['Website'] . '">Website</a></p></div>';
	        echo '</div>';
	        echo '</div>';
	        echo '</div>';
	        echo '</row>';
	    };

?> 
</body>
</html>

<?php
	include "page-end.php";
?>