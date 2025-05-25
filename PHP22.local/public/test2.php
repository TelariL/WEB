<?php
session_start();
if (isset($_POST['answer1'])) {
    $_SESSION['answer1'] = $_POST['answer1'];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Тестирование - Вопрос 2</title>
</head>
<body>
    <h1>Тестирование по программированию</h1>
    <h2>Вопрос 2 из 5</h2>
    <p>Что выведет код: echo 5 * 5; в PHP?</p>
    <form action="test3.php" method="post">
        <input type="text" name="answer2"><br>
        <input type="submit" value="Далее">
    </form>
</body>
</html>