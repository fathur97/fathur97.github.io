<?php 
    date_default_timezone_set('Asia/Jakarta');
    include 'dbh.inc.php';
    include 'comments.inc.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
<link rel="stylesheet"type="text/css" href="style.css">
<body>
<?php
    echo "<form method='POST' action='".setComments($conn)."'>
            <input type='hidden' name='uid' value='Anonymous'><br>
            <input type='hidden' name='date' value='".date('Y-m-d H:i:s')."'><br>
            <textarea name='message'></textarea><br>
            <button type='submit' name='commentSubmit'>Comment</button>
          </form>";

getComments($conn);
?>
</body>
</html>