<?php

function validate_data($params) {
	$db = get_db_handle(); 
    $msg = "";
    if(strlen($params[0]) == 0)
        $msg .= "Enter first name"; 	
	if(strlen($params[2]) == 0)
        $msg .= ",last name";
	if(strlen($params[3]) == 0)
        $msg .= ",address"; 
    if(strlen($params[5]) == 0)
        $msg .= ",city"; 
    if(strlen($params[6]) == 0)
        $msg .= ",state";   
	if(strlen($params[7]) == 0)
        $msg .= ",zip code";
    elseif(!is_numeric($params[7])) 
        $msg .= "Zip code may contain only numeric digits<br />";
	if(strlen($params[8]) == 0)
        $msg .= ",area code";
    elseif(!is_numeric($params[8])) 
        $msg .= "Area code may contain only numeric digits<br />";
		elseif(strlen($params[8]) !=3)
		$msg .= "The area code contains only 3 digits<br />";		
		if(strlen($params[9]) == 0)
        $msg .= ",prefix phone";
    elseif(!is_numeric($params[9])) 
        $msg .= "Prefix phone may contain only numeric digits<br />";
	elseif(strlen($params[9]) !=3)
		$msg .= "The prefix contains only 3 digits<br />";
	if(strlen($params[10]) == 0)
        $msg .= ",phone number";
    elseif(!is_numeric($params[10])) 
        $msg .= "Phone number may contain only numeric digits<br />";
		elseif(strlen($params[10]) !=4)
		$msg .= "The phone number contains only 4 digits<br />";		
	if(strlen($params[11]) == 0)
        $msg .= ",email<br />";
    elseif(!filter_var($params[11], FILTER_VALIDATE_EMAIL))
        $msg .= "Your email appears to be invalid<br/>";        
	//http://www.w3resource.com/php/function-reference/isset.php
	if(!isset($params[12])){
		$error_msg[] = "No gender was selected.";
	}
	if(strlen($params[13]) == 0)
        $msg .= "Please enter the month of DOB <br />";
    elseif(!is_numeric($params[13])) 
        $msg .= "Month may contain only numeric digits<br />";
		elseif($params[13]>12){
			$msg .= "Please enter a valid month<br />";
		}
	if(strlen($params[14]) == 0)
        $msg .= "Please enter the day of DOB <br />";
    elseif(!is_numeric($params[14])) 
        $msg .= "Date may contain only numeric digits<br />";
		elseif($params[14] >31){
			$msg .= "Please enter a valid date<br />";
		}
	elseif(($params[13]==2) && ($params[14]==30 )){
			$msg .= "Please enter a valid date<br />";
		}
	if(strlen($params[15]) == 0)
        $msg .= "Please enter the year of DOB <br />";
    elseif(!is_numeric($params[15])) 
        $msg .= "Year may contain only numeric digits<br />";
		elseif((2016-$params[14])>94 )
			$msg .= "Sorry, Max age = 75";
		elseif((2016-$params[14])<18){
			$msg .= "Sorry,  Min age = 18 <br />";
		if(!isset($params[17])){
		$msg = "No experience level was selected.";
	}
	if(!isset($params[18])){
		$msg = "No category was selected.";
	}
	
	$email =$params[11];
	$sql = "select * from person where email='$email';";
	mysqli_query($db, $sql);
	$how_many = mysqli_affected_rows($db);
	
	if($how_many > 0){
		$msg="$params[1] , duplicate entry found. Please check your details!";
	}
	if($msg) {
        write_form_error_page($msg);
        exit;
        }      
    }
}
	

	function write_form_error_page($msg) {
    write_header();
    echo  "<h1 class='heading'>Enrollment form</h1>";
	echo "<h2>Sorry, an error occurred<br />",
    $msg,"</h2>";
	write_form();
    write_footer();
    }  
    
function write_form() {
    print <<<ENDBLOCK
	<div class="mymain">
        <fieldset class="field">
        <legend>Personal Information</legend>
        <form action="/~jadrn043/proj3/process_request.php" name="personal_info"   enctype="multipart/form-data" id="signUpForm" method="post" >
        <ul>				
					<li><label for="fname">First Name</label>
            		<input type="text" name="fname" value="$_POST[fname]" id="fname" size="25" autofocus /></li> 
					<li><label for="mname">Middle Name </label>
					<input type="text" name="mname" value="$_POST[mname]" id="mname" /></li>				
					<li><label for="lname">Last Name</label>
					<input type="text" name="lname" value="$_POST[lname]" id="lname" size="25" /></li> 
					<li><label for="address">Address</label>
					<input type="text" name="address" value="$_POST[address]" id="address" size="55" /></li> 
					<input type="text" name="address1" value="$_POST[address1]" size="55" />		
					<li><label for="city">City</label>
					<input type="text" name="city" value="$_POST[city]"  id="city" size="25" /> 
					<label for="state">&nbsp;State&nbsp;</label>
					<input type="text" name="state" value="$_POST[state]"  id="state" size="3" />      
					<label for="zip">Zip Code</label>
					<input type="text" name="zip" id="zip" value="$_POST[zip]" size="10" maxlength="10" /></li>      
					<li><label for="area_phone">Primary Phone</label>
					(<input type="text" name="area_phone"  value="$_POST[area_phone]" id="area_phone" size="4" maxlength="3" />)
					<input type="text" name="prefix_phone" value="$_POST[prefix_phone]" size="4" maxlength="3" />
					<input type="text" name="phone" size="5" value="$_POST[phone]" maxlength="4" /></li> 
					<li><label for="email">Email</label>
					<input type="text" name="email" value="$_POST[email]" id="email" size="25" /></li>         		
					<li><label>Gender&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
					
ENDBLOCK;
 			$gender_choice = array("Male","Female");
            foreach($gender_choice as $item) {
            echo "<label>$item</label> <input type='radio' name='gender' id='gender'  value='$item'";
            if($item == $_POST[gender])
                echo " checked='checked'";
                echo " />";
            }            
            echo "<br />";
                                                                                                                                                                                    
print <<<ENDBLOCK
			</li>
			<li><label> Date of Birth&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<input type="text" name="month" value='$_POST[month]' size="3" maxlength="2" />
			<input type="text" name="day" value="$_POST[day]" size="3" maxlength="2" />
			<input type="text" name="year" value="$_POST[year]" size="4" maxlength="4" /></li>
			<li><label>Medical Conditions</label>
			<textarea cols="5" rows="1" name="med" value="$_POST[med]" ></textarea></li>
			<li><label>Experience Level&nbsp;&nbsp;&nbsp;&nbsp;</label>
ENDBLOCK;
										
			$exp_choice = array("Expert","Experienced","Novice");
            foreach($exp_choice as $item) {
            echo "<label>$item</label> <input type='radio' name='exp'  value='$item'";
            if($item == $_POST['exp'])
            echo " checked='checked'";
            echo " />";
            }            
            echo "<br />";
	
print <<<ENDBLOCK
			</li>	
			<li><label>Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
ENDBLOCK;
	
			$cat_choice = array("Teen","Adult","Senior");
			foreach($cat_choice as $item) {
			echo "<label>$item</label><input type='radio' name='cat'  value='$item'";
			if($item == $_POST['cat'])
			echo " checked='checked'";
			echo " />";
					}            
print <<<ENDBLOCK
			<input type="hidden" name="MAX_FILE_SIZE" value="100000" />
			<li><label for="file">Upload Image &nbsp;</label>
							<input type="file" name="file" id="file" /></li> 
			</ul>
        <div id="message_line">&nbsp;</div>
        <div>  
            <input type="reset" value="Clear Data" class="button" />
            <input type="submit" value="Submit Data"  class="button" /> 
        </div>                      
        </form>
		</fieldset>
        
    </div>
             
ENDBLOCK;

}                     

/* function write_footer() {
    echo "</body></html>";
    }
	 */
function process_parameters() {
	$UPLOAD_DIR = 'lekim_ges/';
    $COMPUTER_DIR = '/home/jadrn043/public_html/proj3/lekim_ges/';
   /*  $iname = $_FILES['pic']['name'];
    */ 
	global $bad_chars;
    $params = array();
    $params[] = trim(str_replace($bad_chars, "",$_POST['fname']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['mname']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['lname']));
	
    $params[] = trim(str_replace($bad_chars, "",$_POST['address']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['address1']));
	
    $params[] = trim(str_replace($bad_chars, "",$_POST['city']));
	
    $params[] = trim(str_replace($bad_chars, "",$_POST['state']));
	
    $params[] = trim(str_replace($bad_chars, "",$_POST['zip']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['area_phone']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['prefix_phone']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['phone']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['email']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['gender']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['month']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['day']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['year']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['med']));
	
	$params[] = trim(str_replace($bad_chars, "",$_POST['exp']));
	$params[] = trim(str_replace($bad_chars, "",$_POST['cat']));
	$params[] = $_FILES['file']['name'];
    return $params;
    }
	
    function upload_image(){
		$UPLOAD_DIR = 'lekim_ges/';
    $COMPUTER_DIR = '/home/jadrn043/public_html/proj3/lekim_ges/';
    $iname = $_FILES['file']['name'];
    

    if(file_exists("$UPLOAD_DIR".$iname))  {
        echo "<b>Error, the file $iname already exists on the server</b><br />\n";
		
        }
    elseif($_FILES['file']['error'] > 0) {
    	$err = $_FILES['file']['error'];	
		echo "Error Code: $err ";
	if($err == 1)
		echo "The file was too big to upload, the limit is 2MB<br />";
        
		} 
    elseif(exif_imagetype($_FILES['file']['tmp_name']) != IMAGETYPE_JPEG ) {
        echo "ERROR, not a jpg file<br />";   
		return 0;
        }
## file is valid, copy from /tmp to your directory.        
    else { 
        move_uploaded_file($_FILES['file']['tmp_name'], "$UPLOAD_DIR".$iname);
        /* echo "Success!</br >\n";
        echo "The filename is: ".$iname."<br />";
        echo "The type is: ".$_FILES['file']['type']."<br />";
        echo "The size is: ".$_FILES['file']['size']."<br />";
        echo "The tmp filename is: ".$_FILES['file']['tmp_name']."<br />";  
        echo "The basename is: ".basename($iname)."<br />";   */
		return 1;
	} 
    
    
	}
	function display_image(){
		$UPLOAD_DIR = 'lekim_ges/';
		$COMPUTER_DIR = '/home/jadrn043/public_html/proj3/lekim_ges/';
		$iname = $_FILES['file']['name'];
   
		$d = dir($COMPUTER_DIR.'/');
		while($iname = $d->read()) {
        $data[$iname] = $iname;
        }
    foreach($data as $iname => $fvalue) {
        if($iname == "." || $iname == "..") {
            ;
            }
        else {
			
            echo "<img src=\"$UPLOAD_DIR/$iname\""." width='200px' class='dis'/>\n";
        }
    }    
		
	}
function store_data_in_db($params) {
        # get a database connection
    $db = get_db_handle();  ## method in helpers.php
	$p=$params[8].$params[9].$params[10];
	$y=$params[15]."-".$params[13]."-".$params[14];
   $rep=1;
$sql = "SELECT * FROM person WHERE ".
    "fname='$params[0]' AND ".
    "mname = '$params[1]' AND ".
    "lname  = '$params[2]' AND ".
    "address = '$params[3]' AND ".
    "address1 = '$params[4]' AND ".
	"city='$params[5]' AND ".
	"state='$params[6]' AND ".
	"zip='$params[7]' AND ".
	"email='$params[11]' AND ".
	"phone='$p' AND ".
	"gender='$params[12]' AND ".
	"dob='$y' AND ".
	"medical='$params[16]' AND ".
	"exp='$params[17]' AND ".
	"cat='$params[18]' AND ".
    "imge = '$params[19]';";
##echo "The SQL statement is ",$sql;    
    
	$result = mysqli_query($db, $sql);
    if(mysqli_num_rows($result) > 0){ 
        write_error_page('This record appears to be a duplicate');
        exit;
}
##OK, duplicate check passed, now insert
    
		$sql = "INSERT INTO person(fname,mname,lname,address,address1,city,state,zip,email,phone,gender,dob,medical,exp,cat,imge) ".
    "VALUES('$params[0]','$params[1]','$params[2]','$params[3]','$params[4]','$params[5]','$params[6]','$params[7]','$params[11]','$p','$params[12]','$y','$params[16]','$params[17]','$params[18]','$params[19]');";
##echo "The SQL statement is ",$sql;    
    mysqli_query($db,$sql);
    $how_many = mysqli_affected_rows($db);
	/* $myerr=mysqli_error($db);
    echo("Error is : $myerr "); */
	if($how_many)
	$reply=upload_image();
/* if($reply){
display_image(); */
	
    close_connector($db);


	
}       
?>   