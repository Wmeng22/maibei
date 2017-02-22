<?php
    include "DBHelper.php";

	$account = $_POST["account"];
	$password = $_POST["password"];

    $sql = "select * from register where account = '$account' and password = '$password';";
    $array = query($sql);
    if(count($array) > 0){
    	 session_start();
         $_SESSION["account"] =$account;
        echo '{"state": true}';
     
    } else{
        echo '{"state": false, "message": "login fail!"}';       
    }
?>