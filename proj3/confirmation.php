<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">


<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html;
    charset=iso-8859-1" />
    <title>Registration Successful</title>

   <link rel="stylesheet" type="text/css" href="proj31.css" />
        <script type="text/javascript" src="http://jadran.sdsu.edu/jquery/jquery.js"></script>        
        
</head>


<body>
<?php

	
echo <<<ENDBLOCK
    <h1>Thank you for registering,$params[0] !</h1>
	<a href='index.html' class='go'>Home </a>
	 <table class="conf">
        <tr>
            <td>Address</td>
            <td>$params[3]</td>
        </tr>
        <tr>
            <td>City</td>
            <td>$params[5]</td>
        </tr>
        <tr>
            <td>State</td>
            <td>$params[6]</td>
        </tr>
        <tr>
            <td>Zip Code</td>
            <td>$params[7]</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>$params[11]</td>
        </tr>    
	
    </table>                          
ENDBLOCK;
/* echo "<p>The raw query string that came from the browser is ",
    file_get_contents("php://input"),"</p>"; */

	
?>
</body></html>