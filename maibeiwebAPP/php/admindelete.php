<?php

  include "DBHelper1.php";
  $indexid=$_POST["indexid"];


  $checkSql = "delete from good where indexid = '$indexid';";

 $result = excute($checkSql);
  if($result){
      echo '{"state": true，"message": "删除成功!"}';
  } else {
      echo '{"state": false, "message": "操作失败!"}';
  }


?>