<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Search</title>
    <link rel="stylesheet" href="assign4.css">
</head>
<body>

<div class="container">
    <h1>Email Search</h1>

    <?php
    // Create an indexed array of emails
    $Email = array(
        "mahesh@gmail.com",
        "dargad@gmail.com"
    );

    // Check if a email exists in the array
        $search_email = $_GET['search_email'];
        $result = in_array($search_email, $Email);
        if ($result) {
            echo "<p>{$search_email} is an System.</p>";
        } else {
            echo "<p class='error-message'>{$search_email} is not found in the list of Emails in SysTem.</p>";
        }
    ?>

    <!-- HTML form for user input -->
    <form method="GET" action="">
        <label for="search_email">Enter Email:</label>
        <input type="text" name="search_email" id="search_email" required>
        <button type="submit">Search</button>
    </form>
</div>
</body>
</html>