<?php
    include "DBHelper.php";
   $sql="select * from orderlist;";
   $result = query($sql);


    if(count($result) > 0){
        echo '{"state": true,"data": ' . json_encode($result) . '}';

    } else{
        echo '{"state": false, "message": "加载失败!"}';
    }

?>