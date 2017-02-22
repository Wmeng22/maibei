<?php
    include "DBHelper2.php";

    $indexid = $_POST["indexid"];
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


    $sql = "update good set productnum='$productnum',title='$title',src='$src',color='$color',img1='$img1',img2='$img2',img3='$img3',price='$price',adddata='$adddata',issuer='$issuer',size='$size' where indexid='$indexid';";

    $result = excute($sql);
    if($result){
        echo '{"state": true}';
    } else {
        echo '{"state": false, "message": "add fail!"}';
    }

?>