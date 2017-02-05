/*  
    Name : Chandra Srilekha Sikakollu    
	Account:  jadrn043
	Red Id: 81911119
	Course : CS545, Fall 2016,Project #4
  
*/    

var proj4_data;

$(document).ready(function() {
    proj4_data = new Array();
    $.get('/perl/jadrn043/get_products.cgi', storeData);
	
	var cart = new shopping_cart("jadrn043");
	
	$('#milk').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Milk chocolate") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
    $('#dark').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Dark chocolate") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
	
	$('#nuts').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Nuts and chews") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
	$('#brittle').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Brittles and toffies") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })    
		
	  $('#gift').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Gifts") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })    
		
	$('#hol').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Holiday assortments") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })    
	
	$('#truffle').on('click', function() {
        tmpString = "";
		tmpString +="<table >";
        for(var i=0; i < proj4_data.length; i++) {
			if(proj4_data[i][1] == "Truffles") {
				tmpString +="<tr>";
				tmpString += "<td><img src=\"/~jadrn000/PROJ4_IMAGES/"+
				proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
				" width=\"200px\"  /><br /></td>";   
					tmpString += "<td>Title :"+proj4_data[i][2] +"<br />"+"Description :"+proj4_data[i][3] + "<br />"+"Price :$"+proj4_data[i][6] + "<br /></td>";
					tmpString += "<td>Quantity : <input type='text' class='quantity'  id='qty' name='" + proj4_data[i][0]+"'  /></td></tr>";
					tmpString += "<tr ><td colspan='3'><input type='button' value='Add To Cart' class='buy' id='" + proj4_data[i][0]+"'/></td></tr>";
				    tmpString += "<tr ><td><input type='hidden' value='" + proj4_data[i][6]+"' id='p" + proj4_data[i][0]+"'/></td></tr>";
					
                }	
		}
		tmpString +="</table>";
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })      

	$(document).on('click', '.buy', function() {  
			var sku = this.id;
			var qty=$(this).parent().parent().parent().find("input[name='"+sku+"']").val();
			var price=$(this).parent().parent().parent().find("input[id='p"+sku+"']").val();
			
			if (isInt(qty) && qty > 0) {
				cart.add(sku,qty,price);
			} 
			else {
				$(this).next('Please enter a valid number').fadeIn(50).fadeOut(2000);;
			  }
	updateDisplay();
	});
	
	$(document).on('click', '.deleteButton', function() {  
        var sku = this.id;
	    cart.delete(sku);
		updateDisplay();
    }); 

     
	$(document).on('click','input[name="Cancel2"]',function(e){
		$( this ).dialog( "close" );
	});
    $("#dialog-modal").dialog({
		height: 750,
		width :  800,
		modal : true ,
		autoOpen:false
		/* buttons: [{
        text: "Cancel",
        click: function() {
          $( this ).dialog( "close" );
        }
      }
    ] */
	});
    $(document).on('click', '#order_button',function() {       
            $("#dialog-modal").dialog('open');
            }); 
	$(document).on('click', '#Continue4',function(e) {       
            e.preventDefault();
            isValidForm();
			});

    $( "#success-dialog" ).dialog({
				autoOpen: false,
				width: 400,
				modal: true,
				buttons: [
				  {
					text: "OK",
					click: function() {
					  $( this ).dialog( "close" );
					}
				  }
				]
	});
	
    $(document).on('click', 'input[name="sameasbilling"]', function(){
	
			  //$(document).find('#errors').html('sameasbilling');
			  var check=$(this).is(":checked");
			  if (check) {
				// $(document).find('#errors').html($('select[name="billing_state"]').val());
				
			  $('input[name="shipping_fname"]').val($('input[name="billing_fname"]').val());
			  $('input[name="shipping_mname"]').val($('input[name="billing_mnamename"]').val());
			  $('input[name="shipping_lname"]').val($('input[name="billing_lname"]').val());
			  $('input[name="shipping_address"]').val($('input[name="billing_address"]').val());
			  $('input[name="shipping_address1"]').val($('input[name="billing_address1"]').val());
			  $('input[name="shipping_city"]').val($('input[name="billing_city"]').val());
			  $('input[name="shipping_state"]').val($('select[name="billing_state"] option:selected').text());
			  $('input[name="shipping_zip"]').val($('input[name="billing_zip"]').val());
			  $('input[name="shipping_area_phone"]').val($('input[name="billing_area_phone"]').val());
			  $('input[name="shipping_prefix_phone"]').val($('input[name="billing_prefix_phone"]').val());
			  $('input[name="shipping_phone"]').val($('input[name="billing_phone"]').val());
			}
			else {
			  $('input[name="shipping_fname"]').val('');
			  $('input[name="shipping_lname"]').val('');
			  $('input[name="shipping_address"]').val('');
			  $('input[name="shipping_address2"]').val('');
			  $('input[name="shipping_city"]').val('');
			  $('select[name="shipping_state"]').val('');
			  $('input[name="shipping_zip"]').val('');
			  $('input[name="shipping_area_phone"]').val('');
			  $('input[name="shipping_prefix_phone"]').val('');
			  $('input[name="shipping_phone"]').val('');
			}
	});
       
    function updateDisplay() {
	  
        var cartArray = cart.getCartArray();
        var toWrite = "<fieldset class='field'><legend>Cart</legend><table class='mycart'>";
        toWrite += "<tr><th>SKU</th><th>Quantity</th><th>Price</th></tr>";
        for(i=0; i < cartArray.length; i++) {
		    toWrite += "<tr>";
            toWrite += "<td>"+cartArray[i][0]+"</td>";
            toWrite += "<td>"+cartArray[i][1]+"</td>";
			toWrite += "<td>"+cartArray[i][2]+"</td>";		           			
			toWrite += "<td><img src='images/del.png' id='"+cartArray[i][0]+"' class='deleteButton' width='20px' /> </td>"; 
        }
			toWrite += "</tr>";
			toWrite += "<tr>";
			toWrite += "<td colspan='2'>Estimated Tax (8.0%)</td><td id='mytax'></td></tr>";
			toWrite += "<tr><td colspan='2'>Shipping fee ($2.00/item)</td><td id='shipping'></td></tr>";
			toWrite +="<tr><td colspan='2'>Sub-total</td> <td  id='mytotal'>0</td></tr> ";
			toWrite += "</table></fieldset>"; 
			toWrite +="<input type='button' class='ui-button' name='open_dialog' value='Order Now'  id='order_button' />";         
		
        $('#cart').html(toWrite); 
        $('#count').text(cart.size()); 
		$(document).find('#mytotal').text('$'+(cart.getTotal()).toFixed(2));	
		$(document).find('#shipping').text('$'+cart.getShipping());
        $(document).find('#mytax').text('$'+(cart.getTax()).toFixed(2));			
		
    }   
    function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
    

// Reference : http://www.webmasterworld.com/forum91/3262.htm            
	function explodeArray(item,delimiter) {
		tempArray=new Array(1);
		var Count=0;
		var tempString=new String(item);

		while (tempString.indexOf(delimiter)>0) {
			tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
			tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
			Count=Count+1;
		}

		tempArray[Count]=tempString;
		return tempArray;
	}   

/* logic from https://www.peterbe.com/plog/isint-function */
    function isInt(x) {
		var y = parseInt(x, 10);
		return !isNaN(y) && x == y && x.toString() == y.toString();
	}

	function isValidForm() {
		  $('#dialog-modal #errors').html('');
		  $('#dialog-modal #errors').removeClass('error-msg');

		  var errors = 0;
		  if (!$.trim($('input[name="billing_fname"]').val())) {
			$('#dialog-modal #errors').append('Enter the billing first name<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_lname"]').val())) {
			$('#dialog-modal #errors').append('Enter the billing last name<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_address"]').val())) {
			$('#dialog-modal #errors').append('Enter the billing address<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_city"]').val())) {
			$('#dialog-modal #errors').append('Enter the billing city<br />');
			errors++;
		  }
		  if (!$.trim($('select[name="billing_state"]').val())) {
			$('#dialog-modal #errors').append('Enter the billing state<br />');
			errors++;
		  }
		  if (!$.isNumeric($('input[name="billing_zip"]').val())) {
			$('#dialog-modal #errors').append('Enter a valid billing zip code<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_area_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the area phone code<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_prefix_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the prefix phone <br />');
			errors++;
		  }
		  if (!$.trim($('input[name="billing_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the phone number<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_fname"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping first name<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_lname"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping last name<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_address"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping address<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_city"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping city<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_state"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping state<br />');
			errors++;
		  }
		  if (!$.isNumeric($('input[name="shipping_zip"]').val())) {
			$('#dialog-modal #errors').append('Enter a valid shipping zip code<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_area_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping area phone code<br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_prefix_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping prefix phone <br />');
			errors++;
		  }
		  if (!$.trim($('input[name="shipping_phone"]').val())) {
			$('#dialog-modal #errors').append('Enter the shipping phone number<br />');
			errors++;
		  }
		  
		  if (!$.isNumeric($.trim($('input[name="card_number"]')).val()).length < 16) {
			$('#dialog-modal #errors').append('Enter a valid card number<br />');
			errors++;
		  }
		  if ($.trim($('input[name="exp_year"]').val()).length != 4) {
			$('#dialog-modal #errors').append('Enter a valid expiration date<br />');
			errors++;
		  }
		  
		$('#dialog-modal #errors').addClass('error-msg');

		// $(document).find('#errors').append('form valid');
		if (errors > 0){
			return false;
		}
	$('#checkout').submit();
  
	}

});
