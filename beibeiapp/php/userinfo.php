<?php
	include "DBHelper.php";

//	session_start();

	$oldpassword = $_POST["oldpassword"];
	$password = $_POST["password"];
	$phone = $_POST["phone"];
	$account = $_POST["account"];
	$email = $_POST["email"];

	$sql = "select * from register where account = '$account'";
	$result = query($sql);
	if(count($result) > 0){
		if($result[0]->password == $oldpassword){
			//执行修改操作
			$update = "update register set password = '$password', phone = '$phone', email='$email' where account = '$account'";
			if(excute($update)){
				echo "{state: true, message: '修改成功！！'}";
			} else {
				echo "{state: false, message: '修改失败！！'}";
			}
		} else {
			echo "{state: false, message: '旧密码不正确！'}";
		}
	} else {
		echo "{state: false, message: '当前操作无效！！'}";
	}

	
?>