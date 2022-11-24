<?php
    include 'dbCon.php';

if (isset($_POST['login'])) {
    
    $email = $_POST['user'];
    $cne = $_POST['cneLog'];



    $sql_check = "SELECT email , cne , role FROM members WHERE email=? AND cne =? ";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->execute([$email,$cne]);
    $results = $stmt_check->fetchAll();

if ($results) {
    session_start();
    
    // Set session variables
    $_SESSION["email"] = $results[0][0];
    $_SESSION["role"]  = $results[0][2];
    
    if ($_SESSION["role"] === "super_admin") {
        header ("location: ../pages/super_admin.php");
    }elseif ($_SESSION["role"] === "admin") {
        header ("location: ../pages/admin.php");
    }
    elseif ($_SESSION["role"] === "user") {
        header ("location: ../pages/user.php");
    }else{
    header ("location: ../index.php?error=Something Went Wrong");
    }

}else {
    header ("location: ../index.php?error=Email Or Cne not Corect");
}




}

?>