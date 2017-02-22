<?php
    include "DBHelper.php";
    
    $account=$_POST["account"];
    $phone = $_POST["phone"];
	$password = $_POST["password"];
	$email = $_POST["email"];
	
	$sql = "insert into register(account,phone,password,email) values('$account','$phone','$password','$email');";
    $checkSql = "select * from register where account = '$account';";
	$array = query($checkSql);
    if(count($array) > 0){
        echo '{"state": false, "message": "email already exists!"}';
    } else{
        $result = excute($sql);
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "register fail!"}';
        }        
    }
?>