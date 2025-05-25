<?php
session_start();
if (isset($_POST['answer3'])) {
    $_SESSION['answer3'] = $_POST['answer3'];
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Тестирование - Вопрос 4</title>
</head>
<body>
    <h1>Тестирование по программированию</h1>
    <h2>Вопрос 4 из 5</h2>
    <p>Какой метод HTTP используется для отправки данных формы?</p>
    <form action="test5.php" method="post">
        <input type="radio" name="answer4" value="GET"> GET<br>
        <input type="radio" name="answer4" value="POST"> POST<br>
        <input type="radio" name="answer4" value="PUT"> PUT<br>
        <input type="radio" name="answer4" value="DELETE"> DELETE<br>
        <input type="submit" value="Далее">
    </form>
</body>
</html>