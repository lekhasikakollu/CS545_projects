<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Report</title>
  <link rel="stylesheet" type="text/css" href="proj31.css" />
        <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script>        
        <script type="text/javascript" src="proj31.js"></script>
  
    
</head>
<body>
<?php
	$UPLOAD_DIR = 'lekim_ges/';
    $server = 'opatija.sdsu.edu:3306';
    $user = 'jadrn043';
    $password = 'uphold';
    $database = 'jadrn043';   
        echo "<h2>Runner`s Details</h2>";

    if(!($db = mysqli_connect($server, $user, $password, $database))) {
        write_error_page('SQL ERROR: Connection failed: '.mysqli_error($db));
        }
		else{
			$que="SELECT DISTINCT(cat) FROM person";
			$all_cat=mysqli_query($db,$que);
			if(!all_cat)
			exit;
			while($category=mysqli_fetch_array($all_cat)){

				$sql="SELECT fname,lname,exp,TIMESTAMPDIFF(YEAR, dob, CURDATE()),imge,cat from person WHERE cat = '$category[0]' ORDER BY lname ASC;";
				$result=mysqli_query($db,$sql);
				if(!result)
				echo "Error in query".mysqli_error($db);
				echo "<br /><table class='conf'>";
				echo "<th colspan='6'> $category[0]</th>";
				echo "<tr class='fr'><td>First Name</td><td>Last Name </td><td>Experience</td><td>Age</td><td>Category</td><td>Image</td></tr>";
			
				while($row=mysqli_fetch_array($result))
				{
				/* echo "<tr>First Name</tr><tr>Last Name </tr><tr>Experience</tr><tr>Age</tr><tr>Category</tr><tr>Image</tr>";*/
				 echo "<tr>";
				echo "<td>$row[0]</td>";
				echo "<td>$row[1]</td>";
				echo "<td>$row[2]</td>";
				echo "<td>$row[3]</td>";
				echo "<td>$row[5]</td>";
				 echo "<td><img src=\"$UPLOAD_DIR/$row[4]\""." width='200px' /></td>\n";
				echo "</tr>";
				}
				echo "</table>";
				
			
			}

	
		mysqli_close($db);
		}
?>
		</body>
</html>