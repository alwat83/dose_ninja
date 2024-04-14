<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>doseninja</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .header {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }

        .content {
            max-width: 800px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
        }

        .search-box {
            text-align: center;
            margin-top: 20px;
        }

        .search-input {
            width: 60%;
            padding: 10px;
            border: 2px solid #333;
            border-radius: 5px;
            font-size: 16px;
        }

        .search-button {
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>doseninja</h1>
    </div>
    <div class="content">
        <div class="search-box">
            <form method="get" action="search.php">
                <input type="text" name="query" class="search-input" placeholder="Search...">
                <button type="submit" class="search-button">Search</button>
            </form>
        </div>
    </div>
</body>
</html>
