<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $start_time = $_POST["start_time"];
    $end_time = $_POST["end_time"];
    $hours_worked = $_POST["hours_worked"];
    $rate_per_hour = $_POST["rate_per_hour"];
    $supplier_name = $_POST["supplier_name"];
    $purchase_order = $_POST["purchase_order"];

    // Process the data and generate the DOCKET here
    // You can read your CSV data and create the DOCKET
    // Example: Save the DOCKET to a file or database

    // Redirect back to the form or a thank-you page
    header("Location: index.html");
    exit();
}
?>
