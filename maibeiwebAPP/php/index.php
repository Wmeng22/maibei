<?php
   include "DBHelper.php";
   $sql="select * from product;";
   $result = query($sql);


    if(count($result) > 0){
        echo '{"state": true,"data": ' . json_encode($result) . '}';

    } else{
        echo '{"state": false, "message": "login fail!"}';
    }
?>