/*  
    Name : Chandra Srilekha Sikakollu    
	Account:  jadrn043
	Red Id: 81911119
	Course : CS545, Fall 2016,Project #4
  
*/


function shopping_cart(owner) {
    this.owner = $.trim(owner);
    this.skuArray = new Array();
    this.qtyArray = new Array();
	this.priceArray = new Array();

/////////////////////////////////////////////////////////////./////////////
// Do not use the following two methods;  they are private to this class
    this.getCookieValues = function() {  // PRIVATE METHOD
        var raw_string = document.cookie;        
        var arr = new Array();
        if(raw_string == undefined)
            return;
        var tmp = raw_string.split(";");
        var myValue = null;        
        for(i=0; i < tmp.length; i++)
            if(tmp[i].indexOf(owner) != -1)
                myValue = tmp[i].split("=");
        if(!myValue)
            return;
        arr = myValue[1].split("||");
        for(i=0; i < arr.length; i++) {
            var pair = arr[i].split("|"); 
            if(pair[0] == undefined || pair[1] == undefined|| pair[2] == undefined) continue;
            this.skuArray[i] = pair[0];
            this.qtyArray[i] = pair[1];
			this.priceArray[i] =pair[2];
            }         
        }
        
    this.writeCookie = function() {  // PRIVATE METHOD
        var toWrite = this.owner+"=";
        for(i=0; i < this.skuArray.length; i++) 
            toWrite += this.skuArray[i] + "|" + this.qtyArray[i]+ "|" + this.priceArray[i] + "||";
        toWrite = toWrite.substring(0,toWrite.length - 2);
        toWrite += "; path=/";
        document.cookie = toWrite;
        }
//////////////////////////////////////////////////////////////////////////            
        
    this.add = function(sku, quantity,price) {
        sku = $.trim(sku);
        quantity = $.trim(quantity);
		price = $.trim(price);
		
        this.getCookieValues(); 
        var found = false;
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku) {        
            this.qtyArray[i] = parseInt(quantity,10) + parseInt(this.qtyArray[i],10);
            this.priceArray[i] = parseFloat(price);
			found = true;            
            }
        if(!found) {   
			  this.skuArray.push(sku);
            this.qtyArray.push(quantity);
			this.priceArray.push(price);
           
            }
        this.writeCookie();         
    }
    
    
    this.delete = function(sku) {
        sku = $.trim(sku);
        var index = -1;
        this.getCookieValues();       
        for(i=0; i < this.skuArray.length; i++)
        if(this.skuArray[i] == sku)  
            index = i;               
        if(index != -1) { 
			
            this.skuArray.splice(index,1);
            this.qtyArray.splice(index,1);
			this.priceArray.splice(index,1);
            }         
        if(this.skuArray.length == 0) {
            document.cookie = this.owner + "= ;expires=-1;path=/";
            }
        else
            this.writeCookie();
        }
        
    this.size = function() {
        this.getCookieValues();
        var count = 0;
        for(i=0; i < this.qtyArray.length; i++)
            count += parseInt(this.qtyArray[i],10);
        return count;
        } 	
		
	this.getTotal = function() {
        this.getCookieValues();
        var total = 0;
		var qty=this.qtyArray.length;
		var sub=0;
        for(i=0; i < this.qtyArray.length; i++){
            total += (parseFloat(this.qtyArray[i])) *  (parseFloat(this.priceArray[i]));
		}
		// total=parseFloat(total).toFixed(2);
		sub=parseFloat(total)*1.08;
		return (2*qty)+sub;
        }

	this.getShipping = function() {
        this.getCookieValues();
 		var qty=this.qtyArray.length;
        	// $(document).find('#test').append('atship');
			return 2*qty;
        }
	
	this.getTax = function() {
        this.getCookieValues();
        var total = 0;
        var tax=0;
		for(i=0; i < this.qtyArray.length; i++){
            total += (parseFloat(this.qtyArray[i])) *  (parseFloat(this.priceArray[i]));
		}
		// $(document).find('#test').append('attax');
		tax=parseFloat(total)*0.08;
		return tax;
	}
		
    this.getCartArray = function() {
        this.getCookieValues();
        var returnArray = new Array();
        for(i=0; i < this.skuArray.length; i++) {
            returnArray[i] = new Array();
            returnArray[i].push(this.skuArray[i]);
            returnArray[i].push(this.qtyArray[i]);
			returnArray[i].push(this.priceArray[i]);
            }
        return returnArray;
        }                    
   
}


