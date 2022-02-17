<?php
  //open database connection
  include 'page-start.php';
?>

<!DOCTYPE html>
<!--[if IE 9]><html class="lt-ie10" lang="en" > <![endif]-->
<html class="no-js" lang="en" >

<?php


  //select all records from the attraction table
  $myQuery = "SELECT * FROM attraction";
  $myQuery .= " ORDER BY Name ASC";
  //run query
  $result = $con->query($myQuery);
  if (!$result) die('Query error: ' . mysqli_error($con));

  //verify user id
  $myQuery2 = "SELECT UserID From people WHERE DisplayName ='{$_SESSION['username']}'";
  //run query
  $result2 = $con->query($myQuery2);
  if (!$result2) die('Query error: ' . mysqli_error($con));
  //save single value
  while ($getID = mysqli_fetch_array($result2)) {
  //save user id as variable
  $userid = $getID['UserID'];

  $_SESSION["userid"] = $userid;
}

?>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Leeds</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/foundation.css">
    <link rel="stylesheet" href="css/foundation-icons/foundation-icons.css">
    <link rel="stylesheet" href="slick/slick.css">
    <link rel="stylesheet" href="css/app.css">
    <script src="js/vendor/modernizr.js"></script>
    <script src="http://maps.googleapis.com/maps/api/js"></script>
  </head>

  <body>

    

    <div id="pagewrap">

      <!--  NAVIGATION BAR  -->
      <div class="fixed">
        <nav class="top-bar" data-topbar role="navigation">
          <ul class="title-area">
            <li class="name">
              <h1><a href="#">Live Leeds</a></h1>
            </li>
            <li class="toggle-topbar menu-icon">
              <a href="#"><span>Menu</span></a>
            </li>
          </ul>
          <div class="top-bar-section">
            <ul class="right">
              <li class="active" id="home_btn"><a href="#">Home</a></li>
              <li id="events_btn"><a href"#">Discover</a></li>
              <li id="hotels_btn"><a href"#">Places</a></li>
              <li id="travel_btn"><a href"#">Profile</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <!--  PAGES  -->
      <div id="pages">


        <!--  PAGE 1  -->
        <section id="page1">
          <div class="main_heading center">
            <h1 class="title">LIVE LEEDS</h1>
            <h2 class="subtitle">LOVE LEEDS</h2>
          </div>
          <form action="logincheck.php" method="post" class="login-form login">
            <table class="login-form">
              <tr class="login-form">
                <td><input type="text" name="theUser" placeholder="Username" class="login-field"/></td>
              </tr>
              <tr class="login-form">
                <td><input type="password" name="thePassword" placeholder="Password" class="login-field"/></td>
              </tr>
            </table>
            <input type="submit" value="Login" class="login-submit"/>
          </form>
          <div id="home-message">
            <?php 
              
              if (isset($_SESSION["failmessage"])) {
                echo '<p class="text signup">' . $_SESSION["failmessage"] . '<br>Not a member? <a href="#" id="signup_btn">Sign up</a></p>';
                //clear the message so it doesn't get displayed again and again
                unset($_SESSION["failmessage"]);
              }

              else if (isset($_SESSION["successmessage"])) {
                echo '<p class="text signup">' . $_SESSION["successmessage"] . '<br><a href="logout.php">Log Out</a></p>';
                //hide login
              ?>
              <style type="text/css">.login{
                display:none;
              }</style>
              <?php
                //clear the message so it doesn't get displayed again and again
                unset($_SESSION["successmessage"]);
              }

              else if (isset($_SESSION["logoutmessage"])) {
                echo '<p class="text signup">' . $_SESSION["logoutmessage"] . '</p>';
                //clear the message so it doesn't get displayed again and again
                unset($_SESSION["logoutmessage"]);
              }

              else if (isset($_SESSION["login"]) && $_SESSION["login"] == true) {
                echo '<p class="text signup">' . $_SESSION["username"] . '<br><a href="logout.php">Log Out</a></p>';
                  //hide login
              ?>
              <style type="text/css">.login{
                display:none;
              }</style>
              <?php
              }

              else {
                echo '<p class="text signup login">Not a member? <a href="#" id="signup_btn">Sign up</a></p>';
              }


            ?>
          </div>
          <div id="sign-up">
            <div id="signup-backgroundfade" class="popup"></div>
            <div class="popup-box">
              <form action="signup.php" method="post" class="login-form signup">
                <table class="login-form">
                  <tr class="login-form">
                    <td><p class="signup-heading">Email Address</p><input type="text" name="theEmail" placeholder="example@example.eg" class="login-field"/></td>
                  </tr>
                  <tr class="login-form">
                    <td><p class="signup-heading">Username</p><input type="text" name="theUser" placeholder="Username" class="login-field"/></td>
                  </tr>
                  <tr class="login-form">
                    <td><p class="signup-heading">Password</p><input type="password" name="thePassword" placeholder="Password" class="login-field"/></td>
                  </tr>
                </table>
                <input type="submit" value="Sign Up" class="login-submit"/>
              </form>
            </div>
          </div>
        </section>

        <!-- PAGE 2  -->
        <section id="page2" class="scroll">
          <!-- Left column  -->
          <div class="gr-wbl medium-8 small-12 columns">
            <div id="disc-info-box">
              <div class="disc-textbox topright">
                <h3 class="subheading">Welcome To Leeds</h3>
                <p class="text">Enjoy one of England's great cities. From its independent retailers and thriving markets, to its fine fresh food, family attractions, ballet, opera, art and concerts by some of the world's top performers. A fantastic range of quality hotels for you to choose from to match your style and budget. Leeds is a city full of experiences, easy to explore and there to be discovered.</p>
              </div>
              <div class="disc-titlebox bottomleft">
                <h1 class="heading">LIVE LEEDS</h1>
              </div>
              <div id="disc-info-fade" class="section-fade"></div>
            </div>
          </div>
          <!-- Right column  -->
          <div class="gr-wsr medium-4 small-12 columns">
            <div class="gr-hbt">
            <!-- Slider  -->
            <div id="disc-slider">
              <div id="disc-slider-fade" class="section-fade"></div>
              <div id="disc-slider-img" class="slider single-item">
                <div class="slide">
                  <img src="img/sl-trinity.jpg" alt="trinity" class="slider-slide"/>
                </div>
                <div class="slide">
                  <img src="img/sl-trinity2.jpg" alt="trinity" class="slider-slide"/>
                </div>
                <div class="slide">
                  <img src="img/sl-trinity3.jpg" alt="trinity" class="slider-slide"/>
                </div>
                <div class="slide">
                  <img src="img/sl-trinity4.jpg" alt="trinity" class="slider-slide"/>
                </div>
                <div class="slide">
                  <img src="img/sl-trinity5.jpg" alt="trinity" class="slider-slide"/>
                </div>
              </div>
              <div class="disc-titlebox bottomright">
                <h1 id="slide-title01" class="subheading">TRINITY</h1>
              </div>
          </div>
        </div>
        <!-- Sub content  -->
        <div id="disc-feat" class="gr-hsb scroll">
          <h3 class="subheading">New Shopping Center</h3>
          <p class="text">Leeds' exciting new Trinity shopping center is now open! Browse shops, bars and resaurants in the Places tab or visit <a href="http://http://trinityleeds.com/">trinityleeds.com</a> for more information</p>
        </div>
      </div>
        </section>

        <!-- PAGE 3  -->
        <section id="page3">
          <!--  Attraction info  -->
          <div id="shops-info" class="yellow gr-wbr medium-8 small-12 columns">
            <?php
              while($row = mysqli_fetch_array($result))
              {
            ?>
            <div id="info-item-<?php print $row['AttractionID'] ?>" class="info-item-<?php print $row['AttractionID'] ?> info-item">
              <div class="disc-titlebox topleft">
                <h1 class="subheading"><?php print $row['Name'] ?></h1>
              </div>
              <div class="disc-textbox bottomright scroll">
                <br>
                <div class="row">
                  <div id="<?php print $row['AttractionID'] ?>" class="fav_btn fav-off"><i class="fi-star"></i></div>
                  <div class="small-12 medium-6 columns">
                    <p class="text"><b>Opening Times:</b> <?php print $row['OpeningTime'] ?></p>
                  </div>
                  <div class="small-12 medium-6 columns">
                    <p class="text"><b>Phone:</b> <?php print $row['Phone'] ?>
                      <br><b>Website:</b> <a href="<?php print $row['Website'] ?>"><?php print $row['Name'] ?></a>
                      <br><b>Address:</b> <?php print $row['Address'] ?></p>
                  </div>
                </div>
                <div class="row">
                  <p class="text"><?php print $row['Description'] ?></p>
                </div>
              </div>
            </div>

            <?php
              }
            ?>




          </div>
          <div id="shops-list" class="gr-wsl medium-4 small-12 columns scroll">
            <!-- List Navigation  -->
            <ul class="list-nav">
              <?php
              mysqli_data_seek( $result, 0 );

               while($row = mysqli_fetch_array($result))
              {
              ?>
              <li id="list-item-<?php print $row['AttractionID'] ?>" class="list-item">
                <a href="#">
                  <h1 class="list-heading"><?php print $row['Name'] ?></h1>
                </a>
              </li>
              <?php
               }
             ?>


            </ul>
           
          </div>
        </section>


        <section id="page4">
              <div class="login-success">
                <div id="profile-header" class="main_heading">
                  <h2 class="subtitle caps"><?php echo $_SESSION["username"] ?></h2>
                  <p class="text">Favourites:</p>
                </div>
                <div id="favourites-list" class="scroll"></div>
                </div>
                  <?php
                    if (isset($_SESSION["login"]) && $_SESSION["login"] == true) {
                      echo ''
                      ?>
                      <style type="text/css">.login-success{
                       display:default;
                      }</style>
                      ;<?php
                    }
                    else {
                      echo '<div id="profile-nologin" class="main_heading"><h3 class="subheading">Visit Home page to log in or sign up</h3></div>'
                      ?>
                      <style type="text/css">.login-success{
                       display:none;
                      }</style>
                      ;<?php
                    }
                  ?>

        </section>


        

      </div>



    </div>

  <!--  JAVASCRIPT  -->
  <script src="js/vendor/jquery.js"></script>
  <script src="js/vendor/fastclick.js"></script>
  <script src="js/foundation/foundation.js"></script>
  <script src="js/foundation/foundation.topbar.js"></script>
  <script src="slick/slick.min.js"></script>
  <!-- MY JS -->
  <script src="js/vendor/custom.js"></script>
  

  <script>
    $(document).foundation();
  </script>
   


  </body>
</html>


<?php
  //close database connection
  include 'page-end.php';
?>