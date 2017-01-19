<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
    $q = intval($_GET['q']);

    $con = mysqli_connect('localhost','alex','abc123','my_db');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,"radio_station");
    $sql="SELECT * FROM user WHERE id = '".$q."'";
    $result = mysqli_query($con,$sql);

    echo "<table><th><tr>Hello!</tr></th>";
    while($row = mysqli_fetch_array($result)) {
        echo "<tr>";
        echo "<td>" . $row['tunername'] . "</td>";
        echo "</tr>";
        echo "<tr>";
        echo "<td>" . $row['tuner'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
    mysqli_close($con);
?>
<!--
    
The database table we use in the example above looks like this:

id  FirstName   LastName    Age Hometown    Job
1   Peter   Griffin 41  Quahog  Brewery
2   Lois    Griffin 40  Newport Piano Teacher
3   Joseph  Swanson 39  Quahog  Police Officer
4   Glenn   Quagmire    41  Quahog  Pilot


-->
</body>
</html>