<?php

    include "DBHelper.php";
    $indexid = $_POST["indexid"];
    $sql="select * from good where indexid = '$indexid';";
    $result = query($sql);
    if(count($result) > 0){
        echo '{"state": true,"data": ' . json_encode($result) . '}';

    } else{
        echo '{"state": false, "message": "login fail!"}';
    }


?>