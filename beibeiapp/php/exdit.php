<?php

  include "DBHelper1.php";
  $indexid=$_POST["indexid"];


  $checkSql = "select * from good where indexid = '$indexid';";

 $result = query($checkSql);
  if($result){
      echo '{"state": true,"data": ' . json_encode($result) . '}';
  } else {
      echo '{"state": false, "message": "操作失败!"}';
  }


?>