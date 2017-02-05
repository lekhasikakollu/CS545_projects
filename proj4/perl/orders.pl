#!/usr/bin/perl  
#	Name : Chandra Srilekha Sikakollu    
#	Account:  jadrn043
#	Red Id: 81911119
#	Course : CS545, Fall 2016,Project 4


use DBI;
use CGI;
use CGI::Cookie;
use Time::Piece;
use Time::Seconds;

$q = new CGI;

my $cookie = $q->cookie(-name=>'jadrn043',-value=>'',-path=>'/');
print $q->header(-cookie=>$cookie);

print <<END_HTML;
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Products in the jadran Database</title>
	<meta http-equiv="content-type" 
		content="text/html;charset=utf-8" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<link rel="stylesheet" href="/~jadrn043/proj4/proj1.css" />	
   
	<link rel="stylesheet" href="/~jadrn043/proj4/proj4.css" />	
   
</head>
<body>
    <div>
		<h1>Order Confirmation</h1>
		<div id="navigation">
        <ul>
			<li><a href="/~jadrn043/proj4/index.html">Home</a></li>
            <li><a href="/~jadrn043/proj4/order.html">Order Online</a></li>
            <li><a href="/~jadrn043/proj4/products.html">Products</a></li>
            <li><a href="/~jadrn043/proj4/about.html">About Us</a></li> 
            <li><a href="/~jadrn043/proj4/contact.html">Contact</a></li>           
            <li><a href="/~jadrn043/proj4/feedback.html">Feedback</a></li>
        </ul>
	</div>
			
END_HTML






my $host = "opatija.sdsu.edu";
my $port = "3306";
my $database = "jadrn043";
my $username = "jadrn043";
my $password = "uphold";
my $database_source = "dbi:mysql:$database:$host:$port";


my $dbh = DBI->connect($database_source, $username, $password) 
or die 'Cannot connect to db';

my %cookies = $ENV{COOKIE};
my ($key, $value);
     
%cookies = CGI::Cookie->fetch;
my $v = $q->cookie('jadrn043');
@rows = split('\|\|',$v);
print "<fieldset class='field'><legend>Cart Details</legend><table class='mycart'>";
print "<tr><th> SKU </th><th> Quantity </th><th> Price</th></td></tr>";
foreach $row (@rows) {
	($sku, $qty,$price) = split('\|',$row);
	print "<tr><td>$sku</td>";
	print "<td>$qty</td>"; 
	print "<td>$price</td><br />"; 
} 

print "</table></fieldset><br/><br/>\n";
print "</div>\n";

# my $t = localtime;
# # $t += ONE_DAY * 14;
# $wanted = $t->strftime('%Y %m %d %X');

# print " v value is $rows[0]";
# my $timeS = '2016-12-14 12:59:59';
# my $dt = DateTime->now;
# my $date = $dt->ymd;
# my $time = $dt->hms;

# my $wanted = "$date $time";

# my $timet = $q->datetime();
	my $query = "INSERT into transactions VALUES(?,?,?)";
	foreach $row (@rows) {
    ($sku, $qty,$price) = split('\|',$row);
	$statement = $dbh->prepare($query);
	#ref: http://man7.org/linux/man-pages/man3/strftime.3.html
	# my $now = strftime "%Y-%m-%d %H:%M:%S", localtime;
	# $sth->bind_param(1, $now, SQL_DATETIME);
	$statement->execute('2016-12-14 12:59:59',$sku,$qty);
	$statement->finish();
}
	$dbh->disconnect();
	print $statement;
	#Displaying shipping details
	print "<fieldset class='field'><legend>Shipping Info</legend><table class='mycart'>";
    print "<tr>\n";
	$fname = $q->param('shipping_fname');
	$lname = $q->param('shipping_lname');
	$areaphn = $q->param('shipping_area_phone');
	$prephn = $q->param('shipping_prefix_phone');
	$phn = $q->param('shipping_phone');
	$sh_add = $q->param('shipping_address');
	$sh_add1 = $q->param('shipping_address1');
	$sh_city = $q->param('shipping_city');
	$sh_state = $q->param('shipping_state');
	$sh_zip = $q->param('shipping_zip');
	
	print "<td>First name : </td>";
	print "<td>$fname</td></tr>";
    
	print "<tr><td>Last name : </td>";
	print "<td>$lname</td></tr>";
    
	print "<tr><td>Contact Phone : </td>";
	print "<td>($areaphn)-$prephn-$phn </td></tr>";
    
	print "<tr><td rowspan='2'>Address : </td>";
	print "<td>$sh_add   $sh_add1</td>";
    
	print "<tr><td>$sh_city , $sh_state-$sh_zip </td></tr>";
    
    
	
print "</table></fieldset>\n";
print "</div>\n";
print "</body>\n";
print "</html>\n";


