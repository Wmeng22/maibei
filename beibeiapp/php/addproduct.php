<?php
    include "DBHelper2.php";

    $productnum = $_POST["productnum"];
    $title = $_POST["title"];
    $src = $_POST["src"];
    $color = $_POST["color"];
    $img1 = $_POST["img1"];
    $img2 = $_POST["img2"];
    $img3 = $_POST["img3"];
    $price = $_POST["price"];
    $adddata = $_POST["adddata"];
    $issuer = $_POST["issuer"];
    $size = $_POST["size"];


    $sql = "insert into good(productnum,title,src,color,img1,img2,img3,price,adddata,issuer,size) values('$productnum','$title','$src','$color','$img1','$img2','$img3','$price','$adddata','$issuer','$size');";
    $checkSql = "select * from good where productnum = '$productnum';";
    $array = query($checkSql);
    if(count($array) > 0){
        echo '{"state": false, "message1": "productnum already exists!"}';
    } else{
        $result = excute($sql);
        if($result){
            echo '{"state": true}';
        } else {
            echo '{"state": false, "message": "add fail!"}';
        }
    }
?>