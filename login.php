<?php
session_start();
$conn1 = mysqli_connect('localhost','root','mysql');
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
?>
 <!DOCTYPE HTML>
<html>
<head>
    <title>Login | Querio</title>
</head>

<body>

 

<?php
	
$email = $_POST["username"];
$_SESSION["user"] = "$email";
// $username="root";
// 	$password="";
// 	$database="alumni";
// 	$server="localhost";

// $conn1 = mysqli_connect($server, $username, $password, $database);

// $check = "SELECT PASSWORD from VERIFICATION where EMAIL='".$email1."'";

// 	if(!$conn1)
// 	{
// 		//die("Connection error :" . $conn1->connect_error);
// 		echo "fatal error";
// 	}

//      $result=mysqli_query($conn1,$check);
// 	 $row = mysqli_fetch_array($result);
// 	 $ans= $check;

$user = $_POST["username"];
$pass = $_POST["password"];

mysqli_select_db($conn1,'querio');



$query = "SELECT PASSWORD FROM db1 where EMAIL= '".$user."'";
// $result = mysqli_query($conn1,$query);
$result = mysqli_query($conn1,$query);

$followingdata = $result->fetch_assoc();
// $password = $result['PASSWORD'];

//echo "'".$followingdata."'";

	 
	$adminemail="tcealumni1957@gmail.com";

	if (($pass==$followingdata['PASSWORD']) == TRUE) 
	{
    			//echo "U have logged in successfully";
			// 	echo "<script>
			// window.location.href='home1.php';
			// alert('You have logged in successfully');
			// </script>";

	
		if($user==$adminemail)
		{
			//echo "Success";
			header("Location: adminhome.php");
		}
		else
		{
			echo "<script> alert('Login successful'); </script>";
			header("Location: home1.php");
		}
	}
	else
	{
		echo "<script>
			alert('Incorrect password ');
			window.location.href='signin.php';
		</script>";
		
		

	}
	//else
	//{
	//	echo "<script>
	//		alert('Both the form fields are mandatory ');
	//		window.location.href='signin.php';
	//		</script>";
	//}



	// else {
 //    		//echo ("Error:". mysqli_error($conn1)) ;
	// 	//echo ("Incorrect Username or password");
	// 	echo "<script>
	// 		alert('Incorrect username or password');
	// 		window.location.href='signin.php';
			
	// 		</script>";
	// }

$conn1->close();

?>

		

	
	


</body>

</html>