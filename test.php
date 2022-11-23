<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST">
        <input type="email" name="email" />
        <input type="text" name="cne" />
        <input type="submit" name="submit" value="submit"/>
    </form>




    <?php 
include 'data/dbCon.php';

// get data to get club data
if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $cne = $_POST['cne'];

    $sql_check = "SELECT email , cne FROM members WHERE email = '$email' OR cne = '$cne' ";
    $stmt_check = $conn->prepare($sql_check);
    $stmt_check->execute();
    $results = $stmt_check->fetchAll();
    foreach ($results as $key) {
        $is_email = $key["email"];
        $is_cne = $key["cne"];
    }
   

    echo ($is_email) ;
    echo '-----';
    echo '-----';
    echo ($is_cne) ;
    if ($email = $îs_email) {
        echo "email already exist";
    }elseif ($cne = $is_cne) {
        echo "cne already exist";
    }else {
        echo "go go go";
    }
    
}
?>


</body>
</html>
