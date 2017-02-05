 function isEmpty(fieldValue) {
        return $.trim(fieldValue).length == 0;    
        } 
        
    function isValidState(state) {                                
        var stateList = new Array("AK","AL","AR","AZ","CA","CO","CT","DC",
        "DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA",
        "MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ",
        "NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX",
        "UT","VA","VT","WA","WI","WV","WY");
        for(var i=0; i < stateList.length; i++) 
            if(stateList[i] == $.trim(state))
                return true;
        return false;
        }  
        
    // copied from stackoverflow.com, not checked or validated for correctness.        
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);s
        }                
                   
 $(document).ready( function() {
	
	/*$(':submit').on('click', function(e) {
        e.preventDefault();
        var params = "email="+$('#email').val();
        var url = "check_dup.php?"+params;
        $.get(url, dup_handler);
        }); */
    
	
	var errorStatusHandle = $('#message_line');
    var elementHandle = new Array(10);
    elementHandle[0] = $('[name="fname"]');
    elementHandle[1] = $('[name="lname"]');
    elementHandle[2] = $('[name="address"]');
    elementHandle[3] = $('[name="city"]');
    elementHandle[4] = $('[name="state"]');
    elementHandle[5] = $('[name="zip"]');
    elementHandle[6] = $('[name="area_phone"]');
    elementHandle[7] = $('[name="prefix_phone"]');
    elementHandle[8] = $('[name="phone"]');
    elementHandle[9] = $('[name="email"]');
         
    function isValidData() {
        if(isEmpty(elementHandle[0].val())) {
            elementHandle[0].addClass("error");
            errorStatusHandle.text("Please enter your first name");
            elementHandle[0].focus();
            return false;
            }
        if(isEmpty(elementHandle[1].val())) {
            elementHandle[1].addClass("error");
            errorStatusHandle.text("Please enter your last name");
            elementHandle[1].focus();            
            return false;
            }
        if(isEmpty(elementHandle[2].val())) {
            elementHandle[2].addClass("error");
            errorStatusHandle.text("Please enter your address");
            elementHandle[2].focus();            
            return false;
            }
        if(isEmpty(elementHandle[3].val())) {
            elementHandle[3].addClass("error");
            errorStatusHandle.text("Please enter your city");
            elementHandle[3].focus();            
            return false;
            }
        if(isEmpty(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("Please enter your state");
            elementHandle[4].focus();            
            return false;
            }
        if(!isValidState(elementHandle[4].val())) {
            elementHandle[4].addClass("error");
            errorStatusHandle.text("The state appears to be invalid, "+
            "please use the two letter state abbreviation");
            elementHandle[4].focus();            
            return false;
            }
        if(isEmpty(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("Please enter your zip code");
            elementHandle[5].focus();            
            return false;
            }
        if(!$.isNumeric(elementHandle[5].val())) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The zip code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[5].focus();            
            return false;
            }
        if(elementHandle[5].val().length != 5) {
            elementHandle[5].addClass("error");
            errorStatusHandle.text("The zip code must have exactly five digits")
            elementHandle[5].focus();            
            return false;
            }
        if(isEmpty(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("Please enter your area code");
            elementHandle[6].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[6].val())) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The area code appears to be invalid, "+
            "numbers only please. ");
            elementHandle[6].focus();            
            return false;
            }
        if(elementHandle[6].val().length != 3) {
            elementHandle[6].addClass("error");
            errorStatusHandle.text("The area code must have exactly three digits")
            elementHandle[6].focus();            
            return false;
            }   
        if(isEmpty(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("Please enter your phone number prefix");
            elementHandle[7].focus();            
            return false;
            }           
        if(!$.isNumeric(elementHandle[7].val())) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number prefix appears to be invalid, "+
            "numbers only please. ");
            elementHandle[7].focus();            
            return false;
            }
        if(elementHandle[7].val().length != 3) {
            elementHandle[7].addClass("error");
            errorStatusHandle.text("The phone number prefix must have exactly three digits")
            elementHandle[7].focus();            
            return false;
            }
        if(isEmpty(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("Please enter your phone number");
            elementHandle[8].focus();            
            return false;
            }            
        if(!$.isNumeric(elementHandle[8].val())) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number appears to be invalid, "+
            "numbers only please. ");
            elementHandle[8].focus();            
            return false;
            }
        if(elementHandle[8].val().length != 4) {
            elementHandle[8].addClass("error");
            errorStatusHandle.text("The phone number must have exactly four digits")
            elementHandle[8].focus();            
            return false;
            }  
        if(isEmpty(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("Please enter your email address");
            elementHandle[9].focus();            
            return false;
            }            
        if(!isValidEmail(elementHandle[9].val())) {
            elementHandle[9].addClass("error");
            errorStatusHandle.text("The email address appears to be invalid,");
            elementHandle[9].focus();            
            return false;
            }                                                                       
        return true;
        }       

   elementHandle[0].focus();
   
   
/////// HANDLERS

// on blur, if the user has entered valid data, the error message
// should no longer show.
    elementHandle[0].on('blur', function() {
        if(isEmpty(elementHandle[0].val()))
            return;
        $(this).removeClass("error");
		
        errorStatusHandle.html("&nbsp");
        });
              

    elementHandle[4].on('keyup', function() {
        elementHandle[4].val(elementHandle[4].val().toUpperCase());
        });
        
    elementHandle[6].on('keyup', function() {
        if(elementHandle[6].val().length == 3)
            elementHandle[7].focus();
            });
            
    elementHandle[7].on('keyup', function() {
        if(elementHandle[7].val().length == 3)
            elementHandle[8].focus();
            });            

   elementHandle[13].on('keyup', function() {
        if(elementHandle[13].val().length == 2)
            elementHandle[7].focus();
            });
            
    elementHandle[14].on('keyup', function() {
        if(elementHandle[14].val().length == 2)
            elementHandle[15].focus();
            });  
			
    $(':submit').on('click', function() {
        for(var i=0; i < 10; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        return isValidData();
        });
        
    $(':reset').on('click', function() {
        for(var i=0; i < 10; i++)
            elementHandle[i].removeClass("error");
        errorStatusHandle.text("");
        });                                       
});

