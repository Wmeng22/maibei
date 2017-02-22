<?php

    include "DBHelper.php";
    // $indexid = $_POST["indexid"];
    $sql="select * from shopcar ;";
    $result = query($sql);
    if(count($result) > 0){
        echo  json_encode($result);

    } else{
        echo '{"state": false, "message": "login fail!"}';
    }


?>