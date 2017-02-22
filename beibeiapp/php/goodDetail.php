<?php
    include "DBHelper.php";

    $title=$_POST["title"];
    $goodnum=$_POST["goodnum"];
    $price = $_POST["price"];
	$src = $_POST["src"];
    $Color = $_POST["Color"];
    $Size = $_POST["Size"];
    $num = $_POST["number"];
	$sql = "insert into shopcar(goodnum,title,price,src,Color,Size,num) values('$goodnum','$title','$price','$src','$Color','$Size','$num');";
	$result = excute($sql);
    if($result){
        echo '{"state": true}';
    } else {
        echo '{"state": false, "message": "操作失败!"}';
    }
?>