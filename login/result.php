<?php 


$email = '';
$password = '';
if(isset($_POST['email'])) {
	$email = $_POST['email'];
}
if(isset($_POST['password'])) {
	$password = $_POST['password'];
}

if ($email == 'hoang@shopstack.asia' && $password == '123123') {
	echo 'login success';
} else {
	echo 'login failed';
}


?>