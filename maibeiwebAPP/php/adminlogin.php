<?php
    include "DBHelper.php";

    $email = $_POST["email"];
    $password = $_POST["password"];

    $sql = "select * from adminlogin where email = '$email' and password = '$password';";
    $array = query($sql);
    if(count($array) > 0){
         // session_start();
         // $_SESSION["account"] =$account;
        echo '{"state": true}';

    } else{
        echo '{"state": false, "message": "login fail!"}';
    }
?>