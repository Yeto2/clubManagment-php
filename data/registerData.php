<?php
include 'dbCon.php';


if(isset($_POST['submit'])){
    $fullname = $_POST['fullname'];
    $classN = $_POST['classN'];
    $email = $_POST['emailRegister'];
    $club = $_POST['clubs'];
    $cne = $_POST['cartNat'];
    $role = "user";

     // insert data to database
    $sql = "INSERT INTO members (fullname, class, email, id_club, cne, role) VALUES (:fullname, :class, :email, :id_club, :cne, :role)";
    $stmt = $conn->prepare($sql);
    $stmt->execute([':fullname' => $fullname, ':class' => $classN, ':email' => $email, ':id_club' =>$club, ':cne' => $cne , ':role' => $role]);

    header ("location: ../index.php?error=account created successfully");
}else{
    header ("location: ../index.php");
}
?>