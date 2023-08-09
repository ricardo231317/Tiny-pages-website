<?php
// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Connect to database 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "my_contact.sql";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $projectType = $_POST['project-type'];
    $message = $_POST['msg'];

    // Prepare and execute the SQL query
    $sql = "INSERT INTO contacts (name, email, project_type, message) VALUES ('$name', '$email', '$projectType', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
