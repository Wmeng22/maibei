<?php

  include "DBHelper1.php";
  $indexid=$_POST["indexid"];

  $sql="select * from shopcar where indexid = '$indexid';";
  $checkSql = "delete from shopcar where indexid = '$indexid';";
  $array = query($sql);
    if(count($array) > 0){
       $result = excute($checkSql);
        if($result){
            echo '{"state": true,"message": "删除成功!"}';
        } else {
            echo '{"state": false, "message": "操作失败!"}';
        }

    } else{
        echo '{"state": false, "message": "email already exists!"}';
    }

?>