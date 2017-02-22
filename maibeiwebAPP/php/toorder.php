<?php
    include "DBHelper3.php";

    $title=$_POST["title"];
    $num=$_POST["num"];
    $price = $_POST["price"];
    $src = $_POST["src"];
    $Color = $_POST["Color"];
    $Size = $_POST["Size"];

    $sql = "insert into orderlist(title,price,src,Color,Size,num) values('$title','$price','$src','$Color','$Size','$num');";
    $result = excute($sql);
    if($result){
        echo '{"state": true}';
    } else {
        echo '{"state": false, "message": "操作失败!"}';
    }
?>